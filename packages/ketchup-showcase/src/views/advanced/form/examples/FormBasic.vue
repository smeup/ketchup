<template>
  <div>
    <div class="try">
      <div>
        <label>Try with</label>
        <select name="sample-type" id="sample-type" @change="onSampleTypeChange">
          <option value="simple">Simple</option>
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
      <div class="json">
        <label>Schema</label>
        <textarea cols="50" rows="25" id="json" @change="onJsonTextChange" v-model="jsonText"></textarea>
      </div>
      <div class="form">
        <label>FORM</label>
        <kup-form
          ref="form"
          :refid.prop="jsonRefid"
          :extra.prop="jsonExtra"
          :config.prop="jsonConfig"
          :fields.prop="jsonFields"
          :record.prop="jsonRecord"
          :sections.prop="jsonSections"
          :extraMessages.prop="jsonExtraMessages"
          :actions.prop="jsonActions"
          @kupFormActionSubmitted="onFormActionSubmitted"
          @kupFormFieldFocused="onFormFieldFocused"
          @kupFormFieldBlurred="onFormFieldBlurred"
          @kupFormFieldChanged="onFormFieldChanged"
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

      <div class="history">
        <label>Event history stack</label>
        <ul class="stack" id="stack"></ul>
      </div>
      <div id="hidden" class="hidden">
        <div id="kitchenSinkMore">
          <p>Sample of almost all of the features of kup-form.</p>
          <p>On submit actions some backend fake logic is performed:</p>
          <p>1) if you put in a field value:</p>
          <ul>
            <li>
              GEM, GWM, GIM, FEM, FWM, FIM -> you will obtain a Global or Field
              Error, Warning or Info Message
            </li>
            <li>
              GVM, FVM -> you will obtain a Global or a Field backend Value
              Modified
            </li>
            <li>
              GRS, GRU -> you will obtain a Set / Unset of Readonly prop for
              some fields
            </li>
          </ul>
          <p></p>
          <p>
            2) if the form is valid (no errors) your playground schema will be
            updated.
          </p>
          <p>
            If you want to activate backend fake logic also after a particular
            field has changed (for example for a backend check) you can put
            liveBackendCheck=true to the specific field you want. The sample
            backend function associated to kupFieldBlurred event will read
            liveBackendCheck prop and if true it will perform the logic but will
            no update your schema.
          </p>
        </div>
        <div id="simpleMore">
          <p>A very simple sample...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import kitchenSink from '@/mock/form/kitchenSink.json';
import simpleUserSchema from '@/mock/form/simpleUserSchema.json';
import simple from '@/mock/form/simple.json';
import {
  buildFormEventCallback,
  chooseAndApplyFakeBackendLogic,
} from '@/mock/form/form-utils';
import { buildAutocompleteFilterUpdateCallback } from '@/mock/autocomplete';
import { buildSearchFilterSubmittedCallback } from '@/mock/search/search-utils';

export default {
  data() {
    return {
      kitchenSinkText: JSON.stringify(kitchenSink),
      simpleText: JSON.stringify(simple),
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
    jsonRecord() {
      return this.json.record;
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
      let json = JSON.parse(this.kitchenSinkText);
      json.fields['father'].config.fields['father'].config = JSON.parse(
        JSON.stringify(simpleUserSchema)
      );
      // build record from first of records
      json.record = json.records[0];
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
        this.json = JSON.parse(this.simpleText);
      }
      this.appendMore(this.sampleType);
    },
    onFormActionSubmitted(event) {
      this.appendEventToHistory('FormActionSubmitted', event);
      let result = chooseAndApplyFakeBackendLogic(
        'FormActionSubmitted',
        event.detail
      );
      this.updateForm(result);
    },
    onFormFieldFocused(event) {
      this.appendEventToHistory('FormFieldFocused', event);
    },
    onFormFieldBlurred(event) {
      this.appendEventToHistory('FormFieldBlurred', event);
      let result = chooseAndApplyFakeBackendLogic(
        'FormFieldChanged',
        event.detail
      );
      this.updateForm(result);
    },
    onFormFieldChanged(event) {
      this.appendEventToHistory('FormFieldChanged', event);
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
      var textnode = document.createTextNode(
        this.count +
          ' - ' +
          eventType +
          ' event with detail : ' +
          JSON.stringify(event.detail)
      );
      node.appendChild(textnode);
      document.getElementById('stack').prepend(node);
    },
    appendMore(sampleType) {
      let more = document.getElementById('more');
      let hidden = document.getElementById('hidden');
      let moreChild = more.firstChild;
      hidden.append(moreChild);
      more.append(document.getElementById(sampleType + 'More'));
    },
    updateForm(result) {
      console.log('FORM component update...');

      if (isEmpty(result)) {
        console.log('Nothing to update...');
      }

      if (result.extraMessages) {
        this.$refs.form.extraMessages = result.extraMessages;
      }

      // TODO: actually updating only readonly -> update all existing props...
      if (result.fields) {
        const keys = Object.keys(result.fields);
        keys.forEach((key) => {
          if (result.fields[key].hasOwnProperty('readonly')) {
            this.$refs.form.fields[key].readonly = result.fields[key].readonly;
          }
        });
      }

      if (result.record) {
        this.$refs.form.record = result.record;
      }

      // todo: config, sections, actions
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
  grid-template-columns: 20% auto 20%;
  gap: 10px;
  border: dotted 1px gray;
}
.stack {
  margin-top: 10px;
  width: 100%;
  font-size: 12px;
}

.stack li {
  width: 100%;
}

.json {
  grid-column-start: 1;
  grid-column-end: 1;
}

.form {
  grid-column-start: 2;
  grid-column-end: 2;
}

.history {
  grid-column-start: 3;
  grid-column-end: 3;
  word-wrap: break-word;
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
