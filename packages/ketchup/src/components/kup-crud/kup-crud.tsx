import {
    Component,
    Prop,
    h,
    Watch,
    Method,
    Event,
    EventEmitter,
    Host,
    State,
} from '@stencil/core';

import {
    KupAutocompleteOption,
    KupAutocompleteFilterUpdatePayload,
} from '../kup-autocomplete/kup-autocomplete-declarations';

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

import { SearchFilterSubmittedEventDetail } from '../kup-search/kup-search-declarations';

import { TableData } from '../kup-data-table/kup-data-table-declarations';

import cloneDeep from 'lodash/cloneDeep';

@Component({
    tag: 'kup-crud',
    styleUrl: 'kup-crud.scss',
    shadow: true,
})
export class KupCrud {
    //--------------------------------------------------------------------------
    // PROPS
    // -------------------------------------------------------------------------

    @Prop() refid: string;

    @Prop() extra: any;

    @Prop() config: CrudConfig = {};

    @Prop() records: FormRecord[];

    @Prop() fields: FormFields;

    @Prop() sections: FormSection;

    @Prop() extraMessages: FormMessage[] = [];

    @Prop() actions: FormActions;

    @Prop() disabled: boolean = false;

    @Prop() crudCallBackOnFormActionSubmitted: (
        detail: FormActionEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() crudCallBackOnFormFieldChanged: (
        detail: FormFieldEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() autocompleteCallBackOnFilterUpdate: (
        detail: KupAutocompleteFilterUpdatePayload
    ) => Promise<KupAutocompleteOption[]> | undefined = undefined;

    @Prop() searchCallBackOnFilterSubmitted: (
        detail: SearchFilterSubmittedEventDetail
    ) => Promise<TableData> | undefined = undefined;

    //--------------------------------------------------------------------------
    // EVENTS
    // -------------------------------------------------------------------------

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

    //--------------------------------------------------------------------------
    // INTERNAL
    // -------------------------------------------------------------------------

    @State() actualRecord: FormRecord;

    private visibleFields: FormField[] = [];

    private modal: HTMLKupModalElement;

    //--------------------------------------------------------------------------
    // PUBLI METHODS
    // -------------------------------------------------------------------------

    @Method()
    async closeForm() {
        this.modal.visible = false;
    }

    @Method()
    async openForm() {
        this.modal.visible = true;
    }

    //--------------------------------------------------------------------------
    // ON SOMETHING
    // -------------------------------------------------------------------------

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
        if (this.records[0]) {
            this.actualRecord = cloneDeep(this.records[0]);
        }
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
    private onFormFieldChanged(event: CustomEvent<FormFieldEventDetail>) {
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

    //--------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

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

        let configureButtonContent = !this.disabled ? (
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
        ) : (
            ''
        );

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
                    {configureButtonContent}

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
                            record={this.actualRecord}
                            sections={this.sections}
                            extraMessages={this.extraMessages}
                            actions={this.actions}
                            onKupFormActionSubmitted={(e) =>
                                this.onFormActionSubmitted(e)
                            }
                            onKupFormFieldChanged={(e) =>
                                this.onFormFieldChanged(e)
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                            searchCallBackOnFilterSubmitted={
                                this.searchCallBackOnFilterSubmitted
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

    //--------------------------------------------------------------------------
    // UTIL METHODS
    // -------------------------------------------------------------------------

    private initVisibleFields(): void {
        this.visibleFields = getVisibleFields(getFields(this.fields));
    }

    private update(result: CrudCallBackOnFormEventResult) {
        console.log('CRUD component update...');

        if (isEmpty(result)) {
            console.log('Nothing to update...');
        }

        if (result.formOpened == false) {
            this.modal.visible = false;
        }

        if (result.extraMessages) {
            this.extraMessages = result.extraMessages;
        }

        // TODO: as default if you modify fields you have to return all fields
        // I added a fields.diff.override mode but is an INCOMPLETE sample
        // the impl is only for readonly and data props -> if can be useful extends it
        if (result.fields) {
            console.log('Updating fields...');
            if (result.diffTypes.includes('fields.diff.override')) {
                const keys = Object.keys(result.fields);
                keys.forEach((key) => {
                    if (result.fields[key].hasOwnProperty('config')) {
                        if (result.fields[key].config.hasOwnProperty('data')) {
                            this.fields[key].config.data =
                                result.fields[key].config.data;
                        }
                    }
                    if (result.fields[key].hasOwnProperty('readonly')) {
                        this.fields[key].readonly = result.fields[key].readonly;
                    }
                });
            } else {
                this.fields = result.fields;
            }
        }

        if (result.record) {
            this.actualRecord = result.record;
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
