<template>
  <div>
    <h3>Progress Bar (kup-progress-bar)</h3>
    <kup-data-table :data.prop="progressbarData" />
  </div>
</template>

<script>
import { pgbData } from '@/mock/box';

export default {
  name: 'DTFogog',
  data() {
    return {
      progressbarData: pgbData,
    };
  },
};
</script>