import { Fragment, FunctionalComponent, h, VNode } from '@stencil/core';
import { FLabelProps } from './f-label-declarations';
import { getParsedElements } from '../../utils/label-utils';
import {
    getGCellStyle,
    getGCellStyleAsString,
} from '../../utils/g-cell-style-generator';

function getVNodes(input: string): VNode[] {
    return getParsedElements(input).map((e) => {
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
    return <Fragment>{getVNodes(text)}</Fragment>;
};
