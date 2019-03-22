import {
    Component,
    Event,
    EventEmitter,
    Prop,
    State,
    Watch
} from '@stencil/core'
import { generateUniqueId } from "../../utils/utils";
import { KetchupRadioElement } from "./ketchup-radio-declarations";

@Component({
    tag: 'ketchup-radio',
    styleUrl: 'ketchup-radio.scss',
    shadow: true
})
export class KetchupRadio {
    /**
     * Label to describe the radio group
     */
    @Prop() label: string = '';
    /**
     * Direction in which the radio elements must be placed
     */
    @Prop() direction: string = 'horizontal';
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() displayedField: string = 'id';
    /**
     * Radio elements to display
     */
    @Prop() items: KetchupRadioElement[] = [];
    /**
     * Radio elements value
     */
    @Prop() radioName: string = '';
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    @Prop() valueField: string = 'id';

    //---- Validating props ----
    @Watch('direction')
    checkDirection(newVal: string) {
        if (!/horizontal|vertical/.test(newVal)) {
            throw new Error('ketchup-radio: direction must be horizontal or vertical.');
        }
    }

    //---- Internal state ----
    @State() selectedRadio: KetchupRadioElement | null = null;

    //---- Emitted events and handlers ----
    /**
     * When currently selected radio button has been changed.
     * */
    @Event({
        eventName: 'ketchupRadioChanged',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupRadioChanged: EventEmitter<{
        value: KetchupRadioElement;
        oldValue: KetchupRadioElement;
    }>;

    // Typing for input element UIEvent & {target: HTMLInputElement}
    onRadioChanged(radio: KetchupRadioElement) {
        this.ketchupRadioChanged.emit({
            value: radio,
            oldValue: this.selectedRadio,
        });
        this.selectedRadio = radio;
    }

    //---- Rendering functions ----
    radioElementsComposer() {
        return this.items.map((radio) => {
            // The id is necessary for the label to be associated with the input
            // TODO Anyway this can be extracted into another map object to avoid creating a new id each time the component is painted.
            const uId = generateUniqueId(radio[this.valueField]);
            return <li class={'ketchup-radio__item' + (this.selectedRadio && this.selectedRadio[this.valueField] === radio[this.valueField] ? ' ketchup-radio__item--selected' : '')}>
                <div>
                    <input id={uId} type="radio" name={this.radioName} value={radio[this.valueField]} onChange={this.onRadioChanged.bind(this, radio)}/>
                </div>
                <label htmlFor={uId}>{radio[this.displayedField]}</label>
            </li>
        });
    }

    render() {
        let classRadioGroup = 'ketchup-radio__group';

        // When direction is horizontal
        if (this.direction === 'horizontal') {
            classRadioGroup += ' ketchup-radio__group--horizontal';
        }

        return (
            <div>
                {this.label ? <p>{this.label}</p> : null}
                <ul
                    class={classRadioGroup}
                >
                    {this.radioElementsComposer()}
                </ul>
            </div>
        )
    }
}