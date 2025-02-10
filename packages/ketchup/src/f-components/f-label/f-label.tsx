import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FComponent } from '../../types/GenericTypes';

interface FLabelProps extends FComponent {
    text: string;
    parsing?: boolean;
}

function parseText(text: string): VNode[] {
    const regex = /_(.*?)_ (.*?) _n_/g;
    let lastIndex = 0;
    const elements: (VNode | string)[] = [];

    text.replace(regex, (match, cssClass, content, offset) => {
        if (offset > lastIndex) {
            elements.push(text.slice(lastIndex, offset));
        }

        // Aggiungi lo span
        elements.push(
            <span class={cssClass} key={offset}>
                {content}
            </span>
        );

        lastIndex = offset + match.length;
        return ''; // Necessario per evitare errori di TypeScript
    });

    // Aggiungi il testo rimanente
    if (lastIndex < text.length) {
        elements.push(text.slice(lastIndex));
    }

    return elements as unknown as VNode[];
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ parsing, text }) => {
    return parsing ? parseText(text) : (text as unknown as VNode);
};
