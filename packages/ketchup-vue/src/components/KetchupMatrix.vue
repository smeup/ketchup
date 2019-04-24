<template>
  <div>
    <v-data-table
      :headers="contentData.columns"
      :items="contentData.rows"
      :custom-sort="customSort"
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th
            v-for="(header, index) in props.headers"
            :key="index"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(index)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.title }}
          </th>
        </tr>
      </template>

      <template slot="items" slot-scope="props">
        <tr>
          <td
            v-for="(header,index) in contentData.columns"
            :key="index"
          >{{ props.item.cells[header.name].value }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'KetchupMatrix',
})
export default class KetchupMatrix extends Vue {
    @Prop() protected content: any;

    protected name = 'KetchupMatrix';

    protected pagination = {
        sortBy: '',
        descending: false,
        rowsPerPage: 1000,
    };

    get contentData() {
        if (this.content && this.content.data) {
            return this.content.data;
        }

        return {
            columns: [],
            rows: [],
        };
    }

    public customSort(items: any, index: number, isDesc: boolean): any {
        if (!this.contentData.columns) {
            return items;
        }

        // getting column
        const column = this.contentData.columns[index];

        if (!column) {
            return items;
        }

        items.sort((a: any, b: any) => {
            if (!isDesc) {
                return a.cells[column.name].value < b.cells[column.name].value
                    ? -1
                    : 1;
            } else {
                return b.cells[column.name].value < a.cells[column.name].value
                    ? -1
                    : 1;
            }

            return 0;
        });
        return items;
    }

    public changeSort(column: any) {
        if (this.pagination.sortBy === column) {
            this.pagination.descending = !this.pagination.descending;
        } else {
            this.pagination.sortBy = column;
            this.pagination.descending = false;
        }
    }
}
</script>
