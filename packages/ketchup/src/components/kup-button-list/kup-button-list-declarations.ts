import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-button-list component.
 * Used to export every prop in an object.
 */
export enum KupButtonListProps {
    columns = 'Number of columns.',
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'When set to true, the sub-components are disabled.',
    showSelection = 'When set to true, highlights the selected button with the secondary color of KupTheme.',
    styling = 'Defines the style of the buttons. Available styles are "flat", "outlined" and "raised" (which is the default).',
}

export interface KupButtonListClickEventPayload extends KupEventPayload {
    index: string;
    subIndex: string;
    obj: any;
}
