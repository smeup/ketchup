<template>
  <div>
    <h3>Sort enabled</h3>
    <kup-box :data.prop="basicData" :sortEnabled.prop="true"></kup-box>

    <h3>Sort enabled on Number</h3>
    <kup-box
      :data.prop="basicData"
      :sortEnabled.prop="true"
      :sortBy.prop="'FLD3'"
    ></kup-box>
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
