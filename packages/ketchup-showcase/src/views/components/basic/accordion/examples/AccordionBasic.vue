<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The accordion component features a series of vertically arranged items.
        These items can be expandible to show/hide additional content or they
        can behave as buttons when they are empty.<br /><br />The accordion
        items are set inside the <span class="code-word">data</span> prop, which
        contains an array of data table's columns.<br /><br />The content of
        this component is settable through the usage of
        <span class="code-word">slots</span>.<br />
        In order to bind a slot with the wanted accordion item,
        <span class="code-word">slot</span> property must be named with the same
        name given to the column.
      </p>
      <br />
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionBasic',
  data() {
    return {
      markupBasic: '<kup-accordion></kup-accordion>',
    };
  },
};
</script>
