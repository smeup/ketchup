<template>
  <div>
    <div id="container">
      <div>
        <h3>Layout 1</h3>
        <kup-dash id="layout1">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
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

      <div>
        <h3>Layout 2</h3>
        <kup-dash id="layout2" layout="2">
          <div slot="icon">
            <i class="mdi mdi-menu-up" style="color: green" />
          </div>
          <div slot="value-int">15,</div>
          <div slot="value-dec">86</div>
          <div slot="unit">%</div>
        </kup-dash>
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

      <div>
        <h3>Layout 3</h3>
        <kup-dash id="layout3" layout="3">
          <div slot="descr">Admissions Count</div>
          <div slot="value">34,678</div>
        </kup-dash>
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

      <div>
        <h3>Layout 4</h3>
        <kup-dash id="layout4" layout="4">
          <div slot="icon">
            <i class="mdi mdi-menu-down" style="color: red" />
          </div>
          <div slot="value-int" style="color: red">15,</div>
          <div slot="value-dec" style="color: red">86</div>
          <div slot="unit" style="color: red">%</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
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

      <div>
        <h3>Layout 5</h3>
        <kup-dash id="layout5" layout="5">
          <div slot="icon">
            <i class="mdi mdi-chart-bar" style="color: deepskyblue" />
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
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

      <div>
        <h3>Layout 6</h3>
        <kup-dash id="layout6" layout="6">
          <div slot="icon">
            <i class="mdi mdi-account-outline" style="color: #ffef3c" />
          </div>
          <div slot="value">12</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
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

      <div>
        <h3>Layout 7</h3>
        <kup-dash id="layout7" layout="7">
          <div slot="icon">
            <i class="mdi mdi-chart-bar" style="color: pink" />
          </div>
          <div slot="value">34,678</div>
          <div slot="descr">Admissions Count</div>
        </kup-dash>
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

      <div>
        <h3>Layout 8</h3>
        <kup-dash id="layout8" layout="8">
          <div slot="icon">
            <i class="mdi mdi-checkbox-blank-circle" style="color: green" />
          </div>
          <div slot="value">35</div>
          <div slot="descr">TASKS DONE</div>
        </kup-dash>
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
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata2: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value-int' to handle integer values.",
          value: '2',

          icon: 'trending_flat',
        },

        {
          text: "a section with the name 'value-dec' to handle decimal values.",
          value: '3',
          icon: 'trending_flat',
        },
        {
          text:
            "a section with the name 'unit' rappresent the unit of the value (example: %,cm,km,ettc..).",
          value: '4',
          icon: 'trending_flat',
        },
      ],

      listdata3: [
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],

      listdata4: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value-int' to handle integer values.",
          value: '2',

          icon: 'trending_flat',
        },

        {
          text: "a section with the name 'value-dec' to handle decimal values.",
          value: '3',
          icon: 'trending_flat',
        },
        {
          text:
            "a section with the name 'unit' rappresent the unit of the value (example: %,cm,km,ettc..).",
          value: '4',
          icon: 'trending_flat',
        },
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '5',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata5: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata6: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata7: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
      listdata8: [
        {
          text: "slot with the name 'icon' to select the icon of the dash.",
          value: '1',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text: "slot with the name 'value' to set the value for the dash.",
          value: '2',
          icon: 'trending_flat',
          trailingIcon: true,
        },
        {
          text:
            "slot with the name 'descr' to set the description of the dash.",
          value: '3',
          icon: 'trending_flat',
          trailingIcon: true,
        },
      ],
    };
  },
};
</script>
