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
          icon: 'filter_list',
          id: 'input1',
          value: 'First filter',
        },
        {
          icon: 'filter_list',
          id: 'input2',
          value: 'Second filter',
        },
        {
          icon: 'filter_list',
          id: 'input3',
          value: 'Third filter',
        },
      ],
      markupBasic: '<kup-chip type="input"></kup-chip>',
    };
  },
};
</script>
