import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    h,
} from '@stencil/core';

import { PaginatorMode } from './kup-paginator-declarations';
import { isNumber } from '../../utils/utils';
import { logLoad, logRender } from '../../utils/debug-manager';

@Component({
    tag: 'kup-paginator',
    styleUrl: 'kup-paginator.scss',
    shadow: true,
})
export class KupPaginator {
    @Element() rootElement: HTMLElement;

    @Prop() currentPage: number = 1;

    @Prop() max: number = 0;

    @Prop() mode: PaginatorMode = PaginatorMode.FULL;

    @Prop() perPage: number = 10;

    @Prop() selectedPerPage: number = 10;

    /**
     * When the current page change
     */
    @Event({
        eventName: 'kupPageChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupPageChanged: EventEmitter<{ newPage: number }>;

    /**
     * When the rows per page change
     */
    @Event({
        eventName: 'kupRowsPerPageChanged',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowsPerPageChanged: EventEmitter<{ newRowsPerPage: number }>;

    private isPrevPageDisabled() {
        return this.currentPage == 1;
    }

    private isNextPageDisabled() {
        return this.currentPage * this.selectedPerPage >= this.max;
    }

    private onPageChange(event: CustomEvent) {
        event.stopPropagation();
        if (event.detail.value) {
            if (isNumber(event.detail.value)) {
                const numberOfPages = Math.ceil(
                    this.max / this.selectedPerPage
                );
                let tmpNewPage: number = event.detail.value;
                if (tmpNewPage > numberOfPages) {
                    tmpNewPage = numberOfPages;
                }
                if (tmpNewPage < 1) {
                    tmpNewPage = 1;
                }
                this.kupPageChanged.emit({
                    newPage: tmpNewPage,
                });
            }
        }
    }

    private onPrevPage() {
        if (this.isPrevPageDisabled()) {
            return;
        }

        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage - 1,
        });
    }

    private onNextPage() {
        if (this.isNextPageDisabled()) {
            return;
        }

        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage + 1,
        });
    }

    private onRowsPerPage(event: CustomEvent) {
        event.stopPropagation();

        if (event.detail.value) {
            if (isNumber(event.detail.value)) {
                let tmpRowsPerPage: number = event.detail.value;
                if (tmpRowsPerPage > this.max) {
                    tmpRowsPerPage = this.max;
                }
                if (tmpRowsPerPage < 1) {
                    tmpRowsPerPage = 1;
                }
                this.kupRowsPerPageChanged.emit({
                    newRowsPerPage: tmpRowsPerPage,
                });
            }
        }
    }

    // render functions
    private getGoToPageItems(maxNumberOfPage: number) {
        const goToPageItems = [];

        for (let i = 1; i <= maxNumberOfPage; i++) {
            let selected = i == this.currentPage;
            goToPageItems.push({
                text: i,
                value: i,
                selected: selected,
            });
        }

        return goToPageItems;
    }

    private getRowsPerPageItems() {
        const rowsPerPageItems = [];

        /*if (this.currentPage !== this.max) {*/
        let i = this.perPage;

        if (i === 0) {
            return rowsPerPageItems;
        }

        while (i < this.max) {
            let selected = i == this.selectedPerPage;
            rowsPerPageItems.push({
                text: i,
                value: i,
                selected: selected,
            });
            i = i * 2;
        }

        let selected = this.max == this.selectedPerPage;
        // adding 'max' option
        rowsPerPageItems.push({
            text: this.max,
            value: this.max,
            selected: selected,
        });
        /*} else {
            rowsPerPageItems.push({
                text: this.perPage,
                value: this.perPage,
                selected: true,
            });
        }*/

        return rowsPerPageItems;
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        logRender(this, true);
    }

    render() {
        const maxNumberOfPage = Math.ceil(this.max / this.selectedPerPage);

        const goToPageItems = this.getGoToPageItems(maxNumberOfPage);

        const rowsPerPageItems = this.getRowsPerPageItems();

        let textfieldDataPage = {
            initialValue: this.currentPage,
            label: 'Page',
            trailingIcon: true,
            helper: `of ${maxNumberOfPage}`,
            helperWhenFocused: true,
        };
        let listDataPage = {
            data: goToPageItems,
            selectable: true,
        };

        let textfieldDataRows = {
            initialValue: this.perPage,
            label: 'Rows / page',
            trailingIcon: true,
            helper: `Total rows: ${this.max}`,
            helperWhenFocused: true,
        };
        let listDataRows = {
            data: rowsPerPageItems,
            selectable: true,
        };

        let dataPageSelector = {
            'text-field': textfieldDataPage,
            list: listDataPage,
        };
        let dataRowsSelector = {
            'text-field': textfieldDataRows,
            list: listDataRows,
        };
        let compCreated = (
            <div id="paginator">
                <div class="align-left">
                    <div class="nav-section">
                        <kup-button
                            icon="chevron_left"
                            disabled={this.isPrevPageDisabled()}
                            class="prev-page"
                            onKupButtonClick={() => this.onPrevPage()}
                        ></kup-button>
                        <kup-combobox
                            class="page-selector"
                            data={dataPageSelector}
                            onKupComboboxItemClick={(e) => this.onPageChange(e)}
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onPageChange(e)
                            }
                            onKupComboboxBlur={(e) => this.onPageChange(e)}
                        />
                        <kup-button
                            icon="chevron_right"
                            disabled={this.isNextPageDisabled()}
                            class="next-page"
                            onKupButtonClick={() => this.onNextPage()}
                        ></kup-button>
                    </div>
                    <div class="tot-section">
                        <slot name="more-results" />
                        <kup-combobox
                            class="rows-selector"
                            data={dataRowsSelector}
                            onKupComboboxItemClick={(e) =>
                                this.onRowsPerPage(e)
                            }
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onRowsPerPage(e)
                            }
                            onKupComboboxBlur={(e) => this.onRowsPerPage(e)}
                        />
                        <slot name="right" />
                    </div>
                </div>

                <div class="align-left"></div>
            </div>
        );

        return compCreated;
    }
}
