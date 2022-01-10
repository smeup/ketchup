<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The Qlik component is able to display graphs which show the data
        analyzed by a qlik server.
      </p>
      <p> The following examples show some outputs of this components. </p>
      <br />
      <p> Page with qlik components: </p>
      <img :src="schermata" style="width: 606px" />
      <br />
      <br />
      <p> 1x1 grid qlik component bordered: </p>
      <img :src="graficoLarge" />
      <br />
      <br />
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
      schermata: 'images/qlik/kup-qlik_esempio_schermata.PNG',
      graficoLarge: 'images/qlik/kup-qlik_esempio_grafico_large.PNG',
      griglia: 'images/qlik/kup-qlik_esempio_grid.png',
    };
  },
};
</script>
