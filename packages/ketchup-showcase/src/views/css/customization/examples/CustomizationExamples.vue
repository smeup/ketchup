<template>
  <div>
    <div class="demo-wrapper">
      <p>Text field with Courier font. Both input and label elements were selected and the !important notation was used to override defaults.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            custom-style="#kup-component input, #kup-component label{ font-family: Courier, sans-serif !important; }"
            label="Courier font"
          ></kup-text-field>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup1 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Flat button with underlined text. No need for !important here because the text-decoration rule was not set by the component's default.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            flat
            custom-style="#kup-component button { text-decoration: underline; }"
            label="Underlined"
          ></kup-button>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup2 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Chips with blue background and pink text.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip
            :data.prop="chipData"
            custom-style="#kup-component .mdc-chip { background-color: blue !important; color: pink !important; } #kup-component .mdc-chip kup-image { --kup-icon-color: pink; }"
          ></kup-chip>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup3 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Only the first chip of the set has blue background and pink text.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip
            :data.prop="chipData"
            custom-style="#kup-component .mdc-chip:first-child { background-color: blue !important; color: pink !important; } #kup-component .mdc-chip:first-child kup-image { --kup-icon-color: pink; }"
          ></kup-chip>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup4 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Button with invisible text which shows itself only on mouse hover.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            custom-style="#kup-component button { color: transparent; } #kup-component button:hover { color: var(--kup-text-on-main-color); }"
            label="Now you see me"
          ></kup-button>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup5 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Checkbox rotating when checked.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-checkbox
            custom-style="#kup-component .mdc-checkbox.mdc-checkbox--checked .mdc-checkbox__background { animation: rotate 2s infinite; } @-webkit-keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }} @keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }"
            label="Check me and I spin"
          ></kup-checkbox>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup6 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Tab bar with labels in italic.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-tab-bar
            custom-style="#kup-component .mdc-tab__text-label { font-style: italic; }"
            :data.prop="tabbarData"
          ></kup-tab-bar>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup7 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Textfield with bold blue text.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            custom-style="#kup-component input { color: blue !important; font-weight: bold !important; }"
            initial-value="Blue and bold"
          ></kup-text-field>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup8 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Pulsating purple button which stops pulsating on mouse hover.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            custom-style="#kup-component { box-shadow: 0 0 0 purple; animation: pulse 2s infinite; border-radius: 4px; } #kup-component:hover { animation: none; } #kup-component button { background-color: purple; } @-webkit-keyframes pulse { 0% { -webkit-box-shadow: 0 0 0 0 purple; } 70% { -webkit-box-shadow: 0 0 5px 5px transparent; } 100% { -webkit-box-shadow: 0 0 0 0 transparent; }}@keyframes pulse { 0% { -moz-box-shadow: 0 0 0 0 purple; box-shadow: 0 0 0 0 purple; }  70% { -moz-box-shadow: 0 0 5px 5px transparent; box-shadow: 0 0 5px 5px transparent; }  100% { -moz-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }}"
            label="Pulsating"
          ></kup-button>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup9 }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizationExamples',
  data() {
    return {
      chipData: [
        {
          value: '1',
          icon: 'widgets',
          label: "I'm blue.",
          checked: false,
        },
        {
          value: '2',
          icon: 'widgets',
          label: 'Me too... sometimes.',
          checked: false,
        },
      ],
      tabbarData: [
        {
          text: 'Tab 1',
          icon: '',
          active: true,
        },
        {
          text: 'Tab 1',
          icon: '',
          active: false,
        },
      ],
      markup1:
        '#kup-component input, #kup-component label{ font-family: Courier, sans-serif !important; }',
      markup2: '#kup-component button { text-decoration: underline; }',
      markup3:
        '#kup-component .mdc-chip { background-color: blue !important; color: pink !important; } #kup-component kup-image { --kup-icon-color: pink; }',
      markup4:
        '#kup-component .mdc-chip:first-child { background-color: blue !important; color: pink !important; } #kup-component .mdc-chip:first-child kup-image { --kup-icon-color: pink; }',

      markup5:
        '#kup-component button { color: transparent; } #kup-component button:hover { color: var(--kup-text-on-main-color); }',
      markup6:
        '#kup-component .mdc-checkbox.mdc-checkbox--checked .mdc-checkbox__background { animation: rotate 2s infinite; } @-webkit-keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }} @keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }',
      markup7: '#kup-component .mdc-tab__text-label { font-style: italic; }',
      markup8:
        '#kup-component input { color: blue !important; font-weight: bold !important; }',
      markup9:
        '#kup-component { box-shadow: 0 0 0 purple; animation: pulse 2s infinite; border-radius: 4px; } #kup-component:hover { animation: none; } #kup-component button { background-color: purple; } @-webkit-keyframes pulse { 0% { -webkit-box-shadow: 0 0 0 0 purple; } 70% { -webkit-box-shadow: 0 0 5px 5px transparent; } 100% { -webkit-box-shadow: 0 0 0 0 transparent; }}@keyframes pulse { 0% { -moz-box-shadow: 0 0 0 0 purple; box-shadow: 0 0 0 0 purple; }  70% { -moz-box-shadow: 0 0 5px 5px transparent; box-shadow: 0 0 5px 5px transparent; }  100% { -moz-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }}',
    };
  },
};
</script>
