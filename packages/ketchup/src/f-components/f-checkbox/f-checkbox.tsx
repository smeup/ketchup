import { FunctionalComponent, h } from '@stencil/core';
import { FCheckboxProps } from './f-checkbox-declarations';

//---- Component ----

export const FCheckbox: FunctionalComponent<FCheckboxProps> = (
    props: FCheckboxProps
) => {
    const indeterminateAttr = {
        'data-indeterminate': props.indeterminate ? true : false,
    };

    const classObj: Record<string, boolean> = {
        'mdc-checkbox': true,
        'mdc-checkbox--checked':
            props.checked && !props.indeterminate ? true : false,
        'mdc-checkbox--disabled': props.disabled ? true : false,
        'mdc-checkbox--indeterminate': props.indeterminate ? true : false,
    };

    return (
        <div
            class={`f-checkbox--wrapper ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            <div
                class={`mdc-form-field ${
                    props.leadingLabel ? 'mdc-form-field--align-end' : ''
                }`}
            >
                <div class={classObj}>
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
