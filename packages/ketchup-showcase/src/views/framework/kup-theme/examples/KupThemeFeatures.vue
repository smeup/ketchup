<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(component): void</span><br />
            Registers a KupComponent in KupTheme, in order to be properly
            refreshed whenever the theme changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            registered.<br /> </p
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">getThemes(): string[]</span><br />
            Gets the name of available themes.<br /> </p
        ></div>
        <div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">set(theme, list?): void</span><br />
            Sets the given theme, if it doesn't exist it falls back to the
            default, which is
            <span class="code-word">ketchup</span>.<br /><br />
            - <strong>theme (string)</strong> - Name of the theme to set.<br />
            - <strong>list (KupThemeJSON)</strong> - Custom JSON from where the
            theme should be fetched.<br /><br />Below the list of themes fetched
            through the
            <span class="code-word">getThemes</span> method.<br />Click on the
            badges to check the result, they will
            <span class="code-word">set</span> the related theme!
          </p>
          <div class="demo-container">
            <kup-grid
              id="theme-container"
              class="kup-container"
            ></kup-grid> </div
        ></div>
        <div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">refresh(): void</span><br />
            This method will just refresh the current theme.<br /> </p
        ></div>
        <div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">colorContrast(color): string</span><br />
            Checks whether on a given color the text should be white or black,
            which are the values returned by this method.<br /><br />
            - <strong>color (string)</strong> - Color to check. Can be hex or
            rgb values.<br /> </p
        ></div>
        <div class="accordion-slot" slot="6">
          <p>
            <span class="code-word">randomColor(brightness): string</span><br />
            Generates a random HEX color.<br /><br />
            - <strong>brightness (number)</strong> - Brightness of the color
            generated (0-255).<br /><br />Below a brightness selector to test
            out this functionality. <br />The text displayed should always be
            readable thanks to <span class="code-word">colorContrast</span>.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="brightness-selector"
                @kup-textfield-input="randomColor"
              ></kup-text-field>
            </div>
            <div id="random-area">Random background with readable text!</div>
          </div></div
        >
        <div class="accordion-slot" slot="7">
          <p>
            <span class="code-word">randomTheme(): void</span><br />
            Sets a random theme different from the currently used one (excluding
            "print").<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-button
                icon="style"
                id="random-theme"
                label="Randomize"
                styling="outlined"
                @kup-button-click="randomTheme"
              ></kup-button>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="8">
          <p>
            <span class="code-word">colorCheck(color): KupThemeColor</span
            ><br />
            Returns HEX, RGB, HSL, HSL values and RGB values from a given
            color.<br /><br />
            - <strong>color (string)</strong> - Input color.<br />
          </p>
          <div class="demo-container">
            <div
              class="kup-container"
              style="flex-direction: column; overflow: auto"
            >
              <kup-data-table
                id="color-check-table"
                @kup-cell-update="(e) => updateColorTable(e)"
              ></kup-data-table>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="9">
          <p>
            <span class="code-word">unregister(component): void</span><br />
            Unregisters a KupComponent, so it won't be refreshed when the theme
            changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            unregistered.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupTextFieldEventPayload } from '@sme.up/ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';
import { FCellEventPayload } from '@sme.up/ketchup/dist/types/f-components/f-cell/f-cell-declarations';
import { KupThemeColor } from '@sme.up/ketchup/dist/types/managers/kup-theme/kup-theme-declarations';
import {
  KupDataColumn,
  KupDataRow,
} from '@sme.up/ketchup/src/managers/kup-data/kup-data-declarations';
import { KupDataCell } from '@sme.up/ketchup/dist/types/managers/kup-data/kup-data-declarations';

var accordion: HTMLKupAccordionElement = null;
var brightnessSelector: HTMLKupTextFieldElement = null;
var colorCheckTable: HTMLKupDataTableElement = null;
var randomArea: HTMLElement = null;
var themeContainer: HTMLKupGridElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupThemeFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      brightnessSelector = document.querySelector('#brightness-selector');
      colorCheckTable = document.querySelector('#color-check-table');
      randomArea = document.querySelector('#random-area');
      themeContainer = document.querySelector('#theme-container');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      accordion.data = {
        columns: [
          {
            name: '1',
            title: 'register',
          },
          {
            name: '2',
            title: 'getThemes',
          },
          {
            name: '3',
            title: 'set',
          },
          {
            name: '4',
            title: 'refresh',
          },
          {
            name: '5',
            title: 'colorContrast',
          },
          {
            name: '6',
            title: 'randomColor',
          },
          {
            name: '7',
            title: 'randomTheme',
          },
          {
            name: '8',
            title: 'colorCheck',
          },
          {
            name: '9',
            title: 'unregister',
          },
        ],
      };
      const randomColor = dom.ketchup.theme.randomColor(0);
      const themes = dom.ketchup.theme.getThemes();
      for (let index = 0; index < themes.length; index++) {
        const theme = themes[index];
        const variables = dom.ketchup.theme.list[theme].cssVariables;
        const themeWrapper = document.createElement('div');
        const themeImage = document.createElement('kup-image');
        const themeText = document.createElement('div');
        const setTheme = this.setTheme;
        (themeWrapper as any).span = 2;
        (themeWrapper as any).slot = index;
        themeWrapper.classList.add('icon-wrapper');
        themeWrapper.classList.add('theme-wrapper');
        themeWrapper.style.backgroundColor =
          variables['--kup-background-color'];
        themeWrapper.style.borderColor = variables['--kup-border-color'];
        themeWrapper.id = theme;
        themeWrapper.title = 'Toggle ' + theme + ' theme';
        themeWrapper.onclick = () => setTheme(theme);
        themeImage.color = variables['--kup-primary-color'];
        themeImage.sizeX = '70px';
        themeImage.sizeY = '70px';
        themeImage.resource = 'widgets';
        themeText.classList.add('icon-label');
        themeText.innerText = theme;
        themeText.style.color = variables['--kup-text-color'];
        themeText.style.letterSpacing = '1.5px';
        themeText.style.fontFamily = variables['--kup-font-family'];
        themeText.style.fontSize = variables['--kup-font-size'];
        themeWrapper.append(themeImage);
        themeWrapper.append(themeText);
        themeContainer.append(themeWrapper);
      }
      brightnessSelector.initialValue = '0';
      brightnessSelector.inputType = 'number';
      brightnessSelector.label = 'Brightness';
      brightnessSelector.max = 255;
      brightnessSelector.min = 0;
      randomArea.style.background = randomColor;
      randomArea.style.color = dom.ketchup.theme.colorContrast(randomColor);
      const initialColor = '#a61a2f';
      const colorCheck = dom.ketchup.theme.colorCheck(initialColor);
      this.setColorCheckData(colorCheck);
      colorCheckTable.editableData = true;
      colorCheckTable.enableColumnsFormula = false;
      colorCheckTable.fixedColumns = 1;
      colorCheckTable.scrollOnHover = true;
      colorCheckTable.selection = 'none' as any;
      colorCheckTable.showFilters = true;
      colorCheckTable.showGrid = 'Complete' as any;
      accordion.expandAll();
    },
    /**
     * Generates a random color and sets the text to be readable.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Change event of the text field.
     */
    randomColor(e: CustomEvent<KupTextFieldEventPayload>) {
      const brightness = parseInt(e.detail.value);
      const background = dom.ketchup.theme.randomColor(brightness);
      randomArea.style.background = background;
      randomArea.style.color = dom.ketchup.theme.colorContrast(background);
    },
    /**
     * Sets a random theme.
     */
    randomTheme() {
      dom.ketchup.theme.randomTheme();
    },
    /**
     * Updates the color checker data table with the values of the colorCheck result.
     * @param {KupThemeColor} colorCheck - Resulting values of the colorCheck method.
     */
    setColorCheckData(colorCheck: KupThemeColor) {
      const keys = Object.keys(colorCheck);
      const columns: KupDataColumn[] = [
        {
          name: 'RESULT',
          size: '32px',
          title: '',
        },
        {
          name: 'TYPE',
          title: 'Type a color',
        },
      ];
      const rows: KupDataRow[] = [];
      const row: KupDataRow = {
        cells: {
          RESULT: {
            styleContent: {
              backgroundColor: 'var(--result)',
              borderRadius: '4px',
              height: '24px',
              margin: 'auto',
            },
            value: '',
          },
          TYPE: {
            data: {
              label: 'Color',
            },
            isEditable: true,
            style: { borderRight: '1px solid var(--kup-border-color)' },
            value: colorCheck.hexColor,
          },
        },
      };
      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const column: KupDataColumn = {
          name: key.toUpperCase(),
          title: key,
        };
        columns.push(column);
        const cell: KupDataCell = {
          value: colorCheck[key],
        };
        row.cells[key.toUpperCase()] = cell;
      }
      rows.push(row);
      colorCheckTable.data = {
        columns: columns,
        rows: rows,
      };
      colorCheckTable.style.setProperty(
        '--result',
        colorCheck.hexColor ? colorCheck.hexColor : 'transparent'
      );
    },
    /**
     * Sets the given theme.
     * @param {string} theme - Name of the theme to set.
     */
    setTheme(theme: string) {
      dom.ketchup.theme.set(theme);
    },
    /**
     * Sets the given theme.
     * @param {string} theme - Name of the theme to set.
     */
    updateColorTable(e: CustomEvent<FCellEventPayload>) {
      const value = e.detail.cell.value;
      const color = dom.ketchup.theme.colorCheck(value);
      this.setColorCheckData(color);
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
  },
};
</script>

<style scoped lang="scss">
#random-area {
  border: 1px solid var(--kup-border-color);
  margin: 0.25em auto 5em auto;
  padding: 1em;
  width: 18em;
}

#theme-container {
  padding: 0;
}
</style>
