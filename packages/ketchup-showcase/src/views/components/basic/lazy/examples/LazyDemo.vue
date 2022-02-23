<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
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
  name: 'LazyDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-bottom-aligned',
          description: 'Content will be vertically aligned to the bottom.',
        },
        {
          class: 'kup-left-aligned',
          description: 'Content will be horizontally aligned to the left.',
        },
        {
          class: 'kup-right-aligned',
          description: 'Content will be horizontally aligned to the right.',
        },
        {
          class: 'kup-top-aligned',
          description: 'Content will be vertically aligned to the top.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-lazy-loaded',
          type: 'custom',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'getComponent',
          description: 'Returns the HTMLElement of the component to lazy load.',
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
          prop: 'componentName',
          description: 'Sets the tag name of the component to be lazy loaded.',
          type: 'string',
          default: 'undefined',
          try: 'field',
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
          prop: 'data',
          description: 'Sets the data of the component to be lazy loaded.',
          type: 'string',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'renderMode',
          description:
            'Decides when the sub-component should be rendered. By default when both the component props exist and the component is in the viewport.',
          type: 'string',
          default: 'both',
          try: 'field',
        },
        {
          prop: 'showPlaceholder',
          description:
            'Displays an animated SVG placeholder until the component is loaded.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-lazy');
  comp.componentName = 'kup-card';
  comp.data = {
    data: {
      button: [{ icon: 'favorite', flat: true }],
      image: [
        {
          resource: 'images/catz_small.jpg',
        },
      ],
      text: [
        'Lazy loaded!',
        'This card was rendered as soon as it was partially included inside the viewport.',
      ],
    },
  };
  comp.id = 'demo-component';
  comp.showPlaceholder = true;
  return comp;
}
</script>
