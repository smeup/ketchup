<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Image components can also display up to 4 badges, which can be displayed
        on top of each corner. To learn more about badges and how to populate
        this component, check the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/badge">Badge</a>
        page. <br />The prop which contains the badges' data is
        <span class="code-word">badgeData</span>.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-image
            :badgeData.prop="badgeData"
            size-x="32px"
            size-y="32px"
            resource="notifications"
          ></kup-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBadges',
  data() {
    return {
      badgeData: [
        {
          text: '99+',
          position: 'TR',
        },
      ],
    };
  },
};
</script>
