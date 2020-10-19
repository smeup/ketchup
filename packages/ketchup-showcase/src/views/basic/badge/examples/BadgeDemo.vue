<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoProps="demoProps"
      :demoTabs="demoTabs"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'BadgeDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kupBadgeClick',
          type: 'click',
        },
      ],
      demoProps: [
        {
          prop: 'className',
          description:
            'Available classes: top-right, bottom-left, bottom-right. Read below for detailed information.',
          type: 'string',
          default: '""',
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
          prop: 'imageData',
          description:
            'The data of the image displayed inside the badge. It will displayed only when "text" is undefined.',
          type: 'Object',
          default: '{}',
          try: 'json',
        },
        {
          prop: 'text',
          description: 'The text displayed inside the badge.',
          type: 'string',
          default: '""',
          try: 'field',
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
