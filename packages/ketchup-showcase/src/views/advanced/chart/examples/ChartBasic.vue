<template>
  <div>
    <p>
      This web component is a wrapper of
      <a
        href="https://developers.google.com/chart/"
        target="_blank"
        rel="noopener"
        >Google Charts</a
      >
      library.
    </p>

    <h3>Playground</h3>

    <div class="config-panel">
      <div>
        <label for="chart-type">Chart type</label>
        <select name="chart-type" id="chart-type" @change="onChartTypeChange">
          <option value="Vbar">Vbar</option>
          <option value="Hbar">Hbar</option>
          <option value="Pie">Pie</option>
          <option value="Line">Line</option>
        </select>
      </div>

      <div>
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
        <input id="title-color" type="color" value v-model="titleColor" />
      </div>

      <div>
        <label for="title-size">Title size</label>
        <input id="title-size" type="number" value v-model="titleSize" />
      </div>

      <div>
        <label for="vbar-stacked">Stacked</label>
        <input id="vbar-stacked" type="checkbox" @change="onStackedChange" />
      </div>

      <div>
        <label for="aspect">3D</label>
        <input id="aspect" type="checkbox" @change="onAspectChange" />
      </div>
    </div>

    <div class="group-title">Horizontal axis</div>

    <div class="group">
      <div class="config-panel">
        <div>
          <label for="ticks">Ticks (comma separated)</label>
          <input id="ticks" type="text" @change="onHAxisTicksChange" />
        </div>
        <div>
          <label for="grid-count">Grid count</label>
          <input
            id="grid-count"
            type="number"
            @change="onHAxisGridCountChange"
          />
        </div>
      </div>
    </div>

    <div class="group-title">Vertical axis</div>

    <div class="group">
      <div class="config-panel">
        <div>
          <label for="ticks">Ticks (comma separated)</label>
          <input id="ticks" type="text" @change="onVAxisTicksChange" />
        </div>
        <div>
          <label for="grid-count">Grid count</label>
          <input
            id="grid-count"
            type="number"
            @change="onVAxisGridCountChange"
          />
        </div>
      </div>
    </div>

    <br />

    <kup-chart
      id="playground-component"
      :data.prop="chartData"
      :types.prop="types"
      :axis.prop="'Col1'"
      :series.prop="series"
      :asp.prop="asp"
      :colors.prop="colors"
      :width.prop="width"
      :height.prop="height"
      :legend.prop="legend"
      :stacked.prop="stacked"
      :graphTitle.prop="title"
      :graphTitleColor.prop="titleColor"
      :graphTitleSize.prop="titleSize"
      :showMarks.prop="marks"
      :hAxis.prop="hAxis"
      :vAxis.prop="vAxis"
    />
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';
import { ageWeightData } from '@/mock/chart';

export default {
  data() {
    return {
      baseData,
      ageWeightData,
      chartData: baseData,
      series: [
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
      ],
      asp: '2D',
      types: ['VBar'],
      colors: null,
      width: null,
      height: null,
      legend: true,
      stacked: false,
      title: '',
      titleColor: '#000000',
      titleSize: 12,
      marks: false,
      hAxis: {},
      vAxis: {},
    };
  },
  methods: {
    onChartTypeChange(e) {
      this.types = [e.target.value];
      if ('Line' === e.target.value) {
        this.chartData = ageWeightData;
      } else {
        this.chartData = baseData;
      }
    },

    onStackedChange({ target }) {
      this.stacked = target.checked;
    },

    onAspectChange(e) {
      this.asp = e.target.checked ? '3D' : '';
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

    onHAxisTicksChange({ target }) {
      this.hAxis = {
        ...this.hAxis,
        ticks: target.value.split(',').map((item) => item.trim()),
      };
    },

    onHAxisGridCountChange({ target }) {
      this.hAxis = {
        ...this.hAxis,
        gridlines: {
          count: target.value,
        },
      };
    },

    onVAxisTicksChange({ target }) {
      this.vAxis = {
        ...this.vAxis,
        ticks: target.value.split(',').map((item) => item.trim()),
      };
    },

    onVAxisGridCountChange({ target }) {
      this.vAxis = {
        ...this.vAxis,
        gridlines: {
          count: target.value,
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.config-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.group-title {
  font-weight: bold;
  display: block;
  margin-top: 5px;
}

.group {
  border: 1px solid rgba(0, 0, 0, 0.54);
  border-radius: 4px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 12px;
}
</style>
