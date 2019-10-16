<template>
  <div>
    <h1>Radio button (kup-radio-element)</h1>

    <h3>Single radio element playground</h3>
    <div class="example-container">
      <div>
        <p>Using attribute declarations:</p>
        <kup-radio-element
          :checked="radioChecked"
          :disabled="radioDisabled"/>
        <p>With Vue <code class="inline">.prop</code> declaration:</p>
        <kup-radio-element
          :checked.prop="radioChecked"
          :disabled.prop="radioDisabled"/>
      </div>
      <div>
        <v-btn @click="radioChecked = !radioChecked">Toggle checked</v-btn>
        <v-btn @click="radioDisabled = !radioDisabled">Toggle disabled</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DTRadio",
    data() {
      return {
        radioChecked: false,
        radioDisabled: false,
      };
    }
  }
</script>