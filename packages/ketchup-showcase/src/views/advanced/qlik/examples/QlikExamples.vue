<template>
  <div>
    <div class="demo-wrapper">
      <p> The Qlik component output: </p>
      <br>
      <p> Page with qlik components: </p>
      <img :src="schermata" style="width: 606px"/>
      <br>
      <br>
      <p> 1x1 grid qlik component bordered: </p>
      <img :src="graficoLarge" />
      <br>
      <br>
      <p> 2x4 grid qlik component bordered: </p>
      <img :src="griglia" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QlikExamples',
  data() {
    return {
      schermata: require('../../../../../public/images/kup-qlik_esempio_schermata.png'),
      graficoLarge: require('../../../../../public/images/kup-qlik_esempio_grafico_large.png'),
      griglia: require('../../../../../public/images/kup-qlik_esempio_griglia.png'),
    };
  },
};
</script>
