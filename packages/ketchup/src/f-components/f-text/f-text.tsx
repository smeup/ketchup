import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FTextProps, FTextType } from './f-text-declarations';
import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FText: FunctionalComponent<FTextProps> = (
    props: FTextProps,
    children: VNode[]
) => {
    if (!props.type) {
        props.type = FTextType.HEADING1;
    }
    if (!props.value) {
        return;
    }
    if (!props.toolbar) {
        props.toolbar = true;
    }
    const classObj: Record<string, boolean> = {
        'f-text': true,
        [`f-text--${props.type}`]: props.type ? true : false,
    };

    const classObjParent: Record<string, boolean> = {
        'f-text--wrap': props.toolbar ? true : false,
    };

    const propsFImage: FImageProps = {
        color: 'var(--kup-gray-color-70)',
        resource: 'app',
        sizeX: '16px',
        sizeY: '16px',
        wrapperClass: 'image__iconToolbar',
    };

    return (
        <div class={classObjParent}>
            <span
                class={classObj}
                {...props.dataSet}
                id={props.id}
                title={props.title}
            >
                {props.value}
                {children}
            </span>
            {toolbar && (
                <FImage
                    {...propsFImage}
                    onClick={() => {
                        // e.stopPropagation(); remove comment to stop event propagation to tab-bar
                        console.log('CONSOLE BTN TOOLBAR');
                    }}
                />
            )}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/
