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
            Sets the locale of the numeral instance.<br /><br />
            - <strong>locale (KupMathLocales)</strong> - Numeraljs locale
            string.
          </p></div
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
            locale's format.<br /><br /> </p></div
        ><div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">format(input, format): string</span><br />
            Formats the input number with the specified format of the currently
            set locale.<br /><br />
            - <strong>input (string | String | number)</strong> - Input number
            which will be automatically "numberified".<br />
            - <strong>format (string)</strong> - Desired format. Defaults to
            '0,0.0' (i.e.: 2,000,000.51).
          </p></div
        ><div class="accordion-slot" slot="5">
          <p>
            <span class="code-word"
              >normalDistribution(values, precision?): number[][]</span
            ><br />
            Calculates the normal distribution on a set of values.<br /><br />
            - <strong>values (string[] | number[] | String[])</strong> - Array
            of values.<br />
            - <strong>precision (number)</strong> - Number of iterations to run
            (points). When not specified, defaults to 201.<br /><br /> </p></div
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
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';

var accordion: HTMLKupAccordionElement = null;

const dom: KupDom = document.documentElement as KupDom;

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
        ],
      };
      accordion.expandAll();
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
