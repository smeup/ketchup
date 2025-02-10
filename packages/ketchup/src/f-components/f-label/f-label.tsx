import { FunctionalComponent, h, VNode } from '@stencil/core';
import { FComponent } from '../../types/GenericTypes';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { el } from '@fullcalendar/core/internal-common';

interface FLabelProps extends FComponent {
    text: string;
    parsing?: boolean;
}

// interface FormattedElement {
//     content?: string;
//     class?: string;
//     closed?: boolean;
// }

// function parseText(text: string): VNode[] {
//     const elements: FormattedElement[] = [];
//     let lastElement: FormattedElement = null;

//     const onStartTag = (tag: string) => {
//         console.log(`onStartTag ${tag}`);
//         lastElement = { class: 'G-' + tag.replace(/_/g, '') };
//         elements.push(lastElement);
//     };

//     const onEndTag = (tag) => {
//         console.log(`onEndTag ${tag}`);
//         if (lastElement) {
//             lastElement.closed = true;
//             lastElement = null;
//         }
//     };

//     const onTextContent = (content) => {
//         console.log(`onTextContent ${content}`);
//         if (!lastElement) {
//             lastElement = { content: content };
//             elements.push(lastElement);
//         } else {
//             lastElement.content = content;
//         }
//     };

//     parse(text, onStartTag, onEndTag, onTextContent);

//     const vNodes: VNode[] = [];
//     elements.forEach((e) => {
//         if (e.closed) {
//             vNodes.push(<span class={e.class}>{e.content}</span>);
//         } else {
//             vNodes.push(<span>{e.content}</span>);
//         }
//     });
//     return vNodes;
// }

// function parse(
//     text: string,
//     onStartTag: (tag: string) => void,
//     onEndTag: (tag: string) => void,
//     onTextContent: (content: string) => void
// ): void {
//     let matches: RegExpExecArray;
//     const regex = /_([\w]{1,6})_/g;
//     const endTag = '_n_';
//     let startContent = 0;
//     let endContent = 0;
//     let tagStarted = false;
//     while ((matches = regex.exec(text)) !== null) {
//         const tag = matches[0];
//         if (tag === endTag) {
//             onTextContent(text.slice(startContent + 1, matches.index));
//             onEndTag(tag);
//             tagStarted = false;
//             endContent = matches.index;
//         } else {
//             if (startContent == 0 && matches.index > 0) {
//                 onTextContent(text.slice(0, matches.index));
//             }
//             startContent = matches.index + tag.length;
//             if (tagStarted && endContent < startContent) {
//                 const incStardIndexOf =
//                     endContent !== 0 ? endTag.length + 1 : 0;
//                 onTextContent(
//                     text.slice(endContent + incStardIndexOf, matches.index)
//                 );
//             }
//             onStartTag(tag);
//             tagStarted = true;
//         }
//     }
//     if (endContent + endTag.length < text.length) {
//         onTextContent(text.slice(endContent + endTag.length + 1));
//     }
// }

type ParsedElement = {
    class?: string;
    content?: string;
    closed?: boolean;
};

type Callbacks = {
    onStartTag: (tag: string) => void;
    onEndTag: (tag: string) => void;
    onContent: (content: string) => void;
};

function parse(input: string, callbacks: Callbacks): void {
    const regex = /(_(\w+)_|_n_)/g;
    let lastIndex = 0;
    let match: RegExpExecArray;

    while ((match = regex.exec(input)) !== null) {
        // Capture text before the match
        if (match.index > lastIndex) {
            callbacks.onContent(input.slice(lastIndex, match.index));
        }

        if (match[1] === '_n_') {
            callbacks.onEndTag(match[1]);
        } else {
            callbacks.onStartTag(match[2]);
        }

        lastIndex = regex.lastIndex;
    }

    // Capture remaining content
    if (lastIndex < input.length) {
        callbacks.onContent(input.slice(lastIndex));
    }
}

function getParsedElements(input: string): ParsedElement[] {
    const elements: ParsedElement[] = [];
    let lastElement: ParsedElement | null;

    parse(input, {
        onStartTag(tag) {
            elements.push((lastElement = { class: tag }));
        },
        onEndTag(tag) {
            if (!lastElement) {
                elements.push((lastElement = { content: tag }));
            } else {
                lastElement.closed = true;
            }
            lastElement = null;
        },
        onContent(content) {
            if (!lastElement) {
                elements.push((lastElement = { content: content }));
            } else {
                lastElement.content = content;
            }
        },
    });
    return elements;
}

function getNodes(input: string): VNode[] {
    const vNodes: VNode[] = [];
    getParsedElements(input).forEach((e) => {
        if (e.closed) {
            vNodes.push(<span class={e.class}>{e.content}</span>);
        } else {
            vNodes.push(<span>{e.content}</span>);
        }
    });
    return vNodes;
}

export const FLabel: FunctionalComponent<FLabelProps> = ({ parsing, text }) => {
    return parsing ? getNodes(text) : (text as unknown as VNode);
};
