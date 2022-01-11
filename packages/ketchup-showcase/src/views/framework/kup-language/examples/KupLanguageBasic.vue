<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupLanguage</span> is a class where all Ketchup
        translations reside. <br />The supported languages are tied to those of
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/kup-dates"
          >KupDates</a
        >
        in order to have more consistency with the whole library
        localization.<br /><br />It's also possible to define
        <span class="code-word">variants</span> of base languages, which in
        inherit everything from it except the spcified keys. The translation is
        automatically applied to static strings throughout the library, such as
        the combobox used to paginate a
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/datatable"
          >kup-data-table</a
        >.<br /><br />By clicking on the button below it's possible to download
        the standard JSON of translations shipped with the library.
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
  name: 'KupLanguageBasic',
  data() {
    return {};
  },
  methods: {
    /**
     * Downloads the languages JSON.
     */
    downloadJSON(): void {
      const stingifiedJson: string =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(dom.ketchup.language.list, null, 2));
      const downloadEl: HTMLAnchorElement = document.createElement('a');
      downloadEl.setAttribute('href', stingifiedJson);
      downloadEl.setAttribute('download', 'languages.json');
      document.body.appendChild(downloadEl);
      downloadEl.click();
      downloadEl.remove();
    },
  },
};
</script>
