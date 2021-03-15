import type { KupComponent } from '../../types/GenericTypes';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupDebugLog,
    KupDebugLogColor,
    KupDebugLogPrint,
} from './kup-debug-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Debugging suite, used to log messages and statuses from the Ketch.UP components.
 * @module KupDebug
 */
export class KupDebug {
    active: boolean =
        dom.ketchupInit && dom.ketchupInit.debug && dom.ketchupInit.debug.active
            ? dom.ketchupInit.debug.active
            : false;
    logs: KupDebugLog[] = [];
    /**
     * Dumps the stored logs.
     */
    dump(): void {
        this.logs = [];
    }
    /**
     * Displays a table with debug information inside the browser's console.
     */
    print(): void {
        let printLog: KupDebugLogPrint = {};
        for (let index = 0; index < this.logs.length; index++) {
            const type: string =
                this.logs[index].message.indexOf('Render #') > -1
                    ? 'Render'
                    : this.logs[index].message.indexOf('Component ready') > -1
                    ? 'Load'
                    : this.logs[index].message.indexOf('Size changed') > -1
                    ? 'Resize'
                    : 'Misc';
            if (!printLog[type]) {
                printLog[type] = [];
            }
            printLog[type].push({
                date: this.formatDate(this.logs[index].date),
                element: (this.logs[index].element as KupComponent).rootElement
                    ? (this.logs[index].element as KupComponent).rootElement
                    : this.logs[index].id,
                message: this.logs[index].message,
            });
        }
        for (const key in printLog) {
            if (Object.prototype.hasOwnProperty.call(printLog, key)) {
                console.groupCollapsed(
                    '%c  %c' +
                        key +
                        ' logs ' +
                        '(' +
                        printLog[key].length +
                        ')',
                    'background-color: ' +
                        KupDebugLogColor[key] +
                        '; margin-right: 10px; border-radius: 50%',
                    'background-color: transparent'
                );
                console.table(printLog[key]);
                console.groupEnd();
            }
        }
        if (this.logs.length > 0) {
            console.groupCollapsed(
                '%c  %c' + 'All logs (' + this.logs.length + ')',
                'background-color: ' +
                    KupDebugLogColor['Total'] +
                    '; margin-right: 10px; border-radius: 50%',
                'background-color: transparent'
            );
            console.table(this.logs);
            console.groupEnd();
        }
    }
    /**
     * Function used to set the status of the debug.
     * If no argument is provided, this method will work as a toggler.
     *
     * @param {boolean} value - If this argument is provided, the debug status will be forced to its value.
     */
    toggle(value?: boolean): void {
        if (typeof value !== 'boolean') {
            this.active = !this.active;
        } else {
            this.active = value;
        }
    }
    /**
     * Function used to check whether the debug is active or not.
     * If kupDebug on documentElement's type is not a boolean, it will be set to false.
     *
     * @returns {boolean} Status of the debug.
     */
    isDebug(): boolean {
        return this.active;
    }
    /**
     * Displays a timestamped message in the browser's console when the kupDebug property on document.documentElement is true.
     * Warnings and errors will be displayed even when kupDebug !== true.
     *
     * @param {any} comp - The component calling this function or a string.
     * @param {string} message - The actual message that will be printed.
     * @param {string} type - The type of console message, defaults to "log" but "warning" and "error" can be used as well.
     */
    logMessage(comp: any, message: string, type?: string): void {
        if ((!type || type === 'log') && !this.isDebug()) {
            return;
        }
        let obj: object | string;
        let id: string = '';
        if (comp.rootElement) {
            id =
                ' ' +
                comp.rootElement.tagName +
                '#' +
                comp.rootElement.id +
                ' => ';
            obj = comp;
        } else {
            id = ' ' + comp + ' => ';
            obj = '';
        }
        var date = new Date();

        switch (type) {
            case 'error':
                console.error(this.formatDate(date) + id + message, obj);
                window.dispatchEvent(
                    new CustomEvent('kupError', {
                        bubbles: true,
                        detail: { comp, date, type, message },
                    })
                );
                break;
            case 'warning':
                console.warn(this.formatDate(date) + id + message, obj);
                break;
            case 'log':
            default:
                const log: KupDebugLog = {
                    message: message,
                    id: id,
                    date: date,
                    element: obj,
                };
                if (this.logs.length > 1000) {
                    console.warn(
                        this.formatDate(date) +
                            ' kup-debug => ' +
                            'Too many logs (> 1000)! Dumping...'
                    );
                    this.dump();
                }
                this.logs.push(log);
                break;
        }
    }
    /**
     * Function used to format a date.
     * Example: "Sun Mar 14 2021 13:50:56,329pm"
     *
     * @param {Date} date - Date to be formatted.
     * @returns {string} Formatted
     */
    formatDate(date: Date): string {
        let minutes =
                date.getMinutes().toString().length == 1
                    ? '0' + date.getMinutes()
                    : date.getMinutes(),
            hours =
                date.getHours().toString().length == 1
                    ? '0' + date.getHours()
                    : date.getHours(),
            seconds =
                date.getSeconds().toString().length == 1
                    ? '0' + date.getSeconds()
                    : date.getSeconds(),
            milliseconds =
                date.getMilliseconds().toString().length == 1
                    ? '0' + date.getMilliseconds()
                    : date.getMilliseconds(),
            ampm = date.getHours() >= 12 ? 'pm' : 'am',
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
        return (
            days[date.getDay()] +
            ' ' +
            months[date.getMonth()] +
            ' ' +
            date.getDate() +
            ' ' +
            date.getFullYear() +
            ' ' +
            hours +
            ':' +
            minutes +
            ':' +
            seconds +
            ',' +
            milliseconds +
            ampm
        );
    }
    /**
     * Function used to time the loading times of a component.
     *
     * @param {any} comp - The component calling this function or a string.
     * @param {boolean} didLoad - Must be set to false when called inside a componentWillLoad() lifecycle hook and true when called inside componentDidLoad().
     */
    logLoad(comp: any, didLoad: boolean): void {
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
            if (this.isDebug()) {
                this.logMessage(
                    comp,
                    'Component ready after ' + timeDiff + 'ms.'
                );
            }
        }
    }
    /**
     * Function used to time the render times of a component.
     *
     * @param comp - The component calling this function or a string.
     * @param didRender - Must be set to false when called inside a componentWillRender() lifecycle hook and true when called inside componentDidRender().
     */
    logRender(comp: any, didRender: boolean): void {
        if (!didRender) {
            comp.debugInfo.renderCount++;
            comp.debugInfo.renderStart = window.performance.now();
        } else {
            comp.debugInfo.renderEnd = window.performance.now();
            let timeDiff: number =
                comp.debugInfo.renderEnd - comp.debugInfo.renderStart;
            if (this.isDebug()) {
                this.logMessage(
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
}
