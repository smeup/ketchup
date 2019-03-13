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
    @State() selectedRadio: string = '';

    //---- Emitted events and handlers ----
    @Event({
        eventName: 'ketchupRadioChanged',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    radioChanged: EventEmitter;

    onRadioChanged(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.radioChanged.emit({
            target,
            newValue: target.value,
            oldValue: this.selectedRadio,
        });
        this.selectedRadio = target.value;
    }

    //---- Rendering functions ----
    radioElementsComposer() {
        return this.items.map((radio) => {
            // The id is necessary for the label to be associated with the input
            // TODO Anyway this can be extracted into another map object to avoid creating a new id each time the component is painted.
            const uId = generateUniqueId(radio[this.valueField]);
            return <li class={'ketchup-radio__item' + (this.selectedRadio === radio[this.valueField] ? ' ketchup-radio__item--selected' : '')}>
                <div>
                    <input id={uId} type="radio" name={this.radioName} value={radio[this.valueField]} onChange={this.onRadioChanged.bind(this)}/>
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