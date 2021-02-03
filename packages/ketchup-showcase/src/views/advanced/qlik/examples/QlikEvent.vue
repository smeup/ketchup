<template>
  <div>
    <div class="demo-wrapper">
      <p> The Qlik component output: </p>
      <img :src="schermata" style="width: 606px"/>
      <br>
      <br>
      <p> Large Graph: </p>
      <img :src="graficoLarge" />
      <br>
      <br>
      <p> Grid: </p>
      <img :src="griglia" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QlikBasic',
  data() {
    return {
      schermata: require('../../../../../public/images/kup-qlik_esempio_schermata.png'),
      graficoLarge: require('../../../../../public/images/kup-qlik_esempio_grafico_large.png'),
      griglia: require('../../../../../public/images/kup-qlik_esempio_griglia.png'),
    };
  },
};
</script>
