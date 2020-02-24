<template>
  <div>
    <h3>Buttons</h3>
    <h4>Small dataset</h4>
    <kup-box
      :data.prop="btnData"
      :layout.prop="btnLayout"
      @kupBoxClicked="onBoxClicked"
      data-code="small"
    ></kup-box>
    <code ref="small" />

    <p />
    <h4>Larger dataset (all button types)</h4>
    <kup-box
      :data.prop="largeBtnData"
      :layout.prop="btnLayout"
      @kupBoxClicked="onBoxClicked"
      :columns.prop="3"
      data-code="large"
    ></kup-box>
    <code ref="large" />
    <hr />

    <h3>Icons</h3>
    <kup-box
      :data.prop="iconData"
      :layout.prop="iconLayout"
      :columns.prop="3"
    ></kup-box>
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
import j4btnLargeData from '@/mock/j4btn_table_box_data.json';

export default {
  data() {
    return {
      btnData: { ...j4btnData },
      largeBtnData: { ...j4btnLargeData },
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
      iconLayout: {
        sections: [
          {
            horizontal: false,
            sections: [{}, {}, {}],
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
    onBoxClicked(e) {
      const cell = JSON.stringify(e.detail.row.cells[e.detail.column]),
        row = JSON.stringify(e.detail.row),
        column = JSON.stringify(e.detail.column);
      this.$refs[
        e.target.dataset.code
      ].innerHTML = `<br>You clicked on: <br>Cell:<br>${cell}<br>Column:<br>${column}<br>Row:<br>${row}<br>`;
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 1rem;
}
</style>
