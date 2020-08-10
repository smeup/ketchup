import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Watch,
    Element,
    State,
} from '@stencil/core';

import { Row } from '../kup-data-table/kup-data-table-declarations';
import {
    TooltipData,
    TooltipDetailData,
    TooltipAction,
    TooltipObject,
} from './kup-tooltip-declarations';

@Component({
    tag: 'kup-tooltip',
    styleUrl: 'kup-tooltip.scss',
    shadow: true,
})
export class KupTooltip {
    /**
     * Layout used to display the items
     */
    @Prop()
    layout = '1';

    /**
     * Data for top section
     */
    @Prop()
    data: TooltipData;

    /**
     * Data for the detail
     */
    @Prop()
    detailData: TooltipDetailData;

    /**
     * Timeout for loadDetail
     */
    @Prop()
    detailTimeout: number = 800;

    /**
     * Timeout for tooltip
     */
    @Prop()
    loadTimeout: number = 1000;

    @State()
    visible = false;

    @Element()
    tooltipEl: HTMLElement;

    @Event({
        eventName: 'kupTooltipLoadData',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadData: EventEmitter;

    @Event({
        eventName: 'kupTooltipLoadDetail',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadDetail: EventEmitter;

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
        eventName: 'kupDefaultOptionClicked',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupDefaultOptionClicked: EventEmitter<{
        obj: TooltipObject;
    }>;

    @Watch('data')
    onDataChanged() {
        if (this.visible) {
            this.positionRecalc();
            // loading detail
            this.loadDetailTimeout = setTimeout(
                () => this.loadDetail(),
                this.detailTimeout
            );
        }
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

    private wrapperEl: HTMLSpanElement;

    // ---- Private methods ----
    private hasDetailData(): boolean {
        return !!this.detailData && !!this.detailData.rows;
    }

    private hasActionsData(): boolean {
        return (
            this.hasDetailData() &&
            !!this.detailData.actions &&
            !!this.detailData.actions.command
        );
    }

    private resetTimeouts() {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
            this.tooltipTimeout = null;
        }

        if (this.loadDetailTimeout) {
            clearTimeout(this.loadDetailTimeout);
            this.loadDetailTimeout = null;
        }

        if (this.mouseLeaveTimeout) {
            clearTimeout(this.mouseLeaveTimeout);
            this.mouseLeaveTimeout = null;
        }
    }

    private loadDetail() {
        this.loadDetailTimeout = null;
        this.kupTooltipLoadDetail.emit();
    }

    get rows(): Row[] {
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
    private onMouseOver() {
        // Cancello il mouseLeaveTimeout così se l'utente
        // esce e rientra rimanendo nell'intervallo di 500ms
        // il tip non si chiude
        if (this.mouseLeaveTimeout) {
            clearTimeout(this.mouseLeaveTimeout);
            this.mouseLeaveTimeout = null;
        }
        if (!this.tooltipTimeout) {
            this.tooltipTimeout = setTimeout(() => {
                this.tooltipTimeout = null;

                this.visible = true;

                this.kupTooltipLoadData.emit();
            }, this.loadTimeout);
        }
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

    private onDefaultOptionClicked(event: Event) {
        //Evento di default al click
        event.stopPropagation();
        this.kupDefaultOptionClicked.emit({ obj: this.getObj() });
    }

    private onMouseLeave() {
        // Se non sono presenti azioni si chiude immediatamente, altrimenti
        // lo chiudo dopo 500ms
        let timeout = this.hasActionsData() ? 500 : 0;
        this.mouseLeaveTimeout = setTimeout(() => {
            // reset data
            this.data = null;
            this.detailData = null;

            // reset visibility
            this.visible = false;

            // reset timeouts
            this.resetTimeouts();
        }, timeout);
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

    private positionRecalc() {
        // resetting position
        this.tooltipPosition = {};

        const rect = this.wrapperEl.getBoundingClientRect();
        let threshold = this.hasDetailData ? 300 : 150;

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
        if (!this.data) {
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
        let detailActions = null;
        //console.log(this.detailData);
        if (this.hasDetailData()) {
            detailContent = this.rows.map((row) =>
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
                                tooltip={action.text}
                                icon={action.icon}
                                onKupButtonClick={(event) =>
                                    this.onActionCommandClicked(event, action)
                                }
                            ></kup-button>
                        </div>
                    ));
            }
        }

        const detailClass = {
            visible: this.hasDetailData(),
        };

        const tooltipStyle = {
            ...this.tooltipPosition,
        };

        return (
            <div
                id="tooltip"
                hidden={!this.visible || !this.data}
                style={tooltipStyle}
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                <div id="main-content" class={mainContentClass}>
                    {mainContent}
                </div>
                <div id="detail" class={detailClass}>
                    {detailContent}
                </div>
                <div id="detail-actions" hidden={!this.hasActionsData()}>
                    {detailActions}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div
                id="wrapper"
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                ref={(el) => (this.wrapperEl = el)}
            >
                <slot />

                {this.createTooltip()}
            </div>
        );
    }
}
