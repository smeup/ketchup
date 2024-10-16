<template>
  <div>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="defaultData"
      @kup-datatable-update="onKupDatatableUpdate"
    ></kup-lazy>
    <div v-if="originalData">
      Original data rows (event.detail.originalData.rows)
      <pre>{{ this.originalData }}</pre>
      Updated data rows (event.detail.updatedData.rows)
      <pre>{{ this.updatedData }}</pre>
    </div>
  </div>
</template>

<script>
import { getDefaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableUpdatable',

  data() {
    return {
      defaultData: {
        data: getDefaultDataTable(true),
        updatableData: true,
      },
      originalData: '',
      updatedData: '',
    };
  },

  methods: {
    onKupDatatableUpdate(event) {
      this.originalData = event.detail.originalData.rows;
      this.updatedData = event.detail.updatedData.rows;
    },
  },
};
</script>

<style scoped>
pre {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
  font-size: 12px;
}
</style>
