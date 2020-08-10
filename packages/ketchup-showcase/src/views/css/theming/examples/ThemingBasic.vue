<template>
  <div>
    <p>
      Ketch.UP components use CSS variables in order to handle their style,
      it's a powerful and easy way to customize colors, fonts, etc. In addition to this variables, it is also possible to set a
      <span
        class="code-word"
      >customStyle</span> on each Ketch.UP component. For example, buttons apply the uppercase transformation to their labels.
      You can choose to change this behavior in your theme by using the custom style attribute of the theme JSON, which is structured like this:
      <br />
      <br />
      <span class="code-word">"YOUR_THEME_NAME"</span>:
      <br />
      <span class="code-word" style="margin-left: 2rem;">"cssVariables"</span>,
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"YOUR_CSS_VARIABLE"</span>,
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"YOUR_CSS_VARIABLE"</span>,
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"..."</span>,
      <br />
      <span class="code-word" style="margin-left: 2rem;">"customStyles"</span>
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"YOUR_CUSTOM_STYLE"</span>,
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"YOUR_CUSTOM_STYLE"</span>,
      <br />
      <span class="code-word" style="margin-left: 3.5rem;">"..."</span>,
    </p>
    <p>
      The theming process is handled by the library itself, through a mutation observer listening to changes of the attribute
      <span
        class="code-word"
      >kup-theme</span> on the document element. Whenever this attribute changes, the library performs a theme switch, falling back to
      <span
        class="code-word"
      >default</span> whenever the attribute contains an invalid id.
      You can try this process right away by typing in the text field below, which reflects its value on the the kup-theme attribute. Try typing
      <span
        class="code-word"
      >dark</span> and see what happens:
    </p>
    <div class="demo-container">
      <div class="kup-container">
        <kup-text-field label="Theme name" @kupTextFieldInput="setTheme"></kup-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setTheme(e) {
      let dom = document.documentElement;

      dom.setAttribute('kup-theme', event.detail.value);
    },
  },
  name: 'ThemingBasic',
};
</script>
