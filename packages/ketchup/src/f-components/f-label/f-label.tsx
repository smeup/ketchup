import { Fragment, FunctionalComponent, h, VNode } from '@stencil/core';
import { FLabelProps, ParsedElement } from './f-label-declarations';
import { getParsedElements } from '../../utils/label-utils';
import { getGCellStyle } from '../../utils/g-cell-style-generator';

function getVNodes(parsedElements: ParsedElement[]): VNode[] {
    return parsedElements.map((e) => {
        const style = getGCellStyle(e.tag?.replace(/[_]/g, '').slice(1));
        return e.closed ? (
            <span style={style}>{e.content}</span>
        ) : (
            <span>{`${e.tag ?? ''}${e.content}`}</span>
        );
    });
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ text, classes }) => {
    const parsedElements = getParsedElements(text);
    // To avoid creating unnecessary span in the text
    // when there are no tags to format the content
    return (
        <span class={classes}>
            {parsedElements.find((p) => p.tag !== undefined)
                ? getVNodes(parsedElements)
                : text}
        </span>
    );
};
