import type { FComponent } from '../../types/GenericTypes';
import { KupChipNode } from '../../components/kup-chip/kup-chip-declarations';
/**
 * Props of the f-chip component.
 */
export interface FChipsProps extends FComponent {
    data?: KupChipNode[];
    onBlur?: ((chip: KupChipNode, e: FocusEvent) => void)[];
    onClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    onExpansionClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    onFocus?: ((chip: KupChipNode, e: FocusEvent) => void)[];
    onIconClick?: ((chip: KupChipNode, e: PointerEvent) => void)[];
    type?: FChipType;
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
