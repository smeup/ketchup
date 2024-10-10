import { FunctionalComponent, h } from '@stencil/core';
import { FTypographyProps, FTypographyType } from './f-typography-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FTypography: FunctionalComponent<FTypographyProps> = (
    props: FTypographyProps
) => {
    if (!props.type) {
        props.type = FTypographyType.BODY_COMPACT;
    }
    if (!props.value) {
        return;
    }

    const classObj: Record<string, boolean> = {
        'f-typography': true,
        [`f-typography--${props.type}`]: props.type ? true : false,
    };
    return (
        <span
            {...props.dataSet}
            onClick={() => props.onClick}
            class={classObj}
            id={props.id}
        >
            {props.value}
        </span>
    );
};
