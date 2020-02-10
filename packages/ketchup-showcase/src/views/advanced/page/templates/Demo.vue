<template>
  <div id="sample-wrapper" class="detached">
    <div id="sample-modal"></div>
    <div id="sample-specs">
      <wup-tab-bar
        @kupTabBarClick="tabSelection"
        :items.prop="items"
      ></wup-tab-bar>
      <div id="sample-specs-container">
        <table
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
          <tbody
            ><tr v-for="(propList, i) in demoProps" :key="i">
              <td class="prevent-cr"
                ><span class="code-word">{{ propList.prop }}</span></td
              >
              <td>{{ propList.description }}</td>
              <td class="prevent-cr"
                ><span class="code-word">{{ propList.type }}</span></td
              >
              <td class="prevent-cr"
                ><span class="code-word">{{ propList.default }}</span></td
              >
              <td v-if="propList.try === 'switch'">
                <wup-switch
                  v-bind:id="propList.prop"
                  @kupSwitchChange="updateDemoSwitch"
                ></wup-switch
              ></td>
              <td v-if="propList.try === 'field'">
                <wup-text-field
                  fullwidth
                  v-bind:id="propList.prop"
                  @kupTextFieldInput="updateDemoField"
                ></wup-text-field
              ></td> </tr
          ></tbody>
        </table>
        <table
          v-if="demoEvents !== null"
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
          <tbody
            ><tr v-for="(eventList, j) in demoEvents" :key="j">
              <td class="prevent-cr"
                ><span class="code-word">{{ eventList.name }}</span></td
              >
              <td class="prevent-cr"
                ><span class="code-word">{{ eventList.type }}</span></td
              >

              <td>
                <div v-bind:id="eventList.refId" class="code-word"></div>
              </td> </tr
          ></tbody>
        </table>
        <div
          v-if="hasHTML === true"
          class="sample-section html-section"
          style="display: none;"
        >
          <div class="code-word sample-html"></div>
          <wup-button
            @kupButtonClick="copyHtml"
            id="copy-html"
            icon="file_copy"
            title="Copy HTML markup"
          ></wup-button>
        </div>
        <div
          v-if="hasJSON === true"
          id="json-tab"
          class="sample-section padded"
          style="display: none;"
        >
          <textarea id="json-textarea" style="display: none;"></textarea>
          <wup-text-field
            class="shown"
            label="Prop"
            helper="i.e.: data"
            id="json-setter"
            icon="close"
            trailingicon
            helperwhenfocus
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
      </div>
    </div>
    <div id="sample-comp">
      <div v-html="demoComp" id="sample-comp-wrapper"> </div>
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
</template>

<script>
export default {
  props: {
    giturl: String,
    headtitle: String,
    titles: Array,
    items: Array,
    demoComp: String,
    demoProps: Array,
    demoEvents: Array,
    hasHTML: Boolean,
    hasJSON: Boolean,
  },
  methods: {
    initEvents() {
      let demoComponent = document.querySelector('#demo-component');
      for (var i = 0; i < this.demoEvents.length; i++) {
        demoComponent.addEventListener(this.demoEvents[i].name, (e) =>
          this.handleEvent(e)
        );
      }
    },

    handleEvent(e) {
      var d = new Date();
      console.log(e);
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
        document.querySelector('#sample-specs').classList.add('closed');
      } else {
        document.querySelector('#sample-comp').classList.remove('full');
        document.querySelector('#sample-specs').classList.remove('closed');
      }
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

    tabSelection(e) {
      let tabCollection = document.querySelectorAll('.sample-section');
      let demoComponent = document.querySelector('#demo-component').outerHTML;
      let tabHTML = null;

      for (let j = 0; j < tabCollection.length; j++) {
        if (tabCollection[j].classList.contains('html-section')) {
          tabHTML = tabCollection[j];
        }
      }

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
              .innerText.replace(/=""/g, '');
          }
        } else {
          tabCollection[i].setAttribute('style', 'display: none;');
        }
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

    jsonSet(e) {
      let jsonProp = e.detail.value;
      let demoComponent = document.querySelector('#demo-component');
      let jsonData = demoComponent[jsonProp];
      let stringifiedJSON = JSON.stringify(jsonData, null, 2);
      let jsonTextarea = document.querySelector('#json-textarea');
      let codemirrorTextarea = document.querySelector('.CodeMirror');
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
        demoComponent.data = jsonifiedData;
      });
    },
  },

  mounted() {
    this.initEvents();
  },
};
</script>
