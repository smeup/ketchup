<template>
  <div>
    <h3>Shapes</h3>
    <p>Images and progress bars</p>
    <kup-box :data.prop="shapeData" :layout.prop="layout5"></kup-box>
  </div>
</template>


<script>
import { shapeData } from '@/mock/box';

export default {
  data() {
    return {
      shapeData: shapeData,
      layout5: {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '10%',
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
              {
                sections: [
                  { content: [{ column: 'FLD4', shape: 'EDT' }] }
                ],
              }
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

