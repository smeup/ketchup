<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word"
              >datasetOperations.distinct(dataset, columns?, valuesColumn?):
              DataTable</span
            ><br />
            Creates a new dataset with an amount of cells equal to a distinct
            calculation applied to the given columns.<br />The original value of
            cells will be stored in the title property of the new cells.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>columns (string[])</strong> - Column names to manage. When
            missing, defaults to all columns.<br />
            - <strong>valuesColumn (Column)</strong> - When present, this column
            will be included in the final dataset containing the original values
            of the cells.<br /><br /> </p
          ><div class="demo-container">
            <kup-button
              id="distinct-button"
              label="Toggle"
              styling="outlined"
              @kup-button-click="toggleDistinct"
            ></kup-button>
            <div class="kup-container">
              <kup-data-table id="distinct-table"></kup-data-table>
            </div> </div></div
        ><div class="accordion-slot" slot="2">
          <p>
            <span class="code-word"
              >datasetOperations.new(dataset, newColumns): DataTable</span
            ><br />
            Creates a new dataset from the input one.<br />
            The new columns are to be specified in the columns argument along
            with their creation criteria.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>newColumns (KupDataNewColumn[])</strong> - Array
            containing the specifics of the new columns to be created.<br /><br /> </p
          ><div class="demo-container">
            <kup-button
              id="new-button"
              label="Toggle"
              styling="outlined"
              @kup-button-click="toggleNew"
            ></kup-button>
            <div class="kup-container">
              <kup-data-table id="new-table"></kup-data-table>
            </div> </div></div
        ><div class="accordion-slot" slot="3">
          <p>
            <span class="code-word"
              >datasetOperations.rangedDistinct(dataset, rangeColumns,
              resultingColumn, valuesColumn?): DataTable</span
            ><br />
            Performs a distinct/count after previously grouping columns by
            ranges.<br />This method is, essentially, a combination of other
            steps such as <span class="code-word">new</span> and
            <span class="code-word">distinct</span>.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>rangeColumns (KupDataNewColumn[])</strong> - A list of
            columns coupled with their criteria for creation. These are used to
            define ranges.<br />
            - <strong>resultingColumn (Column)</strong> - The resulting
            column.<br />
            - <strong>valuesColumn (Column)</strong> - When present, this column
            will be included in the final dataset containing the original values
            of the cells.<br /><br /> </p
          ><div class="demo-container">
            <kup-button
              id="ranged-distinct-button"
              label="Toggle"
              styling="outlined"
              @kup-button-click="toggleRangedDistinct"
            ></kup-button>
            <div class="kup-container">
              <kup-data-table id="ranged-distinct-table"></kup-data-table>
            </div> </div></div
        ><div class="accordion-slot" slot="4">
          <p>
            <span class="code-word"
              >datasetOperations.transpose(dataset, headerColumn?):
              DataTable</span
            ><br />
            Creates a new dataset with transposed columns and rows.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>headerColumn (string)</strong> - When specified, it will
            be the column used as header. When missing, the header will be a
            series of progressive numbers.<br /><br /> </p
          ><div class="demo-container">
            <kup-button
              id="transpose-button"
              label="Toggle"
              styling="outlined"
              @kup-button-click="toggleTranspose"
            ></kup-button>
            <div class="kup-container">
              <kup-data-table id="transpose-table"></kup-data-table>
            </div> </div></div
        ><div class="accordion-slot" slot="5">
          <p>
            <span class="code-word"
              >datasetOperations.cell.find(dataset, filters): Cell[]</span
            ><br />
            Finds all the cells matching the filters criteria in the input
            dataset.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>filters (KupDataFindCellFilters)</strong> - Filters of the
            research.<br /><br />Try typing a value in the text field below, the
            cells matching it will briefly flash (keep in mind dates' values are
            in ISO format: 1900-12-12)!<br /><br /> </p
          ><div class="demo-container">
            <kup-text-field
              id="cell-find-text-field"
              label="Value"
              styling="outlined"
              @kup-textfield-input="(e) => toggleCellFind(e)"
            ></kup-text-field>
            <div class="kup-container">
              <kup-data-table id="cell-find-table"></kup-data-table>
            </div> </div></div
        ><div class="accordion-slot" slot="6">
          <p>
            <span class="code-word"
              >datasetOperations.cell.getValue(dataset, columns?):
              string[]</span
            ><br />
            Returns all the cells values of the specified columns.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>columns (string[])</strong> - Columns included in the
            search. When missing, searches all columns.<br /><br /> </p></div
        ><div class="accordion-slot" slot="7">
          <p>
            <span class="code-word"
              >datasetOperations.cell.replace(dataset, cell, columns?):
              string[]</span
            ><br />
            Overrides the given cell attributes for the specified columns. If no
            columns are provided, the value will be applied to every column of
            the dataset.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>cell (Cell)</strong> - New cell.<br />-
            <strong>columns (string[])</strong> - Columns to be handled.<br /><br /> </p></div
        ><div class="accordion-slot" slot="8">
          <p>
            <span class="code-word"
              >datasetOperations.columns.find(dataset, filters): Column[]</span
            ><br />
            Finds the columns matching the criteria specified in the filters
            argument.<br /><br />
            - <strong>dataset (DataTable | Column[])</strong> - Input dataset or
            array of columns.<br />
            - <strong>filters (Partial&lt;Column&gt;)</strong> - Column
            interface containing the filters to match.<br /><br /> </p></div
        ><div class="accordion-slot" slot="9">
          <p>
            <span class="code-word"
              >datasetOperations.columns.hide(dataset, columns2hide):
              Column[]</span
            ><br />
            Sets the given columns of the input dataset to be hidden.<br /><br />
            - <strong>dataset (DataTable | Column[])</strong> - Input dataset or
            array of columns.<br />
            - <strong>columns2hide (string[])</strong> - Names of columns to
            hide.<br /><br /> </p></div
        ><div class="accordion-slot" slot="10">
          <p>
            <span class="code-word"
              >datasetOperations.columns.merge(dataset, columns2merge,
              newColumn): Column</span
            ><br />
            Takes the columns to merge and creates a new column with their
            cells.
            <br />The merged columns will then be removed.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>columns2merge (string[])</strong> - Names of columns to
            merge.<br />- <strong>newColumn (Column)</strong> - Column
            created.<br /><br /> </p></div
        ><div class="accordion-slot" slot="11">
          <p>
            <span class="code-word"
              >datasetOperations.columns.new(dataset, operation, columns?):
              Column</span
            ><br />
            This method is used to create a new column from a mathematical
            formula.<br /><br />
            - <strong>dataset (DataTable)</strong> - Input dataset.<br />
            - <strong>operation (string)</strong> - Mathematical operation to
            apply (i.e.: "sum", "average", ([COL1] - [COL2]) * 100 / [COL3]).<br />-
            <strong>columns (string[])</strong> - Column names used for the
            mathematical operation. When missing, they will be extracted from
            the formula.<br /><br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import {
  Column,
  DataTable,
} from '@sme.up/ketchup/dist/types/components/kup-data-table/kup-data-table-declarations';
import { kupDataDataset } from '../../../../mock/dataTable';
import { KupDataNewColumn } from '@sme.up/ketchup/dist/types/managers/kup-data/kup-data-declarations';
import { KupTextFieldEventPayload } from '@sme.up/ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';

var accordion: HTMLKupAccordionElement = null;
var cellFindTable: HTMLKupDataTableElement = null;
var distinctButton: HTMLKupButtonElement = null;
var distinctTable: HTMLKupDataTableElement = null;
var newButton: HTMLKupButtonElement = null;
var newTable: HTMLKupDataTableElement = null;
var rangedDistinctButton: HTMLKupButtonElement = null;
var rangedDistinctTable: HTMLKupDataTableElement = null;
var transposeButton: HTMLKupButtonElement = null;
var transposeTable: HTMLKupDataTableElement = null;

const dom: KupDom = document.documentElement as KupDom;
const dataset: DataTable = { ...kupDataDataset };
const newColumn: KupDataNewColumn[] = [
  {
    column: {
      name: '2039',
      title: 'Lucky numbers 20-39',
    },
    criteria: {
      columns: ['NUMBER'],
      range: {
        min: 20,
        max: 39,
      },
    },
  },
  {
    column: {
      name: '4059',
      title: 'Lucky numbers 40-59',
    },
    criteria: {
      columns: ['NUMBER'],
      range: {
        min: 40,
        max: 59,
      },
    },
  },
  {
    column: {
      name: '6099',
      title: 'Lucky numbers 60-99',
    },
    criteria: {
      columns: ['NUMBER'],
      range: {
        min: 60,
        max: 99,
      },
    },
  },
];
const resultColumn: Column = {
  name: '2099',
  title: 'Lucky numbers 20-99',
};

export default {
  name: 'KupDataFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      // Cell find
      cellFindTable = document.querySelector('#cell-find-table');
      cellFindTable.autoFillMissingCells = true;
      cellFindTable.data = { ...dataset };
      cellFindTable.rowsPerPage = 999;
      // Distinct
      distinctButton = document.querySelector('#distinct-button');
      distinctButton.icon = 'play_arrow';
      distinctTable = document.querySelector('#distinct-table');
      distinctTable.autoFillMissingCells = true;
      distinctTable.data = { ...dataset };
      distinctTable.rowsPerPage = 999;
      // New
      newButton = document.querySelector('#new-button');
      newButton.icon = 'play_arrow';
      newTable = document.querySelector('#new-table');
      newTable.autoFillMissingCells = true;
      newTable.data = { ...dataset };
      newTable.rowsPerPage = 999;
      // Ranged distinct
      rangedDistinctButton = document.querySelector('#ranged-distinct-button');
      rangedDistinctButton.icon = 'play_arrow';
      rangedDistinctTable = document.querySelector('#ranged-distinct-table');
      rangedDistinctTable.autoFillMissingCells = true;
      rangedDistinctTable.data = { ...dataset };
      rangedDistinctTable.rowsPerPage = 999;
      // Transpose
      transposeButton = document.querySelector('#transpose-button');
      transposeButton.icon = 'play_arrow';
      transposeTable = document.querySelector('#transpose-table');
      transposeTable.autoFillMissingCells = true;
      transposeTable.data = { ...dataset };
      transposeTable.rowsPerPage = 999;
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      accordion.data = {
        columns: [
          {
            name: '1',
            title: 'datasetOperations.distinct',
          },
          {
            name: '2',
            title: 'datasetOperations.new',
          },
          {
            name: '3',
            title: 'datasetOperations.rangedDistinct',
          },
          {
            name: '4',
            title: 'datasetOperations.transpose',
          },
          {
            name: '5',
            title: 'datasetOperations.cell.find',
          },
          {
            name: '6',
            title: 'datasetOperations.cell.getValue',
          },
          {
            name: '7',
            title: 'datasetOperations.cell.replace',
          },
          {
            name: '8',
            title: 'datasetOperations.columns.find',
          },
          {
            name: '9',
            title: 'datasetOperations.columns.hide',
          },
          {
            name: '10',
            title: 'datasetOperations.columns.merge',
          },
          {
            name: '11',
            title: 'datasetOperations.columns.new',
          },
        ],
      };
      accordion.expandAll();
      this.toggleDistinct();
      this.toggleNew();
      this.toggleRangedDistinct();
      this.toggleTranspose();
    },
    /**
     * Toggles the cell find API.
     */
    toggleCellFind(e: CustomEvent<KupTextFieldEventPayload>) {
      const cells = dom.ketchup.data.datasetOperations.cell.find(
        cellFindTable.data,
        {
          value: e.detail.value,
        }
      );
      for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        cell.style = {
          backgroundColor: 'var(--kup-primary-color)',
          color: 'var(--kup-text-on-primary-color)',
          transition: 'color 500ms, background-color 500ms',
        };
        setTimeout(() => {
          cell.style = {
            transition: 'color 500ms, background-color 500ms',
          };
          cellFindTable.refresh();
        }, 500);
      }
      cellFindTable.refresh();
    },
    /**
     * Toggles the distinct API.
     */
    toggleDistinct() {
      if (distinctButton.classList.contains('toggled')) {
        distinctButton.classList.remove('toggled');
        distinctTable.data = { ...dataset };
        distinctButton.icon = 'play_arrow';
      } else {
        distinctButton.classList.add('toggled');
        distinctTable.data = dom.ketchup.data.datasetOperations.distinct(
          distinctTable.data
        );
        distinctButton.icon = 'undo';
      }
    },
    /**
     * Toggles the new API.
     */
    toggleNew() {
      if (newButton.classList.contains('toggled')) {
        newButton.classList.remove('toggled');
        newTable.data = { ...dataset };
        newButton.icon = 'play_arrow';
      } else {
        newButton.classList.add('toggled');
        newTable.data = dom.ketchup.data.datasetOperations.new(
          newTable.data,
          newColumn
        );
        newButton.icon = 'undo';
      }
    },
    /**
     * Toggles the transpose API.
     */
    toggleRangedDistinct() {
      if (rangedDistinctButton.classList.contains('toggled')) {
        rangedDistinctButton.classList.remove('toggled');
        rangedDistinctTable.data = { ...dataset };
        rangedDistinctButton.icon = 'play_arrow';
      } else {
        rangedDistinctButton.classList.add('toggled');
        rangedDistinctTable.data =
          // eslint-disable-next-line prettier/prettier
          dom.ketchup.data.datasetOperations.rangedDistinct(
            rangedDistinctTable.data,
            newColumn,
            resultColumn
          );
        rangedDistinctButton.icon = 'undo';
      }
    },
    /**
     * Toggles the new API.
     */
    toggleTranspose() {
      if (transposeButton.classList.contains('toggled')) {
        transposeButton.classList.remove('toggled');
        transposeTable.data = { ...dataset };
        transposeButton.icon = 'play_arrow';
      } else {
        transposeButton.classList.add('toggled');
        transposeTable.data = dom.ketchup.data.datasetOperations.transpose(
          transposeTable.data
        );
        transposeButton.icon = 'undo';
      }
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
  },
};
</script>

<style lang="scss" scoped>
kup-text-field {
  margin: auto;
  width: 200px;
}
</style>