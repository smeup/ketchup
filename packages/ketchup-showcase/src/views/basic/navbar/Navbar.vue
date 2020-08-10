<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <navbar-demo></navbar-demo>
      </template>
      <template v-slot:1>
        <navbar-basic></navbar-basic>
      </template>
    </comp>
  </div>
</template>

<script>
import NavbarDemo from '@/views/basic/navbar/examples/NavbarDemo';
import NavbarBasic from '@/views/basic/navbar/examples/NavbarBasic';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    NavbarDemo,
    NavbarBasic,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-nav-bar',
      headtitle: 'Navbar',
      titles: ['Playground', 'Basic usage'],
    };
  },
};
</script>
