import { FunctionalComponent, h } from '@stencil/core';

interface Props {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: string;
    leadingLabel?: boolean;
}

export const FCheckbox: FunctionalComponent<Props> = (props) => {
    const indeterminateAttr = {
        'data-indeterminate': props.indeterminate ? true : false,
    };

    const classObj: Record<string, boolean> = {
        'mdc-checkbox': true,
        'mdc-checkbox--checked': props.checked,
        'mdc-checkbox--disabled': props.disabled,
        'mdc-checkbox--indeterminate': props.indeterminate,
    };

    return (
        <div class="f-checkbox--wrapper">
            <div
                class={`mdc-form-field ${
                    props.leadingLabel ? 'mdc-form-field--align-end' : ''
                }`}
            >
                <div id="checkbox-wrapper" class={classObj}>
                    <input
                        type="checkbox"
                        class="mdc-checkbox__native-control"
                        checked={props.checked}
                        disabled={props.disabled}
                        {...indeterminateAttr}
                        value={props.checked ? 'on' : 'off'}
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
                    {!props.disabled ? (
                        <div class="mdc-checkbox__ripple"></div>
                    ) : undefined}
                </div>
                {props.label ? <label>{props.label}</label> : undefined}
            </div>
        </div>
    );
};
