<template>
  <div id="kup-tooltip">
    <h1>Tooltip</h1>
    <h3>Layout 1 (default layout)</h3>
    <div id="layout1">
      <kup-tooltip
        @kupTooltipLoadData="onLoadData($event, 1)"
        @kupTooltipLoadDetail="loadBornToDie"
      >
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        @kupTooltipLoadData="onLoadData($event, 2)"
        @kupTooltipLoadDetail="loadUltraviolence"
      >
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        @kupTooltipLoadData="onLoadData($event, 3)"
        @kupTooltipLoadDetail="loadHoneymoon"
      >
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        @kupTooltipLoadData="onLoadData($event, 4)"
        @kupTooltipLoadDetail="loadLust"
      >
        <img src="/images/lana-lust.jpg" width="64" height="64" />
      </kup-tooltip>
    </div>

    <h3>Layout 2</h3>
    <div id="layout2">
      <kup-tooltip
        layout="2"
        @kupTooltipLoadData="onLoadData($event, 1)"
        @kupTooltipLoadDetail="loadBornToDie"
      >
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="2"
        @kupTooltipLoadData="onLoadData($event, 2)"
        @kupTooltipLoadDetail="loadUltraviolence"
      >
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="2"
        @kupTooltipLoadData="onLoadData($event, 3)"
        @kupTooltipLoadDetail="loadHoneymoon"
      >
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="2"
        @kupTooltipLoadData="onLoadData($event, 4)"
        @kupTooltipLoadDetail="loadLust"
      >
        <img src="/images/lana-lust.jpg" width="64" height="64" />
      </kup-tooltip>
    </div>

    <h3>Layout 3</h3>
    <div id="layout3">
      <kup-tooltip
        layout="3"
        @kupTooltipLoadData="onLoadData($event, 1)"
        @kupTooltipLoadDetail="loadBornToDie"
      >
        <img src="/images/lana-born-to-die.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="3"
        @kupTooltipLoadData="onLoadData($event, 2)"
        @kupTooltipLoadDetail="loadUltraviolence"
      >
        <img src="/images/lana-ultraviolence.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="3"
        @kupTooltipLoadData="onLoadData($event, 3)"
        @kupTooltipLoadDetail="loadHoneymoon"
      >
        <img src="/images/lana-honeymoon.jpg" width="64" height="64" />
      </kup-tooltip>

      <kup-tooltip
        layout="3"
        @kupTooltipLoadData="onLoadData($event, 4)"
        @kupTooltipLoadDetail="loadLust"
      >
        <img src="/images/lana-lust.jpg" width="64" height="64" />
      </kup-tooltip>
    </div>

    <div class="tooltip-perf">
      <kup-tooltip
        v-for="index in 10000"
        :key="index"
        @kupTooltipLoadData="onLoadData($event, 1)"
        @kupTooltipLoadDetail="loadBornToDie"
      >
        <p>{{ index }}</p>
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
    onLoadData(event, index) {
      let data;
      switch (index) {
        case 1:
          data = {
            image: '/images/lana-born-to-die.jpg',
            title: 'Born to die',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2012,
              },
            },
          };
          break;

        case 2:
          data = {
            image: '/images/lana-ultraviolence.jpg',
            title: 'Ultraviolence',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2014,
              },
            },
          };
          break;

        case 3:
          data = {
            image: '/images/lana-honeymoon.jpg',
            title: 'Honeymoon',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2015,
              },
            },
          };
          break;

        case 4:
          data = {
            image: '/images/lana-lust.jpg',
            title: 'Lust for life',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2017,
              },
            },
          };
          break;
      }

      event.target.data = data;
    },

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

.tooltip-perf {
  display: flex;
  flex-wrap: wrap;
}

.tooltip-perf kup-tooltip {
  margin: 0px 3px;
}
</style>