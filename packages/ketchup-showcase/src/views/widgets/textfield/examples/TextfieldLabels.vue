<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Text fields should always be tied to a label that helps the user filling
        in the correct data. You can choose between setting a
        <span class="code-word">label</span>,
        <span class="code-word">labelleft</span> or a
        <span class="code-word">labelright</span> attribute, which are mutually
        exclusive.
        <br />
        <br />
        <span class="code-word">labelleft</span> and
        <span class="code-word">labelright</span> will treat the text field as a
        form, adding the label on its side.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field
            labelleft="This label is on the left"
          ></wup-text-field>
          <wup-text-field
            labelright="This label is on the right"
          ></wup-text-field>
        </div>
        <p class="centered">Left label sample markup</p>
        <code class="flat">{{ markupLeft }}</code>
        <p class="centered">Right label sample markup</p>
        <code class="flat">{{ markupRight }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The <span class="code-word">label</span> attribute will add a floating
        label as a placeholder, which will move when the field is focused. This
        is true for fields that do not use the
        <span class="code-word">fullwidth</span> attribute, in this case the
        placeholder will be static.
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-text-field label="This label is floating"></wup-text-field>
        </div>
        <p class="centered">Floating label sample markup</p>
        <code class="flat">{{ markupFloating }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextfieldLabels',
  data() {
    return {
      markupLeft: '<wup-text-field labelleft="Your label"></wup-text-field>',
      markupRight: '<wup-text-field labelright="Your label"></wup-text-field>',
      markupFloating: '<wup-text-field label="Your label"></wup-text-field>',
    };
  },
};
</script>
