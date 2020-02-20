<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'IconDemo',
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
      ],
      demoComp:
        '<wup-icon public-path="../../ketchup/dist/mycomponent" name="favorite" id="demo-component"></wup-icon>',
      demoProps: [
        {
          prop: 'color',
          description:
            'The color of the icon, defaults to the main color of the app. Accepts any CSS color format (HEX, RGB, etc.).',
          type: 'boolean',
          default: 'string',
          try: 'field',
        },
        {
          prop: 'height',
          description:
            'The height of the icon, defaults to 100%. Accepts any CSS height format (px, %, vh, etc.).',
          type: 'boolean',
          default: 'string',
          try: 'field',
        },
        {
          prop: 'name',
          description: 'The name of the icon.',
          type: 'string',
          default: 'false',
          try: 'field',
        },
        {
          prop: 'publicPath',
          description: 'Used to set the public path to recover the assets.',
          type: 'string',
          default: '/build',
          try: 'field',
        },
        {
          prop: 'type',
          description: 'The type of the icon, defaults to "svg".',
          type: 'string',
          default: 'null',
          try: 'field',
        },
        {
          prop: 'width',
          description: 'The width of the icon, defaults to 100%.',
          type: 'string',
          default: 'false',
          try: 'field',
        },
      ],
    };
  },
};
</script>
