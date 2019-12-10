import {
  Component,
  Host,
  Prop,
  h,
} from '@stencil/core';

@Component({
  tag: 'kup-layout',
  styleUrl: 'kup-layout.scss',
  shadow: true,
})
export class KupCheckbox {
  @Prop({reflect: true})
  columnsNumber: number = 1;

  @Prop({reflect: true})
  fillSpace: boolean = false;

  @Prop({reflect: true})
  horizontal: boolean = false;

  render() {
    // Classes
    let layoutClasses = null;

    if (this.columnsNumber > 1) {
      layoutClasses = {
        ['lyo-multiple-columns']: true,
      }
    }

    // Styles

    let layoutStyle = null;

    if (this.columnsNumber >= 1) {
      layoutStyle = {
        ['--lyo__column-number']: this.columnsNumber,
      };
    }

    return <Host class={layoutClasses} style={layoutStyle}>
      <slot/>
    </Host>;
  }
}
