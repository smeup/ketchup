<template>
  <div>
    <div class="demo-wrapper">
      <p>
        By setting the
        <span class="code-word">type</span> prop to
        <span class="code-word">choice</span>, the chip set will behave as a set
        of selectable elements, but only one at a time can be active.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip type="choice" :data.prop="data"></kup-chip>
        </div>
        <p class="centered">Sample choice markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipChoice',
  data() {
    return {
      data: [
        {
          checked: false,
          icon: 'sentiment_very_dissatisfied',
          id: 'choice1',
          value: 'NOPE!',
        },
        {
          checked: false,
          icon: 'sentiment_satisfied',
          id: 'choice2',
          value: 'Satisfied',
        },
        {
          checked: true,
          icon: 'sentiment_very_satisfied',
          id: 'choice3',
          value: 'Happy!',
        },
      ],
      markupBasic: '<kup-chip type="choice"></kup-chip>',
    };
  },
};
</script>
