<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word"
              >draggable(el, options?, eventData?, effect?, callbacks?):
              void</span
            ><br />
            Method used to setup a new draggable element. An element being drag
            will have the attribute
            <span class="code-word">kup-draggable</span> for additional styling
            options.<br /><br />
            - <strong>el (HTMLElement)</strong> - The draggable element.<br />
            - <strong>options (Partial&lt;DraggableOptions&gt;)</strong> -
            Options of the draggable element. Check
            <a href="https://interactjs.io/docs/action-options/"
              >the official Interactjs documentation</a
            >
            to learn more.<br />
            - <strong>eventData (KupDragEventData)</strong> - Property used to
            transfer data for the drop event. The callback is used to return
            information of the starting item - such as cell, column and row
            info.<br />
            - <strong>effect (KupDragEffect)</strong> - Visual effect of the
            drag action.<br />
            - <strong>callbacks (KupDragCallbacks)</strong> - Additional
            callbacks to invoke.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-combobox
                id="drag-effect-selector"
                is-select
                @kup-combobox-change="updateDragEffect"
              ></kup-combobox>
            </div>
            <div id="drag-me" class="interact-example"><div>Drag me</div></div>
          </div>
        </div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word"
              >dropzone(el, options?, eventData?, callbacks?): void</span
            ><br />
            Method used to setup a new dropzone. A dropzone will have the
            attribute
            <span class="code-word">kup-drag-over</span> for additional styling
            options when a <span class="code-word">kup-draggable</span> is moved
            over it.<br /><br />
            - <strong>el (HTMLElement)</strong> - The dropzone element.<br />
            - <strong>options (Partial&lt;DropzoneOptions&gt;)</strong> -
            Options of the dropzone. Check
            <a href="https://interactjs.io/docs/action-options/"
              >the official Interactjs documentation</a
            >
            to learn more. <br />-
            <strong>eventData (KupDropEventData)</strong> - Argument used to
            transfer data for the drop event. The callback is used to return
            information of the receiving item - such as cell, column and row
            info. <br />- <strong>callbacks (KupDropCallbacks)</strong> -
            Additional callbacks to invoke.<br /><br />
          </p>
          <div class="demo-container">
            <div
              @kup-drop="updateDropzone"
              id="dropzone"
              class="interact-example"
              ><div>Dropzone</div></div
            >
          </div></div
        >
        <div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">
              resizable(el, options?, callbacks?, moveOnResize?, autoResize?):
              void</span
            ><br />
            Method used to setup a new resizable element.<br /><br />
            - <strong>el (HTMLElement)</strong> - The resizable element.<br />
            - <strong>options (Partial&lt;ResizableOptions&gt;)</strong> -
            Options of the resize action. Check
            <a href="https://interactjs.io/docs/action-options/"
              >the official Interactjs documentation</a
            >
            to learn more. <br />-
            <strong>callbacks (KupResizeCallbacks)</strong> - Additional
            callbacks to invoke. <br />-
            <strong>moveOnResize (boolean)</strong> - When true, the element
            will be moved when resizing in order to keep its position. <br />-
            <strong>autoResize (boolean)</strong> - When true, the element will
            be automatically resized (usually the behavior is specified in a
            callback).<br /><br />
          </p>
          <div class="demo-container">
            <div id="resize-me" class="interact-example"
              ><div>Resize me</div></div
            >
          </div></div
        >
        <div class="accordion-slot" slot="4">
          <p>
            <span class="code-word">on(el, event, callback): void</span><br />
            Adds a new interact.js event listener to the given argument.
            Available events are <span class="code-word">doubletap</span>,
            <span class="code-word">hold</span>
            and <span class="code-word">tap</span>.<br /><br />
            - <strong>el (HTMLElement)</strong> - The element on which the event
            listener will be added.<br />
            - <strong>event (KupPointerEventTypes)</strong> - Name of the
            event.<br />- <strong>callback (KupResizeCallbacks)</strong> -
            Callback to invoke when the event fires.<br /><br />
          </p>
          <div class="demo-container">
            <div id="event-tester" class="interact-example"></div> </div
        ></div>
        <div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">isRegistered(el): boolean</span><br />
            Checks whether an element is currently registered or not.<br /><br />
            - <strong>el (HTMLElement)</strong> - The element on which the event
            listener will be added.<br /> </p
        ></div>
        <div class="accordion-slot" slot="6">
          <p>
            <span class="code-word"
              >dialogify(el, handleEl?, unresizable?, restrictContainer?):
              void</span
            ><br />
            This method gives the element dialog-like features, by activating
            moving on drag and, optionally, the resize.<br /><br />
            - <strong>el (HTMLElement)</strong> - Dialog element.<br />
            - <strong>handleEl (HTMLElement)</strong> - Element that must be
            dragged in order to trigger movement. When not provided, dragging
            anywhere on <span class="code-word">el</span> will move it.<br />-
            <strong>unresizable (boolean)</strong> - When true, the dialog can't
            be resized.<br />-
            <strong>restrictContainer (RectResolvable)</strong> - When present,
            it will set the constraint of <span class="code-word">el</span>: it
            can't be moved outside this container.<br /><br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <div id="dialog"
                ><div id="dialog-handle"></div
                ><div id="dialog-content"
                  ><kup-button
                    id="dialogify-button"
                    label="Dialogify me!"
                    styling="flat"
                    @kup-button-click="dialogify"
                  ></kup-button></div></div
            ></div> </div
        ></div>
        <div class="accordion-slot" slot="7">
          <p>
            <span class="code-word">unregister(elements): void</span><br />
            Removes all event listeners from the elements in the array.<br /><br />
            - <strong>elements (HTMLElement[])</strong> - Elements to handle.<br /> </p></div></kup-accordion
    ></div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import { KupListNode } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';

var accordion: HTMLKupAccordionElement = null;
var combobox: HTMLKupComboboxElement = null;
var dialog: HTMLElement = null;
var dialogHandle: HTMLElement = null;
var dialogifyButton: HTMLKupButtonElement = null;
var dragMe: HTMLElement = null;
var dropzone: HTMLElement = null;
var eventTester: HTMLElement = null;
var resize: HTMLElement = null;

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
/**
 * Supported types of pointer events.
 * FIXME: This should be imported, but as of now there is no way to import enums.
 */
export enum KupPointerEventTypes {
  DOUBLETAP = 'doubletap',
  HOLD = 'hold',
  TAP = 'tap',
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
      accordion = document.querySelector('#accordion');
      combobox = document.querySelector('#drag-effect-selector');
      dialog = document.querySelector('#dialog');
      dialogHandle = document.querySelector('#dialog-handle');
      dialogifyButton = document.querySelector('#dialogify-button');
      dragMe = document.querySelector('#drag-me');
      dropzone = document.querySelector('#dropzone');
      eventTester = document.querySelector('#event-tester');
      resize = document.querySelector('#resize-me');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      accordion.data = {
        columns: [
          {
            name: '1',
            title: 'draggable',
          },
          {
            name: '2',
            title: 'dropzone',
          },
          {
            name: '3',
            title: 'resizable',
          },
          {
            name: '4',
            title: 'on',
          },
          {
            name: '5',
            title: 'isRegistered',
          },
          {
            name: '6',
            title: 'dialogify',
          },
          {
            name: '7',
            title: 'unregister',
          },
        ],
      };
      const dragEffectsListData: KupListNode[] = [];
      for (const key in KupDragEffect) {
        if (Object.prototype.hasOwnProperty.call(KupDragEffect, key)) {
          const effect: string = KupDragEffect[key];
          dragEffectsListData.push({
            id: effect,
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
      dom.ketchup.interact.dropzone(dropzone, null, {
        dispatcher: dropzone,
        type: 'text/generic' as any,
      });
      dom.ketchup.interact.on(
        eventTester,
        KupPointerEventTypes.DOUBLETAP,
        () => {
          eventTester.innerText = 'Double tap!';
        }
      );
      dom.ketchup.interact.on(eventTester, KupPointerEventTypes.HOLD, () => {
        eventTester.innerText = 'Long tap!';
      });
      dom.ketchup.interact.on(eventTester, KupPointerEventTypes.TAP, () => {
        eventTester.innerText = 'Tap!';
      });
      dom.ketchup.interact.resizable(resize, null, null, false, true);
      accordion.expandAll();
    },
    /**
     * Dialogifies the element.
     */
    dialogify() {
      dom.ketchup.interact.dialogify(dialog, dialogHandle);
      dialogifyButton.disabled = true;
      dialogifyButton.label = 'Done!';
    },
    /**
     * Updates the drag effect of the "Drag me!" element.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new drag effect is set.
     */
    updateDragEffect(e: CustomEvent<KupComboboxEventPayload>) {
      dom.ketchup.interact.unregister([dragMe]);
      dom.ketchup.interact.draggable(dragMe, null, null, e.detail.value);
    },
    /**
     * Updates the dropzone text.
     */
    updateDropzone() {
      dropzone.innerText = 'Dropped!';
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
    dom.ketchup.interact.unregister([dragMe]);
  },
};
</script>

<style lang="scss">
.interact-example {
  align-items: center;
  background: var(--kup-background-color);
  border: 2px var(--kup-border-color);
  box-sizing: border-box;
  display: flex;
  height: 6em;
  justify-content: center;
  margin: 0.25em auto 5em auto;
  padding: 0 0.75em;
  width: 6em;
}

#dialog {
  background: var(--kup-background-color);
  border: 1px solid var(--kup-title-background-color);
  display: flex;
  flex-direction: column;
  height: 12em;
  width: 12em;

  &-handle {
    background: var(--kup-title-background-color);
    height: 2em;
  }

  &-content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
}

#drag-me {
  border-style: outset;
}

#dropzone {
  border-style: dashed;

  &[kup-drag-over] {
    background: rgba(var(--kup-success-color-rgb), 0.25);
  }
}

#event-tester {
  border-style: solid;
  border-radius: 16px;
  cursor: pointer;
}

#resize-me {
  border-style: ridge;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
