import { Component, Prop } from '@stencil/core';

declare const d3: any;

@Component({
  tag: 'kup-gauge',
  styleUrl: 'kup-gauge.scss',
  shadow: true,
})
export class KupGauge {
  /**
   * Sets how much the arc of the gauge should be thick.
   * @namespace kup-gauge.arcThickness
   * @see kup-gauge.size
   */
  @Prop() arcThickness = 30;
  /**
   * Array of three elements to specify the color of the arcs.
   */
  @Prop() colors: string[] = ['red', 'yellow', 'green'];
  /**
   * The first threshold, establishing the length of the first and second arc.
   */
  @Prop() firstThreshold?: number;
  /**
   * The distance the label and the value has from the gauge graph.
   */
  @Prop() labelDistance: number = 20;
  /**
   * The maximum value reachable in the current graph.
   */
  @Prop() maxValue: number = 100;
  /**
   * A string which will be appended to the displayed values of the component.
   */
  @Prop() measurementUnit: string = '';
  /**
   * The minimum value reachable in the current graph.
   */
  @Prop() minValue: number = -100;
  /**
   * The second threshold, establishing the length of the second and third arc.
   */
  @Prop() secondThreshold?: number;
  /**
   * If set to false, the maximum, minimum and threshold values of the gauge are not displayed.
   */
  @Prop() showLabels: boolean = true;
  /**
   * If set to false, the current value of the gauge is not displayed.
   */
  @Prop() showValue: boolean = true;
  /**
   * Con be used change the viewbox of the SVG.
   * By manipulating this value, some customizations of the aspect of the gauge is achievable.
   * @namespace kup-gauge.size
   * @see kup-gauge.arcThickness
   */
  @Prop() size: number = 300;
  /**
   * The current value of the gauge.
   * The gauge's needle points to the percentage based on this prop.
   */
  @Prop() value: number = 0;

  //---- Internal not reactive state ----

  // Arcs generator
  private arcGenerator = d3.arc();

  /**
   * Holds the maximum positive interval.
   * Percentages are calculated as it follows:
   * MIN = 0 = the value the prop minValue gets transformed to\
   * MAX = ABSOLUTE(minValue - maxValue) = the maxValuePositive holds this value
   * TVALUE = value - minValue = any value, which needs to be represented on the chart
   * @namespace kup-gauge.maxValuePositive
   */
  private maxValuePositive = 0;


  //---- Utility functions ----
  // Manipulates and transforms degrees to percentage and vice versa.

  percToDeg(perc) {
    return perc * 360;
  };

  degToRad(deg) {
    return deg * Math.PI / 180;
  };

  percToRad(perc) {
    return this.degToRad(this.percToDeg(perc));
  };

  /**
   * Given a valid value, minValue <= value <= maxValue, calculates this value as a percentage of the interval [minValue, maxValue]
   * @param {number} valueToPercentage - The value to be calculated as a percentage
   * @see kup-gauge.maxValuePositive
   */
  calculateValuePercentage(valueToPercentage: number = 0): number {
    return (valueToPercentage - this.minValue) / this.maxValuePositive;
  }

  //---- Rendering functions ----
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
    thetaRad = this.percToRad(rotationPercentage / 2); // Since the gauge is a semicircle, we must divide the percentage in half to have the correct angle
    topX = centerX - needleLength * Math.cos(thetaRad);
    topY = centerY - needleLength * Math.sin(thetaRad);
    leftX = centerX - needleBaseRadius * Math.cos(thetaRad - Math.PI / 2);
    leftY = centerY - needleBaseRadius * Math.sin(thetaRad - Math.PI / 2);
    rightX = centerX - needleBaseRadius * Math.cos(thetaRad + Math.PI / 2);
    rightY = centerY - needleBaseRadius * Math.sin(thetaRad + Math.PI / 2);
    return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
  }

  render() {
    // mathematical operations
    this.maxValuePositive = Math.abs(this.minValue - this.maxValue);

    // Svg constants
    const halvedSize = this.size / 2; // The svg size ratio w : w / 2
    const needleCircleRadius = this.size / 16; // Arbitrary size of the base of the needle
    const needleLength = halvedSize - this.arcThickness / 2; // Calculates the length of the needle in pure units
    const valueLabelYPosition = halvedSize + needleCircleRadius + this.labelDistance * 1;

    // User provided thresholds
    // TODO these thresholds will be given to the component by a user prop
    const givenThresholds = [];
    if (this.firstThreshold) {
      givenThresholds.push(this.firstThreshold);
    }
    if (this.secondThreshold) {
      givenThresholds.push(this.secondThreshold);
    }

    // This creates the various point from which the arcs are generated
    const arcsThresholds = [this.minValue, ...givenThresholds, this.maxValue];

    // Creates arc elements
    const arcsElements = [];
    for (let i = 0; i < arcsThresholds.length - 1; i++) {
      const currentArcPath = this.arcGenerator({
        innerRadius: halvedSize - this.arcThickness,
        outerRadius: halvedSize,
        startAngle: this.calculateValuePercentage(arcsThresholds[i]) * Math.PI,
        endAngle: this.calculateValuePercentage(arcsThresholds[i + 1]) * Math.PI
      });
      // If there is no color specified for that arc, we provide a black fallback.
      arcsElements.push(<path d={currentArcPath} style={{ fill: this.colors[i] ? this.colors[i] : '#000000' }}/>);
    }

    // Composes the threshold label elements, if labels must be displayed
    const textElements = this.showLabels ? arcsThresholds.map(threshold => {
      // Given the
        const thresholdPercentage = this.calculateValuePercentage(threshold);
        // Decides the position of the text
        // @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
        let textPosition = 'end';
        if (thresholdPercentage > .5) {
          textPosition = 'start';
        } else if (thresholdPercentage === .5) {
          textPosition = 'middle';
        }
        // Since the gauge is a semicircle, we must divide the percentage in half to have the correct angle
        const thetaRad = this.percToRad(thresholdPercentage / 2);
        const topX = halvedSize - (needleLength + this.labelDistance) * Math.cos(thetaRad);
        const topY = halvedSize - (needleLength + this.labelDistance) * Math.sin(thetaRad);
        return <text
          class="gauge__label-text"
          text-anchor={textPosition}
          x={topX}
          y={topY}>{threshold + ' ' + this.measurementUnit}</text>
      })
      : [];

    return (
      <div class="gauge__container">
        <svg
          class="gauge"
          viewBox={`0 0 ${this.size} ${valueLabelYPosition}`}>
          <g transform={`rotate(-90) translate(-${halvedSize}, ${halvedSize})`}>
            {arcsElements}
          </g>
          <circle
            class="gauge__needle-base"
            cx={halvedSize}
            cy={halvedSize}
            r={needleCircleRadius}/>
          <path
            class="gauge__needle"
            d={this.paintNeedle(needleLength, needleCircleRadius, halvedSize, halvedSize, this.calculateValuePercentage(this.value))}
          />
          {textElements}
          {this.showValue ?
            <text
              class="gauge__value-text"
              text-anchor="middle"
              x={halvedSize}
              y={valueLabelYPosition}>{this.value + ' ' + this.measurementUnit}</text>
            : null}
        </svg>
      </div>
    );
  }
}
