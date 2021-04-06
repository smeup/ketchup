<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Dash list component is an extension of the Dash component, it
        creates a list of Dash objects that you can customize by choosing
        different layouts or colors.</p
      >
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
