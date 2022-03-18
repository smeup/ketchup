<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(component): void</span><br />
            Registers a KupComponent in KupDates, in order to be automatically
            refreshed whenever the locale changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            registered.<br /> </p
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">setLocale(locale): void</span><br />
            You can change the current locale of the library by invoking the
            <span class="code-word">setLocale</span> method. It receives as an
            argument one of the supported locales, which are: <br /><br />-
            <strong>cn</strong> (Chinese)<br />-
            <strong>en</strong> (English)<br />-
            <strong>es</strong> (Spanish)<br />-
            <strong>fr</strong> (French)<br />-
            <strong>it</strong> (Italian)<br />-
            <strong>pl</strong> (Polish)<br />-
            <strong>ru</strong> (Russian)<br /><br />Try it yourself and see how
            changing the locale affects the date picker.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-combobox
                id="locale-selector"
                is-select
                @kup-combobox-change="updateLocale"
              ></kup-combobox>
              <kup-date-picker
                :initialValue.prop="getToday()"
              ></kup-date-picker>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">getLocale(): string</span><br />
            This method returns the current locale of the library.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">getLocales(): string[]</span><br />
            Returns an array containing all the supported locales.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-chip id="locales"></kup-chip>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">format(input, format?): string</span><br />
            Formats the given input date to the specified output.<br /><br />
            - <strong>input (dayjs.ConfigType)</strong> - Date to be
            formatted.<br />
            - <strong>format (string)</strong> - Output format.<br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="date-field"
                label="Date"
                @kup-textfield-input="(e) => formatResult(e.detail.value, null)"
              ></kup-text-field>
              <kup-text-field
                id="format-field"
                label="Format"
                @kup-textfield-input="(e) => formatResult(null, e.detail.value)"
              ></kup-text-field>
              <kup-text-field
                disabled
                id="result-field"
                label="Result"
              ></kup-text-field>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="6">
          <p>
            <span class="code-word"
              >isValid(date, format?, strict?): boolean</span
            ><br />
            Returns a boolean value which indicates whether the given argument
            is a valid date or not.<br /><br />
            - <strong>date (dayjs.ConfigType)</strong> - Date to be
            validated.<br />
            - <strong>format (string)</strong> - Format of the input date.<br />
            - <strong>strict (boolean)</strong> - Strict parsing requires that
            the format and input match exactly, including delimiters.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="7">
          <p>
            <span class="code-word">toDate(input, format?): Date</span><br />
            Returns a <span class="code-word">Date</span> object from the given
            argument. The format optional argument describes the format of the
            input if it's a string.<br /><br />
            - <strong>input (dayjs.ConfigType)</strong> - Input date.<br />
            - <strong>format (string)</strong> - Format of the input date.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="8">
          <p>
            <span class="code-word">normalize(input, type?): dayjs.Dayjs</span
            ><br />
            Returns a <span class="code-word">dayjs</span> object obtained by
            processing the input string.<br />
            For example, usually 6 digits dates are not valid. The normalize
            method will treat it to make it valid.The
            <span class="code-word">type</span> can be
            <span class="code-word">date</span>,
            <span class="code-word">time</span> or
            <span class="code-word">timestamp</span>.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="normalize-field"
                initial-value="010101"
                label="Date"
                @kup-textfield-input="
                  (e) => normalizeResult(e.detail.value, null)
                "
              ></kup-text-field>
              <kup-text-field
                disabled
                id="normalize-result-field"
                label="Normalized result"
              ></kup-text-field>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="9">
          <p>
            <span class="code-word">min(dates): dayjs.Dayjs</span><br />
            Returns the minimum date from an array of dates.<br /><br />
            - <strong>dates (dayjs.ConfigType[])</strong> - Array of dates.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="10">
          <p>
            <span class="code-word">max(dates): dayjs.Dayjs</span><br />
            Returns the maximum date from an array of dates.<br /><br />
            - <strong>dates (dayjs.ConfigType[])</strong> - Array of dates.<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="11">
          <p>
            <span class="code-word">add(input, value, unit?): dayjs.Dayjs</span
            ><br />
            Adds the given amount of time to the input date.<br /><br />
            - <strong>input (dayjs.ConfigType)</strong> - Input date.<br />
            - <strong>value (number)</strong> - The value of the addition (i.e.:
            7).<br />
            - <strong>unit (dayjs.OpUnitType)</strong> - The unit of the
            addition (i.e.: "year").<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="12">
          <p>
            <span class="code-word"
              >subtract(input, value, unit?): dayjs.Dayjs</span
            ><br />
            Subtracts the given amount of time from the input date.<br /><br />
            - <strong>input (dayjs.ConfigType)</strong> - Input date.<br />
            - <strong>value (number)</strong> - The value of the subtraction
            (i.e.: 7).<br />
            - <strong>unit (dayjs.OpUnitType)</strong> - The unit of the
            subtraction (i.e.: "year").<br /><br /> </p
        ></div>
        <div class="accordion-slot" slot="13">
          <p>
            <span class="code-word">unregister(component): void</span><br />
            Unregisters a KupComponent, so it won't be refreshed when the locale
            changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            unregistered.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupListNode } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import { KupChipNode } from '@sme.up/ketchup/dist/types/components/kup-chip/kup-chip-declarations';

var accordion: HTMLKupAccordionElement = null;
var combobox: HTMLKupComboboxElement = null;
var localesChip: HTMLKupChipElement = null;
var dateField: HTMLKupTextFieldElement = null;
var formatField: HTMLKupTextFieldElement = null;
var normalizeField: HTMLKupTextFieldElement = null;
var normalizeResultField: HTMLKupTextFieldElement = null;
var resultField: HTMLKupTextFieldElement = null;

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
      accordion = document.querySelector('#accordion');
      combobox = document.querySelector('#locale-selector');
      dateField = document.querySelector('#date-field');
      formatField = document.querySelector('#format-field');
      normalizeField = document.querySelector('#normalize-field');
      normalizeResultField = document.querySelector('#normalize-result-field');
      resultField = document.querySelector('#result-field');
      localesChip = document.querySelector('#locales');
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
            title: 'setLocale',
          },
          {
            name: '3',
            title: 'getLocale',
          },
          {
            name: '4',
            title: 'getLocales',
          },
          {
            name: '5',
            title: 'format',
          },
          {
            name: '6',
            title: 'isValid',
          },
          {
            name: '7',
            title: 'toDate',
          },
          {
            name: '8',
            title: 'normalize',
          },
          {
            name: '9',
            title: 'min',
          },
          {
            name: '10',
            title: 'max',
          },
          {
            name: '11',
            title: 'add',
          },
          {
            name: '12',
            title: 'subtract',
          },
          {
            name: '13',
            title: 'unregister',
          },
        ],
      };
      const locales: string[] = dom.ketchup.dates.getLocales();
      const localesChipData: KupChipNode[] = [];
      const localesListData: KupListNode[] = [];
      for (let index = 0; index < locales.length; index++) {
        localesChipData.push({
          id: locales[index],
          value: locales[index],
        });
        localesListData.push({
          id: locales[index],
          selected: locales[index] === dom.ketchup.dates.locale ? true : false,
          value: locales[index],
        });
      }
      combobox.data = {
        'kup-list': { data: localesListData },
        'kup-text-field': {
          label: 'Set locale',
        },
      };
      combobox.initialValue = dom.ketchup.dates.locale;
      localesChip.data = localesChipData;
      dateField.initialValue = this.getToday();
      formatField.initialValue = this.getLocaleFormat();
      this.formatResult();
      this.normalizeResult(normalizeField.initialValue);
      accordion.expandAll();
    },
    /**
     * Sets the value of the result field.
     * @param {string} dateValue - Present when this method is invoked by typing in the date field.
     * @param {string} formatValue - Present when this method is invoked by typing in the format field.
     * @returns {string} Locale format as string.
     */
    async formatResult(
      dateValue?: string,
      formatValue?: string
    ): Promise<void> {
      const date = dateValue ? dateValue : await dateField.getValue();
      const format = formatValue ? formatValue : await formatField.getValue();
      const result = dom.ketchup.dates.format(date, format);
      resultField.setValue(result);
    },
    /**
     * Gets the format of the date from the locale.
     * @returns {string} Locale format as string.
     */
    getLocaleFormat(): string {
      return (dom.ketchup.dates.dayjs as any).Ls[dom.ketchup.dates.locale]
        .formats.L;
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
     * Gets the values from text fields and the formats the output field.
     *  @returns {string} Locale format as string.
     */
    async normalizeResult(value?: string): Promise<void> {
      const result = dom.ketchup.dates.normalize(value).toISOString();
      normalizeResultField.setValue(result);
    },
    /**
     * Updates the library localization.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new localization is set.
     */
    updateLocale(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.dates.setLocale(e.detail.value);
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
kup-text-field,
kup-date-picker,
kup-combobox {
  margin: 0.5em !important;
}
</style>
