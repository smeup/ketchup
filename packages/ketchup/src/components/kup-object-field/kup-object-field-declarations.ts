import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
import { KupToolbarClickEventPayload } from '../kup-toolbar/kup-toolbar-declarations';

/**
 * Props of the kup-object-field component.
 * Used to export every prop in an object.
 */
export enum KupObjectFieldProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component.',
}

/**
 * Event emitted when the user click on the icon inside to the text field
 */
export interface KupObjectFieldSearchPayload extends KupEventPayload {
    inputValue: string;
}

/**
 * Event emitted when the user click on hamburger menu
 */
export interface KupObjectFieldOpenSearchMenuPayload extends KupEventPayload {
    inputValue: string;
}

/**
 * Event emitted when the user selects an item on hamburger menu
 */
export interface KupObjectFieldSelectedMenuItem
    extends KupToolbarClickEventPayload {
    inputValue: string;
}

export interface KupObjectFieldData {
    'kup-button'?: GenericObject;
    'kup-text-field'?: GenericObject;
    'kup-toolbar'?: GenericObject;
}
