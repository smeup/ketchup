import {
    Prop,
    Component,
    h,
    Event,
    EventEmitter,
    State,
    Watch,
} from '@stencil/core';

import { TableData, Row } from '../kup-data-table/kup-data-table-declarations';

import {
    SearchSelectionUpdatedEventDetail,
    SearchFilterSubmittedEventDetail,
} from './kup-search-declarations';

@Component({
    tag: 'kup-search',
    styleUrl: 'kup-search.scss',
    shadow: true,
})
// TODO: complete this component... actually is only a simplified version for tests inside form...
export class KupSearch {
    //--------------------------------------------------------------------------
    // PROPS
    // -------------------------------------------------------------------------

    @Prop() extra: any;

    @Prop() initialValue: string = '';

    /**
     * The field used to obtain value
     */
    @Prop() valueField: string;

    @Prop() data: TableData;

    @Prop() disabled: boolean = false;

    /**
     * When true it emits events or makes available callbacks useful to obtain and filter data.
     * When false the data inside data prop will be used and filtered in a static way.
     */
    @Prop() serverHandledFilter: boolean = false;

    /**    
    /** Function that can be invoked when the filter is submitted, but only if in serverHandledFilter mode. It returns the items filtered. 
     */
    @Prop() searchCallBackOnFilterSubmitted: (
        detail: SearchFilterSubmittedEventDetail
    ) => Promise<TableData> | undefined = undefined;

    //--------------------------------------------------------------------------
    // EVENTS
    // -------------------------------------------------------------------------

    @Event({
        eventName: 'kupSearchSelectionUpdated',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSearchSelectionUpdated: EventEmitter<SearchSelectionUpdatedEventDetail>;

    /**
     * Fired when the filter is submitted but only if in serverHandledFilter mode.
     */
    @Event({
        eventName: 'kupSearchFilterSubmitted',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSearchFilterSubmitted: EventEmitter<SearchFilterSubmittedEventDetail>;

    //--------------------------------------------------------------------------
    // INTERNAL
    // -------------------------------------------------------------------------

    @State() value: string = '';

    private modal: HTMLKupModalElement;

    //--------------------------------------------------------------------------
    // ON SOMETHING
    // -------------------------------------------------------------------------

    componentWillLoad() {
        this.onInitialValueChanged();
    }

    @Watch('initialValue')
    onInitialValueChanged() {
        this.value = this.initialValue;
    }

    private onSearchClicked(event) {
        event.stopPropagation();
        this.onSearchFilterSubmitted();
        this.modal.visible = true;
    }

    private onSearchDialogClicked(event) {
        event.stopPropagation();
        this.onSearchFilterSubmitted();
    }

    private onSearchFilterSubmitted() {
        if (this.serverHandledFilter) {
            let detail = {
                ...(this.extra ? { extra: this.extra } : {}),
                filter: this.value,
            };

            if (this.searchCallBackOnFilterSubmitted) {
                console.log('Executing callback on filter submitted');
                this.searchCallBackOnFilterSubmitted(detail)
                    .then((data) => {
                        this.data = data;
                        this.kupSearchFilterSubmitted.emit(detail);
                    })
                    .catch((err) => {
                        console.error('Executing callback error:', err);
                    });
            } else {
                this.kupSearchFilterSubmitted.emit(detail);
            }
        }
    }

    //TODO: manage all datatable events, like kupLoadMoreClicked, kupAddColumn...

    private onSearchCancelled(event) {
        event.stopPropagation();
        this.modal.visible = false;
    }

    private onSearchInputChanged(event) {
        event.stopPropagation();
        this.value = event.detail.value;
    }

    private onRowSelected(event) {
        event.stopPropagation();
        let rowsSelected = event.detail.selectedRows as Row[];
        let rowSelected = rowsSelected[0];
        if (rowSelected.cells.hasOwnProperty(this.valueField)) {
            this.value = rowSelected.cells[this.valueField].value;
            this.kupSearchSelectionUpdated.emit({
                value: this.value,
            });
            this.modal.visible = false;
        }
    }

    //--------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    render() {
        return (
            <div class="search-component">
                <kup-text-input
                    initialValue={this.value}
                    disabled={this.disabled}
                    onKetchupTextInputChanged={(e) =>
                        this.onSearchInputChanged(e)
                    }
                ></kup-text-input>
                <kup-button
                    showicon={true}
                    iconClass="mdi mdi-pencil"
                    onClick={(e) => this.onSearchClicked(e)}
                ></kup-button>
                <kup-modal
                    ref={(el) => (this.modal = el)}
                    onKupModalCancel={(e) => this.onSearchCancelled(e)}
                >
                    {this.serverHandledFilter ? (
                        <div>
                            <kup-text-input
                                initialValue={this.value}
                                onKetchupTextInputChanged={(e) =>
                                    this.onSearchInputChanged(e)
                                }
                            ></kup-text-input>
                            <kup-button
                                showicon={true}
                                iconClass="mdi mdi-pencil"
                                onClick={(e) => this.onSearchDialogClicked(e)}
                            ></kup-button>
                        </div>
                    ) : null}

                    <kup-data-table
                        globalFilter={!this.serverHandledFilter}
                        globalFilterValue={
                            !this.serverHandledFilter ? this.value : ''
                        }
                        data={this.data}
                        showFilters={true}
                        onKupRowSelected={(e) => this.onRowSelected(e)}
                    ></kup-data-table>
                </kup-modal>
            </div>
        );
    }
}
