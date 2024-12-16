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
  name: 'TxtDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-txt-ready',
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
          description: 'Data of the component containing text',
          type: 'KupDataCell',
          default: 'undefined',
          try: 'json',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-txt');
  comp.id = 'demo-component';
  comp.data = {
    value:
      "Welcome to the kup-txt component demo.\r\nThis component handles text transformations,\r\nsuch as replacing custom line breaks.\r\nIt's useful for displaying formatted content\r\nin a web application.",
    obj: { t: '', p: '', k: '' },
  };

  return comp;
}
</script>
