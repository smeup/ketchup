<template>
  <div>
    <p>
      An even more elegant way to customize components' look is using Ketchup
      CSS variables. You can check the whole list in the
      <a href="https://ketchup.smeup.com/ketchup-showcase/#/theming">Theming</a>
      page. <br />Let's take the button we created before:
    </p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-button
          custom-style="#kup-component button { background-color: blue; color: yellow; border-radius: 0px; }"
          label="Your button"
        ></kup-button>
      </div>
    </div>
    <p>
      Remember how we targeted the
      <span class="code-word">button</span> element? That's why we needed to set
      the colors specifically on that element. By using variables, we can just
      set the at the root level and the component will automatically use them
      where needed. <br />For example, to recreate the button above I could just
      set these variables inside the
      <span class="code-word">customStyle</span> prop:
    </p>
    <div class="demo-container" style="padding: 3rem 0">
      <code class="flat">{{ markupVariable }}</code>
    </div>
    <br />
    <p>And this will be the result:</p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-button
          custom-style=":host { --kup-button-primary-color: #0000ff; --kup-button-primary-color-rgb: 0,0,255; --kup-button-text-on-primary-color: #ffff00; --kup-button-primary-color-h: 240; --kup-button-primary-color-s: 100%; --kup-button-primary-color-l: 50%;}"
          label="Your button with variables"
        ></kup-button>
      </div>
    </div>
    <br />
    <p>
      <br />There's no border radius anymore: that's because there isn't a
      variable which handles it - so if you want to change it you still have to
      add it manually to the button element. <br />In conclusion: when
      possibile, it's always to be preferred using variables instead of manually
      targeting elements.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CustomizationVariables',
  data() {
    return {
      markupVariable:
        ':host { --kup-button-primary-color: #0000ff; --kup-button-primary-color-rgb: 0,0,255; --kup-button-text-on-primary-color: #ffff00; --kup-button-primary-color-h: 240; --kup-button-primary-color-s: 100%; --kup-button-primary-color-l: 50%;}',
    };
  },
};
</script>
