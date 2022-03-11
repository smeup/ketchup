<template>
  <div>
    <div id="container">
      <!-- Layout 1-->
      <div>
        <h3>Layout 1</h3>
        <kup-dash id="layout1">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic }}
          {{ markupBasic2 }}
          {{ markupBasic3 }}
          {{ markupBasic4 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata1"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 2-->
      <div>
        <h3>Layout 2</h3>
        <kup-dash id="layout2" layout="2">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="arrow_drop_up"
              color="green"
            ></kup-image>
          </div>
          <div slot="value-int">15,</div>
          <div slot="value-dec">86</div>
          <div slot="unit">%</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic5 }}
          {{ markupBasic6 }}
          {{ markupBasic7 }}
          {{ markupBasic8 }}
          {{ markupBasic9 }}
          {{ markupBasic10 }}
          {{ markupBasic11 }}
          {{ markupBasic12 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata2"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 3-->
      <div>
        <h3>Layout 3</h3>
        <kup-dash id="layout3" layout="3">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic13 }}
          {{ markupBasic14 }}
          {{ markupBasic15 }}
          {{ markupBasic16 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata3"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 4-->
      <div>
        <h3>Layout 4</h3>
        <kup-dash id="layout4" layout="4">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="arrow_drop_down"
              color="red"
            ></kup-image>
          </div>
          <div slot="value-int" style="color: red">15,</div>
          <div slot="value-dec" style="color: red">86</div>
          <div slot="unit" style="color: red">%</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic17 }}
          {{ markupBasic18 }}
          {{ markupBasic19 }}
          {{ markupBasic20 }}
          {{ markupBasic21 }}
          {{ markupBasic22 }}
          {{ markupBasic23 }}
          {{ markupBasic24 }}
          {{ markupBasic25 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata4"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 5-->
      <div>
        <h3>Layout 5</h3>
        <kup-dash id="layout5" layout="5">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="chart-bar"
              color="deepskyblue"
            ></kup-image>
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic26 }}
          {{ markupBasic27 }}
          {{ markupBasic28 }}
          {{ markupBasic29 }}
          {{ markupBasic30 }}
          {{ markupBasic31 }}
          {{ markupBasic32 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata5"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 6-->
      <div>
        <h3>Layout 6</h3>
        <kup-dash id="layout6" layout="6">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="show_chart"
              color="#ffef3c"
            ></kup-image>
          </div>
          <div slot="value">12</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic33 }}
          {{ markupBasic34 }}
          {{ markupBasic35 }}
          {{ markupBasic36 }}
          {{ markupBasic37 }}
          {{ markupBasic38 }}
          {{ markupBasic39 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata6"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 7-->
      <div>
        <h3>Layout 7</h3>
        <kup-dash id="layout7" layout="7">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="chart-bar"
              color="pink"
            ></kup-image>
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic40 }}
          {{ markupBasic41 }}
          {{ markupBasic42 }}
          {{ markupBasic43 }}
          {{ markupBasic44 }}
          {{ markupBasic45 }}
          {{ markupBasic46 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata7"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>
      <!-- Layout 8-->
      <div>
        <h3>Layout 8</h3>
        <kup-dash id="layout8" layout="8">
          <div slot="icon">
            <kup-image
              size-x="48px"
              size-y="48px"
              resource="check_circle"
              color="green"
            ></kup-image>
          </div>
          <div slot="value">35</div>
          <div slot="descr">TASKS DONE</div>
        </kup-dash>
        <p class="centered">Sample markup</p>
        <code class="flat">
          {{ markupBasic47 }}
          {{ markupBasic48 }}
          {{ markupBasic49 }}
          {{ markupBasic50 }}
          {{ markupBasic51 }}
          {{ markupBasic52 }}
          {{ markupBasic53 }}
        </code>
        <br />
        <kup-list
          show-icons
          class="handles-custom-style hydrated"
          :data.prop="listdata8"
          display-mode="description"
          filter
          role-type="listbox"
          selectable
        ></kup-list>
      </div>

      <!-- <div>
        <h3>With dynamism</h3>
        <kup-dash id="layoutdyn" layout="8" active>
          <div slot="icon">
            <i class="mdi mdi-facebook" style="color: blue" />
          </div>
          <div slot="value">35</div>
          <div slot="descr">Users</div>
        </kup-dash>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashLayouts',
  data() {
    return {
      listdata1: [
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata2: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value-int' to handle integer values.",
          id: '2',

          icon: 'trending_flat',
        },

        {
          value:
            "a section with the name 'value-dec' to handle decimal values.",
          id: '3',
          icon: 'trending_flat',
        },
        {
          value:
            "a section with the name 'unit' rappresent the unit of the value (example: %,cm,km,ettc..).",
          id: '4',
          icon: 'trending_flat',
        },
      ],

      listdata3: [
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],

      listdata4: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value-int' to handle integer values.",
          id: '2',

          icon: 'trending_flat',
        },

        {
          value:
            "a section with the name 'value-dec' to handle decimal values.",
          id: '3',
          icon: 'trending_flat',
        },
        {
          value:
            "a section with the name 'unit' rappresent the unit of the value (example: %,cm,km,ettc..).",
          id: '4',
          icon: 'trending_flat',
        },
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '5',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata5: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata6: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata7: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata8: [
        {
          value: "slot with the name 'icon' to select the icon of the dash.",
          id: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value: "slot with the name 'value' to set the value for the dash.",
          id: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          value:
            "slot with the name 'descr' to set the description of the dash.",
          id: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      //Layout 1
      markupBasic: '<kup-dash id="layout1">',
      markupBasic2: '   <div slot="descr">Admissions Count</div>',
      markupBasic3: '   <div slot="value">34,678</div>',
      markupBasic4: '</kup-dash>',
      //Layout 2
      markupBasic5: '<kup-dash id="layout2" layout="2">',
      markupBasic6: '   <div slot="icon">',
      markupBasic7:
        '     <kup-image size-x="48px" size-y="48px"resource="arrow_drop_up" color="green"></kup-image>',
      markupBasic8: '   </div>',
      markupBasic9: '   <div slot="value-int">15,</div>',
      markupBasic10: '   <div slot="value-dec">86</div>',
      markupBasic11: '   <div slot="unit">%</div>',
      markupBasic12: '</kup-dash>',
      //Layout 3
      markupBasic13: '<kup-dash id="layout3" layout="3">',
      markupBasic14: '  <div slot="descr">Admissions Count</div>',
      markupBasic15: '  <div slot="value">34,678</div>',
      markupBasic16: '</kup-dash>',
      //Layout 4
      markupBasic17: '<kup-dash id="layout4" layout="4">',
      markupBasic18: '  <div slot="icon">',
      markupBasic19:
        '    <kup-image size-x="48px" size-y="48px"resource="arrow_drop_down" color="red"></kup-image>',
      markupBasic20: '  </div>',
      markupBasic21: '  <div slot="value-int" style="color: red">15,</div>',
      markupBasic22: '  <div slot="value-dec" style="color: red">86</div>',
      markupBasic23: '  <div slot="unit" style="color: red">%</div>',
      markupBasic24: '  <div slot="descr">Admissions Count</div>',
      markupBasic25: '</kup-dash>',
      //Layout 5
      markupBasic26: '<kup-dash id="layout5" layout="5">',
      markupBasic27: '  <div slot="icon">',
      markupBasic28:
        '    <kup-image size-x="48px" size-y="48px" resource="chart-bar" color="deepskyblue"></kup-image>',
      markupBasic29: '  </div>',
      markupBasic30: '  <div slot="value">34,678</div>',
      markupBasic31: '  <div slot="descr">Admissions Count</div>',
      markupBasic32: '</kup-dash>',
      //Layout 6
      markupBasic33: '<kup-dash id="layout6" layout="6">',
      markupBasic34: '  <div slot="icon">',
      markupBasic35:
        '    <kup-image size-x="48px" size-y="48px"resource="timeline" color="#ffef3c"></kup-image>',
      markupBasic36: '  </div>',
      markupBasic37: '  <div slot="value">12</div>',
      markupBasic38: '  <div slot="descr">Admissions Count</div>',
      markupBasic39: '</kup-dash>',
      //Layout 7
      markupBasic40: '<kup-dash id="layout7" layout="7">',
      markupBasic41: '  <div slot="icon">',
      markupBasic42:
        '    <kup-image size-x="48px" size-y="48px" resource="chart-bar" color="pink"></kup-image>',
      markupBasic43: '  </div>',
      markupBasic44: '  <div slot="value">34,678</div>',
      markupBasic45: '  <div slot="descr">Admissions Count</div>',
      markupBasic46: '</kup-dash>',
      //Layout 8
      markupBasic47: '<kup-dash id="layout8" layout="8">',
      markupBasic48: '  <div slot="icon">',
      markupBasic49:
        '    <kup-image size-x="48px" size-y="48px" resource="check_circle" color="green"></kup-image>',
      markupBasic50: '  </div>',
      markupBasic51: '  <div slot="value">35</div>',
      markupBasic52: '  <div slot="descr">TASKS DONE</div>',
      markupBasic53: '</kup-dash>',
    };
  },
};
</script>
