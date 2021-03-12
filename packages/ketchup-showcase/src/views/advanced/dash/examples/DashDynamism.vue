<template>
  <div>
    <div id="container">
      <h3>With dynamism</h3>
      <kup-dash id="layoutdyn" layout="8" active>
        <div slot="icon">
          <i class="mdi mdi-facebook" style="color: blue" />
        </div>
        <div slot="value">35</div>
        <div slot="descr">Users</div>
      </kup-dash>
    </div>
    <kup-list
      show-icons
      class="handles-custom-style hydrated"
      :data.prop="listdata"
      display-mode="description"
      filter
      role-type="listbox"
      selectable
    ></kup-list>
  </div>
</template>

<script>
export default {
  name: 'DashDynamism',
  data() {
    return {
      listdata: [
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
