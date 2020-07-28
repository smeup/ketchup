<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The lazy component wraps another Ketch.UP component, which must be defined in the
        <span
          class="code-word"
        >componentName</span> prop, loading it when it enters the viewport. This component will be loaded using the
        <span
          class="code-word"
        >data</span> prop, which must be an object reflecting the props of the lazy-loaded component itself. It is possible to display a placeholder SVG by setting to true the
        <span
          class="code-word"
        >showPlaceholder</span> prop.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyBasic',
  data() {
    return {
      markupBasic: '<kup-lazy></kup-lazy>',
    };
  },
};
</script>
