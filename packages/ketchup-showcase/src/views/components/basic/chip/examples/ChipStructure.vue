<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The Chip component is build on 3 part: A leading optional icon, a text
        and a trailing optional clear icon [#input chips].
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data"></kup-chip>
        </div>
        <p class="centered"
          >You can change or remove the icon. In this case is passed the
          'widgets' icon</p
        >
        <code class="flat">{{ markupBasic }}</code>
      </div>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip :data.prop="data2"></kup-chip>
        </div>
        <p class="centered">Without icon</p>
        <code class="flat">{{ markupBasicWihoutIcon }}</code>
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
          value: 'TextChip',
        },
      ],
      markupBasic: '{ icon: "widgets", id: "input1", value: "IconChip"}',
      markupBasicWihoutIcon: '{ id: "input1", value: "TextChip"}',
    };
  },
};
</script>
