import { Fragment, FunctionalComponent, h, VNode } from '@stencil/core';
import { FLabelProps } from './f-label-declarations';
import { getParsedElements } from '../../utils/label-utils';

function getVNodes(input: string): VNode[] {
    return getParsedElements(input).map((e) =>
        e.closed ? (
            <Fragment>
                {' '}
                class={`G-${e.tag.replace(/[_*]/g, '')}`}
                {e.content}
            </Fragment>
        ) : (
            <Fragment>{`${e.tag}${e.content}`}</Fragment>
        )
    );
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ text }) => {
    return <Fragment>{getVNodes(text)}</Fragment>;
};
