<template>
  <div>
    <div class="demo-wrapper">
      <p>Text field with Courier font.</p>
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
      <p>Flat button with underlined text.</p>
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
            custom-style="#kup-component .chip { background-color: blue !important; color: pink !important; } #kup-component .f-image__icon { background-color: pink !important; }"
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
            custom-style="#kup-component .chip-set__item:first-child .chip { background-color: blue !important; color: pink !important; } #kup-component .chip:first-child .f-image__icon{ background-color: pink !important; }"
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
            custom-style="#kup-component button { color: transparent; } #kup-component button:hover { color: var(--kup-text-on-primary-color); }"
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
            custom-style="#kup-component .checkbox.checkbox--checked .checkbox__background { animation: rotate 2s infinite; } @-webkit-keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }} @keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }}"
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
            custom-style="#kup-component .tab__text-label { font-style: italic; }"
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
            custom-style="#kup-component input { color: blue !important; font-weight: bold; }"
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
        <div
          class="kup-container"
          style="width: fit-content; margin-left: auto; margin-right: auto"
        >
          <kup-button
            custom-style="#kup-component { box-shadow: 0 0 0 purple; animation: pulse 2s infinite; border-radius: 4px; } #kup-component:hover { animation: none; } #kup-component button { background-color: purple; } @-webkit-keyframes pulse { 0% { -webkit-box-shadow: 0 0 0 0 purple; } 70% { -webkit-box-shadow: 0 0 5px 5px transparent; } 100% { -webkit-box-shadow: 0 0 0 0 transparent; }}@keyframes pulse { 0% { -moz-box-shadow: 0 0 0 0 purple; box-shadow: 0 0 0 0 purple; }  70% { -moz-box-shadow: 0 0 5px 5px transparent; box-shadow: 0 0 5px 5px transparent; }  100% { -moz-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }}"
            label="Pulsating"
          ></kup-button>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup9 }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>Button without the uppercase default.</p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            custom-style="#kup-component button { text-transform: unset; }"
            label="Standard case"
          ></kup-button>
        </div>
        <p class="centered">customStyle used</p>
        <code class="flat">{{ markup10 }}</code>
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
          icon: 'widgets',
          id: '1',
          value: "I'm blue.",
        },
        {
          icon: 'widgets',
          id: '2',
          value: 'Me too... sometimes.',
        },
      ],
      tabbarData: [
        {
          id: 'Tab 1',
          active: true,
          value: 'Tab1',
        },
        {
          id: 'Tab 2',
          value: 'Tab2',
        },
      ],
      markup1:
        '#kup-component input, #kup-component label{ font-family: Courier, sans-serif !important; }',
      markup2: '#kup-component button { text-decoration: underline; }',
      markup3:
        '#kup-component .chip { background-color: blue !important; color: pink !important; } #kup-component .f-image__icon { background-color: pink !important; }',
      markup4:
        '#kup-component .chip-set__item:first-child .chip { background-color: blue !important; color: pink !important; } #kup-component .chip:first-child .f-image__icon { background-color: pink !important; }',

      markup5:
        '#kup-component button { color: transparent; } #kup-component button:hover { color: var(--kup-text-on-primary-color); }',
      markup6:
        '#kup-component .checkbox.checkbox--checked .checkbox__background { animation: rotate 2s infinite; } @-webkit-keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }} @keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) }',
      markup7: '#kup-component .tab__text-label { font-style: italic; }',
      markup8:
        '#kup-component input { color: blue !important; font-weight: bold; }',
      markup9:
        '#kup-component { box-shadow: 0 0 0 purple; animation: pulse 2s infinite; border-radius: 4px; } #kup-component:hover { animation: none; } #kup-component button { background-color: purple; } @-webkit-keyframes pulse { 0% { -webkit-box-shadow: 0 0 0 0 purple; } 70% { -webkit-box-shadow: 0 0 5px 5px transparent; } 100% { -webkit-box-shadow: 0 0 0 0 transparent; }}@keyframes pulse { 0% { -moz-box-shadow: 0 0 0 0 purple; box-shadow: 0 0 0 0 purple; }  70% { -moz-box-shadow: 0 0 5px 5px transparent; box-shadow: 0 0 5px 5px transparent; }  100% { -moz-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }}',
      markup10: '#kup-component button { text-transform: unset; }',
    };
  },
};
</script>
