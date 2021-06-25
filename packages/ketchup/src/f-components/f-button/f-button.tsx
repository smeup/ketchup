import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FButtonProps, FButtonStyling } from './f-button-declarations';
import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FButton: FunctionalComponent<FButtonProps> = (
    props: FButtonProps
) => {
    if (!props.styling) {
        props.styling = FButtonStyling.RAISED;
    }
    const isIconButton: boolean = !!(
        props.styling.toLowerCase() === FButtonStyling.ICON ||
        (props.styling.toLowerCase() === FButtonStyling.RAISED &&
            props.icon &&
            (props.label === null || props.label === undefined))
    );
    return (
        <div
            class={`f-button--wrapper ${
                props.fullHeight ? 'kup-full-height' : ''
            } ${props.fullWidth ? 'kup-full-width' : ''} ${
                props.large ? 'kup-large' : ''
            } ${props.shaped ? 'kup-shaped' : ''} ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            {isIconButton ? renderIconButton(props) : renderButton(props)}
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
            ? 'var(--kup-disabled-color)'
            : isOutlined || isFlat
            ? 'var(--kup-primary-color)'
            : 'var(--kup-text-on-primary-color)',
        resource: props.icon,
        sizeX: isFloating ? '24px' : '18px',
        sizeY: isFloating ? '24px' : '18px',
        wrapperClass: 'button__icon icon-container material-icons',
    };

    const classObj: Record<string, boolean> = {
        button: true,
        'button--disabled': props.disabled ? true : false,
        'button--floating': isFloating ? true : false,
        'button--outlined': isOutlined ? true : false,
        'button--raised': isRaised ? true : false,
        'button--no-label': !props.label || props.label === ' ' ? true : false,
    };

    return (
        <button type="button" class={classObj} disabled={props.disabled}>
            {props.trailingIcon
                ? [
                      <span class="button__label">{props.label}</span>,
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                  ]
                : [
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                      <span class="button__label">{props.label}</span>,
                  ]}
        </button>
    );
}

function renderIconButton(props: FButtonProps): VNode {
    const propsFImage: FImageProps = {
        color: props.disabled
            ? 'var(--kup-disabled-color)'
            : 'var(--kup-primary-color)',
        sizeX: props.large ? '32px' : '24px',
        sizeY: props.large ? '32px' : '24px',
    };

    const classObj: Record<string, boolean> = {
        'icon-button': true,
        'button--disabled': props.disabled ? true : false,
        'icon-button--on': props.toggable && props.checked ? true : false,
        toggable: props.toggable ? true : false,
    };

    const iconOff: string = props.iconOff
        ? props.iconOff
        : props.icon + '_border';

    return (
        <button
            type="button"
            class={classObj}
            disabled={props.disabled}
            value={props.checked ? 'on' : 'off'}
        >
            <FImage
                {...propsFImage}
                resource={
                    props.toggable && !props.checked ? iconOff : props.icon
                }
                wrapperClass={`icon-button__icon icon-container material-icons`}
            />
            {props.toggable ? (
                <FImage
                    {...propsFImage}
                    resource={props.icon}
                    wrapperClass={`icon-button__icon icon-button__icon--on icon-container material-icons`}
                />
            ) : null}
        </button>
    );
}
