<template>
  <div>
    <p>
      This web component is a wrapper of
      <a
        href="https://developers.google.com/chart/"
        target="_blank"
        rel="noopener"
        >Google Charts</a
      >
      library.
    </p>
    <br />
    <br />
    <p class="centered">Sample markup</p>
    <code class="flat">{{ markupBasic }}</code>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  data() {
    return {
      markupBasic: '<kup-chart></kup-chart>',
    };
  },
};
</script>
