import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
    Watch,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupImageListDataNode,
    KupImageListEventHandlerDetails,
    KupImageListEventPayload,
    KupImageListProps,
} from './kup-image-list-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FImage } from '../../f-components/f-image/f-image';
import { FImageProps } from '../../f-components/f-image/f-image-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    FCellPadding,
    FCellProps,
} from '../../f-components/f-cell/f-cell-declarations';
import { KupStore } from '../kup-state/kup-store';
import { KupImageListState } from './kup-image-list-state';
import { TreeNodePath } from '../kup-tree/kup-tree-declarations';
import { KupPointerEventTypes } from '../../managers/kup-interact/kup-interact-declarations';

@Component({
    tag: 'kup-image-list',
    styleUrl: 'kup-image-list.scss',
    shadow: true,
})
export class KupImageList {
    /**
     * References the root HTML element of the component (<kup-image-list>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    state: KupImageListState = new KupImageListState();

    @State() currentNode: KupImageListDataNode = null;
    @State() navigationBarToggled: boolean = false;
    @State() activeSelectedNode?: KupImageListDataNode = null;
    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            this.state.load = true;
            const state = this.store.getState(this.stateId);
            if (state != null) {
                this.currentNode =
                    this.#kupManager.data.node.findByStrTreeNodePath(
                        this.data,
                        state.selectedTreeNodePath
                    ) as KupImageListDataNode;
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = this.#checkUpdateState();
            if (!this.state.load) {
                this.state.load = true;
                return;
            }
            if (somethingChanged) {
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

    #checkUpdateState(): boolean {
        let somethingChanged = false;
        let cNodeRowId = this.currentNode ? this.currentNode.id : '';

        if (
            !this.#kupManager.objects.deepEqual(
                this.state.selectedTreeNodePath,
                cNodeRowId
            )
        ) {
            this.state.selectedTreeNodePath = cNodeRowId;
            somethingChanged = true;
        }
        return somethingChanged;
    }

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * Number of columns to display in the grid layout.
     * @default null
     */
    @Prop() columns: number[] = [];
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the component.
     * @default []
     */
    @Prop() data: KupImageListDataNode[] = [];
    /**
     * When enabled displays Material's ripple effect on clicked items.
     * @default true
     */
    @Prop() ripple: boolean = false;
    /**
     * Number of rows to display in the grid layout.
     * @default null
     */
    @Prop() rows: number = null;

    /**
     * An array of integers containing the path to a selected child.
     */
    @Prop() selectedNode: TreeNodePath = [];
    @Prop() stateId: string = '';
    @Prop() store: KupStore;

    /**
     * When enabled images descriptions will be fully shown.
     * @default false
     */
    @Prop() showFullDescription: boolean = false;

    /**
     * When present component will have a main label.
     * @default null
     */
    @Prop() leadingLabel: string = null;

    /**
     * When present component will have an active class on node selected.
     * @default null
     */
    @Prop() activeNode?: KupImageListDataNode;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/
    /**
     * Instance of the KupManager class.
     */

    #clickTimeout: ReturnType<typeof setTimeout>[] = [];
    #kupManager: KupManager = kupManagerInstance();
    #backProps: FButtonProps = {
        icon: 'arrow_back',
        onClick: () => {
            this.currentNode = this.#kupManager.data.node.getParent(
                this.data,
                this.currentNode
            ) as KupImageListDataNode;
            if (!this.currentNode) {
                this.navigationBarToggled = false;
            }
        },
        styling: FButtonStyling.FLAT,
        wrapperClass: 'navigation-bar__back',
    };
    #topProps: FButtonProps = {
        icon: 'arrow_upward',
        onClick: () => {
            this.currentNode = null;
            this.navigationBarToggled = false;
        },
        styling: FButtonStyling.FLAT,
        wrapperClass: 'navigation-bar__top',
    };
    #el: HTMLElement;
    #hold: boolean = false;
    #interactableTouch: HTMLElement[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-imagelist-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupImageListEventPayload>;

    @Event({
        eventName: 'kup-imagelist-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupContextMenu: EventEmitter<KupImageListEventPayload>;

    @Event({
        eventName: 'kup-imagelist-dblclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDblClick: EventEmitter<KupImageListEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('selectedNode')
    selectNode(newData: TreeNodePath) {
        if (!newData || newData.length == 0) {
            return;
        }
        this.currentNode = this.#kupManager.data.node.find(
            this.data,
            newData
        ) as KupImageListDataNode;
    }

    @Watch('activeNode')
    watchActiveNode(newNode: KupImageListDataNode) {
        this.activeSelectedNode = newNode ?? null;
    }
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupImageListProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupImageListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #createItem(node: KupImageListDataNode): VNode {
        const props: FImageProps = {
            fit: true,
            resource: node.icon,
            placeholderResource: node.placeholderIcon,
            title: node.title,
            wrapperClass: 'image-list__image',
            badgeData: node.badgeData,
        };

        const image = <FImage {...props}></FImage>;
        const label = <div class="image-list__label">{node.value}</div>;

        const hasExternalResource =
            props.resource?.indexOf('.') > -1 ||
            props.resource?.indexOf('/') > -1 ||
            props.resource?.indexOf('\\') > -1;

        return (
            <FCell
                cell={{
                    value: node.value,
                    icon: node.icon,
                    placeholderIcon: node.placeholderIcon,
                    obj: node.obj,
                    cssClass:
                        this.#kupManager.data.cell.getObjectRelatedStyleClasses(
                            node.obj,
                            node.cssClass
                        ),
                }}
                column={{ name: 'IMAGE', title: 'Image' }}
                component={this}
                density={FCellPadding.NONE}
                row={{ ...node }}
            >
                <div
                    class={`image-list__wrapper${
                        hasExternalResource ? ' images' : ''
                    }`}
                >
                    {!hasExternalResource && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 24 24"
                        ></svg>
                    )}
                    {image}
                    {label}
                </div>
            </FCell>
        );
    }

    #createList(): VNode[] {
        const nodes: VNode[] = [];
        const items = this.currentNode ? this.currentNode.children : this.data;
        for (let index = 0; items && index < items.length; index++) {
            const node = items[index];
            const classObj = {
                'image-list__item': true,
                'mdc-ripple-surface': this.ripple ? true : false,
                'image-list__item--active':
                    this.activeSelectedNode?.value === node.value,
            };
            const item: VNode = (
                <div
                    onContextMenu={(e) => {
                        e.preventDefault();
                    }}
                    class={classObj}
                >
                    {this.#createItem(node)}
                </div>
            );
            nodes.push(item);
        }
        return nodes;
    }

    #getEventDetails(
        path: HTMLElement[],
        e?: PointerEvent
    ): KupImageListEventHandlerDetails {
        let cellProps: FCellProps;

        if (path) {
            for (let i = path.length - 1; i >= 0; i--) {
                let p = path[i];
                if (!p.tagName) {
                    continue;
                }
                if (p.classList.contains('f-cell')) {
                    cellProps = p['kup-get-cell-props']();
                }
            }
        }

        return {
            cell: cellProps?.cell,
            column: cellProps?.column,
            originalEvent: e,
            row: cellProps?.row,
        };
    }

    #clickHandler(e: PointerEvent): KupImageListEventHandlerDetails {
        const details: KupImageListEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );

        return details;
    }

    #contextMenuHandler(e: PointerEvent): KupImageListEventHandlerDetails {
        const details: KupImageListEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );

        return details;
    }

    #dblClickHandler(e: PointerEvent): KupImageListEventHandlerDetails {
        const details: KupImageListEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );

        return details;
    }

    #didLoadInteractables() {
        this.#interactableTouch.push(this.#el);
        const tapCb = (e: PointerEvent) => {
            if (this.#hold) {
                this.#hold = false;
                return;
            }
            switch (e.button) {
                // left click
                case 0:
                    // Note: event must be cloned
                    // otherwise inside setTimeout will be exiting the Shadow DOM scope(causing loss of information, including target).
                    const clone: GenericObject = {};
                    for (const key in e) {
                        clone[key] = e[key];
                    }
                    this.#clickTimeout.push(
                        setTimeout(() => {
                            const details = this.#clickHandler(
                                clone as PointerEvent
                            );
                            const node = details.row as KupImageListDataNode;
                            if (node?.children?.length > 0) {
                                this.currentNode = node;
                            }
                            this.activeSelectedNode = node;
                            this.kupClick.emit({
                                comp: this,
                                id: this.rootElement.id,
                                details,
                            });
                        }, 300)
                    );
                    break;
                // right click
                case 2:
                    this.kupContextMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details: this.#contextMenuHandler(e),
                    });
                    break;
            }
        };
        const doubletapCb = (e: PointerEvent) => {
            switch (e.button) {
                // left click
                case 0:
                    for (
                        let index = 0;
                        index < this.#clickTimeout.length;
                        index++
                    ) {
                        clearTimeout(this.#clickTimeout[index]);
                        this.#kupManager.debug.logMessage(
                            this,
                            'Cleared clickHandler timeout(' +
                                this.#clickTimeout[index] +
                                ').'
                        );
                    }
                    this.#clickTimeout = [];
                    this.kupDblClick.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details: this.#dblClickHandler(e),
                    });
                    break;
            }
        };
        const holdCb = (e: PointerEvent) => {
            if (e.pointerType === 'pen' || e.pointerType === 'touch') {
                this.#hold = true;
                this.kupContextMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    details: this.#contextMenuHandler(e),
                });
            }
        };
        this.#kupManager.interact.on(
            this.#el,
            KupPointerEventTypes.HOLD,
            holdCb
        );
        this.#kupManager.interact.on(this.#el, KupPointerEventTypes.TAP, tapCb);
        this.#kupManager.interact.on(
            this.#el,
            KupPointerEventTypes.DOUBLETAP,
            doubletapCb
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
        this.activeSelectedNode = this.activeNode ?? null;
    }

    componentDidLoad() {
        this.#didLoadInteractables();
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root && this.ripple) {
            const rippleCells = root.querySelectorAll(
                '.mdc-ripple-surface:not(.mdc-ripple-upgraded)'
            );
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }
        // *** Store
        this.persistState();
        // ***
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const hasNavigation = !!this.currentNode;
        let gridColumnsStyle: { [key: string]: string } = {};
        if (this.columns) {
            if (this.columns.length === 1) {
                gridColumnsStyle = {
                    '--kup-imagelist-columns-mobile': `${this.columns[0]}`,
                    '--kup-imagelist-columns-tablet': `${this.columns[0]}`,
                    '--kup-imagelist-columns-desktop': `${this.columns[0]}`,
                };
            } else if (this.columns.length === 2) {
                gridColumnsStyle = {
                    '--kup-imagelist-columns-mobile': `${this.columns[0]}`,
                    '--kup-imagelist-columns-tablet': `${this.columns[0]}`,
                    '--kup-imagelist-columns-desktop': `${this.columns[1]}`,
                };
            } else if (this.columns.length === 3) {
                gridColumnsStyle = {
                    '--kup-imagelist-columns-mobile': `${this.columns[0]}`,
                    '--kup-imagelist-columns-tablet': `${this.columns[1]}`,
                    '--kup-imagelist-columns-desktop': `${this.columns[2]}`,
                };
            }
        }
        let combinedGridStyle: { [key: string]: string } = {
            ...gridColumnsStyle,
        };

        if (this.rows != null && this.rows > 0) {
            const gridRowsStyle = {
                'grid-template-rows': `repeat(${this.rows}, minmax(0px, 1fr))`,
                'grid-auto-flow': `column`,
            };
            combinedGridStyle = { ...combinedGridStyle, ...gridRowsStyle };
        }

        const imlClass =
            'image-list' +
            (this.showFullDescription ? ' full-description' : '');

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    ref={(el) => {
                        this.#el = el;
                    }}
                >
                    <div class="navigation-bar">
                        {hasNavigation ? (
                            <div
                                class={`navigation-bar__wrapper ${
                                    this.navigationBarToggled
                                        ? 'navigation-bar__wrapper--active'
                                        : ''
                                }`}
                            >
                                <div
                                    class={`navigation-bar__title`}
                                    onClick={() => {
                                        this.navigationBarToggled =
                                            !this.navigationBarToggled;
                                    }}
                                >
                                    <FImage
                                        fit={true}
                                        resource={this.currentNode.icon}
                                        placeholderResource={
                                            this.currentNode.placeholderIcon
                                        }
                                        sizeX="1.25em"
                                        sizeY="1.25em"
                                        wrapperClass="navigation-bar__title__image"
                                    ></FImage>
                                    <div class="navigation-bar__title__label">
                                        {this.currentNode.value}
                                    </div>
                                </div>
                                <FButton
                                    {...this.#backProps}
                                    label={this.#kupManager.language.translate(
                                        KupLanguageGeneric.BACK
                                    )}
                                ></FButton>
                                <FButton
                                    {...this.#topProps}
                                    label={this.#kupManager.language.translate(
                                        KupLanguageGeneric.TOP
                                    )}
                                ></FButton>
                            </div>
                        ) : null}
                    </div>
                    {this.leadingLabel && (
                        <div class="mdc-text-field__label-container">
                            <label class="mdc-label">{this.leadingLabel}</label>
                        </div>
                    )}
                    <div class={imlClass} style={combinedGridStyle}>
                        {...this.#createList()}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.interact.unregister(this.#interactableTouch);
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
