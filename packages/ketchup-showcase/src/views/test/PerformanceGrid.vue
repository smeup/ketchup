<template>
  <div>
    <div id="performance-wrapper"></div>
  </div>
</template>

<script>
import { baseData } from '@/mock/chart';

export default {
  name: 'PerformanceGrid',
  mounted() {
    let wrapper = document.querySelector('#performance-wrapper');
    let comp = document.createElement('kup-grid');
    for (let index = 0; index < 300; index++) {
      let compChart = document.createElement('kup-chart');
      compChart.slot = index;
      compChart.span = 1;
      compChart.asp = '2d';
      compChart.axis = 'Col1';
      compChart.legend = 'right';
      compChart.series = [
        { code: 'Col2', decode: 'Something' },
        { code: 'Col3', decode: 'Something else' },
        { code: 'Col4', decode: 'Something else entirely' },
      ];
      compChart.data = baseData;
      compChart.sizeY = '48px';
      compChart.type = ['Hbar'];
      comp.appendChild(compChart);
    }
    wrapper.appendChild(comp);
  },
};
</script>
