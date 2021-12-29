<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word"
          >register(el: KupDynamicPositionElement, anchorEl:
          KupDynamicPositionAnchor, margin?: number, placement?:
          KupDynamicPositionPlacement, detach?: boolean): void </span
        ><br />
        Watches the element eligible to be positioned dynamically.<br /><br />
      </p>
      <p>
        <span class="code-word"
          >unregister(elements: KupDynamicPositionElement[]): void</span
        ><br />
        Removes the elements from dynamic position management.<br /><br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupDynamicPositionFeatures',
  data() {
    return {};
  },
  methods: {
    toggleDebug() {
      dom.ketchup.debug.toggle();
    },
  },
};
</script>
