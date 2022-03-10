import { FunctionalComponent, h } from '@stencil/core';
import { KupListNode } from '../../components/kup-list/kup-list-declarations';
import {
    KupLanguageGeneric,
    KupLanguagePage,
    KupLanguageRow,
} from '../../managers/kup-language/kup-language-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FButton } from '../f-button/f-button';
import { FButtonStyling } from '../f-button/f-button-declarations';
import { FPaginatorMode, FPaginatorProps } from './f-paginator-declarations';

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
            {props.mode !== FPaginatorMode.SIMPLE ? (
                <FButton
                    icon="chevron_left"
                    disabled={isPrevPageDisabled(props)}
                    onClick={props.onPrevPage}
                    wrapperClass="prev-page"
                />
            ) : null}
            <kup-combobox
                class="page-selector"
                data={dataPageSelector}
                initialValue={props.currentPage.toString()}
                onkup-combobox-change={props.onPageChange}
            />
            {props.mode !== FPaginatorMode.SIMPLE ? (
                <FButton
                    icon="chevron_right"
                    disabled={isNextPageDisabled(props)}
                    onClick={props.onNextPage}
                    wrapperClass="next-page"
                />
            ) : null}
            <kup-combobox
                class="rows-selector"
                data={dataRowsSelector}
                initialValue={props.perPage.toString()}
                onkup-combobox-change={props.onRowsChange}
            />
            {props.onLoadMore ? (
                <FButton
                    icon="plus"
                    onClick={props.onLoadMore}
                    label={dom.ketchup.language.translate(
                        KupLanguageGeneric.LOAD_MORE
                    )}
                    styling={FButtonStyling.FLAT}
                    wrapperClass="load-more-button"
                />
            ) : null}
        </div>
    );
};

function getPageItems(props: FPaginatorProps, maxNumberOfPage: number) {
    const pageItems: KupListNode[] = [];

    for (let i = 1; i <= maxNumberOfPage; i++) {
        const selected = i == props.currentPage;
        pageItems.push({
            id: i.toString(),
            selected: selected,
            value: i.toString(),
        });
    }

    return pageItems;
}

function getRowsItems(props: FPaginatorProps) {
    const rowsPerPageItems: KupListNode[] = [];
    let i = props.perPage;

    if (i === 0) {
        return rowsPerPageItems;
    }

    while (i < props.max) {
        const selected = i == props.perPage;
        rowsPerPageItems.push({
            id: i.toString(),
            selected: selected,
            value: i.toString(),
        });
        i = i * 2;
    }

    const selected = props.max == props.perPage;
    rowsPerPageItems.push({
        id: props.max.toString(),
        selected: selected,
        value: props.max.toString(),
    });

    return rowsPerPageItems;
}

function isNextPageDisabled(props: FPaginatorProps) {
    return props.currentPage * props.perPage >= props.max;
}

function isPrevPageDisabled(props: FPaginatorProps) {
    return props.currentPage == 1;
}
