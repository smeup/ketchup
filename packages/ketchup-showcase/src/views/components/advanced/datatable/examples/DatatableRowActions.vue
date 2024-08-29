<template>
  <div>
    <kup-lazy
      ref="dataTable"
      component-name="kup-data-table"
      :data.prop="data"
    ></kup-lazy>

    <ul>
      <li v-if="action"
        >Clicked action: text: {{ action.text }} - icon: {{ action.icon }}</li
      >
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
      data: {
        data: defaultDataTable,
        rowActions: [
          {
            text: 'Action #1',
            icon: 'folder',
          },
          {
            text: 'Action #2',
            icon: 'account',
          },
          {
            text: 'Action #3',
            icon: 'folder',
          },
          {
            text: 'Action #4',
            icon: 'account',
          },
          {
            text: 'Action #5',
            icon: 'folder',
          },
          {
            text: 'Action #6',
            icon: 'account',
          },
          {
            text: 'Action #7',
            icon: 'folder',
          },
          {
            text: 'Action #8',
            icon: 'account',
          },
          {
            text: 'Action #9',
            icon: 'folder',
          },
          {
            text: 'Action #10',
            icon: 'account',
          },
        ],
        ['onkup-datatable-rowactionclick']: (e) => {
          const action = e.detail.action;
          const index = e.detail.index;
          const type = e.detail.type;
          const row = e.detail.row;
          this.actionType = type;
          this.row = row;

          if ('default' === type || 'variable' === type) {
            this.action = action;
            this.actionIndex = index;
          } else if ('expander' === type) {
            this.action = null;
            this.actionIndex = -1;

            e.target.data = { ...e.target.data };
          }
        },
      },
      action: null,
      actionIndex: -1,
      actionType: null,
      row: null,
    };
  },
};
</script>

<style scoped>
ul {
  margin-top: 1rem;
}
</style>
