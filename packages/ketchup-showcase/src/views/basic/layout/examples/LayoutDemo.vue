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
      demoComp: '<wup-layout columns="12" id="demo-component"></wup-layout>',
      demoProps: [
        {
          prop: 'columns',
          description:
            'The actual data of the layout, the default behavior is 12.',
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
          prop: 'fullWidth',
          description:
            'When set to true forces the width to 100% for the single line layout.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'singleLine',
          description: 'When set to true forces the content on a single line.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoData: {
        data: [
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
          {
            props: {
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
              sizeX: '48px',
              sizeY: '48px',
            },
            tagName: 'kup-image',
          },
        ],
      },
    };
  },
};
</script>
