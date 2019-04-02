import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ketchup-btn",
  styleUrl: "ketchup-btn.scss",
  shadow: true
})
export class KetchupBtn {
  @Prop() buttons: any[];

  // setup props
  @Prop() config: any = {};

  @State() selectedBtnIndex: number;

  onBtnClicked(event: CustomEvent) {
    if (this.config.showSelection) {
      this.selectedBtnIndex = parseInt(
        (event.target as HTMLElement).dataset.id
      );
    }
  }

  render() {
    let buttonsInGrid = [];
    if (this.config.columns && this.config.columns > 0) {
      this.buttons.forEach((btn, index) => {
        const mod = index % this.config.columns;

        if (mod === 0) {
          // new row
          buttonsInGrid.push([]);
        }

        buttonsInGrid[buttonsInGrid.length - 1].push(btn);
      });
    } else {
      if (this.config.horizontal) {
        buttonsInGrid[0] = this.buttons;
      } else {
        buttonsInGrid = this.buttons.map(b => {
          const arr = [];
          arr.push(b);
          return arr;
        });
      }
    }

    let buttonsJsx = null;
    let id = 0;
    if (buttonsInGrid.length > 0) {
      buttonsJsx = buttonsInGrid.map(btns => {
        const btnsJsx = btns.map(btn => {
          let btnClass = this.config.buttonClass || "";
          if (id === this.selectedBtnIndex) {
            btnClass += " btn-selected";
          }

          return (
            <td>
              <ketchup-button
                iconUrl={this.config.iconUrl}
                label={btn.value}
                iconClass={btn.iconClass}
                fillspace={this.config.fillspace}
                showtext={this.config.showtext}
                showicon={this.config.showicon}
                rounded={this.config.rounded}
                textmode={this.config.textmode}
                transparent={this.config.transparent}
                buttonClass={btnClass}
                flat={this.config.flat}
                data-id={id++}
                onKetchupButtonClicked={ev => this.onBtnClicked(ev)}
                align={this.config.align}
                class={this.config.fillspace ? "fillspace" : ""}
              />
            </td>
          );
        });

        return <tr>{btnsJsx}</tr>;
      });
    }

    let compClass = "btn-container";
    if (this.config.fillspace) {
      compClass += " fillspace";
    }

    if (!this.config.horizontal) {
      compClass += " vertical";
    }

    //- Composes the style of the button -
    // TODO this is how currently JSX can set custom CSS vars. Check periodically for a better way
    // It simply sets them in style inside the html. Not the most elegant way,
    // https://medium.com/geckoboard-under-the-hood/how-we-made-our-product-more-personalized-with-css-variables-and-react-b29298fde608
    // https://medium.com/fbdevclagos/how-to-leverage-styled-components-and-css-variables-to-build-truly-reusable-components-in-react-4bbf50467666
    const commonStyle = {};

    if (this.config.btnStyle) {
      if (this.config.btnStyle.fontColor) {
        commonStyle["--kup-button_text-color"] = this.config.btnStyle.fontColor;
      }

      if (this.config.btnStyle.fontName) {
        commonStyle["--kup-button_font-family"] = this.config.btnStyle.fontName;
      }

      if (this.config.btnStyle.bold) {
        commonStyle["--kup-button_font-weight"] = 700;
      }

      if (this.config.borderColor) {
        commonStyle["--kup-button_border-color"] = this.config.borderColor;
      }
    }

    console.log(commonStyle);

    return (
      <table class={compClass} style={commonStyle}>
        <tbody>{buttonsJsx}</tbody>
      </table>
    );
  }
}
