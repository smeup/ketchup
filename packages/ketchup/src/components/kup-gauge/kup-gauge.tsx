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



  render() {
    let perc = 45 / 100;
    let arcStartRad = this.percToRad(.75);
    let arcEndRad = arcStartRad + this.percToRad(perc / 2);
    let next_start = perc / 2;

    console.log(next_start, arcEndRad, arcStartRad);

    const a1 = this.arc1({
      innerRadius: this.size / 2 - 30,
      outerRadius: this.size / 2,
      startAngle: 0,
      endAngle: Math.PI / 3
    });
    const a2 = this.arc2({
      innerRadius: this.size / 2 - 30,
      outerRadius: this.size / 2,
      startAngle: Math.PI / 3,
      endAngle: Math.PI / 3 * 2
    });
    const a3 = this.arc3({
      innerRadius: this.size / 2 - 30,
      outerRadius: this.size / 2,
      startAngle: Math.PI / 3 * 2,
      endAngle: Math.PI
    });

    console.log(a1)

    return [
      <div
        // ref={(el) => (this.gaugeContainer = el as HTMLDivElement)}
      >
        <svg
          viewBox={`0 0 ${this.size} ${this.size / 2}`}>
          <g transform={`rotate(-90) translate(-${this.size / 2}, ${this.size / 2})`}>
            <path d={a1} style={{fill: this.colors[0] }}/>
            <path d={a2} style={{fill: this.colors[1] }}/>
            <path d={a3} style={{fill: this.colors[2] }}/>
          </g>
        </svg>
      </div>,
      <p>{this.value}</p>
    ];
  }
}
