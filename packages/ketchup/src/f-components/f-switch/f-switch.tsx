import type { FSwitchProps } from './f-switch-declarations';
import { FunctionalComponent, h } from '@stencil/core';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FSwitch: FunctionalComponent<FSwitchProps> = (
    props: FSwitchProps
) => {
    const classObj: Record<string, boolean> = {
        'mdc-switch': true,
        'mdc-switch--checked': props.checked,
        'mdc-switch--disabled': props.disabled,
    };

    return (
        <div
            class={`f-switch--wrapper ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
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
