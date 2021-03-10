<template>
  <div>
    <div id="container">
      <span class="code-word">{{ event }}</span>
      <br />
      <span class="code-word">Type</span>:
      <br />
      <code class="flat">{{ type }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashEvents',
  data() {
    return {
      event: 'ketchupDashClicked',
      type: 'CustomEvent<{ id: number; }>',
    };
  },
};
</script>
