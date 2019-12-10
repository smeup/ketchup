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
export class KupLayout {
  /**
   * Specifies how many columns the content must be organized onto.
   *
   * If this is greater than 1, then the horizontal prop will have no effect.
   */
  @Prop({reflect: true})
  columnsNumber: number = 1;

  /**
   * By default, columns size is calculated by the grid layout and it tries to give the same space to elements.
   *
   * If this is true, columns width will be calculated according to the cells content.
   * See SCSS file for more details.
   */
  @Prop({reflect: true})
  contentBasedColumnsWidth: boolean = false;

  /**
   * When true, the layout and its contents will try to take all the available horizontal space.
   */
  @Prop({reflect: true})
  fillSpace: boolean = false;

  /**
   * Tells the layout to place all elements onto a single row.
   * It does not work when columnsNumber is greater then 1.
   */
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
