<template>
  <div>
    <div class="container">
      <div class="json">
        <div>
          <label for="sample-type">Try with</label>
          <select name="sample-type" id="sample-type" @change="onSampleTypeChange">
            <option value="simple">Simple</option>
            <option value="kitchenSink" selected>Kitchen Sink</option>
          </select>
        </div>
        <div>
          <label for="json">Json</label>
          <textarea cols="50" rows="25" id="json" @change="onJsonTextChange" v-model="jsonText"></textarea>
        </div>
      </div>
      <div class="form">
        <kup-form
          :fields.prop="fields"
          :sections.prop="sections"
          @kupFormSubmitted="onFormSubmitted"
          @kupFormFieldFocused="onFormFieldFocused"
        />
        <div class="log" v-if="kupFormEvent">{{ kupFormEvent }}</div>
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
      simpleText: JSON.stringify(simple),
      json: '',
      jsonText: '',
      sampleType: '',
      kupFormEvent: null,
    };
  },
  mounted() {
    this.sampleType = 'kitchenSink';
    this.json = JSON.parse(this.kitchenSinkText);
    this.jsonText = JSON.stringify(this.json, null, 4);
  },

  computed: {
    fields() {
      return this.json.fields;
    },
    sections() {
      return this.json.sections;
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
      } else if (this.sampleType == 'simple') {
        this.json = JSON.parse(this.simpleText);
      }
      this.jsonText = JSON.stringify(this.json, null, 4);
    },
    onFormSubmitted({ detail }) {
      this.kupFormEvent =
        'FormSubmitted event with detail: ' + JSON.stringify(detail);
    },
    onFormFieldFocused({ detail }) {
      this.kupFormEvent =
        'FormFieldFocused event with detail: ' + JSON.stringify(detail);
    },
  },
};
</script>

<style scoped lang="scss">
label {
  display: block;
}
select {
  -moz-appearance: menulist;
  -webkit-appearance: menulist;
}
textarea {
  border: solid 1px black;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  border: dotted 1px gray;
}
.json {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
.log {
  margin-top: 10px;
}
</style>