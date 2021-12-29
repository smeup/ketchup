<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">setLocale(locale: string): void</span><br />
        You can change the current locale of the library by invoking the
        <span class="code-word">setLocale</span> method. It receives as an
        argument one of the supported locales, which are: <br /><br />-
        <strong>cn</strong> (Chinese)<br />-
        <strong>en</strong> (English)<br />-
        <strong>es</strong> (Spanish)<br />- <strong>fr</strong> (French)<br />-
        <strong>it</strong> (Italian)<br />- <strong>pl</strong> (Polish)<br />-
        <strong>ru</strong> (Russian)<br /><br />Try it yourself and see how
        changing the locale affects the date picker.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-combobox
            id="language-selector"
            is-select
            @kup-combobox-change="updateLocale"
          ></kup-combobox>
          <kup-date-picker :initialValue.prop="getToday()"></kup-date-picker>
        </div>
      </div>
      <p>
        <span class="code-word">getLocale(): string</span><br />
        This method returns the current locale of the library.<br /><br />
      </p>
      <p>
        <span class="code-word">getLocales(): string[]</span><br />
        Returns an array containing all the supported locales.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip id="locales"></kup-chip>
        </div>
      </div>
      <p>
        <span class="code-word"
          >format(input: dayjs.ConfigType, format?: string): string</span
        ><br />
        Formats the given input date to the specified output.<br /><br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import { KupListData } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import { FChipData } from '@sme.up/ketchup/dist/types/f-components/f-chip/f-chip-declarations';

var combobox: HTMLKupComboboxElement = null;
var localesChip: HTMLKupChipElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupDatesFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      combobox = document.querySelector('#language-selector');
      localesChip = document.querySelector('#locales');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      const locales: string[] = dom.ketchup.dates.getLocales();
      const localesChipData: FChipData[] = [];
      const localesListData: KupListData[] = [];
      for (let index = 0; index < locales.length; index++) {
        localesChipData.push({
          label: locales[index],
          value: locales[index],
        });
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
      localesChip.data = localesChipData;
    },
    /**
     * Gets today's date.
     *  @returns {string} Today date as an ISO string.
     */
    getToday(): string {
      const today = new Date();
      return today.toISOString();
    },
    /**
     * Updates the library localization.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new localization is set.
     */
    updateLocale(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.setLibraryLocalization(e.detail.value);
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

<style lang="scss">
#language-selector {
  margin-right: 1em;
}
</style>
