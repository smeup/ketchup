<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The multi-select component allows for multiple selection of tree data,
        filtering of said data, and visualization of selections made. If the
        tree is on only one level, the component represents it as a normal list.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiSelectBasic',
  data() {
    return {
      markupBasic: '<kup-multi-select></kup-multi-select>',
    };
  },
};
</script>
