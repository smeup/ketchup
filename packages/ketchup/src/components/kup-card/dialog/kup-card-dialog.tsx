import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import type { GenericObject } from '../../../types/GenericTypes';
import type { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { FImage } from '../../../f-components/f-image/f-image';
import { compList, dialogHeader } from '../kup-card-helper';
import {
    KupLanguageGeneric,
    KupLanguageRow,
} from '../../../managers/kup-language/kup-language-declarations';
import { KupCardCSSClasses, KupCardIds } from '../kup-card-declarations';
import {
    KupDataColumn,
    KupDataDataset,
} from '../../../managers/kup-data/kup-data-declarations';
import { KupColumnMenuIds } from '../../../utils/kup-column-menu/kup-column-menu-declarations';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupDropdownButton } from '../../kup-dropdown-button/kup-dropdown-button';

const dom: KupDom = document.documentElement as KupDom;
/**
 * 1st dialog card layout, used to display information in string format.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create1(component: KupCard): VNode {
    //Title, subtitle and description
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    const divs: VNode[] = [];
    //Loop starts from 1: occurence [0] is the dialog's title
    for (let index = 1; index < textArray.length; index++) {
        const isEven: boolean = index % 2 == 0;
        divs.push(
            <span class={`text ${!isEven ? 'label' : ''}`}>
                {textArray[index]}
            </span>
        );
    }
    return (
        <div class={`dialog-layout-${component.layoutNumber} dialog-element`}>
            {dialogHeader(textArray[0])}
            <div class="section-1">{divs}</div>
        </div>
    );
}
/**
 * 2nd dialog card layout, used to display information in string format and features an highlighted row on top.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create2(component: KupCard): VNode {
    //Title, subtitle and description
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    const divs: VNode[] = [];
    //Loop starts from 3: occurence [0] is the dialog's title, [1] and [2] are the highlighted strings
    for (let index = 3; index < textArray.length; index++) {
        const isEven: boolean = index % 2 == 0;
        divs.push(
            <span class={`text ${!isEven ? 'label' : ''}`}>
                {textArray[index]}
            </span>
        );
    }
    return (
        <div class={`dialog-layout-${component.layoutNumber} dialog-element`}>
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            {textArray[1] && textArray[2] ? (
                <div class="section-1">
                    <div class="text label">{textArray[1]}</div>
                    <div class="text ">{textArray[2]}</div>
                </div>
            ) : null}
            <div class="section-2">{divs}</div>
        </div>
    );
}
/**
 * 3rd dialog card layout, buttons and text lines, used for debug window.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create3(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Combobox list
    const comboboxArray: GenericObject[] = component.data['combobox']
        ? component.data['combobox']
        : [];
    //Slot list
    const slots: Array<HTMLElement> = Array.prototype.slice.call(
        component.rootElement.children,
        0
    );
    //Textfield list
    const textfieldArray: GenericObject[] = component.data['textfield']
        ? component.data['textfield']
        : [];
    return (
        <div
            class={`dialog-layout-${component.layoutNumber} ${KupCardCSSClasses.DIALOG_UNRESIZABLE}`}
        >
            <div>
                {buttonArray.length > 0 || textfieldArray.length > 0 ? (
                    <div class="section-1">
                        <FImage
                            id={KupCardIds.DRAG_HANDLE}
                            resource="drag_handle"
                            sizeX="32px"
                            sizeY="32px"
                        />
                        {compList(buttonArray, 'button')}
                        {compList(textfieldArray, 'textfield')}
                        {compList(comboboxArray, 'combobox')}
                    </div>
                ) : null}
                {slots.length > 0 ? (
                    <div class="section-2">{compList(slots, 'slot')}</div>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 4th dialog card layout, used to display information with data table.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create4(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Dialog title
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    //Datatable
    const datatableArray: GenericObject[] = component.data['datatable']
        ? component.data['datatable']
        : [];
    return (
        <div class={`dialog-layout-${component.layoutNumber} dialog-element`}>
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            {datatableArray[0] && buttonArray[0] && buttonArray[1] ? (
                <div class="section-1">
                    <kup-button
                        {...buttonArray[0]}
                        id={KupCardIds.PREVIOUS_ROW}
                        onkup-button-click={() => prevButton(component)}
                        title={dom.ketchup.language.translate(
                            KupLanguageRow.PREVIOUS
                        )}
                    />
                    <kup-button
                        {...buttonArray[1]}
                        id={KupCardIds.NEXT_ROW}
                        onkup-button-click={() => nextButton(component)}
                        title={dom.ketchup.language.translate(
                            KupLanguageRow.NEXT
                        )}
                    />
                </div>
            ) : null}
            {datatableArray[0] ? (
                <div class="section-2">
                    <kup-data-table
                        id="datatable1"
                        {...datatableArray[0]}
                    ></kup-data-table>
                </div>
            ) : null}
        </div>
    );
}
/**
 * 5th dialog card layout, buttons and text lines, used for debug window.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create5(component: KupCard): VNode {
    //Slot list
    const slots: Array<HTMLElement> = Array.prototype.slice.call(
        component.rootElement.children,
        0
    );
    //List
    const listArray: GenericObject[] = component.data['list']
        ? component.data['list']
        : [];
    //Dialog title
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div
            class={`dialog-layout-${component.layoutNumber} ${KupCardCSSClasses.DIALOG_UNRESIZABLE}`}
        >
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            <div>
                {slots.length > 0 ? (
                    <div class="section-1">{compList(slots, 'slot')}</div>
                ) : null}
                {listArray[0] ? (
                    <div class="section-2">
                        <kup-list id="list1" {...listArray[0]} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
/**
 * 6th dialog card layout, a datatable or a spinner in its place.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create6(component: KupCard): VNode {
    //Datatable
    const datatableArray: GenericObject[] = component.data['datatable']
        ? component.data['datatable']
        : [];
    //Dialog title
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    return (
        <div class={`dialog-layout-${component.layoutNumber}`}>
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            <div class="section-1">
                {datatableArray.length > 0 ? (
                    <kup-data-table
                        id="datatable1"
                        {...datatableArray[0]}
                    ></kup-data-table>
                ) : (
                    <kup-spinner active={true} dimensions="7px" layout={14} />
                )}
            </div>
        </div>
    );
}
/**
 * 7th dialog card layout, a raw slot.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create7(component: KupCard): VNode {
    //Dialog title
    const textArray: string[] =
        component.data && component.data['text'] ? component.data['text'] : [];
    //Slot list
    const slots: Array<HTMLElement> = Array.prototype.slice.call(
        component.rootElement.children,
        0
    );
    return (
        <div class={`dialog-layout-${component.layoutNumber}`}>
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            {slots.length > 0 ? compList(slots, 'slot') : null}
        </div>
    );
}
/**
 * 8th dialog card layout for fixed and draggable tooltip, a raw slot.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create8(component: KupCard): VNode {
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    const imageArray: GenericObject[] = component.data['image']
        ? component.data['image']
        : [];
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    const treeArray: GenericObject[] = component.data['tree']
        ? component.data['tree']
        : [];

    // Setting up currently visible view.
    const viewIndex: number = 1;

    const sectionOneArray: string[] = textArray.slice(0, 5);

    // Setting up section 2
    const sectionTwoArray: string[] = textArray.slice(5);
    const sectionTwoDetails: VNode[] = [];
    const labels: string[] = [];
    const values: string[] = [];
    for (let index = 0; index < sectionTwoArray.length; index++) {
        if (index % 2 === 0) {
            labels.push(sectionTwoArray[index]);
        } else {
            values.push(sectionTwoArray[index]);
        }
    }
    for (let index = 0; index < labels.length; index++) {
        sectionTwoDetails.push(
            <div class="detail-row">
                <div class="detail-row__label ellipsis">{labels[index]}</div>
                <div class="detail-row__value ellipsis">{values[index]}</div>
            </div>
        );
    }

    // Setting up buttons.
    const buttonsIds: string[] = [];
    const genericButtons: GenericObject[] = [];
    const isReservedID = (id: string) => {
        return (
            id === KupColumnMenuIds.BUTTON_OPEN_IN_NEW ||
            id === KupColumnMenuIds.BUTTON_SEARCH
        );
    };
    for (let index = 0; index < buttonArray.length; index++) {
        const button: GenericObject = buttonArray[index];
        if (button['id']) {
            buttonsIds.push(button['id']);
        }
        if (!isReservedID(button['id'])) {
            genericButtons.push(button);
        }
    }
    const createDropdown = () => {
        const props: Partial<KupDropdownButton> = {
            data: { 'kup-list': { data: [], showIcons: true } },
            dropdownOnly: true,
            icon: 'more_vert',
            styling: FButtonStyling.ICON,
        };
        for (let index = 5; index < genericButtons.length; index++) {
            const button: Partial<HTMLKupButtonElement> = genericButtons[index];
            props.data['kup-list'].data.push({
                ...button,
                value: button.title,
            });
        }
        return (
            <kup-dropdown-button
                {...props}
                id="options"
                title={dom.ketchup.language.translate(
                    KupLanguageGeneric.OPTIONS
                )}
            ></kup-dropdown-button>
        );
    };
    return (
        <div class={`dialog-layout-${component.layoutNumber}`}>
            <div id={KupCardIds.DRAG_HANDLE} class="drag-handle"></div>
            <div class="section-1">
                {imageArray[0] ? (
                    <FImage
                        id="image1"
                        {...imageArray[0]}
                        sizeX="44px"
                        sizeY="44px"
                    ></FImage>
                ) : (
                    <div class="sub-spinner">
                        <kup-spinner
                            active={true}
                            dimensions="7px"
                            layout={14}
                        />
                    </div>
                )}
                <div class="sub-1">
                    {textArray[0] ||
                    buttonsIds.includes(KupColumnMenuIds.BUTTON_OPEN_IN_NEW) ||
                    buttonsIds.includes(KupColumnMenuIds.BUTTON_SEARCH) ? (
                        <div class="top">
                            {textArray[0] ? (
                                <div class="title">
                                    <span
                                        class={`label ${KupCardCSSClasses.CLICKABLE_LINK}`}
                                        id="title-link"
                                    >
                                        {textArray[0]}
                                    </span>
                                </div>
                            ) : null}
                            {buttonsIds.includes(
                                KupColumnMenuIds.BUTTON_OPEN_IN_NEW
                            ) ||
                            buttonsIds.includes(
                                KupColumnMenuIds.BUTTON_SEARCH
                            ) ? (
                                <div class="buttons">
                                    {buttonsIds.includes(
                                        KupColumnMenuIds.BUTTON_OPEN_IN_NEW
                                    ) ? (
                                        <kup-button
                                            {...buttonArray.find(
                                                (x) =>
                                                    x.id ===
                                                    KupColumnMenuIds.BUTTON_OPEN_IN_NEW
                                            )}
                                        />
                                    ) : null}
                                    {buttonsIds.includes(
                                        KupColumnMenuIds.BUTTON_SEARCH
                                    ) ? (
                                        <kup-button
                                            {...buttonArray.find(
                                                (x) =>
                                                    x.id ===
                                                    KupColumnMenuIds.BUTTON_SEARCH
                                            )}
                                        />
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {sectionOneArray[1] && sectionOneArray[2] ? (
                        <div class="info">
                            <span class="label">{sectionOneArray[1]}</span>
                            <span class="value">{sectionOneArray[2]}</span>
                        </div>
                    ) : null}
                    {sectionOneArray[3] && sectionOneArray[4] ? (
                        <div class="info">
                            <span class="label">{sectionOneArray[3]}</span>
                            <span class="value">{sectionOneArray[4]}</span>
                        </div>
                    ) : null}
                </div>
            </div>
            <div class="section-2">
                <div
                    class={`${KupCardCSSClasses.CARD_VIEW} ${KupCardCSSClasses.VIEW_PREFIX}${viewIndex} ${KupCardCSSClasses.VISIBLE}`}
                >
                    <div class="info">
                        {sectionTwoDetails.length > 0
                            ? sectionTwoDetails
                            : null}
                    </div>
                </div>
                <div
                    class={`${KupCardCSSClasses.CARD_VIEW} ${
                        KupCardCSSClasses.VIEW_PREFIX
                    }${viewIndex + 1}`}
                >
                    {treeArray[0] ? (
                        <kup-tree class="kup-full-width" {...treeArray[0]} />
                    ) : null}
                </div>
            </div>
            {genericButtons.length > 0 ? (
                <div class="section-3">
                    {compList(genericButtons.slice(0, 5), 'button')}
                    {genericButtons.length > 5 ? createDropdown() : null}
                    {treeArray[0] ? (
                        <kup-button
                            title={dom.ketchup.language.translate(
                                KupLanguageGeneric.SHOW_ROW_OPTIONS
                            )}
                            id="view-selector"
                            icon="menu"
                        ></kup-button>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}
/**
 * Invoked by 4th layout to switch to the previous record of the original data table.
 * Reminder: data table inside 4th layout should be transposed and valid columns should be named with numbers (strings, but numerical).
 * @param {KupCard} component - Card component.
 */
function prevButton(component: KupCard): void {
    const root: ShadowRoot = component.rootElement.shadowRoot;
    let nextButton: HTMLKupButtonElement = null;
    let prevButton: HTMLKupButtonElement = null;
    let table: HTMLKupDataTableElement = null;
    let data: KupDataDataset = null;
    if (root) {
        table = root.querySelector('kup-data-table');
        nextButton = root.querySelector('#' + KupCardIds.NEXT_ROW);
        prevButton = root.querySelector('#' + KupCardIds.PREVIOUS_ROW);
        if (table) {
            data = table.data;
        }
    }
    if (data) {
        let visibleColumnIndex: number = getVisibleColumn(data);
        if (visibleColumnIndex) {
            const currColumn: KupDataColumn = data.columns[visibleColumnIndex];
            const prevColumn: KupDataColumn =
                data.columns[visibleColumnIndex - 1];
            const prevPrevColumn: KupDataColumn =
                data.columns[visibleColumnIndex - 2];
            if (!isNaN(parseInt(prevColumn.name))) {
                currColumn.visible = false;
                prevColumn.visible = true;
                if (isNaN(parseInt(prevPrevColumn.name))) {
                    prevButton.disabled = true;
                }
            }
            nextButton.disabled = false;
        }
        table.refresh();
    }
}
/**
 * Invoked by 4th layout to switch to the next record of the original data table.
 * Reminder: data table inside 4th layout should be transposed and valid columns should be named with numbers (strings, but numerical).
 * @param {KupCard} component - Card component.
 */
function nextButton(component: KupCard): void {
    const root: ShadowRoot = component.rootElement.shadowRoot;
    let nextButton: HTMLKupButtonElement = null;
    let prevButton: HTMLKupButtonElement = null;
    let table: HTMLKupDataTableElement = null;
    let data: KupDataDataset = null;
    if (root) {
        table = root.querySelector('kup-data-table');
        nextButton = root.querySelector('#' + KupCardIds.NEXT_ROW);
        prevButton = root.querySelector('#' + KupCardIds.PREVIOUS_ROW);
        if (table) {
            data = table.data;
        }
    }
    if (data) {
        let visibleColumnIndex: number = getVisibleColumn(data);
        if (visibleColumnIndex) {
            const currColumn: KupDataColumn = data.columns[visibleColumnIndex];
            const nextColumn: KupDataColumn =
                data.columns[visibleColumnIndex + 1];
            const nextNextColumn: KupDataColumn =
                data.columns[visibleColumnIndex + 2];
            if (nextColumn) {
                currColumn.visible = false;
                nextColumn.visible = true;
                if (!nextNextColumn) {
                    nextButton.disabled = true;
                }
            }
            prevButton.disabled = false;
        }
        table.refresh();
    }
}
/**
 * Returns the index of the first visible numerical column.
 * @param {KupDataDataset} data - Table data.
 */
function getVisibleColumn(data: KupDataDataset): number {
    for (let index = 0; index < data.columns.length; index++) {
        const column: KupDataColumn = data.columns[index];
        if (!isNaN(parseInt(column.name)) && column.visible) {
            return index;
        }
    }
    return null;
}
