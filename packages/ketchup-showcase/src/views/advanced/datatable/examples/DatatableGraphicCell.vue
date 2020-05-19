<template>
  <div>
    <h3>Filters enabled</h3>
    <kup-data-table
      :data.prop="gcData"
      :columnsWidth.prop="columnsWidth"
    ></kup-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Check that column width is set on the cell canvas width
      //  instead of the column element in case of graphic cells
      columnsWidth: [
        {
          column: 'FLD2',
          width: '200',
        },
      ],
      gcData: {
        columns: [
          {
            name: 'FLD1',
            title: 'Value',
            size: '',
          },
          {
            name: 'FLD2',
            title: 'Graphic cell',
            size: 10,
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
                value: 'R255G128B000;20,58\\\\HEIGHT;60',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'BAR',
                  k: 'R255G128B000;20,58\\\\HEIGHT;60',
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
                value: 'SHAPE;CIRCLE\\\\R000G255B128;100',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
