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
        <label>Form</label>
        <kup-form
          ref="form"
          :config.prop="jsonConfig"
          :fields.prop="jsonFields"
          :sections.prop="jsonSections"
          :extraMessages.prop="jsonExtraMessages"
          :actions.prop="jsonActions"
          @kupFormSubmitted="onFormSubmitted"
          @kupFormActionSubmitted="onFormActionSubmitted"
          @kupFormFieldFocused="onFormFieldFocused"
          @kupFormFieldBlurred="onFormFieldBlurred"
          @kupFormFieldChanged="onFormFieldChanged"
        />
      </div>
      <div class="history">
        <label>Event history stack</label>
        <ul class="stack" id="stack"></ul>
      </div>
      <div id="hidden" class="hidden">
        <div id="kitchenSinkMore">
          <p>Sample of almost all of the features of kup-form.</p>
          <p>On submit some backend fake logic is performed:</p>
          <p>1) if you put in a field value:</p>
          <ul>
            <li>
              GEM, GWM, GIM, FEM, FWM, FIM -> you will obtain a Global or Field
              Error, Warning or Info Message
            </li>
            <li>GVM, FVM -> you will obtain Global or Field backend Value Modified</li>
            <li>GTM, FTM -> you will obtain Global or Field backend Title Modify</li>
          </ul>
          <p></p>
          <p>
            2) if the form is valid (no errors) your playground schema will be
            updated.
          </p>
          <p>
            If you want to activate backend fake logic also after a particular
            field has blurred you can put liveBackend=true to the specific field
            you want. The sample backend function associated to kupFieldBlurred
            event will read liveBackend prop and if true it will perform the
            logic.
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
      sampleType: '',
      desc: '',
      count: 0,
    };
  },
  mounted() {
    this.sampleType = 'kitchenSink';
    this.desc = this.kitchenSinkDesc;
    this.json = JSON.parse(this.kitchenSinkText);
    this.appendMore(this.sampleType);
  },

  computed: {
    jsonText() {
      return JSON.stringify(this.json, null, 4);
    },
    jsonFields() {
      return this.json.fields;
    },
    jsonConfig() {
      return this.json.config;
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
      this.appendMore(this.sampleType);
    },
    onFormSubmitted(event) {
      this.appendEventToHistory('FormSubmitted', event);
      this.fakeBackendLogicOnEvent('FormSubmitted', event);
    },
    onFormActionSubmitted(event) {
      this.appendEventToHistory('FormActionSubmitted', event);
    },
    onFormFieldFocused(event) {
      this.appendEventToHistory('FormFieldFocused', event);
    },
    onFormFieldBlurred(event) {
      this.appendEventToHistory('FormFieldBlurred', event);
      this.fakeBackendLogicOnEvent('FormFieldBlurred', event);
    },
    onFormFieldChanged(event) {
      this.appendEventToHistory('FormFieldChanged', event);
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
    fakeBackendLogicOnEvent(eventType, event) {
      if (eventType === 'FormSubmitted') {
        this.fakeBackendLogicOnFields(
          eventType,
          event.detail.isValid,
          event.detail.fields,
          this.$refs.form.fields
        );
      }
      if (eventType === 'FormFieldBlurred') {
        // logic only if field.liveBackend
        if (!this.$refs.form.fields[event.detail.field.key].liveBackend) {
          return;
        }

        this.fakeBackendLogicOnFields(
          eventType,
          event.detail.isValid,
          this.$refs.form.fields,
          this.$refs.form.fields
        );
      }
    },
    fieldValueIsOfType(field, type) {
      let value = JSON.stringify(field.value);

      if (value.includes(type)) {
        return true;
      }
    },
    fieldValueModify(newFields, allFieldswithAllProps, field) {
      if ('CMB' == allFieldswithAllProps[field.key].shape) {
        newFields[field.key].data.shift();
        newFields[field.key].value = allFieldswithAllProps[field.key].data[0];
      } else {
        newFields[field.key].value =
          'XXX' +
          allFieldswithAllProps[field.key].value.substring(
            3,
            field.value.lenght
          );
      }
      return newFields;
    },
    fakeBackendLogicOnFields(
      eventType,
      isValid,
      allFields,
      allFieldswithAllProps
    ) {
      console.log('Applying fake backend logic');
      let newFields = { ...allFieldswithAllProps };
      let extraMessages = [];

      if (allFields) {
        const keys = Object.keys(allFields);
        let fields = [];
        keys.forEach((key) => {
          fields.push(allFieldswithAllProps[key]);
        });

        fields.forEach((field) => {
          // messages
          let level = null;
          let fieldKey = null;

          if (this.fieldValueIsOfType(field, 'FEM')) {
            level = 'ERROR';
            fieldKey = field.key;
          } else if (this.fieldValueIsOfType(field, 'FWM')) {
            level = 'WARNING';
            fieldKey = field.key;
          } else if (this.fieldValueIsOfType(field, 'FIM')) {
            level = 'INFO';
            fieldKey = field.key;
          } else if (this.fieldValueIsOfType(field, 'GEM')) {
            level = 'ERROR';
          } else if (this.fieldValueIsOfType(field, 'GWM')) {
            level = 'WARNING';
          } else if (this.fieldValueIsOfType(field, 'GIM')) {
            level = 'INFO';
          }

          if (level) {
            if (level == 'ERROR') {
              isValid = false;
            }
            console.log(
              'Adding backend message for fieldKey' +
                fieldKey +
                ' and level ' +
                level
            );

            extraMessages = [
              ...extraMessages,
              {
                ...(fieldKey ? { fieldKey: fieldKey } : {}),
                text:
                  level +
                  ' message from server (' +
                  new Date().toISOString() +
                  ')',
                level: level,
              },
            ];
          }

          // titles
          if (this.fieldValueIsOfType(field, 'FTM')) {
            console.log('FTM backend modify of field with key ' + field.key);
            newFields[field.key].title =
              'XXX' + allFieldswithAllProps[field.key].title;
          }
          if (this.fieldValueIsOfType(field, 'GTM')) {
            console.log('GTM backend modify of all fields');
            keys.forEach((key) => {
              newFields[key].title = 'XXX' + allFieldswithAllProps[key].title;
            });
          }

          // values
          if (this.fieldValueIsOfType(field, 'FVM')) {
            console.log('FVM backend modify of field with key ' + field.key);
            newFields = this.fieldValueModify(
              newFields,
              allFieldswithAllProps,
              field
            );
          }
          if (this.fieldValueIsOfType(field, 'GVM')) {
            console.log('GVM backend modify of field with key ' + field.key);
            keys.forEach((key) => {
              newFields = this.fieldValueModify(
                newFields,
                allFieldswithAllProps,
                allFieldswithAllProps[key]
              );
            });
          }
        });
      }

      if (isValid) {
        console.log('Valid form');
        extraMessages = [
          ...extraMessages,
          {
            text:
              'All your backend data updated with success! (' +
              new Date().toISOString() +
              ')',
            level: 'INFO',
          },
        ];

        this.json = {
          ...this.json,
          fields: newFields,
          extraMessages: extraMessages,
        };
      } else {
        console.log('Not valid form');
        this.json = {
          ...this.json,
          extraMessages: extraMessages,
        };
      }
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

.try .desc {
  display: inline;
  margin-left: 5px;
  font-style: italic;
}

.button {
  font-weight: bold;
  font-style: italic;
  outline: none;
  cursor: pointer;
}
</style>
