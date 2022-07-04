<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The family tree component (or organigram) displays elements
        hierarchically. <br />
        Any node with children can be collapsed or expanded if the
        <span class="code-word">collapsible</span> prop is enabled.<br />
        The component also supports zoom and panning.</p
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
