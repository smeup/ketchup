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
export const FONT_SIZE_TO_WIDTH_RATIO = 1.6; // FontSize to SingleCharWidth ratio
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
        return 1.5 * CHAR_WIDTH;
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

export const getInpComponentAbsoluteHeight = (layout: KupInputPanelLayout) => {
    let inpRowHeight = 0;
    layout.sections.forEach((section) => {
        section.content.forEach((layoutField) => {
            if (layoutField.absoluteRow > inpRowHeight) {
                inpRowHeight =
                    layoutField.absoluteRow +
                    (layoutField.absoluteHeight > 1
                        ? layoutField.absoluteHeight
                        : 0);
            }
        });
    });
    return inpRowHeight;
};

export const graphicShapeHasIcon = (shape: string) => {
    return (
        shape === FCellShapes.AUTOCOMPLETE ||
        shape === FCellShapes.COMBOBOX ||
        shape === FCellShapes.DATE
    );
};
