<template>
  <div>
    <p>Single series chart.</p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="singleData"
          :types.prop="types"
        />
      </div>
    </div>
    <br />
    <p>Multi series chart.</p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="axis"
          :data.prop="baseData"
          :types.prop="types"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { baseData } from '@/mock/echarts';
import { singleData } from '@/mock/echarts';
export default {
  data() {
    return {
      axis: 'Col1',
      types: ['Line'],
      baseData,
      singleData,
    };
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
