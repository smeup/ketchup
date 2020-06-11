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
              data: [
                {
                  shape: 'bar',
                  color: 'var(--kup-main-color)',
                  width: '100%',
                  height: '100%',
                },
              ],
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
            },
            tagName: 'kup-image',
          },
          {
            props: { flat: true, label: 'a' },
            tagName: 'kup-button',
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
            },
            tagName: 'kup-image',
          },
          {
            props: { flat: true, icon: 'widgets' },
            tagName: 'kup-button',
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
            },
            tagName: 'kup-image',
          },
          {
            tagName: 'kup-checkbox',
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
            },
            tagName: 'kup-image',
          },
          {
            props: { flat: true, label: 'button' },
            tagName: 'kup-button',
          },
        ],
      },
    };
  },
};
</script>
