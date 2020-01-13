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

import isEmpty from 'lodash/isEmpty';

import {
    FormFields,
    FormField,
    FormSection,
    FormActionSubmittedDetail,
    FormFieldFocusedDetail,
    FormFieldBlurredDetail,
    FormFieldsCalcs,
    FormMessage,
    FormMessageLevel,
    FormConfig,
    FormActions,
    FormActionField,
} from './kup-form-declarations';

import { buildButtonConfig } from '../../utils/widget-utils';

import { isStringObject } from '../../utils/object-utils';

@Component({
    tag: 'kup-form',
    styleUrl: 'kup-form.scss',
    shadow: true,
})
export class KupForm {
    // mutable because is object
    @Prop() config: FormConfig = {};

    // mutable because is object
    @Prop() fields: FormFields;

    // mutable because is object
    @Prop() sections: FormSection;

    // mutable because is object
    @Prop() extraMessages: FormMessage[] = [];

    // mutable because is object
    @Prop() actions: FormActions;

    @State() messages: FormMessage[] = [];

    private fieldsCalcs: FormFieldsCalcs;

    private visibleFields: FormField[] = [];

    private sectionsCalcs: FormSection;

    private actionsCalcs: FormActions;

    @Watch('sections')
    onSectionsChanged() {
        this.initSectionsCalcs();
    }

    @Watch('fields')
    onFieldsChanged() {
        this.initFieldsCalcs();
        this.initVisibleFields();
    }

    @Watch('actions')
    onActionsChanged() {
        this.initActionsCalcs();
    }

    componentWillLoad() {
        this.onFieldsChanged();
        this.onSectionsChanged();
        this.onActionsChanged();
    }

    @Event({
        eventName: 'kupFormSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormSubmitted: EventEmitter<FormActionSubmittedDetail>;

    @Event({
        eventName: 'kupFormActionSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormActionSubmitted: EventEmitter<FormActionSubmittedDetail>;

    @Event({
        eventName: 'kupFormFieldFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldFocused: EventEmitter<FormFieldFocusedDetail>;

    @Event({
        eventName: 'kupFormFieldBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldBlurred: EventEmitter<FormFieldBlurredDetail>;

    private getFields(): FormField[] {
        if (this.fields) {
            const keys = Object.keys(this.fields);
            let fields = [];
            keys.forEach((key) => {
                fields.push(this.fields[key]);
            });
            return fields;
        } else {
            return [];
        }
    }

    private hasErrorMessages(): boolean {
        let errorMessages = this.messages.filter(
            (elem) => elem.level == FormMessageLevel.ERROR
        );
        return errorMessages.length == 0;
    }

    private buildFormFieldFocusedDetail(
        event: CustomEvent<KetchupTextInputEvent>,
        field: FormField
    ): FormFieldFocusedDetail {
        let formFieldFocusedDetail = {} as FormFieldFocusedDetail;
        formFieldFocusedDetail.field = {
            key: field.key,
            value: event.detail.value,
        };
        return formFieldFocusedDetail;
    }

    private buildFormFieldBlurredDetail(
        event: CustomEvent<KetchupTextInputEvent>,
        field: FormField
    ): FormFieldBlurredDetail {
        let detail = {} as FormFieldBlurredDetail;
        detail.field = {
            key: field.key,
            value: event.detail.value,
            oldValue: this.fieldsCalcs[field.key].oldValue,
        };
        detail.fields = {};
        this.getFields().forEach((field) => {
            detail.fields[field.key] = {
                key: field.key,
                value: field.value,
                oldValue: this.fieldsCalcs[field.key].oldValue,
            };
        });
        if (this.config.liveValidation) {
            detail.isValid = this.hasErrorMessages();
        }
        return detail;
    }

    private buildFormSubmittedDetail(): FormActionSubmittedDetail {
        let detail = {} as FormActionSubmittedDetail;
        detail.fields = {};
        this.getFields().forEach((field) => {
            detail.fields[field.key] = {
                key: field.key,
                value: field.value,
                oldValue: this.fieldsCalcs[field.key].oldValue,
            };
        });
        detail.isValid = this.hasErrorMessages();
        return detail;
    }

    private buildFormActionSubmittedDetail(
        actionField: FormActionField
    ): FormActionSubmittedDetail {
        let detail = this.buildFormSubmittedDetail();
        detail.action = { key: actionField.key };
        return detail;
    }

    private initVisibleFields(): void {
        this.visibleFields = this.getFields().filter((field) => {
            if (field.hasOwnProperty('hidden')) {
                return !field.hidden;
            }

            return true;
        });
    }

    private initFieldsCalcs(): void {
        console.log('Init fields calc');
        this.fieldsCalcs = {} as FormFieldsCalcs;
        this.getFields().forEach((field) => {
            this.fieldsCalcs[field.key] = {
                oldValue: this.fields[field.key].value,
            };
        });
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

    private validate(): FormMessage[] {
        console.log('Validate');
        let messages = [];
        this.getFields().forEach((field) => {
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

    private onFormSubmit() {
        console.log('On form submit');
        this.messages = this.validate();
        this.kupFormSubmitted.emit(this.buildFormSubmittedDetail());
    }

    private onFormActionSubmit(actionField: FormActionField) {
        console.log('On form action submit');
        this.messages = this.validate();
        this.kupFormActionSubmitted.emit(
            this.buildFormActionSubmittedDetail(actionField)
        );
    }

    private onFieldFocus(
        event: CustomEvent<KetchupTextInputEvent>,
        field: FormField
    ) {
        this.kupFormFieldFocused.emit(
            this.buildFormFieldFocusedDetail(event, field)
        );
    }

    private onFieldBlur(
        event: CustomEvent<KetchupTextInputEvent>,
        field: FormField
    ) {
        console.log('On field blur');

        const { value } = event.detail;
        this.fields[field.key].value = value;

        if (this.config.liveValidation) {
            this.messages = this.validate();
        }

        this.kupFormFieldBlurred.emit(
            this.buildFormFieldBlurredDetail(event, field)
        );
    }

    private onFieldChange(
        event: CustomEvent<KetchupTextInputEvent>,
        field: FormField
    ) {
        const { value } = event.detail;
        this.fields[field.key].value = value;
    }

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
        let fieldStyle = {};

        if (fieldKey) {
            const field = this.fields[fieldKey];

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

                if (
                    (isStringObject(field.obj) && !field.shape) ||
                    field.shape == 'ITX'
                ) {
                    const wrapperStyle = {};
                    wrapperStyle['--kup-text-input_border-color--selected'] =
                        '#66D3FA';

                    fieldContent = (
                        <kup-text-input
                            style={wrapperStyle}
                            input-type="text"
                            initial-value={field.value}
                            onKetchupTextInputUpdated={(e) =>
                                this.onFieldChange(e, field)
                            }
                            onKetchupTextInputFocused={(e) =>
                                this.onFieldFocus(e, field)
                            }
                            onKetchupTextInputBlurred={(e) =>
                                this.onFieldBlur(e, field)
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
        }

        return (
            <div data-field={fieldKey} class="form-field" style={fieldStyle}>
                {fieldLabelContent}
                {fieldContent}
                {fieldMessagesContent}
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
                        actionField.key == 'submit'
                            ? this.onFormSubmit()
                            : this.onFormActionSubmit(actionField)
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
}
