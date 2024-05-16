import { VNode } from '@stencil/core';
import { KulDataNode } from '../../../components';

export interface KulTreeNodeProps {
    accordionLayout: boolean;
    depth: number;
    elements: { ripple: VNode; value: VNode };
    events: {
        onClick: (event: MouseEvent) => void;
        onClickExpand: (event: MouseEvent) => void;
        onPointerDown: (event: MouseEvent) => void;
    };
    expanded: boolean;
    node: KulDataNode;
    selected: boolean;
}
