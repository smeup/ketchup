<template>
  <div>
    <p>The Btn component purpose is to provide a simple and powerful way to manage many button components</p>

    <h3>Playground</h3>
    <div class="BTN">
      <div class="btn-options">
        <div>
          <kup-checkbox
            label="Show text"
            leading-label
            checked
            name="btn-showtext"
            id="btn-showtext"
            @kupCheckboxChange="toggleBtnShowtext"
          />
          <!--

          <label for="btn-showtext">Show text</label>
          <input
            type="checkbox"
            checked
            name="btn-showtext"
            id="btn-showtext"
            @change="toggleBtnShowtext"
          />
          -->
        </div>

        <div>
          <label for="btn-fillspace">Fillspace</label>
          <input
            type="checkbox"
            name="btn-fillspace"
            id="btn-fillspace"
            @change="toggleBtnFillspace"
          />
        </div>

        <div>
          <label for="btn-horizontal">Horizontal</label>
          <input
            type="checkbox"
            checked
            name="btn-horizontal"
            id="btn-horizontal"
            @change="toggleBtnHorizontal"
          />
        </div>

        <div>
          <label for="btn-showicon">Show icon</label>
          <input
            type="checkbox"
            checked
            name="btn-showicon"
            id="btn-showicon"
            @change="toggleBtnShowicon"
          />
        </div>

        <div>
          <label for="btn-rounded">Rounded</label>
          <input type="checkbox" name="btn-rounded" id="btn-rounded" @change="toggleBtnRounded" />
        </div>

        <div>
          <label for="btn-hinttextmode">TextMode='Hint'</label>
          <input
            type="checkbox"
            name="btn-hinttextmode"
            id="btn-hinttextmode"
            @change="toggleBtnTextModeHint"
          />
        </div>

        <div>
          <label for="btn-transparent">Transparent</label>
          <input
            type="checkbox"
            name="btn-transparent"
            id="btn-transparent"
            @change="toggleBtnTransparent"
          />
        </div>

        <div>
          <label for="btn-bordercolor">Border color</label>
          <input
            type="color"
            name="btn-bordercolor"
            id="btn-bordercolor"
            @change="onBorderColorChange"
          />
        </div>

        <div>
          <label for="btn-buttonclass">Button class</label>
          <select name="btn-buttonclass" id="btn-buttonclass" @change="onBorderButtonClassChange">
            <option value></option>
            <option value="btn-info">btn-info</option>
            <option value="btn-danger">btn-danger</option>
            <option value="btn-warning">btn-warning</option>
            <option value="btn-selected">btn-selected</option>
          </select>
        </div>

        <div>
          <label for="btn-flat">Flat</label>
          <input type="checkbox" name="btn-flat" id="btn-flat" @change="toggleBtnFlat" />
        </div>

        <div>
          <label for="btn-showselection">Show Selection</label>
          <input
            type="checkbox"
            name="btn-showselection"
            id="btn-showselection"
            @change="toggleBtnShowSelection"
          />
        </div>

        <div>
          <label for="btn-columns">Columns</label>
          <input type="number" name="btn-columns" id="btn-columns" @change="toggleBtnColumns" />
        </div>

        <div>
          <label for="btn-align">Align</label>
          <select name="btn-align" id="btn-align" @change="onBtnAlignChange">
            <option value></option>
            <option value="left">left</option>
            <option value="right">right</option>
          </select>
        </div>

        <div>
          <label for="btn-fontbold">Bold font</label>
          <input type="checkbox" name="btn-fontbold" id="btn-fontbold" @change="toggleBtnStyle" />
        </div>

        <div>
          <label for="btn-fontitalic">Italic font</label>
          <input type="checkbox" name="btn-fontitalic" id="btn-fontitalic" @change="toggleBtnStyle" />
        </div>

        <div>
          <label for="btn-fontunderline">Underline font</label>
          <input
            type="checkbox"
            name="btn-fontunderline"
            id="btn-fontunderline"
            @change="toggleBtnStyle"
          />
        </div>

        <div>
          <label for="btn-fontcolor">Font color</label>
          <input
            type="color"
            value="#FFFFFF"
            name="btn-fontcolor"
            id="btn-fontcolor"
            @change="toggleBtnStyle"
          />
        </div>

        <div>
          <label for="btn-bckcolor">Background color</label>
          <input
            type="color"
            value="#4e908f"
            name="btn-bckcolor"
            id="btn-bckcolor"
            @change="toggleBtnStyle"
          />
        </div>

        <div>
          <label for="btn-font">Font</label>
          <select name="btn-font" id="btn-font" @change="toggleBtnStyle">
            <option value></option>
            <option value="Verdana">Verdana</option>
            <option value="Courier">Courier</option>
          </select>
        </div>

        <div>
          <label for="btn-fontsize">Font size</label>
          <input id="btn-fontsize" type="number" @change="toggleBtnStyle" value="14" />
        </div>
      </div>

      <kup-btn :buttons.prop="btnlist" @kupBtnClick="onKupBtnClicked" />

      <code id="btn-label" v-text="labelText" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupBottoniera',
  data() {
    return {
      btnlist: btnlist.data,
      labelText: '',
    };
  },
  mounted() {},
  methods: {
    onKupBtnClicked(event) {
      const btnIndex = event.detail.id;
      const jsonBtn = JSON.stringify(this.btnlist[btnIndex]);
      this.labelText = `Hai premuto sul pulsante: ${jsonBtn} ed il suo indice e' ${btnIndex}`;
    },
    // Input methods
    toggleBtnFillspace(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = { ...btn.config, fillspace: event.target.checked };
    },

    toggleBtnShowtext(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        showtext: event.target.checked,
      };
    },

    toggleBtnHorizontal(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        horizontal: event.target.checked,
      };
    },

    toggleBtnShowicon(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        showicon: event.target.checked,
      };
    },

    toggleBtnRounded(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        rounded: event.target.checked,
      };
    },

    toggleBtnTextModeHint(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        textmode: event.target.checked ? 'Hint' : '',
      };
    },

    toggleBtnTransparent(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        transparent: event.target.checked,
      };
    },

    onBorderColorChange(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        borderColor: event.target.value,
      };
    },

    onBorderButtonClassChange(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        buttonClass: event.target.value,
      };
    },

    toggleBtnFlat(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        flat: event.target.checked,
      };
    },

    toggleBtnShowSelection(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        showSelection: event.target.checked,
      };
    },

    toggleBtnColumns(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        columns: event.target.value,
      };
    },

    onBtnAlignChange(event) {
      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        align: event.target.value,
      };
    },

    toggleBtnStyle() {
      const bold = document.querySelector('#btn-fontbold').checked;
      const italic = document.querySelector('#btn-fontitalic').checked;
      const underline = document.querySelector('#btn-fontunderline').checked;
      const fontColor = document.querySelector('#btn-fontcolor').value;
      const bckColor = document.querySelector('#btn-bckcolor').value;
      const font = document.querySelector('#btn-font').value;
      const fontsize = document.querySelector('#btn-fontsize').value;

      let btnStyle = {
        bold,
        italic,
        underline,
      };

      if (fontColor) {
        btnStyle.fontColor = fontColor;
      }

      if (bckColor) {
        btnStyle.bckColor = bckColor;
      }

      if (font) {
        btnStyle.fontName = font;
      }

      if (fontsize) {
        btnStyle.fontSize = '' + fontsize + 'px';
      }

      const btn = document.querySelector('kup-btn');
      btn.config = {
        ...btn.config,
        btnStyle,
      };
    },
  },
};

const btnlist = JSON.parse(`{
    "key": "i456",
    "options": {
      "BTN": {
        "": {
          "enableSort": true
        }
      }
    },
    "data": [{
      "label": "label bottone #1",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "account",
      "children": []
    },{
      "label": "label bottone #2",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    },{
      "label": "label bottone #3",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    },{
      "label": "label bottone #4",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    },{
      "label": "label bottone #5",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    },{
      "label": "label bottone #6",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    },{
      "label": "label bottone #7",
      "options (sarebbe il tasto destro)": true,
      "obj": "J1KEY",
      "icon": "plus",
      "children": []
    }],
    "messages": [],
    "actions": {
      "row": [
        {
          "exec": "...",
          "icon": "mdi-clock",
          "text": "Scheda orologio"
        }
      ],
      "global": [],
      "auto (tag action attuale)": [
        "F() / CLOSE / ETC...",
        "F() / CLOSE / ETC...",
        "F() / CLOSE / ETC...",
        "F() / CLOSE / ETC..."
      ],
      "command": [
        {
          "exec": "...",
          "icon": "mdi-play",
          "text": "Spotify"
        }
      ]
    },
    "variables": [],
    "dynamisms": []
  }`);
</script>

<style scoped lang="scss">
.options {
  margin-bottom: 1rem;
}

.btn-options {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
}

.BTN {
  display: block;
}
</style>