<style lang="scss" scoped>
.filter-container {
  margin: 5px 0px;
}
</style>

<template>
  <div class="filter-container">
    <el-input
      v-if="isNumber"
      v-model="filterValue"
      @change="onValueChange"
    ></el-input>

    <el-select
      v-else
      placeholder="Choose one"
      :multiple="true"
      v-model="filterValue"
      @change="onValueChange"
      @visible-change="onVisibleChange"
    >
      <el-option
        v-for="(value, index) in comboValues"
        :key="index"
        :label="value"
        :value="value"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MatrixHeaderFilter extends Vue {
  // props
  @Prop() private column!: any;

  @Prop() private rows!: any[];

  filterValue: string = this.column.filterValue;

  comboValues: any[] = new Array();

  loaded = false;

  // computed
  get isNumber() {
    return "NR" === this.column.tipo;
  }

  // methods
  getComboValuesRic(_row: any): any[] {
    const values = new Array();

    if (_row.group) {
      // TODO
      if (_row.children) {
        _row.children
          .map((child: any) => this.getComboValuesRic(child))
          .forEach((_values: any) =>
            _values.forEach((_value: any) => values.push(_value))
          );
      }
    } else {
      values.push(_row[this.column.code]);
    }

    return values;
  }

  onValueChange() {
    // this.column, this.filterValue
    this.$emit("filterby", {
      column: this.column,
      filterValue: this.filterValue
    });
  }

  onVisibleChange() {
    if (!this.loaded) {
      // distinct values + sort
      const values: String[] = new Array();

      this.rows
        .map(r => this.getComboValuesRic(r))
        .forEach(_values => _values.forEach(_value => values.push(_value)));

      this.comboValues = ["", ...new Set(values)].sort();

      this.loaded = true;
    }
  }
}
</script>
