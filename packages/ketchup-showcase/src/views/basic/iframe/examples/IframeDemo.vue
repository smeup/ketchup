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
  name: 'IframeDemo',
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
      ],
      demoComp:
        '<kup-iframe src="https://ketchup.smeup.com" id="demo-component"></kup-iframe>',
      demoProps: [
        {
          prop: 'buttonData',
          description: 'Props of the button (when isButton is set to true).',
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'isButton',
          description:
            'The component will be rendered as a button, which opens the link associated to the iframe in another tab/window when clicked.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'src',
          description: 'The address the iframe should be referencing to.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
      demoEvents: [
        {
          name: 'kupIframeError',
          type: 'error',
        },
        {
          name: 'kupIframeLoad',
          type: 'load',
        },
      ],
      demoData: {
        buttonData: {
          flat: true,
        },
      },
    };
  },
};
</script>
