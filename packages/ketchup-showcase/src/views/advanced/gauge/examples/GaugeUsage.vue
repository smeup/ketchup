<template>
  <div>
    <div class="demo-wrapper">
      <span>
        {{ codeDepend }}
      </span>
      <br />
      <br />
      <code class="flat">{{ markdown1 }}<br />{{ markdown2 }}</code>
      <br />
      <br />
      <span>
        {{ codeDepend2 }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeUsage',
  data() {
    return {
      codeDepend:
        'Currently, this component depends on the two following scripts:',
      markdown1:
        // eslint-disable-next-line no-useless-escape
        '<script src="https:\/\/d3js.org\/d3-path.v1.min.js"><\/script>',
      markdown2:
        // eslint-disable-next-line no-useless-escape
        '<script src="https:\/\/d3js.org\/d3-shape.v1.min.js"><\/script>',
      codeDepend2:
        'These scripts must be included into the head tag of the page before including Stencil project.',
    };
  },
};
</script>
