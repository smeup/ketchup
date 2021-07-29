import {
    Component,
    Element,
    forceUpdate,
    Host,
    h,
    Method,
    Prop,
    VNode,
} from '@stencil/core';

import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { Cell, CellData } from '../kup-data-table/kup-data-table-declarations';
import {
    KupAccordionData,
    KupAccordionProps,
} from './kup-accordion-declarations';

import {
    TreeNode,
} from './../kup-tree/kup-tree-declarations';
import { getTreeNodeFromPath } from '../kup-tree/kup-tree-faker';

@Component({
    tag: 'kup-accordion',
    styleUrl: 'kup-accordion.scss',
    shadow: true,
})
export class KupAccordion {
    /**
     * References the root HTML element of the component (<kup-accordion>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

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
     * Data of the accordion.
     * @default null
     */
    @Prop() data: KupAccordionData = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

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
        return getProps(this, KupAccordionProps, descriptions);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupAccordionProps, props);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * This method is used to build TreeNode structure and create kup-tree component
     * @param cellData
     * @returns VNode[]
     */
    private renderKupTree(cellData: CellData): VNode[]{
        const kupTree: VNode[] = [];
        const tree: TreeNode[] = [];
        

        for(var i=0; i<cellData.data.length; i++){
            const treeNode: TreeNode = cellData.data[i];
            tree.push(treeNode);
        }

        kupTree.push(
            <kup-tree data={tree}></kup-tree>
        );

        return kupTree;
    }

    /**
     * This method is used to create the sub component structure
     * @param cell 
     * @returns VNode[]
     */
    private renderSubComponent(cell:Cell): VNode[] {
        const shape = cell.shape;

        switch(shape){
            case "TRE":{
                return this.renderKupTree(cell.data);
            }
            default: return
        }
    }

    /**
     * This method is used to trigger a new render of the component.
     * @returns VNode[]
     */
    private renderAccordion(): VNode[] {
       const categories: VNode[] = [];

        for(var i=0; i<this.data.columns.length; i++) {
            const subComponent: VNode[] = this.renderSubComponent(this.data.rows[0].cells[this.data.columns[i].name]);
            categories.push(
                <div>
                    <button>{this.data.columns[i].title}</button>
                    <div>{subComponent}</div>
                </div>
            );
        }
        return categories;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const content: VNode[] = this.renderAccordion();
        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id="kup-component">{content}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
