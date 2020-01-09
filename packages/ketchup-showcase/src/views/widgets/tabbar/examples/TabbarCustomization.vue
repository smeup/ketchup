<template>
  <div>
    <div class="demo-wrapper">
      <p>
        When the style of the component doesn't suit your client's preferences,
        you can customize a few elements. In order to activate the customization
        you need to use the
        <span class="code-word">custom</span> attribute. This is still a W.I.P.
        feature, so there will be more information about it in the future.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-tab-bar :items.prop="items" custom></wup-tab-bar>
        </div>
        <p class="centered">Custom sample markup</p>
        <code class="flat">{{ markupCustom }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarCustomization',
  data() {
    return {
      items: [
        {
          text: 'Favorites',
          icon: 'favorites',
          status: 'Active',
        },
        {
          text: 'Set alarm clock',
          icon: 'alarm_on',
          status: '',
        },
        {
          text: 'Settings',
          icon: 'build',
          status: '',
        },
        {
          text: 'Iconless',
          icon: '',
          status: '',
        },
      ],
      markupCustom: '<wup-tab-bar custom></wup-tab-bar>',
    };
  },
};
</script>
