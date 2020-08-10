<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Radio buttons are commonly used to give the user a multiple choice,
        that's why it's rare to see a single radio inside a form. Radio buttons
        must be defined in JavaScript objects which support the following
        properties.
        <br />
        <br />
        <span class="code-word">value</span> is mandatory and defines the value
        of the radio.
        <br />
        <span class="code-word">label</span> defines the text to be displayed
        beside the component.
        <br />
        <span class="code-word">checked</span> defines whether the radio button
        is checked or not.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-radio :data.prop="data"></kup-radio>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
        <p class="centered">Sample object</p>
        <code class="flat">{{ markupObject }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioBasic',
  data() {
    return {
      data: [
        {
          value: 'chocolate',
          label: 'Chocolate',
          checked: true,
        },
        {
          value: 'cream',
          label: 'Cream',
          checked: false,
        },
      ],
      markupBasic: '<kup-radio></kup-radio>',
      markupObject:
        "{ value: 'chocolate', label: 'Chocolate', checked: true }, { value: 'cream', label: 'Cream', checked: false}",
    };
  },
};
</script>
