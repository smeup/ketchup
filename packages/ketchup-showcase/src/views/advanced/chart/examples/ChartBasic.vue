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
    <div id="sample-wrapper" class="detached">
      <div id="sample-modal"></div>
      <div id="sample-specs">
        <wup-tab-bar
          @kupTabBarClick="tabSelection"
          :items.prop="items"
        ></wup-tab-bar>
        <div id="sample-specs-container">
          <table class="instruction-table sample-section">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
                <th>Try it!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">asp</span>
                </td>
                <td>Sets the chart to a 2D or 3D aspect.</td>
                <td class="prevent-cr">
                  <span class="code-word">ChartAspect</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">2D</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="asp"
                    initialvalue="2D"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">axis</span>
                </td>
                <td>Sets the axis of the chart.</td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="axis"
                    initialvalue="Col1"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">colors</span>
                </td>
                <td>Colors of the chart.</td>
                <td class="prevent-cr">
                  <span class="code-word">string[]</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">[]</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    trailingicon
                    icon="add"
                    id="colors"
                    @kupTextFieldChange="updateDemoFieldArray"
                    @kupTextFieldIconClick="updateDemoFieldArray"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">data</span>
                </td>
                <td>The actual data of the table.</td>
                <td class="prevent-cr">
                  <span class="code-word">TableData</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td>Use the JSON tab to view/change data.</td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">graphTitle</span>
                </td>
                <td>Title of the graph.</td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="graph-title"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">graphTitleColor</span>
                </td>
                <td>Title of the graph's color.</td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="graph-title-color"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">graphTitleSize</span>
                </td>
                <td>Size of title of the graph (in pixels).</td>
                <td class="prevent-cr">
                  <span class="code-word">number</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="graph-title-size"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">hAxis</span>
                </td>
                <td>?</td>
                <td class="prevent-cr">
                  <span class="code-word">ChartAxis</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td>?</td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">height</span>
                </td>
                <td>Height of the graph (in pixels).</td>
                <td class="prevent-cr">
                  <span class="code-word">number</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="height"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">legend</span>
                </td>
                <td>The chart's legend</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">true</span>
                </td>
                <td class="switch-cell">
                  <wup-switch
                    checked
                    id="legend"
                    @kupSwitchChange="updateDemoSwitch"
                  ></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">series</span>
                </td>
                <td>
                  The data series to be displayed. They must be of the same
                  type.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">string[]</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-button
                    @kupButtonClick="updateDemoFieldArrayRemove"
                    data-id="series"
                    id="series-0"
                    style="--kup-display-mode: inline-block;"
                    flat
                    icon="remove"
                    label="Col2"
                  ></wup-button>
                  <wup-button
                    @kupButtonClick="updateDemoFieldArrayRemove"
                    data-id="series"
                    id="series-1"
                    style="--kup-display-mode: inline-block;"
                    flat
                    icon="remove"
                    label="Col3"
                  ></wup-button>
                  <wup-text-field
                    fullwidth
                    trailingicon
                    icon="add"
                    id="series"
                    @kupTextFieldChange="updateDemoFieldArray"
                    @kupTextFieldIconClick="updateDemoFieldArray"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">showMarks</span>
                </td>
                <td>Displays the numerical values.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch
                    id="show-marks"
                    @kupSwitchChange="updateDemoSwitch"
                  ></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">stacked</span>
                </td>
                <td>
                  Displays the data columns of an object on top of each other.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch
                    id="stacked"
                    @kupSwitchChange="updateDemoSwitch"
                  ></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">types</span>
                </td>
                <td>
                  The type of the chart. Supported formats: Area, Bubble, Cal,
                  Candlestick, Combo, Geo, Hbar, Line, Ohlc, Pie, Sankey,
                  Scatter, Unk, Vbar.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">ChartType[]</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">[ChartType.Hbar]</span>
                </td>
                <td class="text-cell">
                  <wup-button
                    @kupButtonClick="updateDemoFieldArrayRemove"
                    data-id="types"
                    id="types-0"
                    style="--kup-display-mode: inline-block;"
                    flat
                    icon="remove"
                    label="VBar"
                  ></wup-button>
                  <wup-text-field
                    fullwidth
                    trailingicon
                    icon="add"
                    id="types"
                    @kupTextFieldChange="updateDemoFieldArray"
                    @kupTextFieldIconClick="updateDemoFieldArray"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">vAxis</span>
                </td>
                <td>?</td>
                <td class="prevent-cr">
                  <span class="code-word">ChartAxis</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td>?</td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">version</span>
                </td>
                <td>Google Charts version to load.</td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">'45.2'</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="version"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">width</span>
                </td>
                <td>Width of the graph (in pixels).</td>
                <td class="prevent-cr">
                  <span class="code-word">number</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">undefined</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    fullwidth
                    id="width"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style="display: none;"
            class="instruction-table sample-section"
          >
            <thead>
              <tr>
                <th>Event</th>
                <th>Type</th>
                <th>Test it by interacting with the demo component!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">kupChartClicked</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">click</span>
                </td>
                <td>
                  <div id="onclick" class="code-word"></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="sample-section" style="display: none;">
            <div class="code-word sample-html"></div>
            <wup-button
              @kupButtonClick="copyHtml"
              id="copy-html"
              icon="file_copy"
              title="Copy HTML markup"
            ></wup-button>
          </div>
          <div class="sample-section" style="display: none;">
            <textarea id="json-textarea"></textarea>
          </div>
        </div>
      </div>
      <div id="sample-comp">
        <div id="sample-comp-wrapper">
          <kup-chart
            id="demo-component"
            legend
            :data.prop="chartData"
            :asp.prop="['2D']"
            :types.prop="['VBar']"
            :axis.prop="'Col1'"
            :series.prop="['Col2', 'Col3']"
          />
        </div>
        <div id="split-container">
          <wup-button
            @kupButtonClick="menuTrigger"
            id="menu-trigger"
            toggable
            style="--kup-main-color: var(--kup-text-on-main-color);"
            icon="last_page"
            iconoff="menu_open"
            title="Open/close side panel"
          ></wup-button>
          <wup-button
            @kupButtonClick="swapView"
            id="view-swapper"
            toggable
            style="--kup-main-color: var(--kup-text-on-main-color);"
            icon="fullscreen_exit"
            iconoff="fullscreen"
            title="Toggle/disable full screen"
          ></wup-button>
          <wup-button
            @kupButtonClick="splitView"
            id="view-splitter"
            toggable
            style="--kup-main-color: var(--kup-text-on-main-color); width: fit-content; margin: auto;"
            icon="view_agenda"
            iconoff="flip"
            title="Split/detach view"
          ></wup-button>
        </div>
      </div>
    </div>

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
      @kupChartClicked="logClick"
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
      items: [
        {
          text: 'Props',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
        {
          text: 'JSON',
          icon: '',
          status: '',
        },
      ],
      baseData,
      ageWeightData,
      chartData: baseData,
      series: ['Col2', 'Col3'],
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
    copyHtml(e) {
      let text = document.querySelector('.code-word.sample-html').innerText;
      navigator.clipboard.writeText(text);
    },

    runJSON() {
      let demoComponent = document.querySelector('#demo-component');
      var jsonTextarea = document.querySelector('#json-textarea');
      let jsonifiedData = JSON.parse(jsonTextarea.value);
      demoComponent.data = jsonifiedData;
    },

    swapView(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-wrapper').classList.add('full');
      } else {
        document.querySelector('#sample-wrapper').classList.remove('full');
      }
    },

    splitView(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-wrapper').classList.remove('detached');
      } else {
        document.querySelector('#sample-wrapper').classList.add('detached');
      }
    },

    menuTrigger(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-comp').classList.add('full');
        document.querySelector('#sample-specs').classList.add('closed');
      } else {
        document.querySelector('#sample-comp').classList.remove('full');
        document.querySelector('#sample-specs').classList.remove('closed');
      }
    },

    logClick(e) {
      var d = new Date();
      document.querySelector('#onclick').innerText =
        'Clicked! Event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },

    updateDemoSwitch(e) {
      let demoComponent = document.querySelector('#demo-component');
      if (e.detail.value === 'on') {
        demoComponent.setAttribute(e.target.id, '');
      } else {
        demoComponent.removeAttribute(e.target.id);
      }
    },

    updateDemoField(e) {
      let demoComponent = document.querySelector('#demo-component');
      if (e.detail.value !== '') {
        demoComponent.setAttribute(e.target.id, e.detail.value);
      } else {
        demoComponent.removeAttribute(e.target.id);
      }
    },

    updateDemoFieldArray(e) {
      if (e.detail.value === undefined) {
        return;
      }
      let demoComponent = document.querySelector('#demo-component');
      let propName = e.target.id;
      let arrayList = demoComponent[propName];
      let newEntryId = '' + e.target.id + '-' + arrayList.length;
      let newEntry =
        '<wup-button data-id="' +
        e.target.id +
        '" id="' +
        newEntryId +
        '" style="--kup-display-mode: inline-block;" flat icon="remove" label="' +
        e.detail.value +
        '"></wup-button>';
      arrayList = [...arrayList, e.detail.value];
      demoComponent[propName] = arrayList;
      e.target.removeAttribute('fullheight');
      e.target.insertAdjacentHTML('beforebegin', newEntry);
      e.target.initialvalue = '';
      e.target.value = '';
      document
        .querySelector('#' + newEntryId)
        .addEventListener('kupButtonClick', (e) => {
          this.updateDemoFieldArrayRemove(e);
        });
    },

    updateDemoFieldArrayRemove(e) {
      let demoComponent = document.querySelector('#demo-component');
      let propName = e.target.getAttribute('data-id');
      let labelName = e.target.getAttribute('label');
      let arrayList = demoComponent[propName];
      const index = arrayList.indexOf(labelName);
      if (index > -1) {
        arrayList.splice(index, 1);
      }
      arrayList = [...arrayList];
      demoComponent[propName] = arrayList;
      e.target.remove();
    },

    logInput(e) {
      var d = new Date();
      document.querySelector('#oninput').innerText =
        'Input! Event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },

    tabSelection(e) {
      let tabCollection = document.querySelectorAll('.sample-section');
      let demoComponent = document.querySelector('#demo-component').outerHTML;
      let tabHTML = tabCollection[2];
      let tabJSON = tabCollection[3];
      for (let i = 0; i < tabCollection.length; i++) {
        if (i === e.detail.index) {
          tabCollection[i].setAttribute('style', '');
          if (tabHTML === tabCollection[i]) {
            tabCollection[i].querySelector(
              '.code-word'
            ).innerText = demoComponent;
            tabCollection[i].querySelector(
              '.code-word'
            ).innerText = tabCollection[i]
              .querySelector('.code-word')
              .innerText.replace('class="hydrated"', '');
            tabCollection[i].querySelector(
              '.code-word'
            ).innerText = tabCollection[i]
              .querySelector('.code-word')
              .innerText.replace(/(data-v\S+)/gi, '');
            tabCollection[i].querySelector(
              '.code-word'
            ).innerText = tabCollection[i]
              .querySelector('.code-word')
              .innerText.replace(/=""/g, '');
          } else if (tabJSON === tabCollection[i]) {
            let jsonData = document.querySelector('#demo-component').data;
            let stringifiedJSON = JSON.stringify(jsonData, null, 2);
            tabCollection[i].querySelector(
              '#json-textarea'
            ).value = stringifiedJSON;
            let jsonTextarea = document.querySelector('#json-textarea');
            let codemirrorTextarea = document.querySelector('.CodeMirror');
            if (!codemirrorTextarea) {
              CodeMirror.fromTextArea(jsonTextarea, {
                mode: { name: 'javascript', json: true },
                lineNumbers: true,
                lineWrapping: true,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
              }).on('change', function(cm) {
                cm.save();
                let demoComponent = document.querySelector('#demo-component');
                let jsonifiedData = JSON.parse(jsonTextarea.value);
                demoComponent.data = jsonifiedData;
              });
            }
          }
        } else {
          tabCollection[i].setAttribute('style', 'display: none;');
        }
      }
    },

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
