<template>
  <div>
    <div class="demo-wrapper">
      <p>
       drawer is a very used and useful web component in web pages.
      </p>
      <p>
       It looks like a side menu that allows us to move within the various sections of our website.
      </p>
      <p>
      basic use of the drawer looks like a side menu,
      with title and subtitle and a list of various sections in which to move.
        <span class="code-word">label</span> prop.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic',
  data() {
    return {
      data: [
        {
          text: 'Props',
          icon: '',
          active: true,
        },
        {
          text: 'Events',
          icon: '',
          active: false,
        },
        {
          text: 'HTML',
          icon: '',
          active: false,
        },
      ],
    };
  },
};
</script>
