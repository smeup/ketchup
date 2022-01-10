<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Button lists are a set of
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/button"
          >kup-button</a
        >
        elements. </p
      ><br />
      <p>For this reason, they inherit their style.</p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonlistBasic',
  data() {
    return {
      markupBasic: '<kup-button-list></kup-button-list>',
    };
  },
};
</script>
