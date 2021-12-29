<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">kup-debug-active</span> - fired when the debug
        state becomes active.<br /><br />
        <span class="code-word">kup-debug-error</span> - fired when a log stored
        in KupDebug is an error.<br /><br />
        <span class="code-word">kup-debug-inactive</span> - fired when the debug
        state becomes inactive.<br /><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupDebugEvents',
  data() {
    return {};
  },
};
</script>
