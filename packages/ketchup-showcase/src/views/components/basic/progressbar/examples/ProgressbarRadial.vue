<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The progress bar can be also displayed in its radial variant by setting
        to true the
        <span class="code-word">isRadial</span> prop. <br />When this variant is
        enabled, some styling props won't have any effect (check the playground
        for more info about which ones can be used).
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-progress-bar
            icon="widgets"
            is-radial
            value="0.1"
          ></kup-progress-bar>
          <kup-progress-bar is-radial value="99.9"></kup-progress-bar>
        </div>
        <p class="centered">Sample radial markup</p>
        <code class="flat">{{ markupRadial }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressbarRadial',
  data() {
    return {
      markupRadial:
        '<kup-progress-bar is-radial value="your_value"></kup-progress-bar>',
    };
  },
};
</script>

<style lang="scss" scoped>
.kup-container {
  margin: 2rem 0;
  padding: 2em 0;
  width: 100%;
}

kup-progress-bar {
  margin: 0 0.5em;
  width: max-content;
}
</style>
