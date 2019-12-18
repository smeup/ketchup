// >   R  E  A  D  M  E <
//
// --> M A T E R I A L    D E S I G N
//
//     This component is a form field, it should be managed as such.
//     For more info: https://material.io/develop/web/components/input-controls/form-fields/
//

import { Component, Prop, Element, Host, h } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

@Component({
    tag: 'wup-button',
    styleUrl: 'wup-button.scss',
    shadow: true,
})
export class WupButton {
    /**
     * Defaults at false. When set to true, the button will be rendered with a colored outline.
     */
    @Prop() transparent: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered flat.
     */
    @Prop() flat: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop() rounded: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop() toggable: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingicon: boolean = false;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop() text: string = null;
    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;

    @Element() rootElement: HTMLElement;

    //---- Methods ----

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            const buttonRipple = MDCRipple.attachTo(
                root.querySelector('.kup-button')
            );
            const iconEl = root.querySelector('.kup-button');
            if (iconEl.classList.contains('mdc-icon-button')) {
                buttonRipple.unbounded = true;
                if (iconEl.classList.contains('toggable')) {
                    new MDCIconButtonToggle(iconEl);
                }
            }
        }
    }

    //---- Rendering ----
    //
    // It renders in two different ways because two different Material layouts are used.
    // If only the icon is present, with no text, an "icon button" will be rendered.
    //

    render() {
        let componentClass: string = 'kup-button';
        let iconEl: HTMLElement = null;
        let textEl: HTMLElement = null;
        let leadingEl: HTMLElement = null;
        let trailingEl: HTMLElement = null;

        if (this.custom) {
            componentClass += ' custom';
        }

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
        }

        if (this.text) {
            componentClass += ' mdc-button';
            textEl = <span class="mdc-button__label">{this.text}</span>;
            if (this.icon) {
                iconEl = (
                    <i
                        class="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        {this.icon}
                    </i>
                );
            }

            if (this.transparent) {
                componentClass += ' mdc-button--outlined';
            } else if (!this.flat) {
                componentClass += ' mdc-button--raised';
            }

            if (this.rounded) {
                componentClass += ' button-shaped';
            }

            if (this.trailingicon && this.icon) {
                leadingEl = textEl;
                trailingEl = iconEl;
            } else {
                leadingEl = iconEl;
                trailingEl = textEl;
            }
            return (
                <Host>
                    <button
                        type="button"
                        class={componentClass}
                        disabled={this.disabled}
                    >
                        <div class="mdc-button__ripple"></div>
                        {leadingEl}
                        {trailingEl}
                    </button>
                </Host>
            );
        } else if (this.icon) {
            componentClass += ' mdc-icon-button';
            trailingEl = (
                <i
                    class="material-icons mdc-icon-button__icon"
                    aria-hidden="true"
                >
                    {this.icon}
                </i>
            );
            if (this.toggable) {
                componentClass += ' toggable';
                let iconOff = this.icon + '_border';
                leadingEl = (
                    <i
                        class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
                        aria-hidden="true"
                    >
                        {iconOff}
                    </i>
                );
            }
            return (
                <Host>
                    <button
                        type="button"
                        class={componentClass}
                        disabled={this.disabled}
                    >
                        <div class="mdc-button__ripple"></div>
                        {leadingEl}
                        {trailingEl}
                    </button>
                </Host>
            );
        }
    }
}
