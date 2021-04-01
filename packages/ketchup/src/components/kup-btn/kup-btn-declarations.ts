/**
 * Props of the kup-btn component.
 * Used to export every prop in an object.
 */
export enum KupBtnProps {
    collapsed = 'Default at false. When set to true, the sub-components will be shown in a drowpdown-list.',
    columns = 'Number of columns for draw sub-components.',
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'Default at false. When set to true, the sub-components are disabled.',
    displayMode = 'Sets how to show the selected item value. Suported values: "code", "description", "both".',
    icon = 'Default at null. If collapsed set to true, when set, the dropdown-button will show this icon.',
    initialValue = 'Sets the initial value of the component.',
    label = 'Defaults at null. If collapsed set to true, when set, the dropdown-button will show this text.',
    selectMode = 'Sets how to return the selected item value. Suported values: "code", "description", "both".',
    styling = 'Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.',
    trailingIcon = 'When set, the icon will be shown after the text.',
}

/*
export interface ButtonConfig {
    align?: string;
    borderColor?: string;
    buttonClass?: string;
    columns?: number;
    fillspace?: boolean;
    flat?: boolean;
    horizontal?: boolean;
    iconUrl?: string;
    rounded?: boolean;
    showicon?: boolean;
    showSelection?: boolean;
    showtext?: boolean;
    textmode?: string;
    transparent?: boolean;
}
*/
