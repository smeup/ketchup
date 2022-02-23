<template>
  <div>
    <h3>Rating</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="ratingDataTable"
    ></kup-lazy>
    <h3>Color</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="colorDataTable"
    ></kup-lazy>
    <h3>Gauge</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="gaugeDataTable"
    ></kup-lazy>
    <h3>Editor</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="editorData"
    ></kup-lazy>
  </div>
</template>

<script>
import { ratingDataTable } from '@/mock/dataTableRating';
import { colorShapesDataTable } from '@/mock/dataTableColor';
import { gaugeShapesDataTable } from '@/mock/dataTableGauge';

export default {
  name: 'DatatableShapes',
  data() {
    return {
      ratingDataTable: { data: ratingDataTable },
      colorDataTable: { data: colorShapesDataTable },
      gaugeDataTable: { data: gaugeShapesDataTable },
      editorData: {
        data: {
          columns: [
            {
              isKey: false,
              name: 'EDT',
              obj: {
                k: '',
                p: '',
                t: '',
              },
              title: 'Editor',
              tooltip: true,
            },
          ],
          rows: [
            {
              cells: {
                EDT: {
                  isEditable: false,
                  obj: {
                    k: '<ul><li>6737</li><li>6796</li></ul>',
                    p: '',
                    t: '',
                  },
                  shape: 'Edt',
                  value: '<ul><li>6737</li><li>6796</li></ul>',
                },
              },
              id: '0',
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'EDT',
                            shape: 'Edt',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
              object: '',
              readOnly: true,
            },
            {
              cells: {
                EDT: {
                  isEditable: false,
                  obj: {
                    k: '<strong>Cell 2</strong>',
                    p: '',
                    t: '',
                  },
                  shape: 'Edt',
                  value: '<strong>Cell <i>2</i></strong>',
                },
              },
              id: '1',
              layout: {
                horizontal: false,
                sections: [
                  {
                    horizontal: true,
                    sections: [
                      {
                        content: [
                          {
                            column: 'EDT',
                            shape: 'Edt',
                          },
                        ],
                        horizontal: false,
                      },
                    ],
                  },
                ],
              },
              object: '',
              readOnly: true,
            },
          ],
        },
      },
    };
  },
};
</script>
