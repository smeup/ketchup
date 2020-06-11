<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps" :demoData="demoData"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'LayoutDemo',
  data() {
    return {
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
      demoComp: '<wup-layout columns="6" id="demo-component"></wup-layout>',
      demoProps: [
        {
          prop: 'columns',
          description: 'Sets the number of columns.',
          type: 'number',
          default: '12',
          try: 'field',
        },
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
          description: 'The actual data of the layout.',
          type: 'ComponentLayoutElement[]',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'horizontal',
          description: 'When set to true forces an horizontal layout.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoData: {
        data: [
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '1',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '2',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '3',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '4',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '5',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '6',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '7',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '8',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '9',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '10',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '11',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
          {
            props: {
              data: {
                button1: { icon: 'favorite', flat: true },
                image1: {
                  resource: 'images/catz_small_2.jpg',
                },
                text1: '12',
                text2: "This card' size fits the container",
              },
            },
            tagName: 'kup-card',
          },
        ],
      },
    };
  },
};
</script>
