<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">isDebug(): boolean</span><br />
        Function used to check whether the debug is active or not.<br /><br />
      </p>
      <p>
        <span class="code-word">logMessage(comp, message, category?): void</span
        ><br />
        Stores a new log in KupDebug with the given arguments.<br /><br />
        - <strong>comp (any)</strong> - The component who wants to store the log
        (can also be a string).<br />
        - <strong>message (string)</strong> - The text of the log.<br />
        - <strong>category (KupDebugCategory)</strong> - The log's gravity:
        <span class="code-word">log</span>,
        <span class="code-word">warning</span> or
        <span class="code-word">error</span>.<br /><br />
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
        <span class="code-word">toggle(value?): void</span><br />
        Function used to set the status of the debug. <br />If no argument is
        provided, this method will work as a toggler.<br /><br />
        - <strong>value (boolean)</strong> - Forces the active state to this
        value.<br /><br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            icon="bug"
            label="Toggle debug"
            styling="outlined"
            @kup-button-click="toggleDebug()"
          ></kup-button>
        </div>
      </div>
      <p>
        <span class="code-word"
          >getProps(detail?): Promise&lt;GenericObject&gt;</span
        ><br />
        Retrieves the information for every component contained in stored logs
        by invoking the getProps public method of each component.<br /><br />
        - <strong>detail (boolean)</strong> - Adds additional information about
        the components' HTML entities.<br /><br />
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
