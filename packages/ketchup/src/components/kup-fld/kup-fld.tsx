import {
    Component,
    Event,
    EventEmitter,
    Host,
    Method,
    Prop,
    h,
} from '@stencil/core';

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
     * Sets the submit button's position, top right bottom or left.
     */
    @Prop({ reflect: true }) submitPos: string = 'right';

    /**
     * The type of the FLD
     */
    @Prop({ reflect: true }) type: string = undefined;

    //-- Not reactive --
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
        console.log(event);
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
        console.log(event);
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
                <wup-button
                    class={baseClass + '__submit'}
                    label={this.submitLabel}
                    onKupButtonClick={this.onSubmitInstance}
                />
            );
        }

        //-- If a component must be positioned on top of the dynamic one --
        const labelIsTop = this.labelPos === 'top';
        const labelIsLeft = this.labelPos === 'left';
        const labelIsRight = this.labelPos === 'right';
        const submitIsTop = this.submitPos === 'top';
        const submitIsLeft = this.submitPos === 'left';
        const submitIsRight = this.submitPos === 'right';
        const submitIsBottom = this.submitPos === 'bottom';

        if (labelIsTop || submitIsTop) {
            toRender.push(
                <div class={baseClass + '__top-container'}>
                    {labelIsTop && label ? label : null}
                    {submitIsTop && submit ? submit : null}
                </div>
            );
        }

        if (labelIsLeft && label) {
            toRender.push(label);
        }

        if (submitIsLeft && submit) {
            toRender.push(submit);
        }

        let comp: string = undefined;

        if (this.type === undefined) {
            let message = 'Type (state) is undefined!';
            errorLogging('kup-fld', message);
        }
        switch (this.type.toLowerCase()) {
            case 'cmb':
                comp = 'kup-combobox';
                propList.onkupComboboxChange = this.onChangeInstance;
                break;
            case 'fup':
                comp = 'kup-upload';
                propList.items = this.data;
                break;
            case 'itx':
                comp = 'kup-text-field';
                propList.onkupTextfieldChange = this.onChangeInstance;
                break;
            case 'rad':
                comp = 'kup-radio';
                propList.onkupRadioChange = this.onChangeInstance;
                break;
        }

        const $DynamicComponent = comp as any; // TODO check if there is a better typing

        toRender.push(
            <$DynamicComponent
                class={baseClass + '__component'}
                {...propList}
            />
        );

        if (labelIsRight && label) {
            toRender.push(label);
        }

        if ((submitIsRight || submitIsBottom) && submit) {
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
