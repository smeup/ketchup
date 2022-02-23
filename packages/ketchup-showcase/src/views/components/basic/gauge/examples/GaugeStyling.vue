<template>
  <div>
    <div class="demo-wrapper">
      <p
        >By default gauges are colored using current theme's state colors:
        <br />
        <br />
        <span class="code-word">--kup-success-color</span>;
        <br />
        <span class="code-word">--kup-warning-color</span>;
        <br />
        <span class="code-word">--kup-danger-color</span>;
        <br />
        <br
      /></p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-gauge
            width-component="300px"
            min-value="0"
            first-threshold="33"
            second-threshold="66"
          ></kup-gauge> </div></div
      ><p>
        These colors can be easily replaced using the
        <span class="code-word">colors</span> prop, which is an array of 3
        strings, each one representing the respective threshold.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-gauge
            :colors.prop="colors"
            width-component="300px"
            min-value="0"
            first-threshold="33"
            second-threshold="66"
          ></kup-gauge>
        </div> </div
      ><p>
        Gauges can also be colored depending on their value. For this to happen,
        the prop <span class="code-word">onlyValue</span> must be set to true.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-gauge
            only-value
            width-component="300px"
            min-value="0"
            value="50"
            first-threshold="33"
            second-threshold="66"
          ></kup-gauge>
        </div> </div
      ><p>
        The needle base by default will be squared. To make it round set to true
        the <span class="code-word">needleCircle</span> prop.
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-gauge
            needle-circle
            only-value
            width-component="300px"
            min-value="0"
            value="50"
            first-threshold="33"
            second-threshold="66"
          ></kup-gauge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeStyling',
  data() {
    return {
      colors: ['Purple', 'Yellow', 'Cyan'],
    };
  },
};
</script>
