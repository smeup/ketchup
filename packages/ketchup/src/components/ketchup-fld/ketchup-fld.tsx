import {Component, Event, EventEmitter, Prop, State, Watch} from '@stencil/core';

@Component({
    tag: 'ketchup-fld',
    styleUrl: 'ketchup-fld.scss',
    shadow: true
})
export class KetchupFld {
    /**
     * Data the FLD must parse to fully be configured
     */
    @Prop() json: string | object = '';

    /**
     * Effective data to pass to the component
     */
    @Prop() data: any;

    //-- Reflect JSON to internal state --
    @Watch('json')
    updateInternalState() {
        // Controls type of data passed to the json parameter and if necessary parses it
        let currentData;
        if (typeof this.json === 'string') {
            currentData = JSON.parse(this.json);
        } else {
            currentData = this.json;
        }

        // Assigns given values to the state
        const keys = Object.keys(currentData);
        keys.forEach(key => {
            this[key] = currentData[key];
        });
    }

    //---- Internal state ----
    /**
     * The type of the FLD
     */
    @State() type: string;
    /**
     * Chooses if there is the need to show the submit button or not
     */
    @State() showSubmit: boolean = false;
    /**
     * Chooses the submit button label to show
     */
    @State() submitLabel: string = '';
    /**
     * Chooses the submit button position
     */
    @State() submitPos: string = 'right'; // "left / right / top"
    /**
     * Chooses the label to show
     * If set to empty or has only white space chars, the label get removed
     */
    @State() label: string = ''; // Example "Insert user name"
    /**
     * Chooses label position
     */
    @State() labelPos: string = 'left'; // 'left / right / top'
    /**
     * Other configurations
     */
    @State() extensions: {
        minQueryLength?: number;
        forceSelection?: boolean;
    } = {};

    //-- Not reactive --


    //---- Event handlers ----
    @Event({
        eventName: 'ketchupFldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupFldSubmit: EventEmitter;

    onSubmitClicked() {
        console.log('Submit clicked');
        this.ketchupFldSubmit.emit();
    }


    //---- Rendering functions ----
    render() {
        let toRender = [];
        const baseClass = 'ketchup-fld';
        let label = null;
        let submit = null;

        //-- Checks if there is label to output --
        if (this.label.trim().length) {
            label =
                <label
                    class={baseClass + '__label' + ' ' + baseClass + '--' + this.labelPos}>
                    {this.label}
                </label>
            ;
        }

        //-- Submit --
        if (this.showSubmit) {
            submit =
                <ketchup-button
                    class={baseClass + '__submit' + ' ' + baseClass + '--' + this.submitPos}
                    label={this.submitLabel}
                    onKetchupButtonClicked={this.onSubmitClicked.bind(this)}/>
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

        /**
         * JSX dynamic component notation
         * @see: https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name
         */
        console.log(this.type);

        let type: string = '';
        switch (this.type) {
            default:
                type = 'combo';
        }

        const $DynamicComponent = ('ketchup-' + type) as any;
        toRender.push(
            <$DynamicComponent
                class={baseClass + '__component'}
                displayedField="value"
                items={this.data}/>
        );

        if (!submitIsTop && submit) {
            toRender.push(submit);
        }

        return toRender;
    }
}
