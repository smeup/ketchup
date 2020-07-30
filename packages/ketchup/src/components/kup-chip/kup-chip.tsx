import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCChipSet } from '@material/chips';
import { ComponentChipElement } from './kup-chip-declarations';
import { errorLogging } from '../../utils/error-logging';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theming';

@Component({
    tag: 'kup-chip',
    styleUrl: 'kup-chip.scss',
    shadow: true,
})
export class KupChip {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentChipElement[] = [];
    /**
     * The type of chip. Available types: input, filter, choice or empty for default.
     */
    @Prop({ reflect: true }) type: string = undefined;

    @Event({
        eventName: 'kupChipBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: string;
        index: number;
        value: string;
    }>;

    @Event({
        eventName: 'kupChipClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: string;
        index: number;
        value: string;
    }>;

    @Event({
        eventName: 'kupChipFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: string;
        index: number;
        value: string;
    }>;

    @Event({
        eventName: 'kupChipIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        id: string;
        index: number;
        value: string;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur(i: number) {
        this.kupBlur.emit({
            id: this.rootElement.id,
            index: i,
            value: this.data[i].value,
        });
    }

    onKupClick(i: number) {
        if (this.type === 'choice') {
            for (let j = 0; j < this.data.length; j++) {
                if (j !== i && this.data[j].checked) {
                    this.data[j].checked = false;
                }
            }
        }
        if (this.type === 'choice' || this.type === 'filter') {
            if (this.data[i].checked) {
                this.data[i].checked = false;
            } else {
                this.data[i].checked = true;
            }
            let newData = [...this.data];
            this.data = newData;
        }
        this.kupClick.emit({
            id: this.rootElement.id,
            index: i,
            value: this.data[i].value,
        });
    }

    onKupFocus(i: number) {
        this.kupFocus.emit({
            id: this.rootElement.id,
            index: i,
            value: this.data[i].value,
        });
    }

    onKupIconClick(i: number) {
        this.data.splice(i, 1);
        let newData = [...this.data];
        this.data = newData;
        this.kupIconClick.emit({
            id: this.rootElement.id,
            index: i,
            value: this.data[i].value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    componentWillUpdate() {
        var firstCheckedFound = false;
        if (this.type === 'choice') {
            for (let j = 0; j < this.data.length; j++) {
                if (this.data[j].checked && firstCheckedFound) {
                    this.data[j].checked = false;
                    let message =
                        'Found occurence of data(' +
                        j +
                        ") to be set on 'checked' when another one was found before! Overriding to false because the type='choice' allows only 1 'checked'.";

                    errorLogging(this.rootElement.tagName, message);
                }
                if (this.data[j].checked && !firstCheckedFound) {
                    firstCheckedFound = true;
                }
            }
        }
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            const chipSetEl = root.querySelector('.mdc-chip-set');
            new MDCChipSet(chipSetEl);
        }
    }

    render() {
        let wrapperClass = 'mdc-chip-set';
        let chipList: Array<HTMLElement> = [];
        let chipEl: HTMLElement;

        if (this.type) {
            switch (this.type) {
                case 'choice':
                    wrapperClass += ' mdc-chip-set--choice';
                    break;
                case 'filter':
                    wrapperClass += ' mdc-chip-set--filter';
                    break;
                case 'input':
                    wrapperClass += ' mdc-chip-set--input';
                    break;
                default:
                    let message =
                        'The value received for prop "type" is not supported(' +
                        this.type +
                        ').';
                    errorLogging(this.rootElement.tagName, message);
            }
        }
        if (this.data.length === 0) {
            let message = 'Empty data.';
            errorLogging('kup-chip', message);
        }
        for (let i = 0; i < this.data.length; i++) {
            let componentClass: string = 'mdc-chip';
            let iconEl = [];
            let iconClass =
                'material-icons mdc-chip__icon mdc-chip__icon--leading';
            let iconColor = 'var(--kup-icon-color)';
            let cancelIcon = undefined;

            if (this.type === 'filter' || this.type === 'choice') {
                if (this.data[i].checked) {
                    componentClass += ' mdc-chip--selected';
                    iconColor = 'var(--kup-main-color)';
                    if (this.type === 'filter') {
                        iconClass += ' mdc-chip__icon--leading-hidden';
                    }
                }
            }

            if (this.data[i].icon) {
                iconEl.push(
                    <kup-image
                        color={iconColor}
                        class={iconClass}
                        resource={this.data[i].icon}
                        sizeX="18px"
                        sizeY="18px"
                    ></kup-image>
                );
            }

            if (this.type === 'filter') {
                iconEl.push(
                    <span class="mdc-chip__checkmark">
                        <svg
                            class="mdc-chip__checkmark-svg"
                            viewBox="-2 -3 30 30"
                        >
                            <path
                                class="mdc-chip__checkmark-path"
                                fill="none"
                                stroke="black"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                        </svg>
                    </span>
                );
            }

            if (this.type === 'input') {
                cancelIcon = (
                    <span role="gridcell">
                        <kup-image
                            tabindex="-1"
                            class="material-icons mdc-chip__icon remove-icon"
                            onClick={() => this.onKupIconClick(i)}
                            resource="cancel"
                            sizeX="18px"
                            sizeY="18px"
                        ></kup-image>
                    </span>
                );
            }

            chipEl = (
                <div
                    class={componentClass}
                    role="row"
                    onClick={() => this.onKupClick(i)}
                >
                    <div class="mdc-chip__ripple"></div>
                    {iconEl}
                    <span role="gridcell">
                        {/* 
                            // @ts-ignore */}
                        <span
                            role="button"
                            tabindex={i}
                            class="mdc-chip__primary-action"
                            // @ts-ignore
                            value={this.data[i].value}
                            checked={this.data[i].checked}
                            onBlur={() => this.onKupBlur(i)}
                            onFocus={() => this.onKupFocus(i)}
                        >
                            <span class="mdc-chip__text">
                                {this.data[i].label}
                            </span>
                        </span>
                    </span>
                    {cancelIcon}
                </div>
            );
            chipList.push(chipEl);
        }

        return (
            <Host class="handles-custom-style">
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class={wrapperClass} role="grid">
                        {chipList}
                    </div>
                </div>
            </Host>
        );
    }
}
