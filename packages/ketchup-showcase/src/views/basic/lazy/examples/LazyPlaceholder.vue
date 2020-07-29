<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Displayed below, a series of 100 kup-card components handled with kup-lazy.
        <br />You can check how they will be rendered when they enter the viewport, replacing the existing SVG placeholder.
        <br />Why so many cards? Well, so you can test it extensively and see how performance-friendly it is. :)
      </p>
      <div class="demo-container">
        <div class="kup-container" v-for="n in 100" :key="n">
          <kup-lazy component-name="kup-card" :data.prop="data"></kup-lazy>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kup-container {
  height: 300px;
  width: 300px;
}
</style>

<script>
export default {
  name: 'LazyPlaceholder',
  data() {
    return {
      data: {
        data: {
          button1: { icon: 'favorite', flat: true },
          image1: {
            resource: 'images/catz_small.jpg',
          },
          text1: 'Lazy loaded!',
          text2:
            'This card was rendered as soon as it was partially included inside the viewport.',
        },
      },
    };
  },
};
</script>
