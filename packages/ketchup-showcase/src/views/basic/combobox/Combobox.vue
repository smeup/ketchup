<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <combobox-demo></combobox-demo>
      </template>
      <template v-slot:1>
        <combobox-basic></combobox-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import ComboboxDemo from '@/views/basic/combobox/examples/ComboboxDemo';
import ComboboxBasic from '@/views/basic/combobox/examples/ComboboxBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    ComboboxDemo,
    ComboboxBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/wup-combobox',
      headtitle: 'Combobox',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
