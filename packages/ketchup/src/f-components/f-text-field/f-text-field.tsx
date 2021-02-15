import { FunctionalComponent, getAssetPath, h } from '@stencil/core';

interface Props {
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    helper?: string;
    helperWhenFocused?: boolean;
    icon?: string;
    initialValue?: string;
    inputType?: string;
    isClearable?: boolean;
    label?: string;
    leadingLabel?: boolean;
    maxLength?: number;
    outlined?: boolean;
    readOnly?: boolean;
    shaped?: boolean;
    textArea?: boolean;
    trailingIcon?: boolean;
    trailingLabel?: boolean;
    value?: string;
}

export const FTextField: FunctionalComponent<Props> = (props) => {
    return (
        <div
            class={`f-text-field--wrapper ${
                props.fullHeight ? 'full-height' : ''
            } ${props.fullWidth ? 'full-width' : ''} ${
                props.shaped ? 'shaped' : ''
            }`}
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
        </div>
    );
};

function setContent(props: Props) {
    let isOutlined: boolean = props.textArea || props.outlined;
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
        let svg: string = `url('${getAssetPath(
            `./assets/svg/${props.icon}.svg`
        )}') no-repeat center`;
        let iconStyle = {
            mask: svg,
            webkitMask: svg,
        };
        iconEl = (
            <span
                tabindex="0"
                style={iconStyle}
                class="material-icons mdc-text-field__icon icon-container"
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
                    ></textarea>
                </span>
            ) : (
                <input
                    type={props.inputType}
                    class="mdc-text-field__input"
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    placeholder={props.fullWidth ? props.label : undefined}
                    maxlength={props.maxLength}
                    value={props.value}
                ></input>
            )}
            {props.isClearable ? (
                <span
                    tabindex="1"
                    class="material-icons mdc-text-field__icon clear-icon icon-container clear"
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

function setHelper(props: Props) {
    if (props.helper) {
        const classObj: Record<string, boolean> = {
            'mdc-text-field-helper-text': true,
            'mdc-text-field-helper-text--persistent': !props.helperWhenFocused,
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
