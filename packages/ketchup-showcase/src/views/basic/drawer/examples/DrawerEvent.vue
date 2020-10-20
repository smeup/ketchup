<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer component has 2 usable events </p>
      <ul>
        <li
          >'kupDrawerClose': it is launched every time the drawer is closed.</li
        >
        <li
          >'kupDrawerOpen': it is launched every time the drawer is opened.</li
        >
      </ul>

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
      markupBasic2:
        "  sideDrawer.addEventListener('kupDrawerClose',  (e)=> {  console.log ('Event Received'+':kupDrawerClose');  });",
      markupBasic3:
        " sideDrawer.addEventListener('kupDrawerOpen',  (e)=> { console.log ('Event Received'+':kupDrawerOpen');  });",
    };
  },
};
</script>
