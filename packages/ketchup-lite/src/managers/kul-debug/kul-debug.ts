import type { KulDom } from '../kul-manager/kul-manager-declarations';
import type { KulComponent } from '../../types/GenericTypes';
import {
    KulDebugCategory,
    KulDebugLifecycles,
    KulDebugLog,
    KulDebugLogPrint,
} from './kul-debug-declarations';

const dom: KulDom = document.documentElement as KulDom;

/**
 * Debugging suite, used to log messages and statuses from the Ketchup components.
 * @module KulDebug
 */
export class KulDebug {
    active: boolean;
    autoPrint: boolean;
    container: HTMLElement;
    logLimit: number;
    logs: KulDebugLog[];
    //#debugWidget: HTMLKulCardElement;
    /**
     * Initializes KulDebug.
     * @param {boolean} active - When true, the debug is active on initialization.
     * @param {boolean} autoprint - When true, logs will be automatically printed inside the debug widget.
     * @param {number} logLimit - Maximum amount of logs stored, when they exceed the number specified in logLimit the cache will be automatically cleared.
     */
    constructor(active?: boolean, autoprint?: boolean, logLimit?: number) {
        this.active = active ? true : false;
        this.autoPrint = autoprint ? true : false;
        this.container = document.createElement('div');
        this.container.setAttribute('kul-debug', '');
        document.body.appendChild(this.container);
        this.logLimit = logLimit ? logLimit : 250;
        this.logs = [];
    }
    /*  this.#debugWidget = null;
        document.addEventListener('kul-language-change', () => {
            if (this.active && this.#debugWidget) {
                this.hideWidget();
                this.showWidget();
            }
        });
    }
    /**
     * Allows the download of props by creating a temporary clickable anchor element.
     */
    /*private downloadProps(res: GenericObject) {
        const dataStr: string =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(res, null, 2));
        const downloadAnchorNode: HTMLAnchorElement =
            document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'kul_props.json');
        this.container.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
    /**
     * Creates the debug widget.
     */
    /*private showWidget(): void {
        const debugWidget: HTMLKulCardElement =
            document.createElement('kul-card');
        const languages: string[] = dom.ketchupLite.language.getLanguages();
        const languagesListData: KulListNode[] = [];
        for (let index = 0; index < languages.length; index++) {
            languagesListData.push({
                id: languages[index],
                selected:
                    languages[index] === dom.ketchupLite.language.name
                        ? true
                        : false,
                value: languages[index],
            });
        }
        const themes: string[] = dom.ketchupLite.theme.getThemes();
        const themesListData: KulListNode[] = [];
        for (let index = 0; index < themes.length; index++) {
            themesListData.push({
                id: themes[index],
                selected:
                    themes[index] === dom.ketchupLite.theme.name ? true : false,
                value: themes[index],
            });
        }
        const locales: string[] = dom.ketchupLite.dates.getLocales();
        const localesListData: KulListNode[] = [];
        for (let index = 0; index < locales.length; index++) {
            localesListData.push({
                id: locales[index],
                selected:
                    locales[index] === dom.ketchupLite.dates.locale ? true : false,
                value: locales[index],
            });
        }
        debugWidget.data = {
            button: [
                {
                    icon: 'power_settings_new',
                    id: 'kul-debug-off',
                    customStyle:
                        ':host {--kul-font-size: 0.875em; border-left: 1px solid var(--kul-border-color); border-right: 1px solid var(--kul-border-color);}',
                    title: dom.ketchupLite.language.translate(KulLanguageDebug.OFF),
                },
                {
                    customStyle: ':host {--kul-font-size: 0.875em;}',
                    icon: 'print',
                    id: 'kul-debug-print',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.PRINT
                    ),
                },
                {
                    checked: this.autoPrint,
                    customStyle:
                        ':host {--kul-font-size: 0.875em; border-right: 1px solid var(--kul-border-color);}',
                    icon: 'speaker_notes',
                    iconOff: 'speaker_notes_off',
                    id: 'kul-debug-autoprint',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.AUTOPRINT
                    ),
                    toggable: true,
                },
                {
                    customStyle: ':host {--kul-font-size: 0.875em;}',
                    icon: 'broom',
                    id: 'kul-debug-clear',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.CLEAR
                    ),
                },
                {
                    customStyle: ':host {--kul-font-size: 0.875em;}',
                    icon: 'delete',
                    id: 'kul-debug-delete',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.DUMP
                    ),
                },
                {
                    className: 'kul-full-height',
                    customStyle:
                        ':host {border-left: 1px solid var(--kul-border-color);}',
                    icon: 'download',
                    id: 'kul-debug-dl-props',
                    label: 'Props',
                    styling: 'flat',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.DL_PROPS
                    ),
                },
                {
                    className: 'kul-full-height',
                    customStyle:
                        ':host {border-right: 1px solid var(--kul-border-color);}',
                    icon: 'download',
                    id: 'kul-debug-dl-all',
                    label: dom.ketchupLite.language.translate(
                        KulLanguageDebug.DL_ALL
                    ),
                    styling: 'flat',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.DL_ALL
                    ),
                },
                {
                    customStyle: ':host {--kul-font-size: 0.875em;}',
                    icon: 'auto-fix',
                    id: 'kul-debug-magic-box',
                    title: dom.ketchupLite.language.translate(
                        KulLanguageDebug.MAGIC_BOX
                    ),
                },
            ],
            combobox: [
                {
                    className: 'kul-full-height',
                    data: {
                        'kul-list': {
                            data: themesListData,
                            id: 'kul-debug-theme-changer-list',
                        },
                        'kul-text-field': {
                            className: 'kul-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchupLite.language.translate(
                                KulLanguageDebug.THEME_CHANGER
                            ),
                        },
                    },
                    id: 'kul-debug-theme-changer',
                    initialValue: dom.ketchupLite.theme.name,
                    isSelect: true,
                },
                {
                    className: 'kul-full-height',
                    data: {
                        'kul-list': {
                            data: languagesListData,
                            id: 'kul-debug-language-changer-list',
                        },
                        'kul-text-field': {
                            className: 'kul-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchupLite.language.translate(
                                KulLanguageDebug.LANGUAGE_CHANGER
                            ),
                        },
                    },
                    id: 'kul-debug-language-changer',
                    initialValue: dom.ketchupLite.language.name,
                    isSelect: true,
                },
                {
                    className: 'kul-full-height',
                    data: {
                        'kul-list': {
                            data: localesListData,
                            id: 'kul-debug-locale-changer-list',
                        },
                        'kul-text-field': {
                            className: 'kul-full-height',
                            emitSubmitEventOnEnter: false,
                            inputType: 'text',
                            label: dom.ketchupLite.language.translate(
                                KulLanguageDebug.LOCALE_CHANGER
                            ),
                        },
                    },
                    id: 'kul-debug-locale-changer',
                    initialValue: dom.ketchupLite.dates.locale,
                    isSelect: true,
                },
            ],
            textfield: [
                {
                    className: 'kul-full-height',
                    id: 'kul-debug-log-limit',
                    label: dom.ketchupLite.language.translate(
                        KulLanguageDebug.LOG_LIMIT
                    ),
                    initialValue: this.logLimit,
                    emitSubmitEventOnEnter: false,
                    inputType: 'number',
                },
            ],
        };
        debugWidget.customStyle =
            '#kul-debug-log-limit {width: 120px;} #kul-debug-theme-changer {width: 190px;} #kul-debug-language-changer {width: 190px;} #kul-debug-locale-changer {width: 190px;}';
        debugWidget.id = 'kul-debug-widget';
        debugWidget.layoutFamily = KulCardFamily.DIALOG;
        debugWidget.layoutNumber = 3;
        debugWidget.sizeX = 'max-content';
        debugWidget.sizeY = 'auto';
        const handler = this.handleEvents;
        debugWidget.addEventListener('kul-card-event', (e: CustomEvent) =>
            handler(e, this)
        );

        this.container.append(debugWidget);
        this.#debugWidget = debugWidget;
    }
    /**
     * Listens the card events and handles the related actions.
     * @param {CustomEvent<KulCardEventPayload>} e - kul-card-event.
     * @param {KulDebug} kulDebug - Instance of the KulDebug class.
     */
    /*private handleEvents(
        e: CustomEvent<KulCardEventPayload>,
        kulDebug: KulDebug
    ): void {
        const compEvent: CustomEvent = e.detail.event;
        const compID: string = compEvent.detail.id;
        switch (compEvent.type) {
            case 'kul-button-click':
                switch (compID) {
                    case 'kul-debug-autoprint':
                        kulDebug.autoPrint = !kulDebug.autoPrint;
                        break;
                    case 'kul-debug-clear':
                        kulDebug.widgetClear();
                        kulDebug.#debugWidget.refresh();
                        break;
                    case 'kul-debug-dl-props':
                        kulDebug.getProps().then((res: GenericObject) => {
                            kulDebug.downloadProps(res);
                        });
                        break;
                    case 'kul-debug-dl-all':
                        kulDebug.getProps(true).then((res: GenericObject) => {
                            kulDebug.downloadProps(res);
                        });
                        break;
                    case 'kul-debug-delete':
                        kulDebug.dump();
                        break;
                    case 'kul-debug-off':
                        kulDebug.toggle();
                        break;
                    case 'kul-debug-print':
                        kulDebug.widgetClear();
                        kulDebug.widgetPrint();
                        kulDebug.#debugWidget.refresh();
                        break;
                }
                break;
            case 'kul-combobox-itemclick':
                switch (compID) {
                    case 'kul-debug-language-changer':
                        dom.ketchupLite.language.set(compEvent.detail.value);
                        break;
                    case 'kul-debug-locale-changer':
                        dom.ketchupLite.dates.setLocale(compEvent.detail.value);
                        dom.ketchupLite.math.setLocale(compEvent.detail.value);
                        break;
                    case 'kul-debug-theme-changer':
                        dom.ketchupLite.theme.set(compEvent.detail.value);
                        break;
                }
            case 'kul-textfield-input':
                switch (compID) {
                    case 'kul-debug-log-limit':
                        if (
                            compEvent.detail.value === '' ||
                            compEvent.detail.value < 1
                        ) {
                            kulDebug.logLimit = 1;
                        } else {
                            kulDebug.logLimit = compEvent.detail.value;
                        }
                        break;
                }
        }
    }
    /**
     * Closes the debug widget.
     */
    /*private hideWidget() {
        this.#debugWidget.remove();
        this.#debugWidget = null;
    }
    /**
     * Clears all the printed logs inside the debug widget.
     */
    /*private widgetClear(): void {
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
    /*private widgetPrint(): void {
        const slots: Array<HTMLDivElement> = [];
        for (let index = 0; index < this.logs.length; index++) {
            // Wrapper div
            const slot: HTMLDivElement = document.createElement('div');
            slot.classList.add('text');
            switch (this.logs[index].category) {
                case KulDebugCategory.ERROR:
                    slot.style.backgroundColor =
                        'rgba(var(--kul-danger-color-rgb), 0.15)';
                    slot.style.borderLeft = '5px solid var(--kul-danger-color)';
                    break;
                case KulDebugCategory.WARNING:
                    slot.style.backgroundColor =
                        'rgba(var(--kul-warning-color-rgb), 0.15)';
                    slot.style.borderLeft =
                        '5px solid var(--kul-warning-color)';
                    break;
                case KulDebugCategory.INFO:
                default:
                    slot.style.borderLeft = '5px solid var(--kul-info-color)';
                    break;
            }
            // If the log is tied to a KulComponent, on click its props will be downloaded.
            // Also, a different style will be applied to distinguish it between the others.
            if (typeof this.logs[index].element == 'object') {
                slot.title = dom.ketchupLite.language.translate(
                    KulLanguageDebug.DL_PROPS_COMP
                );
                slot.style.fontWeight = 'bold';
                slot.style.cursor = 'pointer';
                slot.onclick = () => {
                    try {
                        (this.logs[index].element as KulComponent)
                            .getProps()
                            .then((res: GenericObject) => {
                                this.downloadProps(res);
                            });
                    } catch (err) {
                        this.logMessage(
                            'kul-debug',
                            err,
                            KulDebugCategory.WARNING
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
        let printLog: KulDebugLogPrint = {};
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
                .element as KulComponent);
            if (!printLog[type]) {
                printLog[type] = [];
            }
            printLog[type].push({
                date: dom.ketchupLite.dates.format(
                    this.logs[index].date,
                    'LLL:ms'
                ),
                element: isComponent
                    ? (this.logs[index].element as KulComponent)
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
                    'background-color: green; margin-right: 10px; border-radius: 50%',
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
                'background-color: blue; margin-right: 10px; border-radius: 50%',
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
    /*toggle(value?: boolean): void {
        if (typeof value !== 'boolean') {
            this.active = !this.active;
        } else {
            this.active = value;
        }
        if (this.active) {
            document.dispatchEvent(new CustomEvent('kul-debug-active'));
            if (!this.#debugWidget) {
                this.showWidget();
            }
        } else {
            document.dispatchEvent(new CustomEvent('kul-debug-inactive'));
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
     * 'tag' will contain the props of the component's html tag (i.e.: <kul-chip>).
     * 'props' will contain the developer defined props of the component, making it handy for test purposes.
     * @param {boolean} detail - If provided and true, the returned object will contain additional information (i.e.: className, id).
     * @returns {GenericObject} Props of the components.
     */
    /*async getProps(detail?: boolean): Promise<GenericObject> {
        let comps: Set<KulComponent> = new Set();
        let props: GenericObject = detail ? { descriptions: {} } : {};
        // Storing unique components inside "comps"
        for (let index = 0; index < this.logs.length; index++) {
            if (typeof this.logs[index].element !== 'string') {
                if (!comps.has(this.logs[index].element as KulComponent)) {
                    comps.add(this.logs[index].element as KulComponent);
                }
            }
        }
        // Object of two arrays, positionally matching each other.
        // One contains components, the other the relative promise.
        const matchingObject: {
            comps: KulComponent[];
            promises: Promise<GenericObject>[];
        } = {
            comps: [],
            promises: [],
        };
        comps.forEach((el: KulComponent) => {
            try {
                matchingObject.comps.push(el);
                matchingObject.promises.push(el.getProps());
            } catch (error) {
                this.logMessage(
                    'kul-debug',
                    'Exception when accessing "getProps" public method for component: ' +
                        el.rootElement.tagName,
                    KulDebugCategory.WARNING
                );
            }
        });
        // Returning "props", which is returned by the Promise.all
        return Promise.all(matchingObject.promises).then((responses) => {
            for (let index = 0; index < matchingObject.comps.length; index++) {
                const el: KulComponent = matchingObject.comps[index];
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
                                'kul-debug',
                                'Exception when accessing "getProps" public method for component: ' +
                                    el.rootElement.tagName,
                                KulDebugCategory.WARNING
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
     * Displays a timestamped message in the browser's console when the kulDebug property on document.documentElement is true.
     * Warnings and errors will be displayed even when kulDebug !== true.
     * @param {any} comp - The component calling this function or a string.
     * @param {string} message - The actual message that will be printed.
     * @param {KulDebugCategory} category - The type of console message, defaults to log but warning and error can be used as well.
     */
    logMessage(
        comp: KulComponent | string,
        message: string,
        category?: KulDebugCategory
    ): void {
        if ((!category || category === 'informational') && !this.isDebug()) {
            return;
        }
        const date: Date = new Date();
        if (!category) {
            category = 'informational';
        }
        let obj: object | string = null;
        let id: string = '';
        if (typeof comp !== 'string') {
            id =
                ' ' +
                (comp.rootElement as HTMLElement).tagName +
                '#' +
                (comp.rootElement as HTMLElement).id +
                ' => ';
            obj = comp;
        } else {
            id = ' ' + comp + ' => ';
            obj = '';
        }

        if (this.isDebug() && id.indexOf('#kul-debug') < 0) {
            const log: KulDebugLog = {
                category: category,
                date: date,
                element: obj,
                id: id,
                message: message,
            };
            if (this.logs.length > this.logLimit) {
                console.warn(
                    dom.ketchupLite.dates.format(date, 'LLL:ms') +
                        ' kul-debug => ' +
                        'Too many logs (> ' +
                        this.logLimit +
                        ')! Dumping (increase debug.logLimit to store more logs)... .'
                );
                this.dump();
            }
            this.logs.push(log);
            /*if (this.autoPrint && this.#debugWidget) {
                this.widgetClear();
                this.widgetPrint();
                this.#debugWidget.refresh();
            }*/
        }

        switch (category) {
            case 'error':
                console.error(
                    dom.ketchupLite.dates.format(date, 'LLL:ms') + id + message,
                    obj
                );
                window.dispatchEvent(
                    new CustomEvent('kul-debug-error', {
                        bubbles: true,
                        detail: { comp, date, message },
                    })
                );
                break;
            case 'warning':
                console.warn(
                    dom.ketchupLite.dates.format(date, 'LLL:ms') + id + message,
                    obj
                );
                break;
        }
    }
    /**
     * Function used to time the loading times of a component.
     * @param {any} KulComponent - The component calling this function or a string.
     * @param {boolean} didLoad - Must be set to false when called inside a componentWillLoad() lifecycle hook and true when called inside componentDidLoad().
     */
    async updateDebugInfo(
        comp: KulComponent,
        lifecycle: KulDebugLifecycles
    ): Promise<void> {
        switch (lifecycle) {
            case 'custom':
                if (this.isDebug()) {
                    this.logMessage(
                        comp,
                        'Custom breakpoint ' +
                            ' took ' +
                            (window.performance.now() -
                                comp.debugInfo.renderStart) +
                            'ms.'
                    );
                }
                break;
            case 'did-render':
                comp.debugInfo.renderEnd = window.performance.now();
                if (this.isDebug()) {
                    this.logMessage(
                        comp,
                        'Render #' +
                            comp.debugInfo.renderCount +
                            ' took ' +
                            (comp.debugInfo.renderEnd -
                                comp.debugInfo.renderStart) +
                            'ms.'
                    );
                }
                break;
            case 'did-load':
                comp.debugInfo.endTime = window.performance.now();
                this.logMessage(
                    comp,
                    'Component ready after ' +
                        (comp.debugInfo.endTime - comp.debugInfo.startTime) +
                        'ms.'
                );
                break;
            case 'will-render':
                comp.debugInfo.renderCount++;
                comp.debugInfo.renderStart = window.performance.now();
            default:
                break;
        }
    }
}
