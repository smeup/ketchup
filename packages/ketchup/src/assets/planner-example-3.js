const comp = document.getElementById('planner');

comp.addEventListener('kup-planner-click', onclick);
comp.addEventListener('kup-planner-didunload', (e) => {
    console.log('Planner removed', e);
});
document.addEventListener('kup-button-click', () => {
    console.log('Removing planner');
    comp.remove();
});

const props = {
    "customStyle": "",
    "data": {
        "columns": [
            {
                "isEditable": false,
                "isKey": false,
                "name": "R§COMM",
                "obj": {
                    "k": "",
                    "p": "",
                    "t": "CM"
                },
                "title": "Commessa",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATPRE",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data Cons.\nAttualizz.",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATORD",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data Cons.\nP.Ordine",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATOPE",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data Fase\nINSTALLAZIONE",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£COMM",
                "title": "Des.",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R§CDCL",
                "objs": [
                    {
                        "k": "",
                        "p": "CLP",
                        "t": "CN"
                    }
                ],
                "title": "Ente",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£CDCL",
                "title": "Ente",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "CODDOC",
                "objs": [
                    {
                        "k": "",
                        "p": "MVE",
                        "t": "DO"
                    }
                ],
                "title": "Doc.",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "XXSEMA",
                "obj": {
                    "k": "",
                    "p": "IMG",
                    "t": "J4"
                },
                "title": "KPI\nRitardo",
                "tooltip": false
            },
            {
                "decimals": 0,
                "isEditable": false,
                "isKey": false,
                "name": "GIODIF",
                "obj": {
                    "k": "",
                    "p": "",
                    "t": "NR"
                },
                "title": "Diff\nGio",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "TIPRIT",
                "obj": {
                    "k": "",
                    "p": "",
                    "t": "**"
                },
                "title": "Tipo\nRitardo",
                "tooltip": false
            },
            {
                "decimals": 0,
                "isEditable": false,
                "isKey": false,
                "name": "DIFFGG",
                "obj": {
                    "k": "",
                    "p": "",
                    "t": "NR"
                },
                "title": "Delta GG",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATINZ",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data inizio\nAttualizz.",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "INZORD",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data inizio\nP.Ordine",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£TDOC",
                "obj": {
                    "k": "",
                    "p": "V5D",
                    "t": "TA"
                },
                "title": "Tp\nDo",
                "tooltip": true,
                "visible": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£NDOC",
                "objs": [
                    {
                        "k": "",
                        "p": "MVE",
                        "t": "DO"
                    }
                ],
                "title": "Nr\nDo",
                "tooltip": true,
                "visible": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£TCCL",
                "obj": {
                    "k": "",
                    "p": "BRE",
                    "t": "TA"
                },
                "title": "Tp\nEn",
                "tooltip": true,
                "visible": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "R£TRIG",
                "obj": {
                    "k": "",
                    "p": "V5B",
                    "t": "TA"
                },
                "title": "Tp\nRi",
                "tooltip": true,
                "visible": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "CODRIG",
                "objs": [
                    {
                        "k": "",
                        "p": "MVE",
                        "t": "DR"
                    }
                ],
                "title": "Riga",
                "tooltip": true,
                "visible": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "PREPLA",
                "obj": {
                    "k": "",
                    "p": "SI/NO",
                    "t": "V2"
                },
                "title": "Presenza Planning",
                "tooltip": false,
                "visible": false
            }
        ],
        "rows": [
            {
                "cells": {
                    "R£TRIG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ACN",
                            "p": "V5B",
                            "t": "TA"
                        },
                        "value": "ACN"
                    },
                    "R§CDCL": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ISVAL",
                            "p": "CLP",
                            "t": "CN"
                        },
                        "value": "ISVAL"
                    },
                    "TIPRIT": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "**"
                        },
                        "value": ""
                    },
                    "R£TCCL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "CLP",
                            "p": "BRE",
                            "t": "TA"
                        },
                        "value": "CLP"
                    },
                    "PREPLA": {
                        "data": {
                            "size": 2,
                            "helperEnabled": false,
                            "checked": true,
                            "hiddenCounter": true,
                            "maxLength": 2
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "SI/NO",
                            "t": "V2"
                        },
                        "value": "1"
                    },
                    "GIODIF": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "maxLength": 5,
                            "integers": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "NR"
                        },
                        "value": ""
                    },
                    "DATPRE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20231120",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-11-20"
                    },
                    "DATOPE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230307",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-07"
                    },
                    "DIFFGG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "maxLength": 3,
                            "integers": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "   178 ",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "178"
                    },
                    "INZORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20211025",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2021-10-25"
                    },
                    "CODDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G456      ",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G456      "
                    },
                    "DATORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230307",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-07"
                    },
                    "XXSEMA": {
                        "data": {
                            "size": 4,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 4
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "IMG",
                            "t": "J4"
                        },
                        "value": ""
                    },
                    "R£NDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G456",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G456"
                    },
                    "CODRIG": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G456      0001",
                            "p": "MVE",
                            "t": "DR"
                        },
                        "value": "G456      0001"
                    },
                    "R£TDOC": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MVE",
                            "p": "V5D",
                            "t": "TA"
                        },
                        "value": "MVE"
                    },
                    "DATINZ": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20211025",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2021-10-25"
                    },
                    "R£COMM": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MAC.FMRSI-31-150-CNC",
                            "p": "",
                            "t": ""
                        },
                        "value": "MAC.FMRSI-31-150-CNC",
                        "displayedValue": "MAC.FMRSI-31-150-CNC"
                    },
                    "R£CDCL": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ISVAL S.P.A",
                            "p": "",
                            "t": ""
                        },
                        "value": "ISVAL S.P.A"
                    },
                    "R§COMM": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G456",
                            "p": "",
                            "t": "CM"
                        },
                        "value": "G456",
                        "displayedValue": "G456"
                    }
                },
                "id": "1",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "R£TRIG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ACN",
                            "p": "V5B",
                            "t": "TA"
                        },
                        "value": "ACN"
                    },
                    "R§CDCL": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ALBAN",
                            "p": "CLP",
                            "t": "CN"
                        },
                        "value": "ALBAN"
                    },
                    "TIPRIT": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "**"
                        },
                        "value": ""
                    },
                    "R£TCCL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "CLP",
                            "p": "BRE",
                            "t": "TA"
                        },
                        "value": "CLP"
                    },
                    "PREPLA": {
                        "data": {
                            "size": 2,
                            "helperEnabled": false,
                            "checked": true,
                            "hiddenCounter": true,
                            "maxLength": 2
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "SI/NO",
                            "t": "V2"
                        },
                        "value": "1"
                    },
                    "GIODIF": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "maxLength": 5,
                            "integers": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "NR"
                        },
                        "value": ""
                    },
                    "DATPRE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230407",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-07"
                    },
                    "DATOPE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20221216",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2022-12-16"
                    },
                    "DIFFGG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "maxLength": 3,
                            "integers": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "    21 ",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "21"
                    },
                    "INZORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20211020",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2021-10-20"
                    },
                    "CODDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G460      ",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G460      "
                    },
                    "DATORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20221216",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2022-12-16"
                    },
                    "XXSEMA": {
                        "data": {
                            "size": 4,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 4
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "IMG",
                            "t": "J4"
                        },
                        "value": ""
                    },
                    "R£NDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G460",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G460"
                    },
                    "CODRIG": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G460      0001",
                            "p": "MVE",
                            "t": "DR"
                        },
                        "value": "G460      0001"
                    },
                    "R£TDOC": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MVE",
                            "p": "V5D",
                            "t": "TA"
                        },
                        "value": "MVE"
                    },
                    "DATINZ": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20211020",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2021-10-20"
                    },
                    "R£COMM": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MAC.FMF-7-120HS-CNC",
                            "p": "",
                            "t": ""
                        },
                        "value": "MAC.FMF-7-120HS-CNC",
                        "displayedValue": "MAC.FMF-7-120HS-CNC"
                    },
                    "R£CDCL": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ALBAN GIACOMO SPA",
                            "p": "",
                            "t": ""
                        },
                        "value": "ALBAN GIACOMO SPA"
                    },
                    "R§COMM": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G460",
                            "p": "",
                            "t": "CM"
                        },
                        "value": "G460",
                        "displayedValue": "G460"
                    }
                },
                "id": "2",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "R£TRIG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ACN",
                            "p": "V5B",
                            "t": "TA"
                        },
                        "value": "ACN"
                    },
                    "R§CDCL": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "RACCPE",
                            "p": "CLP",
                            "t": "CN"
                        },
                        "value": "RACCPE"
                    },
                    "TIPRIT": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "**"
                        },
                        "value": ""
                    },
                    "R£TCCL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "CLP",
                            "p": "BRE",
                            "t": "TA"
                        },
                        "value": "CLP"
                    },
                    "PREPLA": {
                        "data": {
                            "size": 2,
                            "helperEnabled": false,
                            "checked": true,
                            "hiddenCounter": true,
                            "maxLength": 2
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "SI/NO",
                            "t": "V2"
                        },
                        "value": "1"
                    },
                    "GIODIF": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "maxLength": 5,
                            "integers": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "",
                            "t": "NR"
                        },
                        "value": ""
                    },
                    "DATPRE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230630",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-30"
                    },
                    "DATOPE": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230306",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-06"
                    },
                    "DIFFGG": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "maxLength": 3,
                            "integers": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "    21 ",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "21"
                    },
                    "INZORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20220103",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2022-01-03"
                    },
                    "CODDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G452      ",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G452      "
                    },
                    "DATORD": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230306",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-06"
                    },
                    "XXSEMA": {
                        "data": {
                            "size": 4,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 4
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "",
                            "p": "IMG",
                            "t": "J4"
                        },
                        "value": ""
                    },
                    "R£NDOC": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G452",
                            "p": "MVE",
                            "t": "DO"
                        },
                        "value": "G452"
                    },
                    "CODRIG": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G452      0001",
                            "p": "MVE",
                            "t": "DR"
                        },
                        "value": "G452      0001"
                    },
                    "R£TDOC": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MVE",
                            "p": "V5D",
                            "t": "TA"
                        },
                        "value": "MVE"
                    },
                    "DATINZ": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20220103",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2022-01-03"
                    },
                    "R£COMM": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MAC.FMF-12-125-150-CNC",
                            "p": "",
                            "t": ""
                        },
                        "value": "MAC.FMF-12-125-150-CNC",
                        "displayedValue": "MAC.FMF-12-125-150-CNC"
                    },
                    "R£CDCL": {
                        "data": {
                            "size": 35,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 35
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "RACCORPE DI PE ANGELO & C SNC",
                            "p": "",
                            "t": ""
                        },
                        "value": "RACCORPE DI PE ANGELO & C SNC"
                    },
                    "R§COMM": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "G452",
                            "p": "",
                            "t": "CM"
                        },
                        "value": "G452",
                        "displayedValue": "G452"
                    }
                },
                "id": "3",
                "object": "",
                "readOnly": true
            }
        ]
    },
    "detailData": {
        "columns": [
            {
                "isEditable": false,
                "isKey": false,
                "name": "COD001",
                "title": "Codice ricerca 1",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DES001",
                "title": "Descrizione ricerca 1",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "COD002",
                "title": "Codice ricerca 2",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DES002",
                "title": "Descrizione ricerca 2",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "COD003",
                "title": "Codice ricerca 3",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DES003",
                "title": "Descrizione ricerca 3",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "XXBACI",
                "obj": {
                    "k": "",
                    "p": "XBA",
                    "t": "TA"
                },
                "title": "Bacino",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "XXSKIL",
                "obj": {
                    "k": "",
                    "p": "X02SKI",
                    "t": "V4"
                },
                "title": "Skill",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "CODFAS",
                "obj": {
                    "k": "",
                    "p": "XDP",
                    "t": "TA"
                },
                "title": "Dipendente",
                "tooltip": true
            },
            {
                "decimals": 0,
                "isEditable": false,
                "isKey": false,
                "name": "XXPRIO",
                "obj": {
                    "k": "",
                    "p": "",
                    "t": "NR"
                },
                "title": "Priorità ",
                "tooltip": false
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATINI",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data\nInizio",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATFIN",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data\nFine",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATPREI",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data Inizio\nPrevisione",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "DATPREF",
                "obj": {
                    "k": "",
                    "p": "*YYMD",
                    "t": "D8"
                },
                "title": "Data Fnizio\nPrevisione",
                "tooltip": true
            },
            {
                "isEditable": false,
                "isKey": false,
                "name": "COLDET",
                "title": "Colore dettaglio",
                "tooltip": false,
                "visible": false
            }
        ],
        "rows": [
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "1"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230420",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#ED7D31",
                            "p": "",
                            "t": ""
                        },
                        "value": "#ED7D31"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Elettricista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Elettricista"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230310",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230312",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-12",
                        "displayedValue": "12/03/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "01040",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "01040",
                        "displayedValue": "01040"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230415",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-15",
                        "displayedValue": "15/04/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "IEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "IEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ET01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ET01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ID01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ID01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "SA01",
                            "p": "",
                            "t": ""
                        },
                        "value": "SA01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Saldatore",
                            "p": "",
                            "t": ""
                        },
                        "value": "Saldatore"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Idraulico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Idraulico"
                    }
                },
                "id": "1",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "1"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230420",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#FF0000",
                            "p": "",
                            "t": ""
                        },
                        "value": "#FF0000"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Idraulico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Idraulico"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230310",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230312",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-12",
                        "displayedValue": "12/03/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "01875",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "01875",
                        "displayedValue": "01875"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230415",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-15",
                        "displayedValue": "15/04/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "IEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "IEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ID01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ID01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "SA01",
                            "p": "",
                            "t": ""
                        },
                        "value": "SA01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ET01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ET01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Elettricista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Elettricista"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Saldatore",
                            "p": "",
                            "t": ""
                        },
                        "value": "Saldatore"
                    }
                },
                "id": "2",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "1",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "1"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230620",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#ED7D31",
                            "p": "",
                            "t": ""
                        },
                        "value": "#ED7D31"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Saldatore",
                            "p": "",
                            "t": ""
                        },
                        "value": "Saldatore"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230510",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230312",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-03-12",
                        "displayedValue": "12/03/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "02241",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "02241",
                        "displayedValue": "02241"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230415",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-04-15",
                        "displayedValue": "15/04/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "IEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "IEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "SA01",
                            "p": "",
                            "t": ""
                        },
                        "value": "SA01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ET01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ET01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ID01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ID01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Idraulico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Idraulico"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Elettricista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Elettricista"
                    }
                },
                "id": "3",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "2",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "2"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230620",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#70AD47",
                            "p": "",
                            "t": ""
                        },
                        "value": "#70AD47"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Attrezzista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Attrezzista"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230510",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230512",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-12",
                        "displayedValue": "12/05/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "01040",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "01040",
                        "displayedValue": "01040"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230615",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-15",
                        "displayedValue": "15/06/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "MEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "AT01",
                            "p": "",
                            "t": ""
                        },
                        "value": "AT01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ME01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ME01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ID01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ID01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Idraulico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Idraulico"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Meccanico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Meccanico"
                    }
                },
                "id": "4",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "2",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "2"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230620",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#ED7D31",
                            "p": "",
                            "t": ""
                        },
                        "value": "#ED7D31"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Meccanico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Meccanico"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230510",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230512",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-12",
                        "displayedValue": "12/05/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "01875",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "01875",
                        "displayedValue": "01875"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230615",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-15",
                        "displayedValue": "15/06/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "MEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ME01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ME01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "SA01",
                            "p": "",
                            "t": ""
                        },
                        "value": "SA01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "AT01",
                            "p": "",
                            "t": ""
                        },
                        "value": "AT01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Attrezzista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Attrezzista"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Saldatore",
                            "p": "",
                            "t": ""
                        },
                        "value": "Saldatore"
                    }
                },
                "id": "5",
                "object": "",
                "readOnly": true
            },
            {
                "cells": {
                    "XXPRIO": {
                        "data": {
                            "size": 1,
                            "helperEnabled": false,
                            "maxLength": 1,
                            "integers": 1
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "2",
                            "p": "",
                            "t": "NR"
                        },
                        "value": "2"
                    },
                    "DATPREF": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230720",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-07-20"
                    },
                    "COLDET": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "#FF0000",
                            "p": "",
                            "t": ""
                        },
                        "value": "#FF0000"
                    },
                    "DES001": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Manutentore",
                            "p": "",
                            "t": ""
                        },
                        "value": "Manutentore"
                    },
                    "XXBACI": {
                        "data": {
                            "size": 5,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 5
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "COLEL",
                            "p": "XBA",
                            "t": "TA"
                        },
                        "value": "COLEL"
                    },
                    "DATPREI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230510",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-05-10"
                    },
                    "DATINI": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230612",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-06-12",
                        "displayedValue": "12/06/2023"
                    },
                    "CODFAS": {
                        "data": {
                            "size": 15,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 15
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "02241",
                            "p": "XDP",
                            "t": "TA"
                        },
                        "value": "02241",
                        "displayedValue": "02241"
                    },
                    "DATFIN": {
                        "data": {
                            "size": 8,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 8
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "20230715",
                            "p": "*YYMD",
                            "t": "D8"
                        },
                        "value": "2023-07-15",
                        "displayedValue": "15/07/2023"
                    },
                    "XXSKIL": {
                        "data": {
                            "size": 3,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 3
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MEC",
                            "p": "X02SKI",
                            "t": "V4"
                        },
                        "value": "MEC"
                    },
                    "COD001": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "MA01",
                            "p": "",
                            "t": ""
                        },
                        "value": "MA01"
                    },
                    "COD003": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "AT01",
                            "p": "",
                            "t": ""
                        },
                        "value": "AT01"
                    },
                    "COD002": {
                        "data": {
                            "size": 10,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 10
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "ME01",
                            "p": "",
                            "t": ""
                        },
                        "value": "ME01"
                    },
                    "DES002": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Meccanico",
                            "p": "",
                            "t": ""
                        },
                        "value": "Meccanico"
                    },
                    "DES003": {
                        "data": {
                            "size": 30,
                            "helperEnabled": false,
                            "hiddenCounter": true,
                            "maxLength": 30
                        },
                        "isEditable": false,
                        "obj": {
                            "k": "Attrezzista",
                            "p": "",
                            "t": ""
                        },
                        "value": "Attrezzista"
                    }
                },
                "id": "6",
                "object": "",
                "readOnly": true
            }
        ]
    },
    "detailColorCol": "COLDET",
    "detailColumns": [
        "CODFAS",
        "DATINI",
        "DATFIN"
    ],
    "detailDates": [
        "DATINI",
        "DATFIN"
    ],
    "detailIdCol": "CODFAS",
    "detailNameCol": "CODFAS",
    "detailPrevDates": [],
    "listCellWidth": "300px",
    "maxWidth": "90vw",
    "phaseColorCol": "COLFAS",
    "phaseColumns": [
        "DATINI",
        "DATFIN"
    ],
    "phaseColParDep": "FASDIP",
    "phaseDates": [
        "DATINI",
        "DATFIN"
    ],
    "phaseIdCol": "CODFAS",
    "phaseNameCol": "DESFAS",
    "phasePrevDates": [],
    "readOnly": false,
    "showSecondaryDates": false,
    "taskColumns": [
        "R§COMM",
        "R£COMM"
    ],
    "taskDates": [
        "DATINZ",
        "DATPRE"
    ],
    "taskIdCol": "R§COMM",
    "taskNameCol": "R£COMM",
    "taskPrevDates": [],
    "titleMess": ""
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

function onclick(event) {
    console.log('planner.js onclick', event.detail.taskAction);
    if (event.detail.taskAction == 'onTaskOpening') {
        comp.addPhases('G503', phases);
    }
}

const phases = {
    "columns": [
        {
            "isEditable": false,
            "isKey": false,
            "name": "CODFAS",
            "obj": {
                "k": "",
                "p": "",
                "t": "OP"
            },
            "title": "Fase",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DESFAS",
            "title": "Des\nFase",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "GESNOT",
            "obj": {
                "k": "",
                "p": "ICO",
                "t": "J4"
            },
            "title": "Note",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATINI",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nInizio",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATINZ",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nInizio P.O",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "SPOINI",
            "title": "GG\nSpostamento",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATDIC",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Eff.\nInizio",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATFIN",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nFine",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATFPO",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nFine\nPrev.Ordine",
            "tooltip": true
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "OREORD",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Ore Prev.\nORDINE",
            "tooltip": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "BDGORE",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Ore\nPrev.Tot",
            "tooltip": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "BDGAVOG",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Ore\nPrev.Oggi",
            "tooltip": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "DICORE",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Ore\nFatte",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§BDGPERC",
            "title": "%\nRisp. Prev.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§DICPERC",
            "title": "%\nFatte/Prev.Tot",
            "tooltip": false
        },
        {
            "decimals": 2,
            "isEditable": false,
            "isKey": false,
            "name": "NUMRIS",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Num.\nRis.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "MODPIA",
            "obj": {
                "k": "",
                "p": "ICO",
                "t": "J4"
            },
            "title": "Mod.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "ICOAVA",
            "obj": {
                "k": "",
                "p": "ICO",
                "t": "J4"
            },
            "title": "Sposta",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "COMPL",
            "obj": {
                "k": "",
                "p": "SI/NO",
                "t": "V2"
            },
            "title": "Compl.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DTARIL",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nVincolo",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "CDBASA",
            "obj": {
                "k": "",
                "p": "",
                "t": "AR"
            },
            "title": "Basamento",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DATUFF",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Cons.\nDisegno",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "TPDTUF",
            "title": "Des",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DTAFAB",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nBasamento",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "CODDIP",
            "title": "Cod.Fase\nDa cui Dip.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "FASDIP",
            "title": "Fase\nDa cui Dip.",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "FASDDT",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nFine Fase Dip",
            "tooltip": true
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "ICOFAS",
            "obj": {
                "k": "",
                "p": "ICO",
                "t": "J4"
            },
            "title": "Icona fase",
            "tooltip": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "CODCOM",
            "obj": {
                "k": "",
                "p": "MVE",
                "t": "DO"
            },
            "title": "Commessa",
            "tooltip": true,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "COLFAS",
            "title": "Sty\nColore",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§§AUTN",
            "title": "Aut.Note",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "N§TEVE",
            "obj": {
                "k": "",
                "p": "P5D",
                "t": "TA"
            },
            "title": "Tipo evento",
            "tooltip": true,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "N§NREV",
            "objs": [
                {
                    "k": "",
                    "p": "",
                    "t": "E3"
                }
            ],
            "title": "Numero reg. evento",
            "tooltip": true,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "DLTINI",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Dif\nGio",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "DIFGIO",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Giorni",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "ORERES",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Ore ancora\nDa fare",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "BDGPERC",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "%\nRisp. Prev.",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "DICPERC",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "%\nFatte/Prev.Tot",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "DIFPER",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "%\nRitardo",
            "tooltip": false,
            "visible": false
        },
        {
            "decimals": 0,
            "isEditable": false,
            "isKey": false,
            "name": "STIPER",
            "obj": {
                "k": "",
                "p": "",
                "t": "NR"
            },
            "title": "Stima\nAvanz. %",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "AGGSTI",
            "obj": {
                "k": "",
                "p": "*YYMD",
                "t": "D8"
            },
            "title": "Data\nAgg. Stima",
            "tooltip": true,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "STYAVA",
            "title": "Sty\nSposta",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "CODPMA",
            "obj": {
                "k": "",
                "p": "XDP",
                "t": "TA"
            },
            "title": "PM\nAssociato",
            "tooltip": true,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "DESPMA",
            "title": "PM\nAssociato",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "MESAUT",
            "obj": {
                "k": "",
                "p": "",
                "t": "**"
            },
            "title": "Aut.",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "STILE",
            "obj": {
                "k": "",
                "p": "",
                "t": "**"
            },
            "title": "Stile\nriga",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "EDTDDT",
            "obj": {
                "k": "",
                "p": "",
                "t": "**"
            },
            "title": "Data\nDecodificata",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§§KNO1",
            "title": "Chiave nota 1",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§§KNO2",
            "title": "Chiave nota 2",
            "tooltip": false,
            "visible": false
        },
        {
            "isEditable": false,
            "isKey": false,
            "name": "§§KNO3",
            "title": "Chiave nota 3",
            "tooltip": false,
            "visible": false
        }
    ],
    "rows": [
        {
            "cells": {
                "DIFGIO": {
                    "data": {
                        "size": 7,
                        "helperEnabled": false,
                        "maxLength": 7,
                        "integers": 7
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "80",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "80"
                },
                "ICOFAS": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "color": "#0000ff",
                        "size": 3,
                        "resource": "error_outline",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "I(VO;COD_SOS;000220) C(#0000ff)",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "error_outline"
                },
                "§§KNO1": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#ED7D31",
                        "p": "",
                        "t": ""
                    },
                    "value": "#ED7D31"
                },
                "DICORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        1.286,79000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "1,287"
                },
                "§§KNO3": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "CFC2  P410",
                        "p": "",
                        "t": ""
                    },
                    "value": "CFC2  P410"
                },
                "N§TEVE": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "   ",
                        "p": "P5D",
                        "t": "TA"
                    },
                    "value": ""
                },
                "§§KNO2": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456      0001",
                        "p": "",
                        "t": ""
                    },
                    "value": "G456      0001"
                },
                "ORERES": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "              713 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "713"
                },
                "STIPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "MODPIA": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "pencil",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000112",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "pencil"
                },
                "CDBASA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "               ",
                        "p": "",
                        "t": "AR"
                    },
                    "value": ""
                },
                "BDGORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        2.000,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "2,000"
                },
                "DLTINI": {
                    "data": {
                        "size": 5,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "78",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "78"
                },
                "DATINI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230306",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-03-06"
                },
                "DATFPO": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221104",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-04"
                },
                "STILE": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "**"
                    },
                    "value": ""
                },
                "DESFAS": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MONTAGGIO MECCANICO           ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MONTAGGIO MECCANICO           "
                },
                "DATINZ": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20220613",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-06-13"
                },
                "NUMRIS": {
                    "data": {
                        "size": 5,
                        "decimals": 2,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "1,11",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "1.11"
                },
                "DATUFF": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "EDTDDT": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "15/07/22",
                        "p": "",
                        "t": "**"
                    },
                    "value": "15/07/22"
                },
                "CODPMA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "XDP",
                        "t": "TA"
                    },
                    "value": ""
                },
                "DATDIC": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221107",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-07"
                },
                "TPDTUF": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "                                   ",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "CODCOM": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456",
                        "p": "MVE",
                        "t": "DO"
                    },
                    "value": "G456"
                },
                "GESNOT": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "content-copy",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000113",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "content-copy"
                },
                "§§AUTN": {
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "COMPL": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "checked": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "SI/NO",
                        "t": "V2"
                    },
                    "value": ""
                },
                "COLFAS": {
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#ED7D31",
                        "p": "",
                        "t": ""
                    },
                    "value": "#ED7D31"
                },
                "DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "64",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "64"
                },
                "OREORD": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "     2.080 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "2,080"
                },
                "§DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "64%",
                        "p": "",
                        "t": ""
                    },
                    "value": "64%"
                },
                "DESPMA": {
                    "data": {
                        "size": 30,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 30
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "DATFIN": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230630",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-06-30"
                },
                "DTAFAB": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "DIFPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "64-",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "-64"
                },
                "BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "0"
                },
                "SPOINI": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "145",
                        "p": "",
                        "t": ""
                    },
                    "value": "145"
                },
                "MESAUT": {
                    "data": {
                        "size": 50,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 50
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "NON AUTORIZZATO",
                        "p": "",
                        "t": "**"
                    },
                    "value": "NON AUTORIZZATO"
                },
                "CODDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P110",
                        "p": "",
                        "t": ""
                    },
                    "value": "P110"
                },
                "FASDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "ML - FINE REALIZZ.BASAMENTO        ",
                        "p": "",
                        "t": ""
                    },
                    "value": "ML - FINE REALIZZ.BASAMENTO        "
                },
                "DTARIL": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        ",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "CODFAS": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P410           ",
                        "p": "",
                        "t": "OP"
                    },
                    "value": "P410           "
                },
                "ICOAVA": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "ICO",
                        "t": "J4"
                    }
                },
                "FASDDT": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20220715",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-07-15"
                },
                "AGGSTI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "§BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0%",
                        "p": "",
                        "t": ""
                    },
                    "value": "0%"
                },
                "N§NREV": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 9,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 9
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "000000000",
                        "p": "[Nï¿½TEVE]",
                        "t": "E3"
                    },
                    "value": "000000000"
                },
                "BDGAVOG": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "STYAVA": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                }
            },
            "id": "1",
            "object": "",
            "readOnly": true
        },
        {
            "cells": {
                "DIFGIO": {
                    "data": {
                        "size": 7,
                        "helperEnabled": false,
                        "maxLength": 7,
                        "integers": 7
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "62",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "62"
                },
                "ICOFAS": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "color": "rgb(0, 255, 0)",
                        "size": 3,
                        "resource": "error_outline",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "I(VO;COD_SOS;000220) C(R000G255B000)",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "error_outline"
                },
                "§§KNO1": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#FF0000",
                        "p": "",
                        "t": ""
                    },
                    "value": "#FF0000"
                },
                "DICORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "          718,14000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "718"
                },
                "§§KNO3": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "CFC2  P420",
                        "p": "",
                        "t": ""
                    },
                    "value": "CFC2  P420"
                },
                "N§TEVE": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "   ",
                        "p": "P5D",
                        "t": "TA"
                    },
                    "value": ""
                },
                "§§KNO2": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456      0001",
                        "p": "",
                        "t": ""
                    },
                    "value": "G456      0001"
                },
                "ORERES": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "              241 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "241"
                },
                "STIPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "MODPIA": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "pencil",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000112",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "pencil"
                },
                "CDBASA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "               ",
                        "p": "",
                        "t": "AR"
                    },
                    "value": ""
                },
                "BDGORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "          960,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "960"
                },
                "DLTINI": {
                    "data": {
                        "size": 5,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "-32",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "-32"
                },
                "DATINI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221121",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-21"
                },
                "DATFPO": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221111",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-11"
                },
                "STILE": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "**"
                    },
                    "value": ""
                },
                "DESFAS": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MONTAGGIO ELETTRICO           ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MONTAGGIO ELETTRICO           "
                },
                "DATINZ": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20220829",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-08-29"
                },
                "NUMRIS": {
                    "data": {
                        "size": 5,
                        "decimals": 2,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "10,04",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "10.04"
                },
                "DATUFF": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "EDTDDT": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "15/07/22",
                        "p": "",
                        "t": "**"
                    },
                    "value": "15/07/22"
                },
                "CODPMA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "XDP",
                        "t": "TA"
                    },
                    "value": ""
                },
                "DATDIC": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230113",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-01-13"
                },
                "TPDTUF": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "                                   ",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "CODCOM": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456",
                        "p": "MVE",
                        "t": "DO"
                    },
                    "value": "G456"
                },
                "GESNOT": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "content-copy",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000113",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "content-copy"
                },
                "§§AUTN": {
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "COMPL": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "checked": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "SI/NO",
                        "t": "V2"
                    },
                    "value": ""
                },
                "COLFAS": {
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#FF0000",
                        "p": "",
                        "t": ""
                    },
                    "value": "#FF0000"
                },
                "DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "74",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "74"
                },
                "OREORD": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       960 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "960"
                },
                "§DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "74%",
                        "p": "",
                        "t": ""
                    },
                    "value": "74%"
                },
                "DESPMA": {
                    "data": {
                        "size": 30,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 30
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "DATFIN": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230224",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-02-24"
                },
                "DTAFAB": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "DIFPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "22",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "22"
                },
                "BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "96",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "96"
                },
                "SPOINI": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "78",
                        "p": "",
                        "t": ""
                    },
                    "value": "78"
                },
                "MESAUT": {
                    "data": {
                        "size": 50,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 50
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "NON AUTORIZZATO",
                        "p": "",
                        "t": "**"
                    },
                    "value": "NON AUTORIZZATO"
                },
                "CODDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P110",
                        "p": "",
                        "t": ""
                    },
                    "value": "P110"
                },
                "FASDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "ML - FINE REALIZZ.BASAMENTO        ",
                        "p": "",
                        "t": ""
                    },
                    "value": "ML - FINE REALIZZ.BASAMENTO        "
                },
                "DTARIL": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        ",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "CODFAS": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P420           ",
                        "p": "",
                        "t": "OP"
                    },
                    "value": "P420           "
                },
                "ICOAVA": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "ICO",
                        "t": "J4"
                    }
                },
                "FASDDT": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20220715",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-07-15"
                },
                "AGGSTI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "§BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "96%",
                        "p": "",
                        "t": ""
                    },
                    "value": "96%"
                },
                "N§NREV": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 9,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 9
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "000000000",
                        "p": "[Nï¿½TEVE]",
                        "t": "E3"
                    },
                    "value": "000000000"
                },
                "BDGAVOG": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "   928 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "928"
                },
                "STYAVA": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                }
            },
            "id": "2",
            "object": "",
            "readOnly": true
        },
        {
            "cells": {
                "DIFGIO": {
                    "data": {
                        "size": 7,
                        "helperEnabled": false,
                        "maxLength": 7,
                        "integers": 7
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "15",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "15"
                },
                "ICOFAS": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "color": "#b71817",
                        "size": 3,
                        "resource": "brightness-1",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_AGG;000011",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "brightness-1"
                },
                "§§KNO1": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#70AD47",
                        "p": "",
                        "t": ""
                    },
                    "value": "#70AD47"
                },
                "DICORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "            9,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "9"
                },
                "§§KNO3": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "CFC2  P610",
                        "p": "",
                        "t": ""
                    },
                    "value": "CFC2  P610"
                },
                "N§TEVE": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "   ",
                        "p": "P5D",
                        "t": "TA"
                    },
                    "value": ""
                },
                "§§KNO2": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456      0001",
                        "p": "",
                        "t": ""
                    },
                    "value": "G456      0001"
                },
                "ORERES": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "              111 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "111"
                },
                "STIPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "MODPIA": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "pencil",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000112",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "pencil"
                },
                "CDBASA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "               ",
                        "p": "",
                        "t": "AR"
                    },
                    "value": ""
                },
                "BDGORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "          120,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "120"
                },
                "DLTINI": {
                    "data": {
                        "size": 5,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "DATINI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230717",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-07-17"
                },
                "DATFPO": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230102",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-01-02"
                },
                "STILE": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "**"
                    },
                    "value": ""
                },
                "DESFAS": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MESSA IN SERVIZIO MECC.       ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MESSA IN SERVIZIO MECC.       "
                },
                "DATINZ": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221121",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-21"
                },
                "NUMRIS": {
                    "data": {
                        "size": 5,
                        "decimals": 2,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0,92",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "0.92"
                },
                "DATUFF": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "EDTDDT": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "30/06/23",
                        "p": "",
                        "t": "**"
                    },
                    "value": "30/06/23"
                },
                "CODPMA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "XDP",
                        "t": "TA"
                    },
                    "value": ""
                },
                "DATDIC": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "TPDTUF": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "                                   ",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "CODCOM": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456",
                        "p": "MVE",
                        "t": "DO"
                    },
                    "value": "G456"
                },
                "GESNOT": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "content-copy",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000113",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "content-copy"
                },
                "§§AUTN": {
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "COMPL": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "checked": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "SI/NO",
                        "t": "V2"
                    },
                    "value": ""
                },
                "COLFAS": {
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#70AD47",
                        "p": "",
                        "t": ""
                    },
                    "value": "#70AD47"
                },
                "DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "7"
                },
                "OREORD": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       160 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "160"
                },
                "§DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7%",
                        "p": "",
                        "t": ""
                    },
                    "value": "7%"
                },
                "DESPMA": {
                    "data": {
                        "size": 30,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 30
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "DATFIN": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230804",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-08-04"
                },
                "DTAFAB": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "DIFPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7-",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "-7"
                },
                "BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "0"
                },
                "SPOINI": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "10",
                        "p": "",
                        "t": ""
                    },
                    "value": "10"
                },
                "MESAUT": {
                    "data": {
                        "size": 50,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 50
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "NON AUTORIZZATO",
                        "p": "",
                        "t": "**"
                    },
                    "value": "NON AUTORIZZATO"
                },
                "CODDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P410",
                        "p": "",
                        "t": ""
                    },
                    "value": "P410"
                },
                "FASDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MONTAGGIO MECCANICO           ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MONTAGGIO MECCANICO           "
                },
                "DTARIL": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        ",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "CODFAS": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P610           ",
                        "p": "",
                        "t": "OP"
                    },
                    "value": "P610           "
                },
                "ICOAVA": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "ICO",
                        "t": "J4"
                    }
                },
                "FASDDT": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230630",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-06-30"
                },
                "AGGSTI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "§BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0%",
                        "p": "",
                        "t": ""
                    },
                    "value": "0%"
                },
                "N§NREV": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 9,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 9
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "000000000",
                        "p": "[Nï¿½TEVE]",
                        "t": "E3"
                    },
                    "value": "000000000"
                },
                "BDGAVOG": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "STYAVA": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                }
            },
            "id": "3",
            "object": "",
            "readOnly": true
        },
        {
            "cells": {
                "DIFGIO": {
                    "data": {
                        "size": 7,
                        "helperEnabled": false,
                        "maxLength": 7,
                        "integers": 7
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "15",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "15"
                },
                "ICOFAS": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "error_outline",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_SOS;000220",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "error_outline"
                },
                "§§KNO1": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#70AD47",
                        "p": "",
                        "t": ""
                    },
                    "value": "#70AD47"
                },
                "DICORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "            9,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "9"
                },
                "§§KNO3": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "CFC2  P611",
                        "p": "",
                        "t": ""
                    },
                    "value": "CFC2  P611"
                },
                "N§TEVE": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "   ",
                        "p": "P5D",
                        "t": "TA"
                    },
                    "value": ""
                },
                "§§KNO2": {
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456      0001",
                        "p": "",
                        "t": ""
                    },
                    "value": "G456      0001"
                },
                "ORERES": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "              111 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "111"
                },
                "STIPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "MODPIA": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "pencil",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000112",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "pencil"
                },
                "CDBASA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "               ",
                        "p": "",
                        "t": "AR"
                    },
                    "value": ""
                },
                "BDGORE": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "          120,00000 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "120"
                },
                "DLTINI": {
                    "data": {
                        "size": 5,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "DATINI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230717",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-07-17"
                },
                "DATFPO": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230102",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-01-02"
                },
                "STILE": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": "**"
                    },
                    "value": ""
                },
                "DESFAS": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MESSA IN SERVIZIO MECC.2      ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MESSA IN SERVIZIO MECC.2      "
                },
                "DATINZ": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20221121",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2022-11-21"
                },
                "NUMRIS": {
                    "data": {
                        "size": 5,
                        "decimals": 2,
                        "helperEnabled": false,
                        "maxLength": 5,
                        "integers": 5
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0,92",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "0.92"
                },
                "DATUFF": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "EDTDDT": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "30/06/23",
                        "p": "",
                        "t": "**"
                    },
                    "value": "30/06/23"
                },
                "CODPMA": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "XDP",
                        "t": "TA"
                    },
                    "value": ""
                },
                "DATDIC": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "TPDTUF": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "                                   ",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "CODCOM": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "G456",
                        "p": "MVE",
                        "t": "DO"
                    },
                    "value": "G456"
                },
                "GESNOT": {
                    "cssClass": "strong-text",
                    "data": {
                        "sizeX": "18px",
                        "size": 3,
                        "resource": "content-copy",
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "sizeY": "18px",
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "VO;COD_VER;000113",
                        "p": "ICO",
                        "t": "J4"
                    },
                    "value": "content-copy"
                },
                "§§AUTN": {
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "COMPL": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 1,
                        "helperEnabled": false,
                        "checked": false,
                        "hiddenCounter": true,
                        "maxLength": 1
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "SI/NO",
                        "t": "V2"
                    },
                    "value": ""
                },
                "COLFAS": {
                    "data": {
                        "size": 10,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 10
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "#70AD47",
                        "p": "",
                        "t": ""
                    },
                    "value": "#70AD47"
                },
                "DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "7"
                },
                "OREORD": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       160 ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "160"
                },
                "§DICPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7%",
                        "p": "",
                        "t": ""
                    },
                    "value": "7%"
                },
                "DESPMA": {
                    "data": {
                        "size": 30,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 30
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                },
                "DATFIN": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230804",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-08-04"
                },
                "DTAFAB": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "DIFPER": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "7-",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "-7"
                },
                "BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "maxLength": 6,
                        "integers": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0",
                        "p": "",
                        "t": "NR"
                    },
                    "value": "0"
                },
                "SPOINI": {
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "10",
                        "p": "",
                        "t": ""
                    },
                    "value": "10"
                },
                "MESAUT": {
                    "data": {
                        "size": 50,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 50
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "NON AUTORIZZATO",
                        "p": "",
                        "t": "**"
                    },
                    "value": "NON AUTORIZZATO"
                },
                "CODDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P410",
                        "p": "",
                        "t": ""
                    },
                    "value": "P410"
                },
                "FASDIP": {
                    "data": {
                        "size": 35,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 35
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "FS - MONTAGGIO MECCANICO           ",
                        "p": "",
                        "t": ""
                    },
                    "value": "FS - MONTAGGIO MECCANICO           "
                },
                "DTARIL": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "        ",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "CODFAS": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 15,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 15
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "P611           ",
                        "p": "",
                        "t": "OP"
                    },
                    "value": "P611           "
                },
                "ICOAVA": {
                    "cssClass": "strong-text",
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "ICO",
                        "t": "J4"
                    }
                },
                "FASDDT": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "20230630",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": "2023-06-30"
                },
                "AGGSTI": {
                    "cssClass": " top-right-indicator",
                    "data": {
                        "size": 8,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 8
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "00000000",
                        "p": "*YYMD",
                        "t": "D8"
                    },
                    "value": ""
                },
                "§BDGPERC": {
                    "data": {
                        "size": 6,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 6
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "0%",
                        "p": "",
                        "t": ""
                    },
                    "value": "0%"
                },
                "N§NREV": {
                    "cssClass": "strong-text top-right-indicator",
                    "data": {
                        "size": 9,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 9
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "000000000",
                        "p": "[Nï¿½TEVE]",
                        "t": "E3"
                    },
                    "value": "000000000"
                },
                "BDGAVOG": {
                    "data": {
                        "size": 13,
                        "helperEnabled": false,
                        "maxLength": 13,
                        "integers": 13
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "       ",
                        "p": "",
                        "t": "NR"
                    },
                    "value": ""
                },
                "STYAVA": {
                    "data": {
                        "size": 3,
                        "helperEnabled": false,
                        "hiddenCounter": true,
                        "maxLength": 3
                    },
                    "isEditable": false,
                    "obj": {
                        "k": "",
                        "p": "",
                        "t": ""
                    },
                    "value": ""
                }
            },
            "id": "4",
            "object": "",
            "readOnly": true
        }
    ]
};

function dummyFilter() {
    const filter = document.createElement('div');
    filter.innerText = 'Filter placeholder';
    return filter;
}