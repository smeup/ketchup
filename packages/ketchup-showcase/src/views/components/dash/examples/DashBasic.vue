<template>
  <div>
    <div id="container">
      <div>
        <h3>Layout 1</h3>
        <kup-dash id="layout1">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 2</h3>
        <kup-dash id="layout2" layout="2">
          <div slot="icon">
            <i class="mdi mdi-menu-up" style="color: green;" />
          </div>
          <div slot="value-int">15,</div>
          <div slot="value-dec">86</div>
          <div slot="unit">%</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 3</h3>
        <kup-dash id="layout3" layout="3">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 4</h3>
        <kup-dash id="layout4" layout="4">
          <div slot="icon">
            <i class="mdi mdi-menu-down" style="color: red;" />
          </div>
          <div slot="value-int" style="color: red;">15,</div>
          <div slot="value-dec" style="color: red;">86</div>
          <div slot="unit" style="color: red;">%</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 5</h3>
        <kup-dash id="layout5" layout="5">
          <div slot="icon">
            <i class="mdi mdi-chart-bar" style="color: deepskyblue;" />
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 6</h3>
        <kup-dash id="layout6" layout="6">
          <div slot="icon">
            <i class="mdi mdi-account-outline" style="color: #ffef3c;" />
          </div>
          <div slot="value">12</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 7</h3>
        <kup-dash id="layout7" layout="7">
          <div slot="icon">
            <i class="mdi mdi-chart-bar" style="color: pink;" />
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
      </div>

      <div>
        <h3>Layout 8</h3>
        <kup-dash id="layout8" layout="8">
          <div slot="icon">
            <i class="mdi mdi-checkbox-blank-circle" style="color: green;" />
          </div>
          <div slot="value">35</div>
          <div slot="descr">TASKS DONE</div>
        </kup-dash>
      </div>

      <div>
        <h3>With dynamism</h3>
        <kup-dash id="layoutdyn" layout="8" active>
          <div slot="icon">
            <i class="mdi mdi-facebook" style="color: blue;" />
          </div>
          <div slot="value">35</div>
          <div slot="descr">Users</div>
        </kup-dash>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashExamples',
};
</script>

<style scoped lang="scss">
#container {
  display: grid;
  grid-template-columns: 1fr 5% 1fr;

  > div:nth-of-type(odd) {
    grid-column-start: 1;
    grid-column-end: 1;
  }

  > div:nth-of-type(even) {
    grid-column-start: 3;
    grid-column-end: 3;
  }
}
</style>