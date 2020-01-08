<template>
  <div>
    <div class="try">
      <label>Try with</label>
      <select name="sample-type" id="sample-type" @change="onSampleTypeChange">
        <option value="simple">Simple</option>
        <option value="kitchenSink" selected>Kitchen Sink</option>
      </select>
      <div class="desc">{{ desc }}</div>
    </div>
    <div class="container">
      <div class="json">
        <label>Json</label>
        <textarea
          cols="50"
          rows="25"
          id="json"
          @change="onJsonTextChange"
          v-model="jsonText"
        ></textarea>
      </div>
      <div class="form">
        <label>Form</label>
        <kup-form
          :config.prop="config"
          :fields.prop="fields"
          :sections.prop="sections"
          :extraMessages.prop="extraMessages"
          @kupFormSubmitted="onFormSubmitted"
          @kupFormFieldFocused="onFormFieldFocused"
          @kupFormFieldBlurred="onFormFieldBlurred"
        />
      </div>
      <div class="history">
        <label>Event history stack</label>
        <ul class="stack" id="stack"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import kitchenSink from '@/mock/form/kitchenSink.json';
import simple from '@/mock/form/simple.json';

export default {
  data() {
    return {
      kitchenSinkText: JSON.stringify(kitchenSink),
      kitchenSinkDesc: 'sample of almost all of the features of kup-form',
      simpleText: JSON.stringify(simple),
      simpleDesc: 'very simple sample',
      json: '',
      jsonText: '',
      sampleType: '',
      desc: '',
      count: 0,
    };
  },
  mounted() {
    this.sampleType = 'kitchenSink';
    this.desc = this.kitchenSinkDesc;
    this.json = JSON.parse(this.kitchenSinkText);
    this.jsonText = JSON.stringify(this.json, null, 4);
  },

  computed: {
    config() {
      return this.json.config;
    },
    fields() {
      return this.json.fields;
    },
    sections() {
      return this.json.sections;
    },
    extraMessages() {
      return this.json.extraMessages;
    },
  },
  methods: {
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
        this.json = JSON.parse(this.kitchenSinkText);
        this.desc = this.kitchenSinkDesc;
      } else if (this.sampleType == 'simple') {
        this.json = JSON.parse(this.simpleText);
        this.desc = this.simpleDesc;
      }
      this.jsonText = JSON.stringify(this.json, null, 4);
    },
    onFormSubmitted(event) {
      this.appendEventToHistory('FormSubmitted', event);
    },
    onFormFieldFocused(event) {
      this.appendEventToHistory('FormFieldFocused', event);
    },
    onFormFieldBlurred(event) {
      this.appendEventToHistory('FormFieldBlurred', event);
    },
    appendEventToHistory(eventType, event) {
      this.count++;
      var node = document.createElement('LI');
      var textnode = document.createTextNode(
        this.count +
          ' - ' +
          eventType +
          'event with detail : ' +
          JSON.stringify(event.detail)
      );
      node.appendChild(textnode);
      document.getElementById('stack').prepend(node);
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
}

.try label {
  display: inline;
  font-weight: bold;
  margin-right: 5px;
}

.try select {
  display: inline;
}

.try .desc {
  display: inline;
  margin-left: 5px;
  font-style: italic;
}
</style>
