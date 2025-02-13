import { Component, h, Prop, State, Element, Watch } from '@stencil/core';
import { KupPlannerBarTask } from '../../kup-planner-declarations';
@Component({
    tag: 'kup-tooltip',
    styleUrl: 'kup-tooltip.scss',
    shadow: true,
})
export class Tooltip {
    @Prop() task: KupPlannerBarTask;
    @Prop() rowHeight: number;
    @Prop() rtl: boolean;
    @Prop() svgContainerHeight: number;
    @Prop() svgContainerWidth: number;
    @Prop() scrollX: number;
    @Prop() scrollY: number;
    @Prop() arrowIndent: number;
    @Prop() fontSize: string;
    @Prop() fontFamily: string;
    @Prop() headerHeight: number;
    @Prop() taskListWidth: number;
    @Prop() TooltipContent: any; // You can specify the exact type if needed
    @Prop() svgWidth: number;

    @State() relatedY: number = 0;
    @State() relatedX: number = 0;

    /**
     * References the root HTML element of the component (<kup-tooltip>).
     */
    @Element() rootElement: HTMLElement;

    componentWillLoad() {
        this.calculateTooltipPosition();
    }

    @Watch('task')
    @Watch('arrowIndent')
    @Watch('scrollX')
    @Watch('scrollY')
    @Watch('headerHeight')
    @Watch('taskListWidth')
    @Watch('rowHeight')
    @Watch('svgContainerHeight')
    @Watch('svgContainerWidth')
    @Watch('rtl')
    calculateTooltipPosition() {
        if (this.rootElement) {
            const tooltipHeight = this.rootElement.offsetHeight * 1.1;
            const tooltipWidth = this.rootElement.offsetWidth * 1.1;

            let newRelatedY =
                this.task.index * this.rowHeight -
                this.scrollY +
                this.headerHeight;
            let newRelatedX: number;
            if (this.rtl) {
                newRelatedX =
                    this.task.x1 -
                    this.arrowIndent * 1.5 -
                    tooltipWidth -
                    this.scrollX;
                if (newRelatedX < 0) {
                    newRelatedX =
                        this.task.x2 + this.arrowIndent * 1.5 - this.scrollX;
                }
                const tooltipLeftmostPoint = tooltipWidth + newRelatedX;
                if (tooltipLeftmostPoint > this.svgContainerWidth) {
                    newRelatedX = this.svgContainerWidth - tooltipWidth;
                    newRelatedY += this.rowHeight;
                }
            } else {
                newRelatedX =
                    this.task.x2 +
                    this.arrowIndent * 1.5 +
                    this.taskListWidth -
                    this.scrollX;
                const tooltipLeftmostPoint = tooltipWidth + newRelatedX;
                const fullChartWidth =
                    this.taskListWidth + this.svgContainerWidth;
                if (tooltipLeftmostPoint > fullChartWidth) {
                    newRelatedX =
                        this.task.x1 +
                        this.taskListWidth -
                        this.arrowIndent * 1.5 -
                        this.scrollX -
                        tooltipWidth;
                }
                if (newRelatedX < this.taskListWidth) {
                    newRelatedX =
                        this.svgContainerWidth +
                        this.taskListWidth -
                        tooltipWidth;
                    newRelatedY += this.rowHeight;
                }
            }

            const tooltipLowerPoint =
                tooltipHeight + newRelatedY - this.scrollY;
            if (tooltipLowerPoint > this.svgContainerHeight - this.scrollY) {
                newRelatedY = this.svgContainerHeight - tooltipHeight;
            }
            this.relatedY = newRelatedY;
            this.relatedX = newRelatedX;
        }
    }

    render() {
        return (
            <div
                class={
                    this.relatedX
                        ? 'tooltipDetailsContainer'
                        : 'tooltipDetailsContainerHidden'
                }
                style={{
                    left: `${this.relatedX}px`,
                    top: `${this.relatedY}px`,
                }}
            >
                <this.TooltipContent
                    task={this.task}
                    fontSize={this.fontSize}
                    fontFamily={this.fontFamily}
                />
            </div>
        );
    }
}
