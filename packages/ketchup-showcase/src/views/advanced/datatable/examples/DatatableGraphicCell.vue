<template>
  <div>
    <h3>Graphic cells</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="gcData"></kup-lazy>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gcData: {
        data: {
          columns: [
            {
              name: 'FLD1',
              title: 'Value',
            },
            {
              name: 'FLD2',
              title: 'Graphic cell',
              size: '20ch',
            },
          ],
          rows: [
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'This is drawn using CSS. The examples below use canvas.',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k: 'R255G128B000;20,58\\\\HEIGHT;60',
                  },
                  data: {
                    data: [
                      {
                        shape: 'bar',
                        color: 'rgb(255,128,0)',
                        width: '20%',
                        height: '60%',
                      },
                    ],
                  },
                  value: 'R255G128B000;20,58\\\\HEIGHT;60',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value: 'R255G128B000;20,58\\\\HEIGHT;60',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k: 'R255G128B000;20,58\\\\HEIGHT;60',
                  },
                  data: {
                    resource: 'R255G128B000;20,58\\\\HEIGHT;60',
                    isCanvas: true,
                  },
                  value: 'R255G128B000;20,58\\\\HEIGHT;60',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'R255G000B000;12,4\\\\SEP;25,00\\\\R255G255B000;74,00\\\\GRID;20',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'R255G000B000;12,4\\\\SEP;25,00\\\\R255G255B000;74,00\\\\GRID;20',
                  },
                  data: {
                    resource:
                      'R255G000B000;12,4\\\\SEP;25,00\\\\R255G255B000;74,00\\\\GRID;20',
                    isCanvas: true,
                  },
                  value:
                    'R255G000B000;12,4\\\\SEP;25,00\\\\R255G255B000;74,00\\\\GRID;20',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'R000G255B128;33,3\\\\ARW;50,00\\\\R255G255B051;66,5\\\\R220G000B000;100,0\\\\GRID;3',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'R000G255B128;33,3\\\\ARW;50,00\\\\R255G255B051;66,5\\\\R220G000B000;100,0\\\\GRID;3',
                  },
                  data: {
                    resource:
                      'R000G255B128;33,3\\\\ARW;50,00\\\\R255G255B051;66,5\\\\R220G000B000;100,0\\\\GRID;3',
                    isCanvas: true,
                  },
                  value:
                    'R000G255B128;33,3\\\\ARW;50,00\\\\R255G255B051;66,5\\\\R220G000B000;100,0\\\\GRID;3',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'SHAPE;CIRCLE\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'SHAPE;CIRCLE\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  },
                  data: {
                    resource:
                      'SHAPE;CIRCLE\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                    isCanvas: true,
                  },
                  value:
                    'SHAPE;CIRCLE\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'SHAPE;TRIR\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'SHAPE;TRIR\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  },
                  data: {
                    resource:
                      'SHAPE;TRIR\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                    isCanvas: true,
                  },
                  value:
                    'SHAPE;TRIR\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'SHAPE;TRIL\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'SHAPE;TRIL\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                  },
                  data: {
                    resource:
                      'SHAPE;TRIL\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                    isCanvas: true,
                  },
                  value:
                    'SHAPE;TRIL\\\\R000G255B128;33,3\\\\R255G255B051;66,5\\\\R220G000B000;100,0',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'SHAPE;TRIR;50\\\\BCOLOR;R102G255B178\\\\*NONE;33,3\\\\R255G255B051;66,5',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'SHAPE;TRIR;50\\\\BCOLOR;R102G255B178\\\\*NONE;33,3\\\\R255G255B051;66,5',
                  },
                  data: {
                    resource:
                      'SHAPE;TRIR;50\\\\BCOLOR;R102G255B178\\\\*NONE;33,3\\\\R255G255B051;66,5',
                    isCanvas: true,
                  },
                  value:
                    'SHAPE;TRIR;50\\\\BCOLOR;R102G255B178\\\\*NONE;33,3\\\\R255G255B051;66,5',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value:
                    'SHAPE;TRIR\\\\R000G255B128;33,3\\\\AND\\\\SHAPE;TRIL\\\\*NONE;33,3\\\\R255G255B051;66,6\\\\AND\\\\SHAPE;CIRCLE\\\\R000G000B255;66,6',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k:
                      'SHAPE;TRIR\\\\R000G255B128;33,3\\\\AND\\\\SHAPE;TRIL\\\\*NONE;33,3\\\\R255G255B051;66,6\\\\AND\\\\SHAPE;CIRCLE\\\\R000G000B255;66,6',
                  },
                  data: {
                    resource:
                      'SHAPE;TRIR\\\\R000G255B128;33,3\\\\AND\\\\SHAPE;TRIL\\\\*NONE;33,3\\\\R255G255B051;66,6\\\\AND\\\\SHAPE;CIRCLE\\\\R000G000B255;66,6',
                    isCanvas: true,
                  },
                  value:
                    'SHAPE;TRIR\\\\R000G255B128;33,3\\\\AND\\\\SHAPE;TRIL\\\\*NONE;33,3\\\\R255G255B051;66,6\\\\AND\\\\SHAPE;CIRCLE\\\\R000G000B255;66,6',
                },
              },
            },
            {
              cells: {
                FLD1: {
                  obj: {
                    t: '',
                    p: '',
                    k: '',
                  },
                  value: 'SHAPE;CIRCLE\\\\R000G255B128;100',
                  options: true,
                },
                FLD2: {
                  obj: {
                    t: 'J4',
                    p: 'BAR',
                    k: 'SHAPE;CIRCLE\\\\R000G255B128;100',
                  },
                  data: {
                    resource: 'SHAPE;CIRCLE\\\\R000G255B128;100',
                    isCanvas: true,
                  },
                  value: 'SHAPE;CIRCLE\\\\R000G255B128;100',
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>
