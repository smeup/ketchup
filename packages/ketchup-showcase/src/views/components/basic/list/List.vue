<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <list-demo></list-demo>
      </template>
      <template v-slot:1>
        <list-basic></list-basic>
      </template>
      <template v-slot:2>
        <list-styling></list-styling>
      </template>
      <template v-slot:3>
        <list-selection></list-selection>
      </template>
      <template v-slot:4>
        <list-menu></list-menu>
      </template>
    </comp>
  </div>
</template>

<script>
import ListDemo from '@/views/components/basic/list/examples/ListDemo';
import ListBasic from '@/views/components/basic/list/examples/ListBasic';
import ListStyling from '@/views/components/basic/list/examples/ListStyling';
import ListSelection from '@/views/components/basic/list/examples/ListSelection';
import ListMenu from '@/views/components/basic/list/examples/ListMenu';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    ListDemo,
    ListBasic,
    ListStyling,
    ListSelection,
    ListMenu,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-list',
      headtitle: 'List',
      titles: [
        'Playground',
        'Basic usage',
        'Styling',
        'Selection',
        'Menu variant',
      ],
    };
  },
  title: 'Ketchup | List',
};
</script>
