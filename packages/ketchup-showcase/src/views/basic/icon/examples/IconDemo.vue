<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
    ></demo>
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
        {
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
      demoComp:
        '<wup-icon id="demo-component" color="var(--kup-icon-color)" dimensions="100%" name="widgets" type="svg" ></wup-icon>',
      demoProps: [
        {
          prop: 'color',
          description:
            'The color of the icon, defaults to the main color of the app. Accepts any CSS color format (HEX, RGB, etc.).',
          type: 'boolean',
          default: 'var(--kup-icon-color)',
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
          prop: 'dimensions',
          description:
            'The width and height of the icon, defaults to 100%. They are bound together because icons should generally be squared. Accepts any CSS height format (px, %, vh, etc.). ',
          type: 'string',
          default: '100%',
          try: 'field',
        },
        {
          prop: 'name',
          description: 'The name of the icon.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'type',
          description:
            'The type of the icon, defaults to "svg". Currently it is the only type supported.',
          type: 'string',
          default: 'svg',
          try: 'field',
        },
      ],
    };
  },
};
</script>
