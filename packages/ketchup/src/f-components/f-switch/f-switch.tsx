import { FunctionalComponent, h } from '@stencil/core';

interface Props {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    leadingLabel?: boolean;
}

export const FSwitch: FunctionalComponent<Props> = ({
    checked,
    disabled,
    label,
    leadingLabel,
}) => {
    let formClass: string = 'mdc-form-field';
    let componentClass: string = 'mdc-switch';
    let componentLabel: string = label;

    if (disabled) {
        componentClass += ' mdc-switch--disabled';
    }

    if (checked) {
        componentClass += ' mdc-switch--checked';
    }

    if (leadingLabel) {
        formClass += ' mdc-form-field--align-end';
    }

    return (
        <div class="f-switch--wrapper">
            <div class={formClass}>
                <div class={componentClass}>
                    <div class="mdc-switch__track"></div>
                    <div class="mdc-switch__thumb-underlay">
                        <div class="mdc-switch__thumb">
                            <input
                                type="checkbox"
                                id="switch-id"
                                class="mdc-switch__native-control"
                                role="switch"
                                checked={checked}
                                disabled={disabled}
                                value={checked ? 'on' : 'off'}
                            ></input>
                        </div>
                    </div>
                </div>
                <label htmlFor="switch-id">{componentLabel}</label>
            </div>
        </div>
    );
};
