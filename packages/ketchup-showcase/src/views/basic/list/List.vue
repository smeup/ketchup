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
        <list-selection></list-selection>
      </template>
    </comp>
  </div>
</template>

<script>
import ListDemo from '@/views/basic/list/examples/ListDemo';
import ListBasic from '@/views/basic/list/examples/ListBasic';
import ListSelection from '@/views/basic/list/examples/ListSelection';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    ListDemo,
    ListBasic,
    ListSelection,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-list',
      headtitle: 'List',
      titles: ['Playground', 'Basic usage', 'Item selection'],
    };
  },
};
</script>
