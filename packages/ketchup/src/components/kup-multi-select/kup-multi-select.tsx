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
import { getParentNode } from '../../managers/kup-data/kup-data-node-helper';
import { KupChipNode } from '../kup-chip/kup-chip-declarations';

export interface MultiSelectData {
    'kup-chip'?: KupChipNode[]
    'kup-tree'?: KupDataNode[];
}

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
    @Prop({ mutable: true }) data: MultiSelectData = null;

    /**
     * When set to true, the chips will also display the IDs along with the values
     */
    @Prop() displayChipId: boolean = false;

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

    /**
     * Returns the value of the node + the values of all children if it has any
     */
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
        const selectedNode = e.detail.treeNode;
        const selectedValues = this.extractTreeNodeValues(selectedNode); // Get node value + all child values

        // Check if node that has been clicked is already selected, and also if all its children are already selected (in this case we would deselect)
        const isSelected = selectedValues.every((value) =>
            this.data['kup-chip'].some((chip) => chip.id === value)
        );

        if (isSelected) {
            // Deselect: Remove selected values from kup-chip
            this.data['kup-chip'] = this.data['kup-chip'].filter(
                (chip) => !selectedValues.includes(chip.id)
            );

            // Deselect parent if not all children are selected
            let parentNode = getParentNode(this.data['kup-tree'], selectedNode);
            while (parentNode) {
                const parentChildren =
                    parentNode.children?.map((child) => child.value) || [];
                const allChildrenSelected = parentChildren.every((value) =>
                    this.data['kup-chip'].some((chip) => chip.id === value)
                );

                if (!allChildrenSelected) {
                    this.data['kup-chip'] = this.data['kup-chip'].filter(
                        (chip) => chip.id !== parentNode.value
                    );
                }

                parentNode = getParentNode(this.data['kup-tree'], parentNode);
            }
        } else {
            // Select: Add nodes to kup-chip
            selectedValues.forEach((value) => {
                if (!this.data['kup-chip'].some((chip) => chip.id === value)) {
                    this.data['kup-chip'].push({ id: value, value });
                }
            });

            // Check if parent can be selected
            let parentNode = getParentNode(this.data['kup-tree'], selectedNode);
            while (parentNode) {
                const parentChildren =
                    parentNode.children?.map((child) => child.value) || [];
                const allChildrenSelected = parentChildren.every((value) =>
                    this.data['kup-chip'].some((chip) => chip.id === value)
                );

                if (allChildrenSelected) {
                    if (
                        !this.data['kup-chip'].some(
                            (chip) => chip.id === parentNode.value
                        )
                    ) {
                        this.data['kup-chip'].push({
                            id: parentNode.value,
                            value: parentNode.value,
                        });
                    }
                }

                parentNode = getParentNode(this.data['kup-tree'], parentNode);
            }
        }

        // Assign new data prop to kup-chip component, triggering visual update
        this.#chips.data = [...this.data['kup-chip']];

        // Log selected values for database query
        console.log(
            'Selected values:',
            this.data['kup-chip'].map((chip) => chip.id)
        );
    }

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        //this.data['kup-chip'] = [];
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
                            displayId={this.displayChipId}
                            enableInput={true}
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
