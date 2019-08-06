<template>
  <div>
    <h3>No config</h3>
    <kup-image-button :images.prop="images" />

    <h3>Custom dimension</h3>
    <kup-image-button :images.prop="images" :size.prop="128" />

    <h3>with description</h3>
    <kup-image-button :images.prop="images" show-description />

    <h3>Multi selection</h3>
    <kup-image-button :images.prop="images" allow-multi-selection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: 'https://via.placeholder.com/128?text=CF',
          description: 'CASFRA',
        },
        {
          src: 'https://via.placeholder.com/128?text=DM',
          description: 'DIGMAR',
        },
        {
          src: 'https://via.placeholder.com/128?text=DG',
          description: 'DELGIO',
        },
        {
          src: 'https://via.placeholder.com/128?text=MO',
          description: 'MOROLE',
        },
      ],
    };
  },
};
</script>

