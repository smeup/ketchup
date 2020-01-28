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

import isEmpty from 'lodash/isEmpty';

import {
    FormFields,
    FormField,
    FormSection,
    FormActionEventDetail,
    FormFieldEventDetail,
    FormFieldsCalcs,
    FormMessage,
    FormMessageLevel,
    FormConfig,
    FormActions,
    FormActionField,
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

    @Prop() crudCallBackOnFormActionSubmitted: (
        detail: FormActionEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() crudCallBackOnFormFieldChanged: (
        detail: FormFieldEventDetail
    ) => Promise<CrudCallBackOnFormEventResult> | undefined = undefined;

    @Prop() autocompleteCallBackOnFilterUpdate: (
        detail: KupAutocompleteFilterUpdatePayload
    ) => Promise<KupAutocompleteOption[]> | undefined = undefined;

    @State() messages: FormMessage[] = [];

    private fieldsCalcs: FormFieldsCalcs;

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
        this.initFieldsCalcs();
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

    private onFieldFocused(field: FormField) {
        this.kupFormFieldFocused.emit(this.buildFormFieldFocusedDetail(field));
    }

    private onFieldBlurred(field: FormField) {
        this.kupFormFieldBlurred.emit(this.buildFormFieldBlurredDetail(field));
    }

    private onCrudFieldChange(
        event: CustomEvent<CrudRecordsChanged>,
        field: FormField
    ) {
        event.stopPropagation();
        // records are here saved with a zipped format but can be saved as preferred, also as are
        let zippedRecords = zipRecords(event.detail.actual.records);
        let value = zippedRecords;
        this.changeFieldValue(field, value);
    }

    private onAutocompleteFieldChange(
        event: CustomEvent<KupAutocompleteOption[]>,
        field: FormField
    ) {
        event.stopPropagation();
        let value = event.detail;
        this.changeFieldValue(field, value);
    }

    private onSimpleValueFieldChange(
        event:
            | CustomEvent<KetchupTextInputEvent>
            | CustomEvent<KetchupComboEvent>,
        field: FormField
    ) {
        event.stopPropagation();
        const { value } = event.detail;
        this.changeFieldValue(field, value);
    }

    private changeFieldValue(field, value) {
        console.log('Change value for field ' + field.key);
        this.fields[field.key].value = value;
        this.fields = { ...this.fields };

        if (this.config.liveCheck) {
            this.checkField(field);
        }

        this.kupFormFieldChanged.emit(this.buildFormFieldChangedDetail(field));
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
            let cell = { key: field.key, value: field.value };

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
                            initialValue={field.value}
                            disabled={field.readonly}
                            onKetchupComboSelected={(e) =>
                                this.onSimpleValueFieldChange(e, field)
                            }
                            onKetchupComboFocused={() =>
                                this.onFieldFocused(field)
                            }
                            onKetchupComboBlurred={() =>
                                this.onFieldBlurred(field)
                            }
                        ></kup-combo>
                    );
                } else if (isConfiguratorInForm(cell, field)) {
                    let records = unzipRecords(field.value);
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
                                this.onCrudFieldChange(e, field)
                            }
                            onKupCrudFocused={() => this.onFieldFocused(field)}
                            onKupCrudBlurred={() => this.onFieldBlurred(field)}
                            crudCallBackOnFormActionSubmitted={
                                this.crudCallBackOnFormActionSubmitted
                            }
                            crudCallBackOnFormFieldChanged={
                                this.crudCallBackOnFormFieldChanged
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                        ></kup-crud>
                    );
                } else if (isAutocompleteInForm(cell, field)) {
                    fieldContent = (
                        <kup-autocomplete
                            extra={field.extra}
                            initialSelectedItems={field.value}
                            disabled={field.readonly}
                            items={field.config.items}
                            minimumChars={field.config.minimumChars}
                            showClearIcon={field.config.showClearIcon}
                            serverHandledFilter={
                                field.config.serverHandledFilter
                            }
                            displayMode={field.config.displayMode}
                            showDropdownIcon={field.config.showDropdownIcon}
                            onKupAutocompleteSelectionUpdate={(e) =>
                                this.onAutocompleteFieldChange(e, field)
                            }
                            autocompleteCallBackOnFilterUpdate={
                                this.autocompleteCallBackOnFilterUpdate
                            }
                        ></kup-autocomplete>
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
                            initialValue={field.value}
                            disabled={field.readonly}
                            onKetchupTextInputChanged={(e) =>
                                this.onSimpleValueFieldChange(e, field)
                            }
                            onKetchupTextInputFocused={() =>
                                this.onFieldFocused(field)
                            }
                            onKetchupTextInputBlurred={() =>
                                this.onFieldBlurred(field)
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
                    {'debug value: ' + JSON.stringify(field.value)}
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
                        actionField.value,
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
        field: FormField
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(field);
    }

    private buildFormFieldBlurredDetail(
        field: FormField
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(field);
    }

    private buildFormFieldChangedDetail(
        field: FormField
    ): FormFieldEventDetail {
        return this.buildFormFieldEventDetail(field);
    }

    private buildFormFieldEventDetail(field: FormField): FormFieldEventDetail {
        let detail = {
            ...(this.refid ? { refid: this.refid } : {}),
            ...(this.extra ? { extra: this.extra } : {}),
            actual: { fields: {} },
            old: { fields: {} },
        } as FormFieldEventDetail;
        detail.field = {
            key: field.key,
        };

        getFields(this.fields).forEach((field) => {
            detail.actual.fields[field.key] = {
                key: field.key,
                value: field.value,
                extra: field.extra,
            };
            detail.old.fields[field.key] = {
                key: field.key,
                value: this.fieldsCalcs[field.key].oldValue,
            };
        });
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
            actual: { fields: {} },
            old: { fields: {} },
        } as FormActionEventDetail;
        getFields(this.fields).forEach((field) => {
            detail.actual.fields[field.key] = {
                key: field.key,
                value: field.value,
                extra: field.extra,
            };
            detail.old.fields[field.key] = {
                key: field.key,
                value: this.fieldsCalcs[field.key].oldValue,
            };
        });
        detail.action = { key: actionField.key };
        detail.isValid = this.hasErrorMessages();
        return detail;
    }

    private initVisibleFields(): void {
        this.visibleFields = getVisibleFields(getFields(this.fields));
    }

    private initFieldsCalcs(): void {
        this.fieldsCalcs = {} as FormFieldsCalcs;
        getFields(this.fields).forEach((field) => {
            this.fieldsCalcs[field.key] = {
                oldValue: this.fields[field.key].value,
            };
        });
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

    private checkField(field: FormField) {
        this.messages = this.messages.filter(function(message) {
            return message.fieldKey != field.key;
        });
        this.messages = [...this.messages, ...this.validateField(field)];
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
            let fieldMessages = this.validateField(field);
            messages = [...messages, ...fieldMessages];
        });
        return messages;
    }

    private validateField(field: FormField): FormMessage[] {
        let messages = [];

        // required
        if (field.validate && field.validate.required && isEmpty(field.value)) {
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
            (isEmpty(field.value) ||
                field.value.length < field.validate.minLength)
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
