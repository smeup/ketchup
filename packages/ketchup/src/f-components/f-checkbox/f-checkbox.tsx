import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';
import type { FCheckboxProps } from './f-checkbox-declarations';
import { FunctionalComponent, h } from '@stencil/core';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FCheckbox: FunctionalComponent<FCheckboxProps> = (
    props: FCheckboxProps
) => {
    const indeterminateAttr = {
        'data-indeterminate': props.indeterminate ? true : false,
    };

    const classObj: Record<string, boolean> = {
        checkbox: true,
        'checkbox--checked':
            props.checked && !props.indeterminate ? true : false,
        'checkbox--disabled': props.disabled ? true : false,
        'checkbox--indeterminate': props.indeterminate ? true : false,
        'checkbox--legacy-look': props.legacyLook ? true : false,
    };

    const propsFImage: FImageProps = {
        color: props.error
            ? `var(--kup_danger_icon_color)`
            : `var(--kup_warning_icon_color)`,
        resource: props.error ? 'error' : 'warning',
        sizeX: '1.15em',
        sizeY: '1.15em',
        wrapperClass: 'kup-icon',
    };

    return (
        <div
            class={`f-checkbox ${props.danger ? 'kup-danger' : ''} ${
                props.error ? 'checkbox--error' : ''
            } ${props.info ? 'kup-info' : ''} ${
                props.secondary ? 'kup-secondary' : ''
            } ${props.success ? 'kup-success' : ''} ${
                props.warning ? 'kup-warning' : ''
            } ${props.wrapperClass ? props.wrapperClass : ''}`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            <div
                class={`form-field ${
                    props.leadingLabel ? 'form-field--align-end' : ''
                }`}
            >
                <div class={classObj}>
                    <input
                        type="checkbox"
                        class="checkbox__native-control"
                        checked={props.checked}
                        disabled={props.disabled}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        {...indeterminateAttr}
                        value={props.checked ? 'on' : 'off'}
                    />
                    <div class="checkbox__background" onClick={props.onChange}>
                        <svg class="checkbox__checkmark" viewBox="0 0 24 24">
                            <path
                                class="checkbox__checkmark-path"
                                fill="none"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                        </svg>
                        <div class="checkbox__mixedmark"></div>
                    </div>
                </div>
                {props.label ? (
                    <label htmlFor={props.id} onClick={props.onChange}>
                        {props.label}
                    </label>
                ) : undefined}
            </div>

            {props.error ? (
                <div class="checkbox__error-message">
                    <FImage {...propsFImage} />
                    {props.error}
                </div>
            ) : props.alert ? (
                <div class="checkbox__alert-message">
                    <FImage {...propsFImage} />
                    {props.alert}
                </div>
            ) : undefined}
        </div>
    );
};
