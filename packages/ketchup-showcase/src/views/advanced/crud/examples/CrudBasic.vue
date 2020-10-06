<template>
  <div>
    <div class="try">
      <div>
        <label>Try with</label>
        <select
          name="sample-type"
          id="sample-type"
          @change="onSampleTypeChange"
        >
          <option value="simple">Simple</option>
          <option value="simpleMultiple">Simple Multiple</option>
          <option value="kitchenSink" selected>Kitchen Sink</option>
        </select>
      </div>
      <div>
        <details>
          <summary class="button">Read more...</summary>
          <div id="more"></div>
        </details>
      </div>
    </div>
    <div class="container">
      <div class="form">
        <label>CRUD</label>
        <kup-crud
          ref="form"
          :refid.prop="jsonRefid"
          :extra.prop="jsonExtra"
          :config.prop="jsonConfig"
          :fields.prop="jsonFields"
          :records.prop="jsonRecords"
          :sections.prop="jsonSections"
          :extraMessages.prop="jsonExtraMessages"
          :actions.prop="jsonActions"
          @kupAutocompleteFilterUpdate="onAutocompleteFilterUpdate"
          :autocompleteCallBackOnFilterUpdate.prop="
            autocompleteCallBackOnFilterUpdate
          "
          @kupSearchFilterSubmitted="onSearchFilterSubmitted"
          :searchCallBackOnFilterSubmitted.prop="
            searchCallBackOnFilterSubmitted
          "
          @kupCrudFormActionSubmitted="onCrudFormActionSubmitted"
          @kupCrudFormFieldChanged="onCrudFormFieldChanged"
          :crudCallBackOnFormActionSubmitted.prop="
            crudCallBackOnFormActionSubmitted
          "
          :crudCallBackOnFormFieldChanged.prop="crudCallBackOnFormFieldChanged"
        />
      </div>

      <div class="side">
        <v-tabs background-color="ligthgrey">
          <v-tabs-slider color="black"></v-tabs-slider>
          <v-tab ripple>Schema</v-tab>
          <v-tab ripple>Events</v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <textarea
                  cols="50"
                  rows="50"
                  id="json"
                  @change="onJsonTextChange"
                  v-model="jsonText"
                ></textarea>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>See console log for more details...</p>
                <ul class="stack" id="stack"></ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>

    <div id="hidden" class="hidden">
      <div id="kitchenSinkMore">
        <p>Sample of almost all of the features of kup-crud.</p>
        <p>Fake backend logic is the same applied into kup-form.</p>
      </div>
      <div id="simpleMore">
        <p>
          A very simple not multiple sample of with the same backend logic of
          kitchenSink sample.
        </p>
      </div>
      <div id="simpleMultipleMore">
        <p>
          A very simple multiple sample of with the same backend logic of
          kitchenSink sample.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import kitchenSinkStructure from '@/mock/form/kitchenSink/kitchenSinkStructure.json';
import kitchenSinkFather from '@/mock/form/kitchenSink/kitchenSinkFather.json';
import kitchenSinkRelatives from '@/mock/form/kitchenSink/kitchenSinkRelatives.json';
import kitchenSinkCrudConfig from '@/mock/crud/kitchenSink/kitchenSinkCrudConfig.json';
import kitchenSinkCrudExtra from '@/mock/crud/kitchenSink/kitchenSinkCrudExtra.json';
import kitchenSinkCrudRecords from '@/mock/crud/kitchenSink/kitchenSinkCrudRecords.json';
import simpleStructure from '@/mock/form/simple/simpleStructure.json';
import simpleCrudConfig from '@/mock/crud/simple/simpleCrudConfig.json';
import simpleMultipleCrudConfig from '@/mock/crud/simple/simpleMultipleCrudConfig.json';
import simpleCrudRecords from '@/mock/crud/simple/simpleCrudRecords.json';
import { buildFormEventCallback } from '@/mock/form/form-utils';
import { buildAutocompleteFilterUpdateCallback } from '@/mock/autocomplete';
import { buildSearchFilterSubmittedCallback } from '@/mock/search/search-utils';

export default {
  data() {
    return {
      json: '',
      sampleType: '',
      count: 0,
      crudCallBackOnFormActionSubmitted: buildFormEventCallback(
        'FormActionSubmitted'
      ),
      crudCallBackOnFormFieldChanged: buildFormEventCallback(
        'FormFieldChanged'
      ),
      autocompleteCallBackOnFilterUpdate: buildAutocompleteFilterUpdateCallback(
        10
      ),
      searchCallBackOnFilterSubmitted: buildSearchFilterSubmittedCallback(),
    };
  },
  mounted() {
    this.sampleType = 'kitchenSink';
    this.loadKitchenSink();
    this.appendMore(this.sampleType);
  },

  computed: {
    jsonText() {
      return JSON.stringify(this.json, null, 4);
    },
    jsonRefid() {
      return this.json.refid;
    },
    jsonExtra() {
      return this.json.extra;
    },
    jsonConfig() {
      return this.json.config;
    },
    jsonRecords() {
      return this.json.records;
    },
    jsonFields() {
      return this.json.fields;
    },
    jsonSections() {
      return this.json.sections;
    },
    jsonExtraMessages() {
      return this.json.extraMessages;
    },
    jsonActions() {
      return this.json.actions;
    },
  },

  methods: {
    loadKitchenSink() {
      let json = {
        ...JSON.parse(JSON.stringify(kitchenSinkCrudExtra)),
        ...JSON.parse(JSON.stringify(kitchenSinkCrudConfig)),
        ...JSON.parse(JSON.stringify(kitchenSinkStructure)),
        ...JSON.parse(JSON.stringify(kitchenSinkCrudRecords)),
      };
      json.fields['father'].config = JSON.parse(
        JSON.stringify(kitchenSinkFather)
      );
      json.fields['father'].config.fields['relatives'].config = JSON.parse(
        JSON.stringify(kitchenSinkRelatives)
      );
      this.json = json;
    },
    loadSimple() {
      let json = {
        ...JSON.parse(JSON.stringify(simpleCrudConfig)),
        ...JSON.parse(JSON.stringify(simpleStructure)),
        ...JSON.parse(JSON.stringify(simpleCrudRecords)),
      };
      this.json = json;
    },
    loadSimpleMultiple() {
      let json = {
        ...JSON.parse(JSON.stringify(simpleMultipleCrudConfig)),
        ...JSON.parse(JSON.stringify(simpleStructure)),
        ...JSON.parse(JSON.stringify(simpleCrudRecords)),
      };
      this.json = json;
    },
    onJsonTextChange(e) {
      let jsonText = e.target.value;
      try {
        this.json = JSON.parse(jsonText);
      } catch (e) {
        alert(e);
      }
    },
    onSampleTypeChange(e) {
      this.sampleType = e.target.value;
      if (this.sampleType == 'kitchenSink') {
        this.loadKitchenSink();
      } else if (this.sampleType == 'simple') {
        this.loadSimple();
      } else if (this.sampleType == 'simpleMultiple') {
        this.loadSimpleMultiple();
      }
      this.appendMore(this.sampleType);
    },
    onAutocompleteFilterUpdate(event) {
      this.appendEventToHistory('AutocompleteFilterUpdate', event);
    },
    onSearchFilterSubmitted(event) {
      this.appendEventToHistory('SearchFilterSubmitted', event);
    },
    onCrudFormActionSubmitted(event) {
      this.appendEventToHistory('CrudFormActionSubmitted', event);
    },
    onCrudFormFieldChanged(event) {
      this.appendEventToHistory('CrudFormFieldChanged', event);
    },
    appendEventToHistory(eventType, event) {
      this.count++;
      var node = document.createElement('LI');
      var textnode = document.createTextNode(this.count + ' - ' + eventType);
      node.appendChild(textnode);
      document.getElementById('stack').prepend(node);
      console.log(
        'EVENT ' +
          this.count +
          ' - ' +
          eventType +
          ' event with detail : ' +
          JSON.stringify(event.detail)
      );
    },
    appendMore(sampleType) {
      let more = document.getElementById('more');
      let hidden = document.getElementById('hidden');
      let moreChild = more.firstChild;
      hidden.append(moreChild);
      more.append(document.getElementById(sampleType + 'More'));
    },
  },
};
</script>

<style scoped lang="scss">
label {
  display: block;
  font-weight: bold;
}
select {
  -moz-appearance: menulist;
  -webkit-appearance: menulist;
}

textarea {
  border: solid 1px black;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 75% auto;
  gap: 10px;
  border: dotted 1px gray;
}
.stack {
  margin-top: 10px;
  width: 100%;
  font-size: 12px;
  word-wrap: break-word;
}

.stack li {
  width: 100%;
}

.side {
  grid-column-start: 2;
  grid-column-end: 2;
}

.form {
  grid-column-start: 1;
  grid-column-end: 1;
}

.try {
  margin-bottom: 5px;
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.try label {
  display: inline;
  font-weight: bold;
  margin-right: 5px;
}

.try select {
  display: inline;
}

.button {
  font-weight: bold;
  font-style: italic;
  outline: none;
  cursor: pointer;
}

.hidden {
  display: none;
}
</style>
