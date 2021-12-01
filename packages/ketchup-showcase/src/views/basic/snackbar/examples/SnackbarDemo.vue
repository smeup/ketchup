<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
    >
    </demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
export default {
  components: {
    Demo,
  },
  name: 'SnackbarDemo',

  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-snackbar-actionclick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'text',
          description: 'text to show in the snackbar',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'timeout',
          description: 'timeout before snackbar close',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'actionButton',
          description: 'Action button',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'buttonText',
          description: 'text of the action button',
          type: 'string',
          default: '"Action"',
          try: 'field',
        },
        {
          prop: 'closeAction',
          description: 'close button',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
      demoMethods: [
        {
          name: 'getProps(descriptions?: boolean) => Promise<GenericObject>',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'refresh() => Promise<void>',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'setProps(props: GenericObject) => Promise<void>',
          description: 'Sets the props to the component.',
        },
        {
          name: 'show() => Promise<void>',
          description: 'Show the snackbar',
        },
        {
          name: 'hide() => Promise<void>',
          description: 'Hide the snackbar',
        },
      ],
    };
  },
};

function createComp() {
  const div = document.createElement('div');
  const comp = document.createElement('kup-button');
  const compEl = document.createElement('kup-snackbar');

  comp.label = 'click me!';
  compEl.id = 'demo-component';
  compEl.text = 'Demo Component';
  comp.addEventListener('kup-button-click', function () {
    compEl.show();
  });
  div.appendChild(comp);
  div.appendChild(compEl);
  return div;
}
</script>