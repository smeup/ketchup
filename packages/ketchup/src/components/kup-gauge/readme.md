# kup-gauge

## Usage

Currently, this component depends on the two following scripts:
```javascript
<script src="https://d3js.org/d3-path.v1.min.js"></script>
<script src="https://d3js.org/d3-shape.v1.min.js"></script>
```

These scripts must be included into the head tag of the page before including Stencil project.

Our intention is to remove these dependencies as soon as possible.

### Useful references for this component

https://codepen.io/enxaneta/pen/EVYRJJ

##### Svg syntax
https://css-tricks.com/transforms-on-svg-elements/
https://css-tricks.com/svg-path-syntax-illustrated-guide/
https://developer.mozilla.org/it/docs/Web/SVG/Element
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform

##### Gauge examples
https://plnkr.co/edit/LJlKKX1xnVwl2LoFBFoO?p=preview
https://stackoverflow.com/questions/52373021/d3-js-add-label-along-the-arc

##### D3 library reference
https://github.com/d3?utf8=%E2%9C%93&q=&type=&language=
https://github.com/d3/d3-shape#arcs
https://github.com/d3/d3/blob/master/API.md

##### React Style syntax
https://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices

##### Less useful things
http://www.pindari.com/svg-arc.html
http://bl.ocks.org/msqr/3202712



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                          | Type       | Default                      |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------------------------- |
| `arcThickness`    | `arc-thickness`    | Sets how much the arc of the gauge should be thick.                                                                                  | `number`   | `30`                         |
| `colors`          | --                 | Array of three elements to specify the color of the arcs.                                                                            | `string[]` | `['red', 'yellow', 'green']` |
| `firstThreshold`  | `first-threshold`  | The first threshold, establishing the length of the first and second arc.                                                            | `number`   | `-50`                        |
| `maxValue`        | `max-value`        | The maximum value reachable in the current graph.                                                                                    | `number`   | `100`                        |
| `measurementUnit` | `measurement-unit` | A string which will be appended to the displayed values of the component.                                                            | `string`   | `''`                         |
| `minValue`        | `min-value`        | The minimum value reachable in the current graph.                                                                                    | `number`   | `-100`                       |
| `secondThreshold` | `second-threshold` | The second threshold, establishing the length of the second and third arc.                                                           | `number`   | `50`                         |
| `showLabels`      | `show-labels`      | If set to false, the maximum, minimum and threshold values of the gauge are not displayed.                                           | `boolean`  | `true`                       |
| `showValue`       | `show-value`       | If set to false, the current value of the gauge is not displayed.                                                                    | `boolean`  | `true`                       |
| `size`            | `size`             | Con be used change the viewbox of the SVG. By manipulating this value, some customizations of the aspect of the gauge is achievable. | `number`   | `200`                        |
| `value`           | `value`            | The current value of the gauge. The gauge's needle points to the percentage based on this prop.                                      | `number`   | `0`                          |


## CSS Custom Properties

| Name                                           | Description                  |
| ---------------------------------------------- | ---------------------------- |
| `--gau_needle-color, --kup-gauge_needle-color` | Set icon color of the needle |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
