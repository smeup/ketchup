import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Method,
    Prop,
    Watch,
} from '@stencil/core';
import {
    Calendar,
    EventInput,
    EventSourceInput,
    LocaleInput,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import enLocale from '@fullcalendar/core/locales/en-gb';
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
import itLocale from '@fullcalendar/core/locales/it';
import plLocale from '@fullcalendar/core/locales/pl';
import ruLocale from '@fullcalendar/core/locales/ru';
import zhLocale from '@fullcalendar/core/locales/zh-cn';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getColumnByName } from '../../utils/cell-utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import { getProps, setProps } from '../../utils/utils';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupCalendarData,
    KupCalendarDateClickEventPayload,
    KupCalendarEventClickEventPayload,
    KupCalendarEventDropEventPayload,
    KupCalendarOptions,
    KupCalendarProps,
    KupCalendarViewChangeEventPayload,
    KupCalendarViewTypes,
} from './kup-calendar-declarations';
import { FChip } from '../../f-components/f-chip/f-chip';
import {
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { KupDatesLocales } from '../../managers/kup-dates/kup-dates-declarations';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupChipNode } from '../kup-chip/kup-chip-declarations';

@Component({
    tag: 'kup-calendar',
    styleUrl: 'kup-calendar.scss',
    shadow: true,
})
export class KupCalendar {
    /**
     * References the root HTML element of the component (<kup-button>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the initial date of the calendar. Must be in ISO format (YYYY-MM-DD).
     * @default null
     */
    @Prop() currentDate: string = null;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the calendar.
     * @default null
     */
    @Prop() data: KupCalendarData = null;
    /**
     * When disabled, the navigation toolbar won't be displayed.
     * @default false
     */
    @Prop() hideNavigation = false;
    /**
     * Type of the view.
     * @default KupCalendarViewTypes.MONTH
     */
    @Prop({ mutable: true }) viewType: KupCalendarViewTypes =
        KupCalendarViewTypes.MONTH;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private calendar: Calendar;
    private calendarContainer: HTMLDivElement = null;
    private kupManager: KupManager = kupManagerInstance();
    private navTitle: HTMLDivElement = null;
    private resizeTimeout: number = null;
    private dateCol: string = null;
    private descrCol: string = null;
    private endCol: string = null;
    private iconCol: string = null;
    private imageCol: string = null;
    private startCol: string = null;
    private styleCol: string = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * When an event is clicked.
     */
    @Event({
        eventName: 'kup-calendar-eventclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventClick: EventEmitter<KupCalendarEventClickEventPayload>;
    /**
     * When a date is clicked.
     */
    @Event({
        eventName: 'kup-calendar-dateclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarDateClick: EventEmitter<KupCalendarDateClickEventPayload>;
    /**
     * When a date is dropped.
     */
    @Event({
        eventName: 'kup-calendar-eventdrop',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventDrop: EventEmitter<KupCalendarEventDropEventPayload>;
    /**
     * When the navigation change
     */
    @Event({
        eventName: 'kup-calendar-viewchange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarViewChange: EventEmitter<KupCalendarViewChangeEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    @Watch('currentDate')
    setCalendarData() {
        if (this.calendar) {
            this.calendar.destroy();
        }
        for (
            let index = 0;
            this.data && this.data.columns && index < this.data.columns.length;
            index++
        ) {
            const column = this.data.columns[index];
            switch (column.calendarOption) {
                case KupCalendarOptions.DATE:
                    this.dateCol = column.name;
                    break;
                case KupCalendarOptions.DESCR:
                    this.descrCol = column.name;
                    break;
                case KupCalendarOptions.END:
                    this.endCol = column.name;
                    break;
                case KupCalendarOptions.ICON:
                    this.iconCol = column.name;
                    break;
                case KupCalendarOptions.IMAGE:
                    this.imageCol = column.name;
                    break;
                case KupCalendarOptions.START:
                    this.startCol = column.name;
                    break;
                case KupCalendarOptions.STYLE:
                    this.styleCol = column.name;
                    break;
            }
        }
        this.calendar = new Calendar(this.calendarContainer, {
            dateClick: ({ date }) => {
                this.kupCalendarDateClick.emit({
                    comp: this,
                    id: this.rootElement.id,
                    date: date,
                });
            },
            editable: true,
            eventClick: ({ event }) => {
                this.kupCalendarEventClick.emit({
                    comp: this,
                    id: this.rootElement.id,
                    row: event.extendedProps.row,
                });
            },
            eventDidMount: (info) => {
                if (this.iconCol) {
                    const row: KupDataRow = info.event.extendedProps.row;
                    const cell = row.cells[this.iconCol];
                    if (cell && cell.value) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('icon-wrapper');

                        cell.value.split(';').forEach((icon) => {
                            const span = document.createElement('span');
                            span.className = 'custom-icon';
                            const path: string = getAssetPath(
                                `./assets/svg/${icon}.svg`
                            );
                            span.style.mask = `url('${path}') no-repeat center`;
                            span.style.webkitMask = `url('${path}') no-repeat center`;
                            wrapper.appendChild(span);
                        });

                        info.el.appendChild(wrapper);
                    }
                }

                if (this.imageCol) {
                    const row: KupDataRow = info.event.extendedProps.row;
                    const cell = row.cells[this.imageCol];
                    if (cell && cell.value) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('image-wrapper');

                        cell.value.split(';').forEach((icon) => {
                            const img = document.createElement('img');
                            img.src = icon;
                            wrapper.appendChild(img);
                        });

                        info.el.appendChild(wrapper);
                    }
                }

                if (this.styleCol) {
                    const row: KupDataRow = info.event.extendedProps.row;
                    const cell = row.cells[this.styleCol];
                    const eventCell = info.el.children[0] as HTMLElement;
                    const parent = eventCell.parentElement;
                    if (cell && cell.style) {
                        Object.keys(cell.style).forEach((k) => {
                            parent.style[k] = cell.style[k];
                        });
                    }
                }
            },
            eventDrop: ({ event, oldEvent }) => {
                this.kupCalendarEventDrop.emit({
                    comp: this,
                    id: this.rootElement.id,
                    fromDate: {
                        start: oldEvent.start,
                        end: oldEvent.end,
                    },
                    toDate: {
                        start: event.start,
                        end: event.end,
                    },
                });
            },
            events: this.getEvents(),
            headerToolbar: false,
            initialDate: this.currentDate,
            initialView: this.viewType,
            locale: this.getLocale(),
            locales: [
                esLocale,
                frLocale,
                itLocale,
                plLocale,
                ruLocale,
                zhLocale,
            ],
            plugins: [
                dayGridPlugin,
                interactionPlugin,
                listPlugin,
                timeGridPlugin,
            ],
        });
        this.calendar.render();
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupCalendarProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        window.clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(() => {
            this.refresh();
        }, 300);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupCalendarProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private changeView(view: KupCalendarViewTypes) {
        this.viewType = view;
        this.calendar.changeView(view);
        this.emitNavEvent();
    }

    private getColumns(): KupDataColumn[] {
        if (this.data && this.data.rows) {
            return this.data.columns;
        }

        return [];
    }

    private getLocale(): LocaleInput {
        switch (this.kupManager.dates.locale) {
            case KupDatesLocales.CHINESE:
                return zhLocale;
            case KupDatesLocales.FRENCH:
                return frLocale;
            case KupDatesLocales.ITALIAN:
                return itLocale;
            case KupDatesLocales.POLISH:
                return plLocale;
            case KupDatesLocales.RUSSIAN:
                return ruLocale;
            case KupDatesLocales.SPANISH:
                return esLocale;
            default:
                return enLocale;
        }
    }

    private getRows(): KupDataRow[] {
        if (this.data && this.data.rows) {
            return this.data.rows;
        }

        return [];
    }

    private setChipProps(): FChipsProps {
        const props: FChipsProps = {
            data: [],
            onClick: [],
            type: FChipType.CHOICE,
            wrapperClass: 'navigation__choice',
        };
        for (const key in KupCalendarViewTypes) {
            const view: KupCalendarViewTypes = KupCalendarViewTypes[key];
            const chipData: KupChipNode = {
                checked: this.viewType === view ? true : false,
                value: this.kupManager.language.translate(
                    KupLanguageGeneric[key]
                ),
                id: key,
            };
            props.data.push(chipData);
            props.onClick.push(() => this.changeView(view));
        }
        return props;
    }

    private getEvents(): EventSourceInput {
        const isHourRange =
            this.startCol &&
            this.endCol &&
            getColumnByName(this.getColumns(), this.startCol) &&
            getColumnByName(this.getColumns(), this.endCol);

        return this.getRows().map((row) => {
            const cell = row.cells[this.dateCol];
            let startDate = this.kupManager.dates.toDayjs(cell.value);
            let endDate = this.kupManager.dates.toDayjs(cell.value);

            if (isHourRange) {
                const startCell = row.cells[this.startCol];
                const endCell = row.cells[this.endCol];

                if (startCell && endCell) {
                    const dayjsStart = this.kupManager.dates.toDayjs(
                        startCell.value,
                        'HH:mm:ss'
                    );
                    const dayjsEnd = this.kupManager.dates.toDayjs(
                        endCell.value,
                        'HH:mm:ss'
                    );

                    startDate = startDate.hour(dayjsStart.hour());
                    startDate = startDate.minute(dayjsStart.minute());
                    startDate = startDate.second(dayjsStart.second());

                    endDate = endDate.hour(dayjsEnd.hour());
                    endDate = endDate.minute(dayjsEnd.minute());
                    endDate = endDate.second(dayjsEnd.second());
                }
            }

            const el: EventInput = {
                allDay: isHourRange ? false : true,
                end: endDate.toISOString(),
                extendedProps: {
                    row,
                },
                start: startDate.toISOString(),
                title: row.cells[this.descrCol].value,
            };

            return el;
        });
    }

    private onPrev() {
        this.calendar.prev();
        this.updateCalendar();
        this.emitNavEvent();
    }

    private onNext() {
        this.calendar.next();
        this.updateCalendar();
        this.emitNavEvent();
    }

    private onToday() {
        this.calendar.today();
        this.updateCalendar();
    }

    private emitNavEvent() {
        // see https://fullcalendar.io/docs/view-object
        const to: Date = this.kupManager.dates
            .subtract(this.calendar.view.currentEnd, 1, 'day')
            .toDate();

        this.kupCalendarViewChange.emit({
            comp: this,
            id: this.rootElement.id,
            from: this.calendar.view.currentStart,
            to,
        });
    }

    private updateCalendar() {
        if (this.calendar) {
            this.calendar.setOption('locale', this.getLocale());
            this.navTitle.innerText = this.calendar.currentData.viewTitle;
            this.calendar.updateSize();
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.setCalendarData();
        this.updateCalendar();
        this.kupManager.resize.observe(this.rootElement);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.updateCalendar();
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="navigation">
                        {!this.hideNavigation ? (
                            <div class="navigation__left">
                                <FButton
                                    icon="chevron_left"
                                    onClick={() => this.onPrev()}
                                    title={this.kupManager.language.translate(
                                        KupLanguageGeneric.PREVIOUS
                                    )}
                                    wrapperClass="navigation__prev"
                                />
                                <FButton
                                    icon="calendar"
                                    onClick={() => this.onToday()}
                                    title={this.kupManager.language.translate(
                                        KupLanguageGeneric.TODAY
                                    )}
                                    wrapperClass="navigation__today"
                                />
                                <FButton
                                    icon="chevron_right"
                                    onClick={() => this.onNext()}
                                    title={this.kupManager.language.translate(
                                        KupLanguageGeneric.NEXT
                                    )}
                                    wrapperClass="navigation__next"
                                />
                            </div>
                        ) : null}
                        <div
                            class={`navigation__title ${
                                this.hideNavigation
                                    ? 'navigation__title--centered'
                                    : ''
                            }`}
                            ref={(el) => {
                                this.navTitle = el;
                            }}
                        ></div>
                        {!this.hideNavigation ? (
                            <div class="navigation__right">
                                <FChip {...this.setChipProps()}></FChip>
                            </div>
                        ) : null}
                    </div>
                    <div
                        class="calendar"
                        ref={(el) => (this.calendarContainer = el)}
                    ></div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.calendar) {
            this.calendar.destroy();
        }
        this.kupManager.dates.unregister(this);
        this.kupManager.language.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
    }
}
