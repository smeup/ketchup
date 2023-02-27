<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The dialog component is basically a slot-receiving container which can
        also work as a modal window.
      </p>
      <br />
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBasic',
  data() {
    return {
      markupBasic: '<kup-dialog><div>This is a slot.</div></kup-dialog>',
    };
  },
};
</script>
