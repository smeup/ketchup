export type KulTextfieldEvent =
    | 'blur'
    | 'change'
    | 'click'
    | 'focus'
    | 'input'
    | 'ready';

export enum KulTextfieldProps {
    kulStyle = 'Custom style of the component.',
}

export interface KulTextfieldPropsInterface {
    kulStyle?: string;
}

export type KulTextfieldStatus = 'filled' | 'focused';
