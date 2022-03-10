import { KupEventPayload } from '../../types/GenericTypes';
import { ValueDisplayedValue as vdv } from '../../utils/filters/filters-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-list component.
 * Used to export every prop in an object.
 */
export enum KupListProps {
    customStyle = 'Custom style of the component.',
    data = 'The data of the list.',
    displayMode = 'Selects how the items must display their label and how they can be filtered for.',
    filter = 'Keeps string for filtering elements when filter mode is active',
    hideText = "Hides rows' text, ideally to display a list of icons only.",
    isMenu = 'Defines whether the list is a menu or not.',
    keyboardNavigation = "When true, enables items' navigation through arrow keys.",
    menuVisible = "Sets the status of the menu, when false it's hidden otherwise it's visible.",
    roleType = 'Defines the type of selection. Values accepted: listbox, radiogroup or group.',
    selectable = 'Defines whether items are selectable or not.',
    showIcons = 'Displays the icons associated to each row when set to true.',
    twoLine = 'The list elements descriptions will be arranged in two lines.',
}
/**
 * Data structure of a single list item.
 */
export interface KupListNode extends KupDataNode {
    secondaryText?: string;
    selected?: boolean;
    separator?: boolean;
}
/**
 * Available types of selection.
 */
export enum KupListRole {
    LISTBOX = 'listbox',
    RADIOGROUP = 'radiogroup',
    GROUP = 'group',
}

export interface ValueDisplayedValue extends vdv {
    exists: boolean;
}

export enum ItemsDisplayMode {
    CODE = 'code',
    DESCRIPTION = 'description',
    DESCRIPTION_AND_CODE = 'both',
}
export interface KupListEventPayload extends KupEventPayload {
    selected: KupListNode;
}
