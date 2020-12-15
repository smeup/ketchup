<template>
  <div>
    <p>World map chart.</p>
    <div style="margin: auto; width: 1000px; height: 600px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="mapData"
        :types.prop="types"
        :mapType.prop="mapType"
      />
    </div>
    <br />
    <p>Europe map chart.</p>
    <div style="margin: auto; width: 1000px; height: 600px">
      <kup-echarts
        :axis.prop="axis"
        :data.prop="mapData"
        :types.prop="types"
        :mapType.prop="mapType1"
      />
    </div>
  </div>
</template>

<script>
import { mapData } from '@/mock/echarts';

export default {
  data() {
    return {
      axis: 'Col1',
      types: ['map'],
      mapData,
      mapType: 'world',
      mapType1: 'europe',
    };
  },
};
</script>
