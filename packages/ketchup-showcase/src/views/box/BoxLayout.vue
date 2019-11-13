<template>
  <div>
    <h3>Shape in layout</h3>
    <kup-box :data.prop="shapeData" :layout.prop="layout5"></kup-box>
    <hr />
    <kup-box :data.prop="basicData" :layout.prop="horizontalLayout"></kup-box>
    <hr />
    <kup-box :data.prop="basicData" :layout.prop="layout1"></kup-box>
    <hr />
    <h3>Layout with fixed values</h3>
    <kup-box :data.prop="basicData" :layout.prop="layout2"></kup-box>
    <hr />
    <h3>Different layout for each row</h3>
    <p>The layout can be specified in each row</p>
    <kup-box :data.prop="dataTableWithLayout"></kup-box>
    <hr />
    <h3>Section with column</h3>
    <kup-box :data.prop="basicData" :layout.prop="layout3"></kup-box>
    <h3>Section with title</h3>
    <kup-box :data.prop="basicData" :layout.prop="layout4"></kup-box>
  </div>
</template>


<script>
import { defaultData, shapeData } from '@/mock/box';

const colors = ['#247ba0', '#70c1b3', '#b2dbbf', '#f3ffbd'];

export default {
  data() {
    // deep clone
    let dataTableWithLayout = JSON.parse(JSON.stringify(defaultData));

    let i = dataTableWithLayout.rows.length - 1;
    while (i >= 0) {
      const row = dataTableWithLayout.rows[i];

      const bgColor = colors[i % colors.length];

      const layout = {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '20%',
                style: {
                  backgroundColor: bgColor,
                },
                content: [
                  {
                    column: 'FLD1',
                  },
                ],
              },
              {
                sections: [{}, {}, {}],
              },
            ],
          },
        ],
      };

      row.layout = layout;

      i--;
    }

    return {
      basicData: defaultData,
      shapeData: shapeData,
      dataTableWithLayout,
      horizontalLayout: {
        sections: [
          {
            horizontal: true,
            sections: [{}, {}, {}, {}],
          },
        ],
      },
      layout1: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '100px',
              },
              {
                sections: [{}, {}, {}],
              },
            ],
          },
        ],
      },
      layout2: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '100px',
              },
              {
                dim: '100px',
                style: {
                  fontWeight: 'bold',
                },
                sections: [
                  { content: [{ value: 'User:' }] },
                  { content: [{ value: 'Number:' }] },
                  { content: [{ value: 'Date:' }] },
                ],
              },
              {
                sections: [{}, {}, {}],
              },
            ],
          },
        ],
      },
      layout3: {
        sections: [
          {
            columns: 4,
            sections: [{}, {}, {}, {}],
          },
        ],
      },
      layout4: {
        horizontal: true,
        sections: [
          {
            dim: '100px',
          },
          {
            title: 'User informations',
            sections: [{}, {}, {}],
          },
        ],
      },
      layout5: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '100px',
                content: [
                  {
                    column: 'FLD1',
                    shape: 'IMG',
                    config: {
                      srcTemplate:
                        'https://via.placeholder.com/64?text={{obj.k}}',
                    },
                  },
                ],
              },
              {
                sections: [
                  { content: [{ column: 'FLD2' }] },
                  { content: [{ column: 'FLD3', shape: 'PGB' }] },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
kup-box {
  --int_titled-section-bg-color: #fafafa;
}
</style>

