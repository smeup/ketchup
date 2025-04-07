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
    State,
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
    KupCalendarColumnsProp,
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
import {
    KupDatesFormats,
    KupDatesLocales,
} from '../../managers/kup-dates/kup-dates-declarations';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupChipNode } from '../kup-chip/kup-chip-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupStore } from '../kup-state/kup-store';
import { KupCalendarState } from './kup-calendar-state';

@Component({
    tag: 'kup-calendar',
    styleUrl: 'kup-calendar.scss',
    shadow: true,
})
export class KupCalendar {
    /**
     * References the root HTML element of the component (<kup-calendar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    state: KupCalendarState = new KupCalendarState();

    private initialDate: string; // ISO without time;

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state: KupCalendarState = this.store.getState(this.stateId);
            if (state) {
                this.kupManager.debug.logMessage(
                    this,
                    'Initialize with state for stateId ' +
                        this.stateId +
                        ': ' +
                        state
                );
                this.initialDate = state.initialDate ?? this.initialDate;
                this.viewType = state.viewType ?? this.viewType;
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = false;

            if (this.state.initialDate !== this.initialDate) {
                this.state.initialDate = this.initialDate;
                somethingChanged = true;
            }

            if (this.state.viewType !== this.viewType) {
                this.state.viewType = this.viewType;
                somethingChanged = true;
            }

            if (somethingChanged) {
                this.kupManager.debug.logMessage(
                    this,
                    'Persisting state for stateId ' +
                        this.stateId +
                        ': ' +
                        this.state
                );
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

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
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the calendar.
     * @default null
     */
    @Prop() data: KupCalendarData = null;
    /**
     * Sets which columns of the data property will be used to render each
     * characteristic of an event in the calendar.
     * @default {KupCalendarOptions: ""}
     */
    @Prop() calendarColumns: KupCalendarColumnsProp = {
        [KupCalendarOptions.DATE]: '',
        [KupCalendarOptions.DESCR]: '',
        [KupCalendarOptions.END]: '',
        [KupCalendarOptions.ICON]: '',
        [KupCalendarOptions.IMAGE]: '',
        [KupCalendarOptions.START]: '',
        [KupCalendarOptions.STYLE]: '',
    };
    /**
     * When disabled, the navigation toolbar won't be displayed.
     * @default false
     */
    @Prop() hideNavigation = false;
    /**
     * When true, events are editable.
     * @default true
     */
    @Prop() editableEvents: boolean = true;
    /**
     * When true, it will show the changeView
     * @default false
     */
    @Prop() enableChangeView = false;
    /**
     * Type of the view.
     * @default KupCalendarViewTypes.MONTH
     */
    @Prop({ mutable: true }) viewType: KupCalendarViewTypes =
        KupCalendarViewTypes.MONTH;

    @Prop() stateId: string = '';
    @Prop() store: KupStore;

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
        if (!this.calendarContainer) {
            return;
        }
        if (this.calendar) {
            this.calendar.destroy();
        }

        if (this.data?.columns) {
            this.data.columns.forEach((column) => {
                for (const key in this.calendarColumns) {
                    if (this.calendarColumns[key] === column.name) {
                        this[`${key}Col`] = column.name;
                        break;
                    }
                }
            });
        }
        this.calendar = new Calendar(this.calendarContainer, {
            datesSet: (info) => {
                const isoDate = info.startStr.substring(0, 10);
                const date = new Date(isoDate);
                if (
                    this.viewType === KupCalendarViewTypes.MONTH &&
                    date.getDate() > 1
                ) {
                    date.setDate(1);
                    date.setMonth(date.getMonth() + 1);
                    this.initialDate = date.toISOString().substring(0, 10);
                } else {
                    this.initialDate = isoDate;
                }

                this.persistState();
            },
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
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
            },
            eventDidMount: (info) => {
                if (this.iconCol) {
                    const row: KupDataRow = info.event.extendedProps.row;
                    const cell = row.cells[this.iconCol];
                    if (cell?.value) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('icon-wrapper');
                        cell.value.split(';').forEach((icon) => {
                            if (icon) {
                                const span = document.createElement('span');
                                span.className = 'custom-icon';
                                const path: string = getAssetPath(
                                    `./assets/svg/${icon}.svg`
                                );
                                span.style.mask = `url('${path}') no-repeat center`;
                                span.style.webkitMask = `url('${path}') no-repeat center`;
                                wrapper.appendChild(span);
                            }
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
            eventContent: function (arg) {
                const timeText = arg.timeText;
                const title = arg.event.title;

                return {
                    html: `
                    <div style="display: flex; flex-direction: column;">
                      <div style="font-weight: bold;">${timeText}</div>
                      <div>${title}</div>
                    </div>
                  `,
                };
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
                    row: oldEvent.extendedProps?.row,
                });
            },
            events: this.getEvents(),
            headerToolbar: false,
            initialDate: this.initialDate ?? this.currentDate,
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
        // TODO: implementation of separate event management for the changeview
        // this.emitNavEvent();
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

        let events = {};
        try {
            if (!this.dateCol || !this.descrCol) {
                throw new Error(
                    'dateCol or/and descrCol are not specified, check calendarColums props'
                );
            }
            events = this.getRows().map((row) => {
                const cell = row.cells[this.dateCol];
                if (cell) {
                    let startDate = this.kupManager.dates.toDayjs(cell.value);
                    let endDate = this.kupManager.dates.toDayjs(cell.value);

                    if (isHourRange) {
                        const startCell = row.cells[this.startCol];
                        const endCell = row.cells[this.endCol];

                        if (startCell && endCell) {
                            const dayjsStart = this.kupManager.dates.toDayjs(
                                startCell.value,
                                KupDatesFormats.ISO_TIME
                            );
                            const dayjsEnd = this.kupManager.dates.toDayjs(
                                endCell.value,
                                KupDatesFormats.ISO_TIME
                            );

                            if (dayjsStart && dayjsEnd) {
                                startDate = startDate.hour(dayjsStart.hour());
                                startDate = startDate.minute(
                                    dayjsStart.minute()
                                );
                                startDate = startDate.second(
                                    dayjsStart.second()
                                );

                                endDate = endDate.hour(dayjsEnd.hour());
                                endDate = endDate.minute(dayjsEnd.minute());
                                endDate = endDate.second(dayjsEnd.second());
                            } else {
                                this.kupManager.debug.logMessage(
                                    this,

                                    `error while converting hour range: [${
                                        dayjsStart
                                            ? `start hour: ${dayjsStart}`
                                            : `invalid start hour: ${startCell.value}`
                                    }, ${
                                        dayjsEnd
                                            ? `end hour: ${dayjsEnd}`
                                            : `invalid end hour: ${endCell.value}`
                                    }]`,
                                    KupDebugCategory.WARNING
                                );
                            }
                        }
                    }

                    if (endDate && startDate) {
                        const el: EventInput = {
                            allDay: isHourRange ? false : true,
                            editable: this.editableEvents,
                            end: endDate.toISOString(),
                            extendedProps: {
                                row,
                            },
                            start: startDate.toISOString(),
                            title: row.cells[this.descrCol].value,
                        };
                        return el;
                    } else {
                        this.kupManager.debug.logMessage(
                            this,
                            `error while converting dates: [${
                                startDate
                                    ? `start date: ${startDate}`
                                    : `invalid start date: ${cell.value}`
                            }. ${
                                endDate
                                    ? `end date: ${endDate}`
                                    : `invalid end date: ${cell.value}`
                            }]`,
                            KupDebugCategory.WARNING
                        );
                    }
                }
            });
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                `Unable to create calendard events, caused by: ${error}`,
                KupDebugCategory.ERROR
            );
        }

        return events;
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
        this.emitNavEvent();
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
            this.navTitle.innerText = this.calendar.getCurrentData().viewTitle;
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
        this.initWithPersistedState();
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
                        <div class="navigation__right">
                            {this.enableChangeView ? (
                                <FChip {...this.setChipProps()}></FChip>
                            ) : null}
                        </div>
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
