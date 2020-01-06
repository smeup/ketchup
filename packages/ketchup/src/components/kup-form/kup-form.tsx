import { Component, Prop, h, Watch, Event, EventEmitter } from '@stencil/core';
import { KetchupTextInputEvent } from '../kup-text-input/kup-text-input-declarations';

import isEmpty from 'lodash/isEmpty';

import {
    FormFields,
    FormField,
    FormSection,
    FormSubmittedDetail,
    FormFieldFocusedDetail,
    FormFieldsCalcs,
} from './kup-form-declarations';

import { isStringObject } from '../../utils/object-utils';

@Component({
    tag: 'kup-form',
    styleUrl: 'kup-form.scss',
    shadow: true,
})
export class KupForm {
    @Prop() fields: FormFields;

    @Prop() sections: FormSection;

    private fieldsCalcs: FormFieldsCalcs;

    private visibleFields: FormField[] = [];

    private sectionsCalcs: FormSection;

    @Watch('sections')
    onSectionsChanged() {
        this.initSectionsCalcs();
    }

    @Watch('fields')
    onFieldsChanged() {
        this.initFieldsCalcs();
        this.initVisibleFields();
    }

    componentWillLoad() {
        this.onFieldsChanged();
        this.onSectionsChanged();
    }

    @Event({
        eventName: 'kupFormSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormSubmitted: EventEmitter<FormSubmittedDetail>;

    @Event({
        eventName: 'kupFormFieldFocused',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFormFieldFocused: EventEmitter<FormFieldFocusedDetail>;

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

    private buildFormSubmittedDetail(): FormSubmittedDetail {
        let formSubmittedDetail = {} as FormSubmittedDetail;
        formSubmittedDetail.fields = {};
        this.getFields().forEach((field) => {
            formSubmittedDetail.fields[field.key] = {
                key: field.key,
                value: field.value,
                oldValue: this.fieldsCalcs[field.key].oldValue,
            };
        });
        return formSubmittedDetail;
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
        this.fieldsCalcs = {} as FormFieldsCalcs;
        this.getFields().forEach((field) => {
            this.fieldsCalcs[field.key] = {
                oldValue: this.fields[field.key].value,
            };
        });
    }

    private initSectionsCalcs() {
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

    private onFormSubmit() {
        this.kupFormSubmitted.emit(this.buildFormSubmittedDetail());
    }

    private onFieldFocus(
        event: CustomEvent<KetchupTextInputEvent>,
        fieldKey: string
    ) {
        this.kupFormFieldFocused.emit({
            key: fieldKey,
            value: event.detail.value,
        });
    }

    private onFieldChange(
        event: CustomEvent<KetchupTextInputEvent>,
        keyField: string
    ) {
        const { value } = event.detail;
        this.fields[keyField].value = value;
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
        let fieldLabel = null;
        let fieldContent = null;
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
                                this.onFieldChange(e, field.key)
                            }
                            onKetchupTextInputFocused={(e) =>
                                this.onFieldFocus(e, field.key)
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
                fieldLabel = <label>{field.title}</label>;
            }
        }

        return (
            <div data-field={fieldKey} class="form-field" style={fieldStyle}>
                {fieldLabel}
                {fieldContent}
            </div>
        );
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

        let submitLabel = 'Submit';
        let submit = (
            <kup-button
                label={submitLabel}
                onKupButtonClicked={() => this.onFormSubmit()}
            />
        );

        return (
            <div class="form-component">
                <div class="form-sections-container">
                    <div class="form-sections-wrapper">
                        <div class={sectionsClass}>{sectionsContent}</div>
                    </div>
                </div>
                <div class="form-buttons">{submit}</div>
            </div>
        );
    }
}
