import {
    Component,
    Prop,
    h,
    Watch,
    Method,
    Event,
    EventEmitter,
    Host,
} from '@stencil/core';

import {
    FormFields,
    FormRecord,
    FormField,
    FormSection,
    FormMessage,
    FormActions,
    FormActionEventDetail,
    FormFieldEventDetail,
} from '../kup-form/kup-form-declarations';

import {
    getFields,
    getVisibleFields,
    outputValue,
} from '../../utils/widget-utils';

import {
    CrudConfig,
    CrudRecordsChanged,
    CrudCallBackOnFormEventResult,
} from './kup-crud-declarations';

import isEmpty from 'lodash/isEmpty';

@Component({
    tag: 'kup-crud',
    styleUrl: 'kup-crud.scss',
    shadow: true,
})
export class KupCrud {
    @Prop() refid: string;

    @Prop() extra: any;

    @Prop({ mutable: true }) config: CrudConfig = {};

    @Prop({ mutable: true }) records: FormRecord[];

    @Prop({ mutable: true }) fields: FormFields;

    @Prop({ mutable: true }) sections: FormSection;

    @Prop({ mutable: true }) extraMessages: FormMessage[] = [];

    @Prop({ mutable: true }) actions: FormActions;

    @Prop() crudCallBackOnFormActionSubmitted: (
        detail: FormActionEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() crudCallBackOnFormFieldChanged: (
        detail: FormFieldEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    private visibleFields: FormField[] = [];

    private modal: HTMLKupModalElement;

    @Event({
        eventName: 'kupCrudFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFocused: EventEmitter;

    @Event({
        eventName: 'kupCrudBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudBlurred: EventEmitter;

    @Event({
        eventName: 'kupCrudFormActionSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFormActionSubmitted: EventEmitter<FormActionEventDetail>;

    @Event({
        eventName: 'kupCrudFormFieldChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudFormFieldChanged: EventEmitter<FormFieldEventDetail>;

    @Event({
        eventName: 'kupCrudRecordsChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCrudRecordsChanged: EventEmitter<CrudRecordsChanged>;

    /*****************************************************************/
    /** PUBLIC METHODS                                              **/
    /*****************************************************************/

    @Method()
    async closeForm() {
        this.modal.visible = false;
    }

    @Method()
    async openForm() {
        this.modal.visible = true;
    }

    /*****************************************************************/
    /** ON SOMETHING                                                **/
    /*****************************************************************/

    componentWillLoad() {
        this.onFieldsChanged();
    }

    @Watch('fields')
    private onFieldsChanged() {
        this.initVisibleFields();
    }

    private onCrudFocused(event) {
        event.stopPropagation();
        this.kupCrudFocused.emit({});
    }

    private onCrudBlurred(event) {
        event.stopPropagation();
        this.kupCrudBlurred.emit({});
    }

    private onOpenFormClicked(event) {
        console.log('Open crud form clicked');
        event.stopPropagation();

        // clean form with selected record data
        this.records[0] &&
            this.visibleFields.forEach((field) => {
                this.fields[field.key].value = this.records[0].fields[
                    field.key
                ].value;
            });
        this.fields = { ...this.fields };
        this.extraMessages = [];

        // open modal
        this.modal.visible = true;
    }

    private onCancelForm(event) {
        console.log('Cancel crud form clicked');
        event.stopPropagation();
        // close modal
        this.modal.visible = false;
    }

    // TODO on form field changed....
    private onFormFieldBlurred(event: CustomEvent<FormFieldEventDetail>) {
        event.stopPropagation();
        let detail = event.detail;

        if (this.crudCallBackOnFormFieldChanged) {
            console.log(
                'Executing callback on form field event for refid ' +
                    detail.refid
            );
            this.crudCallBackOnFormFieldChanged(detail)
                .then((result) => {
                    this.update(result);
                    this.kupCrudFormFieldChanged.emit(detail);
                })
                .catch((err) => {
                    console.error('Executing callback error:', err);
                });
        } else {
            this.kupCrudFormFieldChanged.emit(detail);
        }
    }

    private onFormActionSubmitted(event: CustomEvent<FormActionEventDetail>) {
        event.stopPropagation();
        let detail = event.detail;

        if (this.crudCallBackOnFormActionSubmitted) {
            console.log(
                'Executing callback on form action submitted for refid ' +
                    detail.refid +
                    ' and action ' +
                    detail.action.key
            );
            this.crudCallBackOnFormActionSubmitted(detail)
                .then((result) => {
                    this.update(result);
                    this.kupCrudFormActionSubmitted.emit(detail);
                })
                .catch((err) => {
                    console.error('Executing callback error:', err);
                });
        } else {
            this.kupCrudFormActionSubmitted.emit(detail);
        }
    }

    /*****************************************************************/
    /** RENDERING                                                   **/
    /*****************************************************************/

    render() {
        let tableHeader = [];

        this.visibleFields &&
            this.visibleFields.forEach((field) => {
                tableHeader.push(<th>{field.key}</th>);
            });

        let tableRows = [];

        this.records[0] &&
            this.visibleFields &&
            this.visibleFields.forEach((field) => {
                tableRows.push(
                    <td>
                        {outputValue(
                            this.records[0].fields[field.key].value,
                            field.outputValueFunction
                        )}
                    </td>
                );
            });

        const btnStyle = {};
        btnStyle['--kup-button_border-color-focused'] = '#66D3FA';

        return (
            <Host refid={this.refid}>
                <div class="crud-component ">
                    <table class="crud-table">
                        <thead>
                            <tr>{tableHeader}</tr>
                        </thead>
                        <tbody>
                            <tr>{tableRows}</tr>
                        </tbody>
                    </table>

                    <p>{this.refid}</p>
                    <kup-button
                        style={btnStyle}
                        id="open-modal"
                        label="Configure"
                        showtext={true}
                        flat={false}
                        onClick={(e) => this.onOpenFormClicked(e)}
                        onBlur={(e) => this.onCrudBlurred(e)}
                        onFocus={(e) => this.onCrudFocused(e)}
                    >
                        Configure
                    </kup-button>

                    <kup-modal
                        id="modal"
                        ref={(el) => (this.modal = el)}
                        onKupModalCancel={(e) => this.onCancelForm(e)}
                    >
                        <kup-form
                            refid={this.refid}
                            extra={this.extra}
                            config={this.config}
                            fields={this.fields}
                            sections={this.sections}
                            extraMessages={this.extraMessages}
                            actions={this.actions}
                            onKupFormActionSubmitted={(e) =>
                                this.onFormActionSubmitted(e)
                            }
                            onKupFormFieldBlurred={(e) =>
                                this.onFormFieldBlurred(e)
                            }
                            crudCallBackOnFormActionSubmitted={
                                this.crudCallBackOnFormActionSubmitted
                            }
                            crudCallBackOnFormFieldChanged={
                                this.crudCallBackOnFormFieldChanged
                            }
                        />
                    </kup-modal>
                </div>
            </Host>
        );
    }

    /*****************************************************************/
    /** UTIL METHODS                                                **/
    /*****************************************************************/

    private initVisibleFields(): void {
        this.visibleFields = getVisibleFields(getFields(this.fields));
    }

    private update(result: CrudCallBackOnFormEventResult) {
        console.log('CRUD component update...');

        if (isEmpty(result)) {
            console.log('Nothing to update...');
        }

        if (result.formOpened == false) {
            console.log('closing form');
            this.modal.visible = false;
        }

        if (result.extraMessages) {
            this.extraMessages = result.extraMessages;
        }
        // TODO: actually updating only values -> update all existing props...
        if (result.fields) {
            const keys = Object.keys(result.fields);
            keys.forEach((key) => {
                if (this.fields[key].hasOwnProperty('value')) {
                    this.fields[key].value = result.fields[key].value;
                }
            });
        }

        if (result.records) {
            this.records = result.records;
            this.kupCrudRecordsChanged.emit({
                actual: { records: this.records },
            });
        }

        // todo: config, sections, actions
    }
}
