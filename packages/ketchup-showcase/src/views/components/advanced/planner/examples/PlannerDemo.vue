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
          description: 'The actual data of the planner.',
          type: 'KupDataDataset',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'dataRaw',
          description: '',
          type: 'any',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'listCellWidth',
          description: '',
          type: 'string',
          default: '300px',
          try: 'field',
        },
        {
          prop: 'phaseColorCol',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseColumns',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'phaseColParDep',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseDates',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
          isArray: true,
        },
        {
          prop: 'phaseIdCol',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phaseNameCol',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'phasePrevDates',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'showSecondaryDates',
          description: '',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'taskColumns',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'taskDates',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'taskIdCol',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'taskNameCol',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'taskPrevDates',
          description: '',
          type: 'string',
          default: 'undefined',
          try: 'json',
          isArray: true,
        },
        {
          prop: 'titleMess',
          description: '',
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
