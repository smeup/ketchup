import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';
import { MDCChipSet } from '@material/chips';
import { ComponentChipElement } from './wup-chip-declarations';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'wup-chip',
    styleUrl: 'wup-chip.scss',
    shadow: true,
})
export class WupChip {
    @Element() rootElement: HTMLElement;

    /**
     * Custom style to be passed to the component.
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
        value: string;
    }>;

    @Event({
        eventName: 'kupChipClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupChipFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupChipIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        index: number;
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupChipError',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupError: EventEmitter<{
        el: EventTarget;
    }>;

    //---- Methods ----

    onKupBlur(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupClick(i: number, e: Event) {
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
            index: i,
            el: e.target,
        });
    }

    onKupFocus(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupIconClick(i: number, e: Event) {
        this.data.splice(i, 1);
        let newData = [...this.data];
        this.data = newData;
        this.kupIconClick.emit({
            index: i,
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

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

                    errorLogging('wup-chip', message);
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
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

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
                    errorLogging('wup-chip', message);
            }
        }
        if (this.data.length === 0) {
            let message = 'Empty data.';
            errorLogging('wup-chip', message);
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
                    <wup-icon
                        color={iconColor}
                        class={iconClass}
                        dimensions="18px"
                        name={this.data[i].icon}
                    ></wup-icon>
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
                        <wup-icon
                            tabindex="-1"
                            class="material-icons mdc-chip__icon remove-icon"
                            dimensions="18px"
                            name="cancel"
                            onClick={(e) => this.onKupIconClick(i, e)}
                        ></wup-icon>
                    </span>
                );
            }

            chipEl = (
                <div
                    class={componentClass}
                    role="row"
                    onClick={(e) => this.onKupClick(i, e)}
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
                            value={this.data[i].value}
                            checked={this.data[i].checked}
                            onBlur={(e: any) => this.onKupBlur(e)}
                            onFocus={(e: any) => this.onKupFocus(e)}
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
            <Host>
                {customStyle}
                <div id="kup-component">
                    <div class={wrapperClass} role="grid">
                        {chipList}
                    </div>
                </div>
            </Host>
        );
    }
}
