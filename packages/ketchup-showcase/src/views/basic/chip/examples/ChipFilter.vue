<template>
  <div>
    <div class="demo-wrapper">
      <p
        >By setting the <span class="code-word">type</span> prop to
        <span class="code-word">filter</span>, the chip set will behave as a set
        of multi-selectable elements.</p
      >
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <wup-chip type="filter" :data.prop="data"></wup-chip>
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
          value: 'filter1',
          icon: 'sentiment_very_dissatisfied',
          label: 'NOPE!',
          checked: false,
        },
        {
          value: 'filter2',
          icon: 'sentiment_satisfied',
          label: 'Satisfied',
          checked: true,
        },
        {
          value: 'filter3',
          icon: 'sentiment_very_satisfied',
          label: 'Happy!',
          checked: true,
        },
      ],
      markupBasic: '<wup-chip type="filter"></wup-chip>',
    };
  },
};
</script>
