let sortBoxData = {
    columns: [
        {
            name: 'FLD1',
            title: 'Column A',
            obj: {
                t: 'J4',
                p: 'IMG',
                k: '',
            },
        },
        {
            name: 'FLD2',
            title: 'Column B',
        },
        {
            name: 'FLD3',
            title: 'Column C',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
        },
        {
            name: 'FLD4',
            title: 'Column D',
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;CASFRA',
                    },
                    value: 'http://lorempixel.com/64/64/?user=CASFRA',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100.60',
                    },
                    value: '100.60',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180101',
                    },
                    value: '01/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;PARFRA',
                    },
                    value: 'http://lorempixel.com/64/64/?user=PARFRA',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'PARFRA',
                    },
                    value: 'PARFRA',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '145.22',
                    },
                    value: '145.22',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '02/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;DELGIO',
                    },
                    value: 'http://lorempixel.com/64/64/?user=DELGIO',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '221.23',
                    },
                    value: '221.23',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180103',
                    },
                    value: '03/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;SANCOS',
                    },
                    value: 'http://lorempixel.com/64/64/?user=SANCOS',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'SANCOS',
                    },
                    value: 'SANCOS',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '187.59',
                    },
                    value: '187.59',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180104',
                    },
                    value: '04/01/2018',
                },
            },
        },
    ],
};

const sortBox = document.getElementById('sort-box');
if (sortBox != null) {
    sortBox.data = sortBoxData;
    sortBox.sortEnabled = true;
}

let graphicsBoxData = {
    "columns": [
      {
        "icon": "account",
        "name": "COL",
        "obj": {
          "k": "",
          "p": "COL",
          "t": "CN"
        },
        "title": "immagine"
      },
      {
        "name": "GREF",
        "obj": {
          "k": "",
          "p": "GRA_PIE",
          "t": "J4"
        },
        "title": "grafico"
      }
    ],
    "rows": [
      {
        "cells": {
          "COL": {
            "data": {
              "resource": "/WebUP/javax.faces.resource/CN%253BCOL%253BBERNIC.jsf?ln=smeupImages"
            },
            "obj": {
              "k": "BERNIC",
              "p": "COL",
              "t": "CN"
            },
            "shape": "Img",
            "value": "/WebUP/javax.faces.resource/CN%253BCOL%253BBERNIC.jsf?ln=smeupImages"
          },
          "GREF": {
            "data": {
              "sizeX": "50px",
              "offlineMode": {
                "value": "8;4;5"
              },
              "id": "i1012_GREF_0",
              "cellId": "i1012_GREF_0",
              "sizeY": "50px"
            },
            "obj": {
              "k": "8;4;5",
              "p": "GRA_PIE",
              "t": "J4"
            },
            "shape": "Gra",
            "value": "8;4;5"
          }
        },
        "layout": {
          "horizontal": true,
          "sections": [
            {
              "content": [
                {
                  "column": "COL",
                  "config": {
                    "width": "64",
                    "height": "64"
                  },
                  "shape": "Img"
                }
              ],
              "dim": "10%",
              "horizontal": false
            },
            {
              "content": [
                {
                  "column": "GREF",
                  "shape": "Gra"
                }
              ],
              "horizontal": false
            }
          ]
        },
        "object": "",
        "readOnly": true,
        "id": "0"
      },
      {
        "cells": {
          "COL": {
            "data": {
              "resource": "/WebUP/javax.faces.resource/CN%253BCOL%253BSCIMAM.jsf?ln=smeupImages"
            },
            "obj": {
              "k": "SCIMAM",
              "p": "COL",
              "t": "CN"
            },
            "shape": "Img",
            "value": "/WebUP/javax.faces.resource/CN%253BCOL%253BSCIMAM.jsf?ln=smeupImages"
          },
          "GREF": {
            "data": {
              "sizeX": "50px",
              "offlineMode": {
                "value": "6;9;6",
                "shape": "pie"
              },
              "id": "i1012_GREF_1",
              "cellId": "i1012_GREF_1",
              "sizeY": "50px"
            },
            "obj": {
              "k": "6;9;6",
              "p": "GRA_PIE",
              "t": "J4"
            },
            "shape": "Gra",
            "value": "6;9;6"
          }
        },
        "layout": {
          "horizontal": true,
          "sections": [
            {
              "content": [
                {
                  "column": "COL",
                  "config": {
                    "width": "64",
                    "height": "64"
                  },
                  "shape": "Img"
                }
              ],
              "dim": "10%",
              "horizontal": false
            },
            {
              "content": [
                {
                  "column": "GREF",
                  "shape": "Gra"
                }
              ],
              "horizontal": false
            }
          ]
        },
        "object": "",
        "readOnly": true,
        "id": "1"
      },
      {
        "cells": {
          "COL": {
            "data": {
              "resource": "/WebUP/javax.faces.resource/CN%253BCOL%253BVERFRA.jsf?ln=smeupImages"
            },
            "obj": {
              "k": "VERFRA",
              "p": "COL",
              "t": "CN"
            },
            "shape": "Img",
            "value": "/WebUP/javax.faces.resource/CN%253BCOL%253BVERFRA.jsf?ln=smeupImages"
          },
          "GREF": {
            "data": {
              "sizeX": "50px",
              "offlineMode": {
                "value": "5;1;5"
              },
              "id": "i1012_GREF_2",
              "cellId": "i1012_GREF_2",
              "sizeY": "50px"
            },
            "obj": {
              "k": "5;1;5",
              "p": "GRA_PIE",
              "t": "J4"
            },
            "shape": "Gra",
            "value": "5;1;5"
          }
        },
        "layout": {
          "horizontal": true,
          "sections": [
            {
              "content": [
                {
                  "column": "COL",
                  "config": {
                    "width": "64",
                    "height": "64"
                  },
                  "shape": "Img"
                }
              ],
              "dim": "10%",
              "horizontal": false
            },
            {
              "content": [
                {
                  "column": "GREF",
                  "shape": "Gra"
                }
              ],
              "horizontal": false
            }
          ]
        },
        "object": "",
        "readOnly": true,
        "id": "2"
      }
    ]
  };

const graphicsBox = document.getElementById('graphics-box');
if (graphicsBox != null) {
    graphicsBox.data = graphicsBoxData;
}
