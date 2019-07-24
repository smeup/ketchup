import {
    Component,
    Event,
    Prop,
    //State,
    //Watch,
    Host,
    EventEmitter,
    h,
    //Method,
} from '@stencil/core';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    /**
     * Sets the checkbox to be disabled
     */
    @Prop({ reflect: true}) checked: boolean = false;
    /**
     * Sets the checkbox to be disabled
     */
    @Prop() disabled: boolean = false;
    /**
     * Sets the tabindex of the checkbox
     */
    @Prop() setTabIndex: number = 0;

    //---- Lifecycle hooks ----


    /**
     * When the row menu action icon is clicked
     */
    @Event({
        eventName: 'kupCheckboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionClicked: EventEmitter<{
        checked: boolean;
    }>;

    render() {
        return(
            <Host>
                <div class="kup-checkbox">
                    <input
                        checked={this.checked}
                        disabled={this.disabled}
                        tabindex={this.setTabIndex}
                        type="checkbox"/>
                    <span class="kup-checkbox__check"/>
                </div>
            </Host>
        );
    }
}
