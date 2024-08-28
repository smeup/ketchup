export type KulCodeEvent = 'ready';

export enum KulCodeProps {
    kulFormat = 'Automatically formats the value.',
    kulLanguage = 'Sets the language of the snippet.',
    kulStyle = 'Custom style of the component.',
    kulValue = 'String containing the snippet of code to display.',
}

export interface KulCodePropsInterface {
    kulFormat?: boolean;
    kulLanguage?: string;
    kulStyle?: string;
    kulValue?: string;
}
