<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupTheme</span> is the core of Ketchup styling.
        All the CSS variables used to style components are defined in a JSON
        file, which you can download by clicking on the butto bewlow.<br />Note
        that it's also possible to use a custom JSON made by yourself, to learn
        how check the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/kup-manager"
          >KupManager</a
        >
        initialization paragraph.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-button
            icon="download"
            label="JSON"
            styling="outlined"
            title="Download the default languages JSON"
            @kup-button-click="downloadJSON()"
          ></kup-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupThemeBasic',
  data() {
    return {};
  },
  methods: {
    /**
     * Downloads the themes JSON.
     */
    downloadJSON(): void {
      const stingifiedJson: string =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(dom.ketchup.theme.list, null, 2));
      const downloadEl: HTMLAnchorElement = document.createElement('a');
      downloadEl.setAttribute('href', stingifiedJson);
      downloadEl.setAttribute('download', 'themes.json');
      document.body.appendChild(downloadEl);
      downloadEl.click();
      downloadEl.remove();
    },
  },
};
</script>
