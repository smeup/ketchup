import { FunctionalComponent, h } from '@stencil/core';
import { FImage } from '../f-image/f-image';
import { FButtonProps } from './f-button-declarations';

export const FButton: FunctionalComponent<FButtonProps> = (props) => {
    return (
        <div class="f-button--wrapper">
            {props.label ? renderButton(props) : renderIconButton()}
        </div>
    );
};

function renderButton(props: FButtonProps): HTMLElement {
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
        'mdc-button--disabled': props.disabled,
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

function renderIconButton() {}
