import { Component, h, Prop, } from '@stencil/core';
import { KupPlannerSwitcherProps } from '../../kup-planner-declarations';
@Component({
    tag: 'kup-switcher',
    styleUrl: 'kup-switcher.scss',
    shadow: false,
})
export class KupSwitcher {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop()
    timeUnitChange: KupPlannerSwitcherProps['onTimeUnitChange'];

    render() {
        const day = () => this.timeUnitChange("day");
        const week = () => this.timeUnitChange("week");
        const month = () => this.timeUnitChange("month");
        const year = () => this.timeUnitChange("year");
        return (
            <div class="switcher">
                <button type="button" class="button" onClick={day}>
                    <span class="label">Day</span>
                </button>
                <button type="button" class="button" onClick={week}>
                    <span class="label">Week</span>
                </button>
                <button type="button" class="button" onClick={month}>
                    <span class="label">Month</span>
                </button>
                <button type="button" class="button" onClick={year}>
                    <span class="label">Year</span>
                </button>
            </div>
        );
    }
}
