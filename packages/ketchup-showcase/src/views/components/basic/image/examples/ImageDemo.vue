<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ImageDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-fit',
          description:
            "The component won't exceed its size in pixels (needs a new render to be effective, works only when resource is an URL).",
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-image-click',
          type: 'click',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'badgeData',
          description: 'Sets the data of badges.',
          type: 'KupBadge',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'color',
          description:
            'The color of the image, defaults to the primary color of the app. Accepts any CSS color format (HEX, RGB, etc.). It works only when the image is in a vector format.',
          type: 'string',
          default: 'var(--kup-icon-color)',
          try: 'field',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description:
            'When present, the component will be drawn using CSS. Check the "Drawing with CSS" section of the image showcase for more information.',
          type: 'FImageData',
          isArray: true,
          default: 'null',
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
          default: 'null',
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
