<template>
  <div>
    <h3>Buttons</h3>
    <kup-box
      :data.prop="btnData"
      :layout.prop="btnLayout"
      @kupBoxClicked="onBoxClicked"
    ></kup-box>

    <p v-if="clickedBtn">You clicked: {{ clickedBtn }}</p>

    <hr />

    <h3>Progress bar</h3>
    <kup-box :data.prop="pgbData" :layout.prop="pgbLayout"></kup-box>
  </div>
</template>

<script>
import { j4btnData, pgbData } from '@/mock/box';

export default {
  data() {
    return {
      btnData: j4btnData,
      pgbData,
      btnLayout: {
        sections: [
          {
            horizontal: true,
            sections: [
              {},
              {
                sections: [
                  {
                    style: {
                      fontWeight: 'bold',
                    },
                  },
                  {},
                ],
              },
              {},
            ],
          },
        ],
      },
      pgbLayout: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '70px',
              },
              {
                sections: [
                  {
                    style: {
                      textAlign: 'center',
                      fontWeight: 'bold',
                    },
                  },
                  {},
                ],
              },
            ],
          },
        ],
      },
      clickedBtn: null,
    };
  },

  methods: {
    onBoxClicked({ detail }) {
      if ('FLD4' === detail.column) {
        this.clickedBtn = detail.row.cells[detail.column];
      }
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 1rem;
}
</style>

