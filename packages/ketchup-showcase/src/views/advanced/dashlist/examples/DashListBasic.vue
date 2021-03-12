<template>
  <div>
    <div class="demo-wrapper">
      <p>--Description--</p>
      <br />
      <h3>Horizontal Configuration</h3>
      <div class="demo-container">
        <div class="kup-container">
          <div style="overflow: scroll">
            <kup-dash-list
              :data.prop="Data"
              horizontal="true"
              fontsize="15px"
            ></kup-dash-list>
          </div>
          <br />
        </div>
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mockedDefaultData,
  defaultIconColor,
  defaultTextColor,
  defaultValueColor,
} from '@/mock/mockedDashList';
export default {
  name: 'DashBasic',
  data() {
    return {
      Data: mockedDefaultData,
      IconColor: defaultIconColor,
      textColor: defaultTextColor,
      valueColor: defaultValueColor,
      markupBasic:
        '<kup-dash-list :data.prop="Data" horizontal.prop="true" fontsize = "15px"></kup-dash-list>',
    };
  },
};
</script>
