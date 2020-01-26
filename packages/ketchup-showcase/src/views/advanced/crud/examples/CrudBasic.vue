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
          <p>Sample of almost all of the features of kup-crud.</p>
          <p>Fake backend logic is the same applied into kup-form.</p>
        </div>
        <div id="simpleMore">
          <p>A very simple sample...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kitchenSink from '@/mock/form/kitchenSink.json';
import simpleUserSchema from '@/mock/form/simpleUserSchema.json';
import simple from '@/mock/form/simple.json';
import { buildFormEventCallback } from '@/mock/form/form-utils';

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
      this.json = JSON.parse(this.kitchenSinkText);
      this.json.fields['father'].config.fields['father'].config = JSON.parse(
        JSON.stringify(simpleUserSchema)
      );
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
