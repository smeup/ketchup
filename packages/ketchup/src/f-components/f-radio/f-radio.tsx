import { FunctionalComponent, VNode, h, Fragment } from '@stencil/core';
import { GenericObject } from '../../components';
import {
    FRadioType,
    type FRadioData,
    type FRadioProps,
} from './f-radio-declarations';
import { FImage } from '../f-image/f-image';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FRadio: FunctionalComponent<FRadioProps> = (
    props: FRadioProps
) => {
    console.log('FRadio', props);
    const hasColumns: boolean = !!props.columns;
    const radioList: Array<VNode> = [];

    // Default to 'radio' if props.type is not specified
    const radioType = props.type || FRadioType.RADIO;
    for (let i = 0; i < props.data?.length; i++) {
        const data: FRadioData = props.data[i];
        const classObj: GenericObject = {
            radio: true,
            'radio--checked': data.checked ? true : false,
            'radio--disabled': props.disabled ? true : false,
            [`radio--${props.type}`]: props.type ? true : false,
        };

        radioList.push(
            <div
                class={`form-field 
                  ${props.leadingLabel ? ' form-field--align-end' : ''} ${
                    props.disabled ? 'radio--disabled' : ''
                } ${radioType === FRadioType.CHEVRON ? 'form--chevron' : ''}`}
                onClick={
                    props.onChange
                        ? props.onChange.bind(props.onChange, i)
                        : null
                }
            >
                <div class={classObj}>
                    {radioType === FRadioType.RADIO ? (
                        <input
                            class="radio__native-control"
                            type="radio"
                            name="radio-element"
                            value={data.value}
                            checked={data.checked}
                            disabled={props.disabled}
                            onBlur={props.onBlur}
                            onChange={(e) => {
                                if (props.onChange) {
                                    props.onChange(i, e);
                                }
                                e.stopPropagation();
                            }}
                            onFocus={props.onFocus}
                        ></input>
                    ) : (
                        <Fragment>
                            {data.checked ? (
                                <FImage
                                    resource="check"
                                    sizeX="14px"
                                    sizeY="14px"
                                ></FImage>
                            ) : (
                                <FImage
                                    sizeX="14px"
                                    sizeY="14px"
                                    onClick={(e) => {
                                        if (props.onChange) {
                                            props.onChange(i, e);
                                        }
                                        e.stopPropagation();
                                    }}
                                ></FImage>
                            )}
                        </Fragment>
                    )}
                    {radioType === FRadioType.RADIO && (
                        <div class="radio__background">
                            <div class="radio__outer-circle"></div>
                            <div class="radio__inner-circle"></div>
                        </div>
                    )}
                </div>

                <div
                    class="label-wrapper"
                    onClick={(e) => {
                        if (props.onChange) {
                            props.onChange(i, e);
                        }
                        e.stopPropagation();
                    }}
                >
                    {/* Icon */}
                    {radioType === FRadioType.CHEVRON && (
                        <FImage
                            resource={data.icon}
                            sizeX="14px"
                            sizeY="14px"
                        />
                    )}
                    {/* Label */}
                    <label htmlFor={'radio-element'}>
                        {data.label ? data.label : ''}
                    </label>
                    {/* Shortcut */}
                    {data.shortcutLabel && (
                        <div class="shortcut">{data.shortcutLabel}</div>
                    )}
                </div>
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
            class={`f-radio radio-wrapper
             ${hasColumns ? 'radio-wrapper-grid' : ''} ${
                props.danger ? 'kup-danger' : ''
            } ${props.info ? 'kup-info' : ''} ${
                props.secondary ? 'kup-secondary' : ''
            } ${props.success ? 'kup-success' : ''} ${
                props.warning ? 'kup-warning' : ''
            } ${props.wrapperClass ? props.wrapperClass : ''} ${
                props.horizontal ? 'kup-horizontal' : ''
            }`}
            style={styleObj}
        >
            {radioList}
        </div>
    );
};
