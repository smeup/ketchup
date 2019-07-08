<template>
  <div>
    <kup-box :data.prop="basicData" :layout.prop="horizontalLayout"></kup-box>

    <hr>

    <kup-box :data.prop="basicData" :layout.prop="layout1"></kup-box>
  </div>
</template>


<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      horizontalLayout: {
        sections: [
          {
            horizontal: true,
            sections: [{}, {}, {}, {}],
          },
        ],
      },
      layout1: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '100px',
              },
              {
                sections: [{}, {}, {}],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
