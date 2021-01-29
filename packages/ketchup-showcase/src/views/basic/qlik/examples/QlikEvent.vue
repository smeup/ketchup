<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer component has 2 events: </p>
      <img src="{{schermata}}">
      <img src="{{graficoLarge}}">
      <img src="{{griglia}}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      schermata:
        "./public./images./kup-qlik_esempio_schermata.PNG",
      graficoLarge:
        "./public./images./kup-qlik_esempio_grafico_large.PNG",
      griglia:
        "./public./images./kup-qlik_esempio_griglia.PNG",
    };
  },
};
</script>
