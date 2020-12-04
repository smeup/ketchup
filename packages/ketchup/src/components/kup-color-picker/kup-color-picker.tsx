import {
    Component,
    Element,
    State,
    Event,
    Prop,
    h,
    Host,
    Method,
    EventEmitter,
} from '@stencil/core';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import {
    setThemeCustomStyle,
    setCustomStyle,
    colorCheck,
} from '../../utils/theme-manager';
import Picker from 'vanilla-picker';

@Component({
    tag: 'kup-color-picker',
    styleUrl: 'kup-color-picker.scss',
    shadow: true,
})
// TODO: currently is only a simple color output... in future it will open a widget to change color when clicked (if enabled)
export class KupColorPicker {
    @Element() rootElement: HTMLElement;
    @State() hexValue: string = undefined;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * The html color, can be css color name, hex code or rgb code (sample: "red" or rgb(255, 0, 0) or "#FF0000" )
     */
    @Prop() value: string;

    private anchorEl = undefined;

    @Event({
        eventName: 'kupColorPickerChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        if (this.value) {
            this.hexValue = colorCheck(this.value).hexColor;
        }
    }

    componentDidLoad() {
        if (this.hexValue) {
            let picker = new Picker({
                alpha: false,
                color: this.hexValue,
                parent: this.anchorEl,
            });
            picker['kupColorPicker'] = this;
            picker['onChange'] = function (color) {
                this['kupColorPicker'].hexValue = color.hex;

                this['kupColorPicker'].kupChange.emit({
                    value: color.hex,
                });
            };
            picker['onClose'] = function (color) {
                this['kupColorPicker'].hexValue = color.hex;

                this['kupColorPicker'].kupChange.emit({
                    value: color.hex,
                });
            };
        }
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        if (!this.hexValue) {
            let message = 'Invalid color: ' + this.value;
            logMessage(this, message, 'warning');
            return;
        }
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <button
                        type="button"
                        disabled={this.disabled}
                        class="color-picker"
                        style={{
                            backgroundColor: this.hexValue,
                        }}
                        ref={(el) => (this.anchorEl = el as any)}
                    />
                </div>
            </Host>
        );
    }
}
