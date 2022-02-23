<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The Iframe component is a simple wrapper of an html
        <span class="code-word">iframe</span> element. <br />It can be displayed
        as an embedded window or as a button that lets the user open the link in
        a new tab. In order to do so, the
        <span class="code-word">isButton</span> prop must be set to true.
        <br />Considering the nature of the button, which is another Ketchup
        component, you can use the
        <span class="code-word">buttonData</span> prop to style it as you need.
        By default, <span class="code-word">label</span> will be set to "Open in
        new tab" and <span class="code-word">icon</span> to "open_in_new". For
        more information about the styling options check the
        <a href="https://ketchup.smeup.com/ketchup-showcase/#/button">Button</a>
        component page.
      </p>
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IframeBasic',
  data() {
    return {
      markupBasic: '<kup-iframe src="YOUR_URL"></kup-iframe>',
    };
  },
};
</script>
