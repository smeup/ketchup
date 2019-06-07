<template>
  <div>
    <h1>Ketchup Charts</h1>

    <div class="config-panel">
      <div class="field">
        <label for="colors">Custom colors</label>
        <input
          id="colors"
          type="checkbox"
          @change="onCustomColorsChange"/>
      </div>

      <div>
        <label for="size">Custom size (400x400)</label>
        <input
          id="size"
          type="checkbox"
          @change="onSizeChange"/>
      </div>

      <div>
        <label for="legend">Legend</label>
        <input
          id="legend"
          type="checkbox"
          checked
          @change="onLegendChange"/>
      </div>

      <div>
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          value=""
          @change="onTitleChange"/>
      </div>

      <div>
        <label for="title-color">Title color</label>
        <input
          id="title-color"
          type="color"
          value=""
          @change="onTitleColorChange"/>
      </div>

      <div>
        <label for="title-size">Title size</label>
        <input
          id="title-size"
          type="number"
          value=""
          @change="onTitleSizeChange"/>
      </div>
    </div>
    <hr />

    <h3>Horizontal bars</h3>
    <kup-chart
      id="hbar"
      :config.prop="baseConfig"
      :data.prop="baseData"/>
    <hr />

    <h3>Vertical bars</h3>
    <label for="vbar-stacked">Stacked</label>
    <input
      id="vbar-stacked"
      type="checkbox"
      @change="onStackedChange"/>
    <kup-chart
      id="vbar"
      :config.prop="vbarConfig"
      :data.prop="baseData"
      />
    <hr />

    <h3>Pie</h3>
    <label for="pie-aspect">3D</label>
    <input
      id="pie-aspect"
      type="checkbox"
      @change="onPieAspectChange"/>
    <kup-chart
      id="pie"
      :config.prop="pieConfig"
      :data.prop="baseData"/>

  </div>
</template>

<script>
  export default {
    name: "KupCharts",
    data() {
      return {
        baseConfig,
        baseData,
        vbarConfig: {
          ...baseConfig,
          type: 'Vbar'
        },
        pieConfig: {
          ...baseConfig,
          series: ['Col2'],
          type: 'Pie',
        },
        configData: [
          'baseConfig',
          'vbarConfig',
          'pieConfig'
        ]
      };
    },
    methods: {
      updateConfigOnAllCharts(field, type = 'set', value) {
        this.configData.forEach(config => {
          if (type === 'set') {
            this[config] = {
              ...this[config],
              [field]: value
            }
          } else {
            let curr = {...this[config]};
            delete curr[field];
            this[config] = curr;
          }
        });
      },
      onStackedChange({ target }) {
        this.vbarConfig = {
          ...this.vbarConfig,
          stacked: target.checked
        };
      },
      onPieAspectChange(e) {
        this.pieConfig = {
          ...this.pieConfig,
          asp: e.target.checked ? '3D' : '',
        };
      },
      onCustomColorsChange({ target }) {
        this.updateConfigOnAllCharts('colors', target.checked ? 'set' : 'delete', ['#ccc', '#333', '#666']);
      },
      onSizeChange({ target }) {
        this.updateConfigOnAllCharts('width', target.checked ? 'set' : 'delete', 400);
        this.updateConfigOnAllCharts('height', target.checked ? 'set' : 'delete', 400);
      },
      onLegendChange({ target }) {
        this.updateConfigOnAllCharts('leg', 'set', target.checked);
      },
      onTitleChange({ target }) {
        this.updateConfigOnAllCharts('title', 'set', target.value);
      },
      onTitleColorChange({ target }) {
        this.updateConfigOnAllCharts('titleColor', 'set', target.value);
      },
      onTitleSizeChange({ target }) {
        if (target.value) {
          this.updateConfigOnAllCharts('titleSize', 'set', target.value);
        }
      },

    }
  }

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
    type: 'Hbar',
    axe: 'Col1',
    series: ['Col2', 'Col3'],
  };
</script>

<style scoped lang="scss">
  .config-panel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>