<template>
  <div>
    <h3>Data table with radio elements</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { dataTableCheckboxFactory } from '@/mock/dataTable';
let tableRadioData = dataTableCheckboxFactory('rad');

export default {
  name: 'DTRadio',
  data() {
    return {
      data: { config: tableRadioData.config, data: tableRadioData.data },
    };
  },
};
</script>
