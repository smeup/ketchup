/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

import { FunctionalComponent, VNode, h } from '@stencil/core';
import { FOneButtonProps } from './f-one-button-declarations';
import { FButton } from '../f-button/f-button';

export const FOneButton: FunctionalComponent<FOneButtonProps> = (
    props: FOneButtonProps
) => {
    // creates the elements of the list
    const buttons: Array<VNode> = [];
    for (let i = 0; i < props.data?.length; i++) {
        buttons.push(
            <FButton
                label={props.data[i].label}
                onBlur={(event: FocusEvent) => {
                    props.onBlur(i, event);
                }}
                onClick={(event: FocusEvent) => {
                    props.onChange(i, event);
                }}
                onFocus={(event: FocusEvent) => {
                    props.onFocus(i, event);
                }}
            ></FButton>
        );
    }

    return <div>{buttons}</div>;
};
