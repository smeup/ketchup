<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ketchup-fld id="fld1" first="Runaways" last="'Call me any time"></ketchup-fld>
    <ketchup-button label="Sono bottone"></ketchup-button>
    <ketchup-radio id="krg1"></ketchup-radio>
    <ketchup-text-input id="int1" is-clearable initial-value="ciao"></ketchup-text-input>
    <ketchup-combo initial-value="sono di prova" is-clearable></ketchup-combo>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
