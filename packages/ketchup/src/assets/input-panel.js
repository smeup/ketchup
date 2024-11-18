const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;

// Tables
const datatable = {
    type: 'SmeupDataTable',
    columns: [
        {
            editable: true,
            name: 'COL1',
            title: 'Column 1',
            visible: true,
            isEditable: true,
        },
        {
            editable: false,
            name: 'COL2',
            title: 'Column 2',
            visible: true,
            isEditable: false,
        },
    ],
    rows: [
        {
            cells: {
                COL1: {
                    value: 'Override value',
                    options: [],
                    icon: 'home',
                    editable: false,
                    mandatory: false,
                    fun: 'EXEC',
                },
                COL2: {
                    value: 'Row 1 column 2',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [],
            },
        },
        {
            cells: {
                COL1: {
                    value: 'Row 2 column 1',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
                COL2: {
                    value: 'Row 2 column 2',
                    options: [],
                    editable: false,
                    mandatory: false,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [],
            },
        },
    ],
};

const absoluteLayoutTest = {
    type: 'SmeupDataTable',
    serviceInfo: {
        fun: 'F(EXB;B£SER_46;WRK.SCP) 1(MB;SCP_SET;WETEST_INP) 2(;;INP_035) SS(ID({i957611}) DV(W))',
        serviceName: 'B£SER_46',
    },
    columns: [
        {
            name: 'AGENL',
            title: 'Agenti.L',
            visible: true,
            isEditable: false,
            maxLength: 15,
            length: 15,
            shape: 'LBL',
        },
        {
            name: 'AGEN',
            title: 'Agenti',
            visible: true,
            isEditable: true,
            obj: {
                t: 'TA',
                p: 'AGE',
            },
            maxLength: 15,
            length: 15,
        },
        {
            name: 'CLIEL',
            title: 'Clienti.L',
            visible: true,
            isEditable: false,
            maxLength: 15,
            length: 15,
            shape: 'LBL',
        },
        {
            name: 'CLIE',
            title: 'Clienti',
            visible: true,
            isEditable: true,
            obj: {
                t: 'CN',
                p: 'CLI',
            },
            maxLength: 15,
            length: 15,
        },
        {
            name: 'FORNL',
            title: 'Fornitori.L',
            visible: true,
            isEditable: false,
            maxLength: 15,
            length: 15,
            shape: 'LBL',
        },
        {
            name: 'FORN',
            title: 'Fornitori',
            visible: true,
            isEditable: false,
            obj: {
                t: 'CN',
                p: 'FOR',
            },
            maxLength: 15,
            length: 15,
        },
        {
            name: 'V£COML',
            title: 'Commessa',
            visible: true,
            isEditable: true,
            maxLength: 12,
            length: 12,
            shape: 'LBL',
        },
        {
            name: 'V£COM',
            title: 'Commessa',
            visible: true,
            isEditable: true,
            obj: {
                t: 'CM',
                p: '',
            },
            maxLength: 12,
            length: 12,
        },
        {
            name: 'V£ORA',
            title: 'Ora',
            visible: true,
            isEditable: true,
            obj: {
                t: 'I1',
                p: '2',
            },
            maxLength: 8,
            length: 8,
        },
        {
            name: 'V£DATA',
            title: 'Data',
            visible: true,
            isEditable: true,
            obj: {
                t: 'D8',
                p: '*YYMD',
            },
            maxLength: 8,
            length: 8,
        },
        {
            name: 'V£DESC',
            title: 'Descrizione',
            visible: true,
            isEditable: true,
            maxLength: 300,
            length: 300,
        },
        {
            name: 'SUBSZBL',
            title: 'Label sotto-sez.B',
            visible: true,
            isEditable: false,
            maxLength: 30,
            length: 30,
            shape: 'LBL',
        },
        {
            name: 'SUBSZCL',
            title: 'Label sotto-sez.C',
            visible: true,
            isEditable: false,
            maxLength: 30,
            length: 30,
            shape: 'LBL',
        },
    ],
    rows: [
        {
            cells: {
                AGENL: {
                    value: 'Cod.Agente',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Cod.Agente',
                    },
                    editable: false,
                    shape: 'LBL',
                    data: {
                        size: 15,
                        maxLength: 15,
                    },
                },
                AGEN: {
                    obj: {
                        t: 'TA',
                        p: 'AGE',
                        k: 'SMEWW',
                    },
                    shape: 'CMB',
                    tooltip: true,
                },
                CLIEL: {
                    value: 'Cod.Cliente',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Cod.Cliente',
                    },
                    editable: false,
                    shape: 'LBL',
                    data: {
                        size: 15,
                        maxLength: 15,
                    },
                },
                CLIE: {
                    value: '100001',
                    obj: {
                        t: 'CN',
                        p: 'CLI',
                        k: '100001',
                    },
                    editable: true,
                    shape: 'CMB',
                    tooltip: true,
                    data: {
                        size: 15,
                        maxLength: 15,
                    },
                },
                FORNL: {
                    value: 'Cod.Fornitore',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Cod.Fornitore',
                    },
                    editable: false,
                    shape: 'LBL',
                    data: {
                        size: 15,
                        maxLength: 15,
                    },
                },
                FORN: {
                    value: '20140702',
                    obj: {
                        t: 'CN',
                        p: 'FOR',
                        k: '20140702',
                    },
                    editable: false,
                    tooltip: true,
                    data: {
                        size: 15,
                        maxLength: 15,
                    },
                },
                'V£COML': {
                    value: 'Cod.Commessa',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Cod.Commessa',
                    },
                    editable: true,
                    shape: 'LBL',
                    data: {
                        size: 12,
                        maxLength: 12,
                    },
                },
                'V£COM': {
                    value: '',
                    obj: {
                        t: 'CM',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    tooltip: true,
                    data: {
                        size: 12,
                        maxLength: 12,
                    },
                },
                'V£ORA': {
                    value: '00:00:00',
                    obj: {
                        t: 'I1',
                        p: '2',
                        k: '',
                    },
                    editable: true,
                    tooltip: true,
                    data: {
                        size: 8,
                        maxLength: 8,
                    },
                },
                'V£DATA': {
                    value: '',
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '',
                    },
                    editable: true,
                    tooltip: true,
                    data: {
                        size: 8,
                        maxLength: 8,
                    },
                },
                'V£DESC': {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    data: {
                        size: 300,
                        maxLength: 300,
                    },
                },
                SUBSZBL: {
                    value: 'Dati sotto-sezione B',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Dati sotto-sezione B',
                    },
                    editable: false,
                    shape: 'LBL',
                    data: {
                        size: 30,
                        maxLength: 30,
                    },
                },
                SUBSZCL: {
                    value: 'Dati sotto-sezione C',
                    obj: {
                        t: '',
                        p: '',
                        k: 'Dati sotto-sezione C',
                    },
                    editable: false,
                    shape: 'LBL',
                    data: {
                        size: 30,
                        maxLength: 30,
                    },
                },
            },
            layout: {
                horizontal: true,
                absolute: true,
                sections: [
                    {
                        id: 'A',
                        content: [
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                id: 'AGENL',
                                absoluteColumn: 2,
                                absoluteRow: 2,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                id: 'AGEN',
                                absoluteColumn: 12,
                                absoluteRow: 2,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                id: 'V£COML',
                                absoluteColumn: 2,
                                absoluteRow: 3,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                id: 'V£COM',
                                absoluteColumn: 12,
                                absoluteRow: 3,
                            },
                        ],
                        sections: [],
                        absoluteColumn: 1,
                        absoluteWidth: 40,
                        absoluteRow: 1,
                        absoluteHeight: 300,
                    },
                    {
                        id: 'B',
                        content: [
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'SUBSZBL',
                                absoluteColumn: 2,
                                absoluteRow: 1,
                                absoluteLength: 50,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'FORNL',
                                absoluteColumn: 2,
                                absoluteRow: 2,
                                absoluteLength: 50,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'FORN',
                                absoluteColumn: 12,
                                absoluteRow: 2,
                                absoluteLength: 50,
                            },
                        ],
                        sections: [],
                        absoluteColumn: 6,
                        absoluteWidth: 40,
                        absoluteRow: 4,
                        absoluteHeight: 300,
                    },
                    {
                        id: 'C',
                        content: [
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'SUBSZCL',
                                absoluteColumn: 2,
                                absoluteRow: 1,
                                absoluteLength: 50,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'CLIEL',
                                absoluteColumn: 3,
                                absoluteRow: 4,
                                absoluteLength: 50,
                            },
                            {
                                value: '',
                                obj: {
                                    t: '',
                                    p: '',
                                    k: '',
                                },
                                data: {
                                    size: 50,
                                    maxLength: 50,
                                },
                                id: 'CLIE',
                                absoluteColumn: 13,
                                absoluteRow: 4,
                                absoluteLength: 50,
                            },
                        ],
                        sections: [],
                        absoluteColumn: 50,
                        absoluteWidth: 40,
                        absoluteRow: 4,
                        absoluteHeight: 300,
                    },
                ],
            },
        },
    ],
    setup: {
        components: {},
    },
    debugInfo: {
        executionTime_ms: 451,
        initialTimestamp: '2024-11-05T10:10:21.512574669Z',
        finalTimestamp: '2024-11-05T10:10:21.964351842Z',
        runtime: 'Java 21',
    },
};

const dataTableGroupsTest = {
    type: 'SmeupDataTable',
    columns: [
        {
            name: 'STR001',
            obj: {
                k: '',
                p: '',
                t: '',
            },
            title: 'Regione',
        },
        {
            name: 'STR002',
            obj: {
                k: '',
                p: '',
                t: '',
            },
            title: 'Provincia',
        },
        {
            name: 'STR003',
            obj: {
                k: '',
                p: '',
                t: '',
            },
            title: 'Comune',
        },
        {
            decimals: 0,
            name: 'STR004',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Popolazione',
        },
    ],
    rows: [
        {
            cells: {
                STR004: {
                    obj: {
                        k: '1',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '1',
                    data: {},
                    displayedValue: '1',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Asti',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Asti',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Asti',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Asti',
                    displayedValue: 'Asti',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '0',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '2',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '2',
                },
                STR003: {
                    obj: {
                        k: 'San Damiano',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'San Damiano',
                },
                STR002: {
                    obj: {
                        k: 'Asti',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Asti',
                    displayedValue: 'Asti',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '3',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '3',
                },
                STR003: {
                    obj: {
                        k: 'Canelli',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Canelli',
                },
                STR002: {
                    obj: {
                        k: 'Asti',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Asti',
                    displayedValue: 'Asti',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '4',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '4',
                },
                STR003: {
                    obj: {
                        k: 'Cuneo',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cuneo',
                },
                STR002: {
                    obj: {
                        k: 'Cuneo',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cuneo',
                    displayedValue: 'Cuneo',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '5',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '5',
                },
                STR003: {
                    obj: {
                        k: 'Alba',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Alba',
                },
                STR002: {
                    obj: {
                        k: 'Cuneo',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cuneo',
                    displayedValue: 'Cuneo',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '6',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '6',
                },
                STR003: {
                    obj: {
                        k: 'Bra',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Bra',
                },
                STR002: {
                    obj: {
                        k: 'Cuneo',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cuneo',
                    displayedValue: 'Cuneo',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '5',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '7',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '7',
                },
                STR003: {
                    obj: {
                        k: 'Torino',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Torino',
                },
                STR002: {
                    obj: {
                        k: 'Torino',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Torino',
                    displayedValue: 'Torino',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '6',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '8',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '8',
                },
                STR003: {
                    obj: {
                        k: 'Moncalieri',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Moncalieri',
                },
                STR002: {
                    obj: {
                        k: 'Torino',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Torino',
                    displayedValue: 'Torino',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '7',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '9',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '9',
                },
                STR003: {
                    obj: {
                        k: 'Collegno',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Collegno',
                },
                STR002: {
                    obj: {
                        k: 'Torino',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Torino',
                    displayedValue: 'Torino',
                },
                STR001: {
                    obj: {
                        k: 'Piemonte',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Piemonte',
                    displayedValue: 'Piemonte',
                },
            },
            id: '8',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '10',
                    data: {},
                    displayedValue: '10',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Milano',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Milano',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Milano',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Milano',
                    displayedValue: 'Milano',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '9',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '11',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '11',
                    data: {},
                    displayedValue: '11',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Sesto San Giovanni',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Sesto San Giovanni',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Milano',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Milano',
                    displayedValue: 'Milano',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '10',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '12',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '12',
                    data: {},
                    displayedValue: '12',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Cinisello Balsamo',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cinisello Balsamo',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Milano',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Milano',
                    displayedValue: 'Milano',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '11',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '13',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '13',
                    data: {},
                    displayedValue: '13',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Brescia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Brescia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Brescia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Brescia',
                    displayedValue: 'Brescia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '12',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '14',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '14',
                    data: {},
                    displayedValue: '14',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Desenzano del Garda',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Desenzano del Garda',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Brescia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Brescia',
                    displayedValue: 'Brescia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '13',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '15',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '15',
                    data: {},
                    displayedValue: '15',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Montichiari',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Montichiari',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Brescia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Brescia',
                    displayedValue: 'Brescia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '14',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '16',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '16',
                    data: {},
                    displayedValue: '16',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Como',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Como',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Como',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Como',
                    displayedValue: 'Como',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '15',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '17',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '17',
                    data: {},
                    displayedValue: '17',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Cantù',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Cantù',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Como',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Como',
                    displayedValue: 'Como',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '16',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                STR004: {
                    obj: {
                        k: '18',
                        p: '',
                        t: 'NR',
                    },
                    options: false,
                    value: '18',
                    data: {},
                    displayedValue: '18',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR003: {
                    obj: {
                        k: 'Mariano Comense',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Mariano Comense',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR002: {
                    obj: {
                        k: 'Como',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Como',
                    displayedValue: 'Como',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                STR001: {
                    obj: {
                        k: 'Lombardia',
                        p: '',
                        t: '',
                    },
                    options: false,
                    value: 'Lombardia',
                    displayedValue: 'Lombardia',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '17',
            object: '',
            readOnly: true,
        },
    ],
};

const dataTableFiltersTest = {
    type: 'SmeupDataTable',
    columns: [
        {
            name: 'FLD1',
            title: 'Column A',
            size: '',
            isEditable: true,
        },
        {
            name: 'FLD2',
            title: 'Column B',
            size: 10,
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            children: [
                {
                    icon: 'widgets',
                    name: 'FLD3',
                    obj: {
                        t: 'OA',
                        p: 'SOMETHING',
                        k: 'SOMETHINGELSE',
                    },
                },
                {
                    icon: 'widgets',
                    name: 'FLD3',
                    obj: {
                        t: 'OA',
                        p: 'SOMETHING',
                        k: 'SOMETHINGELSE',
                    },
                },
                {
                    icon: 'widgets',
                    name: 'FLD3',
                    obj: {
                        t: 'OA',
                        p: 'SOMETHING',
                        k: 'SOMETHINGELSE',
                    },
                },
            ],
            isEditable: true,
        },
        {
            name: 'FLD3',
            title: 'Column C',
            size: 10,
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
            isEditable: true,
        },
        {
            name: 'FLD4',
            title: 'Column D',
            size: 10,
            obj: {
                t: 'D8',
                p: '*YYMD',
                k: '',
            },
            icon: 'calendar',
            isKey: true,
            isEditable: true,
        },
        {
            name: 'FLD5',
            title: 'Column Percentuale',
            size: 10,
            obj: {
                t: 'NR',
                p: 'P',
                k: '',
            },
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    info: {
                        color: 'var(--kup-warning-color-50)',
                        icon: 'warning',
                        message: 'Warning message, thread carefully!',
                    },
                    value: 'CASFRA',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '10',
                    },
                    value: '10',
                    data: {},
                    displayedValue: '10',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100000.60',
                    },
                    value: '100,000.60',
                    info: {
                        message: 'Info message, hello!',
                    },
                    data: {},
                    displayedValue: '100,000.6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20181101',
                    },
                    value: '2018-11-01',
                    info: {
                        color: 'var(--kup-danger-color)',
                        icon: 'cancel',
                        message: 'Error message, whoops!',
                    },
                    data: {},
                    displayedValue: '01/11/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '10.60',
                    },
                    value: '10.60',
                    info: {
                        color: 'var(--kup-success-color-40)',
                        icon: 'check_circle',
                        message: 'Success message, yaas!',
                    },
                    data: {},
                    displayedValue: '10.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '0',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '10',
                    },
                    value: '10',
                    data: {},
                    displayedValue: '10',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100000.60',
                    },
                    value: '100,000.60',
                    data: {},
                    displayedValue: '100,000.6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20181101',
                    },
                    value: '2018-11-01',
                    data: {},
                    displayedValue: '01/11/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '0',
                    },
                    value: '0.00',
                    data: {},
                    displayedValue: '0 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '1',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '20.60',
                    },
                    value: '20.60',
                    data: {},
                    displayedValue: '20.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '2',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'PARFRA',
                    },
                    value: 'PARFRA',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '5',
                    },
                    value: '5',
                    data: {},
                    displayedValue: '5',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
                    data: {},
                    displayedValue: '120.06',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180103',
                    },
                    value: '2018-01-03',
                    data: {},
                    displayedValue: '03/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '30.60',
                    },
                    value: '30.60',
                    data: {},
                    displayedValue: '30.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '3',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '40.60',
                    },
                    value: '40.60',
                    data: {},
                    displayedValue: '40.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '4',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '50.60',
                    },
                    value: '50.60',
                    data: {},
                    displayedValue: '50.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '5',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '60.60',
                    },
                    value: '60.60',
                    data: {},
                    displayedValue: '60.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '6',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '70.60',
                    },
                    value: '70.60',
                    data: {},
                    displayedValue: '70.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '7',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '80.60',
                    },
                    value: '80.60',
                    data: {},
                    displayedValue: '80.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '8',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '90.60',
                    },
                    value: '90.60',
                    data: {},
                    displayedValue: '90.6 %',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '9',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                    data: {},
                    displayedValue: '6',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    data: {},
                    displayedValue: '67.8',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '2018-01-02',
                    data: {},
                    displayedValue: '02/01/2018',
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
                FLD5: {
                    obj: {
                        t: 'NR',
                        p: 'P',
                        k: '0',
                    },
                    value: '',
                    data: {},
                    element: {
                        's-hn': 'KUP-DATA-TABLE',
                    },
                },
            },
            id: '10',
        },
    ],
};

// Autocomplete

const autocompleteTest = {
    options: [
        {
            label: 'Value 1',

            id: 'value1',
        },
        {
            label: 'Value 2',
            id: 'value2',
        },
        {
            label: 'Value 3',
            id: 'value3',
        },
        {
            label: 'Value 4',
            id: 'value4',
        },
        {
            label: 'Value 5',
            id: 'value5',
        },
    ],
    data: {
        'kup-text-field': {
            trailingIcon: true,
            icon: 'arrow_drop_down',
        },
        'kup-list': {
            showIcons: true,
        },
    },
};

const comboboxTest = {
    options: [
        {
            label: 'Text 1',
            id: 'txt1',
        },
        {
            label: 'Text 2',
            id: 'txt2',
        },
        {
            label: 'Text 3',
            id: 'txt3',
        },
        {
            label: 'Text 4',
            id: 'txt4',
        },
        {
            label: 'Text 5',
            id: 'txt5',
        },
    ],
    data: {
        'text-field': {
            trailingIcon: true,
            icon: 'arrow_drop_down',
        },
        'kup-list': {
            showIcons: true,
            selectable: true,
        },
    },
};

// Data input panel

const data = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'INP1',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'INP2',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
        { editable: false, name: 'BTN1', visible: true, isEditable: false },
        { editable: false, name: 'BTN2', visible: true, isEditable: false },
        { name: 'NAT', title: 'Combo', visible: true },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: 'Giovanni',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                INP1: {
                    value: '',
                    obj: { t: 'D8', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                },
                INP2: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    editable: true,
                    mandatory: true,
                },
                BTN1: {
                    value: 'Load data',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                BTN2: {
                    value: 'Avanti',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                NAT: {
                    value: 'ITA',
                    fun: 'combo',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CMB',
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            {
                                options: [],
                                editable: false,
                                mandatory: false,
                                id: 'NAM',
                                colSpan: 1,
                                rowSpan: 1,
                            },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 4,
                        gridRows: 2,
                        gap: 2,
                    },
                ],
            },
        },
    ],
    debugInfo: {
        executionTime_ms: 51,
        initialTimestamp: '2024-06-11T15:02:17.854994131Z',
        finalTimestamp: '2024-06-11T15:02:17.906443131Z',
        runtime: 'Java 21',
    },
};

const data1 = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            editable: false,
            name: 'INP1',
            title: 'Field1',
            visible: true,
            isEditable: false,
        },
        {
            editable: false,
            name: 'INP2',
            title: 'Field2',
            visible: true,
            isEditable: false,
        },
        {
            name: 'DATA',
            title: '',
            visible: true,
        },
        { editable: false, name: 'BTN1', visible: true, isEditable: false },
        { editable: false, name: 'BTN2', visible: true, isEditable: false },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: '',
                    editable: true,
                    mandatory: true,

                    obj: { t: '', p: '', k: '' },
                    shape: 'ITX',
                },
                INP1: {
                    value: '',
                    obj: { t: 'D8' },
                    editable: true,
                    mandatory: true,
                },
                INP2: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    editable: true,
                    mandatory: true,
                },
                BTN1: {
                    value: 'Load data',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                BTN2: {
                    value: 'Avanti',
                    obj: { t: 'J4', p: 'BTN' },
                    options: [],
                    editable: true,
                    mandatory: true,
                },
                DATA: {
                    value: datatable,
                    obj: { t: 'TABLE' },
                    // options: datatable,
                    editable: true,
                    mandatory: true,
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            {
                                id: 'NAM',
                            },
                            {
                                id: 'INP1',
                            },
                            {
                                id: 'INP2',
                            },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 4,
                        gridRows: 2,
                        gap: 2,
                        title: 'Anagrafica',
                    },
                    // {
                    //     content: [
                    //         {
                    //             id: 'DATA',
                    //             colSpan: 1,
                    //             rowSpan: 1
                    //         },
                    //     ],
                    //     horizontal: false,
                    //     gridCols: 1,
                    //     gridRows: 1,
                    //     title: 'Table',
                    // },
                    // {
                    //     content: [
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'BTN1',
                    //             colSpan: 1,
                    //             rowSpan: 1,
                    //         },
                    //         {
                    //             options: [],
                    //             editable: false,
                    //             mandatory: false,
                    //             id: 'BTN2',
                    //             colSpan: 1,
                    //             rowSpan: 1,
                    //         },
                    //     ],
                    //     sections: [],
                    //     horizontal: false,
                    //     gridCols: 4,
                    //     gridRows: 2,
                    //     gap: 2,
                    //     title: 'Actions',
                    // },
                ],
            },
        },
    ],
};
const dataAttributeTest = {
    columns: [
        {
            name: 'ITX',
            title: 'Text Field',
            visible: true,
        },
        {
            name: 'ACP',
            title: 'Autocomplete',
            visible: true,
        },
        { editable: false, name: 'BTN', visible: true, isEditable: false },
        {
            name: 'CHI',
            title: 'Chip',
            visible: true,
        },
        {
            name: 'CHK',
            title: 'Checkbox',
            visible: true,
        },
        {
            name: 'CMB',
            title: 'Combobox',
            visible: true,
        },
        {
            name: 'EDT',
            title: 'Editor',
            visible: true,
        },
        {
            name: 'AML',
            title: 'Multi Autocomplete',
            visible: true,
        },
        {
            name: 'CML',
            title: 'Multi Combobox',
            visible: true,
        },
        {
            name: 'NMB',
            title: 'Number',
            visible: true,
        },
        {
            name: 'CLP',
            title: 'Color Picker',
            visible: true,
        },
        {
            name: 'CLP',
            title: 'Color Picker',
            visible: true,
        },
        {
            name: 'DAT',
            title: 'Date Picker',
            visible: true,
        },
        {
            name: 'RAD',
            title: 'Radio',
            visible: true,
        },
        {
            name: 'SWT',
            title: 'Switch',
            visible: true,
        },
        {
            name: 'TIM',
            title: 'Time Picker',
            visible: true,
        },
        {
            name: 'TBLGRP',
            title: 'Table Groups',
            visible: true,
        },
        {
            name: 'TBLFLT',
            title: 'Table Filters',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                ITX: {
                    value: 'Giovanni',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                    data: {
                        helper: 'helper',
                        readOnly: true,
                    },
                },
                ACP: {
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'ACP',
                    options: autocompleteTest.options,
                    data: {
                        // Full data
                        // data: autocompleteTest,
                        // Check no override default properties
                        data: {
                            'kup-list': {
                                showIcons: false,
                            },
                        },
                    },
                },
                BTN: {
                    value: 'Avanti',
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'BTN',
                    data: {
                        disabled: false,
                        styling: 'flat',
                    },
                },
                CHI: {
                    value: 'chip1;chip2;chip3',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'CHI',
                    data: {
                        FChipType: 'input',
                        displayId: true,
                    },
                },
                CHK: {
                    value: '',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'CHK',
                    data: {
                        leadingLabel: true,
                        label: 'Checkbox',
                        checked: true,
                    },
                },
                CMB: {
                    value: '',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'CMB',
                    options: comboboxTest.options,
                    data: {
                        showDropDownIcon: true,
                        data: comboboxTest.data,
                    },
                },
                EDT: {
                    value: '',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'EDT',
                    data: {
                        showSaveButton: false,
                    },
                },
                AML: {
                    value: 'chip1;chip2;chip3',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'AML',
                    options: autocompleteTest.options,
                    data: {
                        displayId: false,
                        data: autocompleteTest.data,
                    },
                },
                CML: {
                    value: 'chip1;chip2;chip3',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'CML',
                    options: comboboxTest.options,
                    data: {
                        displayId: true,
                        showDropDownIcon: false,
                        data: comboboxTest.data,
                    },
                },
                NMB: {
                    value: '',
                    obj: { t: 'NR', p: '' },
                    editable: true,
                    mandatory: true,
                    data: {
                        disabled: true,
                    },
                },
                CLP: {
                    value: '',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'CLP',
                    data: {
                        initialValue: '#000000',
                    },
                },
                DAT: {
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'DAT',
                    data: {
                        firstDayIndex: 4,
                    },
                },
                RAD: {
                    value: 'rad1',
                    options: [
                        {
                            id: 'rad1',
                            label: 'value1',
                        },
                        {
                            id: 'rad2',
                            label: 'value2',
                        },
                    ],
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'RAD',
                    data: {
                        leadingLabel: true,
                    },
                },
                SWT: {
                    value: true,
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'SWT',
                    data: {
                        label: 'Off/On',
                    },
                },
                TIM: {
                    value: '',
                    obj: { t: '', p: '', k: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'TIM',
                    data: {
                        clockVariant: false,
                        timeMinutesStep: 15,
                    },
                },
                TBLGRP: {
                    value: JSON.stringify(dataTableGroupsTest),
                    shape: 'TBL',
                    editable: true,
                    mandatory: true,
                    data: {
                        showFooter: true,
                        showHistoryButton: true,
                        density: 'dense',
                        enableColumnsFormula: true,
                        enableMergeColumns: true,
                        enableExtraColumns: true,
                        enableSortableColumns: true,
                        expandGroups: true,
                        groupLabelDisplay: 'Both',
                        groups: [
                            {
                                column: 'STR001',
                                visible: true,
                            },
                            {
                                column: 'STR002',
                                visible: true,
                            },
                        ],
                        totals: {
                            STR004: 'Average',
                            STR001: 'Count',
                        },
                    },
                },
                TBLFLT: {
                    value: JSON.stringify(dataTableFiltersTest),
                    shape: 'TBL',
                    editable: false,
                    mandatory: true,
                    data: {
                        showHistoryButton: true,
                        density: 'dense',
                        enableColumnsFormula: true,
                        enableMergeColumns: true,
                        enableExtraColumns: true,
                        enableSortableColumns: true,
                        filters: {
                            FLD1: {
                                textField: 'fra',
                                checkBoxes: [],
                            },
                        },
                        globalFilter: false,
                        globalFilterValue: '',
                        rowsPerPage: 10,
                        showFilters: true,
                        showFooter: false,
                        sortableColumnsMutateData: true,
                        sortEnabled: true,
                    },
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            {
                                id: 'ITX',
                            },
                            {
                                id: 'ACP',
                            },
                            {
                                id: 'BTN',
                            },
                            {
                                id: 'CHI',
                            },
                            {
                                id: 'CHK',
                            },
                            {
                                id: 'CMB',
                            },
                            {
                                id: 'EDT',
                            },
                            {
                                id: 'AML',
                            },
                            {
                                id: 'CML',
                            },
                            {
                                id: 'NMB',
                            },
                            {
                                id: 'CLP',
                            },
                            {
                                id: 'DAT',
                            },
                            {
                                id: 'RAD',
                            },
                            {
                                id: 'SWT',
                            },
                            {
                                id: 'TIM',
                            },
                            {
                                id: 'TBLGRP',
                            },
                            {
                                id: 'TBLFLT',
                            },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 1,
                        gridRows: 1,
                        gap: 2,
                        title: 'Test data attribute of components',
                    },
                ],
            },
        },
    ],
    debugInfo: {
        executionTime_ms: 51,
        initialTimestamp: '2024-06-11T15:02:17.854994131Z',
        finalTimestamp: '2024-06-11T15:02:17.906443131Z',
        runtime: 'Java 21',
    },
};

const keysShortcut = ['f5', 'F6', 'control+s'];
const keyButtonClickTest = {
    columns: [
        {
            name: 'BUTTON1',
            title: 'Button1',
            visible: true,
        },
        {
            name: 'BUTTON2',
            title: 'Button2',
            visible: true,
        },
        {
            name: 'BUTTON3',
            title: 'Button2',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                BUTTON1: {
                    value: `Click or press '${keysShortcut[0]}'`,
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'BTN',
                    data: {
                        disabled: false,
                        styling: 'outlined',
                        keyShortcut: keysShortcut[0],
                    },
                },
                BUTTON2: {
                    value: `Click or press '${keysShortcut[1]}'`,
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'BTN',
                    data: {
                        disabled: true,
                        styling: 'flat',
                        keyShortcut: keysShortcut[1],
                    },
                },
                BUTTON3: {
                    value: `Click or press 'Ctrl+S'`,
                    obj: { t: '', p: '' },
                    editable: true,
                    mandatory: true,
                    shape: 'BTN',
                    data: {
                        disabled: false,
                        styling: 'outlined',
                        keyShortcut: keysShortcut[2],
                    },
                },
            },
            layout: {
                type: 'SmeupDataLayout',
                horizontal: false,
                sections: [
                    {
                        content: [
                            // {
                            //     id: 'BUTTON1',
                            // },
                            {
                                id: 'BUTTON2',
                            },
                            {
                                id: 'BUTTON3',
                            },
                        ],
                        sections: [],
                        horizontal: false,
                        gridCols: 1,
                        gridRows: 1,
                        gap: 2,
                        title: 'Test keys bindings with button clicks',
                    },
                ],
            },
        },
    ],
    debugInfo: {
        executionTime_ms: 51,
        initialTimestamp: '2024-06-11T15:02:17.854994131Z',
        finalTimestamp: '2024-06-11T15:02:17.906443131Z',
        runtime: 'Java 21',
    },
};

// Example of rerender configuration
// const data1 = {
//     columns: [
//         {
//             name: 'NAM',
//             title: 'Name',
//             visible: true,
//         },
//         {
//             name: 'SUR',
//             title: 'Surname',
//             visible: true,
//         },
//         {
//             name: 'NAT',
//             title: 'Nation',
//             visible: true,
//         },
//         {
//             name: 'CIT',
//             title: 'Tree Options',
//             visible: true,
//         },
//         {
//             name: 'LIS',
//             title: 'Table Options',
//             visible: true,
//         },
//         {
//             name: 'CHK',
//             title: 'Checkbox',
//             visible: true,
//         },
//         {
//             name: 'RAD',
//             title: 'Radio Buttons',
//             visible: true,
//         },
//     ],
//     rows: [
//         {
//             cells: {
//                 NAM: {
//                     value: 'Giovanni',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ITX',
//                 },
//                 SUR: {
//                     value: 'serio',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ITX',
//                 },
//                 NAT: {
//                     value: 'ITA',
//                     fun: 'combo',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CMB',
//                 },
//                 CIT: {
//                     value: 'E1',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ACP',
//                     fun: 'ddas',
//                 },
//                 LIS: {
//                     value: 'E2',
//                     obj: {
//                         t: '',
//                         p: '',
//                         k: '',
//                     },
//                     editable: true,
//                     mandatory: true,
//                     shape: 'ACP',
//                     fun: 'fff',
//                 },
//                 CHK: {
//                     value: 'on',
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CHK',
//                 },
//                 RAD: {
//                     value: '1',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'One',
//                         },
//                         {
//                             id: '2',
//                             label: 'Two',
//                         },
//                         {
//                             id: '3',
//                             label: 'Three',
//                         },
//                         {
//                             id: '4',
//                             label: 'Four',
//                         },
//                     ],
//                     editable: true,
//                     mandatory: true,
//                     shape: 'RAD',
//                 },
//             },
//             layout: {
//                 sections: [
//                     {
//                         content: [
//                             {
//                                 id: 'NAM',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'SUR',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'NAT',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'CIT',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'CHK',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'RAD',
//                                 colSpan: 2,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'LIS',
//                                 colStart: 3,
//                                 colEnd: 3,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                         ],
//                         dim: '50%',
//                         gridCols: 3,
//                         gridRows: 3,
//                         gap: 2,
//                     },
//                 ],
//                 horizontal: true,
//             },
//         },
//     ],
// };

inputPanel.optionsHandler = (fun, inputValue, currentState) => {
    console.log('optionsHandler event', { fun, inputValue, currentState });

    // return Promise.resolve({
    //     type: 'SmeupTable',
    //     messages: [],
    //     rows: [
    //         {
    //             fields: {
    //                 E1: {
    //                     smeupObject: {
    //                         codice: 'E1',
    //                         testo: 'Element 1',
    //                     },
    //                 },
    //                 E2: {
    //                     smeupObject: {
    //                         codice: 'E2',
    //                         testo: 'Element 2',
    //                     },
    //                 },
    //                 E3: {
    //                     smeupObject: {
    //                         codice: 'E3',
    //                         testo: 'Element 3',
    //                     },
    //                 },
    //             },
    //         },
    //         {
    //             fields: {
    //                 E4: {
    //                     smeupObject: {
    //                         codice: 'E4',
    //                         testo: 'Element 4',
    //                     },
    //                 },
    //                 E5: {
    //                     smeupObject: {
    //                         codice: 'E5',
    //                         testo: 'Element 5',
    //                     },
    //                 },
    //                 E6: {
    //                     smeupObject: {
    //                         codice: 'E6',
    //                         testo: 'Element 6',
    //                     },
    //                 },
    //             },
    //         },
    //         {
    //             fields: {
    //                 E14: {
    //                     smeupObject: {
    //                         codice: 'E14',
    //                         testo: 'Element 14',
    //                     },
    //                 },
    //                 E15: {
    //                     smeupObject: {
    //                         codice: 'E15',
    //                         testo: 'Element 15',
    //                     },
    //                 },
    //                 E16: {
    //                     smeupObject: {
    //                         codice: 'E16',
    //                         testo: 'Element 16',
    //                     },
    //                 },
    //             },
    //         },
    //     ],
    // });

    return Promise.resolve({
        type: 'SmeupTable',
        columns: [
            {
                IO: 'I',
                code: 'COL1',
                ogg: '',
                sortMode: 'A',
                text: 'Column 1',
                tooltip: false,
            },
            {
                IO: 'O',
                code: 'COL2',
                ogg: '',
                sortMode: 'A',
                text: 'Column 2',
                tooltip: false,
            },
        ],
        rows: [
            {
                fields: {
                    RowId: {
                        name: 'RowId',
                        smeupObject: {
                            codice: '0',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    ID: {
                        name: 'ID',
                        smeupObject: {
                            codice: '1',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    COL2: {
                        name: 'COL2',
                        smeupObject: {
                            codice: 'Row 1 column 2',
                            parametro: '',
                            testo: 'Row 1 column 2',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                    COL1: {
                        name: 'COL1',
                        smeupObject: {
                            codice: 'Row 1 column 1',
                            exec: 'EXEC',
                            i: 'home',
                            parametro: '',
                            testo: 'Override value',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                },
            },
            {
                fields: {
                    RowId: {
                        name: 'RowId',
                        smeupObject: {
                            codice: '1',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    ID: {
                        name: 'ID',
                        smeupObject: {
                            codice: '2',
                            parametro: '',
                            tipo: 'NR',
                        },
                        tooltip: false,
                    },
                    COL2: {
                        name: 'COL2',
                        smeupObject: {
                            codice: 'Row 2 column 2',
                            parametro: '',
                            testo: 'Row 2 column 2',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                    COL1: {
                        name: 'COL1',
                        smeupObject: {
                            codice: 'Row 2 column 1',
                            parametro: '',
                            testo: 'Row 2 column 1',
                            tipo: '',
                        },
                        tooltip: false,
                    },
                },
            },
        ],
    });
};

inputPanel.submitCb = (e) => {
    console.log('submit', e);

    // Example of rerender event
    const inputPanel = document.getElementById('input-panel');
    let updated;
    if (e.cell === 'BTN2') {
        updated = structuredClone(data1);
    } else if (e.cell === 'BTN1') {
        updated = structuredClone(data);
        updated.rows[0].cells.DATA.value = datatable;
        updated.rows[0].layout.sections[1].content[0].id = 'BTN2';
    } else {
        updated = structuredClone(data);
    }
    inputPanel.data = updated;
};

inputPanel.customButtonClickHandler = (fun, cellId, currentState) => {
    console.log('customButtonClick event', { fun, cell: cellId, currentState });
};

// Example of Ergon Form configuration
// const ergonForm = {
//     columns: [
//         {
//             name: 'TEL',
//             title: 'Tempo Elaborazione',
//             visible: true,
//         },
//         {
//             name: 'CRE',
//             title: 'Cumulo Reparti',
//             visible: true,
//         },
//         {
//             name: 'CVE',
//             title: 'Costo Venduto',
//             visible: true,
//         },
//         {
//             name: 'DIV',
//             title: 'Divisa',
//             visible: true,
//         },
//         {
//             name: 'ELA',
//             title: 'Elabora',
//             visible: true,
//         },
//         {
//             name: 'SAP',
//             title: 'Salto Pagina',
//             visible: true,
//         },
//         {
//             name: 'ART',
//             title: 'Articoli',
//             visible: true,
//         },
//         {
//             name: 'MOA',
//             title: 'Mostra movimento per articoli',
//             visible: true,
//         },
//         {
//             name: 'ONE',
//             title: 'Includi Oneri',
//             visible: true,
//         },
//         {
//             name: 'MCD',
//             title: 'Solo marche in conto deposito',
//             visible: true,
//         },
//         {
//             name: 'NET',
//             title: 'Solo netti',
//             visible: true,
//         },
//         {
//             name: 'COD',
//             title: 'Codice',
//             visible: true,
//         },
//         {
//             name: 'MAR',
//             title: 'Marca',
//             visible: true,
//         },
//         {
//             name: 'FAM',
//             title: 'Famiglia',
//             visible: true,
//         },
//         {
//             name: 'TAR',
//             title: 'Tipo Articolo',
//             visible: true,
//         },
//         {
//             name: 'GRM',
//             title: 'Gruppo Merci',
//             visible: true,
//         },
//         {
//             name: 'ABC',
//             title: 'Classe ABC',
//             visible: true,
//         },
//         {
//             name: 'MDL',
//             title: 'Modelli',
//             visible: true,
//         },
//         {
//             name: 'CSA',
//             title: 'Cat. Sc. Articolo',
//             visible: true,
//         },
//         {
//             name: 'TRA',
//             title: 'Tratt. Articolo',
//             visible: true,
//         },
//         {
//             name: 'FOR',
//             title: 'Cliente/Fornitore',
//             visible: true,
//         },
//         {
//             name: 'CCF',
//             title: 'Categ. C/F',
//             visible: true,
//         },
//         {
//             name: 'ZON',
//             title: 'Zona',
//             visible: true,
//         },
//         {
//             name: 'COM',
//             title: 'Comune',
//             visible: true,
//         },
//         {
//             name: 'PRO',
//             title: 'Provincia',
//             visible: true,
//         },
//         {
//             name: 'AGE',
//             title: 'Agente',
//             visible: true,
//         },
//         {
//             name: 'REG',
//             title: 'Regione',
//             visible: true,
//         },
//         {
//             name: 'NAT',
//             title: 'Nazione',
//             visible: true,
//         },
//         {
//             name: 'RCF',
//             title: 'Raggrupp. C/F',
//             visible: true,
//         },
//         {
//             name: 'ATT',
//             title: 'Attività',
//             visible: true,
//         },
//         {
//             name: 'CAU',
//             title: 'Causale',
//             visible: true,
//         },
//         {
//             name: 'LST',
//             title: 'Gruppo Liste',
//             visible: true,
//         },
//         {
//             name: 'DOC',
//             title: 'Tipo Documento',
//             visible: true,
//         },
//         {
//             name: 'LDO',
//             title: 'Lettera Doc.',
//             visible: true,
//         },
//         {
//             name: 'TDO',
//             title: '',
//             visible: true,
//         },
//         {
//             name: 'DAT',
//             title: 'Data',
//             visible: true,
//         },
//         {
//             name: 'TDA',
//             title: '',
//             visible: true,
//         },
//         {
//             // ORDINE CODICE
//             name: 'OCD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE MARCA
//             name: 'OMR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE FAMIGLIA
//             name: 'OFM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TIPO ARTICOLO
//             name: 'OTA',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE GRUPPO MERCI
//             name: 'OGM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CLASSE ABC
//             name: 'OCL',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE MODELLI
//             name: 'OMD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CAT SC ARTICOLO
//             name: 'OCA',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TRATT ARTICOLO
//             name: 'OTR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CLIENTE FORNITORE
//             name: 'OCF',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CATEG C/F
//             name: 'OCT',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE ZONA
//             name: 'OZN',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE COMUNE
//             name: 'OCM',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE PROVINCIA
//             name: 'OPR',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE AGENTE
//             name: 'OAG',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE REGIONE
//             name: 'ORG',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE NAZIONE
//             name: 'ONZ',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE RAGGRUPP C/F
//             name: 'ORF',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE ATTIVITA
//             name: 'OAT',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE CAUSALE
//             name: 'OCS',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE GRUPPO LIST
//             name: 'OGL',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE TIPO DOCUMENTO
//             name: 'OTD',
//             title: 'Modalità',
//             visible: true,
//         },
//         {
//             // ORDINE DATA
//             name: 'ODT',
//             title: 'Modalità',
//             visible: true,
//         },
//     ],
//     rows: [
//         {
//             cells: {
//                 TEL: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'CLI',
//                             label: 'Clienti',
//                         },
//                         {
//                             id: 'FOR',
//                             label: 'Fornitori',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 CRE: {
//                     value: '',
//                     editable: true,
//                     mandatory: true,
//                     shape: 'CHK',
//                 },
//                 CVE: {
//                     value: '',
//                     options: [
//                         {
//                             id: 'MED',
//                             label: 'Media acquisto',
//                         },
//                     ],
//                     editable: true,
//                     shape: 'CMB',
//                 },
//                 DIV: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 ELA: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'YFA',
//                             label: 'Solo Fatturato',
//                         },
//                         {
//                             id: 'NFA',
//                             label: 'Escluso Fatturato',
//                         },
//                         {
//                             id: 'BOT',
//                             label: 'Entrambi',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 SAP: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'NO',
//                             label: 'Nessuno',
//                         },
//                         {
//                             id: 'SI',
//                             label: 'Effettua',
//                         },
//                         {
//                             id: 'TES',
//                             label: 'Stampa Testata',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 ART: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: 'ALL',
//                             label: 'Tutti',
//                         },
//                         {
//                             id: 'NFM',
//                             label: 'Escludi FM',
//                         },
//                         {
//                             id: 'SFM',
//                             label: 'Solo FM',
//                         },
//                     ],
//                     shape: 'RAD',
//                 },
//                 MOA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 ONE: {
//                     value: '',
//                     editable: false,
//                     shape: 'CHK',
//                 },
//                 MCD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 NET: {
//                     value: '',
//                     editable: true,
//                     shape: 'CHK',
//                 },
//                 COD: {
//                     value: '',
//                     editable: true,
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                     shape: 'ACP',
//                 },
//                 MAR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 FAM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 TAR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 GRM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ABC: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 MDL: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CSA: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 TRA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 FOR: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ZON: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 COM: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 PRO: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 AGE: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 REG: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 NAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 RCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 ATT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 CAU: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 LST: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 DOC: {
//                     value: '',
//                     editable: true,
//                     shape: 'ACP',
//                     options: [
//                         {
//                             id: '1',
//                             label: '1',
//                         },
//                         {
//                             id: '2',
//                             label: '2',
//                         },
//                         {
//                             id: '3',
//                             label: '3',
//                         },
//                         {
//                             id: '4',
//                             label: '4',
//                         },
//                         {
//                             id: '5',
//                             label: '5',
//                         },
//                     ],
//                 },
//                 LDO: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 TDO: {
//                     value: '',
//                     editable: true,
//                     shape: 'RAD',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Doc. Precendete',
//                         },
//                         {
//                             id: '2',
//                             label: 'Doc. Attuale',
//                         },
//                     ],
//                 },
//                 DAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'ITX',
//                 },
//                 TDA: {
//                     value: '',
//                     editable: true,
//                     shape: 'RAD',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Data Lista',
//                         },
//                         {
//                             id: '2',
//                             label: 'Data Doc. Precendete',
//                         },
//                     ],
//                 },
//                 OCD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OMR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OFM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OGM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCL: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OMD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCA: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCF: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OZN: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCM: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OPR: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OAG: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ORG: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ONZ: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ORF: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OAT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OCS: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OGL: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 OTD: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//                 ODT: {
//                     value: '',
//                     editable: true,
//                     shape: 'CMB',
//                     options: [
//                         {
//                             id: '1',
//                             label: 'Uguale',
//                         },
//                         {
//                             id: '2',
//                             label: 'Diverso',
//                         },
//                         {
//                             id: '3',
//                             label: 'Maggiore',
//                         },
//                         {
//                             id: '4',
//                             label: 'Minore',
//                         },
//                         {
//                             id: '5',
//                             label: 'Maggiore Uguale',
//                         },
//                         {
//                             id: '6',
//                             label: 'Minore Uguale',
//                         },
//                         {
//                             id: '7',
//                             label: 'Inizia con',
//                         },
//                         {
//                             id: '8',
//                             label: 'Non inizia con',
//                         },
//                         {
//                             id: '9',
//                             label: 'Termina con',
//                         },
//                         {
//                             id: '10',
//                             label: 'Non termina con',
//                         },
//                         {
//                             id: '11',
//                             label: 'Contiene',
//                         },
//                         {
//                             id: '12',
//                             label: 'Non contiene',
//                         },
//                         {
//                             id: '13',
//                             label: 'Incluso in',
//                         },
//                         {
//                             id: '14',
//                             label: 'Escluso da',
//                         },
//                         {
//                             id: '15',
//                             label: 'In elenco',
//                         },
//                         {
//                             id: '16',
//                             label: 'Non in elenco',
//                         },
//                         {
//                             id: '17',
//                             label: 'Simile',
//                         },
//                         {
//                             id: '18',
//                             label: 'Non simile',
//                         },
//                         {
//                             id: '19',
//                             label: 'Nullo',
//                         },
//                         {
//                             id: '20',
//                             label: 'Non nullo',
//                         },
//                     ],
//                 },
//             },
//             layout: {
//                 sections: [
//                     {
//                         content: [
//                             {
//                                 id: 'TEL',
//                                 colStart: 1,
//                                 colEnd: 3,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CRE',
//                                 colStart: 4,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CVE',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'DIV',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 2,
//                                 rowEnd: 2,
//                             },
//                             {
//                                 id: 'ELA',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 3,
//                                 rowEnd: 3,
//                             },
//                             {
//                                 id: 'SAP',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 4,
//                                 rowEnd: 4,
//                             },
//                             {
//                                 id: 'ART',
//                                 colStart: 1,
//                                 colEnd: 4,
//                                 rowStart: 5,
//                                 rowEnd: 5,
//                             },
//                             {
//                                 id: 'MOA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'ONE',
//                                 colStart: 2,
//                                 colEnd: 2,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'MCD',
//                                 colStart: 3,
//                                 colEnd: 3,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                             {
//                                 id: 'NET',
//                                 colStart: 4,
//                                 colEnd: 4,
//                                 rowStart: 6,
//                                 rowEnd: 6,
//                             },
//                         ],
//                         gridCols: 4,
//                         gridRows: 6,
//                         gap: 2,
//                     },
//                     // ONE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCD',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'COD',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 6,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OMR',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'MAR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OFM',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'FAM',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OTA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TAR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OGM',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'GRM',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCL',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ABC',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OMD',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'MDL',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCA',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CSA',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OTR',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TRA',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCF',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'FOR',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OCT',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CCF',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OZN',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ZON',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OCM',
//                                 colStart: 5,
//                                 colEnd: 5,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'COM',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OPR',
//                                 colStart: 9,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'PRO',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OAG',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'AGE',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ORG',
//                                 colStart: 5,
//                                 colEnd: 5,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'REG',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ONZ',
//                                 colStart: 9,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'NAT',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'ORF',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'RCF',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OAT',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'ATT',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'OCS',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'CAU',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'OGL',
//                                 colStart: 6,
//                                 colEnd: 6,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'LST',
//                                 colStart: 7,
//                                 colEnd: 9,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // THREE COL
//                     {
//                         content: [
//                             {
//                                 id: 'OTD',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'DOC',
//                                 colSpan: 2,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'LDO',
//                                 colStart: 5,
//                                 colEnd: 7,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TDO',
//                                 colStart: 8,
//                                 colEnd: 11,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 11,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                     // TWO COL
//                     {
//                         content: [
//                             {
//                                 id: 'ODT',
//                                 colStart: 1,
//                                 colEnd: 1,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'DAT',
//                                 colStart: 2,
//                                 colEnd: 4,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                             {
//                                 id: 'TDA',
//                                 colStart: 5,
//                                 colEnd: 8,
//                                 rowStart: 1,
//                                 rowEnd: 1,
//                             },
//                         ],
//                         gridCols: 9,
//                         gridRows: 1,
//                         gap: 0.5,
//                     },
//                 ],
//             },
//         },
//     ],
// };

// const inputPanel = document.getElementById('input-panel');
// inputPanel.data = ergonForm;
// inputPanel.submitCb = (e) => {
//     console.log(e);
//     const inputPanel = document.getElementById('input-panel');
//     inputPanel.data = ergonForm;
// };
