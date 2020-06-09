<template>
  <div>
    <div class="demo-wrapper">
      <p>Cards are surfaces containing informations or actions regarding a single subject.</p>
      <p>What makes the cards really useful is the concept of a premade layout which can be populated through JSON.</p>
      <p>The idea behind JSON population is pretty simple, properties reflect the name of the component and are followed by a progressive number. Here is a list of properties that are currently used/supported:</p>
      <br />
      <span class="code-word">button</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/button"
      >kup-button</a>.
      <br />
      <span class="code-word">color</span> contains a CSS color string.
      <br />
      <span class="code-word">emphText</span> contains a string to be displayed as emphasized text.
      <br />
      <span class="code-word">image</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/image"
      >kup-image</a>.
      <br />
      <span class="code-word">progressBar</span> contains an object reflecting props of
      <a
        href="https://ketchup.smeup.com/ketchup-showcase/#/progressbar"
      >kup-progress-bar</a>.
      <br />
      <span class="code-word">text</span> contains a string to be displayed as generic text.
      <br />
      <br />
      <p class="centered">Sample markup</p>
      <code class="flat">{{ markupBasic }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBasic',
  data() {
    return {
      markupBasic: '<kup-card></kup-card>',
    };
  },
};
</script>
