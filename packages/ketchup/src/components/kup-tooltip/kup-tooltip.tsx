import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
    State,
    h,
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
import { logMessage } from '../../utils/debug-manager';
import { Row } from '../kup-data-table/kup-data-table-declarations';
//import { positionRecalc } from '../../utils/recalc-position';

@Component({
    tag: 'kup-tooltip',
    styleUrl: 'kup-tooltip.scss',
    shadow: true,
})
export class KupTooltip {
    @Element() rootElement: HTMLElement;
    /**
     * Layout used to display the items
     */
    @Prop() layout = '1';

    /**
     * Data for top section
     */
    @Prop() data: TooltipData;

    /**
     * Data for the detail
     */
    @Prop() detailData: TooltipDetailData;

    /**
     * Data for cell options
     */
    @Prop() cellOptions: TooltipCellOptions;

    /**
     * Timeout for loadDetail
     */
    @Prop() detailTimeout: number = 800;

    /**
     * Timeout for tooltip
     */
    @Prop() loadTimeout: number = 1000;

    /**
     * Container element for tooltip
     */
    @Prop() relatedObject: TooltipRelatedObject;

    @State() visible = false;

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
            this.resetAll();
            return;
        }
        if (this.data == null) {
            this.resetAll();
            return;
        }
        this.visible = true;
        this._mouseIsOn = true;
        this.positionRecalc_();
        this.startLoadDetail(true);
    }

    @Watch('cellOptions')
    @Watch('detailData')
    onTooltipDetailChanged() {
        if (this.relatedObject == null) {
            this.resetAll();
            return;
        }
        if (this.data == null) {
            this.resetAll();
            return;
        }
        if (this.cellOptions != null || this.detailData != null) {
            this.positionRecalc_();
        }
        this.waitingServerResponse = false;
    }

    // ---- Non reactive ----
    private tooltipPosition: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    } = {};

    private tooltipTimeout: NodeJS.Timeout;
    private loadDetailTimeout: NodeJS.Timeout;
    private mouseLeaveTimeout: NodeJS.Timeout;
    private wrapperEl: HTMLElement;
    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    private viewMode: ViewMode = ViewMode.TOOTLIP;

    private _mouseIsOn: boolean = false;
    private waitingServerResponse = false;

    // ---- Public methods  ----
    public mouseIsOn(): boolean {
        return this._mouseIsOn;
    }

    // ---- Private methods ----
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
        return this.viewMode == ViewMode.TOOTLIP;
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
                    class="title"
                    onClick={(event) => this.onDefaultOptionClicked(event)}
                >
                    {datatitle}
                </div>
                <kup-button
                    flat={true}
                    icon="open-in-new"
                    onKupButtonClick={(event) =>
                        this.onDefaultActionClicked(event)
                    }
                ></kup-button>
                <kup-button
                    flat={true}
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
                this.resetAll();
            }, timeout);
        }
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
        this.viewMode = ViewMode.TOOTLIP;
    }

    // ---- Render methods ----
    private getDefaultLayout() {
        return [
            <div class="left">
                <kup-image
                    resource={this.getImage()}
                    sizeX="75px"
                    sizeY="75px"
                ></kup-image>
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
                                <span class="label">{info.label}: </span>
                                {' ' + info.value}
                            </div>
                        );
                    }
                }
            }
        }

        return infos;
    }

    private positionRecalc_() {
        /*
        if (this.visible == true) {
            if (this.relatedObject != null) {
                this.wrapperEl.classList.add('visible');
                this.wrapperEl.classList.add('dynamic-position-active');
                let offsetH = this.hasDetailData ? 300 : 150;
                let offsetW = 350;
                let margin = 3;
                positionRecalc(
                    this.wrapperEl,
                    this.relatedObject.element,
                    margin,
                    offsetH,
                    offsetW
                );
                this.tooltipPosition = {};
                this.tooltipPosition.top = this.wrapperEl.style.top;
                this.tooltipPosition.left = this.wrapperEl.style.left;
                this.tooltipPosition.right = this.wrapperEl.style.right;
                this.tooltipPosition.bottom = this.wrapperEl.style.bottom;
                return;
            }
        }
        this.wrapperEl.classList.remove('visible');
        this.wrapperEl.classList.remove('dynamic-position-active');
        */
        // resetting position
        this.tooltipPosition = {};
        let rect;
        if (this.relatedObject != null) {
            rect = this.relatedObject.element.getBoundingClientRect();
        } else {
            rect = this.wrapperEl.getBoundingClientRect();
        }
        let threshold =
            this.hasDetailData() || this.hasCellOptionsData() ? 300 : 150;

        // vertical position
        if (window.innerHeight - rect.bottom < threshold) {
            this.tooltipPosition.bottom = `${
                window.innerHeight - rect.top + 3
            }px`;
        } else {
            this.tooltipPosition.top = `${rect.bottom + 3}px`;
        }

        // horizontal position
        if (window.innerWidth - rect.left < 350) {
            // 350 is the min-width of the tooltip
            this.tooltipPosition.right = `${window.innerWidth - rect.right}px`;
        } else {
            this.tooltipPosition.left = `${rect.left}px`;
        }
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
                        <div class="detail-row__label">
                            {row.cells['label'].value}
                        </div>
                        <div class="detail-row__value">
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
                                flat={true}
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
                    {...this.cellOptions.config}
                    {...this.cellOptions}
                ></kup-tree>,
            ];
        }
        if (this.hasDetailData() || this.hasCellOptionsData()) {
            detailActions = [
                ...detailActions,
                <div class="detail-actions__box">
                    <kup-button
                        flat={true}
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
        };

        const tooltipStyle = {
            ...this.tooltipPosition,
        };
        return (
            <div
                id="tooltip"
                hidden={!this.visible}
                style={tooltipStyle}
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
            this.viewMode == ViewMode.TOOTLIP
                ? ViewMode.CELL_OPTIONS
                : ViewMode.TOOTLIP;
        this.startLoadDetail(false);
    }
    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
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
                ref={(el) => (this.wrapperEl = el)}
            >
                {this.createTooltip()}
            </div>
        );
    }
}
