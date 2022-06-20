<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupTooltip</span> replaces the old kup-tooltip
        component (in case you're familiar with it).<br />
        Basically it instances a kup-card component and handles the
        displaying/hiding on demand or on hover.<br /><br />
        There are three ways to use
        <span class="code-word">KupTooltip</span>:<br /><br />
        - <strong>programmatically</strong>, by invoking the
        <span class="code-word">show()</span> API;<br />
        - <strong>on mouse hover</strong>, by registering an HTMLElement through
        the <span class="code-word">register</span> API;<br />
        -
        <strong>on mouse hover but on a functional cell (FCell)</strong> inside
        a Ketchup component, by specifying enter, leave, over callbacks.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupTooltip',
  data() {
    return {};
  },
};
</script>
