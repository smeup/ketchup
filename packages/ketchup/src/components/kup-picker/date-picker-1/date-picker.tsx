import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Listen,
    Method,
    Watch,
} from '@stencil/core';
import { DAY, DAY_OF_MONTH, STATE } from './date-picker-declarations';

@Component({
    tag: 'date-picker1',
    styleUrl: 'date-picker.scss',
    shadow: true,
})
export class DatePicker1 {
    @Prop() value: string = '';

    private oneDay = 60 * 60 * 24 * 1000;
    private todayTimestamp =
        Date.now() -
        (Date.now() % this.oneDay) +
        new Date().getTimezoneOffset() * 1000 * 60;

    private state: STATE;

    //---- Events ----

    @Event({
        eventName: 'datepicker-value-updated',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    valueUpdated: EventEmitter<{
        value: any;
    }>;

    componentWillLoad() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        this.state = {
            year: year,
            month: month,
            selectedDay: this.todayTimestamp,
            monthDetails: this.getMonthDetails(year, month),
        };
    }

    /**
     *  Core
     */

    daysMap = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    monthMap = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    getDayDetails(args: DAY_OF_MONTH): DAY {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date =
            (date < 0
                ? prevMonthNumberOfDays + date
                : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month,
            timestamp,
            dayString: this.daysMap[day],
        };
    }

    getNumberOfDays(year: number, month: number) {
        return 40 - new Date(year, month, 40).getDate();
    }

    getMonthDetails(year: number, month: number): any[] {
        let firstDay = new Date(year, month).getDay();
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0;
        let cols = 7;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let day: DAY_OF_MONTH = {
                    index: index,
                    numberOfDays: numberOfDays,
                    firstDay: firstDay,
                    year: year,
                    month: month,
                };
                currentDay = this.getDayDetails(day);
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    isCurrentDay(day: DAY) {
        return day.timestamp === this.todayTimestamp;
    }

    isSelectedDay(day: DAY) {
        return day.timestamp === this.state.selectedDay;
    }

    getDateFromDateString(dateValue: string) {
        let dateData = dateValue.split('-').map((d) => parseInt(d, 10));
        if (dateData.length < 3) return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return { year, month, date };
    }

    getMonthStr(month: number) {
        this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
    }

    getDateStringFromTimestamp(timestamp: number) {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();
        return (
            dateObject.getFullYear() +
            '-' +
            (month < 10 ? '0' + month : month) +
            '-' +
            (date < 10 ? '0' + date : date)
        );
    }

    setDate(dateData) {
        let selectedDay = new Date(
            dateData.year,
            dateData.month - 1,
            dateData.date
        ).getTime();
        this.setState({ selectedDay: selectedDay });
        // cacca emit onchange
    }

    @Watch('value')
    refreshStateFromValue() {
        let dateData = this.getDateFromDateString(this.value);
        if (dateData !== null) {
            this.setDate(dateData);
            this.setState({
                year: dateData.year,
                month: dateData.month - 1,
                monthDetails: this.getMonthDetails(
                    dateData.year,
                    dateData.month - 1
                ),
            });
        }
    }

    refreshValueFromState() {
        this.value = new Date(this.state.selectedDay).toISOString();
    }

    onDateClick(day: DAY, e?: MouseEvent) {
        if (e != null) {
            e.stopPropagation();
        }
        console.log('date-picker onDateClick()');
        this.setState({ selectedDay: day.timestamp });
        this.refreshValueFromState();
        this.valueUpdated.emit({
            value: this.value,
        });
    }

    setYear(offset: number, e?: MouseEvent) {
        if (e != null) {
            e.stopPropagation();
        }
        let year = this.state.year + offset;
        let month = this.state.month;
        this.setState({
            year: year,
            monthDetails: this.getMonthDetails(year, month),
        });
    }

    setState(newStateInfo: STATE) {
        let newState: STATE = {
            year: newStateInfo.year ? newStateInfo.year : this.state.year,
            month: newStateInfo.month ? newStateInfo.month : this.state.month,
            selectedDay: newStateInfo.selectedDay
                ? newStateInfo.selectedDay
                : this.state.selectedDay,
            monthDetails: newStateInfo.monthDetails
                ? newStateInfo.monthDetails
                : this.state.monthDetails,
        };

        this.state = newState;
    }

    setMonth(offset, e?: MouseEvent) {
        if (e != null) {
            e.stopPropagation();
        }
        let year = this.state.year;
        let month = this.state.month + offset;
        if (month === -1) {
            month = 11;
            year--;
        } else if (month === 12) {
            month = 0;
            year++;
        }
        this.setState({
            year,
            month,
            monthDetails: this.getMonthDetails(year, month),
        });
    }

    /**
     *  Renderers
     */

    renderCalendar() {
        let days = this.state.monthDetails.map((day, index) => {
            return (
                <div
                    class={
                        'c-day-container ' +
                        (day.month !== 0 ? ' disabled' : '') +
                        (this.isCurrentDay(day) ? ' highlight' : '') +
                        (this.isSelectedDay(day) ? ' highlight-green' : '')
                    }
                    key={index}
                >
                    <div class="cdc-day">
                        <span onClick={(e) => this.onDateClick(day, e)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            );
        });

        return (
            <div class="c-container">
                <div class="cc-head">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
                        (d, i) => (
                            <div key={i} class="cch-name">
                                {d}
                            </div>
                        )
                    )}
                </div>
                <div class="cc-body">{days}</div>
            </div>
        );
    }

    render() {
        return (
            <div class="kup-component">
                <div class="mdp-container">
                    <div class="mdpc-head">
                        <div class="mdpch-button">
                            <div
                                class="mdpchb-inner"
                                onClick={(e) => this.setYear(-1, e)}
                            >
                                <span class="mdpchbi-left-arrows"></span>
                            </div>
                        </div>
                        <div class="mdpch-button">
                            <div
                                class="mdpchb-inner"
                                onClick={(e) => this.setMonth(-1, e)}
                            >
                                <span class="mdpchbi-left-arrow"></span>
                            </div>
                        </div>
                        <div class="mdpch-container">
                            <div class="mdpchc-year">{this.state.year}</div>
                            <div class="mdpchc-month">
                                {this.getMonthStr(this.state.month)}
                            </div>
                        </div>
                        <div class="mdpch-button">
                            <div
                                class="mdpchb-inner"
                                onClick={(e) => this.setMonth(1, e)}
                            >
                                <span class="mdpchbi-right-arrow"></span>
                            </div>
                        </div>
                        <div
                            class="mdpch-button"
                            onClick={(e) => this.setYear(1, e)}
                        >
                            <div class="mdpchb-inner">
                                <span class="mdpchbi-right-arrows"></span>
                            </div>
                        </div>
                    </div>
                    <div class="mdpc-body">{this.renderCalendar()}</div>
                </div>
            </div>
        );
    }
}
