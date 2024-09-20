const CHAR_WIDTH = 12;
const ROW_HEIGHT = 22;

export const getAbsoluteWidth = (length: number) => {
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

export const getAbsoluteTop = (row: number) => {
    if (!row) {
        return null;
    }

    return row * ROW_HEIGHT;
};

export const getAbsoluteLeft = (col: number) => {
    if (!col) {
        return null;
    }

    return col * CHAR_WIDTH;
};
