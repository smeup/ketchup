import { FunctionalComponent, h } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';
import { FImage } from '../f-image/f-image';

//---- Declarations ----

export interface FButtonProps {
    checked?: boolean;
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    icon?: string;
    iconOff?: string;
    label?: string;
    shaped?: boolean;
    styling?: string;
    toggable?: boolean;
    trailingIcon?: boolean;
}

//---- Material Design ----

export function FButtonMDC(el: HTMLElement): void {
    const button = el.querySelector('button');
    const ripple = MDCRipple.attachTo(button);
    if (button.classList.contains('mdc-icon-button')) {
        ripple.unbounded = true;
        if (button.classList.contains('toggable')) {
            new MDCIconButtonToggle(button);
        }
    }
}

//---- Component ----

export const FButton: FunctionalComponent<FButtonProps> = (
    props: FButtonProps
) => {
    return (
        <div
            class={`f-button--wrapper ${
                props.fullHeight ? 'full-height' : ''
            } ${props.fullWidth ? 'full-width' : ''} ${
                props.shaped ? 'shaped' : ''
            }`}
        >
            {props.label ? renderButton(props) : renderIconButton(props)}
        </div>
    );
};

//---- Private methods ----

function renderButton(props: FButtonProps): HTMLButtonElement {
    const propsFImage = {
        color: props.disabled
            ? 'var(--kup-disabled-color)'
            : props.styling.toLowerCase() === 'outlined' ||
              props.styling.toLowerCase() === 'flat'
            ? 'var(--kup-primary-color)'
            : 'var(--kup-text-on-primary-color)',
        resource: props.icon,
        sizeX: '18px',
        sizeY: '18px',
        wrapperClass: 'mdc-button__icon icon-container material-icons',
    };
    const classObj: Record<string, boolean> = {
        'mdc-button': true,
        'mdc-button--disabled': props.disabled ? true : false,
        'mdc-button--outlined':
            props.styling.toLowerCase() === 'outlined' ? true : false,
        'mdc-button--raised':
            props.styling.toLowerCase() !== 'flat' &&
            props.styling.toLowerCase() !== 'outlined'
                ? true
                : false,
    };

    return (
        <button type="button" class={classObj} disabled={props.disabled}>
            {!props.disabled ? (
                <div class="mdc-button__ripple"></div>
            ) : undefined}
            {props.trailingIcon
                ? [
                      <span class="mdc-button__label">{props.label}</span>,
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                  ]
                : [
                      props.icon ? <FImage {...propsFImage} /> : undefined,
                      <span class="mdc-button__label">{props.label}</span>,
                  ]}
        </button>
    );
}

function renderIconButton(props: FButtonProps): HTMLButtonElement {
    const propsFImage = {
        color: props.disabled
            ? 'var(--kup-disabled-color)'
            : 'var(--kup-primary-color)',
        sizeX: '24px',
        sizeY: '24px',
    };

    const classObj: Record<string, boolean> = {
        'mdc-icon-button': true,
        'mdc-button--disabled': props.disabled ? true : false,
        'mdc-icon-button--on': props.toggable && props.checked ? true : false,
        toggable: props.toggable ? true : false,
    };

    let iconOff = props.iconOff ? props.iconOff : props.icon + '_border';

    return (
        <button
            type="button"
            class={classObj}
            // @ts-ignore
            checked={props.checked}
            disabled={props.disabled}
            value={props.checked ? 'on' : 'off'}
        >
            <FImage
                {...propsFImage}
                resource={
                    props.toggable && !props.checked ? iconOff : props.icon
                }
                wrapperClass={`mdc-icon-button__icon icon-container material-icons`}
            />
            {props.toggable ? (
                <FImage
                    {...propsFImage}
                    resource={props.icon}
                    wrapperClass={`mdc-icon-button__icon mdc-icon-button__icon--on icon-container material-icons`}
                />
            ) : undefined}
        </button>
    );
}
