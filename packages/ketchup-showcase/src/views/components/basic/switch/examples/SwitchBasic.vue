<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Switches are boolean indicators: their value is true when marked, false
        when unmarked.</p
      >
      <p
        >The most common use case is when the user can switch an option or a
        state between ON and OFF.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        To render a switch triggered you need to set to true the
        <span class="code-word">checked</span> prop. When it isn't, the switch
        defaults to OFF.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-switch></kup-switch>
          <kup-switch checked></kup-switch>
        </div>
        <p class="centered">Marked state sample markup</p>
        <code class="flat">{{ markupMarked }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchBasic',
  data() {
    return {
      markupBasic: '<kup-switch></kup-switch>',
      markupMarked: '<kup-switch checked></kup-switch>',
    };
  },
};
</script>

<style scoped lang="scss">
kup-switch {
  margin: auto;
  padding: 0.5em;
}
</style>
