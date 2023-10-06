import { Component, h, Prop, Element, Watch } from '@stencil/core';
import {
    KupPlannerTaskGanttProps
} from '../../kup-planner-declarations';
@Component({
    tag: 'kup-task-gantt',
    styleUrl: '',
    shadow: false,
})
export class TaskGantt {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    gridProps: KupPlannerTaskGanttProps['gridProps'];

    @Prop()
    calendarProps: KupPlannerTaskGanttProps['calendarProps'];

    @Prop()
    barProps: KupPlannerTaskGanttProps['barProps'];

    @Prop()
    taskGanttRef: KupPlannerTaskGanttProps['taskGanttRef'];

    @Prop()
    ganttHeight: KupPlannerTaskGanttProps['ganttHeight'];

    @Prop({ mutable: true })
    scrollY: KupPlannerTaskGanttProps['scrollY'] = 0;

    @Prop({ mutable: true })
    scrollX: KupPlannerTaskGanttProps['scrollX'] = 0;


    /**
      * References the root HTML element of the component (<kup-task-gantt>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private horizontalContainerRef: HTMLDivElement;
    private verticalGanttContainerRef: HTMLDivElement;

    // componentDidLoad() {
    //     this.verticalGanttContainerRef.scrollLeft = this.scrollX;
    //     this.horizontalContainerRef.scrollTop = this.scrollY;
    // }

    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/

    @Watch('scrollX')
    updateScrollX() {
        this.verticalGanttContainerRef && (this.verticalGanttContainerRef.scrollLeft = this.scrollX)
    }

    @Watch('scrollY')
    updateScrollY() {
        this.horizontalContainerRef && (this.horizontalContainerRef.scrollTop = this.scrollY)
    }

    handleHorizontalScroll = (event: Event) => {
        this.scrollX = (event.target as HTMLDivElement).scrollLeft;
    };

    handleVerticalScroll = (event: Event) => {
        this.scrollY = (event.target as HTMLDivElement).scrollTop;
    };

    render() {
        const newBarProps = { ...this.barProps, gridProps: this.gridProps };
        return (
            // <div class="ganttContainer">
            <div
                class="ganttVerticalContainer"
                ref={el => (this.verticalGanttContainerRef = el)}
                dir="ltr"
            >
                <kup-gantt-calendar
                    dateSetup={this.calendarProps.dateSetup}
                    locale={this.calendarProps.locale}
                    rtl={this.calendarProps.rtl}
                    headerHeight={this.calendarProps.headerHeight}
                    columnWidth={this.calendarProps.columnWidth}
                    fontFamily={this.calendarProps.fontFamily}
                    fontSize={this.calendarProps.fontSize}
                    dateTimeFormatters={this.calendarProps.dateTimeFormatters}
                    singleLineHeader={this.calendarProps.singleLineHeader}
                    currentDateIndicator={this.calendarProps.currentDateIndicator}
                    svgWidth={this.gridProps.svgWidth}
                />
                <div
                    ref={el => (this.horizontalContainerRef = el)}
                    class="horizontalContainer"
                    style={
                        this.ganttHeight
                            ? { height: `${this.ganttHeight}px`, width: `${this.gridProps.svgWidth}px` }
                            : { width: `${this.gridProps.svgWidth}px` }
                    }
                    onScroll={this.handleHorizontalScroll.bind(this)}
                >
                    <kup-grid-renderer {...newBarProps} />
                </div>
            </div >
            // </div >
        );
    }
}
