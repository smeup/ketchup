<template>
  <div id="kup-tooltip">
    <h1>Tooltip</h1>
    <h3>Layout 1 (default layout)</h3>
    <div id="layout1">
      <kup-tooltip @kupTooltipLoadDetail="loadBornToDie">
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />

        <img
          slot="slot1"
          src="/images/lana-born-to-die.jpg"
          width="75"
          height="75"
        />

        <h3 slot="slot2">Born to die</h3>

        <div slot="slot3">
          <span class="label">Author: </span> Lana Del Rey
        </div>

        <div slot="slot4"><span class="label">Year: </span> 2012 </div>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadUltraviolence">
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />

        <img
          slot="slot1"
          src="/images/lana-ultraviolence.jpg"
          width="75"
          height="75"
        />

        <h3 slot="slot2">Ultraviolence</h3>

        <div slot="slot3">
          <span class="label">Author: </span> Lana Del Rey
        </div>

        <div slot="slot4"> <span class="label">Year: </span> 2014 </div>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadHoneymoon">
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />

        <img
          slot="slot1"
          src="/images/lana-honeymoon.jpg"
          width="75"
          height="75"
        />

        <h3 slot="slot2">Honeymoon</h3>

        <div slot="slot3">
          <span class="label">Author: </span> Lana Del Rey
        </div>

        <div slot="slot4"> <span class="label">Year: </span> 2015 </div>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadLust">
        <img src="/images/lana-lust.jpg" width="64" height="64" />

        <img slot="slot1" src="/images/lana-lust.jpg" width="75" height="75" />

        <h3 slot="slot2">Lust for life</h3>

        <div slot="slot3">
          <span class="label">Author: </span> Lana Del Rey
        </div>

        <div slot="slot4"> <span class="label">Year: </span> 2017 </div>
      </kup-tooltip>
    </div>

    <h3>Layout 2</h3>
    <div id="layout2">
      <kup-tooltip @kupTooltipLoadDetail="loadBornToDie" :layout.prop="2">
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />
        <h3 slot="slot1">Born to die</h3>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadUltraviolence" :layout.prop="2">
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />
        <h3 slot="slot1">Ultraviolence</h3>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadHoneymoon" :layout.prop="2">
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />
        <h3 slot="slot1">Honeymoon</h3>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadLust" :layout.prop="2">
        <img src="/images/lana-lust.jpg" width="64" height="64" />
        <h3 slot="slot1">Lust for life</h3>
      </kup-tooltip>
    </div>

    <h3>Layout 3</h3>
    <div id="layout3">
      <kup-tooltip @kupTooltipLoadDetail="loadBornToDie" :layout.prop="3">
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />

        <h4 slot="slot1">Born to die</h4>

        <div slot="slot2">
          <span class="label">Author: </span> Lana Del Rey
        </div>

        <div slot="slot3"> <span class="label">Year: </span> 2012 </div>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadUltraviolence" :layout.prop="3">
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />
        <h3 slot="slot1">Ultraviolence</h3>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadHoneymoon" :layout.prop="3">
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />
        <h3 slot="slot1">Honeymoon</h3>
      </kup-tooltip>

      <kup-tooltip @kupTooltipLoadDetail="loadLust" :layout.prop="3">
        <img src="/images/lana-lust.jpg" width="64" height="64" />
        <h3 slot="slot1">Lust for life</h3>
      </kup-tooltip>
    </div>
  </div>
</template>

<script>
import {
  bornToDie,
  ultraviolence,
  honeymoon,
  lustForLife,
} from '@/mock/tooltip';

export default {
  methods: {
    loadBornToDie(event) {
      setTimeout(() => (event.target.detailData = bornToDie), 250);
    },

    loadUltraviolence(event) {
      setTimeout(() => (event.target.detailData = ultraviolence), 250);
    },

    loadHoneymoon(event) {
      setTimeout(() => (event.target.detailData = honeymoon), 250);
    },

    loadLust(event) {
      setTimeout(() => (event.target.detailData = lustForLife), 250);
    },
  },
};
</script>


<style scoped>
[id^='layout'] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

kup-tooltip h3,
kup-tooltip h4 {
  margin: 0;
}

.label {
  color: #888888;
}
</style>

