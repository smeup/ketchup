import { h } from '@stencil/core/';
import {
    isBar,
    isButton,
    isChart,
    isCheckbox,
    isIcon,
    isVoCodver,
    isImage,
    isLink,
    isNumber,
    isProgressBar,
    isRadio,
} from '../object-utils';
import {
    Cell,
    Row,
    Column,
} from '../../components/kup-data-table/kup-data-table-declarations';

export function getCellShape(
    cell: Cell,
    row: Row,
    column: Column,
    value: string
) {
    let cellClass: Record<string, boolean> = {
        'cell-content': true,
        clickable: !!column.clickable,
    };
    let content: Element | String = value;
    let props: any = cell.data;
    if (isBar(cell.obj)) {
        if (props) {
            if (!props.sizeY) {
                props['sizeY'] = '26px';
                if (this.density === 'medium') {
                    props['sizeY'] = '36px';
                }
                if (this.density === 'wide') {
                    props['sizeY'] = '50px';
                }
            }
            content = <kup-image class="cell-bar" {...props} />;
        } else {
            content = undefined;
        }
    } else if (isButton(cell.obj)) {
        if (props) {
            content = (
                <kup-button
                    class="cell-button"
                    disabled={row.readOnly}
                    {...props}
                    onKupButtonClick={this.onJ4btnClicked.bind(
                        this,
                        row,
                        column,
                        cell
                    )}
                />
            );
        } else {
            content = undefined;
        }
    } else if (isChart(cell.obj)) {
        if (props) {
            content = <kup-chart {...props} />;
        } else {
            content = undefined;
        }
    } else if (isCheckbox(cell.obj)) {
        content = (
            <kup-checkbox
                disabled={row.readOnly}
                class="cell-checkbox"
                {...props}
            />
        );
    } else if (isIcon(cell.obj) || isVoCodver(cell.obj)) {
        if (props) {
            if (!props.sizeX) {
                props['sizeX'] = '18px';
            }
            if (!props.sizeY) {
                props['sizeY'] = '18px';
            }
            if (props.badgeData) {
                cellClass['has-padding'] = true;
            }
            content = <kup-image class="cell-icon" {...props} />;
        } else {
            content = undefined;
        }
    } else if (isImage(cell.obj)) {
        if (props) {
            if (!props.sizeX) {
                props['sizeX'] = 'auto';
            }
            if (!props.sizeY) {
                props['sizeY'] = 'var(--dtt_cell-image_max-height)';
            }
            if (props.badgeData) {
                cellClass['has-padding'] = true;
            }
            content = <kup-image class="cell-image" {...props} />;
        } else {
            content = undefined;
        }
    } else if (isLink(cell.obj)) {
        content = (
            <a href={value} target="_blank">
                {value}
            </a>
        );
    } else if (isNumber(cell.obj)) {
        if (content) {
            const cellValue = numeral(cell.obj.k).value();

            if (cellValue < 0) {
                cellClass['negative-number'] = true;
            }
        }
    } else if (isProgressBar(cell.obj)) {
        if (props) {
            content = <kup-progress-bar {...props} />;
        } else {
            content = undefined;
        }
    } else if (isRadio(cell.obj)) {
        if (props) {
            content = <kup-radio disabled={row.readOnly} {...props} />;
        } else {
            content = undefined;
        }
    } else {
        content = value;
    }

    return {
        cellContent: content,
        cellClass: cellClass,
    };
}
