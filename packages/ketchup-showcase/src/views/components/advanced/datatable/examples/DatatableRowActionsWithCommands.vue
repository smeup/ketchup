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
import { dataTableWithCommands } from '@/mock/dataTable';

export default {
  data() {
    return {
      data: {
        data: dataTableWithCommands,
        rowActions: [
          {
            text: 'Action #1',
            icon: 'folder',
          },
        ],
        commands: [
          {
            obj: {
              k: '000050',
              p: 'COD_VER',
              t: 'VO',
            },
            icon: 'view-quilt',
            text: 'Scheda',
            showIcon: 'true',
          },
          {
            obj: {
              k: '000050',
              p: 'COD_VER',
              t: 'VO',
            },
            icon: 'delete',
            text: 'Elimina',
            showIcon: 'true',
          },
          {
            obj: {
              k: '000051',
              p: 'COD_VER',
              t: 'VO',
            },
            icon: 'edit',
            text: 'Modifica',
            showIcon: 'true',
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
