<template>
  <div>
    <p>
      These cards are generated automatically with specific behaviors. In this
      family we can find, for exaple, a
      <span class="code-word">calendar</span> selector or
      <span class="code-word">clock</span> selector.
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> is a calendar builtin:
        <br />
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="builtin"
            layout-number="1"
            size-x="300px"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> is a clock builtin:
        <br />
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="builtin"
            layout-number="2"
            size-x="300px"
            :data.prop="data"
          ></kup-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBuiltin',
  data() {
    return {
      data: {},
    };
  },
};
</script>
