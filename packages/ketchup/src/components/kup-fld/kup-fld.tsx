import {
    Component,
    Event,
    EventEmitter,
    Host,
    Method,
    Prop,
    h,
} from '@stencil/core';
import { generateUniqueId } from '../../utils/utils';
import {
    KupFldChangeEvent,
    KupFldSubmitEvent,
    ComponentProps,
} from './kup-fld-declarations';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-fld',
    styleUrl: 'kup-fld.scss',
    shadow: true,
})
export class KupFld {
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * Effective data to pass to the component.
     */
    @Prop() data: ComponentProps[] = [];

    /**
     * The text of the label. If set to empty or has only white space chars, the label will be removed.
     */
    @Prop({ reflect: true }) label: string = '';

    /**
     * Sets the label's position, left right or top.
     */
    @Prop({ reflect: true }) labelPos: string = 'left';

    /**
     * Sets whether the submit button must be displayed or not.
     */
    @Prop({ reflect: true }) showSubmit: boolean = false;

    /**
     * Sets the submit button's label.
     */
    @Prop({ reflect: true }) submitLabel: string = '';

    /**
     * Sets the submit button's position, left right or top.
     */
    @Prop({ reflect: true }) submitPos: string = 'right';

    /**
     * The type of the FLD
     */
    @Prop({ reflect: true }) type: string = undefined;

    //-- Not reactive --
    radioGeneratedName = generateUniqueId('value');
    currentValue: object | string = null;
    previousValue: object | string = null;

    // Generates an instance of the event handler while binding the current component as its this value
    // This is done once per component to improve performance speed
    onChangeInstance = this.onChange.bind(this);
    onSubmitInstance = this.onSubmit.bind(this);

    //---- Events ----
    /**
     * Launched when the value of the current FLD changes.
     */
    @Event({
        eventName: 'kupFldChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupFldChangeEvent>;

    /**
     * Launched when the FLD values are confirmed and a submit event is triggered.
     */
    @Event({
        eventName: 'kupFldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSubmit: EventEmitter<KupFldSubmitEvent>;

    //---- Methods ----

    // When a change or update event must be launched as if it's coming from the FLD itself
    onChange(event: CustomEvent) {
        let message = 'Changing!';
        errorLogging('kup-fld', message);
        const { value, info } = event.detail;
        this.kupChange.emit({
            originalEvent: event,
            oldValue: this.currentValue,
            value,
            info,
        });
        this.previousValue = this.currentValue;
        this.currentValue = value;
    }

    // When a submit event must be launched as if it's coming from the FLD itself
    onSubmit(event: CustomEvent) {
        let message = 'Submitting!';
        errorLogging('kup-fld', message);
        this.kupSubmit.emit({
            originalEvent: event,
            oldValue: this.previousValue,
            value: this.currentValue,
            info: {
                obj:
                    event.detail.info && event.detail.info.obj
                        ? event.detail.info.obj
                        : undefined,
            },
        });
    }

    //-- Public --

    /**
     * Provides an interface to get the current value programmatically
     * @method getCurrentValue
     * @returns {any}
     */
    @Method()
    async getCurrentValue() {
        return this.currentValue;
    }

    //---- Rendering functions ----
    render() {
        let toRender = [];
        const baseClass = 'kup-fld';
        let label = null;
        let submit = null;
        let wrapperClass = '';
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        let propList = undefined;

        for (let j = 0; j < this.data.length; j++) {
            let newProp = this.data[j].prop;
            let newValue = this.data[j].value;
            if (propList) {
                propList = { ...propList, [newProp]: newValue };
            } else {
                propList = { [newProp]: newValue };
            }
        }

        if (this.label.trim().length) {
            wrapperClass += ' label-' + this.labelPos;
            label = (
                <label
                    class={
                        baseClass +
                        '__label' +
                        ' ' +
                        baseClass +
                        '--' +
                        this.labelPos
                    }
                >
                    {this.label}
                </label>
            );
        }

        if (this.showSubmit) {
            wrapperClass += ' submit-' + this.submitPos;
            submit = (
                <kup-button
                    class={
                        baseClass +
                        '__submit' +
                        ' ' +
                        baseClass +
                        '--' +
                        this.submitPos
                    }
                    label={this.submitLabel}
                    onKupButtonClicked={this.onSubmitInstance}
                />
            );
        }

        //-- If a component must be positioned on top of the dynamic one --
        const labelIsTop = this.labelPos === 'top';
        const submitIsTop = this.submitPos === 'top';

        if (labelIsTop || submitIsTop) {
            toRender.push(
                <div class={baseClass + '__top-container'}>
                    {labelIsTop && label ? label : null}
                    {submitIsTop && submit ? submit : null}
                </div>
            );
        }

        //-- Outputs the main dynamic component to render --
        if (!labelIsTop && label) {
            toRender.push(label);
        }

        let confObj: { [key: string]: any } = {};
        let comp: string = undefined;
        if (this.type === undefined) {
            let message = 'Type (state) is undefined!';
            errorLogging('kup-fld', message);
        }
        switch (this.type.toLowerCase()) {
            case 'cmb':
                comp = 'wup-combobox';
                confObj.onKetchupComboSelected = this.onChangeInstance;
                break;
            case 'fup':
                comp = 'kup-upload';
                confObj.items = this.data;
                //confObj.formDataName:'WTX_FILE' -> no, usare il nome del campo: "id": "TPLFLD"
                /*
                compPrefix = '';
                type = 'vaadin-upload';
                */
                /*
                compPrefix = '';
                type ='input';
                confObj.type = 'file';
                */
                break;
            case 'itx':
                comp = 'kup-text-field';
                confObj.onKetchupTextInputUpdated = this.onChangeInstance;
                // When FLD has the text form, it should submit also when a user presses Enter on the text field
                confObj.onKetchupTextInputSubmit = this.onSubmitInstance;
                break;
            case 'rad':
                comp = 'kup-radio';
                confObj.onkupRadioChange = this.onChangeInstance;
                break;
        }

        const $DynamicComponent = comp as any; // TODO check if there is a better typing

        toRender.push(
            <$DynamicComponent
                class={baseClass + '__component'}
                {...confObj}
                {...propList}
            />
        );

        if (!submitIsTop && submit) {
            toRender.push(submit);
        }

        return (
            <Host>
                {customStyle}
                <div id="kup-component" class={wrapperClass}>
                    {toRender}
                </div>
            </Host>
        );
    }
}
