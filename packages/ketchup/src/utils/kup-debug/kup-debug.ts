import type { KupCard } from '../../components/kup-card/kup-card';
import {
    CardData,
    CardFamily,
} from '../../components/kup-card/kup-card-declarations';
import { ComponentListElement } from '../../components/kup-list/kup-list-declarations';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupDebugCategory,
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
    logLimit: number =
        dom.ketchupInit &&
        dom.ketchupInit.debug &&
        dom.ketchupInit.debug.logLimit
            ? dom.ketchupInit.debug.logLimit
            : 250;
    logs: KupDebugLog[] = [];
    #debugWindow: HTMLKupCardElement = null;
    /**
     * Allows the download of props by creating a temporary clickable anchor element.
     */
    private downloadProps(res: GenericObject) {
        const dataStr: string =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(res, null, 2));
        const downloadAnchorNode: HTMLAnchorElement = document.createElement(
            'a'
        );
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'kup_props.json');
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
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
            const isComponent: boolean = !!(this.logs[index]
                .element as KupComponent);
            if (!printLog[type]) {
                printLog[type] = [];
            }
            printLog[type].push({
                date: this.formatDate(this.logs[index].date),
                element: isComponent
                    ? (this.logs[index].element as KupComponent)
                    : this.logs[index].id,
                message: isComponent
                    ? this.logs[index].id + this.logs[index].message
                    : this.logs[index].message,
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
                for (let index = 0; index < printLog[key].length; index++) {
                    console.log(
                        printLog[key][index].date,
                        printLog[key][index].message,
                        printLog[key][index].element
                    );
                }
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
     * @param {boolean} value - If this argument is provided, the debug status will be forced to its value.
     */
    toggle(value?: boolean): void {
        if (typeof value !== 'boolean') {
            this.active = !this.active;
        } else {
            this.active = value;
        }
        if (this.active) {
            this.showWindow();
        } else {
            this.hideWindow();
        }
    }
    /**
     * Creates the debugger window.
     */
    showWindow(): void {
        const debugWindow: HTMLKupCardElement = document.createElement(
            'kup-card'
        );
        const themes: string[] = dom.ketchup.theme.getThemes();
        const listData: ComponentListElement[] = [];
        for (let index = 0; index < themes.length; index++) {
            listData.push({
                text: themes[index],
                value: themes[index],
                selected: false,
                isSeparator: false,
            });
        }
        debugWindow.data = {
            button: [
                {
                    icon: 'power_settings_new',
                    id: 'kup-debug-off',
                    title: 'Turn off debug',
                },
                {
                    icon: 'print',
                    id: 'kup-debug-print',
                    title: 'Print logs stored',
                },
                { icon: 'broom', id: 'kup-debug-clear', title: 'Clear window' },
                {
                    icon: 'delete',
                    id: 'kup-debug-delete',
                    title: 'Dump stored logs',
                },
                {
                    className: 'kup-full-height',
                    icon: 'download',
                    id: 'kup-debug-dl-props',
                    label: 'Props',
                    styling: 'flat',
                    title: 'Download components props',
                },
            ],
            combobox: [
                {
                    className: 'kup-full-height',
                    data: {
                        'kup-list': {
                            data: listData,
                            id: 'kup-debug-theme-changer-list',
                        },
                        'kup-text-field': {
                            className: 'kup-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: 'Change theme',
                        },
                    },
                    id: 'kup-debug-theme-changer',
                    initialValue: dom.ketchup.theme.name,
                    isSelect: true,
                },
            ],
            textfield: [
                {
                    className: 'kup-full-height',
                    id: 'kup-debug-log-limit',
                    label: 'Set log limit',
                    initialValue: this.logLimit,
                    emitSubmitEventOnEnter: false,
                    inputType: 'number',
                },
            ],
        };
        debugWindow.customStyle =
            '#kup-debug-log-limit {width: 120px;} #kup-debug-theme-changer {width: 190px;}';
        debugWindow.id = 'kup-debug-window';
        debugWindow.layoutFamily = CardFamily.DIALOG;
        debugWindow.layoutNumber = 3;
        debugWindow.sizeX = 'auto';
        debugWindow.sizeY = 'auto';
        debugWindow.addEventListener('kupCardEvent', (e: CustomEvent) =>
            this.handleEvents(e)
        );
        document.body.append(debugWindow);
        this.#debugWindow = debugWindow;
    }
    /**
     * Closes the debug window.
     */
    hideWindow() {
        this.#debugWindow.remove();
        this.#debugWindow = null;
    }
    /**
     * Listens the card events and handles the related actions.
     * @param {CustomEvent} e - kupCardEvent.
     */
    handleEvents(e: CustomEvent): void {
        const compEvent: CustomEvent = e.detail.event;
        const compID: string = compEvent.detail.id;
        const children: HTMLCollection = Array.prototype.slice.call(
            this.#debugWindow.children,
            0
        );
        switch (compEvent.type) {
            case 'kupButtonClick':
                switch (compID) {
                    case 'kup-debug-clear':
                        for (let index = 0; index < children.length; index++) {
                            children[index].remove();
                        }
                        this.#debugWindow.refresh();
                        break;
                    case 'kup-debug-dl-props':
                        this.getProps().then((res: GenericObject) => {
                            this.downloadProps(res);
                        });
                        break;
                    case 'kup-debug-delete':
                        this.dump();
                        break;
                    case 'kup-debug-off':
                        this.toggle();
                        break;
                    case 'kup-debug-print':
                        for (let index = 0; index < children.length; index++) {
                            children[index].remove();
                        }
                        for (let index = 0; index < this.logs.length; index++) {
                            // Wrapper div
                            const slot: HTMLDivElement = document.createElement(
                                'div'
                            );
                            slot.classList.add('text');
                            switch (this.logs[index].category) {
                                case KupDebugCategory.ERROR:
                                    slot.style.backgroundColor =
                                        'rgba(var(--kup-danger-color-rgb), 0.15)';
                                    slot.style.borderLeft =
                                        '5px solid var(--kup-danger-color)';
                                    break;
                                case KupDebugCategory.WARNING:
                                    slot.style.backgroundColor =
                                        'rgba(var(--kup-warning-color-rgb), 0.15)';
                                    slot.style.borderLeft =
                                        '5px solid var(--kup-warning-color)';
                                    break;
                                case KupDebugCategory.INFO:
                                default:
                                    slot.style.borderLeft =
                                        '5px solid var(--kup-info-color)';
                                    break;
                            }
                            // If the log is tied to a KupComponent, on click its props will be downloaded.
                            // Also, a different style will be applied to distinguish it between the others.
                            if (typeof this.logs[index].element == 'object') {
                                slot.title = 'Download component props';
                                slot.style.fontWeight = 'bold';
                                slot.style.cursor = 'pointer';
                                slot.onclick = () => {
                                    try {
                                        (this.logs[index]
                                            .element as KupComponent)
                                            .getProps()
                                            .then((res: GenericObject) => {
                                                this.downloadProps(res);
                                            });
                                    } catch (err) {
                                        this.logMessage(
                                            'kup-debug',
                                            err,
                                            KupDebugCategory.WARNING
                                        );
                                    }
                                };
                            }
                            // ID span
                            const id: HTMLSpanElement = document.createElement(
                                'span'
                            );
                            id.innerHTML = this.logs[index].id;
                            id.style.opacity = '0.75';
                            id.style.marginLeft = '5px';
                            // Message span
                            const message: HTMLSpanElement = document.createElement(
                                'span'
                            );
                            message.innerHTML = this.logs[index].message;
                            // Append elements
                            slot.append(id, message);
                            this.#debugWindow.append(slot);
                        }
                        this.#debugWindow.refresh();
                        break;
                }
                break;
            case 'kupComboboxItemClick':
                switch (compID) {
                    case 'kup-debug-theme-changer':
                        dom.ketchup.theme.set(compEvent.detail.value);
                        break;
                }
            case 'kupTextFieldInput':
                switch (compID) {
                    case 'kup-debug-log-limit':
                        if (
                            compEvent.detail.value === '' ||
                            compEvent.detail.value < 1
                        ) {
                            this.logLimit = 1;
                        } else {
                            this.logLimit = compEvent.detail.value;
                        }
                        break;
                }
        }
    }
    /**
     * Function used to check whether the debug is active or not.
     * If kupDebug on documentElement's type is not a boolean, it will be set to false.
     * @returns {boolean} Status of the debug.
     */
    isDebug(): boolean {
        return this.active;
    }
    /**
     * Retrieves the information for every component in this.logs by invoking the getProps public method of each component.
     * 'tag' will contain the props of the component's html tag (i.e.: <kup-chip>).
     * 'props' will contain the developer defined props of the component, making it handy for test purposes.
     * @param {boolean} detail - If provided and true, the returned object will contain additional information (i.e.: className, id).
     * @returns {GenericObject} Props of the components.
     */
    async getProps(detail?: boolean): Promise<GenericObject> {
        let comps: Set<KupComponent> = new Set();
        let props: GenericObject = detail ? { descriptions: {} } : {};
        for (let index = 0; index < this.logs.length; index++) {
            if (typeof this.logs[index].element !== 'string') {
                if (!comps.has(this.logs[index].element as KupComponent)) {
                    comps.add(this.logs[index].element as KupComponent);
                }
            }
        }
        comps.forEach((el: KupComponent) => {
            try {
                el.getProps()
                    .then((res: GenericObject) => {
                        let cnt: number = 0;
                        let key: string = el.rootElement.id
                            ? el.rootElement.tagName + '#' + el.rootElement.id
                            : el.rootElement.tagName + '_' + ++cnt;
                        while (props[key]) {
                            key = el.rootElement.tagName + '_' + ++cnt;
                        }
                        if (detail) {
                            let tag: GenericObject = {};
                            for (const key in el.rootElement) {
                                tag[key] = el.rootElement[key];
                            }
                            props[key] = {
                                props: res,
                                tagInfo: tag,
                            };
                            if (!props.descriptions[el.rootElement.tagName]) {
                                el.getProps(true).then((res: GenericObject) => {
                                    props.descriptions[
                                        el.rootElement.tagName
                                    ] = res;
                                });
                            }
                        } else {
                            props[key] = res;
                        }
                    })
                    .catch((err) =>
                        this.logMessage(
                            'kup-debug',
                            err,
                            KupDebugCategory.WARNING
                        )
                    );
            } catch (error) {
                this.logMessage(
                    'kup-debug',
                    'Exception when accessing "getProps" public method for component: ' +
                        el.rootElement.tagName,
                    KupDebugCategory.WARNING
                );
            }
        });
        return props;
    }
    /**
     * Displays a timestamped message in the browser's console when the kupDebug property on document.documentElement is true.
     * Warnings and errors will be displayed even when kupDebug !== true.
     * @param {any} comp - The component calling this function or a string.
     * @param {string} message - The actual message that will be printed.
     * @param {string} type - The type of console message, defaults to "log" but "warning" and "error" can be used as well.
     */
    logMessage(comp: any, message: string, category?: KupDebugCategory): void {
        if (
            (!category || category === KupDebugCategory.INFO) &&
            !this.isDebug()
        ) {
            return;
        }
        const date: Date = new Date();
        if (!category) {
            category = KupDebugCategory.INFO;
        }
        let obj: object | string = null;
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

        if (id.indexOf('#kup-debug') < 0) {
            const log: KupDebugLog = {
                category: category,
                date: date,
                element: obj,
                id: id,
                message: message,
            };
            if (this.logs.length > this.logLimit) {
                console.warn(
                    this.formatDate(date) +
                        ' kup-debug => ' +
                        'Too many logs (> ' +
                        this.logLimit +
                        ')! Dumping (increase debug.logLimit to store more logs)... .'
                );
                this.dump();
            }
            this.logs.push(log);
        }

        switch (category) {
            case KupDebugCategory.ERROR:
                console.error(this.formatDate(date) + id + message, obj);
                window.dispatchEvent(
                    new CustomEvent('kupError', {
                        bubbles: true,
                        detail: { comp, date, message },
                    })
                );
                break;
            case KupDebugCategory.WARNING:
                console.warn(this.formatDate(date) + id + message, obj);
                break;
        }
    }
    /**
     * Function used to format a date.
     * Example: "Sun Mar 14 2021 13:50:56,329pm"
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
