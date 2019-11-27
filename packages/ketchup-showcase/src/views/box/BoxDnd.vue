<template>
  <div>
    <h3>Box to box</h3>
    <p>Drag a box over another from left to right</p>
    <div class="row">
      <div class="column">
        <kup-box
          id="box1"
          :data.prop="basicData"
          :layout.prop="horizontalLayout"
          drag-enabled="true"
          @kupBoxDragStarted="onBoxDragStarted"
          @kupBoxDragEnded="onBoxDragEnded"
        ></kup-box>
      </div>
      <div class="column">
        <kup-box
          id="box2"
          :data.prop="basicData"
          :layout.prop="horizontalLayout"
          :dropEnabled.prop="true"
          @kupBoxDropped="onBoxDropped"
        ></kup-box>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <p>
          <b>History</b>
        </p>
        <ul id="history" />
      </div>
      <div class="column">
        <p>
          <b>Last drop</b>
        </p>
        <p v-if="fromId">From box id: {{ fromId }}</p>
        <p v-if="fromRow">From box row: {{ fromRow }}</p>
        <p v-if="toId">To box id: {{ toId }}</p>
        <p v-if="toRow">To box row: {{ toRow }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      horizontalLayout: {
        sections: [
          {
            horizontal: true,
            sections: [{}, {}, {}, {}],
          },
        ],
      },
      eventType: null,
      fromId: null,
      fromRow: null,
      toId: null,
      toRow: null,
    };
  },
  methods: {
    onBoxDragStarted(event) {
      console.log(event);
      this.appendEventToHistory('Drag started event', event);
    },
    onBoxDragEnded(event) {
      console.log(event);
      this.appendEventToHistory('Drag ended event', event);
    },
    onBoxDropped(event) {
      console.log(event);
      this.appendEventToHistory('Dropped event', event);
      this.fromId = event.detail.fromId;
      this.fromRow = event.detail.fromRow;
      this.toId = event.detail.toId;
      this.toRow = event.detail.toRow;
    },
    appendEventToHistory(eventType, event) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(
        eventType + ': ' + JSON.stringify(event.detail)
      );
      node.appendChild(textnode);
      document.getElementById('history').appendChild(node);
    },
  },
};
</script>

<style>
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}
</style>



