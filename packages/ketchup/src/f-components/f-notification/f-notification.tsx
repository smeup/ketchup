import type { FNotificationProps } from './f-notification-declarations';
import { FunctionalComponent, h } from '@stencil/core';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FNotification: FunctionalComponent<FNotificationProps> = (
    props: FNotificationProps
) => {
    return <div id={props.id}>Hello World</div>;
};
