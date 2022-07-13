<template>
  <div>
    <div class="demo-wrapper">
      <p>
        Child nodes that do not contain children can be arranged vertically one
        below the other, using the
        <span class="code-word">stackedLeaves</span> property. The example on
        the left shows the default behavior, while on the right the stacked
        one.</p
      >
      <div class="comparison">
        <div class="demo-container">
          <h4>Default behavior</h4>
          <kup-family-tree
            collapsible="false"
            :data.prop="data"
            layout="2"
          ></kup-family-tree>
        </div>
        <div class="demo-container stacked">
          <h4>Stacked behavior</h4>
          <kup-family-tree
            collapsible="false"
            stacked-leaves="true"
            :data.prop="data"
            layout="2"
          ></kup-family-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamilyTreeStacked',
  data() {
    return {
      data: {
        columns: [],
        rows: [
          {
            children: [
              {
                id: '01',
                value: 'France',
              },
              {
                id: '02',
                value: 'Italy',
              },
              {
                id: '03',
                value: 'Spain',
              },
            ],
            id: '0',
            value: 'Europe',
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.comparison {
  display: flex;
  flex-direction: column;
}

.demo-container {
  margin-top: 0;

  &.stacked {
    margin-top: 30px;
  }
}
</style>
