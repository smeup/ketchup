<template>
  <div>
    <div class="demo-wrapper">
      <p
        >Buttons consist in the main way in which a user interacts with the
        software.</p
      >
      <p
        >Sometimes, in tightly designed interfaces, there is no place for text.
        In this case it's advised to use icon buttons.</p
      >
      <p>
        The most basic button is a plain text one. In order to render it, you
        need to specify the
        <span class="code-word">text</span> attribute followed by its value.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <wup-button text="I am a button"></wup-button>
        </div>
        <p class="centered">Plain text sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic',
  data() {
    return {
      markupBasic: '<wup-button text="I am a button"></wup-button>',
    };
  },
};
</script>
