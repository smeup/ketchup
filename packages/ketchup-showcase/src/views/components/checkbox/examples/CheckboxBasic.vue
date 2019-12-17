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
        To trigger the different states of the component you need to specify
        either the
        <span class="code-word">checked</span> or
        <span class="code-word">indeterminate</span> attributes. When none of
        them is specified, the checkbox defaults to unmarked.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-checkbox></wup-checkbox>
          <wup-checkbox indeterminate></wup-checkbox>
          <wup-checkbox checked></wup-checkbox>
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
      markupBasic: '<wup-checkbox></wup-checkbox>',
      markupMarked: '<wup-checkbox checked></wup-checkbox>',
      markupIndeterminate: '<wup-checkbox indeterminate></wup-checkbox>',
    };
  },
};
</script>
