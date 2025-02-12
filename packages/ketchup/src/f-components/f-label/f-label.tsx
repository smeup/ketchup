import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FLabelProps } from './f-label-declarations';
import { getParsedElements } from '../../utils/label-utils';

function getVNodes(input: string): VNode[] {
    return getParsedElements(input).map((e) =>
        e.closed ? (
            <span class={`G-${e.tag.replace(/[_*]/g, '')}`}>{e.content}</span>
        ) : (
            <span>{`${e.tag}${e.content}`}</span>
        )
    );
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ text }) => {
    return <span>{getVNodes(text)}</span>;
};
