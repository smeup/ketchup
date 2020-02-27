// Error logging
//
// Arguments:
//
// - comp      = the component triggering the message
// - message   = the actual message of the error
// - type      = error triggers a console.error, warning triggers a console.warning, otherwise it will be a console.log
//
//
export function errorLogging(comp: string, message: string, type?: string) {
    var d = new Date(),
        minutes =
            d.getMinutes().toString().length == 1
                ? '0' + d.getMinutes()
                : d.getMinutes(),
        hours =
            d.getHours().toString().length == 1
                ? '0' + d.getHours()
                : d.getHours(),
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
