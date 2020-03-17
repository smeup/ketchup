<template>
  <div>
    <div class="demo-wrapper">
      <p
        >When there are multiple elements of the same type it is advised to use
        the list component.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBasic',
  data() {
    return {
      markupBasic: '<wup-list></wup-list>',
    };
  },
};
</script>
