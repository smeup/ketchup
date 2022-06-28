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
import {
    KupDataCell,
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { KupPointerEventTypes } from '../../managers/kup-interact/kup-interact-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getColumnByName } from '../../utils/cell-utils';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupBoxData } from '../kup-box/kup-box-declarations';
import {
    KupFamilyTreeData,
    KupFamilyTreeEventHandlerDetails,
    KupFamilyTreeEventPayload,
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

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #clickTimeout: ReturnType<typeof setTimeout>[] = [];
    #hold: boolean = false;
    #interactableTouch: HTMLElement[] = [];
    #kupManager: KupManager = kupManagerInstance();
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
        let staffChildren: { [index: string]: KupFamilyTreeNode } = null;
        const hasChildren =
            (node.children && node.children.length > 0) ||
            (node.cells && Object.keys(node.cells).length > 0);
        if (hasChildren) {
            children = [];
            staffChildren = {};
            node.children.forEach((child) => {
                children.push(child);
            });
            for (const key in node.cells) {
                const cell = node.cells[key];
                if (cell.isStaff) {
                    staffChildren[key] = cell;
                } else {
                    children.push(cell);
                }
            }
        }

        const span1 = hasChildren ? children.length * 2 : 1;

        const styleVLine = {
            'family-tree__line': true,
            'family-tree__line--placeholder': hasChildren,
            'family-tree__line--vertical': hasChildren,
        };

        const data: KupBoxData = {
            columns: [{ name: 'NODE_COLUMN' } as KupDataColumn],
            rows: [{ cells: { NODE_COLUMN: node } }],
        };

        const box: VNode = (
            <div class={'family-tree__item'}>
                <kup-box
                    customStyle="#kup-component {  background: var(--kup-primary-color); box-sizing: border-box; height: 40px; padding: 8px } #kup-component .box-component { background: var(--kup-primary-color); box-sizing: border-box; height: 100%;} #kup-component .f-cell__text { color: var(--kup-text-on-primary-color); }"
                    class="kup-borderless kup-paddingless"
                    data={data}
                ></kup-box>
            </div>
        );
        //TODO: set data-cell and data-column if needed inside events
        return (
            <table class={'family-tree__node'}>
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
                <tr>
                    {children
                        ? children.map((inode) =>
                              this.#buildChildLine(
                                  children.indexOf(inode) == 0,
                                  children.indexOf(inode) ==
                                      children.length - 1,
                                  children.length == 1,
                                  children.length > 2
                              )
                          )
                        : undefined}
                </tr>
                <tr>
                    {children
                        ? children.map((inode) => (
                              <td colSpan={2}>{this.#buildNode(inode)}</td>
                          ))
                        : undefined}
                </tr>
            </table>
        );
    }

    #buildNodes(nodes: KupDataNode[]) {
        return nodes.map((node) => this.#buildNode(node));
    }

    #createTree(): VNode {
        const content: VNode[] = [];

        if (!this.data || !this.data.rows || !this.data.rows.length) {
            content.push(
                <div>
                    {this.#kupManager.language.translate(
                        KupLanguageGeneric.EMPTY_DATA
                    )}
                </div>
            );
        } else {
            content.push(<div>{this.#buildNodes(this.data.rows)}</div>);
        }
        return <div class="family-tree">{content}</div>;
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
        let td: HTMLElement;
        if (path) {
            for (let i = path.length - 1; i >= 0; i--) {
                let p = path[i];
                if (!p.tagName) {
                    continue;
                }
                switch (p.tagName.toUpperCase()) {
                    case 'TD': {
                        td = p;
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
        this.#interactableTouch.push(this.#wrapperEl);
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
            this.#wrapperEl,
            KupPointerEventTypes.TAP,
            tapCb
        );
        this.#kupManager.interact.on(
            this.#wrapperEl,
            KupPointerEventTypes.DOUBLETAP,
            doubletapCb
        );
        this.#kupManager.interact.on(
            this.#wrapperEl,
            KupPointerEventTypes.HOLD,
            holdCb
        );
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
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div
                    id={componentWrapperId}
                    onContextMenu={(e: MouseEvent) => {
                        e.preventDefault();
                    }}
                    ref={(el) => (this.#wrapperEl = el)}
                >
                    {this.#createTree()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
