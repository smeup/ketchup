<template>
  <div>
    <demo
      :demoClasses="demoClasses"
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
  name: 'SnackbarDemo',

  data() {
    return {
      demoClasses: [
        {
          class: 'kup-top',
          description: 'The component will be anchored to the top of the page.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-snackbar-actionclick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'actionButton',
          description: 'Set of FButton props to set the action button.',
          type: 'FButtonProps',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'closeButton',
          description: 'When true, the hide button will be displayed.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
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
          prop: 'text',
          description: 'Sets the textual content of the snackbar.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'timeout',
          description:
            'Defaults at null, when set the snackbar will automatically disappear after the specified amount of milliseconds.',
          type: 'number',
          default: 'null',
          try: 'field',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'hide',
          description: 'Hides the snackbar.',
        },
        {
          name: 'refresh',
          description: "Used to retrieve component's props values",
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
        {
          name: 'show',
          description: 'Displays the snackbar.',
        },
      ],
    };
  },
};

function createComp() {
  const div = document.createElement('div');
  const comp = document.createElement('kup-button');
  const compEl = document.createElement('kup-snackbar');
  div.style.alignItems = 'center';
  div.style.display = 'flex';
  div.style.height = '100%';
  div.style.justifyContent = 'center';
  div.style.width = '100%';
  comp.label = 'click me!';
  comp.addEventListener('kup-button-click', () => compEl.show());
  compEl.id = 'demo-component';
  compEl.text = 'This is a demo snackbar!';
  div.appendChild(comp);
  div.appendChild(compEl);
  return div;
}
</script>
