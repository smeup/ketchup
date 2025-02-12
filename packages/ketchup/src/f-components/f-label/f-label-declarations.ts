import { FComponent } from '../../types/GenericTypes';

export interface FLabelProps extends FComponent {
    text: string;
}

export interface ParsedElement {
    tag: string;
    content: string;
    closed?: boolean;
}

export interface FormattingEventsListener {
    onStartTag: (tag: string) => void;
    onEndTag: (tag: string) => void;
    onContent: (content: string) => void;
}
