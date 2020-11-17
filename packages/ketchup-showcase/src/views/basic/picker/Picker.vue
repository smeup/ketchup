<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <picker-demo></picker-demo>
      </template>
      <template v-slot:1>
        <picker-basic></picker-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import PickerDemo from '@/views/basic/picker/examples/PickerDemo';
import PickerBasic from '@/views/basic/picker/examples/PickerBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    PickerDemo,
    PickerBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-picker',
      headtitle: 'Picker',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
