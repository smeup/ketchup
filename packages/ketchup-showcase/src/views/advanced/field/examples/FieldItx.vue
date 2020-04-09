<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sample of field component featuring a text field (
        <span class="code-word">itx</span>
        ).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field type="itx" :data.prop="dataITX"></kup-field>
        </div>
        <p class="centered">Text field sample markup</p>
        <code class="flat">{{ markupItx }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldItx',
  data() {
    return {
      markupItx: '<kup-field type="itx"></kup-field>',
      dataITX: { icon: 'widgets', label: 'demo' },
    };
  },
};
</script>
