<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <navbar-demo></navbar-demo>
      </template>
      <template v-slot:1>
        <navbar-basic></navbar-basic>
      </template>
      <template v-slot:2>
        <navbar-styling></navbar-styling>
      </template>
    </comp>
  </div>
</template>

<script>
import NavbarDemo from '@/views/components/basic/navbar/examples/NavbarDemo';
import NavbarBasic from '@/views/components/basic/navbar/examples/NavbarBasic';
import NavbarStyling from '@/views/components/basic/navbar/examples/NavbarStyling';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    NavbarDemo,
    NavbarBasic,
    NavbarStyling,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-nav-bar',
      headtitle: 'Navbar',
      titles: ['Playground', 'Basic usage', 'Styling'],
    };
  },
  title: 'Ketchup | Nav bar',
};
</script>
