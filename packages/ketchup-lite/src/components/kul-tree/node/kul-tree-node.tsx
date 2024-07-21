import { FunctionalComponent, h } from '@stencil/core';
import { KulTreeNodeProps } from './kul-tree-node-declarations';
import { TreeNodeContent } from './kul-tree-node-content';
import { KulDataCyAttributes } from '../../../types/GenericTypes';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const TreeNode: FunctionalComponent<KulTreeNodeProps> = (
    props: KulTreeNodeProps
) => {
    const {
        accordionLayout,
        depth,
        elements,
        events,
        expanded,
        node,
        selected,
    } = props || {};
    const icon = node.icon ? (
        <TreeNodeContent node={node} type="icon"></TreeNodeContent>
    ) : (
        <TreeNodeContent type="placeholder"></TreeNodeContent>
    );
    const classList = {
        node: true,
        ['node--expanded']: expanded ? true : false,
        ['node--selected']: selected ? true : false,
    };
    if (accordionLayout) {
        return (
            <div
                class={classList}
                data-depth={depth.toString()}
                key={node.id}
                onClick={events.onClickExpand}
                onPointerDown={events.onPointerDown}
                title={node.description}
            >
                <div class="node__content">
                    {elements.ripple}
                    {icon}
                    {elements.value}
                    {node.children?.length ? (
                        <TreeNodeContent
                            expanded={expanded}
                            node={node}
                            type="dropdown"
                        ></TreeNodeContent>
                    ) : (
                        <TreeNodeContent type="placeholder"></TreeNodeContent>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div
                class={`node ${expanded ? 'node--expanded' : ''} ${
                    selected ? 'node--selected' : ''
                }`}
                data-cy={KulDataCyAttributes.NODE}
                data-depth={depth.toString()}
                key={node.id}
                onClick={events.onClick}
                onPointerDown={events.onPointerDown}
                title={node.description}
            >
                <div class="node__content">
                    {elements.ripple}
                    <TreeNodeContent
                        depth={depth}
                        type="padding"
                    ></TreeNodeContent>
                    {node.children?.length ? (
                        <TreeNodeContent
                            expanded={expanded}
                            node={node}
                            onClickExpand={events.onClickExpand}
                            type="expand"
                        ></TreeNodeContent>
                    ) : (
                        <TreeNodeContent type="placeholder"></TreeNodeContent>
                    )}
                    {icon}
                    {elements.value}
                </div>
            </div>
        );
    }
};
