<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <badge-demo></badge-demo>
      </template>
      <template v-slot:1>
        <badge-basic></badge-basic>
      </template>
      <template v-slot:2>
        <badge-styling></badge-styling>
      </template>
    </comp>
  </div>
</template>

<script>
import BadgeDemo from '@/views/components/basic/badge/examples/BadgeDemo';
import BadgeBasic from '@/views/components/basic/badge/examples/BadgeBasic';
import BadgeStyling from '@/views/components/basic/badge/examples/BadgeStyling';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    BadgeDemo,
    BadgeBasic,
    BadgeStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-badge',
      headtitle: 'Badge',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
  title: 'Ketchup | Badge',
};
</script>
