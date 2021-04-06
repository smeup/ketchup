<template>
  <div>
    <p>
      This class allows the dynamic positioning of a given HTML element by using
      the
      <span class="code-word">position: fixed</span> CSS rule. In order to work
      it just need two mandatory arguments:
      <span class="code-word"
        >the element to be positioned and its anchor element</span
      >. The anchoring will be placed below
      <span class="code-word">anchorEl</span>, unless there is no available
      space: in this case it will be placed above. <br />You can set a margin in
      pixels by using a third optional argument, or you can also choose to place
      the element above/on the right of its container unconditionally by setting
      to true the fourth/fifth optional arguments. The way this scripts work is
      pretty straightforward: every time a class is added/removed to/from the
      element( <span class="code-word">el</span>), the script will check whether
      the element's class list contains the
      <span class="code-word">dynamic-position-active</span> class. <br />If it
      was added, a <span class="code-word">setInterval</span> function will be
      launched, which will update the coordinates of
      <span class="code-word">el</span> every few milliseconds in relation to
      its anchor point. Once this class is removed, the setInterval will be
      cleared and the function will stop running.
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
    };
  },
};
</script>
