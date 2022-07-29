<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <dashboard-demo></dashboard-demo>
      </template>
      <template v-slot:1>
        <dashboard-basic></dashboard-basic>
      </template>
      <template v-slot:2>
        <dashboard-standard></dashboard-standard>
      </template>
      <template v-slot:3>
        <dashboard-login></dashboard-login>
      </template>
    </comp>
  </div>
</template>

<script>
import DashboardDemo from '@/views/components/advanced/dashboard/examples/DashboardDemo';
import DashboardBasic from '@/views/components/advanced/dashboard/examples/DashboardBasic';
import DashboardStandard from '@/views/components/advanced/dashboard/examples/DashboardStandard';
import DashboardLogin from '@/views/components/advanced/dashboard/examples/DashboardLogin';
import Comp from '@/views/templates/Comp';
export default {
  components: {
    DashboardDemo,
    DashboardBasic,
    DashboardStandard,
    DashboardLogin,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-dashboard',
      headtitle: 'Dashboard',
      titles: ['Playground', 'Basic usage', 'Standard', 'Login'],
    };
  },
  title: 'Ketchup | Dashboard',
};
</script>
