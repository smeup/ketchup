import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { KetchupRadioElement } from "./ketchup-radio-declarations";
export declare class KetchupRadio {
    /**
     * Label to describe the radio group
     */
    label: string;
    /**
     * Direction in which the radio elements must be placed
     */
    direction: string;
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    displayedField: string;
    /**
     * Radio elements to display
     */
    items: KetchupRadioElement[];
    /**
     * Radio elements value
     */
    radioName: string;
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    valueField: string;
    checkDirection(newVal: string): void;
    selectedRadio: KetchupRadioElement | null;
    /**
     * When currently selected radio button has been changed.
     * */
    ketchupRadioChanged: EventEmitter<{
        value: KetchupRadioElement;
        oldValue: KetchupRadioElement;
    }>;
    onRadioChanged(radio: KetchupRadioElement): void;
    radioElementsComposer(): JSX.Element[];
    render(): JSX.Element;
}
