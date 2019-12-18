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

import {generateUniqueId} from '../../utils/utils';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    /**
     * Sets the checkbox to be checked
     */
    @Prop({ mutable: true, reflect: true}) checked: boolean = false;
    /**
     * Sets the checkbox to be disabled
     *
     * Must have reflect into the attribute
     */
    @Prop({ reflect: true}) disabled: boolean = false;
    /**
     * The label to set to the component
     */
    @Prop() label: string = '';
    /**
     * If true, shows the label by using a label tag
     */
    @Prop() showLabel: boolean = false;
    /**
     * Sets the tabindex of the checkbox
     */
    @Prop() setTabIndex: number = 0;

    //---- Internal state ----
    checkbox: HTMLInputElement;
    uId: string = generateUniqueId('lbl' + Math.floor(Math.random() * 10000).toString());

    //---- Public events ----
    /**
     * Fired when the checkbox input is blurred
     */
    @Event({
        eventName: 'kupCheckboxBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCheckboxBlur: EventEmitter<{
        checked: boolean;
    }>;

    /**
     * Fired when the checkbox input changes its value
     */
    @Event({
        eventName: 'kupCheckboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCheckboxChange: EventEmitter<{
        checked: boolean;
    }>;

    /**
     * Fired when the checkbox input receive focus
     */
    @Event({
        eventName: 'kupCheckboxFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCheckboxFocus: EventEmitter<{
        checked: boolean;
    }>;

    //---- Methods ----

    //-- Events handlers --

    onCheckboxBlur() {
        this.kupCheckboxBlur.emit({checked: !!this.checkbox.checked})
    }

    onCheckboxChange(e: UIEvent) {
        const newValue = !!(e.target as HTMLInputElement).checked;
        if (newValue !== this.checked) {
            this.checked = newValue;
            this.kupCheckboxChange.emit({
                checked: newValue,
            });
        }
    }

    onCheckboxFocus() {
        this.kupCheckboxFocus.emit({checked: !!this.checkbox.checked})
    }

    onHostFocus() {
        if (this.checkbox) {
            this.checkbox.focus();
        }
    }

    //---- Lifecycle hooks ----

    render() {
        return(
            <Host
                role={"checkbox"}
                onFocus={this.onHostFocus.bind(this)}>
                <div class="kup-checkbox">
                    <input
                        id={this.uId}
                        ref={(el) => this.checkbox = el as HTMLInputElement}
                        aria-label={this.label && !this.showLabel ? this.label : null}
                        checked={this.checked}
                        disabled={this.disabled}
                        tabindex={this.setTabIndex}
                        type="checkbox"
                        onBlur={this.onCheckboxBlur.bind(this)}
                        onChange={this.onCheckboxChange.bind(this)}
                        onFocus={this.onCheckboxFocus.bind(this)}/>
                    <span class="kup-checkbox__check"/>
                </div>
                {
                    this.showLabel && this.label ?
                      <label
                        class="kup-checkbox__label"
                        htmlFor={this.uId}>{this.label}</label> :
                      null
                }
            </Host>
        );
    }
}
