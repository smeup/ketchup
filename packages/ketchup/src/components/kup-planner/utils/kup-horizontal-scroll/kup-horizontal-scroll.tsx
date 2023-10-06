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
    taskGanttRef: HTMLDivElement;

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
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(() => {
            this.setScrollLeft();
        }, 50);
    }

    private setScrollLeft() {
        if (this.rootElement) {
            this.rootElement.shadowRoot.querySelector('div').scrollLeft = this.scrollNumber;
        }
    }

    render() {
        const rect = this.taskGanttRef.getBoundingClientRect();

        return (
            <div
                dir="ltr"
                style={
                    rect
                        ? {
                            margin: this.rtl
                                ? `0px ${rect.x}px 0px 0px`
                                : `0px 0px 0px ${rect.x}px`,
                        }
                        : undefined
                }
                class="scrollWrapper"
                data-scrollx="true"
                onScroll={this.horizontalScroll}
            >
                <div style={{ width: `${this.svgWidth}px` }} class="scroll" />
            </div>
        );
    }
}
