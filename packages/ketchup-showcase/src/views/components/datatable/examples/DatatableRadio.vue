<template>
  <div>
    <h3>Single radio element playground</h3>
    <div class="example-container">
      <div>
        <p>Using attribute declarations:</p>
        <kup-radio-element :checked="radioChecked" :disabled="radioDisabled" />
        <p>
          With Vue
          <code class="inline">.prop</code> declaration:
        </p>
        <kup-radio-element :checked.prop="radioChecked" :disabled.prop="radioDisabled" />
      </div>
      <div>
        <v-btn @click="radioChecked = !radioChecked">Toggle checked</v-btn>
        <v-btn @click="radioDisabled = !radioDisabled">Toggle disabled</v-btn>
      </div>
    </div>

    <h3>Data table with radio elements</h3>
    <kup-data-table :config.prop="tableRadioData.config" :data.prop="tableRadioData.data" />

    <h3>Data table with radio elements and hidden repetitions</h3>
    <kup-data-table
      :config.prop="tableRadioDataHiddenRepetitions.config"
      :data.prop="tableRadioDataHiddenRepetitions.data"
    />
  </div>
</template>

<script>
import { dataTableCheckboxFactory } from '@/mock/dataTable';

export default {
  name: 'DTRadio',
  data() {
    return {
      radioChecked: false,
      radioDisabled: false,
      tableRadioData: dataTableCheckboxFactory('rad'),
      tableRadioDataHiddenRepetitions: dataTableCheckboxFactory('rad', true),
    };
  },
};
</script>