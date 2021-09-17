<template>
  <div id="kup-tooltip-basic">
    <p>
      The component Tooltip enables you to create a tooltip's whit 3 different
      layers for the components: Box, Tree, Data Table.
    </p>
  </div>
</template>

<script>
import {
  bornToDie,
  ultraviolence,
  honeymoon,
  lustForLife,
  imageUrls,
} from '@/mock/tooltip';

export default {
  name: 'TooltipBasic',
  data() {
    return {
      images: {
        ...imageUrls,
      },
      labelText: '',
    };
  },

  methods: {
    onLoadData(event, index) {
      console.log('sono qui');
      this.labelText = '';
      let data;
      switch (index) {
        case 1:
          data = {
            image: this.images.bornToDie,
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
            image: this.images.ultra,
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
            image: this.images.honey,
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
            image: this.images.lust,
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
      console.log(event);
      console.log(data);
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

    actionCommandClicked(event) {
      var message =
        "Hai premuto il bottone a cui è associata l'esecuzione dell'azione: " +
        JSON.stringify(event.detail.actionCommand.exec);
      this.labelText = message;
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

#action-confirm-label {
  font-size: 80%;
}
</style>
