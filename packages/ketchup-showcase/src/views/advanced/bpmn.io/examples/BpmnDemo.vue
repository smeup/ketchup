<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoMethods="demoMethods"
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
  name: 'BpmnDemo',
  data() {
    return {
      demoComp: createComp(),
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'openDiagram',
          description: 'Opens the diagram.',
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
          prop: 'asImage',
          description:
            "When set to true, the diagram won't be interactive but it will displayed as an image.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};
function createComp() {
  let comp = document.createElement('kup-bpmn');
  comp.id = 'demo-component';
  return comp;
}
</script>
