import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-color-picker',
    styleUrl: 'kup-color-picker.scss',
    shadow: true,
})
// TODO: actually is only a simple color output... in future it will open a widget to change color when clicked (if enabled)
export class KupColorPicker {
    /**
     * The html color, can be css color name, hex code or rgb code (sample: "red" or rgb(255, 0, 0) or "#FF0000" )
     */
    @Prop({ reflect: true }) value: string;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;

    //--------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    render() {
        return (
            <button
                type="button"
                disabled={this.disabled}
                class="color-picker"
                style={{
                    backgroundColor: this.value,
                }}
            />
        );
    }
}
