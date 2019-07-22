<template>
  <div>
    <h3>Base</h3>
    <kup-chip>Example</kup-chip>

    <h3>Closable</h3>
    <kup-chip closable @close="onClose">Example</kup-chip>

    <h3>Disabled</h3>
    <kup-chip closable disabled>Example</kup-chip>
  </div>
</template>

<script>
export default {
  methods: {
    onClose() {
      alert('Close called.');
    },
  },
};
</script>
