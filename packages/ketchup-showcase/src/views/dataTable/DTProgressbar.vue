<template>
  <div>
    <h1>Progressbar in cells</h1>

    <h3>Progress Bar (kup-progress-bar)</h3>
    <kup-data-table :data.prop="progressbarData"/>
  </div>
</template>

<script>
  import { pgbData } from '@/mock/box';

  export default {
    name: 'DTFogog',
    data() {
      return {
        progressbarData: pgbData,
      }
    }
  }
</script>