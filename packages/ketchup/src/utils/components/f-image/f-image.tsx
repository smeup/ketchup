import {
    FunctionalComponent,
    getAssetPath,
    h,
    JSX,
    VNode,
} from '@stencil/core';
import { KupBadge } from '../../../components/kup-badge/kup-badge';
import { CssDraw } from '../../../components/kup-image/kup-image-declarations';

interface Props {
    badgeData?: KupBadge[];
    color?: string;
    data?: CssDraw[];
    id?: string;
    resource?: string;
    sizeX?: string;
    sizeY?: string;
    title?: string;
}

export const FImage: FunctionalComponent<Props> = ({
    badgeData,
    color,
    data,
    id,
    resource,
    sizeX,
    sizeY,
    title,
}) => {
    let el: VNode;
    let style: {
        '--f-image-height': string;
        '--f-image-width': string;
    };

    if (resource) {
        if (
            resource.indexOf('.') > -1 ||
            resource.indexOf('/') > -1 ||
            resource.indexOf('\\') > -1
        ) {
            style = {
                '--f-image-height': sizeY ? sizeY : 'auto',
                '--f-image-width': sizeX ? sizeX : '100%',
            };
            el = createImage(resource);
        } else {
            style = {
                '--f-image-height': sizeY ? sizeY : '100%',
                '--f-image-width': sizeX ? sizeX : '100%',
            };
            el = createIcon(color, resource);
        }
    } else {
        style = {
            '--f-image-height': sizeY ? sizeY : '100%',
            '--f-image-width': sizeX ? sizeX : '100%',
        };
        el = createBar(data);
    }

    let badgeCollection: KupBadge[] = [];
    if (badgeData) {
        for (let index = 0; index < badgeData.length; index++) {
            badgeCollection.push(<kup-badge {...badgeData[index]} />);
        }
    }

    return (
        <div style={style} id={id} class="f-image--wrapper" title={title}>
            {el}
            {...badgeCollection}
        </div>
    );
};

function createBar(data: CssDraw[]) {
    let steps: JSX.Element[] = [];
    let leftProgression: number = 0;

    for (let i = 0; i < data.length; i++) {
        let drawStep: JSX.Element = undefined;

        if (!data[i].shape) {
            data[i].shape = 'bar';
        }
        if (!data[i].color) {
            data[i].color = 'transparent';
        }
        if (!data[i].height) {
            data[i].height = '100%';
        }
        if (!data[i].width) {
            data[i].width = '100%';
        }

        let stepId: string = 'step-' + i;
        let stepClass: string = 'css-step bottom-aligned';
        let stepStyle: any = {
            backgroundColor: data[i].color,
            left: leftProgression + '%',
            height: data[i].height,
            width: data[i].width,
        };

        leftProgression += parseFloat(data[i].width);

        drawStep = (
            <span id={stepId} class={stepClass} style={stepStyle}></span>
        );
        steps.push(drawStep);
    }
    return <div class="f-image__css">{steps}</div>;
}

function createIcon(color: string, resource: string) {
    let path = getAssetPath(`./assets/svg/${resource}.svg`);
    let style = {
        background: color ? color : 'var(--kup-icon-color)',
        mask: `url('${path}') no-repeat center`,
        webkitMask: `url('${path}') no-repeat center`,
    };
    return <div class="f-image__icon" style={style}></div>;
}

function createImage(resource: string) {
    return (
        <div class="f-image__img">
            <img src={resource}></img>
        </div>
    );
}
