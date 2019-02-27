import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ketchup-fld',
  styleUrl: 'ketchup-fld.scss',
  shadow: true
})
export class KetchupFld {
  /**
   * The type of the FLD
   */
  @Prop() type: string;

  /**
   * Props to be passed to the button
   */
  @Prop() button: {
    [index: string]: string;
  } = {};

  render() {
    //const component =
  console.log('ssa', this.button);

    return <div class="ketchup-fld">
      <span>fld</span>
      <ketchup-button {...this.button}></ketchup-button>
    </div>;
  }
}
