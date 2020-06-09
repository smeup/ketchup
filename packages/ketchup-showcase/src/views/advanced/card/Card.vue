<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <card-demo></card-demo>
      </template>
      <template v-slot:1>
        <card-basic></card-basic>
      </template>
      <template v-slot:2>
        <card-styling></card-styling>
      </template>
    </comp>
  </div>
</template>

<script>
import CardDemo from '@/views/advanced/card/examples/CardDemo';
import CardBasic from '@/views/advanced/card/examples/CardBasic';
import CardStyling from '@/views/advanced/card/examples/CardStyling';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    CardDemo,
    CardBasic,
    CardStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-card',
      headtitle: 'Card',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
};
</script>
