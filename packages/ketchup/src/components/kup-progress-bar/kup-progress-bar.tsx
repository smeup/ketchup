import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'kup-progress-bar',
  styleUrl: 'kup-progress-bar.scss',
  shadow: true,
})
export class KupProgressBar {
  /**
   * FLag to show or hide the progress bar's label
   */
  @Prop()
  hideLabel = false;

  /**
   * Determines if the progress bar must be drawn in small mode
   * For SmeUP users, this corresponds to V2fogog style.
   */
  @Prop({reflect: true})
  isSmall = false;

  /**
   * Specifies a text for the bar's label
   */
  @Prop()
  labelText: string;

  /**
   * The current value the progress bar must display.
   */
  @Prop()
  value = 0;

  render() {
    const valueStyle = {
      width: `${this.value}%`,
    };

    let label = null;
    if (!this.hideLabel) {
      if (this.labelText) {
        label = this.labelText;
      } else {
        label = this.value + '%';
      }
    }

    return (
      <div class="progress-bar">
        <div class="progress-bar-percentage" style={valueStyle}>
          <span>{label}</span>
        </div>
      </div>
    );
  }
}
