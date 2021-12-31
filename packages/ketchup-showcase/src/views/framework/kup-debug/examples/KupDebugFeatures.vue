<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">isDebug(): boolean</span><br />
        Function used to check whether the debug is active or not.<br /><br />
      </p>
      <p>
        <span class="code-word"
          >logMessage(comp: any, message: string, category?: KupDebugCategory):
          void</span
        ><br />
        Stores a new log in KupDebug with the given arguments.<br /><br />
      </p>
      <p>
        <span class="code-word">print(): void</span><br />
        Displays a table with debug information inside the browser's console.<br /><br />
      </p>
      <p>
        <span class="code-word">dump(): void</span><br />
        Dumps the stored logs.<br /><br />
      </p>
      <p>
        <span class="code-word">toggle(value?: boolean): void</span><br />
        Function used to set the status of the debug. <br />If no argument is
        provided, this method will work as a toggler.<br /><br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            icon="bug"
            label="Toggle debug"
            @kup-button-click="toggleDebug()"
          ></kup-button>
        </div>
      </div>
      <p>
        <span class="code-word"
          >getProps(detail?: boolean): Promise - GenericObject</span
        ><br />
        Retrieves the information for every component contained in stored logs
        by invoking the getProps public method of each component.<br /><br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupDebugFeatures',
  data() {
    return {};
  },
  methods: {
    toggleDebug() {
      dom.ketchup.debug.toggle();
    },
  },
};
</script>
