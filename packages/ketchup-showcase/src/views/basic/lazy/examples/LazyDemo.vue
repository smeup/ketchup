<template>
  <div>
    <demo :demoTabs="demoTabs" :demoComp="demoComp" :demoProps="demoProps"></demo>
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
      demoComp:
        '<kup-lazy id="demo-component"><kup-checkbox slot="element"></kup-checkbox></kup-lazy>',
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
