<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Progress bars are used to give visual feedback of an advancement status.
        It works in percentage and it value must be set inside the
        <span class="code-word">value</span> prop.
      </p>
      <br />
      <div class="demo-container">
        <div
          class="kup-container"
          style="margin-left: auto; margin-right: auto"
        >
          <kup-progress-bar value="100"></kup-progress-bar>
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressbarBasic',
  data() {
    return {
      markupBasic: '<kup-progress-bar value="your_value"></kup-progress-bar>',
    };
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  width: 50%;
}

@media screen and (max-width: 767px) {
  .kup-container {
    margin: 3em 0;
    width: 80vw;
  }
}
</style>
