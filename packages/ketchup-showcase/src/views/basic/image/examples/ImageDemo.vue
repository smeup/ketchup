<template>
  <div>
    <demo :demoComp="demoComp" :demoEvents="demoEvents" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
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
      demoComp: createComp(),
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
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'data',
          description:
            'When present, the component will be drawn using CSS. Check the "Drawing with CSS" section of the image showcase for more information.',
          type: 'CssDraw[]',
          default: 'undefined',
          try: 'json',
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
            "The image component will create a canvas element on which it's possible to draw.  It's a temporary feature that will be fully replaced by CSS drawing in the future.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'resource',
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
  let comp = document.createElement('kup-image');
  comp.badgeData = [
    {
      imageData: {
        resource:
          'https://ketchup.smeup.com/ketchup-showcase/header_logo_dark.svg',
        sizeX: '1.75rem',
        sizeY: 'auto',
      },
      position: 'BL',
    },
  ];
  comp.color = 'var(--kup-icon-color)';
  comp.id = 'demo-component';
  comp.resource = 'widgets';
  comp.sizeX = '128px';
  comp.sizeY = '128px';
  return comp;
}
</script>
