<template>
  <div>
    <h2>Data Table column size</h2>
    <p>
      In the following examples, to check the different behaviors of the tables
      when the size of the screen changes, it can be useful to resize the
      browser window.
      <br />To do so in a more comfortable way, you can open your browser
      inspection devtools by pressing F12 or right clicking anywhere on an
      element and click "Inspect" <br />If you're using Apple Safari browser,
      you will have to enable the debug mode in order to do so (just Google it).
    </p>

    <h3>Long text with no configuration</h3>
    <kup-data-table :data.prop="longTextData" />

    <h3>Long text, some columns have specified length</h3>
    <p
      >Columns with a custom size are
      {{ columnNamesToString(someColumnsWidth, longTextData) }}</p
    >
    <h4>
      forceOneLine =
      <code class="inline">false</code>
    </h4>
    <kup-data-table
      :columnsWidth.prop="someColumnsWidth"
      :data.prop="longTextData"
      :forceOneLine.prop="false"
    />
    <h4>
      forceOneLine =
      <code class="inline">true</code>
    </h4>
    <kup-data-table
      :columnsWidth.prop="someColumnsWidth"
      :data.prop="longTextData"
      :forceOneLine.prop="true"
    />

    <h3>All visible columns have a custom size</h3>
    <p>
      When all visible columns have a custom size, the table width gets set to
      the sum of the columns.
      <br />The table itself gains a margin auto attribute to eventually center
      it.
    </p>

    <h4>
      forceOneLine =
      <code class="inline">false</code>
    </h4>
    <kup-data-table
      :columnsWidth.prop="allColumnsWidth"
      :data.prop="longTextData"
      :forceOneLine.prop="false"
    />
    <kup-data-table
      :columnsWidth.prop="progressbarColsize"
      :data.prop="progressbarData"
      :forceOneLine.prop="false"
    />

    <h4>
      forceOneLine =
      <code class="inline">true</code>
    </h4>
    <kup-data-table
      :columnsWidth.prop="allColumnsWidth"
      :data.prop="longTextData"
      :forceOneLine.prop="true"
    />
    <kup-data-table
      :columnsWidth.prop="progressbarColsize"
      :data.prop="progressbarData"
      :forceOneLine.prop="true"
    />
  </div>
</template>

<script>
import { pgbData } from '@/mock/box';
import { LongTextDataFactory } from 'ketchup/tests/e2e/data-table/mocked-data';

export default {
  name: 'DTColumnsWidth',
  data() {
    return {
      longTextData: LongTextDataFactory(5),
      allColumnsWidth: [
        {
          column: 'FLD1',
          width: '80',
        },
        {
          column: 'FLD2',
          width: '200',
        },
        {
          column: 'FLD3',
          width: '40',
        },
        {
          column: 'FLD4',
          width: '150',
        },
        {
          column: 'FLD5',
          width: '300',
        },
      ],
      someColumnsWidth: [
        {
          column: 'FLD1',
          width: '80',
        },
        {
          column: 'FLD3',
          width: '40',
        },
        {
          column: 'FLD4',
          width: '150',
        },
      ],
      progressbarColsize: [
        {
          column: 'FLD1',
          width: '50',
        },
        {
          column: 'FLD2',
          width: '50',
        },
        {
          column: 'FLD3',
          width: '50',
        },
        {
          column: 'FLD4',
          width: '50',
        },
      ],
      progressbarData: pgbData,
    };
  },
  methods: {
    columnNamesToString(columnsSizes, { columns }) {
      return columnsSizes.reduce((columnsNameToString, col) => {
        let colName = '';
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].name === col.column) {
            colName = columns[i].title;
          }
        }
        return (columnsNameToString += colName ? colName + ',' : '');
      }, '');
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  margin-top: 20px;
}
</style>
