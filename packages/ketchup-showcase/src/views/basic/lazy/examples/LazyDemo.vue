<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps"></demo>
  </div>
</template>

<script>
import Demo from '@/views/advanced/page/templates/Demo';

let comp = document.createElement('kup-lazy');
let slot = document.createElement('kup-checkbox');
slot.setAttribute('slot', 'element');
comp.appendChild(slot);

export default {
  components: {
    Demo,
  },
  name: 'LazyDemo',
  data() {
    return {
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
      demoComp: comp,
      demoProps: [
        {
          prop: 'innerText',
          description: 'This component works with slots.',
          type: 'string',
          default: 'undefined',
          try: 'json',
        },
      ],
    };
  },
};
</script>
