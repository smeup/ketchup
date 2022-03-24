<template>
  <div>
    <div class="demo-wrapper">
      <p>
        The image component can also draw solid colors, like bars or cells for
        example. This behavior will be active when the prop
        <span class="code-word">resource</span> is not defined while the
        <span class="code-word">data</span> prop is. <br />Every occurrence of
        the <span class="code-word">data</span> array determines a new "stroke"
        or "step" of drawing. <br />The format of the data prop is as follows:
        <br />
        <br />
        <span class="code-word">shape</span>, defaults at bar and defines the
        shape of the step (currently only bar is supported).
        <br />
        <span class="code-word">color</span>, defaults at transparent and
        defines the color of the step.
        <br />
        <span class="code-word">height</span> defaults at 100% and sets the
        height of the step.
        <br />
        <span class="code-word">width</span> defaults at 100% and sets the width
        of the step.
        <br />
      </p>
      <br />
      <p>
        In the example below we'll draw a bar which occupies the 50% of its
        container, both vertically and horizontally, and which is colored using
        the primary color of the app.
      </p>
      <div class="demo-container">
        <div
          class="kup-container"
          style="
            border: 1px solid var(--kup-border-color);
            height: 128px;
            padding: 0;
            width: 100%;
          "
        >
          <kup-image :data.prop="data"></kup-image>
        </div>
        <p class="centered">Data markup</p>
        <code class="flat">{{ markupData }}</code>
      </div>
      <br />
      <p
        >In the following example we'll draw the italian flag, which consists in
        3 different bars placed inline. Note that in this case the last
        occurrence will have a slightly bigger width, otherwise a set of three
        occurrences all set to "33.3%" wouldn't fill the whole container. The
        component will hide overflowing areas, so it will never exceed the 100%
        of the container.</p
      >
      <br />
      <div class="demo-container">
        <div
          class="kup-container"
          style="
            border: 1px solid var(--kup-border-color);
            height: 100px;
            margin: auto;
            padding: 0;
            width: 150px;
          "
        >
          <kup-image :data.prop="dataIT"></kup-image>
        </div>
        <p class="centered">Data markup</p>
        <code class="flat">{{ markupDataIT }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCss',
  data() {
    return {
      data: [
        {
          shape: 'bar',
          color: 'var(--kup-primary-color)',
          width: '50%',
          height: '50%',
        },
      ],
      dataIT: [
        {
          shape: 'bar',
          color: '#539545',
          width: '33.3%',
          height: '100%',
        },
        {
          shape: 'bar',
          color: '#ffffff',
          width: '33.3%',
          height: '100%',
        },
        {
          shape: 'bar',
          color: '#d14233',
          width: '34%',
          height: '100%',
        },
      ],
      markupData:
        '[ {"shape": "bar", "color": "var(--kup-primary-color)", "width": "50%", "height": "50%" } ]',
      markupDataIT:
        '[ {"shape": "bar", "color": "#539545", "width": "33.3%", "height": "100%" }, {"shape": "bar", "color": "#ffffff", "width": "33.5%", "height": "100%" }, {"shape": "bar", "color": "#d14233", "width": "34%", "height": "100%" } ]',
    };
  },
};
</script>
