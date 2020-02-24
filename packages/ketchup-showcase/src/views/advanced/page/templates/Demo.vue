<template>
  <div id="sample-wrapper" class="detached">
    <div id="sample-modal"></div>
    <div id="sample-specs">
      <wup-tab-bar
        @kupTabBarClick="tabSelection"
        :data.prop="demoTabs"
      ></wup-tab-bar>
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
                <wup-switch
                  v-bind:id="propList.prop"
                  @kupSwitchChange="updateDemoSwitch"
                ></wup-switch>
              </td>
              <td class="text-cell" v-if="propList.try === 'field'">
                <wup-text-field
                  full-width
                  v-bind:id="propList.prop"
                  @kupTextFieldInput="updateDemoField"
                ></wup-text-field>
              </td>
              <td class="text-cell" v-if="propList.try === 'array'">
                <wup-text-field
                  full-width
                  trailing-icon
                  icon="add"
                  v-bind:id="propList.prop"
                  @kupTextFieldChange="updateDemoFieldArray"
                  @kupTextFieldIconClick="updateDemoFieldArray"
                ></wup-text-field>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          v-if="demoEvents !== null"
          id="events-tab"
          style="display: none;"
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
        <div id="html-tab" class="sample-section" style="display: none;">
          <div class="code-word sample-html"></div>
          <wup-button
            @kupButtonClick="copyHtml"
            id="copy-html"
            icon="file_copy"
            title="Copy HTML markup"
          ></wup-button>
        </div>
        <div id="json-tab" class="sample-section padded" style="display: none;">
          <textarea id="json-textarea" style="display: none;"></textarea>
          <wup-text-field
            class="shown"
            label="Prop"
            helper="i.e.: data"
            id="json-setter"
            icon="close"
            trailing-icon
            helper-when-focused
            @kupTextFieldIconClick="jsonSetSwitch"
            @kupTextFieldInput="jsonSet"
          ></wup-text-field>
          <wup-button
            @kupButtonClick="jsonSetSwitch"
            id="json-setter-opener"
            icon="settings"
            title="Show prop field"
          ></wup-button>
        </div>
        <div id="css-tab" class="sample-section padded" style="display: none;">
          <textarea id="css-textarea" style="display: none;"></textarea>
          <wup-text-field
            class="shown"
            label="Prop"
            helper="i.e.: customStyle"
            id="css-setter"
            icon="close"
            trailing-icon
            helper-when-focused
            @kupTextFieldIconClick="cssSetSwitch"
            @kupTextFieldInput="cssSet"
          ></wup-text-field>
          <wup-button
            @kupButtonClick="cssSetSwitch"
            id="css-setter-opener"
            icon="settings"
            title="Show prop field"
          ></wup-button>
        </div>
      </div>
    </div>
    <div id="sample-dynamic">
      <div id="sample-comp">
        <div v-html="demoComp" id="sample-comp-wrapper"></div>
      </div>
      <div id="split-container">
        <wup-button
          @kupButtonClick="menuTrigger"
          id="menu-trigger"
          toggable
          style="--kup-main-color: var(--kup-text-on-main-color);"
          icon="last_page"
          icon-off="menu_open"
          title="Open/close side panel"
        ></wup-button>
        <wup-button
          @kupButtonClick="swapView"
          id="view-swapper"
          toggable
          style="--kup-main-color: var(--kup-text-on-main-color);"
          icon="fullscreen_exit"
          icon-off="fullscreen"
          title="Toggle/disable full screen"
        ></wup-button>
        <wup-button
          @kupButtonClick="splitView"
          id="view-splitter"
          toggable
          style="--kup-main-color: var(--kup-text-on-main-color); width: fit-content; margin: auto;"
          icon="view_agenda"
          icon-off="flip"
          title="Split/detach view"
        ></wup-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    demoTabs: Array,
    demoComp: String,
    demoProps: Array,
    demoEvents: Array,
    demoData: Array,
  },
  methods: {
    initEvents() {
      let demoComponent = document.querySelector('#demo-component');
      if (this.demoEvents) {
        for (let i = 0; i < this.demoEvents.length; i++) {
          demoComponent.addEventListener(this.demoEvents[i].name, (e) =>
            this.handleEvent(e)
          );
        }
      }
      if (this.demoData) {
        for (let i = 0; i < this.demoData.length; i++) {
          demoComponent[this.demoData[i].prop] = this.demoData[i].value;
        }
      }
    },

    initDefaults() {
      let demoComponent = document.querySelector('#demo-component');

      for (let i = 0; i < this.demoTabs.length; i++) {
        if (this.demoTabs[i].status === 'Active') {
          this.handleTab(demoComponent, i);
        }
      }

      for (let i = 0; i < this.demoProps.length; i++) {
        switch (this.demoProps[i].try) {
          case 'field':
            if (demoComponent[this.demoProps[i].prop] !== undefined) {
              document
                .querySelector('#' + this.demoProps[i].prop)
                .setAttribute(
                  'initial-value',
                  demoComponent[this.demoProps[i].prop]
                );
            }
            break;
          case 'switch':
            if (demoComponent[this.demoProps[i].prop] === true) {
              document
                .querySelector('#' + this.demoProps[i].prop)
                .setAttribute('checked', demoComponent[this.demoProps[i].prop]);
            }
            break;
          case 'array':
            if (demoComponent[this.demoProps[i].prop]) {
              for (
                var j = 0;
                j < demoComponent[this.demoProps[i].prop].length;
                j++
              ) {
                let propName = this.demoProps[i].prop;
                let arrayList = demoComponent[this.demoProps[i].prop];
                let newEntryId = '' + propName + '-' + j;
                let newEntry =
                  '<wup-button data-id="' +
                  propName +
                  '" id="' +
                  newEntryId +
                  '" style="--kup-display-mode: inline-block;" flat icon="remove" label="' +
                  arrayList[j] +
                  '"></wup-button>';
                document
                  .querySelector('#' + this.demoProps[i].prop)
                  .insertAdjacentHTML('beforebegin', newEntry);
                document
                  .querySelector('#' + newEntryId)
                  .addEventListener('kupButtonClick', (e) => {
                    this.updateDemoFieldArrayRemove(e);
                  });
              }
            }
            break;
        }
      }
    },

    handleEvent(e) {
      var d = new Date();
      document.querySelector('#on' + e.type).innerText =
        e.type +
        ' event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },

    copyHtml(e) {
      let text = document.querySelector('.code-word.sample-html').innerText;
      navigator.clipboard.writeText(text);
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
        document.querySelector('#sample-dynamic').classList.add('full');
        document.querySelector('#sample-specs').classList.add('closed');
      } else {
        document.querySelector('#sample-comp').classList.remove('full');
        document.querySelector('#sample-dynamic').classList.remove('full');
        document.querySelector('#sample-specs').classList.remove('closed');
      }
    },

    updateDemoSwitch(e) {
      let demoComponent = document.querySelector('#demo-component');
      if (e.detail.value === 'on') {
        demoComponent[e.target.id] = true;
      } else {
        demoComponent[e.target.id] = false;
      }
    },

    updateDemoField(e) {
      let demoComponent = document.querySelector('#demo-component');
      demoComponent[e.target.id] = e.detail.value;
    },

    updateDemoFieldArray(e) {
      if (e.detail.value === undefined) {
        return;
      }
      let demoComponent = document.querySelector('#demo-component');
      let propName = e.target.id;
      let arrayList = demoComponent[propName];
      let arrayLen = 0;
      if (arrayList) {
        arrayLen = arrayList.length;
        arrayList = [...arrayList, e.detail.value];
      } else {
        arrayList = [e.detail.value];
      }

      for (let endFor = false; endFor === false; ) {
        var newEntryId = '' + e.target.id + '-' + arrayLen;
        let existingEl = document.querySelector('#' + newEntryId);
        if (!existingEl) {
          endFor = true;
        } else {
          arrayLen += 1;
        }
      }

      let newEntry =
        '<wup-button data-id="' +
        e.target.id +
        '" id="' +
        newEntryId +
        '" style="--kup-display-mode: inline-block;" flat icon="remove" label="' +
        e.detail.value +
        '"></wup-button>';
      demoComponent[propName] = arrayList;
      e.target.insertAdjacentHTML('beforebegin', newEntry);
      e.target.initialValue = '';
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

    tabSelection(e) {
      let demoComponent = document.querySelector('#demo-component');
      let i = e.detail.index;
      this.handleTab(demoComponent, i);
    },

    handleTab(demoComponent, i) {
      let propsTab = document.querySelector('#props-tab');
      let eventsTab = document.querySelector('#events-tab');
      let htmlTab = document.querySelector('#html-tab');
      let jsonTab = document.querySelector('#json-tab');
      let cssTab = document.querySelector('#css-tab');

      propsTab.setAttribute('style', 'display: none;');
      eventsTab.setAttribute('style', 'display: none;');
      htmlTab.setAttribute('style', 'display: none;');
      jsonTab.setAttribute('style', 'display: none;');
      cssTab.setAttribute('style', 'display: none;');

      switch (this.demoTabs[i].text) {
        case 'Props':
          propsTab.setAttribute('style', '');
          break;
        case 'Events':
          eventsTab.setAttribute('style', '');
          break;
        case 'HTML':
          htmlTab.setAttribute('style', '');
          htmlTab.querySelector('.code-word').innerText =
            demoComponent.outerHTML;
          htmlTab.querySelector('.code-word').innerText = htmlTab
            .querySelector('.code-word')
            .innerText.replace('id="demo-component"', '');
          htmlTab.querySelector('.code-word').innerText = htmlTab
            .querySelector('.code-word')
            .innerText.replace('class="hydrated"', '');
          htmlTab.querySelector('.code-word').innerText = htmlTab
            .querySelector('.code-word')
            .innerText.replace(/=""/g, '');
          break;
        case 'JSON':
          jsonTab.setAttribute('style', '');
          break;
        case 'CSS':
          cssTab.setAttribute('style', '');
          break;
      }
    },

    jsonSetSwitch() {
      let jsonSetter = document.querySelector('#json-setter');
      let jsonSetterOpener = document.querySelector('#json-setter-opener');
      let jsonTab = document.querySelector('#json-tab');
      if (jsonSetter.classList.contains('shown')) {
        jsonSetter.classList.remove('shown');
        jsonTab.classList.remove('padded');
        jsonSetterOpener.classList.add('shown');
      } else {
        jsonSetter.classList.add('shown');
        jsonTab.classList.add('padded');
        jsonSetterOpener.classList.remove('shown');
      }
    },

    cssSetSwitch() {
      let cssSetter = document.querySelector('#css-setter');
      let cssSetterOpener = document.querySelector('#css-setter-opener');
      let cssTab = document.querySelector('#css-tab');
      if (cssSetter.classList.contains('shown')) {
        cssSetter.classList.remove('shown');
        cssTab.classList.remove('padded');
        cssSetterOpener.classList.add('shown');
      } else {
        cssSetter.classList.add('shown');
        cssTab.classList.add('padded');
        cssSetterOpener.classList.remove('shown');
      }
    },

    jsonSet(e) {
      let jsonProp = e.detail.value;
      let demoComponent = document.querySelector('#demo-component');
      demoComponent.currentJSONprop = jsonProp;
      let jsonData = demoComponent[jsonProp];
      let stringifiedJSON = JSON.stringify(jsonData, null, 2);
      let jsonTextarea = document.querySelector('#json-textarea');
      let codemirrorTextarea = document.querySelector('#json-tab .CodeMirror');
      jsonTextarea.value = stringifiedJSON;
      if (codemirrorTextarea) {
        codemirrorTextarea.remove();
      }
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
        let prop = demoComponent.currentJSONprop;
        demoComponent[prop] = jsonifiedData;
      });
    },

    cssSet(e) {
      let cssProp = e.detail.value;
      let demoComponent = document.querySelector('#demo-component');
      demoComponent.currentCSSprop = cssProp;
      let cssData = demoComponent[cssProp];
      let cssTextarea = document.querySelector('#css-textarea');
      let codemirrorTextarea = document.querySelector('#css-tab .CodeMirror');
      cssTextarea.value = cssData;
      if (codemirrorTextarea) {
        codemirrorTextarea.remove();
      }
      CodeMirror.fromTextArea(cssTextarea, {
        mode: { name: 'text/css' },
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      }).on('change', function(cm) {
        cm.save();
        let demoComponent = document.querySelector('#demo-component');
        let prop = demoComponent.currentCSSprop;
        demoComponent[prop] = cssTextarea.value;
      });
    },
  },

  mounted() {
    this.initEvents();
    this.initDefaults();
  },
};
</script>
