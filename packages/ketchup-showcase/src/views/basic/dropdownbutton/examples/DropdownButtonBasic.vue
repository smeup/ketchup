<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Dropdown buttons are used when multiple actions can be wrapped in a
        single button. The main action should be tied to the button itself,
        while the extra actions are in a dropdown list.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownButtonBasic',
  data() {
    return {
      markupBasic: '<kup-dropdown-button></kup-dropdown-button>',
    };
  },
};
</script>
