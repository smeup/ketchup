import { FunctionalComponent, h, VNode } from '@stencil/core';
import type { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FButtonProps, FButtonStyling } from './f-button-declarations';
import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FButton: FunctionalComponent<FButtonProps> = (
    props: FButtonProps,
    children: VNode[]
) => {
    if (!props.styling) {
        props.styling = FButtonStyling.RAISED;
    }
    if (!props.label && !props.icon) {
        return;
    }
    const isIconButton: boolean = !!(
        props.styling.toLowerCase() === FButtonStyling.ICON ||
        (props.styling.toLowerCase() === FButtonStyling.RAISED &&
            props.icon &&
            (props.label === null || props.label === undefined))
    );
    return (
        <div
            class={`f-button ${props.danger ? 'kup-danger' : ''} ${
                props.fullHeight ? 'kup-full-height' : ''
            } ${props.fullWidth ? 'kup-full-width' : ''} ${
                props.info ? 'kup-info' : ''
            } ${props.large ? 'kup-large' : ''} ${
                props.pulsating ? 'kup-pulsating' : ''
            }  ${props.shaped ? 'kup-shaped' : ''} ${
                props.secondary ? 'kup-secondary' : ''
            } ${props.slim ? 'kup-slim' : ''} ${
                props.success ? 'kup-success' : ''
            } ${props.warning ? 'kup-warning' : ''} ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            {isIconButton ? renderIconButton(props) : renderButton(props)}
            {children}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function renderButton(props: FButtonProps): VNode {
    const isFlat: boolean = props.styling.toLowerCase() === FButtonStyling.FLAT;
    const isFloating: boolean =
        props.styling.toLowerCase() === FButtonStyling.FLOATING;
    const isIcon: boolean = props.styling.toLowerCase() === FButtonStyling.ICON;
    const isOutlined: boolean =
        props.styling.toLowerCase() === FButtonStyling.OUTLINED;
    const isRaised: boolean =
        !isFlat && !isFloating && !isOutlined && !isIcon ? true : false;

    const propsFImage: FImageProps = {
        color: props.disabled
            ? `var(--kup_button_disabled_color)`
            : isOutlined || isFlat
            ? `var(--kup_button_primary_color)`
            : `var(--kup_button_text_on_primary_color)`,
        resource: props.icon,
        sizeX: isFloating ? '1.75em' : '1.475em',
        sizeY: isFloating ? '1.75em' : '1.475em',
        wrapperClass: 'button__icon kup-icon',
    };
    if (props.showSpinner) propsFImage.wrapperClass += ' content--hidden';

    const classObj: Record<string, boolean> = {
        button: true,
        'button--disabled': props.disabled ? true : false,
        'button--floating': isFloating ? true : false,
        'button--outlined': isOutlined ? true : false,
        'button--raised': isRaised ? true : false,
        'button--no-label': !props.label || props.label === ' ' ? true : false,
        'button--with-spinner':
            props.showSpinner && !props.disabled ? true : false,
    };

    const classLabelObj: Record<string, boolean> = {
        button__label: true,
        'content--hidden': props.showSpinner && !props.disabled ? true : false,
    };

    const styleSpinnerContainer: Record<string, string> = {
        '--kup_button_spinner_height': propsFImage.sizeY,
    };

    return (
        <button
            type={props.buttonType ? props.buttonType : 'button'}
            class={classObj}
            disabled={props.disabled}
            onBlur={props.onBlur}
            onClick={props.onClick}
            onFocus={props.onFocus}
            style={styleSpinnerContainer}
            aria-label={props.title}
        >
            {props.trailingIcon
                ? [
                      <span class={classLabelObj}>{props.label}</span>,
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                  ]
                : [
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                      <span class={classLabelObj}>{props.label}</span>,
                  ]}
            {props.showSpinner && !props.disabled ? (
                <div class="button__spinner-container">
                    <slot name="spinner"></slot>
                </div>
            ) : undefined}
        </button>
    );
}

function renderIconButton(props: FButtonProps): VNode {
    const propsFImage: FImageProps = {
        color: props.disabled
            ? `var(--kup_button_disabled_color)`
            : `var(--kup_button_primary_color)`,
        sizeX: props.large ? 'calc(1.75em * 1.5)' : '1.75em',
        sizeY: props.large ? 'calc(1.75em * 1.5)' : '1.75em',
    };

    const classObj: Record<string, boolean> = {
        'icon-button': true,
        'button--disabled': props.disabled ? true : false,
        'icon-button--on': props.toggable && props.checked ? true : false,
        toggable: props.toggable ? true : false,
        'button--with-spinner':
            props.showSpinner && !props.disabled ? true : false,
    };

    const styleSpinnerContainer: Record<string, string> = {
        '--kup_button_spinner_height': propsFImage.sizeY,
        '--kup_button_spinner_width': propsFImage.sizeX,
    };

    const iconOff: string = props.iconOff
        ? props.iconOff
        : props.icon + '_border';

    return (
        <button
            type={props.buttonType ? props.buttonType : 'button'}
            class={classObj}
            disabled={props.disabled}
            onClick={props.onClick}
            style={styleSpinnerContainer}
            value={props.checked ? 'on' : 'off'}
            aria-label={props.title}
        >
            {!props.showSpinner || props.disabled ? (
                <FImage
                    {...propsFImage}
                    resource={
                        props.toggable && !props.checked ? iconOff : props.icon
                    }
                    wrapperClass={`icon-button__icon kup-icon`}
                />
            ) : null}
            {props.toggable && !props.showSpinner ? (
                <FImage
                    {...propsFImage}
                    resource={props.icon}
                    wrapperClass={`icon-button__icon icon-button__icon--on kup-icon`}
                />
            ) : null}
            {props.showSpinner && !props.disabled ? (
                <div class="icon-button__spinner-container">
                    <slot name="spinner"></slot>
                </div>
            ) : undefined}
        </button>
    );
}
