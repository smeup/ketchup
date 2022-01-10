<template>
  <div>
    <div class="demo-wrapper">
      <p>These layouts are for the bar variant. </p>
      <br />
      <div class="demo-container">
        <div class="kup-container">
          <div class="icon-wrapper" title="Layout: 1">
            <kup-spinner
              bar-variant
              active
              dimensions="4px"
              layout="1"
            ></kup-spinner>
            <div class="icon-label">1</div>
          </div>
          <div class="icon-wrapper" title="Layout: 2">
            <kup-spinner
              bar-variant
              active
              dimensions="4px"
              layout="2"
            ></kup-spinner>
            <div class="icon-label">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerBarLayouts',
};
</script>
