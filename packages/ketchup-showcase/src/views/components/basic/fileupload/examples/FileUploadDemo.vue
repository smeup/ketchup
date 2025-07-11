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
  name: 'FileUploadDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-file-upload-upload',
          type: 'upload',
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
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://smeup.github.io/ketchup/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'pathString',
          description: 'The initial filepaths.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'FupMul',
          description: 'Sets the multiple upload.',
          type: 'string',
          default: '"false"',
          try: 'field',
        },
        {
          prop: 'FupAut',
          description: 'Sets the auto upload of select file',
          type: 'string',
          default: '"false"',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-file-upload');
  comp.icon = 'widgets';
  comp.id = 'demo-component';
  comp.label = 'Demo';
  comp.styling = 'raised';
  const innerComp = document.createElement('kup-spinner');
  innerComp.slot = 'spinner';
  innerComp.dimensions = '0.6em';
  innerComp.active = true;
  comp.appendChild(innerComp);
  return comp;
}
</script>
