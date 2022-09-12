<template>
  <div id="sample-wrapper" class="detached">
    <div id="sample-modal"></div>
    <div id="sample-specs">
      <kup-tab-bar
        id="demo-tab-bar"
        @kup-tabbar-click="tabSelection"
      ></kup-tab-bar>
      <div id="sample-specs-container">
        <table
          id="props-tab"
          v-if="demoProps !== null"
          class="instruction-table sample-section"
        >
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
            <tr v-for="(propList, i) in demoProps" :key="i">
              <td class="prevent-cr">
                <span class="code-word">{{ propList.prop }}</span>
              </td>
              <td>{{ propList.description }}</td>
              <td class="prevent-cr">
                <span :data-type="propList.type" class="code-word">{{
                  propList.type
                }}</span
                ><kup-image
                  title="This prop is an array."
                  class="type-icon"
                  resource="code-array"
                  color="var(--kup-primary-color)"
                  size-x="1.25em"
                  size-y="1.25em"
                  v-if="propList.isArray"
                ></kup-image>
              </td>
              <td class="prevent-cr">
                <span class="code-word">{{ propList.default }}</span>
              </td>
              <td v-if="propList.try === 'json'"
                >Use the JSON tab to view/change this prop.</td
              >
              <td v-if="propList.try === 'css'"
                >Use the CSS tab to view/change this prop.</td
              >
              <td class="switch-cell" v-if="propList.try === 'switch'">
                <kup-switch
                  v-bind:id="propList.prop"
                  @kup-switch-change="updateDemoSwitch"
                ></kup-switch>
              </td>
              <td class="text-cell" v-if="propList.try === 'field'">
                <kup-text-field
                  v-bind:id="propList.prop"
                  @kup-textfield-input="updateDemoField"
                ></kup-text-field>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          id="classes-tab"
          v-if="demoClasses !== null"
          class="instruction-table sample-section"
        >
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Try it!</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(classList, i) in demoClasses" :key="i">
              <td class="prevent-cr">
                <span class="code-word">{{ classList.class }}</span>
              </td>
              <td>{{ classList.description }}</td>
              <td class="switch-cell">
                <kup-switch
                  v-bind:id="classList.class"
                  @kup-switch-change="updateDemoClass"
                ></kup-switch>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          id="methods-tab"
          v-if="demoMethods !== null"
          class="instruction-table sample-section"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(methodList, i) in demoMethods" :key="i">
              <td class="prevent-cr">
                <span class="code-word">{{ methodList.name }}</span>
              </td>
              <td>{{ methodList.description }}</td>
            </tr>
          </tbody>
        </table>
        <table
          v-if="demoEvents !== null"
          id="events-tab"
          class="instruction-table sample-section events-section"
        >
          <thead>
            <tr>
              <th>Event</th>
              <th>Type</th>
              <th>Test it by interacting with the demo component!</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(eventList, j) in demoEvents" :key="j">
              <td class="prevent-cr">
                <span class="code-word">{{ eventList.name }}</span>
              </td>
              <td class="prevent-cr">
                <span class="code-word">{{ eventList.type }}</span>
              </td>

              <td>
                <div v-bind:id="'on' + eventList.name" class="code-word"></div>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="json-tab" class="sample-section padded">
          <textarea id="json-textarea" style="display: none"></textarea>
          <kup-text-field
            class="visible"
            label="Prop"
            helper="i.e.: data"
            id="json-setter"
            icon="arrow-collapse"
            trailing-icon
            helper-when-focused
            @kup-textfield-iconclick="jsonSetSwitch"
            @kup-textfield-input="prepareJsonView"
          ></kup-text-field>
          <kup-button
            @kup-button-click="jsonSetSwitch"
            id="json-setter-opener"
            icon="settings"
            title="Show prop field"
          ></kup-button>
          <kup-button
            id="json-warning"
            icon="warning"
            title="Invalid JSON. You can ignore this warning if the prop you're changing isn't an object."
          ></kup-button>
        </div>
        <div id="css-tab" class="sample-section">
          <textarea id="css-textarea" style="display: none"></textarea>
        </div>
      </div>
    </div>
    <div id="sample-dynamic">
      <div id="sample-comp">
        <div id="sample-comp-wrapper"></div>
      </div>
      <div id="split-container">
        <kup-button
          @kup-button-click="menuTrigger"
          id="menu-trigger"
          toggable
          icon="last_page"
          icon-off="menu_open"
          title="Open/close side panel"
        ></kup-button>
        <kup-button
          @kup-button-click="swapView"
          id="view-swapper"
          toggable
          icon="fullscreen_exit"
          icon-off="fullscreen"
          title="Toggle/disable full screen"
        ></kup-button>
        <kup-button
          @kup-button-click="splitView"
          id="view-splitter"
          toggable
          style="width: fit-content; margin: auto"
          icon="view_agenda"
          icon-off="flip"
          title="Split/detach view"
        ></kup-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { KupButtonClickEventPayload } from '@sme.up/ketchup/dist/types/components/kup-button/kup-button-declarations';
import type { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import type { KupDynamicPositionElement } from '@sme.up/ketchup/dist/types/managers/kup-dynamic-position/kup-dynamic-position-declarations';
import type {
  GenericObject,
  KupComponent,
  KupEventPayload,
} from '@sme.up/ketchup/dist/types/types/GenericTypes';
import type { KupSwitchEventPayload } from '@sme.up/ketchup/dist/types/components/kup-switch/kup-switch-declarations';
import type { KupTabBarEventPayload } from '@sme.up/ketchup/dist/types/components/kup-tab-bar/kup-tab-bar-declarations';
import type { KupTabBarNode } from '@sme.up/ketchup/src/components/kup-tab-bar/kup-tab-bar-declarations';
import type { KupTextFieldEventPayload } from '@sme.up/ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';
import type { KupDynamicPosition } from '@sme.up/ketchup/dist/types/managers/kup-dynamic-position/kup-dynamic-position';

interface DemoClasses {
  class: string;
  description: string;
}

interface DemoEvents {
  name: string;
  type: string;
}

interface DemoMethods {
  description: string;
  name: string;
}

interface DemoProps {
  default: string;
  description: string;
  prop: string;
  try: DemoTry;
  type: string;
  isArray?: boolean;
}

enum DemoTabs {
  PROPS = 'Props',
  CLASSES = 'Classes',
  METHODS = 'Methods',
  EVENTS = 'Events',
  JSON = 'JSON',
  CSS = 'CSS',
}

enum DemoTry {
  CSS = 'css',
  FIELD = 'field',
  NUMBER = 'number',
  JSON = 'json',
  SWITCH = 'switch',
}

interface DemoTypeJson {
  [index: string]: DemoType;
}

interface DemoType {
  keys: GenericObject;
  type: DemoTypeFeature;
}

enum DemoTypeFeature {
  ENUM = 'enum',
  INTERFACE = 'interface',
}

// JSON used to display custom types inside tooltip
const demoTypes: DemoTypeJson = {
  ChartAspect: {
    keys: {
      D2: '2D',
      D3: '3D',
    },
    type: DemoTypeFeature.ENUM,
  },
  ChartAxis: {
    keys: {
      'ticks?': 'string[]',
      'textPosition?': 'string',
      'gridlines?': 'ChartAxisGridlines',
      'viewWindow?': 'ChartAxisViewWindow',
      'textStyle?': "{ 'color?': 'string', 'fontSize?': 'number' }",
    },
    type: DemoTypeFeature.INTERFACE,
  },
  ChartOfflineMode: {
    keys: {
      value: 'string',
      shape: 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  ChartSerie: {
    keys: {
      code: 'string',
      'decode?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  ChartTitle: {
    keys: {
      value: 'string',
      'color?': 'string',
      'size?': 'number',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  ChartType: {
    keys: {
      Area: 'Area',
      Bubble: 'Bubble',
      Cal: 'Cal',
      Candlestick: 'Candlestick',
      Combo: 'Combo',
      Geo: 'Geo',
      Hbar: 'Hbar',
      Line: 'Line',
      Ohlc: 'Ohlc',
      Pie: 'Pie',
      Sankey: 'Sankey',
      Scatter: 'Scatter',
      Unk: 'Unk',
      ColumnChart: 'ColumnChart',
      Vbar: 'Vbar',
    },
    type: DemoTypeFeature.ENUM,
  },
  FButtonStyling: {
    keys: {
      FLAT: 'flat',
      FLOATING: 'floating',
      ICON: 'icon',
      OUTLINED: 'outlined',
      RAISED: 'raised',
    },
    type: DemoTypeFeature.ENUM,
  },
  FCellPadding: {
    keys: {
      DENSE: 'dense',
      MEDIUM: 'medium',
      NONE: '',
      WIDE: 'wide',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  FChipType: {
    keys: {
      CHOICE: 'choice',
      FILTER: 'filter',
      INPUT: 'input',
      STANDARD: 'standard',
    },
    type: DemoTypeFeature.ENUM,
  },
  FImageData: {
    keys: {
      'shape?': 'FImageShape',
      'color?': 'string',
      'height?': 'string',
      'width?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  FImageProps: {
    keys: {
      'badgeData?': 'KupBadge[]',
      'color?': 'string',
      'data?': 'FImageData[]',
      'fit?': 'boolean',
      'resource?': 'string',
      'sizeX?': 'string',
      'sizeY?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  GroupObject: {
    keys: {
      column: 'string',
      visible: 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupAccordionData: {
    keys: {
      columns: 'KupDataColumn[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupAccordionExpansionMode: {
    keys: {
      SINGLE: 'single',
      MULTIPLE: 'multiple',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupBoxData: {
    keys: {
      'columns?': 'KupDataColumn[]',
      'rows?': 'KupBoxRow[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupBoxKanban: {
    keys: {
      columns: 'string[]',
      'isStacked?': 'boolean',
      'labels?': 'string[][]',
      'size?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupBoxLayout: {
    keys: {
      'horizontal?': 'boolean',
      'sections?': 'Section[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupBoxRow: {
    keys: {
      cells: '{ [index: string]: Cell; }',
      'actions?': 'RowAction[]',
      'layout?': 'KupBoxLayout',
      'badgeData?': 'KupBadge[]',
      'id?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupButtonListNode: {
    keys: {
      value: 'string',
      'actions?': 'RowAction[]',
      'cells?': 'KupDataRowCells',
      'children?': 'KupButtonListNode[]',
      'data?': 'Object',
      'disabled?': 'boolean',
      'icon?': 'string',
      'id?': 'string',
      'isExpanded?': 'boolean',
      'obj?': 'KupObj',
      'options?': 'boolean',
      'readOnly?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupCalendarData: {
    keys: {
      columns: 'KupCalendarColumn[]',
      rows: 'KupDataRow[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupCalendarViewTypes: {
    keys: {
      DAY: 'timeGridDay',
      LIST: 'listMonth',
      MONTH: 'dayGridMonth',
      WEEK: 'timeGridWeek',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupCardData: {
    keys: {
      'autocomplete?': 'KupAutocomplete[]',
      'button?': 'KupButton[]',
      'chart?': 'KupChart[]',
      'checkbox?': 'KupCheckbox[]',
      'chip?': 'KupChip[]',
      'color?': 'string[]',
      'combobox?': 'KupCombobox[]',
      'datatable?': 'KupDataTable[]',
      'datepicker?': 'KupDatePicker[]',
      'image?': 'KupImage[]',
      'list?': 'KupList[]',
      'object?': 'KupObj[]',
      'progressbar?': 'KupProgressBar[]',
      'switch?': 'KupSwitch[]',
      'tabbar?': 'KupTabBar[]',
      'text?': 'string[]',
      'textfield?': 'KupTextField[]',
      'timepicker?': 'KupTimePicker[]',
      'tree?': 'KupTree[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupCardFamily: {
    keys: {
      BUILT_IN: 'built-in',
      COLLAPSIBLE: 'collapsible',
      DIALOG: 'dialog',
      FREE: 'free',
      SCALABLE: 'scalable',
      STANDARD: 'standard',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupChartSort: {
    keys: {
      column: 'number',
      'desc?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupChartTrendlines: {
    keys: {
      '[index: string]': '{ color: string }',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupChipNode: {
    keys: {
      value: 'string',
      'cells?': 'KupDataRowCells',
      'checked?': 'boolean',
      'children?': 'KupChipNode[]',
      'disabled?': 'boolean',
      'obj?': 'KupObj',
      'actions?': 'RowAction[]',
      'icon?': 'string',
      'id?': 'string',
      'isExpanded?': 'boolean',
      'options?': 'boolean',
      'readOnly?': 'boolean',
      'title?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataCell: {
    keys: {
      value: 'string',
      'cardID?': 'number',
      'cssClass?': 'string',
      'data?': 'CellData',
      'displayedValue?': 'string',
      'icon?': 'string',
      'info?': 'FCellInfo',
      'isEditable?': 'boolean',
      'obj?': 'KupObj',
      'shape?': 'FCellShapes',
      'style?': 'GenericMap',
      'styleContent?': 'GenericMap',
      'title?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataColumn: {
    keys: {
      name: 'string',
      title: 'string',
      'size?': 'string',
      'visible?': 'boolean',
      'hideValuesRepetitions?': 'boolean',
      'obj?': 'KupObj',
      'shape?': 'string',
      'decimals?': 'number',
      'icon?': 'string',
      'formula?': 'string',
      'valuesForFilter?': 'string[]',
      'isKey?': 'boolean',
      'children?': 'ColumnChild[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataDataset: {
    keys: {
      'columns?': 'KupDataColumn[]',
      'rows?': 'KupDataRow[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataDashboard: {
    keys: {
      id: 'number',
      loaded: 'boolean',
      title: 'string',
      'fun?': 'KupObj',
      'evaluatedFun?': 'string',
      type: 'string',
      'variables?': 'KupVariableEntity[]',
      'timer?': 'setTimeout',
      layout: 'string',
      'sections?': 'KupSection[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataNode: {
    keys: {
      value: 'string',
      'actions?': 'RowAction[]',
      'cells?': 'KupDataRowCells',
      'children?': 'KupDataNode[]',
      'disabled?': 'boolean',
      'obj?': 'KupObj',
      'icon?': 'string',
      'id?': 'string',
      'isExpanded?': 'boolean',
      'visible?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataRow: {
    keys: {
      cells: 'KupDataRowCells',
      'actions?': 'Array<RowAction>',
      'id?': 'string',
      'readOnly?': 'boolean',
      'cssClass?': 'string',
      'name?': 'string',
      'unselectable?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupDataTableDataset: {
    keys: {
      'columns?': 'KupDataColumn[]',
      'rows?': 'KupDataTableRow[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupEchartLegendPlacement: {
    keys: {
      BOTTOM: 'bottom',
      LEFT: 'left',
      RIGHT: 'right',
      TOP: 'top',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupEchartMaps: {
    keys: {
      AFRICA: 'africa',
      AMERICA: 'america',
      ASIA: 'asia',
      EUROPE: 'europe',
      ITALY: 'italy',
      OCEANIA: 'oceania',
      WORLD: 'world',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupEchartTitle: {
    keys: {
      value: 'string',
      'color?': 'string',
      'position?': 'string',
      'size?': 'number',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupEchartTypes: {
    keys: {
      BAR: 'Bar',
      GAUSSIAN: 'Gaussian',
      LINE: 'Line',
      MAP: 'Map',
      PIE: 'Pie',
      SCATTER: 'Scatter',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupFamilyTreeData: {
    keys: {
      'columns?': 'KupDataColumn[]',
      'rows?': 'KupFamilyTreeNode[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupFamilyTreeLayout: {
    keys: {},
    type: DemoTypeFeature.INTERFACE,
  },
  KupFormData: {
    keys: {
      'columns?': 'KupDataColumn[]',
      'rows?': 'KupFormRow[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupFormLayout: {
    keys: {
      'horizontal?': 'boolean',
      'sections?': 'KupFormSection[]',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupGlobalFilterMode: {
    keys: {
      HIGHLIGHT: 'highlight',
      SIMPLE: 'simple',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupListNode: {
    keys: {
      id: 'string',
      value: 'string',
      'icon?': 'string',
      'secondaryText?': 'string',
      'selected?': 'boolean',
      'separator?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupNavBarStyling: {
    keys: {
      SHORT: 'short',
      STANDARD: 'standard',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupRadioData: {
    keys: {
      value: 'string',
      label: 'string',
      checked: 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupTabBarNode: {
    keys: {
      id: 'string',
      value: 'string',
      'active?': 'boolean',
      'icon?': 'string',
      'title?': 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  KupTreeExpansionMode: {
    keys: {
      DROPDOWN: 'dropdown',
      NODE: 'node',
    },
    type: DemoTypeFeature.ENUM,
  },
  KupTreeNode: {
    keys: {
      value: 'string',
      'actions?': 'RowAction[]',
      'cells?': 'KupDataRowCells',
      'children?': 'KupTreeNode[]',
      'disabled?': 'boolean',
      'expandable?': 'boolean',
      'icon?': 'string',
      'iconColor?': 'string',
      'id?': 'string',
      'isExpanded?': 'boolean',
      'obj?': 'KupObj',
      'readOnly?': 'boolean',
      'style?': 'Object',
      'visible?': 'boolean',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  LoadMoreMode: {
    keys: {
      CONSTANT: 'constant',
      CONSTANT_INCREMENT: 'constant_increment',
      PROGRESSIVE_THRESHOLD: 'progressive_threshold',
    },
    type: DemoTypeFeature.ENUM,
  },
  RowAction: {
    keys: {
      text: 'string',
      icon: 'string',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  SelectionMode: {
    keys: {
      SINGLE: 'single',
      MULTIPLE_CHECKBOX: 'multiple-checkbox',
      MULTIPLE: 'multiple',
      NONE: 'none',
    },
    type: DemoTypeFeature.ENUM,
  },
  SortObject: {
    keys: {
      column: 'string',
      sortMode: 'SortMode',
    },
    type: DemoTypeFeature.INTERFACE,
  },
  TotalsMap: {
    keys: {
      '[index: string]': 'TotalMode',
    },
    type: DemoTypeFeature.INTERFACE,
  },
};

// Recurring CSS classes
const closedClass: string = 'closed',
  detachedClass: string = 'detached',
  fullClass: string = 'full',
  paddedClass: string = 'padded',
  visibleClass: string = 'visible';

const dom: KupDom = document.documentElement as KupDom;

// Kup component
var demoComponent: HTMLElement = null,
  // Kup component wrapper
  demoComponentWrapper: HTMLDivElement = null,
  // Vue component's props
  demoClasses: DemoClasses[] = null,
  demoEvents: DemoEvents[] = null,
  demoMethods: DemoMethods[] = null,
  demoProps: DemoProps[] = null,
  // Navigation tab bar
  tabBar: HTMLKupTabBarElement = null,
  // Views
  propsView: HTMLElement = null,
  classesView: HTMLElement = null,
  methodsView: HTMLElement = null,
  eventsView: HTMLElement = null,
  jsonView: HTMLElement = null,
  cssView: HTMLElement = null,
  // Textareas
  cssTextarea: HTMLTextAreaElement = null,
  jsonTextarea: HTMLTextAreaElement = null,
  // JSON tab sub-components
  jsonSetter: HTMLKupTextFieldElement = null,
  jsonSetterOpener: HTMLKupButtonElement = null,
  jsonWarning: HTMLKupButtonElement = null,
  // Sections of the playground layout
  sampleWrapper: HTMLElement = null,
  sampleComp: HTMLElement = null,
  sampleDynamic: HTMLElement = null,
  sampleSpecs: HTMLElement = null,
  sampleTooltip: HTMLElement = null;

export default {
  props: {
    demoClasses: Array,
    demoComp: HTMLElement,
    demoEvents: Array,
    demoMethods: Array,
    demoProps: Array,
  },
  /**
   * Called after the instance of the Vue component has been mounted.
   */
  mounted() {
    this.initVariables();
    this.initTabs();
    this.initDefaults();
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      demoComponentWrapper = document.querySelector('#sample-comp-wrapper');
      demoComponentWrapper.appendChild(this.demoComp);
      demoComponent = document.querySelector('#demo-component');
      tabBar = document.querySelector('#demo-tab-bar');
      propsView = document.querySelector('#props-tab');
      classesView = document.querySelector('#classes-tab');
      eventsView = document.querySelector('#events-tab');
      methodsView = document.querySelector('#methods-tab');
      jsonView = document.querySelector('#json-tab');
      cssView = document.querySelector('#css-tab');
      cssTextarea = document.querySelector('#css-textarea');
      jsonSetter = document.querySelector('#json-setter');
      jsonSetterOpener = document.querySelector('#json-setter-opener');
      jsonTextarea = document.querySelector('#json-textarea');
      jsonWarning = document.querySelector('#json-warning');
      sampleWrapper = document.querySelector('#sample-wrapper');
      sampleComp = document.querySelector('#sample-comp');
      sampleDynamic = document.querySelector('#sample-dynamic');
      sampleSpecs = document.querySelector('#sample-specs');
      const tooltip: HTMLElement = document.querySelector('#sample-tooltip');
      if (tooltip) {
        sampleTooltip = tooltip;
      } else {
        sampleTooltip = document.createElement('div');
        sampleTooltip.id = 'sample-tooltip';
      }
      sampleWrapper.addEventListener('mousemove', (e: MouseEvent) => {
        this.handleTooltip(e);
      });
      demoClasses = this.demoClasses;
      demoEvents = this.demoEvents;
      demoMethods = this.demoMethods;
      demoProps = this.demoProps;
    },
    /**
     * Displays the tooltip when mouse-hovering on a type.
     * @param {MouseEvent} e - Mouse move event.
     */
    handleTooltip(e: MouseEvent): void {
      const dynamicPosition: KupDynamicPosition = dom.ketchup.dynamicPosition;
      if (!dynamicPosition.isRegistered(sampleTooltip as any)) {
        dynamicPosition.register(
          sampleTooltip as KupDynamicPositionElement,
          sampleWrapper,
          0,
          'b' as any,
          true
        );
      }
      const t: HTMLElement = e.target as HTMLElement;
      if (t.dataset.type && demoTypes[t.dataset.type]) {
        const type: string = t.dataset.type;
        dynamicPosition.changeAnchor(
          sampleTooltip as KupDynamicPositionElement,
          t
        );
        dynamicPosition.start(sampleTooltip as KupDynamicPositionElement);
        let htmlString: string =
          demoTypes[type].type + '<strong> ' + type + '</strong> {<br>';
        const keys: GenericObject = demoTypes[type].keys;
        switch (demoTypes[type].type) {
          case DemoTypeFeature.ENUM: {
            for (const key in keys) {
              const value: string = keys[key];
              htmlString +=
                '<strong>' + key + "</strong> = '" + value + "',<br>";
            }
            break;
          }
          case DemoTypeFeature.INTERFACE: {
            for (const key in keys) {
              const value: string = keys[key];
              htmlString += '<strong>' + key + '</strong> : ' + value + ';<br>';
            }
            break;
          }
        }
        htmlString += '}';
        sampleTooltip.innerHTML = htmlString;
        sampleTooltip.classList.add(visibleClass);
      } else {
        sampleTooltip.classList.remove(visibleClass);
        dynamicPosition.stop(sampleTooltip as KupDynamicPositionElement);
      }
    },
    /**
     * Initializes kup-tab-bar tabs.
     */ initTabs(): void {
      const data: KupTabBarNode[] = [];
      if (demoClasses) {
        data.push({
          id: DemoTabs.CLASSES,
          title: 'List of classes available to the component.',
          value: DemoTabs.CLASSES,
        });
      }
      if (demoMethods) {
        data.push({
          id: DemoTabs.METHODS,
          title: 'List of public methods available to the component.',
          value: DemoTabs.METHODS,
        });
      }
      if (demoEvents) {
        data.push({
          id: DemoTabs.EVENTS,
          title: 'List of events available to the component.',
          value: DemoTabs.EVENTS,
        });
      }
      data.push({
        id: DemoTabs.JSON,
        icon: 'json',
        title: 'Here you can change props values manually.',
        value: DemoTabs.JSON,
      });
      if (demoProps) {
        data.unshift({
          id: DemoTabs.PROPS,
          title: 'List of props available to the component.',
          value: DemoTabs.PROPS,
        });
        const hasCustomStyle: DemoProps = demoProps.find(
          (x: DemoProps) => x.prop === 'customStyle'
        );
        if (hasCustomStyle) {
          data.push({
            id: DemoTabs.CSS,
            icon: 'style',
            title: 'Here you can write CSS code used by the customStyle prop.',
            value: DemoTabs.CSS,
          });
        }
      }
      if (data.length === 0) {
        console.error("Couldn't initialize playground: missing data.");
      } else {
        tabBar.data = data;
        data[0]['active'] = true;
        this.handleTab(0);
      }
    },
    /**
     * Initializes the "try" section of the props view and adds event listener for defined events.
     */
    initDefaults(): void {
      if (demoEvents) {
        for (let i = 0; i < demoEvents.length; i++) {
          demoComponent.addEventListener(demoEvents[i].name, (e) =>
            this.handleEvent(e)
          );
        }
      }
      for (let i = 0; i < demoProps.length; i++) {
        const prop: DemoProps = demoProps[i];
        if (demoTypes[prop.type]) {
          const typeEl: HTMLElement = document.querySelector(
            '[data-type=' + prop.type + ']'
          );
          typeEl.classList.add('has-tooltip');
        }
        switch (prop.try) {
          case DemoTry.FIELD: {
            const fieldEl: HTMLKupTextFieldElement = document.querySelector(
              '#' + prop.prop
            );
            if (prop.type === DemoTry.NUMBER) {
              fieldEl.inputType = DemoTry.NUMBER;
            }
            if (
              demoComponent[prop.prop] !== undefined &&
              demoComponent[prop.prop] !== null
            ) {
              fieldEl.setValue(demoComponent[prop.prop]);
            }
            break;
          }
          case DemoTry.SWITCH: {
            const switchEl: HTMLKupSwitchElement = document.querySelector(
              '#' + prop.prop
            );
            switchEl.checked = demoComponent[prop.prop] ? true : false;
            break;
          }
        }
      }
    },
    /**
     * Displays a console log whenever a registered event fires.
     * @param {CustomEvent<KupEventPayload>} e - Generic kup event.
     */
    handleEvent(e: CustomEvent<Partial<KupEventPayload>>): void {
      const d: Date = new Date();
      console.log('Playground event fired: ', e);
      (document.querySelector('#on' + e.type) as HTMLElement).innerText =
        e.type +
        ' event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },
    /**
     * Enables/disables full screen mode.
     * @param {CustomEvent<KupButtonClickEventPayload>} e - kup-button click event.
     */
    swapView(e: CustomEvent<KupButtonClickEventPayload>): void {
      if (e.detail.value === 'on') {
        sampleWrapper.classList.add(fullClass);
      } else {
        sampleWrapper.classList.remove(fullClass);
      }
    },
    /**
     * Swaps between the horizontally and the vertically split view.
     * @param {CustomEvent<KupButtonClickEventPayload>} e - kup-button click event.
     */
    splitView(e: CustomEvent<KupButtonClickEventPayload>): void {
      if (e.detail.value === 'on') {
        sampleWrapper.classList.remove(detachedClass);
      } else {
        sampleWrapper.classList.add(detachedClass);
      }
    },
    /**
     * Opens/closes the settings view.
     * @param {CustomEvent<KupButtonClickEventPayload>} e - kup-button click event.
     */
    menuTrigger(e: CustomEvent<KupButtonClickEventPayload>): void {
      if (e.detail.value === 'on') {
        sampleComp.classList.add(fullClass);
        sampleDynamic.classList.add(fullClass);
        sampleSpecs.classList.add(closedClass);
      } else {
        sampleComp.classList.remove(fullClass);
        sampleDynamic.classList.remove(fullClass);
        sampleSpecs.classList.remove(closedClass);
      }
    },
    /**
     * Adds/removes the specified class on DemoComponent.
     * @param {CustomEvent<KupSwitchEventPayload>} e - kup-switch change event.
     */
    updateDemoClass(e: CustomEvent<KupSwitchEventPayload>): void {
      if (e.detail.value === 'on') {
        demoComponent.classList.add(e.detail.id);
      } else {
        demoComponent.classList.remove(e.detail.id);
      }
      (demoComponent as KupComponent).refresh();
    },
    /**
     * Enables/disables the specified boolean prop on DemoComponent.
     * @param {CustomEvent<KupSwitchEventPayload>} e - kup-switch change event.
     */
    updateDemoSwitch(e: CustomEvent<KupSwitchEventPayload>): void {
      if (e.detail.value === 'on') {
        demoComponent[e.detail.id] = true;
      } else {
        demoComponent[e.detail.id] = false;
      }
    },
    /**
     * Updates the specified string/number prop on DemoComponent.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - kup-text-field input event.
     */
    updateDemoField(e: CustomEvent<KupTextFieldEventPayload>): void {
      demoComponent[e.detail.id] = e.detail.value;
    },
    /**
     * Swaps between different tabs on click.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - kup-tab-bar click event.
     */
    tabSelection(e: CustomEvent<KupTabBarEventPayload>): void {
      this.handleTab(e.detail.index);
    },
    /**
     * Enables the view related to the given tab index.
     * @param {number} i - Index of the tab to select.
     */
    handleTab(i: number): void {
      propsView.classList.remove(visibleClass);
      classesView.classList.remove(visibleClass);
      methodsView.classList.remove(visibleClass);
      eventsView.classList.remove(visibleClass);
      jsonView.classList.remove(visibleClass);
      cssView.classList.remove(visibleClass);

      switch (tabBar.data[i].value) {
        case DemoTabs.PROPS:
          propsView.classList.add(visibleClass);
          break;
        case DemoTabs.CLASSES:
          classesView.classList.add(visibleClass);
          break;
        case DemoTabs.METHODS:
          methodsView.classList.add(visibleClass);
          break;
        case DemoTabs.EVENTS:
          eventsView.classList.add(visibleClass);
          break;
        case DemoTabs.JSON:
          jsonView.classList.add(visibleClass);
          break;
        case DemoTabs.CSS:
          cssView.classList.add(visibleClass);
          this.prepareCssView();
          break;
      }
    },
    /**
     * Shows/hides the prop text field inside the JSON view.
     */
    jsonSetSwitch(): void {
      if (jsonSetter.classList.contains(visibleClass)) {
        jsonSetter.classList.remove(visibleClass);
        jsonView.classList.remove(paddedClass);
        jsonSetterOpener.classList.add(visibleClass);
      } else {
        jsonSetter.classList.add(visibleClass);
        jsonView.classList.add(paddedClass);
        jsonSetterOpener.classList.remove(visibleClass);
      }
    },
    /**
     * Retrieves the user typed prop's value, displaying it inside the textarea - ready to be edited.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - kup-text-field input event.
     */
    prepareJsonView(e: CustomEvent<KupTextFieldEventPayload>): void {
      demoComponent.dataset.prop = e.detail.value;
      jsonTextarea.value = JSON.stringify(
        demoComponent[e.detail.value],
        null,
        2
      );
      const codemirrorTextarea: HTMLElement = document.querySelector(
        '#json-tab .CodeMirror'
      );
      if (codemirrorTextarea) {
        codemirrorTextarea.remove();
      }
      //@ts-ignore
      CodeMirror.fromTextArea(jsonTextarea, {
        mode: { name: 'javascript', json: true },
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      }).on('change', function (cm: any) {
        cm.save();
        const prop: string = demoComponent.dataset.prop;
        try {
          demoComponent[prop] = JSON.parse(jsonTextarea.value);
          jsonWarning.classList.remove(visibleClass);
        } catch (error) {
          demoComponent[prop] = jsonTextarea.value;
          jsonWarning.classList.add(visibleClass);
        }
      });
    },
    /**
     * Retrieves the customStyle of the component, displaying it inside the textarea - ready to be edited.
     */
    prepareCssView(): void {
      cssTextarea.value = demoComponent['customStyle'];
      const codemirrorTextarea: HTMLElement = document.querySelector(
        '#css-tab .CodeMirror'
      );
      if (codemirrorTextarea) {
        codemirrorTextarea.remove();
      }
      //@ts-ignore
      CodeMirror.fromTextArea(cssTextarea, {
        mode: { name: 'text/css' },
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      }).on('change', function (cm: any) {
        cm.save();
        demoComponent['customStyle'] = cssTextarea.value;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#split-container kup-button {
  --kup-button-primary-color: var(--kup-text-on-primary-color);
  --kup-button-primary-color-rgb: var(--kup-text-on-primary-color-rgb);
  --kup-button-primary-color-h: var(--kup-text-on-primary-color-h);
  --kup-button-primary-color-s: var(--kup-text-on-primary-color-s);
  --kup-button-primary-color-l: var(--kup-text-on-primary-color-l);
}
</style>
