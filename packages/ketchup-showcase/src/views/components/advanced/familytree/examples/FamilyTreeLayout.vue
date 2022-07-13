<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to set a custom layout for the family tree boxes. In this
        example, the component has a custom layout for boxes, it's set into
        <span class="code-word">layout</span> property.</p
      >
      <div class="demo-container">
        <kup-family-tree :data.prop="data"></kup-family-tree>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        It's possible to set a bultin layout for the family tree boxes. In this
        example, the component has
        <span class="code-word">layout</span> property set to 2.</p
      >
      <div class="demo-container">
        <kup-family-tree layout="2" :data.prop="liteData"></kup-family-tree>
      </div>
    </div>
  </div>
</template>

<script>
import { layoutData } from '@/mock/familyTree';

export default {
  name: 'FamilyTreeLayout',
  data() {
    return {
      data: layoutData,
      liteData: {
        columns: [],
        rows: [
          {
            children: [
              {
                id: '01',
                icon: 'flag',
                value: 'France',
              },
              {
                id: '02',
                icon: 'flag',
                value: 'Italy',
              },
              {
                id: '03',
                icon: 'flag',
                value: 'Spain',
              },
            ],
            id: '0',
            icon: 'language',
            value: 'Europe',
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
kup-family-tree {
  --kup-familytree-item-background-color: var(--kup-border-color);
  --kup-familytree-item-color: var(--kup-text-color);
  --kup-familytree-item-height: 80px;
  --kup-familytree-item-width: 360px;
}
</style>
