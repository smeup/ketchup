import { EventEmitter } from '../../stencil.core';
import { KetchupFldChangeEvent, KetchupFldSubmitEvent } from "./ketchup-fld-declarations";
export declare class KetchupFld {
    /**
     * Data the FLD must parse to fully be configured.
     * It must be either an Object or a JSON parsable string
     */
    config: string | object;
    /**
     * Effective data to pass to the component
     */
    data: any;
    updateInternalState(): void;
    /**
     * The type of the FLD
     */
    type: string;
    /**
     * Chooses if there is the need to show the submit button or not
     */
    showSubmit: boolean;
    /**
     * Chooses the submit button label to show
     */
    submitLabel: string;
    /**
     * Chooses the submit button position
     */
    submitPos: string;
    /**
     * Chooses the label to show
     * If set to empty or has only white space chars, the label get removed
     */
    label: string;
    /**
     * Chooses label position
     */
    labelPos: string;
    /**
     * Unsupported props gets propagated down to dynamic component
     */
    propagate: any;
    /**
     * Other configurations
     */
    extensions: {
        minQueryLength?: number;
        forceSelection?: boolean;
    };
    radioGeneratedName: string;
    currentValue: object | string;
    onChangeInstance: any;
    onSubmitInstance: any;
    /**
     * Launched when the value of the current FLD changes.
     */
    ketchupFldChanged: EventEmitter<KetchupFldChangeEvent>;
    /**
     * Launched when the FLD values are confirmed and a submit event is triggered.
     */
    ketchupFldSubmit: EventEmitter<KetchupFldSubmitEvent>;
    componentWillLoad(): void;
    onChange(event: CustomEvent): void;
    onSubmit(event: CustomEvent): void;
    /**
     * Provides an interface to get the current value programmatically
     * @method getCurrentValue
     * @returns {any}
     */
    getCurrentValue(): Promise<string | object>;
    render(): any[];
}
