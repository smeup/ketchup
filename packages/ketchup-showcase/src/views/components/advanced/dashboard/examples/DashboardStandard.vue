<template>
  <div>
    <div>
      <h4>Simple dashboard</h4>
      <p>This simple dashboard contains some library components.</p>
      <kup-switch
        label="Enable design"
        @kup-switch-change="onEnableDesign1Change"
      ></kup-switch>
      <div
        ><kup-dashboard
          id="dashboardStandard1"
          :data.prop="simpleSample.dashboardData"
        >
          <kup-lazy
            component-name="kup-echart"
            :data.prop="simpleSample.chartData"
            style="height: 300px"
            slot="SA1"
          ></kup-lazy>
          <kup-lazy
            component-name="kup-data-table"
            :data.prop="simpleSample.tableData"
            slot="SA2"
          ></kup-lazy>
          <kup-lazy
            component-name="kup-box"
            :data.prop="simpleSample.boxData"
            slot="SC"
          ></kup-lazy>
          <kup-card
            layout-family="built-in"
            layout-number="1"
            :data.prop="simpleSample.cardData"
            slot="SD"
          ></kup-card>
          <kup-lazy
            component-name="kup-dash-list"
            :data.prop="simpleSample.dashData"
            slot="SB"
          ></kup-lazy> </kup-dashboard
      ></div>
    </div>
    <div>
      <h4>Login dashboard</h4>
      <p>This dashboard contains some login forms for different environment.</p>
      <kup-switch
        label="Enable design"
        @kup-switch-change="onEnableDesign2Change"
      ></kup-switch>
      <kup-dashboard id="dashboardStandard2" :data.prop="loginSample.data">
        <kup-accordion
          id="loginSample1"
          slot="SA"
          :data.prop="loginSample.loginData1"
        >
          <div slot="C1">
            <kup-text-field icon="account" label="User"></kup-text-field>
            <kup-text-field icon="key" label="Password"></kup-text-field>
            <kup-checkbox label="Keep me logged in"></kup-checkbox>
            <kup-switch label="Mobile"></kup-switch>
            <kup-button icon="lock" label="Login"></kup-button>
          </div>
        </kup-accordion>
        <kup-accordion
          id="loginSample2"
          slot="SB"
          :data.prop="loginSample.loginData2"
        >
          <div slot="C1">
            <kup-text-field icon="account" label="User"></kup-text-field>
            <kup-text-field icon="key" label="Password"></kup-text-field>
            <kup-checkbox label="Keep me logged in"></kup-checkbox>
            <kup-switch label="Mobile"></kup-switch>
            <kup-button icon="lock" label="Login"></kup-button>
          </div>
        </kup-accordion>
        <kup-accordion
          id="loginSample3"
          slot="SC"
          :data.prop="loginSample.loginData3"
        >
          <div slot="C1">
            <kup-text-field icon="account" label="User"></kup-text-field>
            <kup-text-field icon="key" label="Password"></kup-text-field>
            <kup-checkbox label="Keep me logged in"></kup-checkbox>
            <kup-switch label="Mobile"></kup-switch>
            <kup-button icon="lock" label="Login"></kup-button>
          </div>
        </kup-accordion>
      </kup-dashboard>
    </div>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';
import { defaultData } from '@/mock/box';
import { singleData } from '@/mock/echarts';
import {
  defaultData as dashDefaultData,
  defaultValueColor,
  defaultTextColor,
  defaultIconColor,
} from '@/mock/dashList';

export default {
  name: 'DashboardStandard',
  data() {
    return {
      simpleSample: {
        dashboardData: {
          layout: 'column',
          sections: [
            {
              layout: 'row',
              sections: [
                {
                  layout: 'column',
                  sections: [],
                  id: 'SA1',
                  loaded: true,
                },
                {
                  layout: 'column',
                  sections: [],
                  id: 'SA2',
                  loaded: true,
                },
              ],
              id: 'SA',
              loaded: true,
            },
            {
              layout: 'column',
              sections: [],
              id: 'SB',
              loaded: true,
            },
            {
              layout: 'column',
              sections: [],
              id: 'SC',
              loaded: true,
            },
            {
              layout: 'column',
              sections: [],
              id: 'SD',
              loaded: true,
            },
          ],
          fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_06)',
          type: 'SCH',
          loaded: true,
        },
        tableData: { data: defaultDataTable },
        boxData: {
          data: defaultData,
          columns: '4',
        },
        cardData: {
          layoutFamily: 'built-in',
          layoutNumber: '1',
          sizeX: 'auto',
          options: {
            initialValue: new Date().toISOString(),
          },
        },
        chartData: {
          axis: 'Col1',
          data: singleData,
          types: ['Bar', 'Bar', 'Bar'],
        },
        dashData: {
          columnsNumber: '3',
          data: dashDefaultData,
          valueColor: defaultValueColor,
          textColor: defaultTextColor,
          iconColor: defaultIconColor,
        },
      },
      loginSample: {
        data: {
          layout: 'column',
          sections: [
            {
              layout: 'column',
              sections: [],
              id: 'SA',
              loaded: true,
            },
            {
              layout: 'column',
              sections: [],
              id: 'SB',
              loaded: true,
            },
            {
              layout: 'column',
              sections: [],
              id: 'SC',
              loaded: true,
            },
          ],
          fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
          type: 'SCH',
          loaded: true,
        },
        loginData1: {
          columns: [{ name: 'C1', title: 'Login for develop environment' }],
        },
        loginData2: {
          columns: [{ name: 'C1', title: 'Login for staging environment' }],
        },
        loginData3: {
          columns: [{ name: 'C1', title: 'Login for production environment' }],
        },
      },
    };
  },
  methods: {
    onEnableDesign1Change: (ev) => {
      const el = document.getElementById('dashboardStandard1');
      el.enableDesign = ev.detail.value == 'on';
    },
    onEnableDesign2Change: (ev) => {
      const el = document.getElementById('dashboardStandard2');
      el.enableDesign = ev.detail.value == 'on';
    },
  },
};
</script>
