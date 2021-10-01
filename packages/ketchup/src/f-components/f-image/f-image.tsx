import type { KupBadge } from '../../components/kup-badge/kup-badge';
import { FImageProps, FImageData, FImageShape } from './f-image-declarations';
import { FunctionalComponent, getAssetPath, h, JSX } from '@stencil/core';
import { KupThemeColorValues } from '../../utils/kup-theme/kup-theme-declarations';
import { GenericObject } from '../../types/GenericTypes';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FImage: FunctionalComponent<FImageProps> = (
    props: FImageProps
) => {
    let el: HTMLImageElement | HTMLDivElement;
    let style: {
        '--f-image-height': string;
        '--f-image-width': string;
    };

    if (props.resource) {
        if (
            props.resource.indexOf('.') > -1 ||
            props.resource.indexOf('/') > -1 ||
            props.resource.indexOf('\\') > -1
        ) {
            style = {
                '--f-image-height': props.sizeY ? props.sizeY : 'auto',
                '--f-image-width': props.sizeX ? props.sizeX : '100%',
            };
            el = createImage(props.resource);
        } else {
            style = {
                '--f-image-height': props.sizeY ? props.sizeY : '100%',
                '--f-image-width': props.sizeX ? props.sizeX : '100%',
            };
            el = createIcon(props);
        }
    } else if (props.data) {
        style = {
            '--f-image-height': props.sizeY ? props.sizeY : '100%',
            '--f-image-width': props.sizeX ? props.sizeX : '100%',
        };
        el = createBar(props.data);
    }

    const badgeCollection: KupBadge[] = [];
    if (props.badgeData) {
        for (let index = 0; index < props.badgeData.length; index++) {
            badgeCollection.push(<kup-badge {...props.badgeData[index]} />);
        }
    }

    return (
        <div
            class={`f-image--wrapper ${
                props.wrapperClass ? props.wrapperClass : ''
            } ${props.fit ? 'kup-fit' : ''}`}
            {...props.dataSet}
            id={props.id}
            style={style}
            title={props.title}
            onClick={props.onClick}
        >
            {el}
            {...badgeCollection}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function createIcon(props: FImageProps): HTMLDivElement {
    const classObj: GenericObject = {
        'f-image__icon': true,
    };
    const style: GenericObject = {
        background: props.color
            ? props.color
            : `var(${KupThemeColorValues.ICON})`,
    };
    if (props.resource.indexOf('--kup') > -1) {
        let themeIcon: string = props.resource.replace('--kup-', '');
        themeIcon = themeIcon.replace('-icon', '');
        classObj['icon-container'] = true;
        classObj[themeIcon] = true;
    } else {
        const path: string = getAssetPath(`./assets/svg/${props.resource}.svg`);
        style.mask = `url('${path}') no-repeat center`;
        style.webkitMask = `url('${path}') no-repeat center`;
    }
    return <div class={classObj} style={style}></div>;
}

function createImage(resource: string): HTMLImageElement {
    return <img src={resource}></img>;
}

function createBar(data: FImageData[]): HTMLDivElement {
    const steps: JSX.Element[] = [];
    let leftProgression: number = 0;

    for (let i = 0; i < data.length; i++) {
        let drawStep: JSX.Element = undefined;

        if (!data[i].shape) {
            data[i].shape = FImageShape.BAR;
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

        const stepId: string = 'step-' + i;
        const stepClass: string = 'css-step bottom-aligned';
        const stepStyle: any = {
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
