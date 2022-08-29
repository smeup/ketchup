<template>
  <div>
    <div class="demo-wrapper">
      <p>
        It's possible to set a custom layout for the family tree boxes. <br />In
        this example, the component has a custom layout set through the
        <span class="code-word">layout</span> property.</p
      >
      <div class="demo-container">
        <kup-family-tree id="layout-custom" :data.prop="data"></kup-family-tree>
      </div>
    </div>
    <div class="demo-wrapper">
      <p>
        It's also possible to set a template. <br />In this example, the
        component has the <span class="code-word">layout</span> property set to
        2.</p
      >
      <div class="demo-container">
        <kup-family-tree
          id="layout-2"
          layout="2"
          :data.prop="liteData"
        ></kup-family-tree>
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
                icon: 'images/faces/james.jpg',
                title: 'Team leader',
                value: 'James',
              },
              {
                id: '02',
                icon: 'images/faces/monique.jpg',
                title: 'Team leader',
                value: 'Monique',
              },
              {
                id: '03',
                icon: 'images/faces/jane.jpg',
                title: 'Team leader',
                value: 'Jane',
              },
              {
                id: '04',
                icon: 'images/faces/ken.jpg',
                title: 'Team leader',
                value: 'Ken',
              },
            ],
            id: '0',
            icon: 'images/faces/john.jpg',
            title: 'CTO',
            value: 'John',
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
#layout-custom {
  --kup-familytree-item-height: 100px;
  --kup-familytree-item-width: 360px;
}

#layout-2 {
  text-align: left;
}
</style>
