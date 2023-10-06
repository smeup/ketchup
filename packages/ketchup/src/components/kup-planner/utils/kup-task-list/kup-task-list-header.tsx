import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'kup-task-list-header',
    styleUrl: 'kup-task-list.scss',
    shadow: false,
})
export class KupTaskListHeader {
    @Prop() headerHeight: number;
    @Prop() fontFamily: string;
    @Prop() fontSize: string;
    @Prop() rowWidth: string;

    render() {
        return (
            <div
                class="ganttTable"
                style={{
                    fontFamily: this.fontFamily,
                    fontSize: this.fontSize,
                }}
            >
                <div
                    class="ganttTable_Header"
                    style={{
                        height: `${this.headerHeight - 2}px`,
                    }}
                >
                    <div
                        class="ganttTable_HeaderItem"
                        style={{
                            minWidth: this.rowWidth,
                        }}
                    >
                        &nbsp;Name
                    </div>
                    <div
                        class="ganttTable_HeaderSeparator"
                        style={{
                            height: `${(this.headerHeight * 0.5)}px`,
                            marginTop: `${(this.headerHeight * 0.2)}px`,
                        }}
                    />
                    <div
                        class="ganttTable_HeaderItem"
                        style={{
                            minWidth: this.rowWidth,
                        }}
                    >
                        &nbsp;From
                    </div>
                    <div
                        class="ganttTable_HeaderSeparator"
                        style={{
                            height: `${(this.headerHeight * 0.5)}px`,
                            marginTop: `${(this.headerHeight * 0.25)}px`,
                        }}
                    />
                    <div
                        class="ganttTable_HeaderItem"
                        style={{
                            minWidth: this.rowWidth,
                        }}
                    >
                        &nbsp;To
                    </div>
                </div>
            </div>
        );
    }
}
