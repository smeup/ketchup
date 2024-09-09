import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-typography component.
 * Used to export every prop in an object.
 */
export enum KupTypographyProps {
    data = 'the text of the text',
    Style = 'it is the style of the text',
    Border = 'when true it will appear a border',
    BorderWidth = 'it is the width of the border',
    Align = 'text alignment',
    FontBold = 'when true it will display the bold font',
    FontItalic = 'when true it will display the italic ( cursive )',
    FontName = 'it is the name of the font',
    FontSize = 'it is the size of the font of the text',
    FontULine = 'when true it will show the underline',
    FontColor = 'it is the color of the font of the text',
    BackColor = 'it is the background color of the text',
    Type = 'it is the type of the font. It is an enum that can take from different variant such as body, heading1, caption and so on',
}

/**
 * Styling options for the f-button component.
 * @enum {string}
 * @property {string} BODY - Button content align : center ( Default ).
 * @property {string} BODY_COMPACT - Button content align : center ( Default ).
 * @property {string} HEADING1 - All the content is left aligned
 * @property {string} HEADING2 - All the content is right aligned.
 * @property {string} HEADING3 - The space is perfectly divided between borders and content.
 * @property {string} CAPTION - The space between the content is the maximum.
 * @property {string} LABEL - The space is more around .
 */
export enum KupTypographyType {
    BODY = 'body',
    BODY_COMPACT = 'body-compact',
    HEADING1 = 'heading-01',
    HEADING2 = 'heading-02',
    HEADING3 = 'heading-03',
    CAPTION = 'caption',
    LABEL = 'label',
}

export interface KupTypographyIconClickEventPayload extends KupEventPayload {
    index: number;
    node: KupDataNode;
}

export interface KupTypographyClickEventPayload extends KupEventPayload {
    value: string;
}
