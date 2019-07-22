<template>
  <div>
    <h3>no-shadow</h3>
    <kup-box :data.prop="basicData" class="no-shadow"></kup-box>
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

