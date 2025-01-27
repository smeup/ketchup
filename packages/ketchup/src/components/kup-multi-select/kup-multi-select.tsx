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
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupMultiSelectEventPayload,
    KupMultiSelectProps,
} from './kup-multi-select-declarations';
import { FSwitchSizing } from '../../f-components/f-switch/f-switch-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FChipType } from '../../f-components/f-chip/f-chip-declarations';
import {
    KupCardCSSClasses,
    KupCardIds,
} from '../kup-card/kup-card-declarations';
import { KupColumnMenuIds } from '../../utils/kup-column-menu/kup-column-menu-declarations';
import {
    KupTreeNode,
    KupTreeNodeSelectedEventPayload,
} from '../kup-tree/kup-tree-declarations';

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

    // Other state properties for handling arrays, maybe not needed, depends on how we will manage the apply button

    @State() buttonArray: any[] = [];
    @State() buttonsIds: string[] = [];

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

    onKupItemClick(e: CustomEvent<KupTreeNodeSelectedEventPayload>) {
        console.log('prova');
    }

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
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="sub-chip">
                        {this.data['kup-chip'] ? (
                            <kup-chip
                                data={this.data['kup-chip']}
                                type={FChipType.INPUT}
                                id={KupCardIds.COLUMNS_LIST}
                            />
                        ) : (
                            <kup-chip
                                type={FChipType.INPUT}
                                id={KupCardIds.COLUMNS_LIST}
                            />
                        )}
                        {this.buttonsIds.includes(
                            KupColumnMenuIds.BUTTON_APPLY
                        ) ? (
                            <kup-button
                                {...this.buttonArray.find(
                                    (x) =>
                                        x.id === KupColumnMenuIds.BUTTON_APPLY
                                )}
                            />
                        ) : null}
                    </div>
                    <div class="sub-tree">
                        <kup-tree
                            data={this.data['kup-tree']}
                            class="kup-full-width"
                            globalFilter
                            id="multi-select-tree"
                            onKup-tree-nodeselected={(
                                e: CustomEvent<KupTreeNodeSelectedEventPayload>
                            ) => this.onKupItemClick(e)}
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
