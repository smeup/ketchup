import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-chip component.
 * Used to export every prop in an object.
 */
export enum KupChipProps {
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
    // displayId = "When enabled, the chip's text will display both the id and the value.",
    disabled = 'When true, the chip cannot be edited, nor removed.',
    displayMode = 'When enabled, the chip will display both the id and description of the data.',
    enableInput = "When enabled, it's possible to add items to the chip's dataset through an input slot (kup-autocomplete, kup-combobox, kup-text-field).",
    label = 'When set, will be shown a label on the chips.',
    sizing = 'The size of the chip. Available sizes: small, medium.',
    styling = 'The style of the chip. Available styles: outlined, raised.',
    type = 'The type of chip. Available types: input, filter, choice or empty for default.',
}

export interface KupChipNode extends KupDataNode {
    checked?: boolean;
}

export interface KupChipEventPayload extends KupEventPayload {
    chip: KupChipNode;
}

export interface KupChipChangeEventPayload extends KupEventPayload {
    stringifiedValues: string;
}
