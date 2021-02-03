import {
    FunctionalComponent,
    getAssetPath,
    h,
    JSX,
    VNode,
} from '@stencil/core';
import { KupBadge } from '../kup-badge/kup-badge';
import { CssDraw } from './kup-image-declarations';

interface Props {
    badgeData: KupBadge[];
    color: string;
    data: CssDraw[];
    resource: string;
    sizeX: string;
    sizeY: string;
}

export const KupImageFunctional: FunctionalComponent<Props> = ({
    badgeData,
    color,
    data,
    resource,
    sizeX,
    sizeY,
}) => {
    let el: VNode;

    if (resource) {
        el = createImage(color, resource, sizeX, sizeY);
    } else {
        el = createBar(data);
    }

    let badgeCollection: KupBadge[] = [];
    if (badgeData) {
        for (let index = 0; index < badgeData.length; index++) {
            badgeCollection.push(<kup-badge {...badgeData[index]} />);
        }
    }

    return (
        <div class="kup-image--wrapper">
            {el}
            {...badgeCollection}
        </div>
    );
};

function createBar(data: CssDraw[]) {
    let el: VNode;

    const cssDraw = data;
    let steps: JSX.Element[] = [];
    let leftProgression: number = 0;

    for (let i = 0; i < data.length; i++) {
        let drawStep: JSX.Element = undefined;

        if (!cssDraw[i].shape) {
            cssDraw[i].shape = 'bar';
        }
        if (!cssDraw[i].color) {
            cssDraw[i].color = 'transparent';
        }
        if (!cssDraw[i].height) {
            cssDraw[i].height = '100%';
        }
        if (!cssDraw[i].width) {
            cssDraw[i].width = '100%';
        }

        let stepId: string = 'step-' + i;
        let stepClass: string = 'css-step bottom-aligned';
        let stepStyle: any = {
            backgroundColor: cssDraw[i].color,
            left: leftProgression + '%',
            height: cssDraw[i].height,
            width: cssDraw[i].width,
        };

        leftProgression += parseFloat(cssDraw[i].width);

        drawStep = (
            <span id={stepId} class={stepClass} style={stepStyle}></span>
        );
        steps.push(drawStep);
    }

    return <div class="kup-image__css">{steps}</div>;
}

function createImage(
    color: string,
    resource: string,
    sizeX: string,
    sizeY: string
) {
    let el: VNode;

    if (
        resource.indexOf('.') > -1 ||
        resource.indexOf('/') > -1 ||
        resource.indexOf('\\') > -1
    ) {
        let iconStyle = {
            height: sizeY ? sizeY : 'auto',
            width: sizeX ? sizeX : '100%',
        };
        el = (
            <div class="kup-image__img">
                <img style={iconStyle} src={resource}></img>
            </div>
        );
    } else {
        let iconStyle = {
            background: color ? color : 'var(--kup-icon-color)',
            mask: `url('${getAssetPath(
                `./assets/svg/${resource}.svg`
            )}') no-repeat center`,
            webkitMask: `url('${getAssetPath(
                `./assets/svg/${resource}.svg`
            )}') no-repeat center`,
            height: sizeY ? sizeY : '100%',
            width: sizeX ? sizeX : '100%',
        };
        el = <div class="kup-image__icon" style={iconStyle}></div>;
    }

    return el;
}
