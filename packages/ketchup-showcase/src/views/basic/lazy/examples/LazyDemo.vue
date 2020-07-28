<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'LazyDemo',
  data() {
    return {
      demoComp: createComp(),
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
          default: 'undefined',
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
          prop: 'showPlaceholder',
          description:
            'Displays an animated SVG placeholder until the component is loaded.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
        {
          text: 'CSS',
          icon: '',
          active: false,
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
      button1: { icon: 'favorite', flat: true },
      image1: {
        resource: 'images/catz_small.jpg',
      },
      text1: 'Lazy loaded!',
      text2:
        'This card was rendered as soon as it was partially included inside the viewport.',
    },
  };
  comp.id = 'demo-component';
  comp.showPlaceholder = true;
  return comp;
}
</script>
