<template>
  <div>
    <p>
      This script allows the user to position a given div dynamically by using
      the CSS rule "position: fixed". To work it just need two arguments:
      <span
        class="code-word"
      >the element to be positioned and its anchor element</span>.
      <br />Let's take this chip as an example.
    </p>
    <kup-chip>This chip will be anchored</kup-chip>
    <br />
    <br />
    <p>
      The chip component above will be repositioned when buttons in the examples
      are clicked.
    </p>
    <div class="demo-container">
      <code class="flat">{{ codeSample }}</code>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeSample:
        'positionRecalc(el: HTMLElement, anchorEl: HTMLElement) {...}',
    };
  },
};
</script>
