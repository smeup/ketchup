import {
    Component,
    Prop,
    h,
    Watch,
    Event,
    EventEmitter,
    State,
} from '@stencil/core';

import { KetchupTextInputEvent } from '../kup-text-input/kup-text-input-declarations';
import { KetchupComboEvent } from '../kup-combo/kup-combo-declarations';
import {
    CrudRecordsChanged,
    CrudCallBackOnFormEventResult,
} from '../kup-crud/kup-crud-declarations';

import {
    KupAutocompleteOption,
    KupAutocompleteFilterUpdatePayload,
} from '../kup-autocomplete/kup-autocomplete-declarations';

import { SearchSelectionUpdatedEventDetail } from '../kup-search/kup-search-declarations';

import isEmpty from 'lodash/isEmpty';

import { TableData } from '../kup-data-table/kup-data-table-declarations';

import { SearchFilterSubmittedEventDetail } from '../kup-search/kup-search-declarations';

import {
    FormFields,
    FormField,
    FormSection,
    FormActionEventDetail,
    FormFieldEventDetail,
    FormMessage,
    FormMessageLevel,
    FormConfig,
    FormActions,
    FormActionField,
    FormRecord,
    FormCell,
} from './kup-form-declarations';

import {
    buildButtonConfig,
    getFields,
    getVisibleFields,
    zipRecords,
    unzipRecords,
} from '../../utils/widget-utils';

import {
    getFromConfigInForm,
    getValueInForm,
    buildProgressBarConfigInForm,
    isProgressBarInForm,
    isInputTextInForm,
    isImageInForm,
    isComboInForm,
    isAutocompleteInForm,
    isSearchInForm,
    isConfiguratorInForm,
} from '../../utils/form-cell-utils';

import { KupImage } from '../kup-image/kup-image';

@Component({
    tag: 'kup-form',
    styleUrl: 'kup-form.scss',
    shadow: true,
})
export class KupForm {
    @Prop() refid: string;

    @Prop() extra: any;

    @Prop({ mutable: true }) config: FormConfig = {};

    @Prop({ mutable: true }) fields: FormFields;

    @Prop({ mutable: true }) sections: FormSection;

    @Prop({ mutable: true }) extraMessages: FormMessage[] = [];

    @Prop({ mutable: true }) actions: FormActions;

    @Prop({ mutable: true }) record: FormRecord = { fields: {} };

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

    @State() messages: FormMessage[] = [];

    private visibleFields: FormField[] = [];

    private sectionsCalcs: FormSection;

    private actionsCalcs: FormActions;

    @Event({
        eventName: 'kupFormActionSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormActionSubmitted: EventEmitter<FormActionEventDetail>;

    @Event({
        eventName: 'kupFormFieldFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldFocused: EventEmitter<FormFieldEventDetail>;

    @Event({
        eventName: 'kupFormFieldBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldBlurred: EventEmitter<FormFieldEventDetail>;

    @Event({
        eventName: 'kupFormFieldChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldChanged: EventEmitter<FormFieldEventDetail>;

    /*****************************************************************/
    /** ON SOMETHING                                                **/
    /*****************************************************************/

    componentWillLoad() {
        this.onFieldsChanged();
        this.onSectionsChanged();
        this.onActionsChanged();
    }

    @Watch('sections')
    private onSectionsChanged() {
        this.initSectionsCalcs();
    }

    @Watch('fields')
    private onFieldsChanged() {
        this.initVisibleFields();
    }

    @Watch('actions')
    private onActionsChanged() {
        this.initActionsCalcs();
    }

    private onFormActionSubmitted(actionField: FormActionField) {
        this.checkAll();
        this.kupFormActionSubmitted.emit(
            this.buildFormActionSubmittedDetail(actionField)
        );
    }

    private onFieldFocused(fieldKey: string) {
        this.kupFormFieldFocused.emit(
            this.buildFormFieldFocusedDetail(fieldKey)
        );
    }

    private onFieldBlurred(fieldKey: string) {
        this.kupFormFieldBlurred.emit(
            this.buildFormFieldBlurredDetail(fieldKey)
        );
    }

    private onCrudFieldChange(
        event: CustomEvent<CrudRecordsChanged>,
        fieldKey: string
    ) {
        event.stopPropagation();
        // records are here saved with a zipped format but can be saved as preferred, also as are
        let zippedRecords = zipRecords(event.detail.actual.records);
        let value = zippedRecords;
        this.changeFieldValue(fieldKey, value);
    }

    private onAutocompleteFieldChange(
        event: CustomEvent<KupAutocompleteOption[]>,
        fieldKey: string
    ) {
        event.stopPropagation();
        let value = event.detail;
        this.changeFieldValue(fieldKey, value);
    }

    private onSimpleValueFieldChange(
        event:
            | CustomEvent<KetchupTextInputEvent>
            | CustomEvent<KetchupComboEvent>
            | CustomEvent<SearchSelectionUpdatedEventDetail>,
        fieldKey: string
    ) {
        event.stopPropagation();
        const { value } = event.detail;
        this.changeFieldValue(fieldKey, value);
    }

    private changeFieldValue(fieldKey: string, value: any) {
        console.log('Change value for field key ' + fieldKey);
        if (!this.record.fields.hasOwnProperty(fieldKey)) {
            this.record.fields[fieldKey] = { key: fieldKey, value: value };
        } else {
            this.record.fields[fieldKey].value = value;
        }

        if (this.config.liveCheck) {
            this.checkField(
                this.fields[fieldKey],
                this.record.fields[fieldKey]
            );
        }

        this.kupFormFieldChanged.emit(
            this.buildFormFieldChangedDetail(fieldKey)
        );
    }

    /*****************************************************************/
    /** RENDERING                                                   **/
    /*****************************************************************/

    private renderSection(
        section: FormSection,
        parent: FormSection,
        visibleFields: FormField[]
    ) {
        let sectionContent = null;

        if (section.sections && section.sections.length > 0) {
            const sections = section.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderSection(sections[cnt++], section, visibleFields)
                );
            }
        } else if (section.fields) {
            const sectionFields = section.fields;
            let size = sectionFields.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderField(sectionFields[cnt++], visibleFields)
                );
            }
        } else if (visibleFields.length > 0) {
            const visibleField = visibleFields[0];

            visibleFields.splice(0, 1);

            sectionContent = this.renderField(visibleField.key, visibleFields);
        }

        const isGrid = !!section.columns;

        const sectionClass: { [index: string]: boolean } = {
            'form-section left-aligned': true,
            column: !isGrid && !section.horizontal,
            grid: isGrid,
            titled: !!section.title,
            'last-child': !section.sections || section.sections.length === 0,
        };

        const sectionStyle: any = section.style || {};
        if (section.dim && parent) {
            sectionStyle.flex = `0 0 ${section.dim}`;

            if (parent.horizontal) {
                sectionStyle.maxWidth = section.dim;
            } else {
                sectionStyle.maxHeight = section.dim;
            }
        }

        if (isGrid) {
            sectionStyle[
                'grid-template-columns'
            ] = `repeat(${section.columns}, 1fr)`;
        }

        let sectionContainer = null;

        const title = section.title ? <h3>{section.title}</h3> : null;

        sectionContainer = (
            <div class={sectionClass} style={sectionStyle}>
                {title}
                {sectionContent}
            </div>
        );

        return sectionContainer;
    }

    private renderField(fieldKey: string, visibleFields: FormField[]) {
        let fieldLabelContent = null;
        let fieldContent = null;
        let fieldMessagesContent = null;
        let fieldDebugContent = null;
        let fieldStyle = {};

        if (fieldKey) {
            const field = this.fields[fieldKey];

            let cell =
                this.record &&
                this.record.fields &&
                this.record.fields[fieldKey];

            if (field) {
                let index = -1;
                for (let i = 0; i < visibleFields.length; i++) {
                    const c = visibleFields[i];
                    if (c.key === fieldKey) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    visibleFields.splice(index, 1);
                }

                if (isComboInForm(cell, field)) {
                    fieldContent = (
                        <kup-combo
                            items={field.config.data}
                            {...field.config}
                            initialValue={cell && cell.value}
                            disabled={field.readonly}
                            onKetchupComboSelected={(e) =>
                                this.onSimpleValueFieldChange(e, field.key)
                            }
                            onKetchupComboFocused={() =>
                                this.onFieldFocused(field.key)
                            }
                            onKetchupComboBlurred={() =>
                                this.onFieldBlurred(field.key)
                            }
                        ></kup-combo>
                    );
                } else if (isConfiguratorInForm(cell, field)) {
                    let records = unzipRecords(cell && cell.value);
                    fieldContent = (
                        <kup-crud
                            refid={field.refid}
                            extra={field.extra}
                            disabled={field.readonly}
                            config={field.config.config}
                            fields={field.config.fields}
                            records={records}
                            sections={field.config.sections}
                            extraMessages={field.config.extraMessages}
                            actions={field.config.actions}
                            onKupCrudRecordsChanged={(e) =>
                                this.onCrudFieldChange(e, field.key)
                            }
                            onKupCrudFocused={() =>
                                this.onFieldFocused(field.key)
                            }
                            onKupCrudBlurred={() =>
                                this.onFieldBlurred(field.key)
                            }
                            crudCallBackOnFormActionSubmitted={
                                this.crudCallBackOnFormActionSubmitted
                            }
                            crudCallBackOnFormFieldChanged={
                                this.crudCallBackOnFormFieldChanged
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                            searchCallBackOnFilterSubmitted={
                                this.searchCallBackOnFilterSubmitted
                            }
                        ></kup-crud>
                    );
                } else if (isAutocompleteInForm(cell, field)) {
                    fieldContent = (
                        <kup-autocomplete
                            extra={field.extra}
                            initialSelectedItems={cell && cell.value}
                            disabled={field.readonly}
                            items={field.config.items}
                            {...field.config}
                            onKupAutocompleteSelectionUpdate={(e) =>
                                this.onAutocompleteFieldChange(e, field.key)
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                        ></kup-autocomplete>
                    );
                } else if (isSearchInForm(cell, field)) {
                    fieldContent = (
                        <kup-search
                            extra={field.extra}
                            disabled={field.readonly}
                            initialValue={cell && cell.value}
                            {...field.config}
                            onKupSearchSelectionUpdated={(e) =>
                                this.onSimpleValueFieldChange(e, field.key)
                            }
                            searchCallBackOnFilterSubmitted={
                                this.searchCallBackOnFilterSubmitted
                            }
                        ></kup-search>
                    );
                } else if (isImageInForm(cell, field)) {
                    let badges = getFromConfigInForm(cell, field, 'badges');
                    let src = getValueInForm(cell);
                    // TODO: srcTemplate case
                    let height = getFromConfigInForm(cell, field, 'height');
                    let width = getFromConfigInForm(cell, field, 'width');
                    fieldContent = (
                        <kup-image
                            src={src}
                            badges={badges}
                            width="auto"
                            height="auto"
                            maxWidth={width ? width : KupImage.DEFAULT_WIDTH}
                            maxHeight={
                                height ? height : KupImage.DEFAULT_HEIGHT
                            }
                        />
                    );
                } else if (isProgressBarInForm(cell, field)) {
                    let value = getValueInForm(cell);
                    fieldContent = (
                        <kup-progress-bar
                            {...buildProgressBarConfigInForm(
                                cell,
                                field,
                                false,
                                value
                            )}
                        />
                    );
                } else if (isInputTextInForm(cell, field)) {
                    const wrapperStyle = {};
                    wrapperStyle['--kup-text-input_border-color--selected'] =
                        '#66D3FA';

                    // NB: not updated field value using onInput() event, but using onChange().
                    // The onChange of an input text fires when the element loses focus, not immediately after the modification
                    fieldContent = (
                        <kup-text-input
                            style={wrapperStyle}
                            input-type="text"
                            initialValue={cell && cell.value}
                            disabled={field.readonly}
                            onKetchupTextInputChanged={(e) =>
                                this.onSimpleValueFieldChange(e, field.key)
                            }
                            onKetchupTextInputFocused={() =>
                                this.onFieldFocused(field.key)
                            }
                            onKetchupTextInputBlurred={() =>
                                this.onFieldBlurred(field.key)
                            }
                        ></kup-text-input>
                    );
                } else {
                    fieldContent =
                        'shape to implement... FIELD with key ' +
                        field.key +
                        ' and shape ' +
                        field.shape;
                }
            }

            if (field.title.trim().length) {
                fieldLabelContent = <label>{field.title}</label>;
            }

            let fieldMessages = [...this.messages, ...this.extraMessages];
            fieldMessages = fieldMessages
                ? fieldMessages.filter((elem) => elem.fieldKey == field.key)
                : [];

            if (fieldMessages) {
                fieldMessagesContent = (
                    <div>
                        <ul class="form-field-messages">
                            {fieldMessages
                                .filter((elem) => !!elem)
                                .map((message, index) => {
                                    return (
                                        <li
                                            class={
                                                'form-field-message ' +
                                                message.level.toLowerCase()
                                            }
                                            key={index}
                                        >
                                            {message.text}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                );
            }

            fieldDebugContent = (
                <div class="form-field-debug">
                    {'debug value: ' + JSON.stringify(cell && cell.value)}
                </div>
            );
        }

        return (
            <div data-field={fieldKey} class="form-field" style={fieldStyle}>
                {fieldLabelContent}
                {fieldContent}
                {fieldMessagesContent}
                {fieldDebugContent}
            </div>
        );
    }

    renderActionFields(position: string) {
        let actionsContent = [];
        this.actionsCalcs.sections &&
            this.actionsCalcs.sections
                .filter((section) => section.position === position)
                .forEach((section) => {
                    section.fields &&
                        section.fields.forEach((actionField) => {
                            actionsContent.push(
                                this.renderActionField(
                                    this.actionsCalcs.fields &&
                                        this.actionsCalcs.fields[actionField]
                                )
                            );
                        });
                });
        return actionsContent;
    }

    renderActionField(actionField: FormActionField) {
        let actionContent = (
            <div class="form-action">
                <kup-button
                    {...buildButtonConfig(
                        actionField.title,
                        actionField.config
                    )}
                    onKupButtonClicked={() =>
                        this.onFormActionSubmitted(actionField)
                    }
                />
            </div>
        );

        return actionContent;
    }

    render() {
        const visibleFields = [...this.visibleFields];
        let sectionsContent = null;

        let horizontal = false;
        if (this.sectionsCalcs) {
            if (this.sectionsCalcs.horizontal) {
                horizontal = true;
            }

            const sections = this.sectionsCalcs.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionsContent = [];
            }

            const parent: FormSection = {
                horizontal: horizontal,
            };

            while (size-- > 0) {
                sectionsContent.push(
                    this.renderSection(sections[cnt++], parent, visibleFields)
                );
            }
        }

        const sectionsClass = {
            'form-sections': true,
            column: !horizontal,
        };

        let globalMessagesContent = null;

        let globalMessages = [...this.messages, ...this.extraMessages];
        globalMessages = globalMessages
            ? globalMessages.filter((elem) => !!elem && isEmpty(elem.fieldKey))
            : [];

        if (globalMessages) {
            globalMessagesContent = (
                <div class="global-messages">
                    {globalMessages
                        .filter((elem) => !!elem)
                        .map((message, index) => {
                            return (
                                <div
                                    class={
                                        'global-message ' +
                                        message.level.toLowerCase()
                                    }
                                    key={index}
                                >
                                    {message.text}
                                </div>
                            );
                        })}
                </div>
            );
        }

        let topActions = (
            <div class="form-actions top">
                <div class="form-actions-section left">
                    {this.renderActionFields('TL')}
                </div>
                <div class="form-actions-section right">
                    {this.renderActionFields('TR')}
                </div>
            </div>
        );

        let bottomActions = (
            <div class="form-actions top">
                <div class="form-actions-section left">
                    {this.renderActionFields('BL')}
                </div>
                <div class="form-actions-section right">
                    {this.renderActionFields('BR')}
                </div>
            </div>
        );

        return (
            <div class="form-component">
                {globalMessagesContent}
                {topActions}
                <div class="form-sections-container">
                    <div class="form-sections-wrapper">
                        <div class={sectionsClass}>{sectionsContent}</div>
                    </div>
                </div>
                {bottomActions}
            </div>
        );
    }

    /*****************************************************************/
    /** UTIL METHODS                                                **/
    /*****************************************************************/

    private hasErrorMessages(): boolean {
        let errorMessages = this.messages.filter(
            (elem) => elem.level == FormMessageLevel.ERROR
        );
        return errorMessages.length == 0;
    }

    private buildFormFieldFocusedDetail(
        fieldKey: string
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(fieldKey);
    }

    private buildFormFieldBlurredDetail(
        fieldKey: string
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(fieldKey);
    }

    private buildFormFieldChangedDetail(
        fieldKey: string
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(fieldKey);
    }

    private buildFormFieldEventDetail(fieldKey: string): FormFieldEventDetail {
        let detail = {
            ...(this.refid ? { refid: this.refid } : {}),
            ...(this.extra ? { extra: this.extra } : {}),
            field: { key: fieldKey },
            actual: { record: this.record },
        } as FormFieldEventDetail;
        let fields = this.filterFieldsExtraAndObj(this.fields);
        if (!isEmpty(fields)) {
            detail.actual.fields = fields;
        }
        if (this.config.liveCheck) {
            detail.isValid = this.hasErrorMessages();
        }
        return detail;
    }

    private buildFormActionSubmittedDetail(
        actionField: FormActionField
    ): FormActionEventDetail {
        let detail = {
            ...(this.refid ? { refid: this.refid } : {}),
            ...(this.extra ? { extra: this.extra } : {}),
            action: {
                key: actionField.key,
                ...(actionField.extra ? { extra: actionField.extra } : {}),
                ...(actionField.obj ? { obj: actionField.obj } : {}),
            },
            actual: { record: this.record },
            isValid: this.hasErrorMessages(),
        } as FormActionEventDetail;
        let fields = this.filterFieldsExtraAndObj(this.fields);
        if (!isEmpty(fields)) {
            detail.actual.fields = fields;
        }
        return detail;
    }

    private filterFieldsExtraAndObj(fields: FormFields) {
        let fieldsFiltered = {} as FormFields;
        getFields(fields).forEach((field) => {
            if (field.extra || field.obj) {
                fieldsFiltered[field.key] = {
                    key: field.key,
                    ...(field.extra ? { extra: field.extra } : {}),
                    ...(field.obj ? { obj: field.obj } : {}),
                };
            }
        });
        return fieldsFiltered;
    }

    private initVisibleFields(): void {
        this.visibleFields = getVisibleFields(getFields(this.fields));
    }

    private initSectionsCalcs(): void {
        // check if there are sections, if not, create a default sections schema with only one section containing all visible fields
        if (!isEmpty(this.sections)) {
            this.sectionsCalcs = this.sections;
            return;
        }

        const section: FormSection = {
            horizontal: false,
            sections: [],
        };

        const visibleFields = this.visibleFields;
        let size = visibleFields.length;
        let content = [];

        let cnt = 0;
        while (size-- > 0) {
            content.push(visibleFields[cnt++].key);
        }

        section.fields = content;

        this.sectionsCalcs = {
            sections: [section],
        };
    }

    private initActionsCalcs(): void {
        // check if there are actions, if not, create a default actions schema with submit in bottom right
        if (isEmpty(this.actions)) {
            let submit = {
                key: 'submit',
                value: 'Submit',
                config: {
                    showtext: true,
                    flat: false,
                },
            } as FormActionField;

            let brSection = { position: 'BR', fields: ['submit'] };
            this.actionsCalcs = {
                fields: { submit: submit },
                sections: [brSection],
            };
        } else {
            this.actionsCalcs = this.actions;
        }
    }

    private checkAll() {
        this.messages = this.validateAll(getFields(this.fields));
        console.log(
            'Check all executed with messages: ' + JSON.stringify(this.messages)
        );
    }

    private checkField(field: FormField, cell: FormCell) {
        this.messages = this.messages.filter(function(message) {
            return message.fieldKey != field.key;
        });
        this.messages = [...this.messages, ...this.validateField(field, cell)];
        console.log(
            'Check field  ' +
                field.key +
                ' executed with all messages: ' +
                JSON.stringify(this.messages)
        );
    }

    private validateAll(fields: FormField[]): FormMessage[] {
        let messages = [];
        fields.forEach((field) => {
            let fieldMessages = this.validateField(
                this.fields[field.key],
                this.record.fields[field.key]
            );
            messages = [...messages, ...fieldMessages];
        });
        return messages;
    }

    private validateField(field: FormField, cell: FormCell): FormMessage[] {
        let messages = [];

        // required
        if (
            field.validate &&
            field.validate.required &&
            cell &&
            isEmpty(cell.value)
        ) {
            messages = [
                ...messages,
                {
                    fieldKey: field.key,
                    text: 'cannot be empty',
                    level: FormMessageLevel.ERROR,
                },
            ];
        }

        // min lenght
        if (
            field.validate &&
            field.validate.minLength &&
            cell &&
            (isEmpty(cell.value) ||
                cell.value.length < field.validate.minLength)
        ) {
            messages = [
                ...messages,
                {
                    fieldKey: field.key,
                    text:
                        'should NOT be shorter than ' +
                        field.validate.minLength +
                        ' characters',
                    level: FormMessageLevel.ERROR,
                },
            ];
        }

        return messages;
    }
}
