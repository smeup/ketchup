declare global {
    interface HTMLElement {
        kupDebug: boolean;
    }
}

export function logMessage(comp: any, message: string, type?: string) {
    if ((!type || type === 'log') && !document.documentElement['kupDebug']) {
        return;
    }
    let id: string = '';
    if (comp.rootElement) {
        id =
            ' ' + comp.rootElement.tagName + '#' + comp.rootElement.id + ' => ';
    } else {
        id = ' ' + comp + ' => ';
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
            console.error(consoleDate + id + message);
            window.dispatchEvent(
                new CustomEvent('kupError', {
                    bubbles: true,
                    detail: { comp, consoleDate, type, message },
                })
            );
            break;
        case 'warning':
            console.warn(consoleDate + id + message);
            window.dispatchEvent(
                new CustomEvent('kupError', {
                    bubbles: true,
                    detail: { comp, consoleDate, type, message },
                })
            );
            break;
        case 'log':
        default:
            console.log(consoleDate + id + message);
            break;
    }
}
