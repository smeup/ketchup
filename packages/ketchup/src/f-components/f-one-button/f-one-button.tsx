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
    return (
        <div>
            <FButton label="ciaone===="></FButton>
        </div>
    );
};
