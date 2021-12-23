import { FunctionalComponent, h } from '@stencil/core';
import { KupListData } from '../../components/kup-list/kup-list-declarations';
import {
    KupLanguagePage,
    KupLanguageRow,
} from '../../utils/kup-language/kup-language-declarations';
import { KupDom } from '../../utils/kup-manager/kup-manager-declarations';
import { FButton } from '../f-button/f-button';
import type { FPaginatorProps } from './f-paginator-declarations';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FPaginator: FunctionalComponent<FPaginatorProps> = (
    props: FPaginatorProps
) => {
    const maxNumberOfPage = Math.ceil(props.max / props.perPage);
    const pageItems = getPageItems(props, maxNumberOfPage);
    const rowsPerPageItems = getRowsItems(props);
    const dataPageSelector = {
        'kup-list': {
            data: pageItems,
        },
        'kup-text-field': {
            label: dom.ketchup.language.translate(KupLanguagePage.PAGE),
            helper:
                dom.ketchup.language.translate(KupLanguagePage.TOTAL) +
                `: ${maxNumberOfPage}`,
            helperWhenFocused: true,
            inputType: 'number',
            max: maxNumberOfPage,
            min: 1,
        },
    };
    const dataRowsSelector = {
        'kup-list': {
            data: rowsPerPageItems,
        },
        'kup-text-field': {
            label:
                dom.ketchup.language.translate(KupLanguageRow.ROWS) +
                ' / ' +
                dom.ketchup.language.translate(KupLanguagePage.PAGE),
            helper:
                dom.ketchup.language.translate(KupLanguageRow.TOTAL) +
                `: ${props.max}`,
            helperWhenFocused: true,
            inputType: 'number',
            max: props.max,
            min: 1,
        },
    };
    return (
        <div
            class={`f-paginator ${props.mode ? props.mode : ''} ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            <div class="align-left">
                <div class="nav-section">
                    <FButton
                        icon="chevron_left"
                        disabled={isPrevPageDisabled(props)}
                        wrapperClass="prev-page"
                        onClick={props.onPrevPage}
                    />
                    <kup-combobox
                        class="page-selector"
                        data={dataPageSelector}
                        initialValue={props.currentPage.toString()}
                        onkup-combobox-change={props.onPageChange}
                    />
                    <FButton
                        icon="chevron_right"
                        disabled={isNextPageDisabled(props)}
                        wrapperClass="next-page"
                        onClick={props.onNextPage}
                    />
                </div>
                <div class="tot-section">
                    <slot name="more-results" />
                    <kup-combobox
                        class="rows-selector"
                        data={dataRowsSelector}
                        initialValue={props.perPage.toString()}
                        onkup-combobox-change={props.onRowsChange}
                    />
                    <slot name="right" />
                </div>
            </div>
        </div>
    );
};

function getPageItems(props: FPaginatorProps, maxNumberOfPage: number) {
    const pageItems: KupListData[] = [];

    for (let i = 1; i <= maxNumberOfPage; i++) {
        const selected = i == props.currentPage;
        pageItems.push({
            text: i.toString(),
            value: i.toString(),
            selected: selected,
        });
    }

    return pageItems;
}

function getRowsItems(props: FPaginatorProps) {
    const rowsPerPageItems: KupListData[] = [];
    let i = props.perPage;

    if (i === 0) {
        return rowsPerPageItems;
    }

    while (i < props.max) {
        const selected = i == props.perPage;
        rowsPerPageItems.push({
            text: i.toString(),
            value: i.toString(),
            selected: selected,
        });
        i = i * 2;
    }

    const selected = props.max == props.perPage;
    rowsPerPageItems.push({
        text: props.max.toString(),
        value: props.max.toString(),
        selected: selected,
    });

    return rowsPerPageItems;
}

function isNextPageDisabled(props: FPaginatorProps) {
    return props.currentPage * props.perPage >= props.max;
}

function isPrevPageDisabled(props: FPaginatorProps) {
    return props.currentPage == 1;
}
