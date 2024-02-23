<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Text fields are supported by error and alert helper. Both 'error' and
        'alert' are built with a message plus an icon
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            is-clearable
            label="Alert"
            initial-value="Alert"
            alert="Alert message"
          ></kup-text-field>
          <kup-text-field
            label="Alert"
            initial-value="Alert"
            alert="Alert message"
            max-length="10"
          ></kup-text-field>
        </div>
        <p class="centered">Sample markup with alert message</p>
        <code class="flat">{{ markupBasicAlert }}</code>
      </div>
      <br /><br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            label="Error"
            initial-value="Error initial value"
            error="Error message for initial value"
            max-length="10"
          ></kup-text-field>
          <kup-text-field
            is-clearable
            label="Error"
            initial-value="Error initial value"
            error="Error message for initial value"
            max-length="10"
          ></kup-text-field>
        </div>
        <p class="centered">Sample markup with error message</p>
        <code class="flat">{{ markupBasicError }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldBasic',
  data() {
    return {
      markupBasicAlert:
        '<kup-text-field alert="Alert message"></kup-text-field>',
      markupBasicError:
        '<kup-text-field alert="Alert message"></kup-text-field>',
    };
  },
};
</script>
