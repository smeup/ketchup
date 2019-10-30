import {h} from '@stencil/core';
import {Cell} from '../kup-data-table/kup-data-table-declarations';
import numeral from 'numeral';
import {toKebabCase} from "../../utils/utils";

/**
 * These are the camelCase javascript suffixes of the CSS vars of kup-progress-bar.
 * They always must be equal to those you can find inside the file kup-progress-bar.scss in the first section,
 * save for the prefix (--kup-pb_), which will be added directly inside the [progressbarFromCellHelper function]{@link progressbarFromCellHelper}
 */
const progressbarCssVars = [
  'backgroundColor',
  'borderRadius',
  'foregroundColor',
  'textColor'
];

/**
 * Given a Cell object (from data-talbe or box component), a value and an optional isSmall flag,
 * returns the jsx to create a progressbar.
 * @param cell - The cell to render as a progressbar.
 * @param value - The value the progressbar must set.
 * @param [isSmall] - flag to specify if the progressbar must be rendered as small one.
 */
export function progressbarFromCellHelper(
  cell: Cell,
  value: string,
  isSmall: boolean = false,
) {
  const wrapperStyle = {};

  if (cell.config) {
    for (let i = 0; i < progressbarCssVars.length; i++) {
      if (cell.config[progressbarCssVars[i]]) {
        wrapperStyle['--kup-pb_' + toKebabCase(progressbarCssVars[i])] = cell.config[progressbarCssVars[i]];
      }
    }
  }

  return (
    <kup-progress-bar
      is-small={isSmall}
      labelText={cell.config && cell.config.hasOwnProperty('labelText') ? cell.config.labelText : null}
      hideLabel={cell.config ? !!cell.config.hideLabel : false}
      style={wrapperStyle}
      value={numeral(value).value()}
    />
  );
}
