<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to display the elements in a single line by setting to
        true the
        <span class="code-word">singleLine</span> prop. When single line variant
        is active, the columns prop will have no effect.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-grid single-line
            ><kup-button slot="0" label="First slot"></kup-button>
            <kup-button slot="1" label="Second slot"></kup-button>
            <kup-button slot="2" label="Third slot"></kup-button
          ></kup-grid>
        </div>
        <br />
        <p class="centered">Sample single line markup</p>
        <code class="flat">{{ markupSingleline }}</code>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        The single line layout can also be forced to fit the container for its
        length by setting the
        <span class="code-word">kup-full-width</span> class.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="width: 100%">
          <kup-grid class="kup-full-width" single-line
            ><kup-button slot="0" label="First slot"></kup-button>
            <kup-button slot="1" label="Second slot"></kup-button>
            <kup-button slot="2" label="Third slot"></kup-button
          ></kup-grid>
        </div>
        <br />
        <br />
        <p class="centered">Sample full width markup</p>
        <code class="flat">{{ markupSinglelineFW }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridSingleline',
  data() {
    return {
      markupSingleline: '<kup-grid single-line></kup-grid>',
      markupSinglelineFW:
        '<kup-grid class="kup-full-width" single-line></kup-grid>',
    };
  },
};
</script>

<style lang="scss" scoped>
.kup-container {
  overflow: auto;
}
</style>
