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
          name: 'kup-navbar-menuitemclick',
          type: 'click',
        },
        {
          name: 'kup-navbar-optionitemclick',
          type: 'change',
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
          description: 'The actual data of the nav bar.',
          type: 'ComponentNavBarData',
          default: "title: 'default title'",
          try: 'json',
        },
        {
          prop: 'mode',
          description:
            "Defines how the bar will be displayed. Available options: DEFAULT = '', SHORT = 'short', SHORT_COLLAPSED = 'short-collapsed', FIXED = 'fixed', PROMINENT = 'prominent', DENSE = 'dense',",
          type: 'ComponentNavBarMode',
          default: "''",
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-nav-bar');
  comp.customStyle = '#kup-component .mdc-top-app-bar { position: unset; }';
  comp.data = {
    title: 'Demo',
    menuActions: [{ icon: 'search', value: 'AA', text: 'Search AA' }],
    optionActions: [
      {
        icon: 'favorite',
        value: 'f',
        tooltip: 'Favorites',
        visible: true,
      },
      { icon: 'search', value: 's', tooltip: 'Search', visible: true },
    ],
  };
  comp.id = 'demo-component';
  comp.style.position = 'absolute';
  return comp;
}
</script>
