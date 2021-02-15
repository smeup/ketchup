import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCChipSet } from '@material/chips';
import { ComponentChipElement } from './kup-chip-declarations';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { FChip } from '../../f-components/f-chip/f-chip';

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
    @Prop() customStyle: string = undefined;
    /**
     * List of elements.
     */
    @Prop() data: ComponentChipElement[] = [];
    /**
     * The type of chip. Available types: input, filter, choice or empty for default.
     */
    @Prop() type: string = undefined;

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
        let value: string = undefined;
        if (this.data[i]) {
            value = this.data[i].value;
        }
        this.kupBlur.emit({
            id: this.rootElement.id,
            index: i,
            value: value,
        });
    }

    onKupClick(i: number) {
        let value: string = undefined;
        if (this.data[i]) {
            value = this.data[i].value;
        }
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
            value: value,
        });
    }

    onKupFocus(i: number) {
        let value: string = undefined;
        if (this.data[i]) {
            value = this.data[i].value;
        }
        this.kupFocus.emit({
            id: this.rootElement.id,
            index: i,
            value: value,
        });
    }

    onKupIconClick(i: number) {
        let value: string = undefined;
        if (this.data[i]) {
            value = this.data[i].value;
        }
        this.data.splice(i, 1);
        let newData = [...this.data];
        this.data = newData;
        this.kupIconClick.emit({
            id: this.rootElement.id,
            index: i,
            value: value,
        });
    }

    private setEvents(root: ShadowRoot) {
        let chips: NodeListOf<HTMLElement> = root.querySelectorAll(
            '.f-chip--wrapper'
        );
        for (let index = 0; index < chips.length; index++) {
            let chip: NodeListOf<HTMLElement> = root.querySelectorAll(
                '.mdc-chip'
            );
            for (let j = 0; j < chip.length; j++) {
                let primaryEl: HTMLElement = chip[j].querySelector(
                    '.mdc-chip__primary-action'
                );
                primaryEl.onblur = () => this.onKupBlur(j);
                primaryEl.onfocus = () => this.onKupFocus(j);

                let cancelIcon: HTMLElement = chip[j].querySelector(
                    '.mdc-chip__icon.clear'
                );
                if (cancelIcon) {
                    cancelIcon.onclick = () => this.onKupIconClick(j);
                }

                chip[j].onclick = () => this.onKupClick(j);
            }
        }
    }

    private setMDC(root: ShadowRoot) {
        const chipSetEl = root.querySelector('.mdc-chip-set');
        if (chipSetEl) {
            new MDCChipSet(chipSetEl);
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
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

                    logMessage(this, message, 'warning');
                }
                if (this.data[j].checked && !firstCheckedFound) {
                    firstCheckedFound = true;
                }
            }
        }
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            this.setEvents(root);
            this.setMDC(root);
        }
        logRender(this, true);
    }

    render() {
        let props = {
            data: this.data,
            type: this.type,
        };

        if (this.data.length === 0) {
            let message = 'Empty data.';
            logMessage(this, message, 'warning');
            return;
        }

        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FChip {...props} />
                </div>
            </Host>
        );
    }
}
