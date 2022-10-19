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
    VNode,
} from '@stencil/core';
import { FButton } from '../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import {
    KupDataCell,
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { KupPointerEventTypes } from '../../managers/kup-interact/kup-interact-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupBoxData, KupBoxLayout } from '../kup-box/kup-box-declarations';
import {
    KupFamilyTreeData,
    KupFamilyTreeEventHandlerDetails,
    KupFamilyTreeEventPayload,
    KupFamilyTreeLayout,
    KupFamilyTreeNode,
    KupFamilyTreeProps,
} from './kup-family-tree-declarations';

@Component({
    tag: 'kup-family-tree',
    styleUrl: 'kup-family-tree.scss',
    shadow: true,
})
export class KupFamilyTree {
    /**
     * References the root HTML element of the component (<kup-family-tree>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * The component will autofit everytime a node is expanded.
     * @default true
     */
    @Prop() autofitOnExpand: boolean = true;
    /**
     * The component's initial render will fit the container by invoking the runAutofit method.
     * @default true
     */
    @Prop() autofitOnLoad: boolean = true;
    /**
     * Used to render the family tree boxes as kup-cards (through kup-box).
     * @default null
     */
    @Prop() cardData: GenericObject = null;
    /**
     * Nodes can be expanded/collapsed.
     * @default true
     */
    @Prop() collapsible: boolean = true;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the component.
     * @default null
     */
    @Prop() data: KupFamilyTreeData = null;
    /**
     * Layout of the boxes.
     * @default null
     */
    @Prop() layout: KupFamilyTreeLayout = null;
    /**
     * Child nodes that have no children are arranged vertically.
     * @default false
     */
    @Prop() stackedLeaves: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #clickTimeout: ReturnType<typeof setTimeout>[] = [];
    #hold = false;
    #currentPanX = 0;
    #currentPanY = 0;
    #interactableTouch: HTMLElement[] = [];
    #kupManager = kupManagerInstance();
    #moveCb = (e: PointerEvent) => {
        const deltaX = e.clientX - this.#currentPanX;
        const deltaY = e.clientY - this.#currentPanY;
        this.rootElement.scrollTop -= deltaY;
        this.rootElement.scrollLeft -= deltaX;
        this.#currentPanX = e.clientX;
        this.#currentPanY = e.clientY;
    };
    #shouldAutofit = false;
    #wrapperEl: HTMLElement = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-familytree-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupFamilyTreeEventPayload>;

    @Event({
        eventName: 'kup-familytree-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupContextMenu: EventEmitter<KupFamilyTreeEventPayload>;

    @Event({
        eventName: 'kup-familytree-dblclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDblClick: EventEmitter<KupFamilyTreeEventPayload>;

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Collapses all nodes.
     */
    @Method()
    async collapseAll(nodes: KupFamilyTreeNode[] = this.data.rows) {
        this.#kupManager.data.node.setProperties(
            nodes,
            { isExpanded: false },
            true
        );
        this.refresh();
    }
    /**
     * Expands all nodes.
     */
    @Method()
    async expandAll(nodes: KupFamilyTreeNode[] = this.data.rows) {
        this.#kupManager.data.node.setProperties(
            nodes,
            { isExpanded: true },
            true
        );
        this.refresh();
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupFamilyTreeProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method causes the component to autofit its container's width.
     */
    @Method()
    async runAutofit(): Promise<void> {
        const parentWidth = this.#wrapperEl.clientWidth;
        const childWidth = this.#wrapperEl.children[0].clientWidth;
        const multiplierStep = 0.01;
        const minWidth = (85 / 100) * parentWidth;
        const maxWidth = (95 / 100) * parentWidth;
        let multiplier = 1;
        let tooManyAttempts = 2000;
        let tempWidth = childWidth;
        while (
            (tempWidth < minWidth || tempWidth > maxWidth) &&
            tooManyAttempts > 0 &&
            multiplier > multiplierStep
        ) {
            tooManyAttempts--;
            if (tempWidth < minWidth) {
                multiplier = multiplier + multiplierStep;
            } else if (tempWidth > maxWidth) {
                multiplier = multiplier - multiplierStep;
            } else {
                tooManyAttempts = 0;
            }
            tempWidth = childWidth * multiplier;
        }
        this.#wrapperEl.style.setProperty(
            '--kup_familytree_scale',
            multiplier <= 1 ? multiplier.toFixed(2) : '1'
        );
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupFamilyTreeProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #buildChildLine(
        first: boolean,
        last: boolean,
        alone: boolean,
        moreTwo: boolean
    ) {
        const content: VNode[] = [];
        content.push(
            <td
                class={{
                    'family-tree__line': true,
                    'family-tree__line--right': !first,
                    'family-tree__line--top': !first,
                }}
            >
                <div class={'family-tree__line--placeholder'}></div>
            </td>
        );
        content.push(
            <td
                class={{
                    'family-tree__line': true,
                    'family-tree__line--left': first,
                    'family-tree__line--top':
                        (first && !alone) || (moreTwo && !last),
                }}
            >
                <div class={'family-tree__line--placeholder'}></div>
            </td>
        );
        return content;
    }

    #buildNode(node: KupFamilyTreeNode) {
        let children: KupFamilyTreeNode[] = null;
        let staffChildren: KupFamilyTreeNode[] = null;
        if (!this.collapsible || (this.collapsible && node.isExpanded)) {
            node.children?.forEach((child) => {
                if (child.isStaff) {
                    if (!staffChildren) {
                        staffChildren = [];
                    }
                    staffChildren.push(child);
                } else {
                    if (!children) {
                        children = [];
                    }
                    children.push(child);
                }
            });
        }
        const stacked: boolean =
            this.stackedLeaves &&
            children &&
            children.every((c) => !c.children || c.children.length == 0);
        const span1 = children ? children.length * 2 : 1;

        const styleVLine = {
            'family-tree__line': true,
            'family-tree__line--placeholder': !!(children || staffChildren),
            'family-tree__line--vertical': !!(children || staffChildren),
        };

        const data: KupBoxData = {
            columns: [
                { name: '*TREECOL', title: 'Fake column', visible: false },
                ...this.data.columns,
            ],
            rows: [{ cells: { '*TREECOL': node, ...node.cells } }],
        };

        const layout = node.layout || this.layout || 1;

        const expandButtonProps: FButtonProps = {
            icon: node.isExpanded ? 'remove' : 'plus',
            shaped: true,
            slim: true,
            styling: FButtonStyling.OUTLINED,
            title: `${this.#kupManager.language.translate(
                KupLanguageGeneric.EXPAND
            )}/${this.#kupManager.language.translate(
                KupLanguageGeneric.COLLAPSE
            )}  (CTRL + Click)`,
            onClick: (e) => {
                if (e.ctrlKey && node.children && node.children.length > 0) {
                    if (node.isExpanded) {
                        this.collapseAll(node.children);
                    } else {
                        this.expandAll(node.children);
                    }
                }
                node.isExpanded = !node.isExpanded;
                if (this.autofitOnExpand) {
                    this.#shouldAutofit = true;
                }
                this.refresh();
            },
            wrapperClass: 'family-tree__item__expand',
        };

        let kupBox: VNode = null;

        if (this.#isBoxLayout(layout)) {
            kupBox = (
                <kup-box
                    class="kup-borderless kup-paddingless"
                    customStyle="#kup-component {  background: var(--kup_familytree_item_background_color); border: 2px solid var(--kup_familytree_lines_color); box-sizing: border-box; height: var(--kup_familytree_item_height); padding: 0 var(--kup_familytree_item_h_padding); } #kup-component .box-component { background: var(--kup_familytree_item_background_color); box-sizing: border-box; height: 100%;} #kup-component .f-cell__text { color: var(--kup_familytree_item_color); }"
                    data={data}
                    cardData={this.cardData}
                    layout={this.cardData ? null : (layout as KupBoxLayout)}
                    showSelection={false}
                ></kup-box>
            );
        }

        const box: VNode = (
            <div class={'family-tree__item'}>
                <div class={'family-tree__item__wrapper'}>
                    {this.#isBoxLayout(layout)
                        ? kupBox
                        : this.#buildNodeLayout(node, layout)}
                    {this.collapsible &&
                    node.children &&
                    node.children.length > 0 ? (
                        <FButton {...expandButtonProps} />
                    ) : undefined}
                </div>
            </div>
        );

        const staffStyle = {
            ['--kup_familytree_staffchildren']:
                staffChildren?.length.toString() || '0',
        };

        //TODO: set data-cell and data-column if needed inside events
        return (
            <table
                class={{
                    'family-tree__node': true,
                    'family-tree__node--stacked':
                        this.stackedLeaves &&
                        !node.isStaff &&
                        (!node.children || node.children.length == 0),
                }}
            >
                <tr>
                    <td data-row={node} colSpan={span1}>
                        {box}
                    </td>
                </tr>
                <tr>
                    <td colSpan={span1}>
                        <div class={styleVLine}></div>
                    </td>
                </tr>
                {staffChildren
                    ? [
                          <tr>
                              <td colSpan={span1}>
                                  <div
                                      class={{
                                          ...styleVLine,
                                          'family-tree__line--staff': true,
                                      }}
                                      style={staffStyle}
                                  ></div>
                                  <div
                                      class="family-tree__node__staff"
                                      style={staffStyle}
                                  >
                                      {staffChildren.map((inode) => [
                                          <div class="family-tree__node__staff__item">
                                              {this.#buildNode(inode)}
                                          </div>,
                                      ])}
                                  </div>
                              </td>
                          </tr>,
                      ]
                    : null}
                {staffChildren && children
                    ? [
                          <tr>
                              <td colSpan={span1}>
                                  <div class={styleVLine}></div>
                              </td>
                          </tr>,
                      ]
                    : null}
                {children
                    ? [
                          <tr>
                              {stacked ? (
                                  <td colSpan={span1}>
                                      <div class={styleVLine}></div>
                                  </td>
                              ) : (
                                  children.map((inode) =>
                                      this.#buildChildLine(
                                          children.indexOf(inode) == 0,
                                          children.indexOf(inode) ==
                                              children.length - 1,
                                          children.length == 1,
                                          children.length > 2
                                      )
                                  )
                              )}
                          </tr>,
                          <tr>
                              {stacked ? (
                                  <td colSpan={span1}>
                                      {children.map((inode) =>
                                          this.#buildNode(inode)
                                      )}
                                  </td>
                              ) : (
                                  children.map((inode) => (
                                      <td colSpan={2}>
                                          {this.#buildNode(inode)}
                                      </td>
                                  ))
                              )}
                          </tr>,
                      ]
                    : undefined}
            </table>
        );
    }

    #buildNodeLayout(node: KupFamilyTreeNode, layout: number) {
        switch (layout) {
            case 2:
                return this.#buildNodeLayout2(node);
            default:
                return this.#buildNodeLayout1(node);
        }
    }

    #buildNodeLayout1(node: KupFamilyTreeNode) {
        return (
            <div
                class={`family-tree__item__layout family-tree__item__layout--1`}
            >
                <div class={'family-tree__item__layout__text__title'}>
                    {node.value}
                </div>
            </div>
        );
    }

    #buildNodeLayout2(node: KupFamilyTreeNode) {
        return (
            <div
                class={`family-tree__item__layout family-tree__item__layout--2`}
            >
                <div class={'family-tree__item__layout__color'}></div>
                <div class={'family-tree__item__layout__image'}>
                    <FImage
                        resource={node.icon}
                        sizeX="48px"
                        sizeY="48px"
                    ></FImage>
                </div>
                <div class={'family-tree__item__layout__text'}>
                    <div class={'family-tree__item__layout__text__title'}>
                        {node.value}
                    </div>
                    {node.title ? (
                        <div
                            class={'family-tree__item__layout__text__subtitle'}
                        >
                            {node.title}
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }

    #buildNodes(nodes: KupDataNode[]): VNode[] {
        return nodes.map((node) => this.#buildNode(node));
    }

    #createTree(): VNode {
        const emptyData =
            !this.data || !this.data.rows || !this.data.rows.length;

        return (
            <div
                class="family-tree"
                onContextMenu={(e: MouseEvent) => {
                    e.preventDefault();
                }}
                ref={(el) => (this.#wrapperEl = el)}
            >
                {emptyData ? (
                    <div>
                        {this.#kupManager.language.translate(
                            KupLanguageGeneric.EMPTY_DATA
                        )}
                    </div>
                ) : (
                    this.#buildNodes(this.data.rows)
                )}
            </div>
        );
    }

    #isBoxLayout(layout: KupFamilyTreeLayout): layout is KupBoxLayout {
        const tmp = layout as KupBoxLayout;
        return (
            !!this.cardData || (tmp && tmp.sections && tmp.sections.length > 0)
        );
    }

    #startPanning(e: PointerEvent) {
        this.#currentPanX = e.clientX;
        this.#currentPanY = e.clientY;
        this.#wrapperEl.classList.add('family-tree--dragging');
        const endPanning = () => {
            document.removeEventListener('pointermove', this.#moveCb);
            document.removeEventListener('pointerup', endPanning);
            this.#wrapperEl.classList.remove('family-tree--dragging');
        };
        document.addEventListener('pointermove', this.#moveCb);
        document.addEventListener('pointerup', endPanning);
    }

    #getEventPath(currentEl: unknown): HTMLElement[] {
        const path: HTMLElement[] = [];

        while (
            currentEl &&
            currentEl !== this.rootElement &&
            currentEl !== document.body
        ) {
            path.push(currentEl as HTMLElement);
            currentEl = (currentEl as HTMLElement).parentNode
                ? (currentEl as HTMLElement).parentNode
                : (currentEl as ShadowRoot).host;
        }

        return path;
    }

    #getEventDetails(
        path: HTMLElement[],
        e?: PointerEvent
    ): KupFamilyTreeEventHandlerDetails {
        let expandButton: HTMLElement;
        let td: HTMLElement;
        if (path) {
            for (let i = path.length - 1; i >= 0; i--) {
                const el = path[i];
                if (!el.tagName) {
                    continue;
                }
                if (el.classList.contains('family-tree__item__expand')) {
                    expandButton = el;
                }
                switch (el.tagName.toUpperCase()) {
                    case 'TD': {
                        td = el;
                        break;
                    }
                }
            }
        }

        let cell: KupDataCell = null,
            column: KupDataColumn = null,
            row: KupFamilyTreeNode = null;
        if (td) {
            cell = td['data-cell'];
            column = td['data-column'];
            row = td['data-row'];
        }

        return {
            cell: cell ? cell : null,
            column: column ? column : null,
            expandButton: expandButton ? expandButton : null,
            originalEvent: e,
            row: row ? row : null,
            td: td ? td : null,
        };
    }

    #clickHandler(e: PointerEvent): KupFamilyTreeEventHandlerDetails {
        const details = this.#getEventDetails(this.#getEventPath(e.target), e);
        return details;
    }

    #contextMenuHandler(e: PointerEvent): KupFamilyTreeEventHandlerDetails {
        const details = this.#getEventDetails(this.#getEventPath(e.target), e);
        return details;
    }

    #dblClickHandler(e: PointerEvent): KupFamilyTreeEventHandlerDetails {
        const details = this.#getEventDetails(this.#getEventPath(e.target), e);
        return details;
    }

    #didLoadInteractables() {
        this.#interactableTouch.push(this.rootElement);
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
                            this.kupClick.emit({
                                comp: this,
                                id: this.rootElement.id,
                                details: this.#clickHandler(
                                    clone as PointerEvent
                                ),
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
            this.rootElement,
            KupPointerEventTypes.TAP,
            tapCb
        );
        this.#kupManager.interact.on(
            this.rootElement,
            KupPointerEventTypes.DOUBLETAP,
            doubletapCb
        );
        this.#kupManager.interact.on(
            this.rootElement,
            KupPointerEventTypes.HOLD,
            holdCb
        );
    }

    #zoomTree(e: WheelEvent) {
        if (e.ctrlKey) {
            e.preventDefault();
            const currentScale =
                parseFloat(
                    this.#wrapperEl.style.getPropertyValue(
                        '--kup_familytree_scale'
                    )
                ) || 1;
            const delta = 0.05;
            let value =
                e.deltaY > 0 ? currentScale - delta : currentScale + delta;
            if (value < delta) {
                value = delta;
            }
            this.#wrapperEl.style.setProperty(
                '--kup_familytree_scale',
                value.toFixed(2)
            );
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#didLoadInteractables();
        if (this.autofitOnLoad) {
            this.runAutofit();
        }
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        if (this.#shouldAutofit) {
            this.#shouldAutofit = false;
            this.runAutofit();
        }
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host
                onDrag={(e: DragEvent) => e.preventDefault()}
                onPointerDown={(e: PointerEvent) => {
                    e.preventDefault();
                    this.#startPanning(e);
                }}
                onWheel={(e: WheelEvent) => {
                    this.#zoomTree(e);
                }}
            >
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{this.#createTree()}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
