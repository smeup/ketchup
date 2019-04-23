<template>
  <div>
    <v-toolbar flat color="primary">
      <v-toolbar-title>{{ getTitle() }}</v-toolbar-title>
    </v-toolbar>
  <v-data-table
    :headers="getData().columns"
    :items="getData().rows"
    :loading="true"
    :custom-sort="customSort"
    :pagination.sync="pagination"
    class="elevation-1"
  >
        <!-- tecnica con chiave la proprietà 'name' della colonna
          :key="header.name"
          @click="changeSort(header.name)"
          -->
    <template slot="headers" slot-scope="props">
      <tr>
          <th 
          v-for="(header, index) in props.headers"
          :key="`${index}`"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(`${index}`)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.title }}
          </th>      
      </tr>
    </template>
      <!-- 
          funziona ma da questo warning a console: [Vuetify] Headers must have a value property that corresponds to a value in the v-model 
    <template slot="headerCell" slot-scope="props">
      <th>{{ props.header.title }}</th>
    </template>
      -->

  <!-- 
    se si vuole usare come chiave cella una proprità delle celle
    :key="mycell.obj.k"
  -->
    <template slot="items" slot-scope="props">
      <tr>
          <td 
          v-for="(mycell,index) in props.item.cells"
          :key="`${index}`"
          >
            {{ mycell.value }}
          </td>      
      </tr>
    </template>
  </v-data-table>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: "MAT",

})
export default class MAT extends Vue {

  @Prop() protected content : any

  protected name = 'MAT';
  protected pagination = {
      sortBy: '',
      descending: false
    };  
  /*
    */

  public getData(): any {
    if (this.content.data) {
      return this.content.data
    }
    return {}
  }  
  
  public getTitle(): String {
    if (this.content.title) {
      return this.content.title
    }
    return ""
  }    

  public customSort(items: any, index: any, isDesc: any): any {
    items.sort((a:any, b:any) => {
        /* Log x test
        console.log('customSort');
        console.log(index);
        if (index) {
          console.log(a.cells[index].value);
        }
        */
        /* tecnica da usare se si usa come chiave la proprietà 'name' 
        let indexCol = this.getData().columns.findIndex((h:any) => h.name === index);
        */
        let indexCol = index;
        if (indexCol) {
          if (!isDesc) {
            return a.cells[indexCol].value < b.cells[indexCol].value ? -1 : 1;
          } else {
            return b.cells[indexCol].value < a.cells[indexCol].value ? -1 : 1;
          }
        }
       /*
        */
        return 0;
    });
    return items;
  }    
  public changeSort (column:any) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    };
}
</script>