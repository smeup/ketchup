<template>
  <div>
    <div class="demo-wrapper">
      <div class="demo-container">
        <div class="kup-container" style="display: block">
          <kup-htm :data.prop="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmIframe',
  data() {
    return {
      data: {
        value: 'https://kubernetes.io/',
        obj: {
          t: 'J1',
          p: 'URL',
          k: '',
        },
      },
    };
  },
};
</script>
