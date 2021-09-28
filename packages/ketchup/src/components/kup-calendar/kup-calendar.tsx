import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
} from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    DataTable,
    Row,
    Column,
} from '../kup-data-table/kup-data-table-declarations';
import { formatToMomentDate } from '../../utils/cell-formatter';
import moment from 'moment';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { getColumnByName } from '../../utils/cell-utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';

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

    @Prop() data: DataTable;
    @Prop({ reflect: true }) dateCol: string;
    @Prop({ reflect: true }) descrCol: string;
    @Prop({ reflect: true }) styleCol: string;
    @Prop({ reflect: true }) iconCol: string;
    @Prop({ reflect: true }) imageCol: string;
    @Prop({ reflect: true }) startCol: string;
    @Prop({ reflect: true }) endCol: string;
    @Prop({ reflect: true }) weekView = false;
    @Prop({ reflect: true }) hideNavigation = false;
    @Prop({ reflect: true }) initialDate: string;

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
    kupCalendarEventClicked: EventEmitter<Row>;
    /**
     * When a date is clicked.
     */
    @Event({
        eventName: 'kup-calendar-dateclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarDateClicked: EventEmitter<Date>;
    /**
     * When a date is dropped.
     */
    @Event({
        eventName: 'kup-calendar-eventdrop',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarEventDropped: EventEmitter<{
        fromDate: {
            start: Date;
            end: Date;
        };
        toDate: {
            start: Date;
            end: Date;
        };
    }>;
    /**
     * When the navigation change
     */
    @Event({
        eventName: 'kup-calendar-viewchange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCalendarViewChanged: EventEmitter<{
        from: Date;
        to: Date;
    }>;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private calendar: Calendar;
    private calendarContainer: HTMLDivElement = null;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private getColumns(): Column[] {
        if (this.data && this.data.rows) {
            return this.data.columns;
        }

        return [];
    }

    private getRows(): Row[] {
        if (this.data && this.data.rows) {
            return this.data.rows;
        }

        return [];
    }

    private getEvents() {
        const isHourRange =
            this.startCol &&
            this.endCol &&
            getColumnByName(this.getColumns(), this.startCol) &&
            getColumnByName(this.getColumns(), this.endCol);

        return this.getRows().map((row) => {
            const startDate = formatToMomentDate(row.cells[this.dateCol]);
            const endDate = formatToMomentDate(row.cells[this.dateCol]);

            if (isHourRange) {
                const startCell = row.cells[this.startCol];
                const endCell = row.cells[this.endCol];

                if (startCell && endCell) {
                    const momentStart = moment(startCell.value, 'HH:mm:ss');
                    const momentEnd = moment(endCell.value, 'HH:mm:ss');

                    startDate.hours(momentStart.hours());
                    startDate.minutes(momentStart.minutes());
                    startDate.seconds(momentStart.seconds());

                    endDate.hours(momentEnd.hours());
                    endDate.minutes(momentEnd.minutes());
                    endDate.seconds(momentEnd.seconds());
                }
            }

            const allDay = !isHourRange;

            return {
                title: row.cells[this.descrCol].value,
                allDay,
                start: startDate.toISOString(),
                end: endDate.toISOString(),
                extendedProps: {
                    row,
                },
            };
        });
    }
    private onPrev() {
        this.calendar.prev();
        this.emitNavEvent();
    }

    private onNext() {
        this.calendar.next();
        this.emitNavEvent();
    }

    private onToday() {
        this.calendar.today();
    }

    private emitNavEvent() {
        // see https://fullcalendar.io/docs/view-object
        const to: Date = moment(this.calendar.view.currentEnd)
            .subtract(1, 'day')
            .toDate();

        this.kupCalendarViewChanged.emit({
            from: this.calendar.view.currentStart,
            to,
        });
    }

    /**
     * Set the events of the component and instantiates Material Design.
     */
    private setEvents(): void {
        const root = this.rootElement.shadowRoot;
        if (root) {
            const prev: HTMLElement = root.querySelector('.navigation__prev');
            if (prev) {
                const buttonEl = prev.querySelector('button');
                if (buttonEl) {
                    buttonEl.onclick = () => this.onPrev();
                }
            }
            const today: HTMLElement = root.querySelector('.navigation__today');
            if (today) {
                const buttonEl = today.querySelector('button');
                if (buttonEl) {
                    buttonEl.onclick = () => this.onToday();
                }
            }
            const next: HTMLElement = root.querySelector('.navigation__next');
            if (next) {
                const buttonEl = next.querySelector('button');
                if (buttonEl) {
                    buttonEl.onclick = () => this.onNext();
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        const plugins = [interactionPlugin];
        if (this.weekView) {
            plugins.push(timeGridPlugin);
        } else {
            plugins.push(dayGridPlugin);
        }

        this.calendar = new Calendar(this.calendarContainer, {
            plugins,
            editable: true,
            events: this.getEvents(),
            headerToolbar: {
                left: '',
                center: 'title',
                right: '',
            },
            initialView: this.weekView ? 'timeGridWeek' : 'dayGridMonth',
            dateClick: ({ date }) => {
                this.kupCalendarDateClicked.emit(date);
            },
            eventClick: ({ event }) => {
                this.kupCalendarEventClicked.emit(event.extendedProps.row);
            },
            eventDidMount: (info) => {
                if (this.styleCol) {
                    const row: Row = info.event.extendedProps.row;
                    const cell = row.cells[this.styleCol];
                    if (cell && cell.style) {
                        Object.keys(cell.style).forEach(
                            (k) => (info.el.style[k] = cell.style[k])
                        );
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
                            span.className = icon;
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
        });
        this.calendar.render();
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.setEvents();
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <div id={componentWrapperId}>
                {this.hideNavigation ? null : (
                    <div class="navigation">
                        <FButton
                            icon="chevron_left"
                            wrapperClass="navigation__prev"
                        />
                        <FButton
                            icon="calendar"
                            wrapperClass="navigation__today"
                        />
                        <FButton
                            icon="chevron_right"
                            wrapperClass="navigation__next"
                        />
                    </div>
                )}
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
        this.kupManager.theme.unregister(this);
    }
}
