<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Multi selection list is basically a list of checkboxes and to activate
        it you need to set to <span class="code-word">multi-select</span> the
        <span class="code-word">selectable</span> prop.</p
      >
      <br />
      <wup-list selectable="multi-select"></wup-list>
      <p class="centered">Sample multi-selection markup</p>
      <code class="flat">{{ markupMulti }}</code>
    </div>

    <div class="demo-wrapper">
      <p
        >Otherwise, in case you need to select only one element, set the prop to
        <span class="code-word">one-select</span>.</p
      >
      <br />
      <wup-list selectable="one-select"></wup-list>
      <p class="centered">Sample one-selection markup</p>
      <code class="flat">{{ markupOne }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSelection',
  data() {
    return {
      markupMulti: '<wup-list selectable="multi-select"></wup-list>',
      markupOne: '<wup-list selectable="one-select"></wup-list>',
    };
  },
};
</script>
