import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-object-field component.
 * Used to export every prop in an object.
 */
export enum KupObjectFieldProps {}

/**
 * Event emitted when the user click on the icon inside to the text field
 */
export interface KupObjectFieldSearchPayload extends KupEventPayload {
    inputValue: string;
}

/**
 * Event emitted when the user click on the hamburger menu
 */
export interface KupObjectFieldOpenSearchMenuPayload extends KupEventPayload {
    inputValue: string;
}
