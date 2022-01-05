<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">register(component): void</span><br />
        Registers a KupComponent in KupTheme, in order to be properly refreshed
        whenever the theme changes.<br /><br />
        - <strong>component (any)</strong> - The Ketchup component to be
        registered.<br />
      </p>
      <p>
        <span class="code-word">getThemes(): string[]</span><br />
        Gets the name of available themes.<br />
      </p>
      <p>
        <span class="code-word">set(theme, list?): void</span><br />
        Sets the given theme, if it doesn't exist it falls back to the default,
        which is <span class="code-word">ketchup</span>.<br /><br />
        - <strong>theme (string)</strong> - Name of the theme to set.<br />
        - <strong>list (KupThemeJSON)</strong> - Custom JSON from where the
        theme should be fetched.<br /><br />Below the list of themes fetched
        through the <span class="code-word">getThemes</span> method.<br />Click
        on the badges to check the result, they will
        <span class="code-word">set</span> the related theme!
      </p>
      <div class="demo-container">
        <kup-grid id="theme-container" class="kup-container"></kup-grid>
      </div>
      <p>
        <span class="code-word">refresh(): void</span><br />
        This method will just refresh the current theme.<br />
      </p>
      <p>
        <span class="code-word">colorContrast(color): string</span><br />
        Checks whether on a given color the text should be white or black, which
        are the values returned by this method.<br /><br />
        - <strong>color (string)</strong> - Color to check. Can be hex or rgb
        values.<br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-color-picker
            id="contrast-selector"
            @kup-colorpicker-change="updateContrast"
          ></kup-color-picker>
        </div>
        <div id="contrast-area"
          >Text color set through the colorContrast method!</div
        >
      </div>
      <p>
        <span class="code-word">unregister(component): void</span><br />
        Unregisters a KupComponent, so it won't be refreshed when the theme
        changes.<br /><br />
        - <strong>component (any)</strong> - The Ketchup component to be
        unregistered.<br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import { KupColorPickerEventPayload } from '@sme.up/ketchup/dist/types/components/kup-color-picker/kup-color-picker-declarations';

var contrastSelector: HTMLKupColorPickerElement = null;
var contrastArea: HTMLKupColorPickerElement = null;
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
      contrastSelector = document.querySelector('#contrast-selector');
      contrastArea = document.querySelector('#contrast-area');
      themeContainer = document.querySelector('#theme-container');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
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
      contrastSelector.data = {
        'kup-text-field': {
          label: 'Pick a color!',
        },
      };
    },
    /**
     * Sets the given theme.
     * @param {string} theme - Name of the theme to set.
     */
    setTheme(theme: string) {
      dom.ketchup.theme.set(theme);
    },
    /**
     * Updates the contrast area's text.
     * @param {CustomEvent<KupColorPickerEventPayload>} e - Change event of the color picker.
     */
    updateContrast(e: CustomEvent<KupColorPickerEventPayload>) {
      const color = e.detail.value;
      contrastArea.style.background = color;
      contrastArea.style.color = dom.ketchup.theme.colorContrast(color);
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
#contrast-area {
  border: 1px solid var(--kup-border-color);
  margin: 0.25em auto 5em auto;
  padding: 1em;
  width: 18em;
}
</style>
