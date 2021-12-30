<template>
  <div>
    <div class="demo-wrapper">
      <p>
        <span class="code-word">KupDynamicPosition</span> is a utility class
        which helps in positioning cards, tooltips and dropdown menus.<br />
        There are 2 methods of positioning:
        <span class="code-word">fixed</span> and
        <span class="code-word">absolute</span>.<br />
        The absolute positoning is achieved by detaching the element from the
        DOM, and then appending it in a container placed inside the document's
        body. For this reason, the absolute positioning should be done on custom
        elements because they are shipped with their own style.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KupDynamicPositionBasic',
  data() {
    return {};
  },
};
</script>
