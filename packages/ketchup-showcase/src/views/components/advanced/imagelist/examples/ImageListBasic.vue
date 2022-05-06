<template>
  <div>
    <div class="demo-wrapper">
      <span
        >The Image List component features a grid of images or icons.<br /><br />
        The data structure of this component is the same as many others, it
        consists of an array of KupDataNodes.
      </span>
    </div>
    <p class="centered">Sample markup</p>
    <code class="flat">{{ markupBasic }}</code>
  </div>
</template>
<script>
export default {
  name: 'ImageListBasic',
  data() {
    return {
      markupBasic: '<kup-image-list></kup-image-list>',
    };
  },
};
</script>
