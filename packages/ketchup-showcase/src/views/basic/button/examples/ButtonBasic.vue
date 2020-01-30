<template>
  <div>
    <div id="sample-wrapper">
      <div id="sample-specs">
        <wup-tab-bar @kupTabBarClick="tabSelection" :items.prop="items"></wup-tab-bar>
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
                  <span class="code-word">label</span>
                </td>
                <td>
                  The button's text. If no value is specified, the button will
                  render as an icon button, in this variant specifying an icon
                  is mandatory.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">null</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    icon="edit"
                    id="label"
                    fullheight
                    initialvalue="Demo"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">disabled</span>
                </td>
                <td>Sets the component to disabled state.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="disabled" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">transparent</span>
                </td>
                <td>The button will be rendered with an outlined style.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="transparent" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">flat</span>
                </td>
                <td>The button will be rendered as flat text.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="flat" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">rounded</span>
                </td>
                <td>The button's border will be shaped.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="rounded" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">icon</span>
                </td>
                <td>
                  The button will be rendered with the specified Material Design
                  icon.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">null</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    fullheight
                    icon="edit"
                    id="icon"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">trailingicon</span>
                </td>
                <td>The button will display its associated icon after the text.</td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="trailingicon" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">toggable</span>
                </td>
                <td>
                  Icon button variant only. The icon button supports the
                  toggable state, switching between ON and OFF.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="toggable" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">checked</span>
                </td>
                <td>
                  Icon button variant only. The toggable icon button state will
                  be initialized to ON.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">boolean</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">false</span>
                </td>
                <td class="switch-cell">
                  <wup-switch id="checked" @kupSwitchChange="updateDemoSwitch"></wup-switch>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">iconoff</span>
                </td>
                <td>
                  Toggable icon button variant only. By default, the off state
                  will be displayed as an outlined version of the icon prop. By
                  setting this prop with a Material Design icon, the off state
                  will show this icon instead.
                </td>
                <td class="prevent-cr">
                  <span class="code-word">string</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">null</span>
                </td>
                <td class="text-cell">
                  <wup-text-field
                    icon="edit"
                    fullheight
                    id="iconoff"
                    @kupTextFieldInput="updateDemoField"
                  ></wup-text-field>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="display: none;" class="instruction-table sample-section">
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
                  <span class="code-word">kupButtonClick</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">click</span>
                </td>
                <td>
                  <div id="onclick" class="code-word"></div>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">kupButtonChange</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">change</span>
                </td>
                <td>
                  <div id="onchange" class="code-word"></div>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">kupButtonInput</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">input</span>
                </td>
                <td>
                  <div id="oninput" class="code-word"></div>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">kupButtonFocus</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">focus</span>
                </td>
                <td>
                  <div id="onfocus" class="code-word"></div>
                </td>
              </tr>
              <tr>
                <td class="prevent-cr">
                  <span class="code-word">kupButtonBlur</span>
                </td>
                <td class="prevent-cr">
                  <span class="code-word">blur</span>
                </td>
                <td>
                  <div id="onblur" class="code-word"></div>
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
            <wup-text-field
              fullwidth
              fullheight
              textarea
              disabled
              initialvalue="This component does not require a JSON to work."
            ></wup-text-field>
          </div>
        </div>
      </div>
      <div id="sample-comp">
        <div id="sample-comp-wrapper">
          <wup-button
            @kupButtonClick="logClick"
            @kupButtonChange="logChange"
            @kupButtonFocus="logFocus"
            @kupButtonBlur="logBlur"
            @kupButtonInput="logInput"
            id="demo-component"
            label="Demo"
          ></wup-button>
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
            title="Increase/decrease demo size"
          ></wup-button>
          <wup-button
            @kupButtonClick="splitView"
            id="view-splitter"
            toggable
            style="--kup-main-color: var(--kup-text-on-main-color); width: fit-content; margin: auto;"
            icon="flip"
            iconoff="view_agenda"
            title="Split/detach view"
          ></wup-button>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        Buttons consist in the main way in which a user interacts with the
        software.
      </p>
      <p>
        Sometimes, in tightly designed interfaces, there is no place for text.
        In this case it's advised to use icon buttons.
      </p>
      <p>
        The most basic button is a plain text one. In order to render it, you
        need to specify the
        <span
          class="code-word"
        >label</span> attribute followed by its value.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic',
  methods: {
    copyHtml(e) {
      let text = document.querySelector('.code-word.sample-html').innerText;
      navigator.clipboard.writeText(text);
    },
    swapView(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-comp').classList.add('bigger');
        document.querySelector('#sample-specs').classList.add('smaller');
      } else {
        document.querySelector('#sample-comp').classList.remove('bigger');
        document.querySelector('#sample-specs').classList.remove('smaller');
      }
    },
    splitView(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#sample-wrapper').classList.add('detached');
      } else {
        document.querySelector('#sample-wrapper').classList.remove('detached');
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
    logChange(e) {
      var d = new Date();
      document.querySelector('#onchange').innerText =
        'Changed! Event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },
    logFocus(e) {
      var d = new Date();
      document.querySelector('#onfocus').innerText =
        'Focused! Event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },
    logBlur(e) {
      var d = new Date();
      document.querySelector('#onblur').innerText =
        'Blurred! Event fired at ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
    },
    updateDemoSwitch(e) {
      if (e.detail.value === 'on') {
        document.querySelector('#demo-component').setAttribute(e.target.id, '');
      } else {
        document.querySelector('#demo-component').removeAttribute(e.target.id);
      }
    },
    updateDemoField(e) {
      if (e.detail.value !== '') {
        document
          .querySelector('#demo-component')
          .setAttribute(e.target.id, e.detail.value);
      } else {
        document.querySelector('#demo-component').removeAttribute(e.target.id);
      }
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
  },
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
    };
  },
};
</script>
