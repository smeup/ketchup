import { FunctionalComponent, getAssetPath, h } from '@stencil/core';
import { KulDataNode } from '../../../components';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const TreeNodeContent: FunctionalComponent<{
    depth?: number;
    expanded?: boolean;
    node?: KulDataNode;
    type: 'dropdown' | 'expand' | 'icon' | 'padding' | 'placeholder';
    onClickExpand?: (e: MouseEvent) => void;
}> = ({ depth, expanded = false, node, onClickExpand, type }) => {
    switch (type) {
        case 'dropdown':
            return (
                <div
                    class={`node__dropdown ${
                        expanded ? 'node__dropdown--expanded' : ''
                    } `}
                ></div>
            );
        case 'expand':
            return (
                <div
                    class={`node__expand ${
                        expanded ? 'node__expand--expanded' : ''
                    } `}
                    onClick={onClickExpand}
                ></div>
            );
        case 'icon':
            const path = getAssetPath(`./assets/svg/${node.icon}.svg`);
            const style = {
                mask: `url('${path}') no-repeat center`,
                webkitMask: `url('${path}') no-repeat center`,
            };
            return <div class={'node__icon'} style={style}></div>;
        case 'padding':
            return (
                <div
                    class="node__padding"
                    style={{
                        ['--kul_tree_padding_multiplier']: depth.toString(),
                    }}
                ></div>
            );
        default:
            return <div class={'node__expand node__expand--placeholder'}></div>;
    }
};
