<template>
  <div>
    <h3>Buttons</h3>
    <kup-box :data.prop="btnData" :layout.prop="btnLayout" @kupBoxClicked="onBoxClicked"></kup-box>

    <p v-if="clickedBtn">You clicked: {{ clickedBtn }}</p>
    <hr />

    <h3>Yes/No</h3>
    <kup-box :data.prop="sinoData" :layout.prop="btnLayout"></kup-box>
    <hr />

    <h3>Radio</h3>
    <kup-box :data.prop="radioData" :layout.prop="btnLayout"></kup-box>
    <hr />

    <h3>Password</h3>
    <kup-box :data.prop="pwdData" :layout.prop="btnLayout"></kup-box>
    <hr />

    <h3>Icons</h3>
    <kup-box :data.prop="iconData" :layout.prop="btnLayout"></kup-box>
    <hr />

    <h3>Progress bar</h3>
    <kup-box :data.prop="pgbData" :layout.prop="pgbLayout"></kup-box>
  </div>
</template>

<script>
import {
  j4btnData,
  v2sinoData,
  v2radioData,
  j1pwdData,
  pgbData,
  iconData,
} from '@/mock/box';

export default {
  data() {
    return {
      btnData: { ...j4btnData },
      sinoData: { ...v2sinoData },
      radioData: { ...v2radioData },
      pwdData: { ...j1pwdData },
      pgbData: { ...pgbData },
      iconData: { ...iconData },
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

