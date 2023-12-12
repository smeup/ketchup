import { h } from '@stencil/core';
import { TooltipContentComponent } from './kup-planner-adapted-types';

export const CustomTooltipHOC = (): TooltipContentComponent => {
    const CustomTooltip: TooltipContentComponent = () => <div></div>;
    return CustomTooltip;
};
