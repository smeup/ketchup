<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
import {
  getMockupPhaseDatas,
  getMockupTaskDatas,
  mockedProps,
} from '@/mock/mockedPlanner';

export default {
  components: {
    Demo,
  },
  name: 'PlannerDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-planner-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-planner-datechange',
          type: 'CustomEvent',
        },
        {
          name: 'kup-planner-ready',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'addPhases',
          description: 'Add a list of phases to the project.',
        },
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
          description: 'Dataset containg the tasks list',
          type: 'KupDataDataset',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'detailColorCol',
          description: 'Column containing the detail color, in hex format',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'detailColorCol',
          description: 'Column containing the detail color, in hex format',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'detailColumns',
          description:
            'Columns containing informations displayed in the left box, near the gantt of details',
          type: 'string',
          default: 'undefined',
          isArray: true,
          try: 'field',
        },
        {
          prop: 'detailData',
          description: 'Dataset containg the details list',
          type: 'KupDataDataset',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'detailDates',
          description:
            'Columns containing detail duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          isArray: true,
          try: 'field',
        },
        {
          prop: 'detailIdCol',
          description: 'Column containing unique detail identifier',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'detailNameCol',
          description: 'Column containing detail name displayed',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'detailPrevDates',
          description:
            'Columns containing fForecast detail duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          isArray: true,
          try: 'field',
        },
        {
          prop: 'detailInitialScrollX',
          description: 'Sets the initial scroll X for the detail.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'detailInitialScrollY',
          description: 'Sets the initial scroll Y for the detail.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'listCellWidth',
          description:
            'Total size of the cells inside to the left box, near the gantt',
          type: 'string',
          default: '300px',
          try: 'field',
        },
        {
          prop: 'phaseColorCol',
          description: 'Column containing the phase color in hex format',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseColumns',
          description:
            'Columns containing informations displayed in the left box ,near the gantt of phases',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'phaseColParDep',
          description: 'Column containing the name of the parent phases',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseDates',
          description:
            'Columns containing phase duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          try: 'field',
          isArray: true,
        },
        {
          prop: 'phaseIdCol',
          description: 'Column containing unique phase identifier',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseInitialScrollX',
          description: 'Sets the initial scroll X for the phase.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseInitialScrollY',
          description: 'Sets the initial scroll Y for the phase.',
          type: 'number',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseNameCol',
          description: 'Column containing phase name displayed',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phasePrevDates',
          description:
            'Columns containing forecast phase duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'readOnly',
          description: 'When true, the two gantts are not interactable.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'showSecondaryDates',
          description: 'Enable/disable display of secondary dates',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'taskColumns',
          description:
            'Columns containing informations displayed in the left box, near the gantt',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'taskDates',
          description:
            'Columns containing task duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'taskIdCol',
          description: 'Column containing unique task identifier',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'taskNameCol',
          description: 'Column containing task name displayed',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'taskPrevDates',
          description:
            'Columns containing forecast task duration, from (firstDate) to (secondDate)',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'titleMess',
          description: 'Message displayed on top',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-planner');
  comp.id = 'demo-component';
  for (const key in mockedProps) {
    const prop = mockedProps[key];
    comp[key] = prop;
  }
  comp.data = getMockupTaskDatas();
  comp.addEventListener('kup-planner-click', (e) => {
    const payload = e.detail.value;
    const taskAction = e.detail.taskAction;
    console.log('kup-planner-click', payload, taskAction);
    if (payload.type == 'task' && taskAction == 'onOpening') {
      comp.addPhases(payload.id, getMockupPhaseDatas(payload.taskRowId));
    } else {
      console.log('Do something...');
    }
  });
  comp.addEventListener('kup-planner-datechange', (e) => {
    const payload = e.detail.value;
    console.log('kup-planner-datechange', payload);
  });
  return comp;
}
</script>
