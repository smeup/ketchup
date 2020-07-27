<template>
  <div>
    <div class="demo-wrapper">
      <div class="demo-container">
        <div class="kup-container">
          <kup-grid :data.prop="data"></kup-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyExample',
  data() {
    return {
      data: [
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
        {
          content: '<kup-checkbox slot="element"></kup-checkbox>',
          tagName: 'kup-lazy',
        },
      ],
      markupBasic: '<kup-lazy></kup-lazy>',
    };
  },
};
</script>
