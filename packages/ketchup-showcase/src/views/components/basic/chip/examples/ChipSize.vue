<template>
  <div>
    <div class="demo-wrapper">
      <p>
        You can use the <span class="code-word">sizing</span> attribute to
        decide the size of the chip. The default is
        <span class="code-word">medium</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data"></kup-chip>
        </div>
        <p class="centered">Default Sizing medium</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data" sizing="small"></kup-chip>
        </div>
        <p class="centered">Set sizing to 'small'</p>
        <code class="flat">{{ markupBasicSmall }}</code>
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
          id: 'input1',
          value: 'First filter',
        },
        {
          id: 'input2',
          value: 'Second filter',
        },
        {
          id: 'input3',
          value: 'Third filter',
        },
      ],
      markupBasic: '<kup-chip></kup-chip>',
      markupBasicSmall: '<kup-chip sizing="small"></kup-chip>',
    };
  },
};
</script>
