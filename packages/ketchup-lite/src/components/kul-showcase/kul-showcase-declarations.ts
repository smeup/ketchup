export type KulShowcaseDynamicExampleType =
    | 'custom'
    | 'state-colors'
    | 'positions';

export type KulShowcaseEvents = 'click';

export enum KulShowcaseProps {
    kulStyle = 'Custom style of the component.',
}

export interface KulShowcasePropsInterface {
    kulStyle: string;
}

export type KulShowcaseTitle =
    | 'Components'
    | 'Framework'
    | 'Layout'
    | 'Utilities';
