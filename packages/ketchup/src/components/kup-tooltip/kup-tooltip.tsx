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

import { DataTable, Row } from '../kup-data-table/kup-data-table-declarations';
import { TooltipData } from './kup-tooltip-declarations';

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
    detailData: DataTable;

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

    @Watch('data')
    onDataChanged() {
        if (this.visible) {
            // resetting position
            this.tooltipPosition = {};

            const rect = this.wrapperEl.getBoundingClientRect();

            // vertical position
            if (window.innerHeight - rect.bottom < 150) {
                this.tooltipPosition.bottom = `${rect.height + 3}px`;
            } else {
                this.tooltipPosition.top = `${rect.height}px`;
            }

            // horizontal position
            if (window.innerWidth - rect.left < 350) {
                // 350 is the min-width of the tooltip
                this.tooltipPosition.right = `0`;
            } else {
                this.tooltipPosition.left = `0`;
            }

            // loading detail
            this.loadDetailTimeout = setTimeout(() => this.loadDetail(), 200);
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

    private wrapperEl: HTMLSpanElement;

    // ---- Private methods ----
    private hasDetailData(): boolean {
        return !!this.detailData && !!this.detailData.rows;
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
        if (this.data) {
            return this.data.title;
        }

        return '';
    }

    private getContent() {
        return this.data ? this.data.content : {};
    }

    // ---- Listeners ----
    private onMouseOver() {
        if (!this.tooltipTimeout) {
            this.tooltipTimeout = setTimeout(() => {
                this.tooltipTimeout = null;

                this.visible = true;

                this.kupTooltipLoadData.emit();
            }, 200);
        }
    }

    private onMouseLeave() {
        // reset data
        this.data = null;
        this.detailData = null;

        // reset visibility
        this.visible = false;

        // reset timeouts
        this.resetTimeouts();
    }

    // ---- Render methods ----
    private getDefaultLayout() {
        return [
            <div class="left">
                <img src={this.getImage()} width="75" height="75" />
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

                if (info && info.label && info.label) {
                    infos.push(
                        <div>
                            <span class="label">{info.label}: </span>
                            {' ' + info.value}
                        </div>
                    );
                }
            }
        }

        return infos;
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
        if (this.hasDetailData()) {
            detailContent = this.rows.map((row) => (
                <div class="detail-row">
                    <div class="detail-row__label">
                        {row.cells['label'].value}
                    </div>
                    <div class="detail-row__value">
                        {row.cells['value'].value}
                    </div>
                </div>
            ));
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
            >
                <div id="main-content" class={mainContentClass}>
                    {mainContent}
                </div>
                <div id="detail" class={detailClass}>
                    {detailContent}
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

                {/* <kup-portal
                    isVisible={this.visible}
                    nodes={this.createTooltip()}
                    portalParentRef={this.tooltipEl}
                    styleNode={this.tooltipEl.shadowRoot.querySelector('style')}
                    refOffset={this.tooltipPosition}
                /> */}
            </div>
        );
    }
}
