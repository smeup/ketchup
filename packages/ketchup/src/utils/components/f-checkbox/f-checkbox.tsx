import { FunctionalComponent, h } from '@stencil/core';

interface Props {
    checked?: boolean;
    disabled?: boolean;
    events?: boolean;
    indeterminate?: boolean;
    label?: string;
    leadingLabel?: boolean;
    value?: string;
}

export const FCheckbox: FunctionalComponent<Props> = ({
    checked,
    disabled,
    events,
    indeterminate,
    label,
    leadingLabel,
    value,
}) => {
    let formClass: string = 'mdc-form-field';
    let componentClass: string = 'mdc-checkbox';
    let componentLabel: string = label;
    let indeterminateAttr = {};
    let eHandlers;

    if (checked) {
        componentClass += ' mdc-checkbox--checked';
    }

    if (disabled) {
        componentClass += ' mdc-checkbox--disabled';
    }

    if (indeterminate) {
        componentClass += ' mdc-checkbox--indeterminate';
        indeterminateAttr['data-indeterminate'] = 'true';
    }

    if (leadingLabel) {
        formClass += ' mdc-form-field--align-end';
    }

    if (events) {
        eHandlers = {
            onBlur: (e: Event) => {
                console.log(e);
            },
            onChange: (e: Event) => {
                console.log(e);
            },
            onClick: (e: Event) => {
                console.log(e);
            },
            onFocus: (e: Event) => {
                console.log(e);
            },
        };
    }

    return (
        <div class="f-checkbox--wrapper">
            <div class={formClass}>
                <div id="checkbox-wrapper" class={componentClass}>
                    <input
                        type="checkbox"
                        class="mdc-checkbox__native-control"
                        checked={checked}
                        disabled={disabled}
                        {...indeterminateAttr}
                        value={value}
                        {...eHandlers}
                    />
                    <div class="mdc-checkbox__background">
                        <svg
                            class="mdc-checkbox__checkmark"
                            viewBox="0 0 24 24"
                        >
                            <path
                                class="mdc-checkbox__checkmark-path"
                                fill="none"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                        </svg>
                        <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                    {createRippleElement(disabled)}
                </div>
                <label htmlFor="checkbox-wrapper">{componentLabel}</label>
            </div>
        </div>
    );
};

function createRippleElement(disabled: boolean) {
    if (disabled) {
        return undefined;
    }
    return <div class="mdc-checkbox__ripple"></div>;
}
