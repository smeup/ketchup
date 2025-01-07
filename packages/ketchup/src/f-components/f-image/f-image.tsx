import type { KupBadge } from '../../components/kup-badge/kup-badge';
import { FImageProps, FImageData, FImageShape } from './f-image-declarations';
import { FunctionalComponent, getAssetPath, h, JSX } from '@stencil/core';
import { GenericObject } from '../../types/GenericTypes';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

const HIDDEN_CLASS = 'f-image__hidden';

export const FImage: FunctionalComponent<FImageProps> = (
    props: FImageProps
) => {
    let el: HTMLImageElement | HTMLDivElement;
    let style: {
        '--kup_image_height': string;
        '--kup_image_width': string;
    };

    if (props.resource) {
        if (
            props.resource.indexOf('.') > -1 ||
            props.resource.indexOf('/') > -1 ||
            props.resource.indexOf('\\') > -1
        ) {
            style = {
                '--kup_image_height': props.sizeY ? props.sizeY : 'auto',
                '--kup_image_width': props.sizeX ? props.sizeX : '100%',
            };
            el = createImage(props);
        } else {
            style = {
                '--kup_image_height': props.sizeY ? props.sizeY : '100%',
                '--kup_image_width': props.sizeX ? props.sizeX : '100%',
            };
            el = createIcon(props.resource, props.color);
        }
    } else if (props.data) {
        style = {
            '--kup_image_height': props.sizeY ? props.sizeY : '100%',
            '--kup_image_width': props.sizeX ? props.sizeX : '100%',
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
            class={`f-image ${props.wrapperClass ? props.wrapperClass : ''} `}
            {...props.dataSet}
            id={props.id}
            style={style}
            title={props.title}
            onClick={props.onClick}
            tabindex={props.tabIndex ?? null}
        >
            {props.placeholderResource
                ? createIcon(
                      props.placeholderResource,
                      props.color,
                      'f-image__placeholder ' + HIDDEN_CLASS
                  )
                : undefined}
            {el}
            {...badgeCollection}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function createIcon(
    icon: string,
    color: string,
    iconClass = 'f-image__icon'
): HTMLDivElement {
    const classObj: GenericObject = {
        [iconClass]: true,
    };
    const style: GenericObject = {
        background: color
            ? color
            : `var(--kup-icon-color,var(--kup-text-secondary))`,
    };
    if (icon.indexOf('--kup') > -1) {
        let themeIcon: string = icon.replace('--', '');
        classObj['kup-icon'] = true;
        classObj[themeIcon] = true;
    } else {
        const path: string = getAssetPath(`./assets/svg/${icon}.svg`);
        style.mask = `url('${path}') no-repeat center`;
        style.webkitMask = `url('${path}') no-repeat center`;
    }
    return (
        <div class="iconWrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 24 24"
            ></svg>
            <div class={classObj} style={style}></div>
        </div>
    );
}

function createImage(props: FImageProps): HTMLImageElement {
    return (
        <img
            class={props.placeholderResource ? HIDDEN_CLASS : ''}
            onLoad={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                const placeholder = img.parentElement.querySelector(
                    '.f-image__placeholder'
                );
                const iconWrapper =
                    img.parentElement.querySelector('.iconWrapper');

                const fWrapper =
                    img.parentElement.parentElement.querySelector('.f-image');
                if (props.onLoad) {
                    props.onLoad(e);
                }
                if (placeholder) {
                    placeholder.classList.add(HIDDEN_CLASS);
                    img.classList.remove(HIDDEN_CLASS);
                }
                if (iconWrapper) {
                    iconWrapper.classList.add(HIDDEN_CLASS);
                    fWrapper.classList.add('noIcon');
                }
            }}
            onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img && img.parentElement) {
                    const placeholder = img.parentElement.querySelector(
                        '.f-image__placeholder'
                    );
                    const iconWrapper =
                        img.parentElement.querySelector('.iconWrapper');
                    if (placeholder) {
                        placeholder.classList.remove(HIDDEN_CLASS);
                        img.classList.add(HIDDEN_CLASS);
                    }
                    if (iconWrapper) {
                        iconWrapper.classList.remove(HIDDEN_CLASS);
                    }
                }
            }}
            src={props.resource}
        ></img>
    );
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
