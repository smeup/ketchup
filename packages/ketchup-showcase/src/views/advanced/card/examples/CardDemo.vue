<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'CardDemo',
  data() {
    return {
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
      demoComp: '<kup-card layout="1" id="demo-component"></kup-card>',
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the card.',
          type: 'ComponentCardElement',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'isMenu',
          description: 'Defines whether the card is a menu or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'layout',
          description: 'Sets the layout of the card.',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'menuVisible',
          description:
            "Sets the status of the menu, when false it's hidden otherwise it's visible.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'sizeX',
          description:
            'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'sizeY',
          description:
            'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupCardEvent',
          type: 'custom',
        },
      ],
      demoData: {
        data: {
          button1: { icon: 'play', flat: true },
          button2: { icon: 'favorite', flat: true },
          button3: { icon: 'share', flat: true },
          color1: '#498204',
          color2: 'var(--kup-title-background-color)',
          emphText1: 'Ketch.UP',
          emphText2: 'High',
          emphText3: '12/31/2020',
          image1: {
            resource:
              'https://ketchup.smeup.com/ketchup-showcase/images/arthas.jpg',
          },
          image2: { resource: 'widgets' },
          progressBar1: { value: 75, centeredLabel: false },
          text1: 'This is the text of this TODO',
          text2: 'Priority',
          text3: 'Deadline',
        },
      },
    };
  },
};
</script>
