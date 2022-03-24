<template>
  <div>
    <div class="demo-wrapper">
      <p>
        By setting the
        <span class="code-word">type</span> prop to
        <span class="code-word">filter</span>, the chip set will behave as a set
        of multi-selectable elements.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip type="filter" :data.prop="data"></kup-chip>
        </div>
        <p class="centered">Sample filter markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipFilter',
  data() {
    return {
      data: [
        {
          checked: false,
          icon: 'sentiment_very_dissatisfied',
          id: 'filter1',
          value: 'NOPE!',
        },
        {
          checked: true,
          icon: 'sentiment_satisfied',
          id: 'filter2',
          value: 'Satisfied',
        },
        {
          checked: true,
          icon: 'sentiment_very_satisfied',
          id: 'filter3',
          value: 'Happy!',
        },
      ],
      markupBasic: '<kup-chip type="filter"></kup-chip>',
    };
  },
};
</script>
