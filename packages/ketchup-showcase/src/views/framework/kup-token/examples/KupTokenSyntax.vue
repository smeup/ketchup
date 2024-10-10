<template>
  <div>
    <div class="demo-wrapper">
      <p>
        To write a good design system you must have a structured design system
        token. We decided to go as follow</p
      >
      <div class="demo-container">
        <code class="flat">{{ markupBasic }}</code>
      </div>
      <p>I'll put some example to support the theory</p>
      <div class="demo-container">
        <p>This token is related to the border width of the kup-button</p>
        <code class="flat">{{ TokenExample }}</code>
        <br />
        <p>This token is related to the border color of the kup-card</p>
        <code class="flat">{{ TokenExample2 }}</code>
        <br />
        <p
          >This token is related to the border color of the kup-card on hover</p
        >
        <code class="flat">{{ TokenExample3 }}</code>
        <br />
        <p
          >This token is related to the background color of the track of the
          kup-switch</p
        >
        <code class="flat">{{ TokenExample4 }}</code>
        <!-- Token aggiuntivi -->
        <p>This token is related to the text color of the kup-button</p>
        <code class="flat">{{ TokenExample5 }}</code>
        <p>This token is related to the border radius of the kup-input</p>
        <code class="flat">{{ TokenExample6 }}</code>
        <p>This token is related to the background color of the kup-dropdown</p>
        <code class="flat">{{ TokenExample7 }}</code>
        <p>This token is related to the text color of the kup-tooltip</p>
        <code class="flat">{{ TokenExample8 }}</code>
        <p>This token is related to the check color of the kup-checkbox</p>
        <code class="flat">{{ TokenExample9 }}</code>
        <p>This token is related to the track color of the kup-slider</p>
        <code class="flat">{{ TokenExample10 }}</code>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupThemeBasic',
  data() {
    return {
      markupBasic: '{prefix}-{component}-{property}-{attribute}-{state}',
      TokenExample: '{kup}-{button}-{border}-{width}-{}',
      TokenExample2: '{kup}-{card}-{border}-{color}-{}',
      TokenExample3: '{kup}-{card}-{border}-{color}-{hover}',
      TokenExample4: '{kup}-{switch_track}-{background}-{color}-{}',
      // Token aggiuntivi
      TokenExample5: '{kup}-{button}-{text}-{color}-{}',
      TokenExample6: '{kup}-{input}-{border}-{radius}-{}',
      TokenExample7: '{kup}-{dropdown}-{background}-{color}-{}',
      TokenExample8: '{kup}-{tooltip}-{text}-{color}-{}',
      TokenExample9: '{kup}-{checkbox}-{check}-{color}-{}',
      TokenExample10: '{kup}-{slider}-{track}-{color}-{}',
    };
  },
};
</script>
