import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
} from '@stencil/core';
import { FChipType } from '../../f-components/f-chip/f-chip-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupTreeNodeSelectedEventPayload } from '../kup-tree/kup-tree-declarations';
import { KupMultiSelectProps } from './kup-multi-select-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';

@Component({
    tag: 'kup-multi-select',
    styleUrl: 'kup-multi-select.scss',
    shadow: true,
})
export class KupMultiSelect {
    @Element() rootElement: HTMLElement;

    @Prop() customStyle: string = '';
    @Prop() disabled: boolean = false;

    /**
     * Contains the data used to populate the tree view and the data used to visualize selected nodes via kup-chips.
     */
    @Prop({ mutable: true }) data: any[] = [];

    #chips: HTMLKupChipElement = null;

    private kupManager: KupManager = kupManagerInstance();

    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupMultiSelectProps, descriptions);
    }

    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupMultiSelectProps, props);
    }

    //this may be useful eventually

    extractTreeNodeValues(node: KupDataNode): string[] {
        let nodes: string[] = [];

        if (node.value && node.value.trim()) {
            nodes.push(node.value);
        }

        //recursively manage the children's values, return an array of strings with all values
        if (node.children && node.children.length > 0) {
            node.children.forEach((child) => {
                nodes.push(...this.extractTreeNodeValues(child));
            });
        }

        //returns at least the value of the selected node if it has no children
        return nodes;
    }

    onNodeSelected(e: CustomEvent<KupTreeNodeSelectedEventPayload>) {
        const selectedNodeValue = e.detail.treeNode.value;
        const chipIndex = this.data['kup-chip'].findIndex(
            (chip) => chip.id === selectedNodeValue
        );

        if (chipIndex !== -1) { //already selected, deselect
            this.data['kup-chip'] = [
                ...this.data['kup-chip'].slice(0, chipIndex),
                ...this.data['kup-chip'].slice(chipIndex + 1),
            ];
            console.log('eliminando\n' + JSON.stringify(this.data['kup-chip']));
        } else { //not selected
            this.data['kup-chip'].push({
                id: selectedNodeValue,
                value: selectedNodeValue,
            });
            console.log(
                'aggiungendo\n' + JSON.stringify(this.data['kup-chip'])
            );
        }

        this.#chips.refresh();
        //this.refresh();
    }

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.data['kup-chip'] = [];
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
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="sub-chip">
                        <kup-chip
                            data={this.data['kup-chip']}
                            type={FChipType.STANDARD}
                            id="multi-select-chips"
                            ref={(el) => (this.#chips = el)}
                        />
                    </div>
                    <div class="sub-tree">
                        <kup-tree
                            data={this.data['kup-tree']}
                            class="kup-full-width"
                            globalFilter
                            id="multi-select-tree"
                            onKup-tree-nodeselected={(
                                e: CustomEvent<KupTreeNodeSelectedEventPayload>
                            ) => this.onNodeSelected(e)}
                        />
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
