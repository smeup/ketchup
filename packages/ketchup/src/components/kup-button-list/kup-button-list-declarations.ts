import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import {
    GenericObject,
    KupComponentSizing,
    KupEventPayload,
} from '../../types/GenericTypes';

/**
 * Props of the kup-button-list component.
 * Used to export every prop in an object.
 */
export enum KupButtonListProps {
    blackMode = 'Forced component on a black background. It prescinds the theme',
    contentAlign = 'Manage the align contents of the button. It could be right, left, center, around, evenly, between. Center is the default',
    columns = 'Number of columns.',
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'When set to true, the sub-components are disabled.',
    showSelection = 'When set to true, highlights the selected button with the secondary color of KupTheme.',
    styling = 'Defines the style of the buttons. Available styles are "flat", "outlined" and "raised" (which is the default).',
}

export interface KupButtonListNode extends KupDataNode {
    children?: KupButtonListNode[];
    data?: GenericObject;
}

export interface KupButtonListClickEventPayload extends KupEventPayload {
    index: string;
    subIndex: string;
    obj: KupObj;
}
