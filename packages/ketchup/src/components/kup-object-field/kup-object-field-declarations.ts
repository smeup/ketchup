import { GenericObject } from '../../types/GenericTypes';

/**
 * Props of the kup-object-field component.
 * Used to export every prop in an object.
 */
export enum KupObjectFieldProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component.',
}

export interface KupObjectFieldData extends GenericObject {} // changed temporarily(?) to remove extra assignments besides textfield
