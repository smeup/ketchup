<style lang="scss" scoped>
</style>

<template>
  <tbody>
    <DataRow
      v-for="row in rows"
      :key="row['RowId']"
      :columns="columns"
      :row="row"
      @rowselect="onRowSelect"
    />
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DataRow from "./DataRow.vue";
import GroupRow from "./GroupRow.vue";

@Component({
  components: {
    DataRow,
    GroupRow
  }
})
export default class MatrixBody extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private rows!: any[];

  @Prop() private filterable!: boolean;

  @Prop() private sortable!: boolean;

  @Prop() private grouping!: boolean;

  // methods
  onRowSelect($event: any) {
    // unselecting all rows
    this.rows
      .filter(row => row.selected)
      .forEach(row => (row.selected = false));

    $event.row.selected = true;

    this.$emit("rowselect", $event);
  }

  onRowToggled($event: any) {
    this.$emit("rowtoggled", $event);
  }
}
</script>
