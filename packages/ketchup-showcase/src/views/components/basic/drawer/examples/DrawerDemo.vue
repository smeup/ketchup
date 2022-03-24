<template>
  <div>
    <demo
      :demoClasses="demoClasses"
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
  name: 'DrawerDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-permanent',
          description: "The drawer's look will be suitable to a desktop use.",
        },
        {
          class: 'kup-right',
          description:
            'The drawer will be displayed on the right of the screen.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-drawer-close',
          type: 'custom',
        },
        {
          name: 'kup-drawer-open',
          type: 'custom',
        },
        {
          name: 'kup-drawer-ready',
          type: 'ready',
        },
      ],
      demoMethods: [
        {
          name: 'close',
          description: 'Closes the drawer.',
        },
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'open',
          description: 'Opens the drawer.',
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'resizeCallback',
          description:
            'This method is invoked by KupManager whenever the component changes size.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
        {
          name: 'toggle',
          description: "Opens the drawer when it's closed and viceversa.",
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
      ],
    };
  },
};

function createComp() {
  const title = document.createElement('div');
  title.innerText = 'Demo';
  title.style.fontSize = '2em';
  title.style.padding = '10px';
  const subtitle = document.createElement('div');
  subtitle.innerText = 'Subtitle';
  subtitle.style.padding = '10px';
  const comp = document.createElement('kup-drawer');
  comp.classList.add('kup-permanent');
  comp.id = 'demo-component';
  comp.style.position = 'absolute';
  comp.appendChild(title);
  comp.appendChild(subtitle);
  comp.open();
  return comp;
}
</script>
