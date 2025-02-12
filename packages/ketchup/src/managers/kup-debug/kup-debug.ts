import type { KupDom } from '../kup-manager/kup-manager-declarations';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupCardEventPayload,
    KupCardFamily,
} from '../../components/kup-card/kup-card-declarations';
import { KupListNode } from '../../components/kup-list/kup-list-declarations';
import { KupLanguageDebug } from '../kup-language/kup-language-declarations';
import {
    KupDebugCategory,
    KupDebugLog,
    KupDebugLogColor,
    KupDebugLogPrint,
} from './kup-debug-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Debugging suite, used to log messages and statuses from the Ketchup components.
 * @module KupDebug
 */
export class KupDebug {
    active: boolean;
    autoPrint: boolean;
    container: HTMLElement;
    logLimit: number;
    logs: KupDebugLog[];
    #debugWidget: HTMLKupCardElement;
    /**
     * Initializes KupDebug.
     * @param {boolean} active - When true, the debug is active on initialization.
     * @param {boolean} autoprint - When true, logs will be automatically printed inside the debug widget.
     * @param {number} logLimit - Maximum amount of logs stored, when they exceed the number specified in logLimit the cache will be automatically cleared.
     */
    constructor(active?: boolean, autoprint?: boolean, logLimit?: number) {
        this.active = active ? true : false;
        this.autoPrint = autoprint ? true : false;
        this.container = document.createElement('div');
        this.container.setAttribute('kup-debug', '');
        document.body.appendChild(this.container);
        this.logLimit = logLimit ? logLimit : 250;
        this.logs = [];
        this.#debugWidget = null;
        document.addEventListener('kup-language-change', () => {
            if (this.active && this.#debugWidget) {
                this.hideWidget();
                this.showWidget();
            }
        });
    }
    /**
     * Allows the download of props by creating a temporary clickable anchor element.
     */
    private downloadProps(res: GenericObject) {
        const dataStr: string =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(res, null, 2));
        const downloadAnchorNode: HTMLAnchorElement =
            document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'kup_props.json');
        this.container.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
    /**
     * Creates the debug widget.
     */
    private showWidget(): void {
        const debugWidget: HTMLKupCardElement =
            document.createElement('kup-card');
        const languages: string[] = dom.ketchup.language.getLanguages();
        const languagesListData: KupListNode[] = [];
        for (let index = 0; index < languages.length; index++) {
            languagesListData.push({
                id: languages[index],
                selected:
                    languages[index] === dom.ketchup.language.name
                        ? true
                        : false,
                value: languages[index],
            });
        }
        const themes: string[] = dom.ketchup.theme.getThemes();
        const themesListData: KupListNode[] = [];
        for (let index = 0; index < themes.length; index++) {
            themesListData.push({
                id: themes[index],
                selected:
                    themes[index] === dom.ketchup.theme.name ? true : false,
                value: themes[index],
            });
        }
        const locales: string[] = dom.ketchup.dates.getLocales();
        const localesListData: KupListNode[] = [];
        for (let index = 0; index < locales.length; index++) {
            localesListData.push({
                id: locales[index],
                selected:
                    locales[index] === dom.ketchup.dates.locale ? true : false,
                value: locales[index],
            });
        }
        debugWidget.data = {
            button: [
                {
                    icon: 'power_settings_new',
                    id: 'kup-debug-off',
                    customStyle:
                        ':host {--kup-font-size: 0.875em; border-left: 1px solid var(--kup-border-subtle); border-right: 1px solid var(--kup-border-subtle);}',
                    title: dom.ketchup.language.translate(KupLanguageDebug.OFF),
                },
                {
                    customStyle: ':host {--kup-font-size: 0.875em;}',
                    icon: 'print',
                    id: 'kup-debug-print',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.PRINT
                    ),
                },
                {
                    checked: this.autoPrint,
                    customStyle:
                        ':host {--kup-font-size: 0.875em; border-right: 1px solid var(--kup-border-subtle);}',
                    icon: 'speaker_notes',
                    iconOff: 'speaker_notes_off',
                    id: 'kup-debug-autoprint',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.AUTOPRINT
                    ),
                    toggable: true,
                },
                {
                    customStyle: ':host {--kup-font-size: 0.875em;}',
                    icon: 'broom',
                    id: 'kup-debug-clear',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.CLEAR
                    ),
                },
                {
                    customStyle: ':host {--kup-font-size: 0.875em;}',
                    icon: 'delete',
                    id: 'kup-debug-delete',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.DUMP
                    ),
                },
                {
                    className: 'kup-full-height',
                    customStyle:
                        ':host {border-left: 1px solid var(--kup-border-subtle);}',
                    icon: 'download',
                    id: 'kup-debug-dl-props',
                    label: 'Props',
                    styling: 'flat',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.DL_PROPS
                    ),
                },
                {
                    className: 'kup-full-height',
                    customStyle:
                        ':host {border-right: 1px solid var(--kup-border-subtle);}',
                    icon: 'download',
                    id: 'kup-debug-dl-all',
                    label: dom.ketchup.language.translate(
                        KupLanguageDebug.DL_ALL
                    ),
                    styling: 'flat',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.DL_ALL
                    ),
                },
                {
                    customStyle: ':host {--kup-font-size: 0.875em;}',
                    icon: 'auto-fix',
                    id: 'kup-debug-magic-box',
                    title: dom.ketchup.language.translate(
                        KupLanguageDebug.MAGIC_BOX
                    ),
                },
            ],
            combobox: [
                {
                    className: 'kup-full-height',
                    data: {
                        'kup-list': {
                            data: themesListData,
                            id: 'kup-debug-theme-changer-list',
                        },
                        'kup-text-field': {
                            className: 'kup-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchup.language.translate(
                                KupLanguageDebug.THEME_CHANGER
                            ),
                        },
                    },
                    id: 'kup-debug-theme-changer',
                    initialValue: dom.ketchup.theme.name,
                    isSelect: true,
                },
                {
                    className: 'kup-full-height',
                    data: {
                        'kup-list': {
                            data: languagesListData,
                            id: 'kup-debug-language-changer-list',
                        },
                        'kup-text-field': {
                            className: 'kup-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchup.language.translate(
                                KupLanguageDebug.LANGUAGE_CHANGER
                            ),
                        },
                    },
                    id: 'kup-debug-language-changer',
                    initialValue: dom.ketchup.language.name,
                    isSelect: true,
                },
                {
                    className: 'kup-full-height',
                    data: {
                        'kup-list': {
                            data: localesListData,
                            id: 'kup-debug-locale-changer-list',
                        },
                        'kup-text-field': {
                            className: 'kup-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchup.language.translate(
                                KupLanguageDebug.LOCALE_CHANGER
                            ),
                        },
                    },
                    id: 'kup-debug-locale-changer',
                    initialValue: dom.ketchup.dates.locale,
                    isSelect: true,
                },
            ],
            textfield: [
                {
                    className: 'kup-full-height',
                    id: 'kup-debug-log-limit',
                    label: dom.ketchup.language.translate(
                        KupLanguageDebug.LOG_LIMIT
                    ),
                    initialValue: this.logLimit,
                    emitSubmitEventOnEnter: false,
                    inputType: 'number',
                },
            ],
        };
        debugWidget.customStyle =
            '#kup-debug-log-limit {width: 120px;} #kup-debug-theme-changer {width: 190px;} #kup-debug-language-changer {width: 190px;} #kup-debug-locale-changer {width: 190px;}';
        debugWidget.id = 'kup-debug-widget';
        debugWidget.layoutFamily = KupCardFamily.DIALOG;
        debugWidget.layoutNumber = 3;
        debugWidget.sizeX = 'max-content';
        debugWidget.sizeY = 'auto';
        const handler = this.handleEvents;
        debugWidget.addEventListener('kup-card-event', (e: CustomEvent) =>
            handler(e, this)
        );

        this.container.append(debugWidget);
        this.#debugWidget = debugWidget;
    }
    /**
     * Listens the card events and handles the related actions.
     * @param {CustomEvent<KupCardEventPayload>} e - kup-card-event.
     * @param {KupDebug} kupDebug - Instance of the KupDebug class.
     */
    private handleEvents(
        e: CustomEvent<KupCardEventPayload>,
        kupDebug: KupDebug
    ): void {
        const compEvent: CustomEvent = e.detail.event;
        const compID: string = compEvent.detail.id;
        switch (compEvent.type) {
            case 'kup-button-click':
                switch (compID) {
                    case 'kup-debug-autoprint':
                        kupDebug.autoPrint = !kupDebug.autoPrint;
                        break;
                    case 'kup-debug-clear':
                        kupDebug.widgetClear();
                        kupDebug.#debugWidget.refresh();
                        break;
                    case 'kup-debug-dl-props':
                        kupDebug.getProps().then((res: GenericObject) => {
                            kupDebug.downloadProps(res);
                        });
                        break;
                    case 'kup-debug-dl-all':
                        kupDebug.getProps(true).then((res: GenericObject) => {
                            kupDebug.downloadProps(res);
                        });
                        break;
                    case 'kup-debug-delete':
                        kupDebug.dump();
                        break;
                    case 'kup-debug-magic-box':
                        dom.ketchup.toggleMagicBox();
                        break;
                    case 'kup-debug-off':
                        kupDebug.toggle();
                        break;
                    case 'kup-debug-print':
                        kupDebug.widgetClear();
                        kupDebug.widgetPrint();
                        kupDebug.#debugWidget.refresh();
                        break;
                }
                break;
            case 'kup-combobox-itemclick':
                switch (compID) {
                    case 'kup-debug-language-changer':
                        dom.ketchup.language.set(compEvent.detail.value);
                        break;
                    case 'kup-debug-locale-changer':
                        dom.ketchup.dates.setLocale(compEvent.detail.value);
                        dom.ketchup.math.setLocale(compEvent.detail.value);
                        break;
                    case 'kup-debug-theme-changer':
                        dom.ketchup.theme.set(compEvent.detail.value);
                        break;
                }
            case 'kup-textfield-input':
                switch (compID) {
                    case 'kup-debug-log-limit':
                        if (
                            compEvent.detail.value === '' ||
                            compEvent.detail.value < 1
                        ) {
                            kupDebug.logLimit = 1;
                        } else {
                            kupDebug.logLimit = compEvent.detail.value;
                        }
                        break;
                }
        }
    }
    /**
     * Closes the debug widget.
     */
    private hideWidget() {
        this.#debugWidget.remove();
        this.#debugWidget = null;
    }
    /**
     * Clears all the printed logs inside the debug widget.
     */
    private widgetClear(): void {
        const children: HTMLCollection = Array.prototype.slice.call(
            this.#debugWidget.children,
            0
        );
        for (let index = 0; index < children.length; index++) {
            children[index].remove();
        }
    }
    /**
     * Prints the stored logs inside the debug widget.
     */
    private widgetPrint(): void {
        const slots: Array<HTMLDivElement> = [];
        for (let index = 0; index < this.logs.length; index++) {
            // Wrapper div
            const slot: HTMLDivElement = document.createElement('div');
            slot.classList.add('text');
            switch (this.logs[index].category) {
                case KupDebugCategory.ERROR:
                    slot.style.backgroundColor =
                        'rgba(var(--kup-danger-color-rgb), 0.15)';
                    slot.style.borderLeft =
                        '5px solid var(--kup-danger-color-60)';
                    break;
                case KupDebugCategory.WARNING:
                    slot.style.backgroundColor =
                        'rgba(var(--kup-warning-color-rgb), 0.15)';
                    slot.style.borderLeft =
                        '5px solid var(--kup-warning-color-50)';
                    break;
                case KupDebugCategory.INFO:
                default:
                    slot.style.borderLeft =
                        '5px solid var(--kup-info-color-50)';
                    break;
            }
            // If the log is tied to a KupComponent, on click its props will be downloaded.
            // Also, a different style will be applied to distinguish it between the others.
            if (typeof this.logs[index].element == 'object') {
                slot.title = dom.ketchup.language.translate(
                    KupLanguageDebug.DL_PROPS_COMP
                );
                slot.style.fontWeight = 'bold';
                slot.style.cursor = 'pointer';
                slot.onclick = () => {
                    try {
                        (this.logs[index].element as KupComponent)
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
            const id: HTMLSpanElement = document.createElement('span');
            id.innerHTML = this.logs[index].id;
            id.style.opacity = '0.75';
            id.style.marginLeft = '5px';
            // Message span
            const message: HTMLSpanElement = document.createElement('span');
            message.innerHTML = this.logs[index].message;
            // Append elements
            slot.append(id, message);
            slots.push(slot);
        }
        slots.reverse();
        for (let index = 0; index < slots.length; index++) {
            this.#debugWidget.append(slots[index]);
        }
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
                date: dom.ketchup.dates.format(this.logs[index].date, 'LLL:ms'),
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
            document.dispatchEvent(new CustomEvent('kup-debug-active'));
            if (!this.#debugWidget) {
                this.showWidget();
            }
        } else {
            document.dispatchEvent(new CustomEvent('kup-debug-inactive'));
            if (this.#debugWidget) {
                this.hideWidget();
            }
        }
    }
    /**
     * Function used to check whether the debug is active or not.
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
        // Storing unique components inside "comps"
        for (let index = 0; index < this.logs.length; index++) {
            if (typeof this.logs[index].element !== 'string') {
                if (!comps.has(this.logs[index].element as KupComponent)) {
                    comps.add(this.logs[index].element as KupComponent);
                }
            }
        }
        // Object of two arrays, positionally matching each other.
        // One contains components, the other the relative promise.
        const matchingObject: {
            comps: KupComponent[];
            promises: Promise<GenericObject>[];
        } = {
            comps: [],
            promises: [],
        };
        comps.forEach((el: KupComponent) => {
            try {
                matchingObject.comps.push(el);
                matchingObject.promises.push(el.getProps());
            } catch (error) {
                this.logMessage(
                    'kup-debug',
                    'Exception when accessing "getProps" public method for component: ' +
                        el.rootElement.tagName,
                    KupDebugCategory.WARNING
                );
            }
        });
        // Returning "props", which is returned by the Promise.all
        return Promise.all(matchingObject.promises).then((responses) => {
            for (let index = 0; index < matchingObject.comps.length; index++) {
                const el: KupComponent = matchingObject.comps[index];
                const res: GenericObject = responses[index];
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
                        try {
                            el.getProps(true).then((res: GenericObject) => {
                                props.descriptions[el.rootElement.tagName] =
                                    res;
                            });
                        } catch (error) {
                            this.logMessage(
                                'kup-debug',
                                'Exception when accessing "getProps" public method for component: ' +
                                    el.rootElement.tagName,
                                KupDebugCategory.WARNING
                            );
                        }
                    }
                } else {
                    props[key] = res;
                }
            }
            return props;
        });
    }
    /**
     * Displays a timestamped message in the browser's console when the kupDebug property on document.documentElement is true.
     * Warnings and errors will be displayed even when kupDebug !== true.
     * @param {any} comp - The component calling this function or a string.
     * @param {string} message - The actual message that will be printed.
     * @param {KupDebugCategory} category - The type of console message, defaults to log but warning and error can be used as well.
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

        if (this.isDebug() && id.indexOf('#kup-debug') < 0) {
            const log: KupDebugLog = {
                category: category,
                date: date,
                element: obj,
                id: id,
                message: message,
            };
            if (this.logs.length > this.logLimit) {
                console.warn(
                    dom.ketchup.dates.format(date, 'LLL:ms') +
                        ' kup-debug => ' +
                        'Too many logs (> ' +
                        this.logLimit +
                        ')! Dumping (increase debug.logLimit to store more logs)... .'
                );
                this.dump();
            }
            this.logs.push(log);
            if (this.autoPrint && this.#debugWidget) {
                this.widgetClear();
                this.widgetPrint();
                this.#debugWidget.refresh();
            }
        }

        switch (category) {
            case KupDebugCategory.ERROR:
                console.error(
                    dom.ketchup.dates.format(date, 'LLL:ms') + id + message,
                    obj
                );
                window.dispatchEvent(
                    new CustomEvent('kup-debug-error', {
                        bubbles: true,
                        detail: { comp, date, message },
                    })
                );
                break;
            case KupDebugCategory.WARNING:
                console.warn(
                    dom.ketchup.dates.format(date, 'LLL:ms') + id + message,
                    obj
                );
                break;
        }
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
     * @param {any} comp - The component calling this function or a string.
     * @param {boolean} didRender - Must be set to false when called inside a componentWillRender() lifecycle hook and true when called inside componentDidRender().
     * @param {string} breakpoint - When present, this log is supposedly between a willRender and didRender hook. Used to time single features of the render lifecycle.
     */
    logRender(comp: any, didRender: boolean, breakpoint?: string): void {
        if (breakpoint) {
            const timeDiff: number =
                window.performance.now() - comp.debugInfo.renderStart;
            if (this.isDebug()) {
                this.logMessage(comp, breakpoint + ' took ' + timeDiff + 'ms.');
            }
        } else if (!didRender) {
            comp.debugInfo.renderCount++;
            comp.debugInfo.renderStart = window.performance.now();
        } else {
            comp.debugInfo.renderEnd = window.performance.now();
            const timeDiff: number =
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
