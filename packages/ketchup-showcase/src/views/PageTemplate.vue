<template>
  <div id="page-wrapper">
    <div id="page-content">
      <div v-for="(item, index) in titles" :key="item" class="section">
        <h1>{{ item }}</h1>
        <slot :name="'' + index"> </slot>
      </div>
    </div>
    <div id="page-nav">
      <a
        v-for="item in titles"
        :key="item"
        onclick="scrollToSmoothly();"
        class="page-nav-element"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default { props: ['titles'] };
</script>
