import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
    tag: 'kup-paginator',
    styleUrl: 'ketchup-paginator.scss',
    shadow: true,
})
export class KetchupPaginator {
    @Prop()
    max = 0;

    @Prop()
    perPage = 10;

    @Prop()
    selectedPerPage = 10;

    @Prop()
    currentPage = 1;

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

    private onGoToPage({ target }) {
        this.kupPageChanged.emit({
            newPage: parseInt(target.value),
        });
    }

    private onRowsPerPage({ target }) {
        this.kupRowsPerPageChanged.emit({
            newRowsPerPage: parseInt(target.value),
        });
    }

    // render functions
    private getGoToPageOptions(maxNumberOfPage: number): JSX.Element[] {
        const goToPageOptions: JSX.Element[] = [];

        goToPageOptions.push(
            <option value="1" selected={this.currentPage === 1}>
                1
            </option>
        );

        for (let i = 2; i <= maxNumberOfPage; i++) {
            goToPageOptions.push(
                <option value={i} selected={this.currentPage === i}>
                    {i}
                </option>
            );
        }

        return goToPageOptions;
    }

    private getRowsPerPageOptions(): JSX.Element[] {
        const rowsPerPageOptions: JSX.Element[] = [];

        if (this.currentPage != this.max) {
            let i = this.perPage;

            if (i === 0) {
                return rowsPerPageOptions;
            }

            while (i < this.max) {
                rowsPerPageOptions.push(
                    <option value={i} selected={i === this.selectedPerPage}>
                        {i}
                    </option>
                );
                i = i * 2;
            }

            // adding 'max' option
            rowsPerPageOptions.push(
                <option value={this.max} selected={this.max === this.perPage}>
                    {this.max}
                </option>
            );
        } else {
            rowsPerPageOptions.push(
                <option value={this.perPage} selected>
                    {this.perPage}
                </option>
            );
        }

        return rowsPerPageOptions;
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

        const goToPageOptions = this.getGoToPageOptions(maxNumberOfPage);

        const rowsPerPageOptions = this.getRowsPerPageOptions();

        return (
            <div id="paginator">
                <div class="align-left">
                    Pagina
                    <span class="prev-page">
                        <icon
                            className={prevPageClassName}
                            onclick={() => this.onPrevPage()}
                        />
                    </span>
                    <select onChange={(e) => this.onGoToPage(e)}>
                        {goToPageOptions}
                    </select>
                    <span class="next-page">
                        <icon
                            className={nextPageClassName}
                            onclick={() => this.onNextPage()}
                        />
                    </span>
                    Di {maxNumberOfPage}
                </div>

                <div class="align-right">
                    <span class="nextPageGroup">
                        Numero risultati: {this.max}
                    </span>
                    Mostra
                    <select onChange={(e) => this.onRowsPerPage(e)}>
                        {rowsPerPageOptions}
                    </select>
                    righe per pagina
                </div>
            </div>
        );
    }
}
