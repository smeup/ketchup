import {
    Component,
    h,
    State,
    Prop,
    Event,
    EventEmitter,
    Watch,
    Element,
} from '@stencil/core';

import { DataTable, Row } from '../kup-data-table/kup-data-table-declarations';

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
     * Data for the detail
     */
    @Prop()
    detailData: DataTable;

    @State()
    visible = false;

    @State()
    detailVisible = false;

    @Element()
    tooltipEl: HTMLElement;

    /**
     * Triggered when a box is clicked
     */
    @Event({
        eventName: 'kupTooltipLoadDetail',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTooltipLoadDetail: EventEmitter;

    @Watch('detailData')
    onDataChanged() {
        this.detailVisible = true;
    }

    // ---- Non reactive ----
    private tooltipPosition: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    } = {};

    // check if the event kupTooltipLoadDetail was triggered
    private kupTooltipLoadDetailTriggered = false;

    private tooltipTimeout: NodeJS.Timeout;
    private loadDetailTimeout: NodeJS.Timeout;

    private wrapperEl: HTMLSpanElement;

    // ---- Private methods ----
    private hasData(): boolean {
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
        this.kupTooltipLoadDetailTriggered = true;
    }

    get rows(): Row[] {
        return this.hasData() ? this.detailData.rows : [];
    }

    // ---- Listeners ----
    private onMouseOver() {
        if (!this.tooltipTimeout) {
            this.tooltipTimeout = setTimeout(() => {
                this.tooltipTimeout = null;

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

                this.visible = true;

                if (!this.kupTooltipLoadDetailTriggered) {
                    // timeout to load detail
                    this.loadDetailTimeout = setTimeout(
                        () => this.loadDetail(),
                        250
                    );
                } else {
                    // timeout to set the detail visible
                    this.loadDetailTimeout = setTimeout(
                        () => (this.detailVisible = true),
                        250
                    );
                }
            }, 500);
        }
    }

    private onMouseLeave() {
        this.resetTimeouts();

        this.visible = false;
        this.detailVisible = false;
    }

    // ---- Render methods ----
    private getDefaultLayout() {
        return [
            <div class="left">
                <slot name="slot1" />
            </div>,
            <div class="right">
                <div>
                    <slot name="slot2" />
                </div>
                <div class="slot3">
                    <slot name="slot3" />
                </div>
                <div>
                    <slot name="slot4" />
                </div>
            </div>,
        ];
    }

    private getLayout2() {
        return (
            <div>
                <slot name="slot1" />
            </div>
        );
    }

    private getLayout3() {
        return [
            <div class="slot1">
                <slot name="slot1" />
            </div>,
            <div class="slot2">
                <slot name="slot2" />
            </div>,
            <div class="slot3">
                <slot name="slot3" />
            </div>,
        ];
    }

    private createTooltip() {
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
        if (this.hasData()) {
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
            visible: this.detailVisible,
        };

        const tooltipStyle = {
            ...this.tooltipPosition,
        };

        return (
            <div id="tooltip" hidden={!this.visible} style={tooltipStyle}>
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
