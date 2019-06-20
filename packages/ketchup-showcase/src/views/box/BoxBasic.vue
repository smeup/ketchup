<template>
  <div>
    <h3>Without data</h3>
    <kup-box></kup-box>

    <hr />

    <h3>Without layout</h3>
    <p>When no layout is defined, a default one will be used.</p>
    <kup-box :data.prop="basicData"></kup-box>

    <h3>3 columns</h3>
    <kup-box :data.prop="basicData" :columns.prop="3"></kup-box>

    <h3>Collapsible sections</h3>
    <kup-box :data.prop="basicData" :layout.prop="collapseLay"></kup-box>

    <h3>Images with badge</h3>
    <kup-box :data.prop="badgeData"></kup-box>
  </div>
</template>

<script>
import { defaultData, badgeData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      badgeData,
      collapseLay: {
        sections: [
          {
            style: {
              textAlign: 'center',
            },
          },
          {
            collapsible: true,
            style: {
              textAlign: 'center',
            },
            children: [
              {
                style: {
                  fontWeight: 'bold',
                },
              },
              {},
              {},
            ],
          },
        ],
      },
    };
  },
};
</script>
