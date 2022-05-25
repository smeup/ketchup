<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(component): void</span><br />
            Registers a KupComponent in KupMath, in order to be automatically
            refreshed whenever the locale changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            registered.<br /> </p
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">setLocale(locale): void</span><br />
            Sets the locale of the numeral instance. The locales available must
            be tied to the KupDates locales.<br /><br />
            - <strong>locale (KupMathLocales)</strong> - Numeraljs locale
            string.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-combobox
                id="locale-input"
                is-select
                @kup-combobox-change="updateLocale"
              ></kup-combobox>
              <kup-text-field
                label="Result"
                disabled
                id="locale-output"
              ></kup-text-field>
            </div> </div></div
        ><div class="accordion-slot" slot="3">
          <p>
            <span class="code-word"
              >numberify(input, isInputLocalized?): number</span
            ><br />
            Returns a number from a non-specified input type between string,
            number, or String.<br /><br />
            - <strong>input (string | String | number)</strong> - Input value to
            numberify.<br />- <strong>isInputLocalized (boolean)</strong> -
            Numberifies assuming the input string is in the current KupMath
            locale's format.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="numberify-input"
                label="Type a string"
                @kup-textfield-input="updateNumberify"
              ></kup-text-field>
              <kup-text-field
                label="Numberified result"
                disabled
                id="numberify-output"
              ></kup-text-field>
            </div> </div></div
        ><div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">format(input, format): string</span><br />
            Formats the input number with the specified format of the currently
            set locale.<br /><br />
            - <strong>input (string | String | number)</strong> - Input number
            which will be automatically "numberified".<br />
            - <strong>format (string)</strong> - Desired format. Defaults to
            '0,0.0' (i.e.: 2,000,000.51).
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="format-input"
                label="Type a string"
                @kup-textfield-input="updateFormat"
              ></kup-text-field>
              <kup-text-field
                id="format-option"
                label="Type a format"
                @kup-textfield-input="updateFormat"
              ></kup-text-field>
              <kup-text-field
                label="Formatted result"
                disabled
                id="format-output"
              ></kup-text-field>
            </div> </div></div
        ><div class="accordion-slot" slot="5">
          <p>
            <span class="code-word"
              >normalDistribution(values, precision?): number[][]</span
            ><br />
            Calculates the normal distribution on a set of values.<br /><br />
            - <strong>values (string[] | number[] | String[])</strong> - Array
            of values.<br />
            - <strong>precision (number)</strong> - Number of iterations to run
            (points). When not specified, defaults to 201.<br /><br />You can
            try this algorithm by typing a series of numbers in the text field
            below, separated by a ";" character. They will be plotted as a
            Gaussian curve through the
            <a href="https://ketchup.smeup.com/ketchup-showcase/#/echart"
              >kup-echart</a
            >
            component.
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="nd-input"
                label="Type values"
                @kup-textfield-input="updateNormalDist"
              ></kup-text-field>
              <kup-echart id="nd-output"></kup-echart>
            </div> </div></div
        ><div class="accordion-slot" slot="6">
          <p>
            <span class="code-word">formulas.custom(formula, row): number</span
            ><br />
            Takes a mathematical formula as string in input, with column names
            between brackets, and returns the result as a number.<br /><br />
            - <strong>formula (string)</strong> - Mathematical operation (i.e.:
            ([COL1] - [COL2]) * 100 / [COL3]).<br />
            - <strong>row ({ [index: string]: number })</strong> - Object
            containing column names as indexes and the related values as
            keys.<br /><br /> </p></div
        ><div class="accordion-slot" slot="7">
          <p>
            <span class="code-word"
              >formulas.normalDistribution(average, variance, x): number</span
            ><br />
            Calculates a single Y point of a normal distribution.<br /><br />
            - <strong>average (number)</strong> - Average.<br />
            - <strong>variance (number)</strong> - Variance.<br />-
            <strong>x (number)</strong> - X coordinate.<br /><br /> </p></div
        ><div class="accordion-slot" slot="8">
          <p>
            <span class="code-word">unregister(component): void</span><br />
            Unregisters a KupComponent, so it won't be refreshed when the
            KupMath locale changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            unregistered.<br /> </p></div
        ><div class="accordion-slot" slot="9">
          <p>
            <span class="code-word">numbers.toLocaleString(value): string</span
            ><br />
            Convert input value into number and return the locale string.<br /><br />
            - <strong>value (string)</strong> - The value to be converted.<br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-text-field
                id="numberLocaleString-input"
                label="Type a string"
                @kup-textfield-input="updateNumberLocaleString"
              ></kup-text-field>
              <kup-text-field
                label="ToNumberLocaleString result"
                disabled
                id="numberLocaleString-output"
              ></kup-text-field>
            </div>
          </div> </div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupListNode } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import { KupTextFieldEventPayload } from '@sme.up/ketchup/dist/types/components/kup-text-field/kup-text-field-declarations';
import {
  KupDataColumn,
  KupDataRow,
} from '@sme.up/ketchup/dist/types/managers/kup-data/kup-data-declarations';

var accordion: HTMLKupAccordionElement = null;
var formatInput: HTMLKupTextFieldElement = null;
var formatOption: HTMLKupTextFieldElement = null;
var formatOutput: HTMLKupTextFieldElement = null;
var localeCombobox: HTMLKupComboboxElement = null;
var localeTextfield: HTMLKupTextFieldElement = null;
var ndInput: HTMLKupTextFieldElement = null;
var ndOutput: HTMLKupEchartElement = null;
var numberifyInput: HTMLKupTextFieldElement = null;
var numberifyOutput: HTMLKupTextFieldElement = null;
var numberLocaleStringInput: HTMLKupTextFieldElement = null;
var numberLocaleStringOutput: HTMLKupTextFieldElement = null;

const dom: KupDom = document.documentElement as KupDom;
const kupMathLocales = {
  cn: 'chs',
  en: 'en',
  es: 'es',
  it: 'it',
  fr: 'fr',
  pl: 'pl',
  ru: 'ru',
};

export default {
  name: 'KupMathFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      formatInput = document.querySelector('#format-input');
      formatOption = document.querySelector('#format-option');
      formatOutput = document.querySelector('#format-output');
      localeCombobox = document.querySelector('#locale-input');
      localeTextfield = document.querySelector('#locale-output');
      ndInput = document.querySelector('#nd-input');
      ndOutput = document.querySelector('#nd-output');
      numberifyInput = document.querySelector('#numberify-input');
      numberifyOutput = document.querySelector('#numberify-output');
      numberLocaleStringInput = document.querySelector(
        '#numberLocaleString-input'
      );
      numberLocaleStringOutput = document.querySelector(
        '#numberLocaleString-output'
      );
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
            title: 'numberify',
          },
          {
            name: '4',
            title: 'format',
          },
          {
            name: '5',
            title: 'normalDistribution',
          },
          {
            name: '6',
            title: 'formulas.custom',
          },
          {
            name: '7',
            title: 'formulas.normalDistribution',
          },
          {
            name: '8',
            title: 'unregister',
          },
          {
            name: '9',
            title: 'numbers.toLocaleString',
          },
        ],
      };
      const locales: string[] = dom.ketchup.dates.getLocales();
      const localesListData: KupListNode[] = [];
      for (let index = 0; index < locales.length; index++) {
        localesListData.push({
          id: locales[index],
          selected: locales[index] === dom.ketchup.dates.locale ? true : false,
          value: locales[index],
        });
      }
      localeCombobox.data = {
        'kup-list': { data: localesListData },
        'kup-text-field': {
          label: 'Set locale',
        },
      };
      localeCombobox.initialValue = dom.ketchup.dates.locale;
      const formatted = dom.ketchup.math.format(123456789.12);
      localeTextfield.setValue(formatted);
      formatInput.setValue('1725.25');
      formatOption.setValue('0,0.00$');
      formatOutput.setValue(
        dom.ketchup.math.format('1725.25', '0,0.00$').toString()
      );
      numberifyInput.setValue('1demo2');
      numberifyOutput.setValue(dom.ketchup.math.numberify('1demo2').toString());
      ndInput.setValue('10;20;30');
      this.updateNormalDist({ detail: { value: '10;20;30' } });
      numberLocaleStringInput.setValue('1024.32');
      numberLocaleStringOutput.setValue(
        dom.ketchup.math.numbers.toLocaleString('1024.32')
      );
      accordion.expandAll();
    },
    /**
     * Updates the format output text field.
     */
    async updateFormat() {
      const input = await formatInput.getValue();
      const format = await formatOption.getValue();
      const formatted = dom.ketchup.math.format(input, format);
      formatOutput.setValue(formatted);
    },
    /**
     * Updates the KupMath localization.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new localization is set.
     */
    updateLocale(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.math.setLocale(kupMathLocales[e.detail.value]);
      const formatted = dom.ketchup.math.format(123456789.12);
      localeTextfield.setValue(formatted);
      this.updateFormat();
    },
    /**
     * Updates the normal distribution chart.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Event fired by numberify input textfield.
     */
    updateNormalDist(e: CustomEvent<KupTextFieldEventPayload>) {
      const values = e.detail.value.split(';');
      const columns: KupDataColumn[] = [
        {
          name: 'GAU',
          title: 'Normal distribution',
          obj: { t: 'NR', p: '', k: '' },
        },
      ];
      const rows: KupDataRow[] = [];
      for (let index = 0; index < values.length; index++) {
        const value = values[index];
        rows.push({
          cells: {
            GAU: {
              value: value,
            },
          },
        });
      }
      ndOutput.data = {
        columns: columns,
        rows: rows,
      };
      ndOutput.legend = 'bottom' as any;
      ndOutput.sizeY = '300px';
      ndOutput.types = ['Gaussian' as any];
    },
    /**
     * Updates the numberify output text field.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Event fired by numberify input textfield.
     */
    updateNumberify(e: CustomEvent<KupTextFieldEventPayload>) {
      const numberified = dom.ketchup.math.numberify(e.detail.value).toString();
      numberifyOutput.setValue(numberified);
    },
    /**
     * Updates the number locale string output text field.
     * @param {CustomEvent<KupTextFieldEventPayload>} e - Event fired by number locale string input textfield.
     */
    updateNumberLocaleString(e: CustomEvent<KupTextFieldEventPayload>) {
      const numLocale = dom.ketchup.math.numbers
        .toLocaleString(e.detail.value)
        .toString();
      numberLocaleStringOutput.setValue(numLocale);
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

<style lang="scss" scoped>
kup-text-field,
kup-date-picker,
kup-combobox {
  margin: 0.5em !important;
}
</style>
