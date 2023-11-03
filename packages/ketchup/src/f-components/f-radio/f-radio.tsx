import { FunctionalComponent, VNode, h } from '@stencil/core';
import { GenericObject } from '../../components';
import type { FRadioData, FRadioProps } from './f-radio-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FRadio: FunctionalComponent<FRadioProps> = (
    props: FRadioProps
) => {
    const hasColumns: boolean = !!props.columns;
    const radioList: Array<VNode> = [];

    for (let i = 0; i < props.data?.length; i++) {
        const data: FRadioData = props.data[i];
        const classObj: GenericObject = {
            radio: true,
            'radio--checked': data.checked ? true : false,
            'radio--disabled': props.disabled ? true : false,
        };
        radioList.push(
            <div
                class={`form-field ${
                    props.leadingLabel ? ' form-field--align-end' : ''
                }`}
            >
                <div class={classObj}>
                    <input
                        class="radio__native-control"
                        type="radio"
                        name="radio-element"
                        value={data.value}
                        checked={data.checked}
                        disabled={props.disabled}
                        onBlur={props.onBlur}
                        onChange={
                            props.onChange
                                ? props.onChange.bind(props.onChange, i)
                                : null
                        }
                        onFocus={props.onFocus}
                    ></input>
                    <div class="radio__background">
                        <div class="radio__outer-circle"></div>
                        <div class="radio__inner-circle"></div>
                    </div>
                </div>
                <label
                    htmlFor={'radio-element'}
                    onClick={
                        props.onChange
                            ? props.onChange.bind(props.onChange, i)
                            : null
                    }
                >
                    {data.label ? data.label : ''}
                </label>
            </div>
        );
    }

    const styleObj: GenericObject = {
        '--kup_radio_columns': hasColumns
            ? `repeat(${props.columns}, 1fr)`
            : '',
    };

    return (
        <div
            class={`f-radio radio-wrapper ${
                hasColumns ? 'radio-wrapper-grid' : ''
            } ${props.danger ? 'kup-danger' : ''} ${
                props.info ? 'kup-info' : ''
            } ${props.secondary ? 'kup-secondary' : ''} ${
                props.success ? 'kup-success' : ''
            } ${props.warning ? 'kup-warning' : ''} ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            style={styleObj}
        >
            {radioList}
        </div>
    );
};
