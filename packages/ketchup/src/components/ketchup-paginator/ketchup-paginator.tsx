import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Watch,
    State,
} from '@stencil/core';

@Component({
    tag: 'kup-paginator',
    styleUrl: 'ketchup-paginator.scss',
    shadow: true,
})
export class KetchupPaginator {
    @Prop()
    private max = 0;

    @Prop()
    private perPage = 10;

    @Prop()
    private currentPage = 1;

    @State()
    private currentPerPage = 0;

    @Watch('perPage')
    perPageHandler(newValue: number) {
        this.currentPerPage = newValue;
    }

    // lifecycle hooks
    componentWillLoad() {
        this.perPageHandler(this.perPage);
    }

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
        return this.currentPage * this.currentPerPage >= this.max;
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
        this.currentPerPage = parseInt(target.value);

        this.kupRowsPerPageChanged.emit({
            newRowsPerPage: this.currentPerPage,
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
                    <option value={i} selected={i === this.currentPerPage}>
                        {i}
                    </option>
                );
                i = i * 2;
            }

            // adding 'max' option
            rowsPerPageOptions.push(
                <option
                    value={this.max}
                    selected={this.max === this.currentPerPage}
                >
                    {this.max}
                </option>
            );
        } else {
            rowsPerPageOptions.push(
                <option value={this.currentPerPage} selected>
                    {this.currentPerPage}
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

        const maxNumberOfPage = Math.ceil(this.max / this.currentPerPage);

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
