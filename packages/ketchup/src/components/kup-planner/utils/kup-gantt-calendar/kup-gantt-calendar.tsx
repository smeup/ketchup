import { Component, h, Prop, State } from '@stencil/core';
import { KupPlannerCalendarProps } from '../../kup-planner-declarations';
import {
    getDaysInMonth,
    defaultDateTimeFormatters,
} from '../kup-planner-time-formatter';

@Component({
    tag: 'kup-gantt-calendar',
    styleUrl: 'kup-gantt-calendar.scss',
    shadow: false, // Enable Shadow DOM
})
export class KupGanttCalendar {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop()
    dateSetup: KupPlannerCalendarProps['dateSetup'];

    @Prop()
    locale: KupPlannerCalendarProps['locale'];

    @Prop()
    rtl: KupPlannerCalendarProps['rtl'];

    @Prop()
    headerHeight: KupPlannerCalendarProps['headerHeight'];

    @Prop()
    columnWidth: KupPlannerCalendarProps['columnWidth'];

    @Prop()
    fontFamily: KupPlannerCalendarProps['fontFamily'];

    @Prop()
    fontSize: KupPlannerCalendarProps['fontSize'];

    @Prop()
    dateTimeFormatters: KupPlannerCalendarProps['dateTimeFormatters'];

    @Prop()
    singleLineHeader: KupPlannerCalendarProps['singleLineHeader'] = false;

    @Prop()
    currentDateIndicator: KupPlannerCalendarProps['currentDateIndicator'];

    @Prop()
    svgWidth: number;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State() simplifiedHeader: boolean;

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.simplifiedHeader =
            this.singleLineHeader && this.dateSetup.viewMode !== 'year';
    }

    formatYear(date: Date) {
        return this.dateTimeFormatters?.year
            ? this.dateTimeFormatters?.year(date, this.locale)
            : defaultDateTimeFormatters.year(date, this.locale);
    }

    formatMonth(date: Date) {
        return this.dateTimeFormatters?.month
            ? this.dateTimeFormatters?.month(date, this.locale)
            : defaultDateTimeFormatters.month(date, this.locale);
    }

    formatMonthAndYear(date: Date) {
        return this.dateTimeFormatters?.monthAndYear
            ? this.dateTimeFormatters?.monthAndYear(date, this.locale)
            : defaultDateTimeFormatters.monthAndYear(date, this.locale);
    }

    formatWeek(date: Date) {
        return this.dateTimeFormatters?.week
            ? this.dateTimeFormatters?.week(date, this.locale)
            : defaultDateTimeFormatters.week(date, this.locale);
    }

    formatDay(date: Date) {
        return this.dateTimeFormatters?.day
            ? this.dateTimeFormatters?.day(date, this.locale)
            : defaultDateTimeFormatters.day(date, this.locale);
    }

    getCalendarValuesForYear() {
        const topValues: any[] = [];
        const bottomValues: JSX.Element[] = [];
        const topDefaultHeight = this.headerHeight * 0.5;
        const dates = this.dateSetup.dates;
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const bottomValue = this.formatYear(date);
            bottomValues.push(
                <text
                    key={bottomValue as string}
                    y={this.headerHeight * 0.8}
                    x={this.columnWidth * i + this.columnWidth * 0.5}
                    class="calendarBottomText"
                >
                    {bottomValue}
                </text>
            );

            if (i === 0 || date.getFullYear() !== dates[i - 1].getFullYear()) {
                const topValue = date.getFullYear().toString();
                let xText: number;
                if (this.rtl) {
                    xText = (6 + i + date.getFullYear() + 1) * this.columnWidth;
                } else {
                    xText = (6 + i - date.getFullYear()) * this.columnWidth;
                }
                topValues.push({
                    key: topValue,
                    value: topValue,
                    x1Line: this.columnWidth * i,
                    y1Line: 0,
                    y2Line: this.headerHeight,
                    xText: xText,
                    yText: topDefaultHeight * 0.9,
                });
            }
        }
        return [topValues, bottomValues];
    }

    getCalendarValuesForMonth() {
        const topValues: any[] = [];
        const bottomValues: JSX.Element[] = [];
        const topDefaultHeight = this.headerHeight * 0.5;
        const dates = this.dateSetup.dates;
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const bottomValue = this.formatMonth(date);
            bottomValues.push(
                <text
                    key={(bottomValue as string) + date.getFullYear()}
                    y={this.headerHeight * 0.8}
                    x={this.columnWidth * i + this.columnWidth * 0.5}
                    class="calendarBottomText"
                >
                    {bottomValue}
                </text>
            );
            if (i === 0 || date.getFullYear() !== dates[i - 1].getFullYear()) {
                const topValue = this.formatYear(date);
                let xText: number;
                if (this.rtl) {
                    xText = (6 + i + date.getMonth() + 1) * this.columnWidth;
                } else {
                    xText = (6 + i - date.getMonth()) * this.columnWidth;
                }
                topValues.push({
                    key: topValue,
                    value: topValue,
                    x1Line: this.columnWidth * i,
                    y1Line: 0,
                    y2Line: topDefaultHeight,
                    xText: xText,
                    yText: topDefaultHeight * 0.9,
                });
            }
        }
        return [topValues, bottomValues];
    }

    getCalendarValuesForWeek() {
        const topValues: any[] = [];
        const bottomValues: JSX.Element[] = [];
        let weeksCount: number = 1;
        const topDefaultHeight = this.headerHeight * 0.5;
        const dates = this.dateSetup.dates;
        for (let i = dates.length - 1; i >= 0; i--) {
            const date = dates[i];
            let topValue = '';
            if (i === 0 || date.getMonth() !== dates[i - 1].getMonth()) {
                // top
                topValue = this.formatMonthAndYear(date) as string;
            }
            // bottom
            const bottomValue = this.formatWeek(date);

            bottomValues.push(
                <text
                    key={date.getTime()}
                    y={this.headerHeight * 0.8}
                    x={this.columnWidth * (i + +this.rtl)}
                    class="calendarBottomText"
                >
                    {bottomValue}
                </text>
            );

            if (topValue) {
                // if last day is new month
                if (i !== dates.length - 1) {
                    topValues.push({
                        key: topValue,
                        value: topValue,
                        x1Line:
                            this.columnWidth * i +
                            weeksCount * this.columnWidth,
                        y1Line: 0,
                        y2Line: topDefaultHeight,
                        xText:
                            this.columnWidth * i +
                            this.columnWidth * weeksCount * 0.5,
                        yText: topDefaultHeight * 0.9,
                    });
                }
                weeksCount = 0;
            }
            weeksCount++;
        }
        return [topValues, bottomValues];
    }

    getCalendarValuesForDay() {
        const topValues: any[] = [];
        const bottomValues: JSX.Element[] = [];
        const topDefaultHeight = this.headerHeight * 0.5;
        const dates = this.dateSetup.dates;
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const bottomValue = this.formatDay(date);

            bottomValues.push(
                <text
                    key={date.getTime()}
                    y={this.headerHeight * 0.8}
                    x={this.columnWidth * i + this.columnWidth * 0.5}
                    class="calendarBottomText"
                >
                    {bottomValue}
                </text>
            );
            if (
                i + 1 !== dates.length &&
                date.getMonth() !== dates[i + 1].getMonth()
            ) {
                const topValue = this.formatMonth(date);

                topValues.push({
                    key: (topValue as string) + date.getFullYear(),
                    value: topValue,
                    x1Line: this.columnWidth * (i + 1),
                    y1Line: 0,
                    y2Line: topDefaultHeight,
                    xText:
                        this.columnWidth * (i + 1) -
                        getDaysInMonth(date.getMonth(), date.getFullYear()) *
                            this.columnWidth *
                            0.5,
                    yText: topDefaultHeight * 0.9,
                });
            }
        }
        return [topValues, bottomValues];
    }

    getTopAndBottomValues() {
        switch (this.dateSetup.viewMode) {
            case 'day':
                return this.getCalendarValuesForDay();
            case 'week':
                return this.getCalendarValuesForWeek();
            case 'month':
                return this.getCalendarValuesForMonth();
            case 'year':
                return this.getCalendarValuesForYear();
            default:
                break;
        }
    }

    render() {
        this.simplifiedHeader =
            this.singleLineHeader && this.dateSetup.viewMode !== 'year';
        const [topValues, bottomValues] = this.getTopAndBottomValues();

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={this.svgWidth}
                height={this.headerHeight}
            >
                <g
                    class="calendar"
                    font-size={this.fontSize}
                    font-family={this.fontFamily}
                >
                    <rect
                        x={0}
                        y={0}
                        width={this.columnWidth * this.dateSetup.dates.length}
                        height={this.headerHeight}
                        class="calendarHeader"
                    />
                    {this.simplifiedHeader ? null : bottomValues}
                    {this.simplifiedHeader
                        ? topValues.map((topValue) => (
                              <g class="calendarTop">
                                  <line
                                      x1={topValue.x1Line}
                                      y1={topValue.y2Line * 2}
                                      x2={topValue.x1Line}
                                      y2={topValue.y2Line}
                                      class="calendarTopTick"
                                      key={topValue.value + 'line'}
                                  />
                                  <text
                                      key={topValue.value + 'text'}
                                      y={topValue.yText}
                                      x={topValue.xText}
                                      class="calendarTopText"
                                  >
                                      {topValue.value}
                                  </text>
                              </g>
                          ))
                        : topValues.map((topValue) => (
                              <g class="calendarTop">
                                  <line
                                      x1={topValue.x1Line}
                                      y1={topValue.y1Line}
                                      x2={topValue.x1Line}
                                      y2={topValue.y2Line}
                                      class="calendarTopTick"
                                      key={topValue.value + 'line'}
                                  />
                                  <text
                                      key={topValue.value + 'text'}
                                      y={topValue.yText}
                                      x={topValue.xText}
                                      class="calendarTopText"
                                  >
                                      {topValue.value}
                                  </text>
                              </g>
                          ))}
                    {this.currentDateIndicator && (
                        // current date indicator
                        <circle
                            fill={this.currentDateIndicator.color}
                            cx={this.currentDateIndicator.x + 2.5}
                            cy={this.headerHeight - 8}
                            r="8"
                        />
                    )}
                </g>
            </svg>
        );
    }
}
