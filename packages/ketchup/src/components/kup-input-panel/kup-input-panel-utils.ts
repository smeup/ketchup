import {
    AbsoluteTblPositioningData,
    KupInputPanelLayout,
} from './kup-input-panel-declarations';

// General INP constants
export const FONT_SIZE = 12; // Monospace font size of the INP
export const CHAR_WIDTH = 10; // Used for field width and left attribute
export const ROW_HEIGHT = 20; // Used for the ACTUAL row height calculations (no spacing)
export const SPACED_ROW_HEIGHT = 22; // Used for the INP total height calculations (accounting for row spacing)

// LABEL SIZES
export const FONT_SIZE_TO_WIDTH_RATIO = 1.666666666666667; // FontSize to SingleCharWidth ratio
export const SINGLE_CHAR_WIDTH = FONT_SIZE / FONT_SIZE_TO_WIDTH_RATIO; // Single monospace char width

// INP CONSTANTS FOR GRAPHIC FORMs
export const LEFT_MULTIPLIER = 1.19;
export const GRAPHIC_FORM_WIDTH_MULTIPLIER = 1.35;

export const getAbsoluteWidth = (length: number, isGraphicForm?: boolean) => {
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
        length *
        CHAR_WIDTH *
        (isGraphicForm ? GRAPHIC_FORM_WIDTH_MULTIPLIER : 1)
    );
};

export const getLabelAbsoluteWidth = (length: number) => {
    if (length == 0) {
        return SINGLE_CHAR_WIDTH / 2;
    }

    if (!length) {
        return null;
    }

    if (length === 1) {
        return 1.5 * SINGLE_CHAR_WIDTH;
    }

    return length * SINGLE_CHAR_WIDTH;
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

    return (col - 1) * CHAR_WIDTH * LEFT_MULTIPLIER;
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

export const isGraphicForm = (shape: string) => {
    return shape === 'ACP' || shape === 'CMB';
};
