import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

import { PaginatorMode } from './kup-paginator-declarations';

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
        return this.currentPage * this.perPage >= this.max;
    }

    private onPageChange(event: CustomEvent) {
        event.stopPropagation();

        if (event.detail.value) {
            this.kupPageChanged.emit({
                newPage: event.detail.value['id'],
            });
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
            this.kupRowsPerPageChanged.emit({
                newRowsPerPage: event.detail.value.id,
            });
        }
    }

    // render functions
    private getGoToPageItems(maxNumberOfPage: number) {
        const goToPageItems = [];

        for (let i = 1; i <= maxNumberOfPage; i++) {
            const item = {};
            item['value'] = i;
            item['text'] = i;
            goToPageItems.push(item);
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
                rowsPerPageItems.push({
                    text: i,
                    value: i,
                });
                i = i * 2;
            }

            // adding 'max' option
            rowsPerPageItems.push({
                text: this.max,
                value: this.max,
            });
        } else {
            rowsPerPageItems.push({
                text: this.perPage,
                value: this.perPage,
            });
        }

        return rowsPerPageItems;
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
            listId: 'LISTA',
            selectable: 'one-select',
        };

        let textfieldDataRows = {
            initialValue: this.perPage,
            label: 'Rows / page',
            trailingIcon: true,
        };
        let listDataRows = {
            data: rowsPerPageItems,
            listId: 'LISTA',
            selectable: 'one-select',
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
