import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
    State,
    h,
    Method,
} from '@stencil/core';

import {
    TooltipData,
    TooltipDetailData,
    TooltipRelatedObject,
    TooltipAction,
    TooltipObject,
    ViewMode,
    TooltipCellOptions,
} from './kup-tooltip-declarations';
import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { Column, Row } from '../kup-data-table/kup-data-table-declarations';
import { positionRecalc } from '../../utils/recalc-position';
import { TreeNode, TreeNodePath } from '../kup-tree/kup-tree-declarations';
import { KupTree } from '../kup-tree/kup-tree';

@Component({
    tag: 'kup-tooltip',
    styleUrl: 'kup-tooltip.scss',
    shadow: true,
})
export class KupTooltip {
    @Element() rootElement: HTMLElement;
    @State() visible = false;

    /**
     * Data for cell options
     */
    @Prop() cellOptions: TooltipCellOptions;
    /**
     * Data for top section
     */
    @Prop() data: TooltipData;
    /**
     * Data for the detail
     */
    @Prop() detailData: TooltipDetailData;
    /**
     * Timeout for loadDetail
     */
    @Prop() detailTimeout: number = 800;
    /**
     * Layout used to display the items
     */
    @Prop() layout = '1';
    /**
     * Timeout for tooltip
     */
    @Prop() loadTimeout: number = 1000;
    /**
     * Container element for tooltip
     */
    @Prop() relatedObject: TooltipRelatedObject;

    /**
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();

    @Event({
        eventName: 'kupTooltipLoadData',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadData: EventEmitter<{
        relatedObject: TooltipRelatedObject;
        tooltip: KupTooltip;
    }>;

    @Event({
        eventName: 'kupTooltipLoadDetail',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadDetail: EventEmitter<{
        relatedObject: TooltipRelatedObject;
        tooltip: KupTooltip;
    }>;

    @Event({
        eventName: 'kupTooltipLoadCellOptions',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadCellOptions: EventEmitter<{
        relatedObject: TooltipRelatedObject;
        tooltip: KupTooltip;
    }>;

    @Event({
        eventName: 'kupActionCommandClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupActionCommandClicked: EventEmitter<{
        actionCommand: TooltipAction;
    }>;

    @Event({
        eventName: 'kupDefaultActionClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupDefaultActionClicked: EventEmitter<{
        obj: TooltipObject;
    }>;

    @Event({
        eventName: 'kupDefaultPreviewClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupDefaultPreviewClicked: EventEmitter<{
        obj: TooltipObject;
    }>;

    @Event({
        eventName: 'kupDefaultOptionClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupDefaultOptionClicked: EventEmitter<{
        obj: TooltipObject;
    }>;

    @Event({
        eventName: 'kupTooltipTreeNodeExpand',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeExpand: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        usesDynamicExpansion?: boolean;
        dynamicExpansionRequireChildren?: boolean;
        tree: KupTree;
    }>;

    @Event({
        eventName: 'kupTooltipTreeNodeButtonClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeButtonClicked: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        column: Column;
        columnName: string;
        auto: boolean;
        tree: KupTree;
    }>;

    /**
     * Fired when a node of the tree has been selected
     */
    @Event({
        eventName: 'kupTooltipTreeNodeSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeSelected: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        columnName: string;
        auto: boolean;
        tree: KupTree;
    }>;

    @Event({
        eventName: 'kupTooltipTreeNodeDblClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeDblClick: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
    }>;

    @Event({
        eventName: 'kupTooltipTreeDynamicMassExpansion',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeDynamicMassExpansion: EventEmitter<{
        treeNodePath?: TreeNodePath;
        treeNode?: TreeNode;
        expandAll?: boolean;
    }>;

    @Watch('relatedObject')
    onElementChanged() {
        if (this.relatedObject != null) {
            this.loadAll();
        } else {
            this.resetAll();
        }
    }

    @Watch('data')
    onDataChanged() {
        this.waitingServerResponse = false;
        if (this.relatedObject == null) {
            this.onElementChanged();
            return;
        }
        if (this.data == null) {
            this.relatedObject = null;
            return;
        }
        this.visible = true;
        //this._mouseIsOn = true;
        this.startLoadDetail(true);
    }

    @Watch('cellOptions')
    @Watch('detailData')
    onTooltipDetailChanged() {
        if (this.relatedObject == null) {
            this.onElementChanged();
            return;
        }
        if (this.data == null) {
            this.relatedObject = null;
            return;
        }

        this.waitingServerResponse = false;
    }

    // ---- Non reactive ----

    private tooltipTimeout: NodeJS.Timeout;
    private loadDetailTimeout: NodeJS.Timeout;
    private mouseLeaveTimeout: NodeJS.Timeout;

    private viewMode: ViewMode = ViewMode.TOOLTIP;
    private firstLoad: boolean = false;

    private _mouseIsOn: boolean = false;
    private waitingServerResponse = false;

    // ---- Public methods  ----

    @Method()
    async setTooltipInfo(relatedObject: TooltipRelatedObject) {
        //console.log('tooltip setTooltipInfo');
        this.resetAll();
        this.relatedObject = relatedObject;
    }

    @Method()
    async unsetTooltipInfo() {
        if (!this.mouseIsOn()) {
            //console.log('tooltip unsetTooltipInfo');
            this.onMouseLeave();
        } else {
            //console.log('tooltip unsetTooltipInfo mouseIsoN');
        }
    }

    // ---- Private methods ----
    private mouseIsOn() {
        return this._mouseIsOn || this.waitingServerResponse;
    }

    private hasDetailData(): boolean {
        return !!this.detailData && !!this.detailData.rows;
    }

    private hasCellOptionsData(): boolean {
        return this.cellOptions != null;
    }

    private hasActionsData(): boolean {
        return (
            this.hasDetailData() &&
            !!this.detailData.actions &&
            !!this.detailData.actions.command
        );
    }

    private startLoadDetail(withTimeout: boolean) {
        this.waitingServerResponse = true;
        // loading detail
        var timeoutMs = withTimeout == true ? this.detailTimeout : 0;
        this.loadDetailTimeout = setTimeout(() => {
            this.loadDetail();
            this.firstLoad = true;
        }, timeoutMs);
    }

    private resetTimeouts() {
        this.resetTooltipTimeout();
        this.resetLoadDetailTimeout();
        this.resetMouseLeaveTimeout();
    }

    private resetTooltipTimeout() {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
            this.tooltipTimeout = null;
        }
    }

    private resetLoadDetailTimeout() {
        if (this.loadDetailTimeout) {
            clearTimeout(this.loadDetailTimeout);
            this.loadDetailTimeout = null;
        }
    }

    private resetMouseLeaveTimeout() {
        if (this.mouseLeaveTimeout) {
            clearTimeout(this.mouseLeaveTimeout);
            this.mouseLeaveTimeout = null;
        }
    }

    private isViewModeTooltip(): boolean {
        return this.viewMode == ViewMode.TOOLTIP;
    }

    private isViewModeCellOptions(): boolean {
        return this.viewMode == ViewMode.CELL_OPTIONS;
    }

    private loadDetail() {
        this.resetLoadDetailTimeout();
        if (this.relatedObject == null) {
            this.resetAll();
            return;
        }
        if (this.data == null) {
            this.resetAll();
            return;
        }
        if (this.isViewModeTooltip()) {
            this.cellOptions = null;
            this.kupTooltipLoadDetail.emit({
                relatedObject: this.relatedObject,
                tooltip: this,
            });
        } else if (this.isViewModeCellOptions()) {
            this.detailData = null;
            this.kupTooltipLoadCellOptions.emit({
                relatedObject: this.relatedObject,
                tooltip: this,
            });
        }
    }

    private getRows(): Row[] {
        return this.hasDetailData() ? this.detailData.rows : [];
    }

    private getImage(): string {
        if (this.data) {
            return this.data.image;
        }

        return '';
    }

    private getTitle(): string {
        let datatitle: string = '';
        if (this.data) {
            datatitle = this.data.title;
        }
        const title = (
            <div>
                <div
                    class="title ellipsis"
                    onClick={(event) => this.onDefaultOptionClicked(event)}
                >
                    {datatitle}
                </div>
                <kup-button
                    icon="open-in-new"
                    onKupButtonClick={(event) =>
                        this.onDefaultActionClicked(event)
                    }
                ></kup-button>
                <kup-button
                    icon="search"
                    onKupButtonClick={(event) =>
                        this.onDefaultPreviewClicked(event)
                    }
                ></kup-button>
            </div>
        );
        return title;
    }

    private getContent() {
        return this.data ? this.data.content : {};
    }

    private getObj(): TooltipObject {
        const nullObj: TooltipObject = { t: '', p: '', k: '', url: '' };
        return this.data ? this.data.obj : nullObj;
    }

    // ---- Listeners ----
    private loadAll() {
        this.resetAll();
        this.prepareLoadData();
    }

    private prepareLoadData() {
        this.waitingServerResponse = true;
        this.tooltipTimeout = setTimeout(() => {
            if (this.relatedObject == null) {
                return;
            }
            this.kupTooltipLoadData.emit({
                relatedObject: this.relatedObject,
                tooltip: this,
            });
        }, this.loadTimeout);
    }

    private onActionCommandClicked(event: Event, action: TooltipAction) {
        //console.log("Emit kupActionCommandClicked: " + JSON.stringify(action));
        // Blocco la propagazione del onKupButtonClicked per evitare che lo stesso click
        // sia gestito da due handler differenti, creando problemi sulla navigazione
        event.stopPropagation();
        this.kupActionCommandClicked.emit({ actionCommand: action });
    }

    private onDefaultActionClicked(event: Event) {
        //Evento di default al click
        event.stopPropagation();
        this.kupDefaultActionClicked.emit({ obj: this.getObj() });
    }

    private onDefaultPreviewClicked(event: Event) {
        //Evento di default al click
        event.stopPropagation();
        this.kupDefaultPreviewClicked.emit({ obj: this.getObj() });
    }

    private onDefaultOptionClicked(event: Event) {
        //Evento di default al click
        event.stopPropagation();
        this.kupDefaultOptionClicked.emit({ obj: this.getObj() });
    }

    private onMouseEnter() {
        // Cancello il mouseLeaveTimeout così se l'utente
        // esce e rientra rimanendo nell'intervallo di 500ms
        // il tip non si chiude
        this.resetMouseLeaveTimeout();
        this._mouseIsOn = true;
    }

    private onMouseLeave() {
        this.resetMouseLeaveTimeout();

        if (!this.waitingServerResponse) {
            let timeout = 800;
            this.mouseLeaveTimeout = setTimeout(() => {
                this.relatedObject = null;
                this.firstLoad = false;
            }, timeout);
        }
    }

    private onKupTreeNodeExpand(e: CustomEvent) {
        e.stopPropagation();
        if (e.detail.usesDynamicExpansion != true) {
            return;
        }
        if (e.detail.dynamicExpansionRequireChildren != true) {
            return;
        }
        // TreeNode is now expanded -> Fires expanded event
        this.kupTreeNodeExpand.emit({
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
            usesDynamicExpansion: e.detail.usesDynamicExpansion,
            dynamicExpansionRequireChildren:
                e.detail.dynamicExpansionRequireChildren,
            tree: e.detail.tree,
        });
    }

    private onKupTreeNodeSelected(e: CustomEvent) {
        e.stopPropagation();

        this.kupTreeNodeSelected.emit({
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
            columnName: e.detail.columnName,
            auto: e.detail.auto,
            tree: e.detail.tree,
        });
    }

    private onKupTreeNodeButtonClicked(e: CustomEvent) {
        e.stopPropagation();

        this.kupTreeNodeButtonClicked.emit({
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
            column: e.detail.column,
            columnName: e.detail.columnName,
            auto: e.detail.auto,
            tree: e.detail.tree,
        });
    }

    private onKupTreeNodeDblClick(e: CustomEvent) {
        e.stopPropagation();

        this.kupTreeNodeDblClick.emit({
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
        });
    }

    private onKupTreeDynamicMassExpansion(e: CustomEvent) {
        e.stopPropagation();

        this.kupTreeDynamicMassExpansion.emit({
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
            expandAll: e.detail.expandAll,
        });
    }

    private resetAll() {
        // reset timeouts
        this.resetTimeouts();
        // reset data
        this.data = null;
        this.detailData = null;
        this.cellOptions = null;

        // reset visibility
        this.visible = false;
        this._mouseIsOn = false;
        this.waitingServerResponse = false;
        this.viewMode = ViewMode.TOOLTIP;
    }

    // ---- Render methods ----
    private getDefaultLayout() {
        return [
            <div class="left">
                <img class="image-container" src={this.getImage()}></img>
            </div>,
            <div class="right">
                <h3>{this.getTitle()}</h3>
                {this.getInfos()}
            </div>,
        ];
    }

    private getLayout2() {
        return (
            <div>
                <h3>{this.getTitle()}</h3>
            </div>
        );
    }

    private getLayout3() {
        return [
            <div>
                <h4>{this.getTitle()}</h4>
            </div>,
            this.getInfos(),
        ];
    }

    private getInfos() {
        let infos = null;

        const content = this.getContent();
        if (content) {
            infos = [];

            for (let i = 1; i <= 2; i++) {
                const info = content[`info${i}`];

                if (info && info.label && info.value) {
                    if (info.label != '' && info.value != '') {
                        infos.push(
                            <div>
                                <div class="label ellipsis">{info.label}</div>
                                <div class="value ellipsis">{info.value}</div>
                            </div>
                        );
                    }
                }
            }
        }

        return infos;
    }

    private createTooltip() {
        if (this.data == null) {
            return null;
        }

        let mainContent = null;
        const mainContentClass = {};

        if (this.layout === '2') {
            mainContent = this.getLayout2();
            mainContentClass['layout2'] = true;
        } else if (this.layout === '3') {
            mainContent = this.getLayout3();
            mainContentClass['layout3'] = true;
        } else {
            mainContent = this.getDefaultLayout();
        }

        let detailContent = null;
        let detailActions = [];
        if (this.hasDetailData()) {
            detailContent = this.getRows().map((row) =>
                row.cells['label'].value === '' ||
                row.cells['value'].value === '' ? (
                    <span></span>
                ) : (
                    <div class="detail-row">
                        <div class="detail-row__label ellipsis">
                            {row.cells['label'].value}
                        </div>
                        <div class="detail-row__value ellipsis">
                            {row.cells['value'].value}
                        </div>
                    </div>
                )
            );
            if (this.hasActionsData()) {
                detailActions = this.detailData.actions.command
                    .slice(0, 5)
                    .map((action) => (
                        <div class="detail-actions__box">
                            <kup-button
                                title={action.text}
                                icon={action.icon}
                                onKupButtonClick={(event) =>
                                    this.onActionCommandClicked(event, action)
                                }
                            ></kup-button>
                        </div>
                    ));
            }
        }
        if (this.hasCellOptionsData()) {
            detailContent = [
                <kup-tree
                    class="full-width"
                    showFilter={true}
                    {...this.cellOptions.config}
                    {...this.cellOptions}
                    tooltipEnabled={false}
                    onKupTreeNodeCollapse={(e) => e.stopPropagation()}
                    onKupTreeNodeExpand={(e) => this.onKupTreeNodeExpand(e)}
                    onKupTreeNodeSelected={(e) => this.onKupTreeNodeSelected(e)}
                    onKupTreeNodeButtonClicked={(e) =>
                        this.onKupTreeNodeButtonClicked(e)
                    }
                    onKupDidLoad={(e) => e.stopPropagation()}
                    onKupDidUnload={(e) => e.stopPropagation()}
                    onKupTreeNodeDblClick={(e) => this.onKupTreeNodeDblClick(e)}
                    onKupTreeDynamicMassExpansion={(e) =>
                        this.onKupTreeDynamicMassExpansion(e)
                    }
                ></kup-tree>,
            ];
        }
        if (
            this.hasDetailData() ||
            this.hasCellOptionsData() ||
            this.firstLoad
        ) {
            detailActions = [
                ...detailActions,
                <div class="detail-actions__box">
                    <kup-button
                        title={this.getTooltipForShowOptionsButton()}
                        icon={this.getIconForShowOptionsButton()}
                        onKupButtonClick={() => this.onShowRightClickOptions()}
                        onClick={(e) => e.stopPropagation()}
                    ></kup-button>
                </div>,
            ];
        }

        const detailClass = {
            visible: this.hasDetailData() || this.hasCellOptionsData(),
            [this.viewMode]: true,
            'detail-loaded': this.firstLoad,
        };

        return (
            <div
                id="tooltip"
                hidden={!this.visible}
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                <div id="main-content" class={mainContentClass}>
                    {mainContent}
                </div>
                <div id="detail" class={detailClass}>
                    {detailContent}
                </div>
                <div
                    id="detail-actions"
                    hidden={detailActions == null || detailActions.length == 0}
                >
                    {detailActions}
                </div>
            </div>
        );
    }

    getTooltipForShowOptionsButton(): string {
        if (this.isViewModeTooltip()) {
            return 'Show row options';
        } else if (this.isViewModeCellOptions()) {
            return 'Show tooltip info';
        } else {
            return '???';
        }
    }

    getIconForShowOptionsButton(): string {
        if (this.isViewModeTooltip()) {
            return 'menu';
        } else if (this.isViewModeCellOptions()) {
            return 'menu';
        } else {
            return '???';
        }
    }

    onShowRightClickOptions() {
        this.viewMode =
            this.viewMode == ViewMode.TOOLTIP
                ? ViewMode.CELL_OPTIONS
                : ViewMode.TOOLTIP;
        this.startLoadDetail(false);
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
    }

    componentDidLoad() {
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
    }

    componentDidRender() {
        if (this.visible) {
            positionRecalc(this.rootElement, this.relatedObject.element);
            this.rootElement.classList.add('dynamic-position-active');
        } else {
            this.rootElement.classList.remove('dynamic-position-active');
        }
        this.kupDebug.logRender(this, true);
    }

    render() {
        return (
            <div
                id="wrapper"
                onMouseEnter={(ev) => {
                    this.onMouseEnter();
                    ev.stopPropagation();
                }}
                onMouseLeave={(ev) => {
                    this.onMouseLeave();
                    ev.stopPropagation();
                }}
            >
                {this.createTooltip()}
            </div>
        );
    }
}
