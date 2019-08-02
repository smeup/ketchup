<template>
  <div>
    <h1>Ketch.UP Charts</h1>

    <div class="config-panel">
      <div class="field">
        <label for="colors">Custom colors</label>
        <input id="colors" type="checkbox" @change="onCustomColorsChange" />
      </div>

      <div>
        <label for="size">Custom size (400x400)</label>
        <input id="size" type="checkbox" @change="onSizeChange" />
      </div>

      <div>
        <label for="legend">Legend</label>
        <input id="legend" type="checkbox" v-model="legend" />
      </div>

      <div>
        <label for="marks">Show marks</label>
        <input id="marks" type="checkbox" v-model="marks" />
      </div>

      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" />
      </div>

      <div>
        <label for="title-color">Title color</label>
        <input id="title-color" type="color" value="" v-model="titleColor" />
      </div>

      <div>
        <label for="title-size">Title size</label>
        <input id="title-size" type="number" value="" v-model="titleSize" />
      </div>
    </div>
    <hr />

    <h3>Horizontal bars</h3>
    <kup-chart
      id="hbar"
      :data.prop="baseData"
      :axis.prop="'Col1'"
      :series.prop="series"
      :colors.prop="colors"
      :width.prop="width"
      :height.prop="height"
      :legend.prop="legend"
      :graphTitle.prop="title"
      :graphTitleColor.prop="titleColor"
      :graphTitleSize.prop="titleSize"
      :showMarks.prop="marks"
    />
    <hr />

    <h3>Vertical bars</h3>
    <label for="vbar-stacked">Stacked</label>
    <input id="vbar-stacked" type="checkbox" @change="onStackedChange" />
    <kup-chart
      id="vbar"
      :data.prop="baseData"
      :types.prop="['Vbar']"
      :axis.prop="'Col1'"
      :series.prop="series"
      :colors.prop="colors"
      :width.prop="width"
      :height.prop="height"
      :legend.prop="legend"
      :title.prop="title"
      :titleColor.prop="titleColor"
      :titleSize.prop="titleSize"
      :showMarks.prop="marks"
    />
    <hr />

    <h3>Pie</h3>
    <label for="pie-aspect">3D</label>
    <input id="pie-aspect" type="checkbox" @change="onPieAspectChange" />
    <kup-chart
      id="pie"
      :data.prop="baseData"
      :types.prop="['Pie']"
      :axis.prop="'Col1'"
      :series.prop="pieSeries"
      :colors.prop="colors"
      :width.prop="width"
      :height.prop="height"
      :legend.prop="legend"
      :title.prop="title"
      :titleColor.prop="titleColor"
      :titleSize.prop="titleSize"
      :showMarks.prop="marks"
    />

    <h3>Credits</h3>
    <p
      >This web component is a wrapper of
      <a
        href="https://developers.google.com/chart/"
        target="_blank"
        rel="noopener"
        >Google Charts</a
      >
      library.</p
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseData,
      series: ['Col2', 'Col3'],
      pieSeries: ['Col2'],
      colors: null,
      width: null,
      height: null,
      legend: true,
      title: '',
      titleColor: '#000000',
      titleSize: 12,
      marks: false,
    };
  },
  methods: {
    onStackedChange({ target }) {
      this.vbarConfig = {
        ...this.vbarConfig,
        stacked: target.checked,
      };
    },

    onPieAspectChange(e) {
      this.pieConfig = {
        ...this.pieConfig,
        asp: e.target.checked ? '3D' : '',
      };
    },

    onCustomColorsChange({ target }) {
      if (target.checked) {
        this.colors = ['#ccc', '#333', '#666'];
      } else {
        this.colors = null;
      }
    },

    onSizeChange({ target }) {
      if (target.checked) {
        this.width = 400;
        this.height = 400;
      } else {
        this.width = null;
        this.height = null;
      }
    },
  },
};

const baseData = {
  columns: [
    {
      name: 'Col1',
      title: 'Person',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'Value',
      size: '10',
    },
    {
      name: 'Col3',
      title: 'Value2',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'CASFRA',
          },
          value: 'CASFRA',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'DELGIO',
          },
          value: 'DELGIO',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
            k: '6',
          },
          value: '6',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'PARFRA',
          },
          value: 'PARFRA',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
      },
    },
  ],
};

const baseConfig = {
  types: ['Hbar'],
  axis: 'Col1',
  series: ['Col2', 'Col3'],
};
</script>

<style scoped lang="scss">
.config-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>