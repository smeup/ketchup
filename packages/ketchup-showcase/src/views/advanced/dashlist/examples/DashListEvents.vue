<template>
  <div>
    <div class="demo-wrapper">
      <span class="code-word">{{ event }}</span>
      <br />
      <span class="code-word">Type: </span><code class="flat">{{ type }}</code>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashListEvents',
  data() {
    return {
      event: 'ketchupDashClicked',
      type: 'CustomEvent<{ idx: number; }>',
    };
  },
};
</script>
