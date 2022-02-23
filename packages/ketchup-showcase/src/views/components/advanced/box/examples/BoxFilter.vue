<template>
  <div>
    <h3>Filter enabled</h3>
    <kup-box :data.prop="basicData" :globalFilter.prop="true"></kup-box>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
    };
  },
};
</script>
