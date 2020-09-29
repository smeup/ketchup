<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Single group (visible)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="dataGroup"></kup-lazy>

    <h3>Single group (hidden)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="dataGroup2"
    ></kup-lazy>

    <h3>Multiple group (visible)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="dataGroup3"
    ></kup-lazy>

    <h3>Multiple group (hidden)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="dataGroup4"
    ></kup-lazy>

    <h3>Single group and totals</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="dataGroup5"
    ></kup-lazy>

    <h3>Multiple group, expansion and group display label as VALUE</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="dataGroup6"
    ></kup-lazy>
  </div>
</template>

<script>
import { groupDataTable } from '@/mock/dataTable';
const labelModes = ['both', 'label', 'value'];

export default {
  name: 'dataTableFilters',

  data() {
    return {
      dataGroup: {
        data: groupDataTable,
        showFilters: true,
        groups: [
          {
            column: 'FLD0',
          },
        ],
      },
      dataGroup2: {
        data: groupDataTable,
        groups: [
          {
            column: 'FLD0',
            visible: false,
          },
        ],
      },
      dataGroup3: {
        data: groupDataTable,
        groups: [
          {
            column: 'FLD0',
          },
          {
            column: 'FLD1',
          },
        ],
      },
      dataGroup4: {
        data: groupDataTable,
        groups: [
          {
            column: 'FLD0',
            visible: false,
          },
          {
            column: 'FLD1',
            visible: false,
          },
        ],
      },
      dataGroup5: {
        data: groupDataTable,
        groups: [
          {
            column: 'FLD0',
          },
        ],
        totals: {
          FLD2: 'Count',
        },
      },
      dataGroup6: {
        data: groupDataTable,
        groups: [
          {
            column: 'FLD0',
          },
          {
            column: 'FLD1',
          },
        ],
        expandGroups: true,
        groupLabelDisplay: 'Value',
      },
    };
  },
};
</script>
