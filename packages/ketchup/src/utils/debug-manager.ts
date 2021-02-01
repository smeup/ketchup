declare global {
    interface HTMLElement {
        kupDebug: boolean;
    }
}

const dom = document.documentElement;

export function logMessage(comp: any, message: string, type?: string) {
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

export function logLoad(comp: any, didLoad: boolean) {
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

export function logRender(comp: any, didRender: boolean) {
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
// Detailed log will inflate time because of console.logs, useful to check individual entries only.
//
export function logCSS(
    comp: any,
    selectors: Array<string>,
    detailedLog?: boolean
) {
    let start = window.performance.now();
    for (let index = 0; index < selectors.length; index++) {
        let s = window.performance.now();
        let q = comp.rootElement.shadowRoot.querySelectorAll(selectors[index]);
        let e = window.performance.now();
        if (detailedLog) {
            let t = e - s;
            let color = 'color:';
            if (t > 3) {
                color += 'red';
            } else if (t > 2) {
                color += 'orange';
            } else if (t > 1) {
                color += 'yellow';
            } else {
                color += 'white';
            }
            console.log(
                '%c' +
                    selectors[index] +
                    ': ' +
                    t +
                    'ms.' +
                    '[' +
                    q.length +
                    ' elements]',
                color
            );
        }
    }
    let end = window.performance.now();
    console.log('Total time estimated: ' + (end - start) + 'ms.');
}
/*
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
}

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

*/
