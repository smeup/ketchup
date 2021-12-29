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
        <span class="code-word">Magic Box</span><br />
        Magic box is a component that basically works as a drop area for
        objects.<br />This component will be created by invoking the method
        <span class="code-word">showMagicBox</span> and destroyed by invoking
        the method <span class="code-word">hideMagicBox</span>. It's also
        possible to use the <span class="code-word">toggleMagicBox</span> method
        to just invert its current state. <br />Click on the button below to
        enable the magic box!
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            id="toggle-magic-box"
            label="Toggle Magic Box"
            @kup-button-click="toggleMagicBox"
          ></kup-button>
        </div>
        <div>Drag us inside the Magic Box!</div>
        <div class="cells-container">
          <kup-cell drag-enabled :data.prop="cellData0"></kup-cell>
          <kup-cell drag-enabled :data.prop="cellData1"></kup-cell
        ></div>
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
      </p>
      <kup-card
        id="string-finder-card"
        layout-family="free"
        size-x="300px"
        size-y="auto"
      ></kup-card>
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
    return {
      cellData0: {
        obj: {
          t: 'D8',
          p: '*YYMD',
          k: '20211101',
        },
        icon: 'calendar',
        value: '2021-11-01',
        title: 'Drag me!',
      },
      cellData1: {
        cssClass: 'c-right-aligned',
        obj: {
          t: 'NR',
          p: '',
          k: '500',
        },
        icon: 'chart-bar',
        value: '500',
        title: 'Drag me!',
      },
    };
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
    /**
     * Toggles the kup-manager Magic Box.
     */
    toggleMagicBox() {
      dom.ketchup.toggleMagicBox();
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
.cells-container {
  display: flex;
  margin: auto;
  width: 24em;

  kup-cell {
    margin: 1em;
  }
}

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
