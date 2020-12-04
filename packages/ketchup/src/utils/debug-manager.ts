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
            startTime: performance.now(),
            endTime: 0,
            renderCount: 0,
            renderStart: 0,
            renderEnd: 0,
        };
    } else {
        comp.debugInfo.endTime = performance.now();
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
        comp.debugInfo.renderStart = performance.now();
    } else {
        comp.debugInfo.renderEnd = performance.now();
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
