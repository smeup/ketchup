<template>
  <div>
    <div class="demo-wrapper">
      <p>
        You can use the <span class="code-word">kup-primary</span> class to set
        the color of the chip. The default is
        <span class="code-word">neutral</span>.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data"></kup-chip>
        </div>
        <p class="centered">Default color 'neutral'</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data" class="kup-primary"></kup-chip>
        </div>
        <p class="centered">Set color to 'primary'</p>
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
      markupBasicSmall: '<kup-chip class="kup-primary"></kup-chip>',
    };
  },
};
</script>
