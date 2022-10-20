<template>
  <div>
    <p>
      This family offers layout that only accept slots.<br />
      This way, the maximum customization can be achieved from the outside of
      the component, still accessing useful card props.
    </p>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 1</span> has a box shadow and is suited
        for dropdown menus:
        <br />
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="free"
            layout-number="1"
            size-x="300px"
            :data.prop="data"
            ><div style="margin: auto">Generic slot</div></kup-card
          >
        </div>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">Layout 2</span> is similar to layout 1 but
        without padding:
        <br />
        <br />
      </p>
      <div class="demo-container">
        <div class="kup-container">
          <kup-card
            layout-family="free"
            layout-number="2"
            size-x="300px"
            :data.prop="data"
            ><div style="margin: auto">Generic slot</div></kup-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFree',
  data() {
    return {
      data: {},
    };
  },
};
</script>
