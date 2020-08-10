<template>
  <div>
    <div class="demo-wrapper">
      <p>
        By setting the
        <span class="code-word">type</span> prop to
        <span class="code-word">input</span>, the chip set will behave as a set
        of static elements which can be deleted from the set one by one (by
        clicking on the trailing icon).
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-chip type="input" :data.prop="data"></kup-chip>
        </div>
        <p class="centered">Sample input markup</p>
        <code class="flat">{{ markupBasic }}</code>
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
          value: 'input1',
          icon: 'filter_list',
          label: 'First filter',
          checked: false,
        },
        {
          value: 'input2',
          icon: 'filter_list',
          label: 'Second filter',
          checked: false,
        },
        {
          value: 'input3',
          icon: 'filter_list',
          label: 'Third filter',
          checked: false,
        },
      ],
      markupBasic: '<kup-chip type="input"></kup-chip>',
    };
  },
};
</script>
