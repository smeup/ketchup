import {
  Component,
  // Event,
  // EventEmitter,
  Prop,
  // State,
  // Watch,
  h,
  Host
} from '@stencil/core'


@Component({
  tag: 'kup-radio-element',
  styleUrl: 'kup-radio-element.scss',
  shadow: true,
})
export class KupRadioElement {
  /**
   * Specifies if the radio element is selected or not.
   */
  @Prop({reflect: true})
  checked: boolean = false;

  /**
   * Flag: the radio button is disabled.
   */
  @Prop({reflect: true})
  disabled: boolean = false;

  /**
   * Label to assign to the radio button.
   */
  @Prop()
  label: string = '';

  // According to the link below, it may be useful to change the structure and drop the usage of :before and :after pseudo elements
  // to allow a better accessibility for the radio element.
  // https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/radio/radio-1/radio-1.html
  render() {
    return <Host
      aria-checked={this.checked}
      aria-disabled={this.disabled}
      aria-label={this.label}
      aria-role="radio"
      tabindex="0"
      />;
  }
}
