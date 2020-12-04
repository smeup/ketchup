<template>
  <div>
    <h3>Progress Bar (kup-progress-bar)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { pgbData } from '@/mock/box';

export default {
  name: 'DTFogog',
  data() {
    return {
      data: { data: pgbData },
    };
  },
};
</script>
