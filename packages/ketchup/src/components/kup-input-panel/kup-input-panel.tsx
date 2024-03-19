import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Prop,
    VNode,
    Watch,
    h,
} from '@stencil/core';
import {
    KupInputPanelCell,
    KupInputPanelColumn,
    KupInputPanelData,
    KupInputPanelRow,
} from './kup-input-panel-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupComponent, KupEventPayload } from '../../types/GenericTypes';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FButton } from '../../f-components/f-button/f-button';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { FCellProps } from '../../f-components/f-cell/f-cell-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { FCell } from '../../f-components/f-cell/f-cell';

@Component({
    tag: 'kup-input-panel',
    styleUrl: 'kup-input-panel.scss',
    shadow: true,
})
export class KupInputPanel {
    /**
     * References the root HTML element of the component (<kup-form>).
     */
    @Element() rootElement: HTMLElement;

    //#region PROPS
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';

    /**
     * Actual data of the form.
     * @default null
     */
    @Prop() data: KupInputPanelData = null;

    /**
     * Creates a hidden submit button in order to submit the form with enter.
     * @default false
     */
    @Prop() hiddenSubmitButton: boolean = false;

    /**
     * Sets the callback function on submit form
     * @default null
     */
    @Prop() submitCb: (e: SubmitEvent) => unknown = null;
    //#endregion

    //#region VARIABLES
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    // TODO ADD VARIABLES HERE
    //#endregion

    //#region WATCHERS
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    onDataChanged() {
        console.log('data changed', this.data);
    }

    // TODO ADD WATCHERS ??
    //#endregion

    //#region PUBLIC METHODS
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    // TODO ADD METHODS HERE
    //#endregion

    //#region EVENTS
    /*-------------------------------------------------*/
    /*           Events                                */
    /*-------------------------------------------------*/

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kup-input-panel-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;
    //#endregion

    //#region PRIVATE METHODS
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #renderRow(row: KupInputPanelRow) {
        // todo layout
        const horizontal = row.layout?.horizontal || false;

        const rowContent: VNode[] = this.data.columns
            .filter((col) => col.visible)
            .map((col) => {
                const mappedCell = {
                    ...row.cells[col.name],
                    data: { data: row.cells[col.name].options },
                    isEditable: row.cells[col.name].editable,
                };

                return this.#renderCell(mappedCell, row, col);
            });

        const classObj = {
            form: true,
            'form--column': !horizontal,
        };

        return (
            <form
                class={classObj}
                name={this.rootElement.id}
                onSubmit={this.submitCb}
            >
                {rowContent}
                {this.hiddenSubmitButton ? (
                    <FButton
                        buttonType="submit"
                        label={this.#kupManager.language.translate(
                            KupLanguageGeneric.CONFIRM
                        )}
                        wrapperClass="form__submit"
                    ></FButton>
                ) : null}
            </form>
        );
    }

    #renderCell(
        cell: KupInputPanelCell,
        row: KupInputPanelRow,
        column: KupInputPanelColumn
    ) {
        // switch (cell.shape) {
        //     case FCellShapes.TEXT_FIELD:
        //         return (
        //             <FTextField
        //                 readOnly={!cell.editable}
        //                 name={column.name}
        //                 label={column.title}
        //                 icon={cell.icon}
        //                 value={cell.value}
        //             />
        //         );
        //     case FCellShapes.COMBOBOX:
        //         return (
        //             <kup-combobox
        //                 isSelect={true}
        //                 initialValue={cell.value}
        //                 disabled={!cell.editable}
        //                 data={cell.options}
        //                 onKup-combobox-change={(ev) =>
        //                     console.log('combo value change', ev.detail.value)
        //                 }
        //             />
        //         );
        //     case FCellShapes.AUTOCOMPLETE:
        //         return (
        //             <kup-autocomplete
        //                 initialValue={cell.value}
        //                 disabled={!cell.editable}
        //                 data={cell.options}
        //             />
        //         );
        //     default:
        //         return (
        //             <p>
        //                 {column.name}: {cell.value || 'no value'}
        //             </p>
        //         );
        // }
        const cellProps: FCellProps = {
            cell,
            column,
            row,
            component: this,
            editable: cell.editable,
            renderKup: true,
            setSizes: true,
        };
        return <FCell {...cellProps} />;
    }

    // ADD PRIVATE METHODS HERE
    //#endregion

    //#region LIFECYCLE HOOKS
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
        this.onDataChanged();
    }

    componentDidLoad() {
        this.kupReady.emit({ comp: this, id: this.rootElement.id });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const isEmptyData = Boolean(!this.data.rows?.length);

        const inputPanelContent: VNode[] = isEmptyData
            ? [
                  <p>
                      {this.#kupManager.language.translate(
                          KupLanguageGeneric.EMPTY_DATA
                      )}
                  </p>,
              ]
            : this.data.rows?.map((row) => this.#renderRow(row));

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{inputPanelContent}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
    //#endregion
}
