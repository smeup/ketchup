<template>
  <div>
    <h3>Images with badge</h3>
    <kup-box :data.prop="imgBadgeData"></kup-box>
    <hr />

    <h3>Box badge</h3>
    <kup-box :data.prop="boxBadgeData"></kup-box>
  </div>
</template>

<script>
import { imgBadgeData, boxBadgeData } from '@/mock/box';

export default {
  data() {
    return {
      imgBadgeData,
      boxBadgeData,
    };
  },
};
</script>
