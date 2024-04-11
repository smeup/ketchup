import { Component, h, Prop, State } from '@stencil/core';
import {
    KupPlannerSwitcherProps,
    KupPlannerViewMode,
} from '../../kup-planner-declarations';

@Component({
    tag: 'kup-switcher',
    styleUrl: 'kup-switcher.scss',
    shadow: false,
})
export class KupSwitcher {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop() timeUnitChange: KupPlannerSwitcherProps['onTimeUnitChange'];

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/
    @State() activeButton: KupPlannerViewMode = 'day'; // Impostato su 'day' inizialmente

    private buttonLabels: KupPlannerViewMode[] = [
        'hour',
        'day',
        'week',
        'month',
        'year',
    ];

    render() {
        const handleButtonClick = (mode: KupPlannerViewMode) => {
            this.activeButton = mode;
            this.timeUnitChange(mode);
        };

        return (
            <div class="switcher">
                {this.buttonLabels.map((label) => (
                    <button
                        type="button"
                        class={{
                            button: true,
                            buttonActive: this.activeButton === label,
                        }}
                        onClick={() => handleButtonClick(label)}
                    >
                        <span class="label">
                            {label.charAt(0).toUpperCase() + label.slice(1)}
                        </span>
                    </button>
                ))}
            </div>
        );
    }
}
