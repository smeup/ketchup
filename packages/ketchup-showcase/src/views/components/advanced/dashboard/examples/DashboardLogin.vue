<template>
  <div>
    <div>
      <h4>Login dashboard</h4>
      <p>This dashboard contains some login forms for different environment.</p>
      <kup-switch
        label="Enable design"
        @kup-switch-change="onEnableDesign1Change"
      ></kup-switch>
      <kup-dashboard id="dashboardStandard1" :data.prop="sampleData1.data">
        <kup-accordion
          id="loginSample1"
          slot="SA"
          :data.prop="sampleData1.loginData1"
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
          :data.prop="sampleData1.loginData2"
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
          :data.prop="sampleData1.loginData3"
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
    <div>
      <h4>Login dashboard with modules</h4>
      <p
        >This example shows the login forms in dedicated sections, with a
        section for entering login credentials.</p
      >
      <kup-switch
        label="Enable design"
        @kup-switch-change="onEnableDesign2Change"
      ></kup-switch>
      <kup-dashboard id="dashboardStandard2" :data.prop="sampleData2.data">
        <div slot="SA2">
          <div class="login-box">
            <h4>Login credentials</h4>
            <kup-button
              icon="google"
              label="Login with Google"
              class="kup-full-width"
            ></kup-button>
            <div class="text-center">
              <span>or</span>
            </div>
            <kup-text-field icon="account" label="User"></kup-text-field>
            <kup-text-field icon="key" label="Password"></kup-text-field>
            <div class="column-group">
              <kup-checkbox label="Keep me logged in"></kup-checkbox>
              <a
                style="margin-top: auto; margin-bottom: auto"
                href="javascript:void(0);"
                >Did you forget your password?</a
              >
            </div>
            <div class="column-group">
              <kup-button
                icon="keyboard_arrow_right"
                label="Others"
                styling="outlined"
              ></kup-button>
              <kup-button
                icon="lock"
                label="Login"
                class="kup-secondary"
              ></kup-button>
            </div>
          </div>
        </div>
        <div slot="SA11">
          <kup-button
            label="develop environment"
            styling="outlined"
            class="kup-full-width"
          ></kup-button>
        </div>
        <div slot="SA12">
          <kup-button
            label="staging environment"
            styling="outlined"
            class="kup-full-width"
          ></kup-button>
        </div>
        <div slot="SA13">
          <kup-button
            label="production environment"
            styling="outlined"
            class="kup-full-width"
          ></kup-button>
        </div>
      </kup-dashboard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLogin',
  data() {
    return {
      sampleData1: {
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
      sampleData2: {
        data: {
          layout: 'column',
          sections: [
            {
              layout: 'row',
              sections: [
                {
                  layout: 'column',
                  sections: [
                    {
                      layout: 'column',
                      sections: [],
                      id: 'SA11',
                      loaded: true,
                    },
                    {
                      layout: 'column',
                      sections: [],
                      id: 'SA12',
                      loaded: true,
                    },
                    {
                      layout: 'column',
                      sections: [],
                      id: 'SA13',
                      loaded: true,
                    },
                  ],
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
          ],
          fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
          type: 'SCH',
          loaded: true,
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

<style scoped>
.column-group {
  display: flex;
  flex-direction: row;
}

.column-group > * {
  width: 100%;
}

.text-center {
  text-align: center;
}

.login-box {
  border: 1px solid var(--kup-border-color);
  box-shadow: var(--kup-box-shadow);
  margin: 4px;
  padding: 8px;
}
</style>
