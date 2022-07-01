<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The family tree component (or organigram) displays elements
        hierarchically. The component show nodes readed by
        <span class="code-word">data</span> property. Any node with children can
        collapse or expand his content. The component support zoom with mouse
        whell and move pan area with mouse click.</p
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
