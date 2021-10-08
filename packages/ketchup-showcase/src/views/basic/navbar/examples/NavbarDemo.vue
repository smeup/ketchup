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
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'CheckboxDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The subcomponents will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-info',
          description:
            'The subcomponents will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-secondary',
          description:
            'The subcomponents will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-success',
          description:
            'The subcomponents will be rendered using the success color of the app.',
        },
        {
          class: 'kup-warning',
          description:
            'The subcomponents will be rendered using the warning color of the app.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-navbar-ready',
          type: 'ready',
        },
        {
          name: 'kup-navbar-resize',
          type: 'resize',
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
          name: 'resizeCallback',
          description:
            'This method is invoked by KupManager whenever the component changes size.',
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
          prop: 'styling',
          description: 'Defines the style of the nav bar.',
          type: 'KupNavBarStyling',
          default: 'standard',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const button = document.createElement('kup-button');
  button.icon = 'more_vert';
  button.slot = 'right';
  const buttonMenu = document.createElement('kup-button');
  buttonMenu.icon = 'menu';
  buttonMenu.slot = 'left';
  const comp = document.createElement('kup-nav-bar');
  comp.id = 'demo-component';
  comp.image = {
    resource: 'ketchup_logo_header.svg',
  };
  comp.label = ' Demo';
  comp.style.position = 'absolute';
  comp.style.top = '0';
  comp.style.zIndex = 'calc(var(--kup-navbar-zindex) - 1)';
  comp.styling = 'standard';
  comp.appendChild(button);
  comp.appendChild(buttonMenu);
  return comp;
}
</script>
