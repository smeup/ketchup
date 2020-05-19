<template>
  <div class="MAT">
    <table>
      <MatrixHeader
        :columns="columns"
        :rows="rows"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scroll"
        :grouping="grouping"
        @sortby="onSort"
        @filterby="onFilterBy"
      />

      <MatrixBody
        :columns="columns"
        :rows="filteredRows"
        :grouping="grouping"
        @rowtoggled="onRowToggled"
        @rowselect="onRowSelected"
      />
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import MatrixBody from "./body/MatrixBody.vue";
import MatrixHeader from "./header/MatrixHeader.vue";

import Column from "./Column";

interface DataTable {
  columns: any[];
  rows: any[];
}

@Component({
  name: "SmeupMatrix",

  components: {
    MatrixBody,
    MatrixHeader
  }
})
export default class SmeupMatrix extends Vue {
  // props
  @Prop({ default: false })
  private filterable!: boolean;

  @Prop({ default: false })
  private sortable!: boolean;

  @Prop({ default: false })
  private grouping!: boolean;

  @Prop({ required: true })
  private data!: DataTable;

  @Prop({ default: -1 })
  private selRecord!: any;

  // data
  sortByColumn: any = null;

  pagination = {
    enabled: false,
    pageSize: 5,
    currentPage: 1
  };

  scroll = {
    enabled: false,
    scrollMode: 0,
    scrollWidth: 0,
    scrollHeight: 0,
    columnsWidth: [],
    scrollLeft: 0
  };

  columns: Column[] = new Array();
  rows: any[] = new Array();

  // lifecicle hooks
  created() {
    this.initMatrix();
  }

  // computed props
  get filteredRows(): any[] {
    if (this.grouping) {
      // trasformo l'albero in una lista
      const filteredRows: any[] = [];

      this.rows.forEach(r => {
        // add row
        filteredRows.push(r);

        if (r.group && !r.collapsed) {
          this.getGroupRows(r).forEach((_tr: any) => filteredRows.push(_tr));
        }
      });

      return filteredRows;
    }

    // filter row
    const filteredRows = this.filterRows(this.rows);

    // check sorting
    if (this.sortByColumn) {
      return this.sortRows(filteredRows);
    }

    // check pagination
    if (this.pagination.enabled) {
      const start =
        (1 * this.pagination.pageSize - this.pagination.pageSize) *
        this.pagination.currentPage;
      const end = this.pagination.pageSize * this.pagination.currentPage;
      // console.log("start", start);
      // console.log("end", end);
      return filteredRows.splice(start, end);
    }
    return filteredRows;
  }

  // watcher
  @Watch("data")
  onChildChanged() {
    this.initMatrix();
  }

  // methods
  initMatrix() {
    // columns
    if (this.data && this.data.columns) {
      this.columns = this.data.columns.map(col => new Column(col));
    }

    // rows
    if (this.data && this.data.rows) {
      this.rows = this.data.rows.map(r => {
        const row: any = {
          selected: false
        };

        Object.keys(r.fields).forEach(key => {
          row[key] = r.fields[key].smeupObject.codice;
        });

        return row;
      });
    }

    // selfirst / selectRow
    if (
      this.rows &&
      this.selRecord >= 0 &&
      this.selRecord <= this.rows.length
    ) {
      this.rows[this.selRecord].selected = true;
    }
  }

  filterRows(_rows: any[]) {
    return _rows.filter(r => {
      const columnsWithFilter = this.columns.filter(c => {
        if (c.filterValue) {
          return c.filterValue.length > 0;
        }

        return false;
      });
      if (columnsWithFilter.length > 0) {
        // there is atleast a filter
        return (
          columnsWithFilter.filter(c => {
            let rowCell = r[c.code];
            if (rowCell) {
              // checking if filter is an array
              if (Array.isArray(c.filterValue)) {
                for (let i = 0; i < c.filterValue.length; i++) {
                  if (rowCell.includes(c.filterValue[i])) {
                    return true;
                  }
                }
              } else {
                return rowCell.includes(c.filterValue);
              }
            }

            return false;
          }).length == columnsWithFilter.length
        );
      }
      return true;
    });
  }

  onSort(sortColumn: any) {
    this.sortByColumn = sortColumn.code;
  }

  sortRows(_rows: any[]) {
    const filteredRows = _rows.filter((r: any) => !r.group);

    if (filteredRows.length == 0) {
      return _rows;
    }

    return _rows.sort((r1, r2) => {
      const val1 = r1[this.sortByColumn];
      const val2 = r2[this.sortByColumn];
      // check if ascending or descending sort
      const sortMode = this.columns.filter(c => c.code === this.sortByColumn)[0]
        .sortMode;

      const compare = val1.localeCompare(val2);
      return sortMode === "A" ? compare : compare * -1;
    });
  }

  onRowToggled($event: any) {
    let group = null;

    // searching for group
    for (let i = 0; i < this.rows.length; i++) {
      const child = this.rows[i];

      if (child.group) {
        if (child.text === $event.text) {
          group = child;
          break;
        }

        for (let j = 0; j < child.children.length; j++) {
          const child2 = child.children[j];

          if (child2.text === $event.text) {
            group = child2;
            break;
          }
        }

        if (group) {
          break;
        }
      }
    }

    if (group) {
      // group.collapsed = !group.collapsed;
    }
  }

  getGroupRows(groupRow: any): any[] {
    const groupedRows = new Array();

    // adding children
    let _tempRows: any[];

    // filter
    const filteredChildren = this.filterRows(groupRow.children);

    if (this.sortable) {
      _tempRows = this.sortRows(filteredChildren);
    } else {
      _tempRows = filteredChildren;
    }

    _tempRows = filteredChildren;

    _tempRows.forEach((child: any) => {
      groupedRows.push(child);

      if (child.group && !child.collapsed) {
        const childRows = this.getGroupRows(child);
        childRows.forEach((r: any) => groupedRows.push(r));
      }
    });

    return groupedRows;
  }

  onRowSelected($event: any) {
    this.$emit("rowselected", $event);
  }

  onFilterBy(filter: any) {
    // search column
    const cols = this.columns.filter(c => c.code === filter.column.code);

    if (cols.length > 0) {
      cols[0].filterValue = filter.filterValue;
    }

    this.$emit("filterby", filter);
  }
}
</script>

<style lang="scss" scoped>
.MAT {
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .scrollable-header {
    overflow: hidden;
  }

  .scroll-radio {
    margin-top: 1rem;
  }
}
</style>
