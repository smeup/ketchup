import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Event,
    EventEmitter,
    Method,
    Prop,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupCellProps,
    KupCellElementsPosition,
    KupCellSubmitClickEventPayload,
} from './kup-cell-declarations';
import {
    FCellOptionsProps,
    FCellPadding,
} from '../../f-components/f-cell/f-cell-declarations';
import {
    KupDragDataTransferCallback,
    KupDragEffect,
} from '../../managers/kup-interact/kup-interact-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupDataCell,
    KupDataCellOptions,
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import { FCell } from '../../f-components/f-cell/f-cell';
import { submitPositionAdapter } from '../../utils/cell-utils';

@Component({
    tag: 'kup-cell',
    styleUrl: 'kup-cell.scss',
    shadow: true,
})
export class KupCell {
    /**
     * References the root HTML element of the component (<kup-text-field>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the cell.
     * @default false
     */
    @Prop() data: KupDataCell = null;
    /**
     * The density of the cell, defaults at 'dense' and can be also set to 'wide' or 'medium'.
     */
    @Prop() density: FCellPadding = FCellPadding.NONE;
    /**
     * When set to true, the component is draggable.
     * @default false
     */
    @Prop() dragEnabled: boolean = false;

    /**
     * Show submit button
     */
    @Prop() showSubmit: boolean = false;

    /**
     * Submit button position, default is right
     */
    @Prop() submitPosition: KupCellElementsPosition =
        KupCellElementsPosition.right;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-cell-submit-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCellSubmitClick: EventEmitter<KupCellSubmitClickEventPayload>;

    /**
     * Adds the given CSS classes to the cell's data.
     * @param {string[]} classes - Array of CSS classes.
     */
    @Method()
    async addCssClasses(classes?: string[]): Promise<void> {
        if (!this.data.cssClass) {
            this.data.cssClass = '';
        }
        if (classes) {
            for (let index = 0; index < classes.length; index++) {
                const cssClass = classes[index];
                if (this.data.cssClass.indexOf(cssClass) < 0) {
                    this.data.cssClass += ` ${cssClass}`;
                }
            }
        }
        this.refresh();
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupCellProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Removes the given CSS classes from the cell's data.
     * @param {string[]} classes - Array of CSS classes.
     */
    @Method()
    async removeCssClasses(classes?: string[]): Promise<void> {
        if (!this.data.cssClass) {
            return;
        }
        if (classes) {
            for (let index = 0; index < classes.length; index++) {
                const cssClass = classes[index];
                if (this.data.cssClass.indexOf(cssClass) > 0) {
                    this.data.cssClass = this.data.cssClass.replace(
                        new RegExp(cssClass, 'g'),
                        ''
                    );
                }
            }
        }
        this.refresh();
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupCellProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private didRenderInteractables() {
        if (this.dragEnabled) {
            const dataCb: KupDragDataTransferCallback = () => {
                return {
                    cell: this.data,
                    column: this.generateColumn(),
                    id: this.rootElement.id,
                    multiple: false,
                    row: this.generateRow(),
                };
            };

            this.#kupManager.interact.draggable(
                this.rootElement.shadowRoot.querySelector(
                    '#' + componentWrapperId
                ),
                {
                    cursorChecker() {
                        return null;
                    },
                },
                {
                    callback: dataCb,
                },
                KupDragEffect.BADGE
            );
        }
    }

    private generateColumn(): KupDataColumn {
        const name = 'KUPCELL';
        const title = undefined;
        return {
            name,
            title,
        };
    }

    private generateRow(): KupDataRow {
        const col: KupDataColumn = this.generateColumn();
        const row: KupDataRow = { cells: {} };
        row.cells[col.name] = this.data;
        return row;
    }

    private submitClick(e: MouseEvent): void {
        e.stopPropagation();
        this.kupCellSubmitClick.emit({
            comp: this,
            id: this.rootElement.id,
            cell: this.data as KupDataCellOptions,
        });
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.dates.register(this);
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.didRenderInteractables();
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FCellOptionsProps = {
            cell: this.data as KupDataCellOptions,
            column: this.generateColumn(),
            component: this,
            density: this.density,
            editable: this.data.isEditable,
            renderKup: true,
            row: this.generateRow(),
        };

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    style={
                        this.showSubmit
                            ? {
                                  display: 'flex',
                                  'flex-direction': submitPositionAdapter(
                                      this.submitPosition
                                  ),
                                  'align-items': 'center',
                                  gap: '0.5rem',
                              }
                            : {}
                    }
                >
                    <FCell {...props} />
                    {this.showSubmit ? (
                        <FButton
                            buttonType="submit"
                            label={this.#kupManager.language.translate(
                                KupLanguageGeneric.CONFIRM
                            )}
                            wrapperClass="form__submit"
                            onClick={(e) => {
                                this.submitClick(e);
                            }}
                        ></FButton>
                    ) : null}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.dates.unregister(this);
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
