import {
    Component,
    Event,
    EventEmitter,
    Prop,
    State,
    Watch,
    h
} from '@stencil/core'
import { generateUniqueId } from "../../utils/utils";
import { KetchupRadioElement, KetchupRadioChangeEvent, KetchupRadioElementFactory } from "./kup-radio-declarations";

@Component({
    tag: 'kup-radio',
    styleUrl: 'kup-radio.scss',
    shadow: true
})
export class KupRadio {
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
     * Allows to pass an initial selected item for the Radio group
     */
    @Prop() initialValue: KetchupRadioElement = KetchupRadioElementFactory();
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
            throw new Error('kup-radio: direction must be horizontal or vertical.');
        }
    }

    //---- Internal state ----
    @State() selectedRadio: KetchupRadioElement | null = null;


    //---- Lifecycle Hooks ----
    componentWillLoad() {
        // When the component is going to be loaded, if there is an initial value set, we can reflect it to internal state
        // This is used because when component is instantiated it does NOT run watchers.
        this.reflectInitialValue(this.initialValue);
    }

    //---- Private methods ----
    // Always reflect changes of initialValue to value element
    @Watch('initialValue')
    reflectInitialValue(newValue: KetchupRadioElement, oldValue?: KetchupRadioElement) {
        // When a new initial value is passed, we control that the new item is different from the old one before updating the state
        if (!oldValue || newValue[this.valueField] !== oldValue[this.valueField]) {
            this.onRadioChanged(newValue);
        }
    }

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
    ketchupRadioChanged: EventEmitter<KetchupRadioChangeEvent>;

    // Typing for input element UIEvent & {target: HTMLInputElement}
    onRadioChanged(radio: KetchupRadioElement) {
        this.ketchupRadioChanged.emit({
            value: radio,
            oldValue: this.selectedRadio,
            info: {}
        });
        this.selectedRadio = radio;
    }

    //---- Rendering functions ----
    radioElementsComposer() {
        return this.items.map((radio) => {
            // The id is necessary for the label to be associated with the input
            // TODO Anyway this can be extracted into another map object to avoid creating a new id each time the component is painted.
            const uId = generateUniqueId(radio[this.valueField]);
            return <li class={'kup-radio__item' + (this.selectedRadio && this.selectedRadio[this.valueField] === radio[this.valueField] ? ' kup-radio__item--selected' : '')}>
                <div>
                    <input id={uId} type="radio" name={this.radioName} value={radio[this.valueField]} onChange={this.onRadioChanged.bind(this, radio)}/>
                </div>
                <label htmlFor={uId}>{radio[this.displayedField]}</label>
            </li>
        });
    }

    render() {
        let classRadioGroup = 'kup-radio__group';

        // When direction is horizontal
        if (this.direction === 'horizontal') {
            classRadioGroup += ' kup-radio__group--horizontal';
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