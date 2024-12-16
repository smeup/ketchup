<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The toolbar is a component that uses cell to generate a structured and
        nested tree used for operative functionalities.</p
      >
      <div class="demo-container">
        <div class="kup-container" style="display: block">
          <kup-toolbar :data.prop="toolbarProps.data" />
        </div>
      </div>
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolbarBasic',
  data() {
    return {
      markupBasic: '<kup-toolbar></kup-toolbar>',
      toolbarProps: {
        customStyle: '',
        data: [
          {
            children: [],
            disabled: false,
            expandable: false,
            id: '',
            isExpanded: false,
            value: 'Element 1 Parent',
            visible: true,
          },
          {
            children: [
              {
                children: [],
                disabled: false,
                id: '',
                isEditable: true,
                shape: 'Rad',
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                data: {
                  type: 'chevron',
                },
                options: [
                  {
                    id: 0,
                    label: 'One',
                  },
                  {
                    id: 1,
                    label: 'Two',
                  },
                  {
                    id: 2,
                    label: 'Three',
                  },
                ],
                value: '0',
              },
            ],
            disabled: false,
            expandable: false,
            id: '',
            isExpanded: false,
            style: {},
            value: 'element 2 parent',
            visible: true,
          },
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    id: '',
                    isExpanded: false,
                    value: 'element 3 child 1 child 1',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    id: '',
                    isExpanded: false,
                    value: 'element 3 child 1 child 2',
                  },
                ],
                disabled: false,
                expandable: false,
                id: '',
                isExpanded: false,
                value: 'element 3 child 1',
              },
            ],
            disabled: false,
            expandable: false,
            id: '',
            isExpanded: false,
            value: 'element 3',
            visible: true,
          },
        ],
        listCellWidth: '300px',
        maxWidth: '100%',
        readOnly: false,
        showSecondaryDates: false,
        taskColumns: ['R§COMM', 'R£COMM'],
        taskDates: ['DATINZ', 'DATPRE'],
        taskIdCol: 'R§COMM',
        taskNameCol: 'R£COMM',
        taskPrevDates: ['INZORD', 'DATORD'],
        titleMess: '',
      },
    };
  },
};
</script>
