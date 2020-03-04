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
        need to use the
        <span class="code-word">label</span> prop. It is possible to show a
        tooltip on mouse over using the
        <span class="code-word">tooltip</span> prop.
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
