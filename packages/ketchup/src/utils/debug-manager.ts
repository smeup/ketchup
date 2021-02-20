declare global {
    interface HTMLElement {
        kupDebug: boolean;
    }
}

const dom = document.documentElement;
/**
 * Displays a timestamped message in the browser's console.
 *
 * @param comp - The component calling this function or a string.
 * @param message - The actual message that will be printed.
 * @param type - The type of console message, defaults to "log" but "warning" and "error" can be used as well.
 */
export function logMessage(comp: any, message: string, type?: string) : void {
    if ((!type || type === 'log') && !document.documentElement['kupDebug']) {
        return;
    }
    let obj: object | string = undefined;
    let id: string = '';
    if (comp.rootElement) {
        id =
            ' ' + comp.rootElement.tagName + '#' + comp.rootElement.id + ' => ';
        obj = comp;
    } else {
        id = ' ' + comp + ' => ';
        obj = '';
    }
    var d = new Date(),
        minutes =
            d.getMinutes().toString().length == 1
                ? '0' + d.getMinutes()
                : d.getMinutes(),
        hours =
            d.getHours().toString().length == 1
                ? '0' + d.getHours()
                : d.getHours(),
        seconds =
            d.getSeconds().toString().length == 1
                ? '0' + d.getSeconds()
                : d.getSeconds(),
        milliseconds =
            d.getMilliseconds().toString().length == 1
                ? '0' + d.getMilliseconds()
                : d.getMilliseconds(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let consoleDate =
        days[d.getDay()] +
        ' ' +
        months[d.getMonth()] +
        ' ' +
        d.getDate() +
        ' ' +
        d.getFullYear() +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds +
        ',' +
        milliseconds +
        ampm;

    switch (type) {
        case 'error':
            console.error(consoleDate + id + message, obj);
            window.dispatchEvent(
                new CustomEvent('kupError', {
                    bubbles: true,
                    detail: { comp, consoleDate, type, message },
                })
            );
            break;
        case 'warning':
            console.warn(consoleDate + id + message, obj);
            window.dispatchEvent(
                new CustomEvent('kupError', {
                    bubbles: true,
                    detail: { comp, consoleDate, type, message },
                })
            );
            break;
        case 'log':
        default:
            console.log(consoleDate + id + message, obj);
            break;
    }
}
/**
 * Function used to time the loading times of a component.
 *
 * @param comp - The component calling this function or a string.
 * @param didLoad - Must be set to false when called inside a componentWillLoad() lifecycle hook and true when called inside componentDidLoad().
 */
export function logLoad(comp: any, didLoad: boolean) : void {
    if (!didLoad) {
        comp['debugInfo'] = {
            startTime: window.performance.now(),
            endTime: 0,
            renderCount: 0,
            renderStart: 0,
            renderEnd: 0,
        };
    } else {
        comp.debugInfo.endTime = window.performance.now();
        let timeDiff: number =
            comp.debugInfo.endTime - comp.debugInfo.startTime;
        if (dom.kupDebug) {
            logMessage(comp, 'Component ready after ' + timeDiff + 'ms.');
        }
    }
}
/**
 * Function used to time the render times of a component.
 *
 * @param comp - The component calling this function or a string.
 * @param didRender - Must be set to false when called inside a componentWillRender() lifecycle hook and true when called inside componentDidRender().
 */
export function logRender(comp: any, didRender: boolean) : void {
    if (!didRender) {
        comp.debugInfo.renderCount++;
        comp.debugInfo.renderStart = window.performance.now();
    } else {
        comp.debugInfo.renderEnd = window.performance.now();
        let timeDiff: number =
            comp.debugInfo.renderEnd - comp.debugInfo.renderStart;
        if (dom.kupDebug) {
            logMessage(
                comp,
                'Render #' +
                    comp.debugInfo.renderCount +
                    ' took ' +
                    timeDiff +
                    'ms.'
            );
        }
    }
}

//
// Utility to test CSS selectors performances.
//
// Copy/paste the code below inside Google Chrome Dev Tools console, then run logCSS() with the following arguments:
//
// 1) String - CSS selector of your Ketch.UP component, for example "kup-data-table#my-table"
// 2) Boolean - Whether you want a detailed log or not
//
// Note: detailedLog will inflate time because of console.logs, useful to check individual entries only.
//
/*
function logCSS(selector, detailedLog) {
    let element = document.querySelector(selector);
    const shadowCSS = element.shadowRoot.adoptedStyleSheets[0].rules;
    let CSSArray = [];
    for (let index = 0; index < shadowCSS.length; index++) {
        const cssRule = shadowCSS[index].cssText;
        if (cssRule.indexOf('@') < 0) {
            let selectorEnd = shadowCSS[index].cssText.indexOf('{');
            CSSArray.push(cssRule.substr(0, selectorEnd));
        }
    }

    let redObj = {};
    let orangeObj = {};
    let yellowObj = {};
    let greenObj = {};
    let start = window.performance.now();
    for (let index = 0; index < CSSArray.length; index++) {
        let s = window.performance.now();
        let q = element.shadowRoot.querySelectorAll(CSSArray[index]);
        let e = window.performance.now();
        if (detailedLog) {
            let t = e - s;
            if (t > 10) {
                redObj[index] = {
                    selector: CSSArray[index],
                    time: t,
                    occurences: q.length,
                };
            } else if (t > 5) {
                orangeObj[index] = {
                    selector: CSSArray[index],
                    time: t,
                    occurences: q.length,
                };
            } else if (t > 2) {
                yellowObj[index] = {
                    selector: CSSArray[index],
                    time: t,
                    occurences: q.length,
                };
            } else {
                greenObj[index] = {
                    selector: CSSArray[index],
                    time: t,
                    occurences: q.length,
                };
            }
        }
    }
    if (detailedLog) {
        console.groupCollapsed(
            '%c  %c' + 'Very slow ' + '(' + Object.keys(redObj).length + ')',
            'background-color: red; margin-right: 10px; border-radius: 50%',
            'background-color: transparent'
        );
        console.table(redObj);
        console.groupEnd();
        console.groupCollapsed(
            '%c  %c' + 'Slow ' + '(' + Object.keys(orangeObj).length + ')',
            'background-color: orange; margin-right: 10px; border-radius: 50%',
            'background-color: transparent'
        );
        console.table(orangeObj);
        console.groupEnd();
        console.groupCollapsed(
            '%c  %c' + 'Average ' + '(' + Object.keys(yellowObj).length + ')',
            'background-color: yellow; margin-right: 10px; border-radius: 50%',
            'background-color: transparent'
        );
        console.table(yellowObj);
        console.groupEnd();
        console.groupCollapsed(
            '%c  %c' + 'Fast ' + '(' + Object.keys(greenObj).length + ')',
            'background-color: green; margin-right: 10px; border-radius: 50%',
            'background-color: transparent'
        );
        console.table(greenObj);
        console.groupEnd();
    }
    let end = window.performance.now();
    console.log('Total time estimated: ' + (end - start) + 'ms.');
}
//
// Check how many event listeners are defined on a Ketch.UP component and its children.
//
// Copy/paste the code below inside Google Chrome Dev Tools console, then run logEvents() with the following arguments:
//
// 1) String - CSS selector of your Ketch.UP component, for example "kup-data-table#my-table"
// 2) Boolean - Whether you want a detailed log or not
//
function logEvents(selector, detailedLog) {
    let element = document.querySelector(selector);
    let children;
    if (element.shadowRoot) {
        children = element.shadowRoot.querySelectorAll('*');
    } else {
        children = element.querySelectorAll('*');
    }
    let totalEvents = recursiveShadowRoot(children, detailedLog);
    console.log(
        '%cNumber of event listeners: ',
        'font-size:13px;color:green;',
        totalEvents
    );
    console.log(
        '%cAverage render time estimated: ',
        'font-size:13px;;color:green;',
        (totalEvents * 0.02).toString() +
            'ms (estimated about ~2000ms of render time for ~100000 events).'
    );
    console.log(
        '%cTask finished succesfully.',
        'font-size:16px;color:white;background-color:green;'
    );

    function recursiveShadowRoot(elements, detailedLog) {
        let count = 0;
        for (let i = 0; i < elements.length; i++) {
            let events;
            try {
                events = getEventListeners(elements[i]);
            } catch (error) {
                console.error(
                    'This script can only be executed inside Chrome Dev tools!'
                );
            }
            let scopedCount = 0;
            for (var key in events) {
                if (events.hasOwnProperty(key)) {
                    count++;
                    scopedCount++;
                }
            }
            if (scopedCount > 0) {
                if (scopedCount > 1) {
                    if (detailedLog) {
                        console.log(
                            'Element: ',
                            elements[i],
                            scopedCount.toString() + ' events: ',
                            events
                        );
                    }
                } else {
                    if (detailedLog) {
                        console.log(
                            'Element: ',
                            elements[i],
                            scopedCount.toString() + ' event: ',
                            events
                        );
                    }
                }
            }
            if (elements[i].shadowRoot) {
                if (detailedLog) {
                    console.log(
                        '%cNested shadowRoot detected - element: ',
                        'font-size:12px;color:#b500d6;',
                        elements[i]
                    );
                }
                let ELEMENTS = elements[i].shadowRoot.querySelectorAll('*');
                count = count + recursiveShadowRoot(ELEMENTS, detailedLog);
            }
        }
        return count;
    }
}
*/
