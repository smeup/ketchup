<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer component has 2 usable events </p>
      <ul>
        <li
          >'ClDrawer': viene lanciato ogni volta che il drawer viene chiuso.</li
        >
        <li>'ClOpen': viene lanciato ogni volta che il drawer viene aperto.</li>
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
        "  sideDrawer.addEventListener('ClDrawer',  (e)=> {  console.log ('Event Recieved'+':ClDrawer');  });",
      markupBasic3:
        " sideDrawer.addEventListener('OpDrawer',  (e)=> { console.log ('Event Recieved'+':OpDrawer');  });",
    };
  },
};
</script>
