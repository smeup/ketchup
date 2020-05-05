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
  name: 'ImageDemo',
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
        '<kup-image is-canvas id="demo-component" color="var(--kup-icon-color)" size-x="230px" size-y="140px" type="svg" ></kup-image>',
      demoProps: [
        {
          prop: 'badgeData',
          description: 'Sets the data of badges.',
          type: 'Badge',
          default: '[]',
          try: 'json',
        },
        {
          prop: 'color',
          description:
            'The color of the image, defaults to the main color of the app. Accepts any CSS color format (HEX, RGB, etc.). It works only when the image is in a vector format.',
          type: 'string',
          default: 'var(--kup-icon-color)',
          try: 'field',
        },
        {
          prop: 'customStyle',
          description:
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'feedback',
          description:
            'When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'isCanvas',
          description:
            "The image component will create a canvas element on which it's possible to draw. Instructions will be added to this page in the future.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'name',
          description:
            'The name of the image. It can also contain an URL or a path.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'sizeX',
          description:
            'The width of the image, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'sizeY',
          description:
            'The height of the image, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'type',
          description: 'The type of the image, defaults to "svg".',
          type: 'string',
          default: 'svg',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupImageClick',
          type: 'click',
        },
        {
          name: 'kupImageLoad',
          type: 'load',
        },
      ],
      demoData: {
        name: 'R000G140B069;33,3\\\\R244G245B240;66,5\\\\R205G033B042;100,0',
        badgeData: [
          {
            imageData: {
              name: 'widgets',
              sizeX: '1rem',
              sizeY: '1rem',
            },
            position: 'BL',
          },
        ],
      },
    };
  },
};
</script>
