<template>
  <div>
    <div class="demo-wrapper"
      ><p>
        Besides the other manager classes, such as KupTheme and KupLanguage,
        there are additional features:<br /><br
      /></p>
      <p>
        <span class="code-word">Library Localization</span><br />
        It's possible to set both the locale and the language simultaneously by
        invoking the method
        <span class="code-word">setLibraryLocalization</span> with one of the
        supported values as argument, which are: <br /><br />-
        <strong>cn</strong> (Chinese)<br />-
        <strong>en</strong> (English)<br />-
        <strong>es</strong> (Spanish)<br />- <strong>fr</strong> (French)<br />-
        <strong>it</strong> (Italian)<br />- <strong>pl</strong> (Polish)<br />-
        <strong>ru</strong> (Russian)<br /><br />You can try it yourself by
        selecting a value from the combobox below, then check how the calendar
        changes.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <kup-combobox
            id="language-selector"
            is-select
            @kup-combobox-change="updateLocale"
          ></kup-combobox>
          <kup-calendar></kup-calendar>
        </div>
      </div>
      <p>
        <span class="code-word">String Finder</span><br />
        When a pointer event occurs,
        <span class="code-word">KupManager</span> analyzes whether the element
        clicked contains a string. If it does, an event will be fired containing
        the found string.<br />
        You can try it yourself by clicking anywhere and checking the card below
        (remember, a paragraph is a single HTML entity so expect a long text by
        clicking on one of them)!<br />
        <kup-card
          id="string-finder-card"
          layout-family="free"
          size-x="300px"
          size-y="auto"
        ></kup-card>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  KupDom,
  KupManagerStringFinderPayload,
} from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import { KupListData } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
var card: HTMLKupCardElement = null;
var combobox: HTMLKupComboboxElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupManagerFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      card = document.querySelector('#string-finder-card');
      combobox = document.querySelector('#language-selector');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      const locales: string[] = dom.ketchup.dates.getLocales();
      const localesListData: KupListData[] = [];
      for (let index = 0; index < locales.length; index++) {
        localesListData.push({
          text: locales[index],
          value: locales[index],
          selected: locales[index] === dom.ketchup.dates.locale ? true : false,
        });
      }
      combobox.data = {
        'kup-list': { data: localesListData },
        'kup-text-field': {
          label: 'Set the localization',
        },
      };
      combobox.initialValue = dom.ketchup.dates.locale;
    },
    /**
     * Updates the library localization.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new localization is set.
     */
    updateLocale(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.setLibraryLocalization(e.detail.value);
    },
    /**
     * Updates the string finder card when the event fires.
     * @param {CustomEvent<KupManagerStringFinderPayload>} e - Event fired when a new string is found.
     */
    updateCard(e: CustomEvent<KupManagerStringFinderPayload>) {
      while (card.firstChild) {
        card.removeChild(card.lastChild);
      }
      const div = document.createElement('div');
      div.classList.add('string');
      div.innerText = e.detail.string;
      card.appendChild(div);
      card.refresh();
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }

    document.addEventListener('kup-manager-stringfinder', this.updateCard);
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
    document.removeEventListener('kup-manager-stringfinder', this.updateCard);
  },
};
</script>

<style lang="scss">
#language-selector {
  margin-bottom: 1em;
}

#string-finder-card {
  margin: 2em auto;
}

.string {
  color: var(--kup-primary-color);
  font-size: var(--kup-font-size);
  max-height: 160px;
  overflow: auto;
}
</style>
