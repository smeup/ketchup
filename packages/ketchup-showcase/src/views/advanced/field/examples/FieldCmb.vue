<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sample of field component featuring a combobox (
        <span class="code-word">cmb</span>
        ).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field type="cmb" :data.prop="dataCMB"></kup-field>
        </div>
        <p class="centered">Combo sample markup</p>
        <code class="flat">{{ markupCmb }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldCmb',
  data() {
    return {
      markupCmb: '<kup-field type="cmb"></kup-field>',
      dataCMB: {
        textfieldData: {
          trailingIcon: true,
          icon: 'arrow_drop_down',
          label: 'demo',
        },
        listData: {
          data: [
            {
              text: 'First choice',
              value: '1',
              selected: true,
            },
            {
              text: 'Selected choice',
              value: '2',
            },
            {
              text: 'Third choice',
              value: '3',
            },
          ],
          fieldId: 'LISTA',
          selectable: true,
        },
      },
    };
  },
};
</script>
