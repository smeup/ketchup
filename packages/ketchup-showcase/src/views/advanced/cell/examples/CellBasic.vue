<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Cell component is used for rendering a single object contained within a
        single cell of a data table. The cell component is capable of rendering
        content based on the property named
        <span class="code-word">data</span>.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
      <br />
      <p
        >If you want to use more cells you have to look at the
        <span class="code-word">DataTable</span> or
        <span class="code-word">Box</span> component.</p
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CellBasic',
  data() {
    return {
      markupBasic: '<kup-cell></kup-cell>',
    };
  },
};
</script>
