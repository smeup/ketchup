<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <time-picker-demo></time-picker-demo>
      </template>
      <template v-slot:1>
        <time-picker-basic></time-picker-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import TimePickerDemo from '@/views/components/basic/timepicker/examples/TimePickerDemo';
import TimePickerBasic from '@/views/components/basic/timepicker/examples/TimePickerBasic';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    TimePickerDemo,
    TimePickerBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-time-picker',
      headtitle: 'Time Picker',
      titles: ['Playground', 'Basic usage'],
    };
  },
  title: 'Ketchup | Time picker',
};
</script>
