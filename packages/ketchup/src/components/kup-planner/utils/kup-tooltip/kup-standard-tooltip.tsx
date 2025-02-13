import { Component, h, Prop, State, Element } from '@stencil/core';
import { KupPlannerTask } from '../../kup-planner-declarations';
@Component({
    tag: 'kup-standard-tooltip',
    styleUrl: 'kup-tooltip.scss',
    shadow: true,
})
export class StandardTooltipContent {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    task: KupPlannerTask;

    @Prop()
    fontSize: string;

    @Prop()
    fontFamily: string;

    render() {
        return (
            <div
                class="tooltipDefaultContainer"
                style={{ fontSize: this.fontSize, fontFamily: this.fontFamily }}
            >
                <b style={{ fontSize: `${parseInt(this.fontSize) + 6}px` }}>{`${
                    this.task.name
                }: ${this.task.start.getDate()}-${
                    this.task.start.getMonth() + 1
                }-${this.task.start.getFullYear()} - ${this.task.end.getDate()}-${
                    this.task.end.getMonth() + 1
                }-${this.task.end.getFullYear()}`}</b>
                {this.task.end.getTime() - this.task.start.getTime() !== 0 && (
                    <p class="tooltipDefaultContainerParagraph">{`Duration: ${~~(
                        (this.task.end.getTime() - this.task.start.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )} day(s)`}</p>
                )}
                <p class="tooltipDefaultContainerParagraph">
                    {!!this.task.progress &&
                        `Progress: ${this.task.progress} %`}
                </p>
            </div>
        );
    }
}
