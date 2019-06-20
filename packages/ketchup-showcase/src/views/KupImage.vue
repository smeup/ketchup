<template>
  <div class="wrapper">
    <div>
      <h3>Image without config</h3>
      <kup-image :src.prop="url" :alt.prop="alt"></kup-image>
    </div>

    <div>
      <h3>Custom width and height</h3>
      <kup-image
        :src.prop="urlCustomSize"
        :alt.prop="alt"
        :width.prop="128"
        :height.prop="64"
      ></kup-image>
    </div>

    <div>
      <h3>Single text badge</h3>
      <kup-image
        :src.prop="url"
        :alt.prop="alt"
        :badges.prop="textBadge"
      ></kup-image>
    </div>

    <div>
      <h3>Single icon badge</h3>
      <kup-image
        :src.prop="url"
        :alt.prop="alt"
        :badges.prop="iconBadge"
      ></kup-image>
    </div>

    <div>
      <h3>Multiple mixed badge</h3>
      <kup-image
        :src.prop="url"
        :alt.prop="alt"
        :badges.prop="mixedBadges"
      ></kup-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://via.placeholder.com/64',
      alt: 'An image',
      urlCustomSize: 'https://via.placeholder.com/128/64',
      textBadge: [
        {
          text: '12',
          position: 'TR',
        },
      ],
      iconBadge: [
        {
          icon: 'mdi mdi-close',
          position: 'BR',
        },
      ],
      mixedBadges: [
        {
          text: '10',
          position: 'TR',
        },
        {
          icon: 'mdi mdi-account',
          position: 'BR',
        },
      ],
    };
  },
};
</script>


<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>

