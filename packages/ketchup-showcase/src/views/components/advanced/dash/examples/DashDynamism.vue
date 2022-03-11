<template>
  <div>
    <div class="demo-wrapper">
      <h3>With dynamism</h3>
      <kup-dash id="layoutdyn" layout="8" active>
        <div slot="icon">
          <kup-image
            size-x="48px"
            size-y="48px"
            resource="account-circle"
            color="blue"
          ></kup-image>
        </div>
        <div slot="value">35</div>
        <div slot="descr">Users</div>
      </kup-dash>
    </div>
    <p class="centered">Sample markup</p>
    <code class="flat">
      {{ markupBasic }}
      {{ markupBasic2 }}
      {{ markupBasic3 }}
      {{ markupBasic4 }}
      {{ markupBasic5 }}
      {{ markupBasic6 }}
      {{ markupBasic7 }}
    </code>
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
      markupBasic: '<kup-dash id="layoutdyn" layout="8" active>',
      markupBasic2: ' <div slot="icon">',
      markupBasic3:
        '   <kup-image size-x="48px" size-y="48px" resource="account-circle" color="blue></kup-image>',
      markupBasic4: ' </div>',
      markupBasic5: ' <div slot="value">35</div>',
      markupBasic6: ' <div slot="descr">Users</div>',
      markupBasic7: '</kup-dash>',
    };
  },
};
</script>
