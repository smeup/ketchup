<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <date-picker-demo></date-picker-demo>
      </template>
      <template v-slot:1>
        <date-picker-basic></date-picker-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import DatePickerDemo from '@/views/basic/datepicker/examples/DatePickerDemo';
import DatePickerBasic from '@/views/basic/datepicker/examples/DatePickerBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    DatePickerDemo,
    DatePickerBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-date-picker',
      headtitle: 'Date Picker',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
