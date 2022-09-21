import type { FTextFieldProps } from './f-text-field-declarations';
import { FunctionalComponent, getAssetPath, h, VNode } from '@stencil/core';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FTextField: FunctionalComponent<FTextFieldProps> = (
    props: FTextFieldProps,
    children: VNode[]
) => {
    return (
        <div
            class={`f-text-field ${props.danger ? 'kup-danger' : ''} ${
                props.fullHeight ? 'kup-full-height' : ''
            } ${props.fullWidth ? 'kup-full-width' : ''}  ${
                props.info ? 'kup-info' : ''
            } ${props.secondary ? 'kup-secondary' : ''} ${
                props.shaped ? 'kup-shaped' : ''
            } ${props.success ? 'kup-success' : ''} ${
                props.warning ? 'kup-warning' : ''
            }  ${props.wrapperClass ? props.wrapperClass : ''}`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            {props.leadingLabel || props.trailingLabel ? (
                <div
                    class={`mdc-form-field ${
                        props.leadingLabel ? 'mdc-form-field--align-end' : ''
                    }`}
                >
                    {[
                        setContent(props),
                        setHelper(props),
                        <label>{props.label}</label>,
                    ]}
                </div>
            ) : (
                [setContent(props), setHelper(props)]
            )}
            {children}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function setContent(props: FTextFieldProps): HTMLDivElement {
    const isOutlined: boolean = props.textArea || props.outlined;
    let labelEl: HTMLElement;
    let iconEl: HTMLElement;

    if (props.label && !props.leadingLabel && !props.trailingLabel) {
        labelEl = (
            <label class="mdc-floating-label" htmlFor="kup-input">
                {props.label}
            </label>
        );
    }

    if (props.icon) {
        let iconStyle: {
            [key: string]: string;
        };
        let iconClass: string = '';
        if (
            Object.values(KupThemeIconValues).indexOf(
                props.icon as KupThemeIconValues
            ) > -1
        ) {
            iconClass = props.icon.replace('--', '');
        } else {
            let svg: string = `url('${getAssetPath(
                `./assets/svg/${props.icon}.svg`
            )}') no-repeat center`;
            iconStyle = {
                mask: svg,
                webkitMask: svg,
            };
        }
        iconEl = (
            <span
                style={iconStyle}
                onClick={props.onIconClick}
                class={`mdc-text-field__icon kup-icon action ${iconClass}`}
            ></span>
        );
    }

    const classObj: Record<string, boolean> = {
        'is-clearable': props.isClearable,
        'mdc-text-field': true,
        'mdc-text-field--disabled': props.disabled,
        'mdc-text-field--filled': !props.fullWidth && !isOutlined,
        'mdc-text-field--no-label': !props.label,
        'mdc-text-field--fullwidth': props.fullWidth,
        'mdc-text-field--outlined': isOutlined,
        'mdc-text-field--textarea': props.textArea,
        'mdc-text-field--with-leading-icon': props.icon && !props.trailingIcon,
        'mdc-text-field--with-trailing-icon': props.icon && props.trailingIcon,
    };

    return (
        <div class={classObj}>
            {props.textArea && props.maxLength ? (
                <div class="mdc-text-field-character-counter">
                    '0 / ' + {props.maxLength}
                </div>
            ) : undefined}
            {!props.trailingIcon ? iconEl : undefined}
            {props.textArea ? (
                <span class="mdc-text-field__resizer">
                    <textarea
                        class="mdc-text-field__input"
                        disabled={props.disabled}
                        readOnly={props.readOnly}
                        maxlength={props.maxLength}
                        value={props.value}
                        onBlur={props.onBlur}
                        onClick={props.onClick}
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        onInput={props.onInput}
                        onKeyDown={props.onKeyDown}
                    ></textarea>
                </span>
            ) : (
                <input
                    inputmode={props.inputMode ? props.inputMode : undefined}
                    type={props.inputType ? props.inputType : 'text'}
                    step={props.step}
                    min={props.min}
                    max={props.max}
                    name={props.name}
                    class="mdc-text-field__input"
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    placeholder={
                        props.fullWidth && !props.outlined
                            ? props.label
                            : undefined
                    }
                    maxlength={props.maxLength}
                    value={props.value}
                    onBlur={props.onBlur}
                    onChange={(e: InputEvent) => {
                        if (
                            props.decimals !== null &&
                            props.inputType === 'number'
                        ) {
                            (e.target as HTMLInputElement).value = parseFloat(
                                (e.target as HTMLInputElement).value
                            ).toFixed(props.decimals);
                        }
                        if (props.onChange) {
                            props.onChange(e);
                        }
                    }}
                    onClick={props.onClick}
                    onFocus={props.onFocus}
                    onInput={props.onInput}
                    onKeyDown={props.onKeyDown}
                ></input>
            )}
            {props.isClearable ? (
                <span
                    class={`mdc-text-field__icon kup-icon ${KupThemeIconValues.CLEAR.replace(
                        '--',
                        ''
                    )}`}
                    onClick={props.onClearIconClick}
                ></span>
            ) : undefined}
            {props.trailingIcon ? iconEl : undefined}
            {!props.fullWidth && !isOutlined ? labelEl : undefined}
            {isOutlined ? (
                <div class="mdc-notched-outline">
                    <div class="mdc-notched-outline__leading"></div>
                    <div class="mdc-notched-outline__notch">{labelEl}</div>
                    <div class="mdc-notched-outline__trailing"></div>
                </div>
            ) : (
                <span class="mdc-line-ripple"></span>
            )}
        </div>
    );
}

function setHelper(props: FTextFieldProps): HTMLDivElement {
    if (props.helperEnabled !== false) {
        if (props.helper) {
            const classObj: Record<string, boolean> = {
                'mdc-text-field-helper-text': true,
                'mdc-text-field-helper-text--persistent':
                    !props.helperWhenFocused,
            };
            return (
                <div class="mdc-text-field-helper-line">
                    <div class={classObj}>{props.helper}</div>
                    {props.maxLength && !props.textArea ? (
                        <div class="mdc-text-field-character-counter">
                            '0 / ' + {props.maxLength.toString()}
                        </div>
                    ) : undefined}
                </div>
            );
        } else {
            if (props.maxLength && !props.textArea) {
                return (
                    <div class="mdc-text-field-helper-line">
                        <div class="mdc-text-field-character-counter">
                            '0 / ' + {props.maxLength}
                        </div>
                    </div>
                );
            }
        }
    }
}
