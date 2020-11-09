<template>
  <div style="width: 1000px; height: 1200px">
    <h3>World</h3>
    <div style="width: 1000px; height: 600px">
      <kup-echarts
        :objectData.prop="mapData"
        :types.prop="types"
        :mapType.prop="mapType"
      />
    </div>
    <hr />

    <h3> Europe</h3>
    <div style="width: 1000px; height: 600px">
      <kup-echarts
        :objectData.prop="mapData"
        :types.prop="types"
        :mapType.prop="mapType1"
      />
    </div>
    <hr />
  </div>
</template>

<script>
import { mapData } from '@/mock/echarts';

export default {
  data() {
    return {
      types: ['map'],
      mapData,
      mapType: 'world',
      mapType1: 'europe',
    };
  },
};
</script>
