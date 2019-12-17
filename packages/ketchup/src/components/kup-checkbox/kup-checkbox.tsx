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
     * Sets the tabindex of the checkbox
     */
    @Prop() setTabIndex: number = 0;

    //---- Internal state ----
    checkbox: HTMLInputElement;

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
                onFocus={this.onHostFocus.bind(this)}>
                <div class="kup-checkbox">
                    <input
                        ref={(el) => this.checkbox = el as HTMLInputElement}
                        aria-label={this.label ? this.label : null}
                        checked={this.checked}
                        disabled={this.disabled}
                        tabindex={this.setTabIndex}
                        type="checkbox"
                        onBlur={this.onCheckboxBlur.bind(this)}
                        onChange={this.onCheckboxChange.bind(this)}
                        onFocus={this.onCheckboxFocus.bind(this)}/>
                    <span class="kup-checkbox__check"/>
                </div>
            </Host>
        );
    }
}
