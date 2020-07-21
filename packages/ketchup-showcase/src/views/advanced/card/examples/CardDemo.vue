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
import { baseData } from '@/mock/chart';

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
      demoComp:
        '<kup-card layout-family="standard" layout-number="1" id="demo-component"></kup-card>',
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
          prop: 'layoutFamily',
          description:
            'Sets the type of the card. Currently supported values: "collapsible", "scalable", "standard".',
          type: 'string',
          default: 'standard',
          try: 'field',
        },
        {
          prop: 'layoutNumber',
          description: 'Sets the number of the layout.',
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
            'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
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
          name: 'kupCardClick',
          type: 'click',
        },
        {
          name: 'kupCardEvent',
          type: 'custom',
        },
      ],
      demoData: {
        data: {
          button1: { icon: 'play', flat: true },
          button2: { icon: 'favorite', flat: true },
          button3: { icon: 'share', label: 'share' },
          chart1: {
            cellConfig: {
              cellId: 'lin_example',
              type: 'lin',
              width: 300,
              height: 150,
            },
            value: '1;7;-5;6;10;-5;3;4',
          },
          //keep this, must be restored when kup-chart-cell will be part of kup-chart
          chart1tmp: {
            title: 'chart1',
            data: baseData,
            series: ['Col2', 'Col3', 'Col4'],
            sizeX: '300px',
            axis: 'Col1',
            stacked: true,
          },
          chip1: {
            title: 'chip1',
            data: [
              {
                value: '1_chip',
                icon: 'filter_1',
                label: 'First chip',
                checked: false,
              },
              {
                value: '2_chip',
                icon: 'filter_2',
                label: 'Second chip',
                checked: true,
              },
              {
                value: '3_chip',
                icon: 'filter_3',
                label: 'Third chip',
                checked: false,
              },
              {
                value: '4_chip',
                icon: 'filter_4',
                label: 'Fourth chip',
                checked: false,
              },
              {
                value: '5_chip',
                icon: 'filter_5',
                label: 'Fifth chip',
                checked: false,
              },
              {
                value: '6_chip',
                icon: 'filter_6',
                label: 'Sixth chip',
                checked: false,
              },
              {
                value: '7_chip',
                icon: 'filter_7',
                label: 'Seventh chip',
                checked: false,
              },
              {
                value: '8_chip',
                icon: 'filter_8',
                label: 'Eighth chip',
                checked: false,
              },
              {
                value: '9_chip',
                icon: 'filter_9',
                label: 'Ninth chip',
                checked: false,
              },
            ],
          },
          color1: '#498204',
          color2: 'var(--kup-title-background-color)',
          image1: {
            resource: 'images/catz_small.jpg',
          },
          image2: { resource: 'widgets' },
          progressBar1: { value: 75, centeredLabel: false },
          text1: 'I am a title',
          text2: 'I am a subtitle',
          text3:
            'I am a description, so I need more words compared to other texts. I will contain some nonsense, apologies.',
          text4: 'Text #4',
          text5: 'Text #5',
          text6: 'Text #6',
        },
      },
    };
  },
};
</script>
