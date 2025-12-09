import { FunctionalComponent, h } from '@stencil/core';
import {
    ItemsDisplayMode,
    KupListNode,
} from '../../components/kup-list/kup-list-declarations';
import {
    KupLanguageGeneric,
    KupLanguagePage,
    KupLanguageRow,
} from '../../managers/kup-language/kup-language-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { FButton } from '../f-button/f-button';
import { FButtonStyling } from '../f-button/f-button-declarations';
import { FPaginatorMode, FPaginatorProps } from './f-paginator-declarations';
import { KupComponentSizing } from '../../types/GenericTypes';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FPaginator: FunctionalComponent<FPaginatorProps> = (
    props: FPaginatorProps
) => {
    if (!props.perPage) {
        props.perPage = 1000;
    }

    if (props.perPage > props.max) {
        props.perPage = props.max;
    }
    const maxNumberOfPage = Math.ceil(props.max / props.perPage);
    const pageItems = getPageItems(props, maxNumberOfPage);
    const rowsPerPageItems = getRowsItems(props);
    const dataPageSelector = {
        'kup-list': {
            data: pageItems,
            DescrMode: ItemsDisplayMode.CODE,
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
            size: 5,
        },
    };
    const dataRowsSelector = {
        'kup-list': {
            data: rowsPerPageItems,
            DescrMode: ItemsDisplayMode.CODE,
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
            size: 5,
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
            {props.onLoadMore ? (
                <FButton
                    icon="plus"
                    onClick={props.onLoadMore}
                    label={dom.ketchup.language.translate(
                        KupLanguageGeneric.LOAD_MORE
                    )}
                    sizing={KupComponentSizing.SMALL}
                    styling={FButtonStyling.FLAT}
                    wrapperClass="load-more-button kup-neutral"
                />
            ) : null}
            <kup-combobox
                class="rows-selector"
                data={dataRowsSelector}
                DescrMode={ItemsDisplayMode.CODE}
                initialValue={props.perPage.toString()}
                initialValueDecode={props.perPage.toString()}
                onkup-combobox-change={props.onRowsChange}
            />
            <div class="page-wrapper">
                <div class="page-selector-wrapper">
                    <kup-combobox
                        class="page-selector"
                        data={dataPageSelector}
                        DescrMode={ItemsDisplayMode.CODE}
                        initialValue={props.currentPage.toString()}
                        initialValueDecode={props.currentPage.toString()}
                        onkup-combobox-change={props.onPageChange}
                    />
                    {props.showMaxPages ? (
                        <div class="max-page-wrapper">
                            <label htmlFor="page-selector">
                                {'/ ' + maxNumberOfPage}
                            </label>
                        </div>
                    ) : null}
                </div>
                <div class="arrow-wrapper">
                    {props.mode !== FPaginatorMode.SIMPLE ? (
                        <FButton
                            icon="chevron_left"
                            disabled={isPrevPageDisabled(props)}
                            onClick={props.onPrevPage}
                            sizing={KupComponentSizing.SMALL}
                            styling={FButtonStyling.FLAT}
                            wrapperClass="kup-neutral prev-page"
                        />
                    ) : null}
                    {props.mode !== FPaginatorMode.SIMPLE ? (
                        <FButton
                            icon="chevron_right"
                            disabled={isNextPageDisabled(props)}
                            onClick={props.onNextPage}
                            sizing={KupComponentSizing.SMALL}
                            styling={FButtonStyling.FLAT}
                            wrapperClass="kup-neutral next-page"
                        />
                    ) : null}
                </div>
            </div>
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
    const max = Math.min(props.max, props.maxRowsPerPage);
    let i = props.perPage;

    if (i === 0) {
        return rowsPerPageItems;
    }

    while (i < max) {
        const selected = i == props.perPage;
        rowsPerPageItems.push({
            id: i.toString(),
            selected: selected,
            value: i.toString(),
        });
        i = i * 2;
    }

    const selected = max == props.perPage;
    rowsPerPageItems.push({
        id: max.toString(),
        selected: selected,
        value: max.toString(),
    });

    return rowsPerPageItems;
}

function isNextPageDisabled(props: FPaginatorProps) {
    return props.currentPage * props.perPage >= props.max;
}

function isPrevPageDisabled(props: FPaginatorProps) {
    return props.currentPage == 1;
}
