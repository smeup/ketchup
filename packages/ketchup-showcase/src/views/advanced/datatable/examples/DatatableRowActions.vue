<template>
  <div>
    <kup-data-table
      ref="dataTable"
      :data.prop="defaultDataTable"
      :rowActions.prop="rowActions"
      @kupRowActionClicked="onRowActionClicked($event.detail)"
    ></kup-data-table>

    <ul>
      <li v-if="action">Clicked action: text: {{ action.text }} - icon: {{ action.icon }}</li>
      <li v-if="actionIndex >= 0">Action index: {{ actionIndex }}</li>
      <li v-if="actionType">Action type: {{ actionType }}</li>
      <li v-if="row">Row: {{ row }}</li>
    </ul>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  data() {
    return {
      defaultDataTable: { ...defaultDataTable },
      rowActions: [
        {
          text: 'Action #1',
          icon: 'folder',
        },
        {
          text: 'Action #2',
          icon: 'account',
        },
      ],
      action: null,
      actionIndex: -1,
      actionType: null,
      row: null,
    };
  },

  methods: {
    onRowActionClicked({ action, index, type, row }) {
      this.actionType = type;
      this.row = row;

      if ('default' === type || 'variable' === type) {
        this.action = action;
        this.actionIndex = index;
      } else if ('expander' === type) {
        this.action = null;
        this.actionIndex = -1;

        // adding actions to row
        row.actions = [
          {
            text: 'Variable action #1',
            icon: 'mdi mdi-plus',
          },
          {
            text: 'Variable action #2',
            icon: 'mdi mdi-pencil',
          },
        ];

        //   not sure about this
        this.$refs.dataTable.data = { ...defaultDataTable };
      }
    },
  },
};
</script>

<style scoped>
ul {
  margin-top: 1rem;
}
</style>
