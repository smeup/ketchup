<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Checkboxes are boolean indicators: their value is true when marked,
        false when unmarked.</p
      >
      <p
        >They could also assume an indeterminate state, for example inside the
        header of a selectable table where only some of its rows are
        selected.</p
      >
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>

    <div class="demo-wrapper">
      <p>
        To trigger the different states of the component you need to use the
        <span class="code-word">checked</span> or
        <span class="code-word">indeterminate</span> props, which are mutually
        exclusive. When none of them is set to true, the checkbox defaults to an
        unchecked status.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-checkbox></kup-checkbox>
          <kup-checkbox indeterminate></kup-checkbox>
          <kup-checkbox checked></kup-checkbox>
        </div>
        <p class="centered">Marked state sample markup</p>
        <code class="flat">{{ markupMarked }}</code>
        <p class="centered">Indeterminate state sample markup</p>
        <code class="flat">{{ markupIndeterminate }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxBasic',
  data() {
    return {
      markupBasic: '<kup-checkbox></kup-checkbox>',
      markupMarked: '<kup-checkbox checked></kup-checkbox>',
      markupIndeterminate: '<kup-checkbox indeterminate></kup-checkbox>',
    };
  },
};
</script>
