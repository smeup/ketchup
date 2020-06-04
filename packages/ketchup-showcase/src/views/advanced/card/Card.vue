<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <card-demo></card-demo>
      </template>
    </comp>
  </div>
</template>

<script>
import CardDemo from '@/views/advanced/card/examples/CardDemo';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    CardDemo,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-card',
      headtitle: 'Card',
      titles: ['Playground'],
    };
  },
};
</script>
