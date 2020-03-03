<template>
  <div>
    <div class="demo-wrapper">
      <p
        >By setting the <span class="code-word">type</span> prop to
        <span class="code-word">choice</span>, the chip set will behave as a set
        of selectable elements, but only one at a time can be active.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-chip type="choice" :data.prop="data"></wup-chip>
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
          value: 'choice1',
          icon: 'sentiment_very_dissatisfied',
          label: 'NOPE!',
          checked: false,
        },
        {
          value: 'choice2',
          icon: 'sentiment_satisfied',
          label: 'Satisfied',
          checked: false,
        },
        {
          value: 'choice3',
          icon: 'sentiment_very_satisfied',
          label: 'Happy!',
          checked: true,
        },
      ],
      markupBasic: '<wup-chip type="choice"></wup-chip>',
    };
  },
};
</script>
