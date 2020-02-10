<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Buttons consist in the main way in which a user interacts with the
        software.
      </p>
      <p>
        Sometimes, in tightly designed interfaces, there is no place for text.
        In this case it's advised to use icon buttons.
      </p>
      <p>
        The most basic button is a plain text one. In order to render it, you
        need to specify the
        <span class="code-word">label</span> attribute followed by its value.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic',
  data() {
    return {
      items: [
        {
          text: 'Props',
          icon: '',
          status: 'Active',
        },
        {
          text: 'Events',
          icon: '',
          status: '',
        },
        {
          text: 'HTML',
          icon: '',
          status: '',
        },
      ],
    };
  },
};
</script>
