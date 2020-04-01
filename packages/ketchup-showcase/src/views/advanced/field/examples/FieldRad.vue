<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Sample of field component featuring radio buttons (
        <span class="code-word">rad</span>
        ).
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-field type="rad" :data.prop="dataRAD"></kup-field>
        </div>
        <p class="centered">Radio sample markup</p>
        <code class="flat">{{ markupRad }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldRad',
  data() {
    return {
      markupRad: '<kup-field type="rad"></kup-field>',
      dataRAD: {
        data: [
          {
            value: '1',
            label: 'First',
            checked: false,
          },
          {
            value: '2',
            label: 'Second',
            checked: false,
          },
          {
            value: '3',
            label: 'Third',
            checked: true,
          },
          {
            value: '4',
            label: 'Fourth',
            checked: false,
          },
          {
            value: '5',
            label: 'Fifth',
            checked: false,
          },
        ],
      },
    };
  },
};
</script>
