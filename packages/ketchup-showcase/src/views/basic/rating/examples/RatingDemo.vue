<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'RatingDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupRatingClick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'maxValue',
          description: 'The max value of the rating',
          type: 'number',
          default: '5',
          try: 'field',
        },
        {
          prop: 'value',
          description: 'The value of the rating',
          type: 'number',
          default: '0',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-rating');
  comp.id = 'demo-component';
  comp.name = 'rating';
  return comp;
}
</script>
