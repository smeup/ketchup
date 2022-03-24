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

export default {
  components: {
    Demo,
  },
  name: 'BadgeDemo',
  data() {
    return {
      demoClasses: [
        {
          class: 'kup-bottom-left',
          description:
            'The badge will be position to the bottom left corner of its container.',
        },
        {
          class: 'kup-bottom-right',
          description:
            'The badge will be position to the bottom right corner of its container.',
        },
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
          class: 'kup-top-right',
          description:
            'The badge will be position to the top right corner of its container.',
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
          name: 'kup-badge-click',
          type: 'click',
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
          prop: 'imageData',
          description:
            'The data of the image displayed inside the badge. It will displayed only when "text" is undefined.',
          type: 'Object',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'text',
          description: 'The text displayed inside the badge.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  let comp = document.createElement('div');
  let compSurface = document.createElement('span');
  let compEl = document.createElement('kup-badge');
  comp.classList.add('badge-anchor');
  compSurface.innerText = 'YOUR CONTAINER';
  compEl.id = 'demo-component';
  compEl.position = 'TR';
  compEl.text = 'Demo';
  comp.appendChild(compSurface);
  comp.appendChild(compEl);
  return comp;
}
</script>
