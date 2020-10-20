<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to display the elements in a single line by setting to
        true the
        <span class="code-word">singleLine</span> prop. When single line variant
        is active, the columns prop will have no effect.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <kup-grid single-line :data.prop="data"></kup-grid>
        </div>
        <br />
        <p class="centered">Sample single line markup</p>
        <code class="flat">{{ markupSingleline }}</code>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        The single line layout can also be forced to fit the container for its
        length by setting the
        <span class="code-word">full-width</span> class.
      </p>
      <br />
      <div class="demo-container">
        <div class="kup-container" style="width: 100%">
          <kup-grid class="full-width" single-line :data.prop="data"></kup-grid>
        </div>
        <br />
        <br />
        <p class="centered">Sample full width markup</p>
        <code class="flat">{{ markupSinglelineFW }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridSingleline',
  data() {
    return {
      data: [
        {
          props: {
            label: 'button one',
          },
          tagName: 'kup-button',
        },
        {
          props: {
            label: 'button two',
          },
          tagName: 'kup-button',
        },
        {
          props: {
            label: 'button three',
          },
          tagName: 'kup-button',
        },
      ],
      markupSingleline: '<kup-grid single-line></kup-grid>',
      markupSinglelineFW:
        '<kup-grid class="full-width" single-line></kup-grid>',
    };
  },
};
</script>
