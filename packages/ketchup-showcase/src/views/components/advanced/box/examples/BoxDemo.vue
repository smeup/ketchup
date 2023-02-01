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
import { defaultData } from '@/mock/box';

export default {
  components: {
    Demo,
  },
  name: 'BoxDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-borderless',
          description: 'Displays boxes without borders.',
        },
        {
          class: 'kup-bottom-aligned',
          description:
            "Content will be vertically aligned to section's bottom.",
        },
        {
          class: 'kup-center-aligned',
          description: 'Content will be horizontally centered.',
        },
        {
          class: 'kup-danger',
          description:
            'The component will be rendered using the danger color of the app.',
        },
        {
          class: 'kup-dashed-sections',
          description: 'Setions will have a dashed border.',
        },
        {
          class: 'kup-flat-on-hover',
          description: 'Disables the box shadow effect on hover.',
        },
        {
          class: 'kup-info',
          description:
            'The component will be rendered using the informational color of the app.',
        },
        {
          class: 'kup-paddingless',
          description: 'Removes padding from box sections.',
        },
        {
          class: 'kup-right-aligned',
          description:
            "Content will be horizontally aligned to section's right.",
        },
        {
          class: 'kup-round',
          description: 'Boxes borders will be heavily rounded.',
        },
        {
          class: 'kup-secondary',
          description:
            'The component will be rendered using the secondary color of the app.',
        },
        {
          class: 'kup-shaped',
          description: 'Boxes borders will be slightly rounded.',
        },
        {
          class: 'kup-success',
          description:
            'The component will be rendered using the success color of the app.',
        },
        {
          class: 'kup-top-aligned',
          description: "Content will be vertically aligned to section's top.",
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
          name: 'kup-box-autoselect',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-dragended',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-dragstarted',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-selected',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-rowactionclick',
          type: 'CustomEvent',
        },
        {
          name: 'kup-box-rowactionmenuclick',
          type: 'CustomEvent',
        },
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
          name: 'loadRowActions',
          description: 'Sets the row actions of the given row.',
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
          prop: 'cardData',
          description:
            'When present, the box will be rendered using the card component. This prop contains the card props which will be spread on the kup-card.',
          type: 'KupCard',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'columns',
          description: 'Number of columns.',
          type: 'number',
          default: '1',
          try: 'field',
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
          prop: 'data',
          description: 'The actual data of the box.',
          type: 'KupBoxData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'dragEnabled',
          description: 'Enable dragging.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'dropEnabled',
          description: 'Enable dropping.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'dropOnSection',
          description: 'Drop can be done in section.',
          type: 'boolean',
          default: 'undefined',
          try: 'switch',
        },
        {
          prop: 'editableData',
          description:
            'When set to true, editable cells will be rendered using input components.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'enableRowActions',
          description:
            'If enabled, a button to load / display the row actions will be displayed on the right of every box.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilter',
          description: 'When set to true it activates the global filter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'globalFilterValue',
          description: 'The value of the global filter.',
          type: 'string',
          default: '',
          try: 'field',
        },
        {
          prop: 'kanban',
          description: 'Displays the boxlist as a Kanban.',
          type: 'KupBoxKanban',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'layout',
          description:
            'How the field will be displayed. If not present, a default one will be created.',
          type: 'KupBoxLayout',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'multiSelection',
          description: 'Enable multi selection.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'pageSelected',
          description: 'Current page number.',
          type: 'number',
          default: '1',
          try: 'field',
        },
        {
          prop: 'pageSize',
          description: 'Number of boxes per page.',
          type: 'number',
          default: '10',
          try: 'field',
        },
        {
          prop: 'pagination',
          description: 'Enables pagination.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'rowsPerPage',
          description: 'Number of current rows per page.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'scrollOnHover',
          description:
            'When the mouse move towards the left or right edge and there is an overflow, the table will automatically scroll.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'selectBox',
          description: 'Automatically selects the box at the specified index.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'selectedRowsState',
          description: 'Multiple selection.',
          type: 'KupBoxRow',
          isArray: true,
          default: '[]',
          try: 'json',
        },
        {
          prop: 'showSelection',
          description: 'If enabled, highlights the selected box/boxes.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'sortBy',
          description: 'If sorting is enabled, specifies which column to sort.',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'sortEnabled',
          description: 'Enable sorting.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'stateId',
          description: 'State Id.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'store',
          description: 'Store.',
          type: 'KupStore',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'swipeDisabled',
          description: 'Disable swipe.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-box');
  comp.columns = '4';
  comp.data = defaultData;
  comp.id = 'demo-component';
  comp.showSelection = true;
  return comp;
}
</script>
