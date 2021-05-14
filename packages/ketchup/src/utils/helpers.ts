import { TooltipRelatedObject } from '../components/kup-tooltip/kup-tooltip-declarations';
import { Cell } from '../components/kup-data-table/kup-data-table-declarations';
import { KupTooltip } from '../components/kup-tooltip/kup-tooltip';

export function setTooltip(
    event: MouseEvent,
    rowId: string,
    cell: Cell,
    tooltip: KupTooltip
) {
    if (event != null) {
        event.stopPropagation();
    }
    if (tooltip == null) {
        return;
    }
    let related: TooltipRelatedObject = null;
    if (cell != null) {
        related = {} as TooltipRelatedObject;
        related.element = event.target as HTMLElement;
        related.object = cell;
        if (rowId != null) {
            related.rowId = rowId;
        }
    }

    let newValue = related;
    let oldValue = tooltip.relatedObject;
    if (newValue == null && oldValue == null) {
        return;
    }
    if (newValue != null && oldValue != null) {
        if (
            newValue.object == oldValue.object &&
            newValue.element == oldValue.element
        ) {
            return;
        }
    }
    tooltip.setTooltipInfo(related);
}

export function unsetTooltip(tooltip: KupTooltip) {
    if (tooltip == null) {
        return;
    }
    tooltip.unsetTooltipInfo();
}
