<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>First record Selected</h3>
    <p
      >With the <b>selectRow</b> prop it is possibile to select a specific
      row.</p
    >
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h3>Multiple selection</h3>
    <p
      >In order to get a rows multiple selection it is necessary to specify the
      <b>multiple</b> value in the prop <b>selection</b>.</p
    >
    <kup-lazy component-name="kup-data-table" :data.prop="data1"></kup-lazy>

    <h3>Multiple selection with checkbox</h3>
    <p
      >It is also possible to set the value to <b>multiple-checkbox</b> in order
      to get the multiple selection through checkboxes.</p
    >
    <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableRowSelection',

  data() {
    return {
      data: {
        data: sortDataTable,
        selectRow: 1,
        showFilters: true,
        filters: {
          FLD1: 'fra',
        },
        sort: [
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
      data1: {
        selection: 'multiple',
        data: sortDataTable,
        showFilters: true,
        filters: {
          FLD1: 'fra',
        },
        sort: [
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
      data2: {
        selection: 'multiple-checkbox',
        data: sortDataTable,
        showFilters: true,
        filters: {
          FLD1: 'fra',
        },
        sort: [
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
    };
  },
};
</script>
