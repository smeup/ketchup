<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Color Picker is used to show and change a color.
        <br />
        <br />
        <span class="code-word">initialValue</span> defines the initial color
        (can be a css name, an hex or rgb code) of the component.
        <br />
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-color-picker initial-value="#FF0000"></kup-color-picker>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerBasic',
  data() {
    return {
      markupBasic: '<kup-color-picker value="#FF0000"></kup-color-picker>',
    };
  },
};
</script>
