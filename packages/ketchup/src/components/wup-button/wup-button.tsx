import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

@Component({
    tag: 'wup-button',
    styleUrl: 'wup-button.scss',
    shadow: true,
})
export class WupButton {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with a colored outline.
     */
    @Prop({ reflect: true }) transparent: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered flat.
     */
    @Prop({ reflect: true }) flat: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop({ reflect: true }) rounded: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop({ reflect: true }) toggable: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button state will be on.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop({ reflect: true }) iconClass: string = null;
    /**
     * Defaults at null. When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     */
    @Prop({ reflect: true }) iconoff: string = null;    
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop({ reflect: true }) trailingicon: boolean = false;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop({ reflect: true }) label: string = null;
    /**
     * Defaults at empty. When set apply this style.
     */
    @Prop({ reflect: true }) buttonStyle: {};    
    /**
     * Defaults at false. When set to true fill all space avalaible
     */
    @Prop({ reflect: true }) fillspace = false;
    /**
     * Defaults at empty. When set align text
     */
    @Prop({ reflect: true }) align: string;

    @Prop({ reflect: true }) showtext = true;
    @Prop({ reflect: true }) showicon = true;

    /**   
     * Defaults at empty. Additional icons library.
     */
    @Prop({ reflect: true }) iconUrl: string;

    /**   
     * Defaults at empty. Additional image (rendered on the left of icon).
     */
    @Prop({ reflect: true }) imageSrc: string;
    //'https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css';

    /**
     * Defaults at empty. When set to 'Hint' the label is shown as tooltip
     */
    @Prop() textmode: string; 

    /**   
     * Defaults at empty.
     */
    @Prop() tooltip: string;

    /*
    @Prop() buttonClass: string; ~~~ ha ancora senso? "custom" simile ma non equivalente
        */
    /* @@@@@@@ EVENTS @@@@@@@ */

    @Event({
        eventName: 'kupButtonBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    onKupBlur() {
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange() {
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupClick() {
        if (this.label === null && this.icon !== null) {
            if (this.checked) {
                this.checked = false;
                this.value = 'off';
            } else {
                this.checked = true;
                this.value = 'on';
            }
        } else {
            this.value = 'N/A';
        }
        this.kupClick.emit({
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            value: this.value,
        });
    }

    onKupInput() {
        this.kupInput.emit({
            value: this.value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillRender() {
        if (this.label === null && this.iconClass !== null) {
            if (this.checked) {
                this.value = 'on';
            } else {
                this.value = 'off';
            }
        } else {
            this.value = 'N/A';
        }
    }

    componentDidRender() {
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

    elemAlign() {
        if (this.align) {
            if ('right' === this.align) {
                return ' align-right';
            } else if ('left' === this.align) {
                return ' align-left';
            }
        }
        return '';
    }

    isHint() {
        return 'Hint' === this.textmode;
    }    

    render() {
        //https://ketchup.smeup.com/ketchup-showcase/#/btn
        //https://ketchup.smeup.com/ketchup-showcase/#/button
        // It renders in two different ways because two different Material layouts are used.
        // If only the icon is present, with no text, an "icon button" will be rendered.
        let widgetClass: string = 'kup-button';
        let iconEl: HTMLElement = null;
        let textEl: HTMLElement = null;
        let leadingEl: HTMLElement = null;
        let trailingEl: HTMLElement = null;
        let extraCssEl: HTMLElement = null;
        let extraImageEl: HTMLElement = null;
        let btnStyle = this.buttonStyle;

        if (this.custom) {
            widgetClass += ' custom';
        }

        if (this.disabled) {
            widgetClass += ' mdc-button--disabled';
        }

        if (this.label) {
            widgetClass += ' mdc-button';

           if ((!this.isHint() || (this.isHint() && this.flat)) && this.showtext && this.label) {
                textEl = (<span class="mdc-button__label">{this.label}</span>);
            }
            //
            if (this.iconClass && this.showicon) {
                iconEl = (
                    <i
                        class="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        {this.iconClass}
                    </i>
                );
            }

            if (this.transparent) {
                widgetClass += ' mdc-button--outlined';
            } else if (!this.flat) {
                widgetClass += ' mdc-button--raised';
            }

            if (this.rounded) {
                widgetClass += ' button-shaped';
            }

            if (this.trailingicon && this.iconClass) {
                leadingEl = textEl;
                trailingEl = iconEl;
            } else {
                leadingEl = iconEl;
                trailingEl = textEl;
            }

            widgetClass += this.elemAlign();
            /*
            if (this.align) {
                if ('right' === this.align) {
                    widgetClass += ' align-right';
                } else if ('left' === this.align) {
                    widgetClass += ' align-left';
                }
            }
            */

        } else if (this.iconClass) {
            widgetClass += ' mdc-icon-button';
            if (this.showicon) {
                trailingEl = (
                    <i
                        class="material-icons mdc-icon-button__icon"
                        aria-hidden="true"
                    >
                        {this.iconClass}
                    </i>
                );
                if (this.toggable) {
                    widgetClass += ' toggable';
                    trailingEl = (
                        <i
                            class="material-icons mdc-icon-button__icon  mdc-icon-button__icon--on"
                            aria-hidden="true"
                        >
                            {this.iconClass}
                        </i>
                    );
                    if (this.checked) {
                        widgetClass += ' mdc-icon-button--on';
                    }
                    let iconOff = this.iconClass + '_border';
                    leadingEl = (
                        <i
                            class="material-icons mdc-icon-button__icon"
                            aria-hidden="true"
                        >
                            {iconOff}
                        </i>
                    );
                }
            }
        }
        //TODO no per icon?
        if (this.fillspace) {
            widgetClass += ' fillspace';
        }        
        if (this.iconUrl) {
            extraCssEl = (<link href={this.iconUrl} rel="stylesheet" type="text/css" />);
        }
        if (this.imageSrc) {
            extraImageEl = (<img class="button-image" src={this.imageSrc} />);
        }
        let title = '';
        if (this.tooltip) {
            title = this.tooltip;
        } else if (this.isHint()) {
            title = this.label;
        }        
        //
        return (
            <Host>
                {extraCssEl}
                <div id="kup-component">
                    <button
                        type="button"
                        style={btnStyle}
                        class={widgetClass}
                        title={title}
                        disabled={this.disabled}
                        onBlur={this.onKupBlur.bind(this)}
                        onChange={this.onKupChange.bind(this)}
                        onClick={this.onKupClick.bind(this)}
                        onFocus={this.onKupFocus.bind(this)}
                        onInput={this.onKupInput.bind(this)}
                    >
                        <div class="mdc-button__ripple"></div>
                        {extraImageEl}
                        {leadingEl}
                        {trailingEl}
                    </button>
                </div>
            </Host>
        );

    }
}
