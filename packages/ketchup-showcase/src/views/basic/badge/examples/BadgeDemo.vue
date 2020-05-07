<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps" :demoEvents="demoEvents"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'BadgeDemo',
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
        '<div class="badge-anchor"><span>YOUR CONTAINER</span><kup-badge position="TR" text="Demo" id="demo-component"></kup-badge></div>',
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
          prop: 'imageData',
          description:
            'The data of the image displayed inside the badge. It will displayed only when "text" is undefined.',
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'position',
          description:
            'The position of the badge relative to its parent. Supported values: "TL" (top left), "TR" (top right), "BL" (bottom left), "BR" (bottom left)',
          type: 'string',
          default: 'TR',
          try: 'field',
        },
        {
          prop: 'text',
          description: 'The text displayed inside the badge.',
          type: 'string',
          default: '""',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupBadgeClick',
          type: 'click',
        },
      ],
    };
  },
};
</script>
