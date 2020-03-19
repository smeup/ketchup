<template>
  <div>
    <demo
      :demoTabs="demoTabs"
      :demoComp="demoComp"
      :demoProps="demoProps"
      :demoEvents="demoEvents"
      :demoData="demoData"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'ChartDemo',
  data() {
    return {
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
      demoComp:
        '<kup-box content-align="center" no-border id="demo-component"></kup-box>',
      demoProps: [
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
            'Sets a custom style for the component by feeding this string into a <style> tag.',
          type: 'string',
          default: 'null',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'The actual data of the chart.',
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
      demoData: [
        {
          prop: 'data',
          value: {
            columns: [
              {
                name: 'FLD1',
                title: 'Photo',
                size: '',
              },
              {
                name: 'FLD2',
                title: 'Name',
                size: 10,
              },
            ],
            rows: [
              {
                id: '1',
                cells: {
                  FLD1: {
                    obj: {
                      t: 'J4',
                      p: 'IMG',
                      k: 'AR;ART;Blue Flowers',
                    },
                    value: 'images/blueflowers.JPG',
                  },
                  FLD2: {
                    obj: {
                      t: 'AR',
                      p: 'ART',
                      k: 'Blue Flowers',
                    },
                    value: 'Blue flowers',
                  },
                },
              },
              {
                id: '2',
                cells: {
                  FLD1: {
                    obj: {
                      t: 'J4',
                      p: 'IMG',
                      k: 'AR;ART;Purple flowers',
                    },
                    value: 'images/purpleflowers.JPG',
                  },
                  FLD2: {
                    obj: {
                      t: 'AR',
                      p: 'ART',
                      k: 'Purple flowers',
                    },
                    value: 'Purple flowers',
                  },
                },
              },
              {
                id: '3',
                cells: {
                  FLD1: {
                    obj: {
                      t: 'J4',
                      p: 'IMG',
                      k: 'AR;ART;Red flowers',
                    },
                    value: 'images/redflowers.JPG',
                  },
                  FLD2: {
                    obj: {
                      t: 'AR',
                      p: 'ART',
                      k: 'Red flowers',
                    },
                    value: 'Red flowers',
                  },
                },
              },
            ],
          },
        },
        {
          prop: 'columns',
          value: '3',
        },
      ],
    };
  },
};
</script>
