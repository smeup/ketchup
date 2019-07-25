<template>
  <div class="max-width-container">
    <h2>kup-checkbox</h2>

    <h3>Base</h3>
    <div class="example-container">
      <kup-checkbox
        :checked.prop="base"
        @kupCheckboxChange="changeBase"/>
      <code>Checked: {{ base }}</code>
    </div>

    <h3>Checked</h3>
    <div class="example-container">
      <kup-checkbox
        :checked.prop="cbChecked.checked"
        @kupCheckboxBlur="cbChecked.focused = false"
        @kupCheckboxChange="changeChecked"
        @kupCheckboxFocus="cbChecked.focused = true"/>
      <code>Checked: {{ cbChecked.checked }}<br>Focused: {{ cbChecked.focused }}</code>
    </div>

    <h3>Disabled</h3>
    <div class="example-container">
      <kup-checkbox
        :checked.prop="cbDisabled"
        disabled
        @kupCheckboxChange="changeDisabled"/>
      <code>Checked: {{ cbDisabled }}</code>
    </div>

  </div>
</template>

<script>
  export default {
    name: "KupCheckboxExamples",
    data() {
      return {
        base: false,
        cbChecked: {
          checked: true,
          focused: false,
        },
        cbDisabled: true,
      }
    },
    methods: {
      changeBase(e) {
        this.base = e.detail.checked;
      },
      changeChecked(e) {
        this.cbChecked.checked = e.detail.checked;
      },
      changeDisabled(e) {
        this.cbDisabled = e.detail.checked;
      }
    }
  }
</script>

<style scoped>

</style>