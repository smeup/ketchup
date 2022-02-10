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

var accordion: HTMLKupAccordionElement = null;
var distinctButton: HTMLKupButtonElement = null;
var distinctTable: HTMLKupDataTableElement = null;
var newButton: HTMLKupButtonElement = null;
var newTable: HTMLKupDataTableElement = null;
var rangedDistinctButton: HTMLKupButtonElement = null;
var rangedDistinctTable: HTMLKupDataTableElement = null;

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
        ],
      };
      accordion.expandAll();
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
     * Toggles the ranged distinct API.
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
