import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Method,
    Prop,
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
    Row,
    Column,
    TableData,
} from '../kup-data-table/kup-data-table-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { getColumnByName } from '../../utils/cell-utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import { getProps, setProps } from '../../utils/utils';
import { GenericObject } from '../../types/GenericTypes';
import {
    KupCalendarDateClickEventPayload,
    KupCalendarEventClickEventPayload,
    KupCalendarEventDropEventPayload,
    KupCalendarProps,
    KupCalendarViewChangeEventPayload,
    KupCalendarViewTypes,
} from './kup-calendar-declarations';
import { FChip } from '../../f-components/f-chip/f-chip';
import {
    FChipData,
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import { KupLanguageGeneric } from '../../utils/kup-language/kup-language-declarations';
import { KupDatesLocales } from '../../utils/kup-dates/kup-dates-declarations';

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
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the calendar.
     * @default null
     */
    @Prop() data: TableData = null;
    /**
     * Column containing events' dates.
     * @default null
     */
    @Prop() dateCol: string = null;
    /**
     * Column containing events' descriptions.
     * @default null
     */
    @Prop() descrCol: string = null;
    /**
     * Column containing events' ending time.
     * @default null
     */
    @Prop() endCol: string = null;
    /**
     * When disabled, the navigation toolbar won't be displayed.
     * @default false
     */
    @Prop() hideNavigation = false;
    /**
     * Column containing events' icons. There can be multiple icons, divided by ";".
     * @default null
     */
    @Prop() iconCol: string = null;
    /**
     * Column containing events' images. There can be multiple images, divided by ";".
     * @default null
     */
    @Prop() imageCol: string = null;
    /**
     * Sets the initial date of the calendar. Must be in ISO format (YYYY-MM-DD).
     * @default null
     */
    @Prop() initialDate: string = null;
    /**
     * Column containing events' starting time.
     * @default null
     */
    @Prop() startCol: string = null;
    /**
     * Column containing events' CSS styles.
     * @default null
     */
    @Prop() styleCol: string = null;
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
    kupCalendarEventClicked: EventEmitter<KupCalendarEventClickEventPayload>;
    /**
     * When a date is clicked.
     */
    @Event({
        eventName: 'kup-calendar-dateclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarDateClicked: EventEmitter<KupCalendarDateClickEventPayload>;
    /**
     * When a date is dropped.
     */
    @Event({
        eventName: 'kup-calendar-eventdrop',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventDropped: EventEmitter<KupCalendarEventDropEventPayload>;
    /**
     * When the navigation change
     */
    @Event({
        eventName: 'kup-calendar-viewchange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarViewChanged: EventEmitter<KupCalendarViewChangeEventPayload>;

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

    private getColumns(): Column[] {
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

    private getRows(): Row[] {
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
            const chipData: FChipData = {
                value: key,
                label: this.kupManager.language.translate(
                    KupLanguageGeneric[key]
                ),
                checked: this.viewType === view ? true : false,
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

        this.kupCalendarViewChanged.emit({
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
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.calendar = new Calendar(this.calendarContainer, {
            dateClick: ({ date }) => {
                this.kupCalendarDateClicked.emit({
                    comp: this,
                    id: this.rootElement.id,
                    date: date,
                });
            },
            editable: true,
            eventClick: ({ event }) => {
                this.kupCalendarEventClicked.emit({
                    comp: this,
                    id: this.rootElement.id,
                    row: event.extendedProps.row,
                });
            },
            eventDidMount: (info) => {
                if (this.styleCol) {
                    const row: Row = info.event.extendedProps.row;
                    const cell = row.cells[this.styleCol];
                    const eventCell = info.el.children[0] as HTMLElement;
                    if (cell && cell.style) {
                        Object.keys(cell.style).forEach((k) => {
                            eventCell.style[k] = cell.style[k];
                        });
                    }
                }

                if (this.iconCol) {
                    const row: Row = info.event.extendedProps.row;
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
                    const row: Row = info.event.extendedProps.row;
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
            },
            eventDrop: ({ event, oldEvent }) => {
                this.kupCalendarEventDropped.emit({
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
            initialDate: this.initialDate,
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
        );
    }

    disconnectedCallback() {
        if (this.calendar) {
            this.calendar.destroy();
        }
        this.kupManager.language.unregister(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
    }
}
