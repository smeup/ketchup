<template>
  <tr
    class="data-row"
    :class="{selected: row.selected}"
  >
    <td
      v-for="column in columns"
      :key="column.code"
      @click="onCellClick(column)"
    >
      {{ row[column.code] }}
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DataRow extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private row!: any;

  // methods
  onCellClick(column: any) {
    this.$emit("rowselect", { column, row: this.row });
  }
}
</script>

<style lang="scss" scoped>
tr {
  margin: 0px;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: lightyellow;
  }

  &.selected {
    background-color: lightslategrey;
  }

  td {
    padding: 5px;
    border: 1px solid red;
  }
}
</style>
