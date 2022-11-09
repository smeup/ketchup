<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ListDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app.',
        },
        {
          class: 'kup-warning',
          description:
            'The component will be rendered using the warning color of the app.',
        },
      ],
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-list-click',
          type: 'click',
        },
        {
          name: 'kup-list-focus',
          type: 'focus',
        },
        {
          name: 'kup-list-blur',
          type: 'blur',
        },
      ],
      demoMethods: [
        {
          name: 'focusNext',
          description: 'Focuses the next element of the list.',
        },
        {
          name: 'focusPrevious',
          description: 'Focuses the previous element of the list.',
        },
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'getSelectedNode',
          description: 'Returns the selected node.',
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'resetFilter',
          description: 'Resets filter.',
        },
        {
          name: 'select',
          description:
            'Calls handleSelection internal method to select the given item.',
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
          description: 'The data of the list.',
          type: 'KupListNode',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'displayMode',
          description:
            'Selects how the items must display their label and how they can be filtered for. Supported values: "description", "code", "both".',
          type: 'string',
          default: 'description',
          try: 'field',
        },
        {
          prop: 'filter',
          description:
            'Keeps string for filtering elements when filter mode is active.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'hideText',
          description:
            "Hides rows' text, ideally to display a list of icons only.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'isMenu',
          description: 'Defines whether the list is a menu or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'keyboardNavigation',
          description:
            "When true, enables items' navigation through arrow keys.",
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'menuVisible',
          description:
            "Sets the status of the menu, when false it's hidden otherwise it's visible.",
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'roleType',
          description:
            'Defines the type of selection. Values accepted: listbox, radiogroup or group.',
          type: 'string',
          default: 'KupListRole.LISTBOX',
          try: 'field',
        },
        {
          prop: 'selectable',
          description: 'Defines whether items are selectable or not.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'showIcons',
          description: 'Allows to view an icon image for each list item',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'twoLine',
          description:
            'The list elements descriptions will be arranged in two lines.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-list');
  comp.data = [
    {
      value: 'First choice',
      id: '1',
      icon: 'add_alert',
      trailingIcon: true,
    },
    {
      value: 'Selected choice',
      id: '2',
      selected: true,
      icon: 'ac_unit',
    },
    {
      value: 'Third choice (below a separator)',
      id: '3',
      icon: '3d_rotation',
      separator: true,
    },
  ];
  comp.id = 'demo-component';
  comp.selectable = true;
  return comp;
}
</script>
