import {
    FormattingEventsListener,
    ParsedElement,
} from '../f-components/f-label/f-label-declarations';

function parse(input: string, listener: FormattingEventsListener): void {
    const regex =
        /((_G\d{2}[A-Z0-9]\d{2}_|_G\*(BOLD|ERROR|ITALIC|UNDERLINE)_)|_n_)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(input)) !== null) {
        // Capture text before the match
        if (match.index > lastIndex) {
            listener.onContent(input.slice(lastIndex, match.index));
        }

        if (match[1] === '_n_') {
            listener.onEndTag(match[1]);
        } else {
            listener.onStartTag(match[2]);
        }

        lastIndex = regex.lastIndex;
    }

    // Capture remaining content
    if (lastIndex < input.length) {
        listener.onContent(input.slice(lastIndex));
    }
}

export function getParsedElements(input: string): ParsedElement[] {
    const elements: ParsedElement[] = [];
    let lastElement: ParsedElement | null = null;

    parse(input, {
        onStartTag(tag) {
            if (lastElement?.tag) {
                lastElement.closed = true;
            }
            elements.push((lastElement = { tag: tag, content: '' }));
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
                lastElement.content += content;
            }
        },
    });

    if (lastElement && (lastElement as ParsedElement).tag) {
        (lastElement as ParsedElement).closed = true;
    }

    return elements;
}
