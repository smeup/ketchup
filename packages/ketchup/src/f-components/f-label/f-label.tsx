import { Fragment, FunctionalComponent, h, VNode } from '@stencil/core';
import { FLabelProps, ParsedElement } from './f-label-declarations';
import { getParsedElements } from '../../utils/label-utils';
import {
    getGCellStyle,
    getGCellStyleAsString,
} from '../../utils/g-cell-style-generator';

function getVNodes(parsedElements: ParsedElement[]): VNode[] {
    return parsedElements.map((e) => {
        const style = getGCellStyle(e.tag?.replace(/[_G]/g, ''));
        console.log('parsedElement', e);
        console.log('style', style);
        return e.closed ? (
            <span style={style}>{e.content}</span>
        ) : (
            <span>{`${e.tag ?? ''}${e.content}`}</span>
        );
    });
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ text }) => {
    const parsedElements = getParsedElements(text);
    // To avoid creating unnecessary span in the text
    // when there are no tags to format the content
    if (parsedElements?.length > 1) {
        return <span>{getVNodes(parsedElements)}</span>;
    } else {
        return <Fragment>{text}</Fragment>;
    }
};
