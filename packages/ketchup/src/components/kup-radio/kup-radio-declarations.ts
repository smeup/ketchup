export interface KetchupRadioElement {
    label: string;
    value: string;
}

/**
 * Factory function for KetchupRadioElement
 * @constructor
 */
export function KetchupRadioElementFactory(): KetchupRadioElement {
    return {
        label: '',
        value: ''
    };
}