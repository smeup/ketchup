import { Component, Prop, State, Watch } from '@stencil/core'

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
  @Prop() btnStyle: any = {}
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
                borderColor={this.borderColor}
                buttonClass={btnClass}
                flat={this.flat}
                data-id={id++}
                onKetchupButtonClicked={ev => this.onBtnClicked(ev)}
                align={this.align}
                class={this.fillspace ? 'fillspace' : ''}
                btnStyle={this.btnStyle}
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

    return (
      <table class={compClass}>
        <tbody>{buttonsJsx}</tbody>
      </table>
    )
  }
}
