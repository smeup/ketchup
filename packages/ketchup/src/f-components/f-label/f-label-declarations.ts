import { FComponent, GenericObject } from '../../types/GenericTypes';

export interface FLabelProps extends FComponent {
    style?: GenericObject;
    text: string;
    classes?: string;
}

export interface ParsedElement {
    tag?: string;
    content?: string;
    closed?: boolean;
}

export interface FormattingEventsListener {
    onStartTag: (tag: string) => void;
    onEndTag: (tag: string) => void;
    onContent: (content: string) => void;
}
