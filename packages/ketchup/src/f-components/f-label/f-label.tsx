import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FComponent } from '../../types/GenericTypes';

interface FLabelProps extends FComponent {
    text: string;
    parsing?: boolean;
}

function parseText(inputText: string): VNode[] {
    const regex = /_(G_[\w]{5})/g;
    let elements = [];
    let lastIndex = 0;
    let match: RegExpExecArray;

    while ((match = regex.exec(inputText)) !== null) {
        if (match.index > lastIndex) {
            elements.push(inputText.slice(lastIndex, match.index));
        }

        const className = match[1].replace('_', '-');

        let nextTextStart = regex.lastIndex;
        let nextMatch = regex.exec(inputText);
        let spanText = nextMatch
            ? inputText.slice(nextTextStart, nextMatch.index)
            : inputText.slice(nextTextStart);

        elements.push(
            <span class={className} key={match.index}>
                {spanText}
            </span>
        );

        lastIndex = nextMatch ? nextMatch.index : inputText.length;
        regex.lastIndex = lastIndex;
    }

    if (lastIndex < inputText.length) {
        elements.push(inputText.slice(lastIndex));
    }

    return elements;
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ parsing, text }) => {
    return parsing ? parseText(text) : (text as unknown as VNode);
};
