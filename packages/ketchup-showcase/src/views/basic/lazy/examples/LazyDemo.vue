<template>
  <div>
    <demo :demoComp="demoComp" :demoProps="demoProps" :demoTabs="demoTabs"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'LazyDemo',
  data() {
    return {
      demoComp: createComp(),
      demoProps: [
        {
          prop: 'innerText',
          description: 'This component works with slots.',
          type: 'string',
          default: 'undefined',
          try: 'json',
        },
      ],
      demoTabs: [
        {
          text: 'Props',
          icon: '',
          active: true,
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
  let comp = document.createElement('kup-lazy');
  let slot = document.createElement('kup-checkbox');
  slot.setAttribute('slot', 'element');
  comp.appendChild(slot);
  comp.id = 'demo-component';
  return comp;
}
</script>
