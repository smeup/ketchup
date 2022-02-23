<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    >
    </demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'CellDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-cell-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-input',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-update',
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
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the cell.',
          type: 'KupDataCell',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'density',
          description:
            'The density of the cell, defaults at "none" and can be also set to "dense" or "medium" or "wide".',
          type: 'FCellPadding',
          default: 'none',
          try: 'field',
        },
        {
          prop: 'dragEnabled',
          description: 'Defines whether the cell is draggable or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-cell');

  comp.data = {
    cssClass: 'c-centered',
    obj: {
      t: 'J4',
      p: 'BTN',
      k: '',
    },
    data: {
      icon: 'widgets',
      label: 'Demo',
    },
    value: 'Text content',
  };
  comp.density = 'dense';
  comp.id = 'demo-component';
  return comp;
}
</script>
