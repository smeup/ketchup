<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Single group (visible)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group1" :showFilters.prop="true" />

    <h3>Group labels configuration</h3>
    <div>Here you can change the visualization mode of the labels of the group:</div>
    <kup-combo
      :items.prop="comboboxLabelModes"
      :initial-value.prop="comboboxLabelModes[0]"
      label="Select label position"
      @ketchupComboSelected="onDisplayedLabelChange"
    />
    <br />
    <br />
    <kup-data-table
      :data.prop="data"
      :groupLabelDisplay.prop="selectedLabelMode"
      :groups.prop="group1"
      :showFilters.prop="true"
    />

    <h3>Single group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group2" />

    <h3>Multiple group (visible)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group3" />

    <h3>Multiple group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group4" />

    <h3>Single group and totals</h3>
    <kup-data-table :data.prop="data" :groups.prop="group1" :totals.prop="totals1" />

    <h3>Multiple group and expansion</h3>
    <kup-data-table :data.prop="data" :groups.prop="group3" :expandGroups.prop="true" />
  </div>
</template>

<script>
import { groupDataTable } from '@/mock/dataTable';
const labelModes = ['both', 'label', 'value'];

export default {
  name: 'dataTableFilters',

  data() {
    return {
      data: {
        ...groupDataTable,
      },
      labelModes,
      selectedLabelMode: labelModes[0],
      group1: [
        {
          column: 'FLD0',
        },
      ],
      group2: [
        {
          column: 'FLD0',
          visible: false,
        },
      ],
      group3: [
        {
          column: 'FLD0',
        },
        {
          column: 'FLD1',
        },
      ],
      group4: [
        {
          column: 'FLD0',
          visible: false,
        },
        {
          column: 'FLD1',
          visible: false,
        },
      ],
      totals1: {
        FLD2: 'Count',
      },
    };
  },
  computed: {
    comboboxLabelModes() {
      return this.labelModes.map((mode) => {
        return {
          id: mode,
        };
      });
    },
  },
  methods: {
    onDisplayedLabelChange(e) {
      this.selectedLabelMode = e.detail.value.id;
    },
  },
};
</script>
