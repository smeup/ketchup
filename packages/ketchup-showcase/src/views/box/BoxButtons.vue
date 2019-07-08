<template>
  <div>
    <h3>With buttons</h3>
    <kup-box
      :data.prop="btnData"
      :layout.prop="btnLayout"
      @kupBoxClicked="onBoxClicked"
    ></kup-box>

    <p v-if="clickedBtn">You clicked: {{ clickedBtn }}</p>
  </div>
</template>

<script>
import { j4btnData } from '@/mock/box';

export default {
  data() {
    return {
      btnData: j4btnData,
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

