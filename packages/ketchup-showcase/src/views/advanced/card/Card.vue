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
      <template v-slot:3>
        <card-menu></card-menu>
      </template>
      <template v-slot:4>
        <card-material></card-material>
      </template>
      <template v-slot:5>
        <card-collapsible></card-collapsible>
      </template>
      <template v-slot:6>
        <card-custom></card-custom>
      </template>
    </comp>
  </div>
</template>

<script>
import CardDemo from '@/views/advanced/card/examples/CardDemo';
import CardBasic from '@/views/advanced/card/examples/CardBasic';
import CardStyling from '@/views/advanced/card/examples/CardStyling';
import CardMenu from '@/views/advanced/card/examples/CardMenu';
import CardMaterial from '@/views/advanced/card/examples/CardMaterial';
import CardCollapsible from '@/views/advanced/card/examples/CardCollapsible';
import CardCustom from '@/views/advanced/card/examples/CardCustom';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    CardDemo,
    CardBasic,
    CardStyling,
    CardMenu,
    CardMaterial,
    CardCollapsible,
    CardCustom,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-card',
      headtitle: 'Card',
      titles: [
        'Playground',
        'Basic usage',
        'Styling',
        'Menu variant',
        'Material layouts',
        'Collapsible layouts',
        'Custom layouts',
      ],
    };
  },
};
</script>
