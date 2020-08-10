// Error logging
//
// Arguments:
//
// - comp      = the component triggering the message
// - message   = the actual message of the error
// - type      = error triggers a console.error, warning triggers a console.warning, otherwise it will be a console.log
//
//
declare global {
    interface HTMLElement {
        'kup-debug': boolean;
    }
}

export function logMessage(comp: string, message: string, type?: string) {
    if ((!type || type === 'log') && !document.documentElement['kup-debug']) {
        return;
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
            console.error(consoleDate + ' (' + comp + '):' + message);
            break;
        case 'warning':
            console.warn(consoleDate + ' (' + comp + '):' + message);
            break;
        case 'log':
            console.log(consoleDate + ' (' + comp + '):' + message);
            break;
        default:
            console.log(consoleDate + ' (' + comp + '):' + message);
    }

    window.dispatchEvent(
        new CustomEvent('kupError', {
            bubbles: true,
            detail: { comp, consoleDate, type, message },
        })
    );
}
