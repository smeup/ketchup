<template>
  <div class="wrapper">
    <div>
      <h3>No config</h3>
      <kup-image-button
        :images.prop="images"
        @kupImageButtonSelected="onSelection"
      />

      <h3>Custom dimension</h3>
      <kup-image-button
        :images.prop="images"
        :size.prop="128"
        @kupImageButtonSelected="onSelection"
      />

      <h3>with description</h3>
      <kup-image-button
        :images.prop="images"
        show-description
        @kupImageButtonSelected="onSelection"
      />

      <h3>Multi selection</h3>
      <kup-image-button
        :images.prop="images"
        allow-multi-selection
        @kupImageButtonSelected="onSelection"
      />
    </div>

    <div>
      <ul v-if="selectedImages">
        <li v-for="image in selectedImages" :key="image">
          {{ image }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImages: null,
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
          description: 'asdasdsaidansods odaosdnasond osadnoas ndosandoas',
        },
        {
          src: 'https://via.placeholder.com/128?text=MO',
          description: 'MOROLE',
        },
      ],
    };
  },

  methods: {
    onSelection(event) {
      const detail = event.detail;

      this.selectedImages = detail.selectedImages;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>

