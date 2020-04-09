import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

import { PaginatorMode } from './kup-paginator-declarations';
import { errorLogging } from '../../utils/error-logging';
import { isNumber } from '../../utils/utils';

@Component({
    tag: 'kup-paginator',
    styleUrl: 'kup-paginator.scss',
    shadow: true,
})
export class KupPaginator {
    @Prop()
    max = 0;

    @Prop()
    perPage = 10;

    @Prop()
    selectedPerPage = 10;

    @Prop()
    currentPage = 1;

    @Prop({ reflect: true })
    mode: PaginatorMode = PaginatorMode.FULL;

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

        if (this.currentPage !== this.max) {
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
        } else {
            rowsPerPageItems.push({
                text: this.perPage,
                value: this.perPage,
                selected: true,
            });
        }

        return rowsPerPageItems;
    }

    log(methodName: string, msg: string) {
        errorLogging('kup-paginator', methodName + '()' + ' - ' + msg, 'log');
    }

    render() {
        let prevPageClassName = 'mdi mdi-chevron-left';
        if (this.isPrevPageDisabled()) {
            prevPageClassName += ' disabled';
        }

        let nextPageClassName = 'mdi mdi-chevron-right';
        if (this.isNextPageDisabled()) {
            nextPageClassName += ' disabled';
        }

        const maxNumberOfPage = Math.ceil(this.max / this.selectedPerPage);

        const goToPageItems = this.getGoToPageItems(maxNumberOfPage);

        const rowsPerPageItems = this.getRowsPerPageItems();

        let textfieldDataPage = {
            initialValue: this.currentPage,
            label: 'Page',
            trailingIcon: true,
        };
        let listDataPage = {
            data: goToPageItems,
            selectable: true,
        };

        let textfieldDataRows = {
            initialValue: this.perPage,
            label: 'Rows / page',
            trailingIcon: true,
        };
        let listDataRows = {
            data: rowsPerPageItems,
            selectable: true,
        };

        return (
            <div id="paginator">
                <div class="align-left">
                    <div class="nav-section">
                        <span class="prev-page">
                            <icon
                                className={prevPageClassName}
                                onclick={() => this.onPrevPage()}
                            />
                        </span>
                        <kup-combobox
                            textfieldData={textfieldDataPage}
                            listData={listDataPage}
                            onKupComboboxItemClick={(e) => this.onPageChange(e)}
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onPageChange(e)
                            }
                        />
                        <span class="next-page">
                            <icon
                                className={nextPageClassName}
                                onclick={() => this.onNextPage()}
                            />
                        </span>
                    </div>
                    <div class="tot-section">
                        <span>Righe:</span>
                        <slot name="more-results" />
                        <kup-combobox
                            textfieldData={textfieldDataRows}
                            listData={listDataRows}
                            onKupComboboxItemClick={(e) =>
                                this.onRowsPerPage(e)
                            }
                            onKupComboboxTextFieldSubmit={(e) =>
                                this.onRowsPerPage(e)
                            }
                        />
                        <slot name="right" />
                        <span class="nextPageGroup">di {this.max}</span>
                    </div>
                </div>

                <div class="align-left"></div>
            </div>
        );
    }
}
