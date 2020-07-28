<template>
  <div>
    <demo :demoComp="demoComp" :demoEvents="demoEvents" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { defaultData } from '@/mock/box';

export default {
  components: {
    Demo,
  },
  name: 'BoxDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupAutoBoxSelect',
          type: 'CustomEvent',
        },
        {
          name: 'kupBoxClicked',
          type: 'CustomEvent',
        },
        {
          name: 'kupBoxDragEnded',
          type: 'CustomEvent',
        },
        {
          name: 'kupBoxDragStarted',
          type: 'CustomEvent',
        },
        {
          name: 'kupBoxDropped',
          type: 'CustomEvent',
        },
        {
          name: 'kupBoxSelected',
          type: 'CustomEvent',
        },
        {
          name: 'kupRowActionClicked',
          type: 'CustomEvent',
        },
        {
          name: 'kupRowActionMenuClicked',
          type: 'CustomEvent',
        },
      ],
      demoProps: [
        {
          prop: 'cardData',
          description:
            'When present, the box will be rendered using the card component. This prop contains the card props which will be spread on the kup-card.',
          type: 'ComponentCardElement',
          default: 'undefined',
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
          prop: 'contentAlign',
          description:
            'Alignment of the content. Can be set to left, right or center.',
          type: 'string',
          default: 'center',
          try: 'field',
        },
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: 'undefined',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the box.',
          type: '{ columns?: Column[]; rows?: BoxRow[]; }',
          default: 'undefined',
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
          prop: 'enableRowActions',
          description:
            'If enabled, a button to load / display the row actions will be displayed on the right of every box.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'filterEnabled',
          description: 'Enable filtering.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'layout',
          description:
            'How the field will be displayed. If not present, a default one will be created.',
          type: 'Layout',
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
          prop: 'noBorder',
          description: 'Removes border.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'noPadding',
          description: 'Removes padding.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
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
          prop: 'selectBox',
          description: 'Automatically selects the box at the specified index.',
          type: 'number',
          default: 'undefined',
          try: 'field',
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
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
        {
          text: 'JSON',
          icon: '',
          active: false,
        },
        {
          text: 'CSS',
          icon: '',
          active: false,
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-box');
  comp.columns = '4';
  comp.contentAlign = 'center';
  comp.data = defaultData;
  comp.id = 'demo-component';
  comp.noBorder = true;
  return comp;
}
</script>
