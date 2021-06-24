import { FunctionalComponent, h } from '@stencil/core';
import { FButtonProps, FButtonStyling } from './f-button-declarations';
import { FImage } from '../f-image/f-image';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FButton: FunctionalComponent<FButtonProps> = (
    props: FButtonProps
) => {
    if (!props.styling) {
        props.styling = FButtonStyling.RAISED;
    }
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
            {props.label ? renderButton(props) : renderIconButton(props)}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function renderButton(props: FButtonProps): HTMLButtonElement {
    const isFlat = props.styling.toLowerCase() === FButtonStyling.FLAT;
    const isOutlined = props.styling.toLowerCase() === FButtonStyling.OUTLINED;

    const propsFImage = {
        color: props.disabled
            ? 'var(--kup-disabled-color)'
            : isOutlined || isFlat
            ? 'var(--kup-primary-color)'
            : 'var(--kup-text-on-primary-color)',
        resource: props.icon,
        sizeX: '18px',
        sizeY: '18px',
        wrapperClass: 'button__icon icon-container material-icons',
    };
    const classObj: Record<string, boolean> = {
        button: true,
        'button--disabled': props.disabled ? true : false,
        'button--outlined': isOutlined ? true : false,
        'button--raised': !isFlat && !isOutlined ? true : false,
        'button--no-label': props.label === ' ' ? true : false,
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

function renderIconButton(props: FButtonProps): HTMLButtonElement {
    const propsFImage = {
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

    let iconOff = props.iconOff ? props.iconOff : props.icon + '_border';

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
