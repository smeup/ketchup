import { FunctionalComponent, h } from '@stencil/core';

interface Props {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    leadingLabel?: boolean;
}

export const FSwitch: FunctionalComponent<Props> = (props) => {
    const classObj: Record<string, boolean> = {
        'mdc-switch': true,
        'mdc-switch--checked': props.checked,
        'mdc-switch--disabled': props.disabled,
    };

    return (
        <div class="f-switch--wrapper">
            <div
                class={`mdc-form-field ${
                    props.leadingLabel ? 'mdc-form-field--align-end' : ''
                }`}
            >
                <div class={classObj}>
                    <div class="mdc-switch__track"></div>
                    <div class="mdc-switch__thumb-underlay">
                        <div class="mdc-switch__thumb">
                            <input
                                type="checkbox"
                                class="mdc-switch__native-control"
                                role="switch"
                                checked={props.checked}
                                disabled={props.disabled}
                                value={props.checked ? 'on' : 'off'}
                            ></input>
                        </div>
                    </div>
                </div>
                <label>{props.label}</label>
            </div>
        </div>
    );
};
