<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <buttonlist-demo></buttonlist-demo>
      </template>
      <template v-slot:1>
        <buttonlist-basic></buttonlist-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import ButtonlistDemo from '@/views/components/advanced/buttonlist/examples/ButtonlistDemo';
import ButtonlistBasic from '@/views/components/advanced/buttonlist/examples/ButtonlistBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    ButtonlistDemo,
    ButtonlistBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-button-list',
      headtitle: 'Button list',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Button list',
};
</script>
