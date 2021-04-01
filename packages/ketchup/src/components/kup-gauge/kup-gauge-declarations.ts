/**
 * Props of the kup-gauge component.
 * Used to export every prop in an object.
 */
export enum KupGaugeProps {
    arcThickness = 'Sets how much the arc of the gauge should be thick.',
    colors = 'Array of three elements to specify the color of the arcs.',
    customStyle = 'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
    firstThreshold = 'The first threshold, establishing the length of the first and second arc.',
    labelDistance = 'The distance the label and the value has from the gauge graph.',
    maxValue = 'The maximum value reachable in the current graph.',
    measurementUnit = 'A string which will be appended to the displayed values of the component.',
    minValue = 'The minimum value reachable in the current graph.',
    needleCircle = 'When true, shows a rounded needle.',
    onlyValue = "When true, ignore thresholds in gauge and show colored value's arc.",
    reverseColors = 'When true, the colors inside the colors array are used in the reversed order.',
    secondThreshold = 'The second threshold, establishing the length of the second and third arc.',
    showLabels = 'If set to false, threshold values of the gauge are not displayed.',
    showMaxmin = 'If set to false, the maximum and minimum values of the gauge are not displayed.',
    showValue = 'If set to false, the current value of the gauge is not displayed.',
    size = 'Con be used change the viewbox of the SVG. By manipulating this value, some customizations of the aspect of the gauge is achievable.',
    value = "The current value of the gauge. The gauge's needle points to the percentage based on this prop.",
    valueSize = "The current size of gauge's value. Correct values are: 0,1,2 or 3.",
    widthComponent = 'Set Width gauge.',
}
