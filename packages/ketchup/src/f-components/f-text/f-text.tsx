import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FTextProps, FTextType } from './f-text-declarations';

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
    const classObj: Record<string, boolean> = {
        'f-text': true,
        [`f-text--${props.type}`]: props.type ? true : false,
    };
    return (
        <div
            class={classObj}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            {props.value}
            {children}
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/
