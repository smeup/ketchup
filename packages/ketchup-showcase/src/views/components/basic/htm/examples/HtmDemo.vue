<template>
  <div>
    <demo
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
  name: 'HtmDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-htm-ready',
          type: 'CustomEvent',
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
          prop: 'data',
          description: 'Data of the component containing url or html',
          type: 'KupDataCell',
          default: 'undefined',
          try: 'json',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-htm');
  comp.id = 'demo-component';
  comp.data = {
    value:
      "<h1>Welcome to KupHtm</h1><p>This is a test paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p><ul><li>First item</li><li>Second item</li><li>Third item</li></ul><p>Here’s a link: <a href='https://example.com' target='_blank'>Example.com</a></p>",
    obj: { t: '', p: '', k: '' },
  };

  return comp;
}
</script>
