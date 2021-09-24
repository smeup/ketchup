import { Column, Row } from '../kup-data-table/kup-data-table-declarations';

import {
    KupTreeNodeCollapseEventPayload,
    KupTreeNodeExpandEventPayload,
    KupTreeNodeSelectedEventPayload,
} from './../kup-tree/kup-tree-declarations';

import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-accordion component.
 * Used to export every prop in an object.
 */
export enum KupAccordionProps {
    customStyle = 'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
    data = 'Data of the accordion.',
    expansionMode = "The mode of the expansion. If single you can't find more than one item expanded at a given time, if multiple you could.",
    globalFilter = 'When set to true it activates the global filter.',
    globalFilterMode = 'The mode of the global filter.',
    globalFilterValue = 'The value of the global filter.',
    selectedItemsNames = 'The names of the selected items.',
}
/**
 * Data of the accordion.
 */
export interface KupAccordionData {
    columns: Column[];
    rows: Row[];
}

export interface KupAccordionItemSelectedEventPayload extends KupEventPayload {
    itemName: string;
}

export interface KupAccordionTreeNodeSelectedEventPayload
    extends KupTreeNodeSelectedEventPayload {
    itemName: string;
}

export interface KupAccordionItemExpandedEventPayload extends KupEventPayload {
    itemName: string;
}

export interface KupAccordionTreeNodeExpandedEventPayload
    extends KupTreeNodeExpandEventPayload {
    itemName: string;
}

export interface KupAccordionItemCollapsedEventPayload extends KupEventPayload {
    itemName: string;
}

export interface KupAccordionTreeNodeCollapsedEventPayload
    extends KupTreeNodeCollapseEventPayload {
    itemName: string;
}

export enum KupAccordionExpansionMode {
    SINGLE = 'single',
    MULTIPLE = 'multiple',
}
