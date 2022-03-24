<template>
  <div>
    <p
      >BoxList (also called cards) is a list of surfaces that display content
      and actions. The elements like text, images and actions must be positioned
      according to the hierarchy of the content. </p
    ><h3>Without data</h3>
    <kup-box></kup-box>
    <hr />

    <h3>Without layout</h3>
    <p>When no layout is defined, a default one will be used.</p>
    <kup-box :data.prop="basicData"></kup-box>
    <hr />

    <h3>3 columns</h3>
    <kup-box :data.prop="basicData" :columns.prop="3"></kup-box>
    <hr />

    <h3>Collapsible sections</h3>
    <kup-box :data.prop="basicData" :layout.prop="collapseLay"></kup-box>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      collapseLay: {
        sections: [
          {
            sections: [
              {
                style: {
                  textAlign: 'center',
                },
              },
              {
                collapsible: true,
                id: '1',
                style: {
                  textAlign: 'center',
                },
                sections: [
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
        ],
      },
    };
  },
};
</script>
