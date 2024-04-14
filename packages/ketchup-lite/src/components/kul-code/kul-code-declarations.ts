export type KulCodeEvents = 'ready';

export enum KulCodeProps {
    kulLanguage = 'Sets the language of the snippet.',
    kulStyle = 'Custom style of the component.',
    kulValue = 'String containing the snippet of code to display.',
}

export interface KulCodePropsInterface {
    kulLanguage?: string;
    kulStyle?: string;
    kulValue?: string;
}
