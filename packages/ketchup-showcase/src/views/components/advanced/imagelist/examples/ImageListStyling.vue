<template>
  <div>
    <div class="demo-wrapper">
      <span
        >It's possible to let the image list fill all the available horizontal
        space by using the <span class="code-word">kup-full-width</span> CSS
        class.<br />
      </span>
    </div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-image-list
          class="kup-full-width"
          :data.prop="data"
        ></kup-image-list>
      </div>
      <p class="centered">Sample choice markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageListStyling',
  data() {
    return {
      data: [
        {
          children: [
            {
              children: [
                {
                  icon: 'images/catz_small.jpg',
                  id: '1aa',
                  value: 'Cats',
                },
              ],
              icon: 'photo_library',
              id: '1a',
              value: 'Photos',
            },
            {
              children: [
                {
                  icon: 'notifications_active',
                  id: '1ba',
                  value: 'Notifications',
                },
                {
                  icon: 'network_wifi',
                  id: '1bb',
                  value: 'Connection',
                },
                {
                  icon: 'language',
                  id: '1bc',
                  value: 'Language',
                },
              ],
              icon: 'settings',
              id: '1b',
              value: 'Settings',
            },
          ],
          icon: 'menu',
          id: '1',
          value: 'Menu',
        },
      ],
      markupBasic: '<kup-image-list class="kup-full-width"></kup-iamge-list>',
    };
  },
};
</script>
