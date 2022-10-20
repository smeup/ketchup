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
        <card-standard></card-standard>
      </template>
      <template v-slot:5>
        <card-collapsible></card-collapsible>
      </template>
      <template v-slot:6>
        <card-scalable></card-scalable>
      </template>
      <template v-slot:7>
        <card-builtin></card-builtin>
      </template>
      <template v-slot:8>
        <card-free></card-free>
      </template>
      <template v-slot:9>
        <card-box></card-box>
      </template>
      <template v-slot:10>
        <card-dialog></card-dialog>
      </template>
    </comp>
  </div>
</template>

<script>
import CardDemo from '@/views/components/advanced/card/examples/CardDemo';
import CardBasic from '@/views/components/advanced/card/examples/CardBasic';
import CardBox from '@/views/components/advanced/card/examples/CardBox';
import CardStyling from '@/views/components/advanced/card/examples/CardStyling';
import CardMenu from '@/views/components/advanced/card/examples/CardMenu';
import CardBuiltin from '@/views/components/advanced/card/examples/CardBuiltin';
import CardFree from '@/views/components/advanced/card/examples/CardFree';
import CardCollapsible from '@/views/components/advanced/card/examples/CardCollapsible';
import CardDialog from '@/views/components/advanced/card/examples/CardDialog';
import CardScalable from '@/views/components/advanced/card/examples/CardScalable';
import CardStandard from '@/views/components/advanced/card/examples/CardStandard';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    CardDemo,
    CardBasic,
    CardBox,
    CardStyling,
    CardMenu,
    CardBuiltin,
    CardFree,
    CardCollapsible,
    CardDialog,
    CardScalable,
    CardStandard,
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
        'Standard layouts',
        'Collapsible layouts',
        'Scalable layouts',
        'Built-in layouts',
        'Free layouts',
        'Box layouts',
        'Dialog layouts',
      ],
    };
  },
  title: 'Ketchup | Card',
};
</script>
