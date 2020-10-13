<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoTabs="demoTabs"
    ></demo>
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
          prop: 'value',
          description: 'The value of the rating',
          type: 'number',
          default: '0',
          try: 'field',
        },
        {
          prop: 'maxValue',
          description: 'The max value of the rating',
          type: 'number',
          default: '5',
          try: 'field',
        },
        {
          prop: 'disabled',
          description:
            'Sets the component to disabled state, making it not interactable.',
          type: 'boolean',
          default: 'false',
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
          text: 'Events',
          icon: '',
          active: false,
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
  let comp = document.createElement('kup-rating');
  comp.id = 'demo-component';
  comp.name = 'rating';
  return comp;
}
</script>
