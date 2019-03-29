import { Component, Prop, State, Watch } from '@stencil/core'
import {ButtonStyle} from "./ketchup-btn-declarations";

@Component({
    tag: 'ketchup-btn',
    styleUrl: 'ketchup-btn.scss',
    shadow: true
})
export class KetchupBtn {
    @Prop() buttons: any[]

    // setup props
    @Prop() buttonClass = ''
    @Prop() fillspace = false
    @Prop() showtext = true
    @Prop() showicon = true
    @Prop() horizontal = true
    @Prop() rounded = false
    @Prop() flat = false
    @Prop() transparent = false
    @Prop() showSelection = false
    @Prop() borderColor: string
    @Prop() textmode: string
    @Prop() align: string
    @Prop() columns: number
    @Prop() btnStyle: ButtonStyle = {}
    @Prop() iconUrl: string

    @State() selectedBtnIndex: number

    @Watch('showSelection')
    onShowSelectionChanged(newValue: boolean) {
        if (!newValue && this.buttons) {
            // unselecting all buttons
            this.selectedBtnIndex = -1
        }
    }

    onBtnClicked(event: CustomEvent) {
        if (this.showSelection) {
            this.selectedBtnIndex = parseInt((event.target as HTMLElement).dataset.id)
        }
    }

    render() {
        let buttonsInGrid = []
        if (this.columns && this.columns > 0) {
            this.buttons.forEach((btn, index) => {
                const mod = index % this.columns

                if (mod === 0) {
                    // new row
                    buttonsInGrid.push([])
                }

                buttonsInGrid[buttonsInGrid.length - 1].push(btn)
            })
        } else {
            if (this.horizontal) {
                buttonsInGrid[0] = this.buttons
            } else {
                buttonsInGrid = this.buttons.map(b => {
                    const arr = []
                    arr.push(b)
                    return arr
                })
            }
        }

        let buttonsJsx = null
        let id = 0
        if (buttonsInGrid.length > 0) {
            buttonsJsx = buttonsInGrid.map(btns => {
                const btnsJsx = btns.map(btn => {
                    let btnClass = this.buttonClass || ''
                    if (id === this.selectedBtnIndex) {
                        btnClass += ' btn-selected'
                    }

                    return (
                        <td>
                            <ketchup-button
                                iconUrl={this.iconUrl}
                                label={btn.value}
                                iconClass={btn.iconClass}
                                fillspace={this.fillspace}
                                showtext={this.showtext}
                                showicon={this.showicon}
                                rounded={this.rounded}
                                textmode={this.textmode}
                                transparent={this.transparent}
                                buttonClass={btnClass}
                                flat={this.flat}
                                data-id={id++}
                                onKetchupButtonClicked={ev => this.onBtnClicked(ev)}
                                align={this.align}
                                class={this.fillspace ? 'fillspace' : ''}
                            />
                        </td>
                    )
                })

                return <tr>{btnsJsx}</tr>
            })
        }

        let compClass = 'btn-container'
        if (this.fillspace) {
            compClass += ' fillspace'
        }

        if (!this.horizontal) {
            compClass += ' vertical'
        }

        //- Composes the style of the button -
        // TODO this is how currently JSX can set custom CSS vars. Check periodically for a better way
        // It simply sets them in style inside the html. Not the most elegant way,
        // https://medium.com/geckoboard-under-the-hood/how-we-made-our-product-more-personalized-with-css-variables-and-react-b29298fde608
        // https://medium.com/fbdevclagos/how-to-leverage-styled-components-and-css-variables-to-build-truly-reusable-components-in-react-4bbf50467666
        const commonStyle = {};

        console.log(this.btnStyle);

        if (this.btnStyle.fontColor) {
            commonStyle['--kup-button_text-color'] = this.btnStyle.fontColor;
        }

        if (this.btnStyle.fontName) {
            commonStyle['--kup-button_font-family'] = this.btnStyle.fontName;
        }

        if (this.btnStyle.bold) {
            commonStyle['--kup-button_font-weight'] = 700;
        }

        if (this.borderColor) {
            commonStyle['--kup-button_border-color'] = this.borderColor;
        }

        console.log(commonStyle);

        return (
            <table
                class={compClass}
                style={commonStyle}>
                <tbody>{buttonsJsx}</tbody>
            </table>
        )
    }
}
