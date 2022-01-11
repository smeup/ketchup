<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Text fields should always be tied to a label that helps the user filling
        in the correct data. You can choose between setting a floating label or
        displaying a label on one of the sides of the component. Labels must be
        set using the
        <span class="code-word">label</span> prop. To display it on the left,
        set the <span class="code-word">leadingLabel</span> prop to true.
        Alternatively, use the <span class="code-word">trailingLabel</span> prop
        to set it to the right.
        <br />
        <br />
        <span class="code-word">leadingLabel</span> and
        <span class="code-word">trailingLabel</span> will treat the text field
        as a form, adding the label on its side.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field
            leading-label
            label="This label is on the left"
          ></kup-text-field>
          <kup-text-field
            trailing-label
            label="This label is on the right"
          ></kup-text-field>
        </div>
        <p class="centered">Left label sample markup</p>
        <code class="flat">{{ markupLeft }}</code>
        <p class="centered">Right label sample markup</p>
        <code class="flat">{{ markupRight }}</code>
      </div>
    </div>

    <div class="demo-wrapper">
      <p>
        The
        <span class="code-word">label</span> prop will add a floating label as a
        placeholder, which will move when the field is focused. This is true for
        fields that do not use the
        <span class="code-word">fullWidth</span> prop, in this case the
        placeholder will be static.
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-text-field label="This label is floating"></kup-text-field>
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
      markupLeft:
        '<kup-text-field leading-label label="Your label"></kup-text-field>',
      markupRight:
        '<kup-text-field trailing-label label="Your label"></kup-text-field>',
      markupFloating: '<kup-text-field label="Your label"></kup-text-field>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-text-field {
  margin: auto;
  padding: 0.5em;
}
</style>
