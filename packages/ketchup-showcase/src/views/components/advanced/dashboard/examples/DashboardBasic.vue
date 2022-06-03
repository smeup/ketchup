<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Dashboard component is used for rendering a groups of component in
        specific layout set by <span class="code-word">data</span> of the
        component. The dashboard component allow to move sections contains in
        data and save. Set <span class="code-word">enableDesign</span> to 'true'
        for enable sections move.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardBasic',
  data() {
    return {
      markupBasic: '<kup-dashboard></kup-dashboard>',
    };
  },
};
</script>
