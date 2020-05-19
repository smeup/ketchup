<style lang="scss" scoped>
tr.group-row {
  background-color: yellow;

  td {
    padding: 5px;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    text-align: left;
  }
}
</style>

<template>
  <tr
    class="group-row"
    @click="toggleRowCollapse"
  >
    <td
      :colspan="columns.length"
      :style="{paddingLeft: (row.level * 20) + 'px' }"
    >
      <span @click.stop="toggleRowCollapse">
        <chevron-right v-if="row.collapsed" />
        <chevron-down v-else />
      </span>

      {{ row.text }}
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

@Component({
  components: {
    ChevronRight,
    ChevronDown
  }
})
export default class DataRow extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private row!: any;

  // computed
  get groupRows(): any[] {
    const groupRows = new Array();

    groupRows.push(this.row);

    if (!this.row.collapsed) {
      groupRows.push(this.row.children);
    }

    return groupRows;
  }

  // methods
  toggleRowCollapse() {
    // this.row.collapsed = !this.row.collapsed;
    this.$emit("rowtoggled", this.row);
  }
}
</script>
