//
// Utility to test CSS selectors performances.
//
// Copy/paste the code below inside Google Chrome Dev Tools console, then run logCSS() with the following arguments:
//
// 1) String - CSS selector of your Ketchup component, for example "kup-data-table#my-table"
// 2) Boolean - Whether you want a detailed log or not
//
// Note: detailedLog will inflate time because of console.logs, useful to check individual entries only.
//
function logCSS(selector, detailedLog) {
    let element = document.querySelector(selector);
    const shadowCSS = element.shadowRoot.adoptedStyleSheets[0].rules;
    let CSSArray = [];
    for (let index = 0; index < shadowCSS.length; index++) {
        const cssRule = shadowCSS[index].cssText;
        if (cssRule.indexOf('@') < 0) {
            let selectorEnd = shadowCSS[index].cssText.indexOf('{');
            CSSArray.push(cssRule.substring(0, selectorEnd));
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
// Check how many event listeners are defined on a Ketchup component and its children.
//
// Copy/paste the code below inside Google Chrome Dev Tools console, then run logEvents() with the following arguments:
//
// 1) String - CSS selector of your Ketchup component, for example "kup-data-table#my-table"
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
