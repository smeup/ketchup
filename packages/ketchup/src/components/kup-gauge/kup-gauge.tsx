import { Component, Prop } from '@stencil/core';

declare const d3: any;

@Component({
  tag: 'kup-gauge',
  styleUrl: 'kup-gauge.scss',
  shadow: true,
})
export class KupGauge {

  @Prop() colors: string[] = ['red', 'yellow', 'green'];

  @Prop() firstThreshold: number = 0;

  @Prop() maxValue: number = 0;

  @Prop() minValue: number = 0;

  @Prop() secondThreshold: number = 0;

  @Prop() showValues: boolean = true;

  @Prop() showLabels: boolean = false;

  @Prop() size: number = 200;

  @Prop() value: number = 0;

  /*
  Da prop: Valore, Max, Min, Soglia1 e Soglia2, Inversione colori, Mostra il valore, Mostra etichette.

  Da JSON: Valore, Max, Min, Soglia1 e Soglia2

  Non ha eventi.

  */

  // For the gauge
  //private gaugeContainer: HTMLDivElement;
  //private gauge: any;

  // For the arcs
  private arc1 = d3.arc();
  private arc2 = d3.arc();
  private arc3 = d3.arc();
  private arcThickness = 30;

  componentWillLoad() {
    console.log("this is the", d3);
  }

  // private initialRad = .75;

  percToDeg(perc) {
    return perc * 360;
  };

  percToRad(perc) {
    return this.degToRad(this.percToDeg(perc));
  };

  degToRad(deg) {
    return deg * Math.PI / 180;
  };

  /**
   * Provided all the necessary data, returns the string necessary for a <path/> element to build the gauge needle.
   * @param needleLength - A pure number of viewbox units indicating the needle lenght.
   * @param needleBaseRadius - Sets the needle radius in viewbox units.
   * @param centerX - X coordinate of the center of the base needle.
   * @param centerY - Y coordinate of the center of the base needle.
   * @param rotationPercentage {number} - A percentage number setting the current rotation of the needle. (0 < rotationPercentage < 1)
   * @returns {string}
   */
  paintNeedle(needleLength: number, needleBaseRadius: number, centerX: number, centerY: number, rotationPercentage: number = 0): string {
    let leftX, leftY, rightX, rightY, thetaRad, topX, topY;
    thetaRad = this.percToRad(rotationPercentage / 2); // Since the gauge is a semicircle, we must divide the percentage in half
    topX = centerX - needleLength * Math.cos(thetaRad);
    topY = centerY - needleLength * Math.sin(thetaRad);
    leftX = centerX - needleBaseRadius * Math.cos(thetaRad - Math.PI / 2);
    leftY = centerY - needleBaseRadius * Math.sin(thetaRad - Math.PI / 2);
    rightX = centerX - needleBaseRadius * Math.cos(thetaRad + Math.PI / 2);
    rightY = centerY - needleBaseRadius * Math.sin(thetaRad + Math.PI / 2);
    return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
  }


  render() {
    /*
    let perc = 45 / 100;
    let arcStartRad = this.percToRad(.75);
    let arcEndRad = arcStartRad + this.percToRad(perc / 2);
    let next_start = perc / 2;

    console.log(next_start, arcEndRad, arcStartRad);
    */

    // mathematic operations

    // Svg constants
    const halvedSize = this.size / 2; // The svg size ratio w : w / 2
    const needleCircleRadius = this.size / 16; // Arbitrary size of the base of the needle
    const needleLength = halvedSize - this.arcThickness / 2; // Calculates the length of the needle in pure units

    const a1 = this.arc1({
      innerRadius: halvedSize - this.arcThickness,
      outerRadius: halvedSize,
      startAngle: 0,
      endAngle: Math.PI / 3
    });
    const a2 = this.arc2({
      innerRadius: halvedSize - this.arcThickness,
      outerRadius: halvedSize,
      startAngle: Math.PI / 3,
      endAngle: Math.PI / 3 * 2
    });
    const a3 = this.arc3({
      innerRadius: halvedSize - this.arcThickness,
      outerRadius: halvedSize,
      startAngle: Math.PI / 3 * 2,
      endAngle: Math.PI
    });

    console.log(a1, halvedSize)

    return [
      <div
        // ref={(el) => (this.gaugeContainer = el as HTMLDivElement)}
      >
        <svg viewBox={`0 0 ${this.size} ${halvedSize + needleCircleRadius}`}>
          <g transform={`rotate(-90) translate(-${halvedSize}, ${halvedSize})`}>
            <path d={a1} style={{ fill: this.colors[0] }}/>
            <path d={a2} style={{ fill: this.colors[1] }}/>
            <path d={a3} style={{ fill: this.colors[2] }}/>
          </g>
          <circle
            cx={halvedSize}
            cy={halvedSize}
            r={needleCircleRadius}/>
          <path
            class="needle"
            d={this.paintNeedle(needleLength, needleCircleRadius, halvedSize, halvedSize, this.value)}
          />
        </svg>
      </div>,
      <p>{this.value}</p>
    ];
  }
}
