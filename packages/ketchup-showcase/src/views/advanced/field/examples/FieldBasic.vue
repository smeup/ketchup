<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The field component is designed to work as a simple form or to be used inside the Form component.
        Its layout is composed by an optional label, an optional submit button and, more importantly, another Ketch.UP component.
        <br />This is the list of all the components currently supported (with their prefix).
      </p>
      <p>
        - Combobox (
        <span class="code-word">cmb</span>
        )
        <br />- Radio (
        <span class="code-word">rad</span>
        )
        <br />- Text field (
        <span class="code-word">itx</span>
        )
        <br />
        <br />To select a component, the
        <span class="code-word">type</span> prop must be set using the component's prefix and the
        <span class="code-word">data</span> prop must contain the component's props.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldBasic',
  data() {
    return {};
  },
};
</script>
