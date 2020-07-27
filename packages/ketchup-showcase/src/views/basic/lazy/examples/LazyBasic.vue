<template>
  <div>
    <div class="demo-wrapper">
      <p>This component will render its slot when it's displayed in the viewport.</p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyBasic',
  data() {
    return {
      markupBasic: '<kup-lazy></kup-lazy>',
    };
  },
};
</script>
