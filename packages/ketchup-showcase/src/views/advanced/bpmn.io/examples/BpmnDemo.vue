<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoClasses="demoClasses"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';
import { defaultData } from '@/mock/box';

export default {
  components: {
    Demo,
  },
  name: 'BpmnDemo',
  data() {
    return {
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
          name: 'kupBoxDropped',
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
      ],
      demoProps: [
        {
          prop: 'asImage',
          description: 'set true to view the image of xml diagram',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
      ],
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
          class: 'kup-left-aligned',
          description:
            "Content will be horizontally aligned to section's left.",
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
    };
  },
};

function createComp() {
  let comp = document.createElement('kup-bpmn');
  comp.columns = '4';
  comp.data = defaultData;
  comp.id = 'demo-component';
  comp.showSelection = true;
  comp.showTooltipOnRightClick = true;
  comp.tooltipEnabled = true;
  return comp;
}
</script>
