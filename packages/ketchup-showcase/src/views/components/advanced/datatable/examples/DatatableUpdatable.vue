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
      Command required (event.detail.updatedData.command) - Emtpy when the
      button pressed is Update
      <pre>{{ this.command }}</pre>
    </div>
  </div>
</template>

<script>
import { getDefaultDataTable } from '@/mock/dataTable';

const tableWithCommands = {
  ...getDefaultDataTable(),
  setup: {
    commands: [
      {
        cells: {
          CLEAR: {
            value: 'Clear (F5)',
            obj: {
              t: 'J1',
              p: 'KEY',
              k: 'CLEAR',
            },
            icon: 'clear',
            data: {
              keyShortcut: 'F5',
            },
          },
        },
      },
    ],
    operations: {
      insert: true,
      delete: true,
    },
  },
};

export default {
  name: 'dataTableUpdatable',

  data() {
    return {
      defaultData: {
        data: tableWithCommands,
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
      this.command = event.detail.command;
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
