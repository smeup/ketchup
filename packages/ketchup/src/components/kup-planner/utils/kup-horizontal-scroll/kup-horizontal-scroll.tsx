import {
    Component,
    h,
    Element,
    Prop,
    State,
    Watch,
    Fragment,
} from '@stencil/core';

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
    scrollableTaskList: boolean = false;

    @Prop()
    listCellWidth: string = '300px';

    @Prop()
    taskListScrollWidth: number;

    @Prop()
    taskListScrollNumber: number;

    @Prop()
    horizontalScroll: (event: UIEvent) => void;

    @Prop()
    horizontalTaskListScroll: (event: UIEvent) => void;

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

    @Watch('taskListScrollNumber')
    listScrollLeft() {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.setTaskListScrollLeft();
        }, 50);
    }

    private setScrollLeft() {
        if (this.rootElement) {
            const shadowElement =
                this.rootElement.shadowRoot.querySelector('div');
            const element =
                shadowElement.children.length == 2
                    ? shadowElement.children[1]
                    : shadowElement.children[0];
            element && (element.scrollLeft = this.scrollNumber);
        }
    }

    private setTaskListScrollLeft() {
        if (this.rootElement) {
            const shadowElement =
                this.rootElement.shadowRoot.querySelector('div');
            const taskListScrollBar =
                shadowElement.children.length == 2
                    ? shadowElement.children[0]
                    : null;
            taskListScrollBar &&
                (taskListScrollBar.scrollLeft = this.taskListScrollNumber);
        }
    }

    render() {
        const w =
            this.taskListTrueRef?.getBoundingClientRect().width + 24 * 1.5 ?? 0; // 24 * 2 is the sum of padding and margin for both list and gantt, multiplied by 1.5 cause we need to add the other half to the right

        const width = +this.listCellWidth.replace('px', '');

        return (
            <Fragment>
                <div class="scroll-container">
                    {this.scrollableTaskList &&
                        this.taskListScrollWidth > width && (
                            <div
                                dir="ltr"
                                style={{
                                    margin: this.rtl
                                        ? `0px 20px 0px 20px`
                                        : `0px 20px 0px 20px`,
                                    maxWidth: `${width + 20}px`,
                                    minWidth: `${width + 20}px`,
                                }}
                                class="scrollWrapper"
                                data-scrollx="true"
                                onScroll={this.horizontalTaskListScroll}
                            >
                                <div
                                    style={{
                                        width: `${this.taskListScrollWidth}px`,
                                    }}
                                    class="scroll"
                                />
                            </div>
                        )}
                    <div
                        dir="ltr"
                        style={{
                            margin: this.rtl
                                ? `0px ${
                                      this.scrollableTaskList &&
                                      this.taskListScrollWidth > width
                                          ? 40
                                          : w
                                  }px 0px 12px`
                                : `0px 12px 0px ${
                                      this.scrollableTaskList &&
                                      this.taskListScrollWidth > width
                                          ? 40
                                          : w
                                  }px`,
                        }}
                        class="scrollWrapper"
                        data-scrollx="true"
                        onScroll={this.horizontalScroll}
                    >
                        <div
                            style={{ width: `${this.svgWidth}px` }}
                            class="scroll"
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}
