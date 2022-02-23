<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'GaugeDemo',
  data() {
    return {
      demoComp: createComp(),
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'arcThickness',
          description: 'Sets how much the arc of the gauge should be thick.',
          type: 'number',
          default: '30',
          try: 'field',
        },
        {
          prop: 'colors',
          description:
            'Array of three elements to specify the color of the arcs.',
          type: 'string',
          isArray: true,
          default: 'Theme state colors',
          try: 'json',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'firstThreshold',
          description:
            'The first threshold, establishing the length of the first and second arc.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'labelDistance',
          description:
            'The distance the label and the value has from the gauge graph.',
          type: 'number',
          default: '20',
          try: 'field',
        },
        {
          prop: 'maxValue',
          description: 'The maximum value reachable in the current graph.',
          type: 'number',
          default: '100',
          try: 'field',
        },
        {
          prop: 'measurementUnit',
          description:
            'A string which will be appended to the displayed values of the component.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'minValue',
          description: 'The minimum value reachable in the current graph.',
          type: 'number',
          default: '-100',
          try: 'field',
        },
        {
          prop: 'needleCircle',
          description: 'When true, shows a rounded needle.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'onlyValue',
          description:
            "When true, ignore thresholds in gauge and show colored value's arc.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'reverseColors',
          description:
            'When true, the colors inside the colors array are used in the reversed order.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'secondThreshold',
          description:
            'The second threshold, establishing the length of the second and third arc.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'showLabels',
          description:
            'If set to false, threshold values of the gauge are not displayed.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'showMaxmin',
          description:
            'If set to false, the maximum and minimum values of the gauge are not displayed.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'showValue',
          description:
            'If set to false, the current value of the gauge is not displayed.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'size',
          description:
            'Con be used change the viewbox of the SVG. By manipulating this value, some customizations of the aspect of the gauge is achievable.',
          type: 'number',
          default: '300',
          try: 'field',
        },
        {
          prop: 'value',
          description:
            "The current value of the gauge. The gauge's needle points to the percentage based on this prop.",
          type: 'number',
          default: '0',
          try: 'field',
        },
        {
          prop: 'valueSize',
          description:
            "The current size of gauge's value. Correct values are: 0,1,2 or 3.",
          type: 'number',
          default: '0',
          try: 'field',
        },
        {
          prop: 'widthComponent',
          description: 'Set the width of the gauge in a valid CSS value.',
          type: 'string',
          default: '100%',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-gauge');
  comp.id = 'demo-component';
  comp.arcThickness = 30;
  comp.colors = [
    'var(--kup-success-color)',
    'var(--kup-warning-color)',
    'var(--kup-danger-color)',
  ];
  comp.firstThreshold = 33.3;
  comp.labelDistance = 20;
  comp.maxValue = 100;
  comp.minValue = 0;
  comp.needleCircle = true;
  comp.onlyValue = true;
  comp.secondThreshold = 66.6;
  comp.showMaxmin = true;
  comp.showValue = true;
  comp.size = 300;
  comp.value = 50;
  comp.valueSize = 0;
  comp.widthComponent = '100%';
  return comp;
}
</script>
