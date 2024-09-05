<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(key, event): void</span><br />
            Registers shortcut and associated event<br /><br />
            - <strong>key (string)</strong> - Shortcut can also be a combination
            of multiple keys, separated by the '+' symbol. Order is relevant.<br />
            - <strong>event (GenericCallback)</strong> - Realted event to
            trigger when shortcut is pressed.<br /> </p
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">unregister(key): void</span><br />
            Removes shortcut and associated event.<br /><br />
            - <strong>key (string)</strong> - Shortcut to remove.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';

let accordion: HTMLKupAccordionElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupScrollOnHoverFeatures',
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

<style></style>
