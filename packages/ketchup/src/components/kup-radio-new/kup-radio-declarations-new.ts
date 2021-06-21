/**
 * Props of the kup-radio component.
 * Used to export every prop in an object.
 */
export enum KupRadioProps {
    columns = 'Number of columns. When undefined, radio fields will be displayed inline.',
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    leadingLabel = 'Defaults at false. When set to true, the label will be on the left of the component.',
    name = "Defaults at null. It's the name that binds the radio buttons together.",
}
export interface ComponentRadioElement {
    value: string;
    label: string;
    checked: boolean;
}
