/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

import { FunctionalComponent, VNode, h } from '@stencil/core';
import { FOneButtonProps } from './f-one-button-declarations';
import { FButton } from '../f-button/f-button';

export const FOneButton: FunctionalComponent<FOneButtonProps> = (
    props: FOneButtonProps,
    children: VNode[]
) => {
    // creates the elements of the list
    const buttons: Array<VNode> = [];
    for (let i = 0; i < props.data?.length; i++) {}

    return (
        <div>
            <FButton label="ciaone===="></FButton>
        </div>
    );
};
