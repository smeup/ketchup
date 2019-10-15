import {
  Component,
  /*Event,
  EventEmitter,
  Prop,
  State,
  Watch,*/
  h,
  Host
} from '@stencil/core'


@Component({
  tag: 'kup-radio-element',
  styleUrl: 'kup-radio-element.scss',
  shadow: true
})
export class KupRadioElement {

  render() {
    return [
      <Host/>
    ];
  }
}
