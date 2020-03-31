<template>
  <div>
    <p>
      This script allows the user to position a given div dynamically by using
      the CSS rule "position: fixed". To work it just need two arguments:
      <span
        class="code-word"
      >the element to be positioned and its anchor element</span>.
      <br />You can also set a margin in pixels by using the third optional argument.
      The way this scripts work is pretty straightforward: every time a class is added or remove to the element(
      <span
        class="code-word"
      >el</span>), the script will check whether the element class list contains
      <span
        class="code-word"
      >dynamic-position-active</span>.
      <br />If it was added, the a setInterval function will be launched that will update the coordinates every few milliseconds.
      Once that class is removed, the setInterval will be cleared and the function will stop running.
    </p>
    <br />
    <p>Let's take this chip as an example.</p>
    <kup-chip :data.prop="data"></kup-chip>
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
      data: [
        {
          value: '1',
          label: 'This chip will be anchored',
          checked: false,
        },
      ],
      codeSample:
        'positionRecalc(el: HTMLElement, anchorEl: HTMLElement, margin? : number) {...}',
    };
  },
};
</script>
