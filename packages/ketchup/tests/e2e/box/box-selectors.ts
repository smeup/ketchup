const baseSelector = 'kup-box >>> ';

export const containerSelector = baseSelector + '#box-container';

export const boxWrapperSelector = containerSelector + ' .box-wrapper';

export const boxSelector = boxWrapperSelector + ' .box';

export const filterSelector =
    baseSelector + '#global-filter kup-text-field >>> input';

export const sortSelector = baseSelector + '#sort-panel kup-combobox';
