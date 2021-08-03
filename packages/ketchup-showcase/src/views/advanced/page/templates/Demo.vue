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
                <span class="code-word">{{ propList.type }}</span>
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
                  full-width
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
          v-if="demoEvents !== null"
          id="events-tab"
          style="display: none"
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
        <div id="json-tab" class="sample-section padded" style="display: none">
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
        <div id="css-tab" class="sample-section" style="display: none">
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
          style="--kup-primary-color: var(--kup-text-on-primary-color)"
          icon="last_page"
          icon-off="menu_open"
          title="Open/close side panel"
        ></kup-button>
        <kup-button
          @kup-button-click="swapView"
          id="view-swapper"
          toggable
          style="--kup-primary-color: var(--kup-text-on-primary-color)"
          icon="fullscreen_exit"
          icon-off="fullscreen"
          title="Toggle/disable full screen"
        ></kup-button>
        <kup-button
          @kup-button-click="splitView"
          id="view-splitter"
          toggable
          style="
            --kup-primary-color: var(--kup-text-on-primary-color);
            width: fit-content;
            margin: auto;
          "
          icon="view_agenda"
          icon-off="flip"
          title="Split/detach view"
        ></kup-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Components } from 'ketchup/dist/types/components';
import { KupTabBarData } from 'ketchup/src/components/kup-tab-bar/kup-tab-bar-declarations';
import { KupButtonClickEventPayload } from 'ketchup/dist/types/components/kup-button/kup-button-declarations';
import { KupEventPayload } from 'ketchup/dist/types/types/GenericTypes';
import { KupSwitchEventPayload } from 'ketchup/dist/types/components/kup-switch/kup-switch-declarations';
import { KupTextFieldEventPayload } from 'ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';
import { KupTabBarClickEventPayload } from 'ketchup/dist/types/components/kup-tab-bar/kup-tab-bar-declarations';

interface DemoClasses {
  class: string;
  description: string;
}

interface DemoEvents {
  name: string;
  type: string;
}

interface DemoProps {
  prop: string;
  description: string;
  type: string;
  default: string;
  try: DemoTry;
}

enum DemoTabs {
  PROPS = 'Props',
  CLASSES = 'Classes',
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

var demoComponent: HTMLElement = null;
var demoComponentWrapper: HTMLDivElement = null;
var demoClasses: DemoClasses[] = null;
var demoEvents: DemoEvents[] = null;
var demoProps: DemoProps[] = null;
var tabBar: HTMLKupTabBarElement = null;
var propsTab: HTMLElement = null;
var classesTab: HTMLElement = null;
var eventsTab: HTMLElement = null;
var jsonTab: HTMLElement = null;
var cssTab: HTMLElement = null;
var cssTextarea: HTMLTextAreaElement = null;
var jsonSetter: HTMLKupTextFieldElement = null;
var jsonSetterOpener: HTMLKupButtonElement = null;
var jsonTextarea: HTMLTextAreaElement = null;
var jsonWarning: HTMLKupButtonElement = null;

export default {
  props: {
    demoComp: HTMLElement,
    demoProps: Array,
    demoClasses: Array,
    demoEvents: Array,
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
      propsTab = document.querySelector('#props-tab');
      classesTab = document.querySelector('#classes-tab');
      eventsTab = document.querySelector('#events-tab');
      jsonTab = document.querySelector('#json-tab');
      cssTab = document.querySelector('#css-tab');
      cssTextarea = document.querySelector('#css-textarea');
      jsonSetter = document.querySelector('#json-setter');
      jsonSetterOpener = document.querySelector('#json-setter-opener');
      jsonTextarea = document.querySelector('#json-textarea');
      jsonWarning = document.querySelector('#json-warning');
      demoClasses = this.demoClasses;
      demoEvents = this.demoEvents;
      demoProps = this.demoProps;
    },
    /**
     * Initializes kup-tab-bar tabs.
     */
    initTabs(): void {
      const data: KupTabBarData[] = [];
      if (demoProps) {
        data.push({
          value: DemoTabs.PROPS,
          text: DemoTabs.PROPS,
          title: 'List of props available to the component.',
        });
      }
      if (demoClasses) {
        data.push({
          value: DemoTabs.CLASSES,
          text: DemoTabs.CLASSES,
          title: 'List of classes available to the component.',
        });
      }
      if (demoEvents) {
        data.push({
          value: DemoTabs.EVENTS,
          text: DemoTabs.EVENTS,
          title: 'List of events available to the component.',
        });
      }
      data.push({
        value: DemoTabs.JSON,
        text: DemoTabs.JSON,
        icon: 'json',
        title: 'Here you can change props values manually.',
      });
      if (demoProps) {
        for (let i = 0; i < demoProps.length; i++) {
          if (demoProps[i].prop === 'customStyle') {
            data.push({
              value: DemoTabs.CSS,
              text: DemoTabs.CSS,
              icon: 'style',
              title:
                'Here you can write CSS code used by the customStyle prop.',
            });
          }
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
        switch (demoProps[i].try) {
          case DemoTry.FIELD:
            if (demoProps[i].type === DemoTry.NUMBER) {
              document
                .querySelector('#' + demoProps[i].prop)
                .setAttribute('input-type', DemoTry.NUMBER);
            }
            if (demoComponent[demoProps[i].prop] !== undefined) {
              (
                document.querySelector(
                  '#' + this.demoProps[i].prop
                ) as HTMLKupTextFieldElement
              ).setValue(demoComponent[demoProps[i].prop]);
            }
            break;
          case DemoTry.SWITCH:
            if (demoComponent[demoProps[i].prop] === true) {
              document
                .querySelector('#' + demoProps[i].prop)
                .setAttribute('checked', demoComponent[demoProps[i].prop]);
            }
            break;
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
        document.querySelector('#sample-wrapper').classList.add('full');
      } else {
        document.querySelector('#sample-wrapper').classList.remove('full');
      }
    },
    /**
     * Swaps between the horizontally and the vertically split view.
     * @param {CustomEvent<KupButtonClickEventPayload>} e - kup-button click event.
     */
    splitView(e: CustomEvent<KupButtonClickEventPayload>): void {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-wrapper').classList.remove('detached');
      } else {
        document.querySelector('#sample-wrapper').classList.add('detached');
      }
    },
    /**
     * Opens/closes the settings view.
     * @param {CustomEvent<KupButtonClickEventPayload>} e - kup-button click event.
     */
    menuTrigger(e: CustomEvent<KupButtonClickEventPayload>): void {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-comp').classList.add('full');
        document.querySelector('#sample-dynamic').classList.add('full');
        document.querySelector('#sample-specs').classList.add('closed');
      } else {
        document.querySelector('#sample-comp').classList.remove('full');
        document.querySelector('#sample-dynamic').classList.remove('full');
        document.querySelector('#sample-specs').classList.remove('closed');
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
    tabSelection(e: CustomEvent<KupTabBarClickEventPayload>): void {
      this.handleTab(e.detail.index);
    },
    /**
     * Enables the view related to the given tab index.
     * @param {number} i - Index of the tab to select.
     */
    handleTab(i: number): void {
      propsTab.setAttribute('style', 'display: none;');
      classesTab.setAttribute('style', 'display: none;');
      eventsTab.setAttribute('style', 'display: none;');
      jsonTab.setAttribute('style', 'display: none;');
      cssTab.setAttribute('style', 'display: none;');

      switch (tabBar.data[i].text) {
        case DemoTabs.PROPS:
          propsTab.setAttribute('style', '');
          break;
        case DemoTabs.CLASSES:
          classesTab.setAttribute('style', '');
          break;
        case DemoTabs.EVENTS:
          eventsTab.setAttribute('style', '');
          break;
        case DemoTabs.JSON:
          jsonTab.setAttribute('style', '');
          break;
        case DemoTabs.CSS:
          cssTab.setAttribute('style', '');
          this.prepareCssView();
          break;
      }
    },
    /**
     * Shows/hides the prop text field inside the JSON view.
     */
    jsonSetSwitch(): void {
      if (jsonSetter.classList.contains('visible')) {
        jsonSetter.classList.remove('visible');
        jsonTab.classList.remove('padded');
        jsonSetterOpener.classList.add('visible');
      } else {
        jsonSetter.classList.add('visible');
        jsonTab.classList.add('padded');
        jsonSetterOpener.classList.remove('visible');
      }
    },
    /**
     * Retrieves the user typed prop's value, displaying it inside the textarea - ready to be edited.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - kup-text-field input event.
     */
    prepareJsonView(e: CustomEvent<KupTextFieldEventPayload>) {
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
          jsonWarning.classList.remove('visible');
        } catch (error) {
          demoComponent[prop] = jsonTextarea.value;
          jsonWarning.classList.add('visible');
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
  /**
   * Called after the instance of the Vue component has been mounted.
   */
  mounted() {
    this.initVariables();
    this.initTabs();
    this.initDefaults();
  },
};
</script>
