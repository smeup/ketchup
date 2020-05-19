<style lang="scss" scoped>
th {
  padding: 5px;
  min-width: 100px;

  &.sortable {
    cursor: pointer;
  }

  span.mdi {
    display: none;
  }

  &:hover {
    span.mdi {
      display: inline;
    }
  }
}
</style>

<template>
  <thead>
    <tr>
      <th
        v-for="col in columns"
        :key="col.code"
        :class="{ sortable: sortable }"
      >
        <span
          @click="onCellClick(col)"
        >
          {{ col.text }}
        </span>

        <span
          v-if="sortable"
          class="mdi"
          :class="{ 'mdi-arrow-up' : col.isAscending, 'mdi-arrow-down' : !col.isAscending }"
        ></span>

        <MatrixHeaderFilter
          v-if="filterable"
          :column="col"
          :rows="rows"
          @filterby="onFilterBy"
        />
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import MatrixHeaderFilter from "./MatrixHeaderFilter.vue";

@Component({
  components: {
    MatrixHeaderFilter
  }
})
export default class MatrixHeader extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private rows!: any[];

  @Prop({ default: false })
  private filterable!: boolean;

  @Prop() private sortable!: boolean;

  @Prop() private grouping!: boolean;

  // methods
  onCellClick(col: any) {
    if (this.sortable) {
      col.sortMode === "A" ? (col.sortMode = "D") : (col.sortMode = "A");
      this.$emit("sortby", col);
    }
  }

  onFilterBy(filter: any) {
    this.$emit("filterby", filter);
  }
}
</script>
