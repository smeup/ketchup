import { Component, h, Prop, } from '@stencil/core';
import { KupPlannerSwitcherProps } from '../../kup-planner-declarations';
import { planner1PropsMock, planner2PropsMock, planner3PropsMock, planner4PropsMock } from '../kup-planner-renderer.data';
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
    selectedPlanner: string;

    @Prop()
    timeUnitChange: KupPlannerSwitcherProps['onTimeUnitChange'];

    @Prop()
    plannerChange: KupPlannerSwitcherProps['onPlannerChange'];

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private planners = {
        "kup-list": {
            data: [
                {
                    value: "Kup Planner Component",
                    id: "1",
                    selected: true
                },
                {
                    value: "Kup Planner Component with secondary gantt dates greater than primary gantt dates",
                    id: "2",
                    selected: false
                },
                {
                    value: "Kup Planner Component with initial scroll x and y (click on task with icon)",
                    id: "3",
                    selected: false
                },
                {
                    value: "Kup Planner Component with initial scroll x and y (click on task with icon)",
                    id: "4",
                    selected: false
                },
            ]
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    onChange(event: CustomEvent) {
        if (!event.detail.value) return;

        const plannerPropsMock = this.getPlannerPropsMock(event.detail.value);
        this.plannerChange(plannerPropsMock, event.detail.value)
    }

    getPlannerPropsMock(value: string) {
        switch (value) {
            case "1":
                return planner1PropsMock;
            case "2":
                return planner2PropsMock;
            case "3":
                return planner3PropsMock;
            case "4":
                return planner4PropsMock;
            default:
                return planner1PropsMock;
        }
    }

    render() {
        const day = () => this.timeUnitChange("day");
        const week = () => this.timeUnitChange("week");
        const month = () => this.timeUnitChange("month");
        const year = () => this.timeUnitChange("year");
        return (
            <div class="switcher-wrapper">
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
                <div class="planner-switcher">
                    <kup-dropdown-button
                        data={this.planners}
                        label='Planner'
                        initialValue={this.selectedPlanner}
                        onkup-dropdownbutton-change={(e) => this.onChange(e)}>
                    </kup-dropdown-button>
                </div>
            </div>
        );
    }
}
