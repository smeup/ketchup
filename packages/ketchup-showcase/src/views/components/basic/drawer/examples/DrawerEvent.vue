<template>
  <div>
    <div class="demo-wrapper">
      <p> The drawer component has 2 events: </p>
      <ul>
        <li
          ><span class="code-word">kup-drawer-close</span>: fired every time the
          drawer is closed.</li
        >
        <li
          ><span class="code-word">kup-drawer-open</span>: fired every time the
          drawer is opened.</li
        >
        <li
          ><span class="code-word">kup-drawer-ready</span>: fired after the
          initial life cycle of the drawer is complete.</li
        >
      </ul>
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat"
        >{{ markupBasic }}<br />{{ markupBasic2 }}<br />{{ markupBasic3
        }}<br />{{ markupBasic4 }}<br
      /></code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerBasic',
  data() {
    return {
      markupBasic: 'const drawer = document.querySelector("kup-drawer");',
      markupBasic2:
        "drawer.addEventListener('kup-drawer-close', e => { console.log ('Event kup-drawer-close Received', e) });",
      markupBasic3:
        "drawer.addEventListener('kup-drawer-open', e => { console.log ('Event kup-drawer-open Received', e )});",
      markupBasic4:
        "drawer.addEventListener('kup-drawer-ready', e => { console.log ('Event kup-drawer-ready Received', e )});",
    };
  },
};
</script>
