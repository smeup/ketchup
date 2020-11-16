import { Component, Element, Host, h } from '@stencil/core';

import '@vaadin/vaadin-date-picker';
import { DatePickerElement } from '@vaadin/vaadin-date-picker';

@Component({
    tag: 'kup-date-picker-vaadin',
    /* styleUrl: 'kup-date-picker.scss',*/
    shadow: true,
})
export class KupDatePickerVaadin {
    @Element() rootElement: HTMLElement;

    defaultStyling(
        label: string,
        placeholderLabel: string,
        isClearable: boolean
    ) {
        let comp: DatePickerElement = (
            <vaadin-date-picker
                theme="custom-input-field-style"
                label={label}
                placeholder={placeholderLabel}
                clear-button-visible={isClearable ? true : null}
            ></vaadin-date-picker>
        );

        return comp;
    }

    componentWillLoad() {
        //this.addCustomStyleVaadinTagToDocumentBody();
        this.addCustomStyleVaadinTagToShadowRoot();
    }

    prepDatePicker() {
        let widgetEl: HTMLElement = null;
        let placeholderLabel: string = 'placeholder';
        let label: string = 'kup-date-picker-vaadin';
        let isClearable: boolean = true;

        widgetEl = this.defaultStyling(label, placeholderLabel, isClearable);
        widgetEl = this.renderComponent(widgetEl);
        return widgetEl;
    }

    addCustomStyleVaadinTagToDocumentBody() {
        const moduleName = 'custom-input-field-style';
        if (!document.getElementById(moduleName)) {
            document.body.insertBefore(
                this.createDomModule(),
                document.body.firstChild
            );
        }
    }

    addCustomStyleVaadinTagToShadowRoot() {
        this.rootElement.shadowRoot.appendChild(this.createDomModule());
    }

    createDomModule() {
        const moduleName = 'custom-input-field-style';

        const elem = document.createElement('div');
        elem.innerHTML = `<dom-module id="${moduleName}" theme-for="vaadin-text-field">
                                <template>
                                    <style>
                                        :host([theme~="${moduleName}"])
                                        [part="input-field"] { 
                                            border: 1px solid pink;
                                            background-color: white; }
                                    </style>
                                </template>
                            </dom-module>`;
        return elem;
    }

    renderComponent(widgetEl: HTMLElement) {
        return <div id="kup-component">{widgetEl}</div>;
    }

    render() {
        return <Host>{this.prepDatePicker()}</Host>;
    }
}
