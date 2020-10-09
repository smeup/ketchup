<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Badge components are commonly used inside other components and their
        main purpose is showing additional information, usually counters or
        icons.
        <br />The text displayed in this component must be set inside the
        <span class="code-word">text</span> prop. <br />If you want to display
        an icon instead of plain text, you can do so by setting up the
        <span class="code-word">imageData</span> prop, in this case
        <span class="code-word">text</span> must be empty.
        <span class="code-word">imageData</span> is basically a set of props
        passed to the image component, to learn more about it check the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/badge">Image</a>
        page.
      </p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeBasic',
  data() {
    return {
      markupBasic: '<kup-badge></kup-badge>',
    };
  },
};
</script>
