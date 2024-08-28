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
import { mockedProps } from '@/mock/activityTimeline';
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'ActivityTimelineDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-activitytimeline-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-activitytimeline-contextmenu',
          type: 'CustomEvent',
        },
        {
          name: 'kup-activitytimeline-ready',
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
          prop: 'data',
          description: 'Dataset containg the activity list',
          type: 'KupDataDataset',
          default: 'undefined',
          try: 'json',
        },
        {
          prop: 'dateColumn',
          description: 'Column containing dates',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
        {
          prop: 'timeColumn',
          description: 'Column containing times',
          type: 'string',
          default: 'undefined',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-activity-timeline');
  comp.id = 'demo-component';

  for (const key in mockedProps) {
    const prop = mockedProps[key];
    comp[key] = prop;
  }

  return comp;
}
</script>
