<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word"
          >draggable(el, options?, eventData?, effect?, callbacks?)</span
        ><br />
        Method used to setup a new draggable element. <br /><br />
        - <strong>el (HTMLElement)</strong> - The draggable element.<br />
        - <strong>options (Partial&lt;DraggableOptions&gt;)</strong> - Options
        of the draggable element.<br />
        - <strong>eventData (KupDragEventData)</strong> - Property used to
        transfer data for the drop event. The callback is used to return
        information of the starting item - such as cell, column and row info.<br />
        - <strong>effect (KupDragEffect)</strong> - Visual effect of the drag
        action.<br />
        - <strong>callbacks (KupDragCallbacks)</strong> - Additional callbacks
        to invoke.<br /><br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-combobox
            id="drag-effect-selector"
            is-select
            @kup-combobox-change="updateDragEffect"
          ></kup-combobox>
        </div>
        <div id="drag-me"><div>Drag me</div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/utils/kup-manager/kup-manager-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import { KupListData } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';

var combobox: HTMLKupComboboxElement = null;
var dragMe: HTMLElement = null;

const dom: KupDom = document.documentElement as KupDom;

/**
 * Available effects fro dragging.
 * FIXME: This should be imported, but as of now there is no way to import enums.
 */
enum KupDragEffect {
  BADGE = 'badge',
  CLONE = 'clone',
  MOVE = 'move',
  NONE = 'none',
}

export default {
  name: 'KupInteractFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      combobox = document.querySelector('#drag-effect-selector');
      dragMe = document.querySelector('#drag-me');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      const dragEffectsListData: KupListData[] = [];
      for (const key in KupDragEffect) {
        if (Object.prototype.hasOwnProperty.call(KupDragEffect, key)) {
          const effect: string = KupDragEffect[key];
          dragEffectsListData.push({
            text: effect,
            value: effect,
          });
        }
      }
      combobox.data = {
        'kup-list': { data: dragEffectsListData },
        'kup-text-field': {
          label: 'Set drag effect',
        },
      };
      combobox.initialValue = KupDragEffect.NONE;
      dom.ketchup.interact.draggable(dragMe, null, null, KupDragEffect.NONE);
    },
    /**
     * Updates the drag effect of the "Drag me!" element.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new drag effect is set.
     */
    updateDragEffect(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.interact.unregister([dragMe]);
      dom.ketchup.interact.draggable(dragMe, null, null, e.detail.value);
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
  },
};
</script>

<style lang="scss">
#drag-me {
  align-items: center;
  background: var(--kup-background-color);
  border: 2px var(--kup-border-color);
  border-style: outset;
  box-sizing: border-box;
  display: flex;
  height: 6em;
  margin: 0.25em auto 5em auto;
  padding: 0 0.75em;
  width: 6em;
}
</style>
