import { type FTextFieldProps } from './f-text-field-declarations';
import { FunctionalComponent, getAssetPath, h, VNode } from '@stencil/core';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { NumericFieldFormatOptions } from '../../managers/kup-math/kup-math-declarations';
import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FTextField: FunctionalComponent<FTextFieldProps> = (
    props: FTextFieldProps,
    children: VNode[]
) => {
    const classObj: Record<string, boolean> = {
        'f-text-field': true,
        'kup-danger': props.danger,
        'kup-full-height': props.fullHeight,
        'kup-full-width': props.fullWidth,
        'kup-info': props.info,
        'kup-light-mode': props.lightMode,
        'kup-secondary': props.secondary,
        'kup-shaped': props.shaped,
        'kup-success': props.success,
        'kup-warning': props.warning,
        [props.wrapperClass]: !!props.wrapperClass,
    };
    return (
        <div
            class={classObj}
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
    let minusEl: HTMLElement;
    let plusEl: HTMLElement;

    if (props.inputType === 'number') {
        props.maxLength += getNonNumericValuesLength(props.value);
        props.size += getNonNumericValuesLength(props.value);
    }

    if (props.maxLength >= 256) {
        props.textArea = true;
    }

    if (props.label && !props.leadingLabel && !props.trailingLabel) {
        labelEl = (
            <div class="mdc-text-field__label-container">
                <label class="mdc-label" htmlFor="kup-input">
                    {props.label}
                </label>
                {props.maxLength && props.showCounter ? (
                    <div class="mdc-text-field__label-character-counter">
                        {props.value.length} / {props.maxLength}
                    </div>
                ) : undefined}
            </div>
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

    if (props.quantityButtons) {
        const minusSvg: string = `url('${getAssetPath(
            `./assets/svg/minus.svg`
        )}') no-repeat center`;
        const plusSvg: string = `url('${getAssetPath(
            `./assets/svg/plus.svg`
        )}') no-repeat center`;

        const minusStyle = {
            mask: minusSvg,
            webkitMask: minusSvg,
        };
        const plusStyle = {
            mask: plusSvg,
            webkitMask: plusSvg,
        };

        minusEl = (
            <span
                style={minusStyle}
                class={`mdc-text-field__icon kup-icon action`}
            ></span>
        );
        plusEl = (
            <span
                style={plusStyle}
                class={`mdc-text-field__icon kup-icon action`}
            ></span>
        );
    }

    const propsFImage: FImageProps = {
        color: props.error
            ? `var(--kup-danger-color-60)`
            : `var(--kup-warning-color-50)`,
        resource: props.error ? 'error' : 'warning',
        sizeX: '1.25em',
        sizeY: '1.25em',
        wrapperClass: 'kup-icon',
    };

    const classContainerObj: Record<string, boolean> = {
        'mdc-text-field-container': true,
        'mdc-text-field-container--disabled': props.disabled,
    };

    const classObj: Record<string, boolean> = {
        'is-clearable': props.isClearable,
        'mdc-text-field': true,
        'mdc-text-field--disabled': props.disabled,
        'mdc-text-field--read-only': props.readOnly,
        'mdc-text-field--read-only-is-select': props.isSelect,
        'mdc-text-field--filled': !props.fullWidth && !isOutlined,
        'mdc-text-field--no-label': !props.label,
        'mdc-text-field--fullwidth': props.fullWidth,
        'mdc-text-field--lightmode': props.lightMode,
        'mdc-text-field--outlined': isOutlined,
        'mdc-text-field--textarea': props.textArea,
        'mdc-text-field--with-leading-icon': props.icon && !props.trailingIcon,
        'mdc-text-field--with-trailing-icon': props.icon && props.trailingIcon,
        'mdc-text-field--with-quantity-buttons': props.quantityButtons,
        'mdc-text-field--error': Boolean(props.error),
        'mdc-text-field--alert': Boolean(props.alert),
        'mdc-text-field--legacy-look mdc-text-field--extra-small':
            props.legacyLook,
        [`mdc-text-field--${props.sizing || 'small'}`]:
            !props.textArea && !props.legacyLook,
        'top-right-indicator': props.showMarker,
    };

    let value = props.value;
    let inputType = props.quantityButtons
        ? 'number'
        : props.inputType ?? 'text';
    let persManageForNumberFormat = false;
    if (
        props.inputType === 'number' &&
        ((props.decimals && props.decimals > 0) || props.group)
    ) {
        inputType = 'text';
        persManageForNumberFormat = true;
    }

    return (
        <div class={classContainerObj}>
            {!props.fullWidth ? labelEl : undefined}
            <div class={classObj}>
                {!props.trailingIcon ? iconEl : undefined}
                {props.textArea ? (
                    <span class="mdc-text-field__resizer">
                        <textarea
                            class="mdc-text-field__input"
                            disabled={props.disabled}
                            maxlength={props.maxLength}
                            value={value}
                            autoComplete={props.autocomplete ?? 'off'}
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
                        inputmode={
                            props.inputMode ? props.inputMode : undefined
                        }
                        type={inputType}
                        step={props.step}
                        min={props.min}
                        max={props.max}
                        name={props.name}
                        class="mdc-text-field__input"
                        disabled={props.disabled}
                        placeholder={props.placeholder}
                        maxlength={props.maxLength}
                        size={props.size}
                        value={value}
                        readOnly={props.isSelect}
                        autoComplete={props.autocomplete ?? 'off'}
                        onBlur={(e: FocusEvent) => {
                            if (persManageForNumberFormat) {
                                const options: NumericFieldFormatOptions = {
                                    allowNegative: props.allowNegative ?? true,
                                    decimal: props.decimals,
                                    group: props.group,
                                    integer: getTotalIntegers(
                                        props.integers,
                                        props.decimals
                                    ),
                                };

                                const valueFromTarget =
                                    e.target as HTMLInputElement;

                                let formattedValue = formatValue(
                                    valueFromTarget.value,
                                    options,
                                    true
                                );
                                formattedValue = Number(
                                    formattedValue
                                ).toLocaleString('en-US', {
                                    minimumFractionDigits: options.decimal,
                                });

                                valueFromTarget.value = formattedValue;
                                props.value = formattedValue;
                            }
                            if (props.onBlur) {
                                props.onBlur(e);
                            }
                        }}
                        onChange={(e: InputEvent) => {
                            if (persManageForNumberFormat) {
                                const options: NumericFieldFormatOptions = {
                                    allowNegative: props.allowNegative ?? true,
                                    decimal: props.decimals,
                                    group: props.group,
                                    integer: getTotalIntegers(
                                        props.integers,
                                        props.decimals
                                    ),
                                };
                                if (
                                    props.min !== undefined &&
                                    props.min !== null &&
                                    props.min >
                                        parseFloat(
                                            (e.target as HTMLInputElement).value
                                        )
                                ) {
                                    (e.target as HTMLInputElement).value =
                                        formatValue(
                                            props.min.toString(),
                                            options,
                                            true
                                        );
                                } else if (
                                    props.max !== undefined &&
                                    props.max !== null &&
                                    props.max <
                                        parseFloat(
                                            (e.target as HTMLInputElement).value
                                        )
                                ) {
                                    (e.target as HTMLInputElement).value =
                                        formatValue(
                                            props.max.toString(),
                                            options,
                                            true
                                        );
                                } else {
                                    (e.target as HTMLInputElement).value =
                                        formatValue(
                                            (e.target as HTMLInputElement)
                                                .value,
                                            options,
                                            true
                                        );
                                }
                            } else {
                                if (
                                    props.min !== undefined &&
                                    props.min !== null &&
                                    props.min >
                                        parseFloat(
                                            (e.target as HTMLInputElement).value
                                        )
                                ) {
                                    (e.target as HTMLInputElement).value =
                                        props.min.toString();
                                } else if (
                                    props.max !== undefined &&
                                    props.max !== null &&
                                    props.max <
                                        parseFloat(
                                            (e.target as HTMLInputElement).value
                                        )
                                ) {
                                    (e.target as HTMLInputElement).value =
                                        props.max.toString();
                                }
                            }
                            if (props.onChange) {
                                props.onChange(e);
                            }
                        }}
                        onClick={props.onClick}
                        onFocus={props.onFocus}
                        onInput={props.onInput}
                        onKeyDown={props.onKeyDown}
                        onKeyPress={(e: KeyboardEvent) => {
                            if (
                                !persManageForNumberFormat ||
                                e.ctrlKey ||
                                e.key.length > 1
                            ) {
                                return;
                            }
                            const options: NumericFieldFormatOptions = {
                                allowNegative: props.allowNegative ?? true,
                                decimal: props.decimals,
                                group: props.group,
                                integer: getTotalIntegers(
                                    props.integers,
                                    props.decimals
                                ),
                            };

                            const component = e.target as HTMLInputElement;
                            const valueFromTarget = component.value;
                            const beginVal = valueFromTarget.substring(
                                0,
                                component.selectionStart
                            );
                            const endVal = valueFromTarget.substring(
                                component.selectionEnd,
                                component.selectionEnd +
                                    valueFromTarget.length -
                                    1
                            );
                            const val = beginVal + e.key + endVal;

                            if (
                                !dom.ketchup.math.matchNumericValueWithOptions(
                                    val,
                                    options
                                )
                            ) {
                                e.preventDefault();
                                return;
                            }
                        }}
                    ></input>
                )}

                {props.trailingIcon ? iconEl : undefined}

                {/* {isOutlined ? (
                    <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__trailing"></div>
                    </div>
                ) : (
                    <span class="mdc-line-ripple"></span>
                )} */}

                {props.helperIcon && props.error ? (
                    <div class="mdc-error-icon">
                        <FImage {...propsFImage} />
                    </div>
                ) : props.helperIcon && props.alert ? (
                    <div class="mdc-alert-icon">
                        <FImage {...propsFImage} />
                    </div>
                ) : undefined}

                {props.quantityButtons && (
                    <div class="mdc-quantity-buttons">
                        <button onClick={props.onMinusClick}>{minusEl}</button>
                        <button onClick={props.onPlusClick}>{plusEl}</button>
                    </div>
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
            </div>
        </div>
    );
}

function setHelper(props: FTextFieldProps): HTMLDivElement {
    if (props.helperEnabled !== false && (props.error || props.alert)) {
        if (props.helper) {
            const classObj: Record<string, boolean> = {
                'mdc-text-field-helper-text': true,
                'mdc-text-field-helper-text--persistent':
                    !props.helperWhenFocused,
            };
            return (
                <div class="mdc-text-field-helper-line">
                    <div class={classObj}>{props.helper}</div>
                </div>
            );
        }

        return (
            <div class="mdc-text-field-helper-line">
                {props.error ? (
                    <span class="mdc-error-message">{props.error}</span>
                ) : props.alert ? (
                    <span class="mdc-alert-message">{props.alert}</span>
                ) : undefined}
            </div>
        );
    }
}

function getNonNumericValuesLength(value: string) {
    const matchCharacters = value.match(/[^0-9]/g);
    return matchCharacters ? matchCharacters.length : 0;
}

const getTotalIntegers = (
    integers: number = 0,
    decimals: number = 0
): number => {
    return integers > decimals ? integers - decimals : integers;
};

const formatValue = (
    value: string,
    options: NumericFieldFormatOptions,
    inputIsLocalized: boolean
): string => {
    const formatedValue = Number(value).toLocaleString('en-US', {
        minimumFractionDigits: options.decimal,
    });
    if (!formatedValue) {
        return formatedValue;
    }

    if (formatedValue == '-') {
        return '';
    }

    return dom.ketchup.math.format(
        formatedValue,
        dom.ketchup.math.createFormatPattern(options.group, options.decimal),
        inputIsLocalized
    );
};
