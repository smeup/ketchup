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
  name: 'GridDemo',
  data() {
    return {
      demoComp: createComp(),
      demoProps: [
        {
          prop: 'columns',
          description:
            'The number of columns displayed by the grid, the default behavior is 12.',
          type: 'number',
          default: '12',
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
          description: 'The actual data of the grid.',
          type: 'ComponentLayoutElement[]',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'fullWidth',
          description:
            'When set to true, forces the width to 100% for the single line layout.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'singleLine',
          description: 'When set to true, forces the content on a single line.',
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
  let comp = document.createElement('kup-grid');
  comp.id = 'demo-component';
  comp.columns = '12';
  comp.data = [
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
        sizeY: '48px',
      },
      tagName: 'kup-image',
    },
  ];
  return comp;
}
</script>
