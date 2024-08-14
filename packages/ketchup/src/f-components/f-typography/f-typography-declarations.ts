import type { FComponent } from '../../types/GenericTypes';

/**
 * Props of the f-button component.
 */
export interface FTypographyProps extends FComponent {
    type?: FTypographyType;
    value?: string;
    toolbar?: boolean;
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
export enum FTypographyType {
    BODY = 'body',
    BODY_COMPACT = 'body-compact',
    HEADING1 = 'heading-01',
    HEADING2 = 'heading-02',
    HEADING3 = 'heading-03',
    CAPTION = 'caption',
    LABEL = 'label',
}
