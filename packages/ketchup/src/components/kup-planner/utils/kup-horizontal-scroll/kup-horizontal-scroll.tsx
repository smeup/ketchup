import { Component, h, Element, Prop, State, Watch } from '@stencil/core';

@Component({
    tag: 'kup-horizontal-scroll',
    styleUrl: 'kup-horizontal-scroll.scss',
    shadow: true,
})
export class HorizontalScroll {
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    @Prop()
    scrollNumber: number;

    @Prop()
    svgWidth: number;

    @Prop()
    taskListTrueRef: HTMLKupTaskListElement;

    @Prop()
    rtl: boolean;

    @Prop()
    taskListWidth: number;

    @Prop()
    horizontalScroll: (event: UIEvent) => void;

    /**
     * References the root HTML element of the component (<kup-horizontal>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/
    @State()
    timeoutId: any;

    //---- Lifecycle hooks ----
    componentDidLoad() {
        this.scrollLeft();
    }

    /*-------------------------------------------------*/
    /*                   W A T C H E R S               */
    /*-------------------------------------------------*/
    @Watch('scrollNumber')
    scrollLeft() {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.setScrollLeft();
        }, 50);
    }

    private setScrollLeft() {
        if (this.rootElement) {
            this.rootElement.shadowRoot.querySelector('div').scrollLeft =
                this.scrollNumber;
        }
    }

    render() {
        const w =
            this.taskListTrueRef?.getBoundingClientRect().width + 24 * 1.5 ?? 0; // 24 * 2 is the sum of padding and margin for both list and gantt, multiplied by 1.5 cause we need to add the other half to the right

        return (
            <div
                dir="ltr"
                style={{
                    margin: this.rtl
                        ? `0px ${w}px 0px 12px`
                        : `0px 12px 0px ${w}px`,
                }}
                class="scrollWrapper"
                data-scrollx="true"
                onScroll={this.horizontalScroll}
            >
                <div style={{ width: `${this.svgWidth}px` }} class="scroll" />
            </div>
        );
    }
}
