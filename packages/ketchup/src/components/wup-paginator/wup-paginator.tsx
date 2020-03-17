import {
    Component,
    Event,
    EventEmitter,
    Prop,
    h,
    Element,
    Host,
} from '@stencil/core';

import { ComboItem } from '../kup-combo/kup-combo-declarations';
import { PaginatorMode } from './wup-paginator-declarations';

@Component({
    tag: 'wup-paginator',
    styleUrl: 'wup-paginator.scss',
    shadow: true,
})
export class WupPaginator {
    @Element() rootElement: HTMLElement;

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
    private getGoToPageItems(maxNumberOfPage: number): ComboItem[] {
        const goToPageItems: ComboItem[] = [];

        for (let i = 1; i <= maxNumberOfPage; i++) {
            const item: ComboItem = {};
            item['id'] = i;
            goToPageItems.push(item);
        }

        return goToPageItems;
    }

    private getRowsPerPageItems(): ComboItem[] {
        const rowsPerPageItems: ComboItem[] = [];

        if (this.currentPage !== this.max) {
            let i = this.perPage;

            if (i === 0) {
                return rowsPerPageItems;
            }

            while (i < this.max) {
                rowsPerPageItems.push({
                    id: i,
                });
                i = i * 2;
            }

            // adding 'max' option
            rowsPerPageItems.push({
                id: this.max,
            });
        } else {
            rowsPerPageItems.push({
                id: this.perPage,
            });
        }

        return rowsPerPageItems;
    }

    //---- Lifecycle hooks ----

    componentWillRender() {}

    // TODO: da modificare metodo
    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            /**
            const component = MDCCheckbox.attachTo(
                root.querySelector('.mdc-checkbox')
            );
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field')
            );
            formField.input = component;
            */
        }
    }

    // TODO: da modificare metodo render()
    render() {
        let formClass: string = 'mdc-form-field';
        let widgetClass: string = 'align-left';

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

        return (
            <Host>
                <div id="paginator">
                    <div class={formClass}>
                        <div class={widgetClass}>
                            <div class="nav-section">
                                <span class="prev-page">
                                    <icon
                                        className={prevPageClassName}
                                        onclick={() => this.onPrevPage()}
                                    />
                                </span>
                                <kup-combo
                                    usePortal
                                    items={goToPageItems}
                                    isFilterable={false}
                                    initialValue={{
                                        id: this.currentPage,
                                    }}
                                    onKetchupComboSelected={(e) =>
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
                                <kup-combo
                                    usePortal
                                    items={rowsPerPageItems}
                                    isFilterable={false}
                                    initialValue={{
                                        id: this.perPage,
                                    }}
                                    onKetchupComboSelected={(e) =>
                                        this.onRowsPerPage(e)
                                    }
                                />
                                <slot name="right" />
                                <span class="nextPageGroup">di {this.max}</span>
                            </div>
                        </div>

                        <div class="align-left"></div>
                    </div>
                </div>
            </Host>
        );
    }
}
