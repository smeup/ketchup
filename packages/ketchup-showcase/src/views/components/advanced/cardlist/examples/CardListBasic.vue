<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Cards lists are a set of scalable
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/button"
          >kup-card</a
        >
        elements. </p
      ><br />
      <p>For this reason, they inherit their style.</p>
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListBasic',
  data() {
    return {
      markupBasic: '<kup-card-list></kup-card-list>',
    };
  },
};
</script>
