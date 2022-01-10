<template>
  <div>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="defaultData"
      @kup-lazy-loaded="mergeColumns"
    ></kup-lazy>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'DatatableMerge',

  data() {
    return {
      defaultData: {
        data: defaultDataTable,
      },
    };
  },
  methods: {
    mergeColumns(e) {
      e.detail.comp.getComponent().then((res) => {
        res.mergeColumns(['FLD1', 'FLD2', 'FLD3', 'FLD4']);
      });
    },
  },
};
</script>
