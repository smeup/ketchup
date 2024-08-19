import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FImage } from '../f-image/f-image';
import { FImageProps } from '../f-image/f-image-declarations';
import { FTypographyProps, FTypographyType } from './f-typography-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FTypography: FunctionalComponent<FTypographyProps> = (
    props: FTypographyProps,
    children: VNode[]
) => {
    if (!props.type) {
        props.type = FTypographyType.HEADING1;
    }
    if (!props.value) {
        return;
    }
    if (!props.toolbar) {
        props.toolbar = true;
    }
    const classObj: Record<string, boolean> = {
        'f-typography': true,
        [`f-typography--${props.type}`]: props.type ? true : false,
    };

    const classObjParent: Record<string, boolean> = {
        'f-typography--wrap': props.toolbar ? true : false,
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
                        props.onIconClick;
                    }}
                />
            )}
        </div>
    );
};
