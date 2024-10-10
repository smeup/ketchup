<template>
  <div>
    <div class="demo-wrapper">
      <p> You can use all the styling above to get some advanced chip: </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip
            :data.prop="data"
            styling="raised"
            class="kup-primary"
          ></kup-chip>
        </div>
        <p class="centered">Primary Raised Chip with icon</p>
        <code class="flat">{{ markupBasic }}</code>
        <code class="flat">{{ markupBasicData }}</code>
      </div>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data2" styling="outlined"></kup-chip>
        </div>
        <p class="centered">Neutral outlined Chips'</p>
        <code class="flat">{{ markupBasic2 }}</code>
        <code class="flat">{{ markupBasicData2 }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipInput',
  data() {
    return {
      data: [
        {
          icon: 'widgets',
          id: 'input1',
          value: 'IconChip',
        },
      ],
      data2: [
        {
          id: 'input1',
          value: 'Outlined Chip',
        },
        {
          id: 'input2',
          value: 'Outlined Chip 2',
        },
        {
          id: 'input2',
          value: 'Outlined Chip 3',
        },
      ],
      markupBasic: '<kup-chip styling="raised" class="kup-primary"></kup-chip>',
      markupBasicData: '{ icon: "widgets", id: "input1", value: "IconChip"}',
      markupBasic2: '<kup-chip styling="outlined"></kup-chip>',
      markupBasicData2:
        '{ id: "input1", value: "Outlined Chip"},{ id: "input2", value: "Outlined Chip 2"},{ id: "input3", value: "Outlined Chip 3"}',
    };
  },
};
</script>
