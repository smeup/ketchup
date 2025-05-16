import type { FComponent } from '../../types/GenericTypes';
import { KupChipNode } from '../../components/kup-chip/kup-chip-declarations';
import { ItemsDisplayMode } from '../../components';
/**
 * Props of the f-chip component.
 */
export interface FChipsProps extends FComponent {
    data?: KupChipNode[];
    displayMode?: ItemsDisplayMode;
    onBlur?: ((chip: KupChipNode, e: FocusEvent) => void)[];
    onClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    onContextMenu?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    onExpansionClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    onFocus?: ((chip: KupChipNode, e: FocusEvent) => void)[];
    onIconClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    primary?: boolean;
    sizing?: FChipSize;
    styling?: FChipStyling;
    type?: FChipType;
    disabled?: boolean;
}
/**
 * Types of the f-chip component.
 * @enum {string}
 * @property {string} CHOICE - Only 1 chip may be selected at a time.
 * @property {string} FILTER - Multiple chips may be selected at a time.
 * @property {string} INPUT - Chips can be deleted by clicking on the rightmost icon.
 * @property {string} STANDARD - Standard chip set.
 */
export enum FChipType {
    CHOICE = 'choice',
    FILTER = 'filter',
    INPUT = 'input',
    STANDARD = 'standard',
}
/**
 * Types of the f-chip component.
 * @enum {string}
 * @property {string} OUTLINED - Outlined style : no background with border.
 * @property {string} RAISED - Raised style : no border with solid background.
 */
export enum FChipStyling {
    OUTLINED = 'outlined',
    RAISED = 'raised',
}

/**
 * Types of the f-chip component.
 * @enum {string}
 * @property {string} SMALL - Small size: height = 24px
 * @property {string} MEDIUM - Medium size: height = 32px (default)
 */

export enum FChipSize { // GenericTypes to be studied because small chips goes with small button/textfield but has different sizes
    SMALL = 'small',
    MEDIUM = 'medium',
}
