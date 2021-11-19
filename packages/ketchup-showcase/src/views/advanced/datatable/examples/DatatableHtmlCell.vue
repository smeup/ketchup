<template>
  <div>
    <h3>Data Table with HTML render in cell</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>
<script>
export default {
  name: 'dataTableHtmlCell',
  data() {
    return {
      data: {
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
