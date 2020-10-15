<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The web drawer component also has an intelligent public method: Toggle
        (), which can be called up from the outside and is able to open the
        drawer if it is closed and vice versa if it is open.
      </p>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code align="center" class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3 }}<br
      /></code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic: ' const sideDrawer = document.querySelector("kup-drawer");',
      markupBasic2: ' function menu(){ sideDrawer.Toggle();  }',
    };
  },
};
</script>
