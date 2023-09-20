import type { FProgressBarProps } from './f-progress-bar-declarations';
import { FunctionalComponent, getAssetPath, h } from '@stencil/core';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FProgressBar: FunctionalComponent<FProgressBarProps> = (
    props: FProgressBarProps
) => {
    let componentClass = `f-progress-bar ${props.danger ? 'kup-danger' : ''} ${
        props.animated ? 'kup-animated' : ''
    } ${props.padded ? 'kup-padded' : ''} ${props.info ? 'kup-info' : ''} ${
        props.slim ? 'kup-slim' : ''
    } ${props.striped ? 'kup-striped' : ''}   ${
        props.secondary ? 'kup-secondary' : ''
    } ${props.slim ? 'kup-slim' : ''} ${props.success ? 'kup-success' : ''} ${
        props.warning ? 'kup-warning' : ''
    } ${props.wrapperClass ? props.wrapperClass : ''}`;
    let pieClass: string = 'pie';
    let radialStyle = undefined;
    if (props.isRadial) {
        componentClass += ' pie-wrapper is-radial';
    } else {
        componentClass += ' progress-bar';
    }

    let labelStyle = undefined;

    const valueStyle = {
        width: `${props.value}%`,
    };

    if (!props.centeredLabel) {
        labelStyle = valueStyle;
        if (props.value > 2) {
            componentClass += ' text-color-on-primary';
        }
    } else if (props.value > 49) {
        componentClass += ' text-color-on-primary';
    }

    let label = null;
    if (props.icon) {
        label = createIconElement(props);
    } else {
        if (!props.hideLabel) {
            if (props.isRadial) {
                if (props.label) {
                    label = <span class="label">{props.label}</span>;
                } else {
                    label = (
                        <span class="label">
                            {props.value}
                            <span class="smaller">%</span>
                        </span>
                    );
                }
            } else {
                if (props.label) {
                    label = props.label;
                } else {
                    label = props.value + '%';
                }
            }
        }
    }

    if (props.value > 0) {
        pieClass += ' has-value';
        if (props.value > 50) {
            pieClass += ' is-more-than-half';
        } else {
            pieClass += ' is-less-than-half';
        }
    }

    if (props.isRadial) {
        return (
            <div class={componentClass}>
                {label}
                <div class={pieClass}>
                    <div
                        style={radialStyle}
                        class="left-side half-circle"
                    ></div>
                    <div class="right-side half-circle"></div>
                </div>
                <div class="shadow"></div>
            </div>
        );
    } else {
        return (
            <div class={componentClass}>
                <div class="progress-bar-percentage" style={valueStyle}>
                    <span style={labelStyle}>{label}</span>
                </div>
            </div>
        );
    }
};

function createIconElement(props: FProgressBarProps) {
    if (!props.icon) {
        return undefined;
    }

    if (
        props.icon.indexOf('.') > -1 ||
        props.icon.indexOf('/') > -1 ||
        props.icon.indexOf('\\') > -1
    ) {
        return (
            <span class="label kup-icon is-image">
                <img src={props.icon}></img>
            </span>
        );
    } else {
        let svg: string = `url('${getAssetPath(
            `./assets/svg/${props.icon}.svg`
        )}') no-repeat center`;
        let iconStyle = {
            mask: svg,
            webkitMask: svg,
        };
        return <span style={iconStyle} class="label kup-icon"></span>;
    }
}
