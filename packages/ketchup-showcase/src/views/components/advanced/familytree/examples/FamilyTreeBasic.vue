<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The family tree component (or organigram) displays elements
        hierarchically.</p
      >
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamilyTreeBasic',
  data() {
    return {
      markupBasic: '<kup-family-tree></kup-family-tree>',
    };
  },
};
</script>
