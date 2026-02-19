import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import {
    AbsoluteTblPositioningData,
    KupInputPanelLayout,
} from './kup-input-panel-declarations';

// General INP constants
export const ROW_HEIGHT = 20; // Used for the ACTUAL row height calculations (no spacing)
export const SPACED_ROW_HEIGHT = 22; // Used for the INP total height calculations (accounting for row spacing)
export const LEFT_MULTIPLIER = 1.15; // Multiplier commanding the left attribute "scale"
export const ADDITIONAL_WIDTH_WITH_ICON = 18; // Additional width added to account for the shape's icon (ACP,CAL,CMB)

// Char sizes
export const FONT_SIZE = 12; // Monospace font size of the INP
export const FONT_SIZE_TO_WIDTH_RATIO = 1.4; // FontSize to SingleCharWidth ratio
export const CHAR_WIDTH = FONT_SIZE / FONT_SIZE_TO_WIDTH_RATIO; // Used for field width and left attribute

export const getAbsoluteWidth = (
    length: number,
    graphicShapeHasIcon?: boolean
) => {
    if (length == 0) {
        return CHAR_WIDTH / 2;
    }

    if (!length) {
        return null;
    }

    if (length === 1) {
        return (
            1.5 * CHAR_WIDTH +
            (graphicShapeHasIcon ? ADDITIONAL_WIDTH_WITH_ICON : 0)
        );
    }

    return (
        length * CHAR_WIDTH +
        (graphicShapeHasIcon ? ADDITIONAL_WIDTH_WITH_ICON : 0) +
        4 // Additional size to include padding
    );
};

export const getLabelAbsoluteWidth = (length: number) => {
    if (length == 0) {
        return CHAR_WIDTH / 2;
    }

    if (!length) {
        return null;
    }

    if (length === 1) {
        return 1.5 * CHAR_WIDTH;
    }

    return length * CHAR_WIDTH;
};

export const getAbsoluteHeight = (height: number) => {
    if (!height) {
        return null;
    }

    return height * ROW_HEIGHT;
};

export const getAbsoluteTop = (
    row: number,
    absoluteTblPositioningData?: AbsoluteTblPositioningData
) => {
    if (!row) {
        return null;
    }

    if (row > absoluteTblPositioningData?.absoluteRow) {
        const tableTop =
            (absoluteTblPositioningData?.absoluteRow - 1) * ROW_HEIGHT +
            (absoluteTblPositioningData?.absoluteRow - 1) * 2;
        const tableHeight = getAbsoluteHeight(
            absoluteTblPositioningData.absoluteHeight
        );
        const tableFinalRow =
            absoluteTblPositioningData?.absoluteRow +
            absoluteTblPositioningData?.absoluteHeight -
            1;
        return tableTop + tableHeight + (row - tableFinalRow - 1) * ROW_HEIGHT;
    }
    return (row - 1) * ROW_HEIGHT + (row - 1) * 2;
};

export const getAbsoluteLeft = (col: number) => {
    if (!col) {
        return null;
    }

    return (col - 1) * 10 * LEFT_MULTIPLIER;
};

export const getInpComponentHeight = (layout: KupInputPanelLayout) => {
    if (!layout) return 0;

    const tblHeight =
        layout.sections
            .flatMap((section) => section.content)
            .find((field) => field.shape === FCellShapes.TABLE)
            ?.absoluteHeight ?? null;

    const maxRow = Math.max(
        0,
        ...layout.sections.flatMap((section) =>
            section.content.map(
                // -1 because if the absolute height is 1 the sum will result in a field with height 2
                // A field with absoluteRow 1 and height 1 is only on row 1, not 1+1
                (field) => field.absoluteRow + (field.absoluteHeight - 1)
            )
        )
    );

    if (!tblHeight) {
        // No TBL, all the rows have height 22
        return maxRow * SPACED_ROW_HEIGHT;
    } else {
        // There is a TBL, with a rows height of 20
        // All the non-TBL rows still have height 22
        return (
            (maxRow - tblHeight) * SPACED_ROW_HEIGHT + tblHeight * ROW_HEIGHT
        );
    }
};

export const graphicShapeHasIcon = (shape: string) => {
    return (
        shape === FCellShapes.AUTOCOMPLETE ||
        shape === FCellShapes.COMBOBOX ||
        shape === FCellShapes.DATE
    );
};
