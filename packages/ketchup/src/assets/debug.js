// Replace the object below with yours.
const compName = 'kup-data-table';

// Replace the props below with yours.
const props = {
    autoFillMissingCells: false,
    customStyle: '',
    data: {
        columns: [
            {
                isEditable: true,
                isKey: false,
                name: '$OP',
                obj: {
                    k: '',
                    p: 'COD_VER',
                    t: 'VO',
                },
                title: 'Op',
                tooltip: false,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'ID_TP',
                obj: {
                    k: '',
                    p: '',
                    t: 'OG',
                },
                title: 'Tipo',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: true,
                name: 'ID_LI',
                obj: {
                    k: '',
                    p: 'AWX006',
                    t: 'CF',
                },
                title: 'Id',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICFTC',
                obj: {
                    k: '',
                    p: '',
                    t: 'RE',
                },
                title: 'Tipo configurazione',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICFCD',
                obj: {
                    k: '',
                    p: 'AWX006',
                    t: 'CF',
                },
                title: 'Configurazione',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: '£ICFDX',
                title: 'Descrizione',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICFCX',
                title: 'Contesto',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICFLI',
                obj: {
                    k: '',
                    p: 'B£W00',
                    t: 'TA',
                },
                title: 'Livello',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'NH03',
                obj: {
                    k: '',
                    p: 'B£WX4',
                    t: 'TA',
                },
                title: 'Stato',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'NH01',
                obj: {
                    k: '',
                    p: 'COL',
                    t: 'CN',
                },
                title: 'PM',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'NH02',
                obj: {
                    k: '',
                    p: 'B§A',
                    t: 'TA',
                },
                title: 'Priorità',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'NH06',
                title: 'Note',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICF_C10',
                obj: {
                    k: '',
                    p: '',
                    t: 'UP',
                },
                title: 'Utente Aggiornamento',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICF_C11',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Aggiornamento',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£ICF_C12',
                obj: {
                    k: '',
                    p: '2',
                    t: 'I1',
                },
                title: 'Ora Aggiornamento',
                tooltip: true,
            },
        ],
        rows: [
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842361',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842361',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842361',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842361',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221206',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-06',
                        displayedValue: '06/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PASCAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'PASCAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '164738',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:47:38',
                        displayedValue: '16:47:38',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CI/CD in Ketchup',
                            p: '',
                            t: '',
                        },
                        value: 'CI/CD in Ketchup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOSLUC',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FOSLUC',
                        displayedValue: 'FOSLUC',
                    },
                },
                id: '0',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842362',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842362',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842362',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842362',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Kokos motore di regole per API',
                            p: '',
                            t: '',
                        },
                        value: 'Kokos motore di regole per API',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842363',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842363',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842363',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842363',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221128',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-28',
                        displayedValue: '28/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '182441',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:24:41',
                        displayedValue: '18:24:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'POC K18 (in memoria e redis)',
                            p: '',
                            t: '',
                        },
                        value: 'POC K18 (in memoria e redis)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842364',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842364',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842364',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842364',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'news,nti,articolo',
                            p: '',
                            t: '',
                        },
                        value: 'news,nti,articolo',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                        displayedValue: '04/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '184935',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:49:35',
                        displayedValue: '18:49:35',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio revisione K18',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio revisione K18',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '3',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842365',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842365',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842365',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842365',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'come recuperiamo i colori sugli ambienti? Se vogliamofarlo (survey?)',
                            p: '',
                            t: '',
                        },
                        value: 'come recuperiamo i colori sugli ambienti? Se vogliamofarlo (survey?)',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio cambio colore wup da ambiente',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio cambio colore wup da ambiente',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '4',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842366',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842366',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842366',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842366',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Solo webup. Aspettare esito volpi. news.',
                            p: '',
                            t: '',
                        },
                        value: 'Solo webup. Aspettare esito volpi. news.',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Porting App su AS400',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Porting App su AS400',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '5',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842367',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842367',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842367',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842367',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221201',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-01',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '190401',
                            p: '2',
                            t: 'I1',
                        },
                        value: '19:04:01',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Creazione Smartikit Rest-API',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Creazione Smartikit Rest-API',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '6',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842368',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842368',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842368',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842368',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'terminale debug webup.js (prima versione)',
                            p: '',
                            t: '',
                        },
                        value: 'terminale debug webup.js (prima versione)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PASCAR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'PASCAR',
                        displayedValue: 'PASCAR',
                    },
                },
                id: '7',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842369',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842369',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842369',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842369',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221128',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-28',
                        displayedValue: '28/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '094838',
                            p: '2',
                            t: 'I1',
                        },
                        value: '09:48:38',
                        displayedValue: '09:48:38',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio revisione K47',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio revisione K47',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '8',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842370',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842370',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842370',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842370',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Ad esempio UPP. La UPP è un NFT e puoi usarla se la possiedi',
                            p: '',
                            t: '',
                        },
                        value: 'Ad esempio UPP. La UPP è un NFT e puoi usarla se la possiedi',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'create NFT di oggetti.',
                            p: '',
                            t: '',
                        },
                        value: 'create NFT di oggetti.',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '9',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842371',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842371',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842371',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842371',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'LOA37 come pacchetto indipendente da smeup',
                            p: '',
                            t: '',
                        },
                        value: 'LOA37 come pacchetto indipendente da smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '10',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842372',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842372',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842372',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842372',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '163351',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:33:51',
                        displayedValue: '16:33:51',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'miglioramenti unit test RPG con blocco rilascio branch',
                            p: '',
                            t: '',
                        },
                        value: 'miglioramenti unit test RPG con blocco rilascio branch',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '11',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842373',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842373',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842373',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842373',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Solo NTI-PRO',
                            p: '',
                            t: '',
                        },
                        value: 'Solo NTI-PRO',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221128',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-28',
                        displayedValue: '28/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '114524',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:45:24',
                        displayedValue: '11:45:24',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Realizzazione piccoli modelli ML',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Realizzazione piccoli modelli ML',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '12',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842374',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842374',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842374',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842374',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Mettere in CI/CD, definire dove installare openproxy, test di integrazione.',
                            p: '',
                            t: '',
                        },
                        value: 'Mettere in CI/CD, definire dove installare openproxy, test di integrazione.',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221206',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-06',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PASCAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'PASCAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '143244',
                            p: '2',
                            t: 'I1',
                        },
                        value: '14:32:44',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio API json per client smeup',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio API json per client smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PASCAR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'PASCAR',
                    },
                },
                id: '13',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842375',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842375',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842375',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842375',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '184959',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:49:59',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Inserimento e tracciamento video tramite smeup',
                            p: '',
                            t: '',
                        },
                        value: 'Inserimento e tracciamento video tramite smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '14',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842376',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842376',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842376',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842376',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221128',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-28',
                        displayedValue: '28/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '094624',
                            p: '2',
                            t: 'I1',
                        },
                        value: '09:46:24',
                        displayedValue: '09:46:24',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'loa11-> xml camunda',
                            p: '',
                            t: '',
                        },
                        value: 'loa11-> xml camunda',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '15',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842377',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842377',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842377',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842377',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Fare un TODO per Facchinetti: scrivi mail a Monferdini &CO e basta',
                            p: '',
                            t: '',
                        },
                        value: 'Fare un TODO per Facchinetti: scrivi mail a Monferdini &CO e basta',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FACPAO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'FACPAO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '120314',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:03:14',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio smartkit CLI',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio smartkit CLI',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FACPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FACPAO',
                    },
                },
                id: '16',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842378',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842378',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842378',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842378',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Blockchain in Archismall',
                            p: '',
                            t: '',
                        },
                        value: 'Blockchain in Archismall',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FACPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FACPAO',
                        displayedValue: 'FACPAO',
                    },
                },
                id: '17',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842379',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842379',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842379',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842379',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'LANMAM',
                            p: '',
                            t: 'UP',
                        },
                        value: 'LANMAM',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '105325',
                            p: '2',
                            t: 'I1',
                        },
                        value: '10:53:25',
                        displayedValue: '10:53:25',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '%split in Jariko',
                            p: '',
                            t: '',
                        },
                        value: '%split in Jariko',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'LANMAM',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'LANMAM',
                        displayedValue: 'LANMAM',
                    },
                },
                id: '18',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842380',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842380',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842380',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842380',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '164950',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:49:50',
                        displayedValue: '16:49:50',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'G43 drogata in kokos',
                            p: '',
                            t: '',
                        },
                        value: 'G43 drogata in kokos',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '19',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842381',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842381',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842381',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842381',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Integrazione DAS',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Integrazione DAS',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '20',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842382',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842382',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842382',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842382',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221205',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-05',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '113424',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:34:24',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Bundle dei moduli di login (raggrupparli)',
                            p: '',
                            t: '',
                        },
                        value: 'Bundle dei moduli di login (raggrupparli)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '21',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842383',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842383',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842383',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842383',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221205',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-05',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '113429',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:34:29',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Modulo di login "universali"',
                            p: '',
                            t: '',
                        },
                        value: 'Modulo di login "universali"',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '22',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842385',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842385',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842385',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842385',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Qlik usa Rest-API',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Qlik usa Rest-API',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '23',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842386',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842386',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842386',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842386',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FACPAO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'FACPAO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '120329',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:03:29',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio messa in sicurezza smartkit-fe',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio messa in sicurezza smartkit-fe',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FACPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FACPAO',
                    },
                },
                id: '24',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842387',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842387',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842387',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842387',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '172621',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:26:21',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Implementazione revisione login web',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Implementazione revisione login web',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '25',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842388',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842388',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842388',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842388',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'aggiungere attivià di sincronizzazione utenti?',
                            p: '',
                            t: '',
                        },
                        value: 'aggiungere attivià di sincronizzazione utenti?',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '164914',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:49:14',
                        displayedValue: '16:49:14',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio autenticazione in Kokos',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio autenticazione in Kokos',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '26',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842389',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842389',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842389',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842389',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'uniformare le api in modo tale che accettino solo la fun jasonizzata e rispondano sempre con lo stesso formato per tutti i client e gtw.',
                            p: '',
                            t: '',
                        },
                        value: 'uniformare le api in modo tale che accettino solo la fun jasonizzata e rispondano sempre con lo stesso formato per tutti i client e gtw.',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '165014',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:50:14',
                        displayedValue: '16:50:14',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Request, response di kokos',
                            p: '',
                            t: '',
                        },
                        value: 'Request, response di kokos',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '27',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842390',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842390',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842390',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842390',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '172450',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:24:50',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Ri-divulgare login google',
                            p: '',
                            t: '',
                        },
                        value: 'Ri-divulgare login google',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '28',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842391',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842391',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842391',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842391',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'u-pick in showroom',
                            p: '',
                            t: '',
                        },
                        value: 'u-pick in showroom',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '29',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842392',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842392',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842392',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842392',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio modifiche protocollo input panel per Tbl',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio modifiche protocollo input panel per Tbl',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '30',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842393',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842393',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842393',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842393',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                        displayedValue: '04/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '185011',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:50:11',
                        displayedValue: '18:50:11',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'POC sorgenti as400 su github',
                            p: '',
                            t: '',
                        },
                        value: 'POC sorgenti as400 su github',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '31',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842394',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842394',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842394',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842394',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'POC Github organization',
                            p: '',
                            t: '',
                        },
                        value: 'POC Github organization',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FACPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FACPAO',
                        displayedValue: 'FACPAO',
                    },
                },
                id: '32',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842395',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842395',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842395',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842395',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: "Divulgare come fare le pulizie notturne (B£UT62). Fare un pacchetto per allineare tutti all'ultima versione? Capire con ICS la questione CLRLIB e ENDSBS QBATCHUI (scritto a Botolan)",
                            p: '',
                            t: '',
                        },
                        value: "Divulgare come fare le pulizie notturne (B£UT62). Fare un pacchetto per allineare tutti all'ultima versione? Capire con ICS la questione CLRLIB e ENDSBS QBATCHUI (scritto a Botolan)",
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#comunicazione pulizie "notturne"',
                            p: '',
                            t: '',
                        },
                        value: '#comunicazione pulizie "notturne"',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '33',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842396',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842396',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842396',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842396',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio revisione UX upick',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio revisione UX upick',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '34',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842397',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842397',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842397',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842397',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio gateway, analisi scalabilità plugn',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio gateway, analisi scalabilità plugn',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MOSPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MOSPAO',
                        displayedValue: 'MOSPAO',
                    },
                },
                id: '35',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842398',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842398',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842398',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842398',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123941',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:41',
                        displayedValue: '12:39:41',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Jariko: nuove implementazioni',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Jariko: nuove implementazioni',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'LANMAM',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'LANMAM',
                        displayedValue: 'LANMAM',
                    },
                },
                id: '36',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842399',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842399',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842399',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842399',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '120843',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:08:43',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Scaletta demo applicazioni',
                            p: '',
                            t: '',
                        },
                        value: 'Scaletta demo applicazioni',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-purple-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '90',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '90',
                        displayedValue: '90',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '37',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842400',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842400',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842400',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842400',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Articolo, video, news',
                            p: '',
                            t: '',
                        },
                        value: 'Articolo, video, news',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221129',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-29',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '183525',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:35:25',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Jariko Lambda',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Jariko Lambda',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'LANMAM',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'LANMAM',
                    },
                },
                id: '38',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842401',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842401',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842401',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842401',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '172225',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:22:25',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio sistemazioni varie BOX, layout standard',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio sistemazioni varie BOX, layout standard',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '39',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842402',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842402',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842402',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842402',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221201',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-01',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '191438',
                            p: '2',
                            t: 'I1',
                        },
                        value: '19:14:38',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio gestione header della risposta in K11 classica',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio gestione header della risposta in K11 classica',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '40',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842403',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842403',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842403',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842403',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'comunicare anche presenza test automatici',
                            p: '',
                            t: '',
                        },
                        value: 'comunicare anche presenza test automatici',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Kokos serverless',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Kokos serverless',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '41',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842404',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842404',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842404',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842404',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'NW21000499 non completato e sparito dal sistema, rimasta solo traccia su labsdoc, eliminerei la riga',
                            p: '',
                            t: '',
                        },
                        value: 'NW21000499 non completato e sparito dal sistema, rimasta solo traccia su labsdoc, eliminerei la riga',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'LANSTS',
                            p: '',
                            t: 'UP',
                        },
                        value: 'LANSTS',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '170631',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:06:31',
                        displayedValue: '17:06:31',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Rilascio Doc.UP (creazione docx con google docs)',
                            p: '',
                            t: '',
                        },
                        value: 'Rilascio Doc.UP (creazione docx con google docs)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'LANSTS',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'LANSTS',
                        displayedValue: 'LANSTS',
                    },
                },
                id: '42',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842405',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842405',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842405',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842405',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Includere W1 in smeup API (alcuni ep chiamano W1)',
                            p: '',
                            t: '',
                        },
                        value: 'Includere W1 in smeup API (alcuni ep chiamano W1)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '43',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842406',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842406',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842406',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842406',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'studi di revisione della toolbar di webup',
                            p: '',
                            t: '',
                        },
                        value: 'studi di revisione della toolbar di webup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '44',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842407',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842407',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842407',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842407',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'miglioramento della modalità di compatibility mode',
                            p: '',
                            t: '',
                        },
                        value: 'miglioramento della modalità di compatibility mode',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '45',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842408',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842408',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842408',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842408',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '171736',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:17:36',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio aggiunta di probes per smeup',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio aggiunta di probes per smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '46',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842409',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842409',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842409',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842409',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '172559',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:25:59',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio home mobile',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio home mobile',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '47',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842410',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842410',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842410',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842410',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Red.UP. Funzioni in dialog. Gestione sessione RDS',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Red.UP. Funzioni in dialog. Gestione sessione RDS',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'SANBRU',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'SANBRU',
                        displayedValue: 'SANBRU',
                    },
                },
                id: '48',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842411',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842411',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842411',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842411',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '171714',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:17:14',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio campo numerico in mobile (con ketchup)',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio campo numerico in mobile (con ketchup)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '49',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842412',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842412',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842412',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842412',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'SAP: definire CN in SAP',
                            p: '',
                            t: '',
                        },
                        value: 'SAP: definire CN in SAP',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '50',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842413',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842413',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842413',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842413',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'SAP: consumare rest-api da SAP',
                            p: '',
                            t: '',
                        },
                        value: 'SAP: consumare rest-api da SAP',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '51',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842414',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842414',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842414',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842414',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '(non solo per CNCLI ovviam ma per capirci)',
                            p: '',
                            t: '',
                        },
                        value: '(non solo per CNCLI ovviam ma per capirci)',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'scheda C_CNCLI da agganciare a *CNCLI',
                            p: '',
                            t: '',
                        },
                        value: 'scheda C_CNCLI da agganciare a *CNCLI',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '52',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842415',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842415',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842415',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842415',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '171644',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:16:44',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio webup: salto pagina in stampa scheda',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio webup: salto pagina in stampa scheda',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '53',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842416',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842416',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842416',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842416',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221214',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-14',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '180719',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:07:19',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio exit java da HTML a testo',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio exit java da HTML a testo',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BENMAR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BENMAR',
                    },
                },
                id: '54',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842417',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842417',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842417',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842417',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                        displayedValue: '21/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '114309',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:43:09',
                        displayedValue: '11:43:09',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio POC utilizzo Toothpic in Shiro',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio POC utilizzo Toothpic in Shiro',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DELGIO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'DELGIO',
                        displayedValue: 'DELGIO',
                    },
                },
                id: '55',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842418',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842418',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842418',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842418',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                        displayedValue: '21/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '114314',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:43:14',
                        displayedValue: '11:43:14',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio studio flutterflow',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio studio flutterflow',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DELGIO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'DELGIO',
                        displayedValue: 'DELGIO',
                    },
                },
                id: '56',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842419',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842419',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842419',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842419',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'news e articolo',
                            p: '',
                            t: '',
                        },
                        value: 'news e articolo',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                        displayedValue: '04/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '185027',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:50:27',
                        displayedValue: '18:50:27',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio performance A36',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio performance A36',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '57',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842420',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842420',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842420',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842420',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '171634',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:16:34',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Web.UP observability',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Web.UP observability',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-purple-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '90',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '90',
                        displayedValue: '90',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '58',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842421',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842421',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842421',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842421',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'news,nti,articolo',
                            p: '',
                            t: '',
                        },
                        value: 'news,nti,articolo',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Ketchup: colonne con formule e merge colon',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Ketchup: colonne con formule e merge colon',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOSLUC',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FOSLUC',
                        displayedValue: 'FOSLUC',
                    },
                },
                id: '59',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842422',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842422',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842422',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842422',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'nti',
                            p: '',
                            t: '',
                        },
                        value: 'nti',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio dati cliente da inviare a smeup',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio dati cliente da inviare a smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '60',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842423',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842423',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842423',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842423',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'news',
                            p: '',
                            t: '',
                        },
                        value: 'news',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio ristrutturazione scheda WS_116',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio ristrutturazione scheda WS_116',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '61',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842424',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842424',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842424',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842424',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                        displayedValue: '04/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '185040',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:50:40',
                        displayedValue: '18:50:40',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio e comunicazione Input Legacy',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio e comunicazione Input Legacy',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '62',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842426',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842426',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842426',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842426',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '171619',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:16:19',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio trasformare le A() in F()',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio trasformare le A() in F()',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '63',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842427',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842427',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842427',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842427',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio migrazione showroom al gateway',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio migrazione showroom al gateway',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MOSPAO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MOSPAO',
                        displayedValue: 'MOSPAO',
                    },
                },
                id: '64',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842428',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842428',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842428',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842428',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '164831',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:48:31',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio portare kokos poliglotta in gibus',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio portare kokos poliglotta in gibus',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                    },
                },
                id: '65',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842429',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842429',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842429',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842429',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'anagrafica kokos in C£_102',
                            p: '',
                            t: '',
                        },
                        value: 'anagrafica kokos in C£_102',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '66',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842430',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842430',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842430',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842430',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '165004',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:50:04',
                        displayedValue: '16:50:04',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'osservabilità kokos interpreti layout e schede',
                            p: '',
                            t: '',
                        },
                        value: 'osservabilità kokos interpreti layout e schede',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '67',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842431',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842431',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842431',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842431',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio kokos for rpgle developers 2.0',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio kokos for rpgle developers 2.0',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '68',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842432',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842432',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842432',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842432',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                        displayedValue: '25/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                        displayedValue: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio integrazione wiki.js in smeup',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio integrazione wiki.js in smeup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '69',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842433',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842433',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842433',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842433',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '185047',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:50:47',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'multitenant keep.up',
                            p: '',
                            t: '',
                        },
                        value: 'multitenant keep.up',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '70',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842434',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842434',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842434',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842434',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Primo step: valutazione privacy',
                            p: '',
                            t: '',
                        },
                        value: 'Primo step: valutazione privacy',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221219',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-19',
                        displayedValue: '19/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '163451',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:34:51',
                        displayedValue: '16:34:51',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Identificazione firme con MyBiros',
                            p: '',
                            t: '',
                        },
                        value: 'Identificazione firme con MyBiros',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '71',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842435',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842435',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842435',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842435',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Standardizzare in smartkit il lavoro sui test automatici di analisi delle performance fatte per webup',
                            p: '',
                            t: '',
                        },
                        value: 'Standardizzare in smartkit il lavoro sui test automatici di analisi delle performance fatte per webup',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '165533',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:55:33',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Test perf autom. In smartkit',
                            p: '',
                            t: '',
                        },
                        value: 'Test perf autom. In smartkit',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '72',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842436',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842436',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842436',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842436',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZAMCHI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ZAMCHI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '165505',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:55:05',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FUN2Java e limite 30000 righe nella risposta',
                            p: '',
                            t: '',
                        },
                        value: 'FUN2Java e limite 30000 righe nella risposta',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '73',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842437',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842437',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000842437',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000842437',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-25',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VOLALE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'VOLALE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '123942',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:39:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Demo feige',
                            p: '',
                            t: '',
                        },
                        value: 'Demo feige',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                        displayedValue: 'MAEOLI',
                    },
                },
                id: '74',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000843365',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000843365',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000843365',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000843365',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221128',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-28',
                        displayedValue: '28/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '094606',
                            p: '2',
                            t: 'I1',
                        },
                        value: '09:46:06',
                        displayedValue: '09:46:06',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio ML su Linux on Power',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio ML su Linux on Power',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '75',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845447',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845447',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845447',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845447',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221201',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-01',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '191228',
                            p: '2',
                            t: 'I1',
                        },
                        value: '19:12:28',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PAssaggio consegne Alquati/Cosentino',
                            p: '',
                            t: '',
                        },
                        value: 'PAssaggio consegne Alquati/Cosentino',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '76',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845448',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845448',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845448',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845448',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221212',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-12',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '160543',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:05:43',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Qlik usa rest-api verso VmSistemi',
                            p: '',
                            t: '',
                        },
                        value: 'Qlik usa rest-api verso VmSistemi',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '77',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845449',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845449',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000845449',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000845449',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '111911',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:19:11',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Struttura per conversione documenti a markdown via Pandoc',
                            p: '',
                            t: '',
                        },
                        value: 'Struttura per conversione documenti a markdown via Pandoc',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '78',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000847345',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000847345',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000847345',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000847345',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221204',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-04',
                        displayedValue: '04/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '185054',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:50:54',
                        displayedValue: '18:50:54',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Smartkit AI per VM sistemi',
                            p: '',
                            t: '',
                        },
                        value: 'Smartkit AI per VM sistemi',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '79',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000847346',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000847346',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000847346',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000847346',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-30',
                        displayedValue: '30/11/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '140730',
                            p: '2',
                            t: 'I1',
                        },
                        value: '14:07:30',
                        displayedValue: '14:07:30',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio C£_102 in kokos',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio C£_102 in kokos',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '80',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000848304',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000848304',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000848304',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000848304',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'News, Articolo, etc.',
                            p: '',
                            t: '',
                        },
                        value: 'News, Articolo, etc.',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221201',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-01',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '191159',
                            p: '2',
                            t: 'I1',
                        },
                        value: '19:11:59',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#comunicazione Qlik usa rest-api verso smeup erp',
                            p: '',
                            t: '',
                        },
                        value: '#comunicazione Qlik usa rest-api verso smeup erp',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '81',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000853171',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000853171',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000853171',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000853171',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221207',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-07',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '114325',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:43:25',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio forma grafica src in Tbl',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio forma grafica src in Tbl',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '82',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000853172',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000853172',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000853172',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000853172',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '111823',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:18:23',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'POC traduzioni con AI (gpt-3 e Deepl)',
                            p: '',
                            t: '',
                        },
                        value: 'POC traduzioni con AI (gpt-3 e Deepl)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '83',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861577',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861577',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861577',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861577',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221209',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-09',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '124403',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:44:03',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#comunicazione documentazione integrazione ketchup-webup',
                            p: '',
                            t: '',
                        },
                        value: '#comunicazione documentazione integrazione ketchup-webup',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded  strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '00',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '00',
                        displayedValue: '00',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '84',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861624',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861624',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861624',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861624',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221209',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-09',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '125629',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:56:29',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Rest-Api e connettore GraphQL. Smeup e VMSistemi',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Rest-Api e connettore GraphQL. Smeup e VMSistemi',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded  strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '00',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '00',
                        displayedValue: '00',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '85',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861625',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861625',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000861625',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000861625',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Rilascio in master già effettuato. Inserito il deliverable per la parte di comunicazione.',
                            p: '',
                            t: '',
                        },
                        value: 'Rilascio in master già effettuato. Inserito il deliverable per la parte di comunicazione.',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221209',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-09',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BONMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '130851',
                            p: '2',
                            t: 'I1',
                        },
                        value: '13:08:51',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '#rilascio Tooltip senza navigazione oggetto',
                            p: '',
                            t: '',
                        },
                        value: '#rilascio Tooltip senza navigazione oggetto',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded  strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '00',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '00',
                        displayedValue: '00',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                    },
                },
                id: '86',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863709',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863709',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863709',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863709',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '(Mattia e Fabrizio)',
                            p: '',
                            t: '',
                        },
                        value: '(Mattia e Fabrizio)',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221212',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-12',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '113323',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:33:23',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Schede no code con Figma',
                            p: '',
                            t: '',
                        },
                        value: 'Schede no code con Figma',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded  strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '00',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '00',
                        displayedValue: '00',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '87',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863823',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863823',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863823',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863823',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'METTRE SUBITO IN INATTIVO',
                            p: '',
                            t: '',
                        },
                        value: 'METTRE SUBITO IN INATTIVO',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221213',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-13',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '093156',
                            p: '2',
                            t: 'I1',
                        },
                        value: '09:31:56',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: '"pacchetto" (smartkit) K10/A37',
                            p: '',
                            t: '',
                        },
                        value: '"pacchetto" (smartkit) K10/A37',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '88',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863826',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863826',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000863826',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000863826',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'METTERE IN INATTIVO',
                            p: '',
                            t: '',
                        },
                        value: 'METTERE IN INATTIVO',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '114319',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:43:19',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Input field',
                            p: '',
                            t: '',
                        },
                        value: 'Input field',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ZAMCHI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ZAMCHI',
                        displayedValue: 'ZAMCHI',
                    },
                },
                id: '89',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000864784',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000864784',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000864784',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000864784',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '145046',
                            p: '2',
                            t: 'I1',
                        },
                        value: '14:50:46',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Kokos: Refactoring interprete schede',
                            p: '',
                            t: '',
                        },
                        value: 'Kokos: Refactoring interprete schede',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-grey-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '80',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '80',
                        displayedValue: '80',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                    },
                },
                id: '90',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000864785',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000864785',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000864785',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000864785',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221213',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-13',
                        displayedValue: '13/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '124413',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:44:13',
                        displayedValue: '12:44:13',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'kokos serverless gestione del multi tenant',
                            p: '',
                            t: '',
                        },
                        value: 'kokos serverless gestione del multi tenant',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '91',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000867249',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000867249',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000867249',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000867249',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Realizzazione di un componente webview con gestione dei messaggi per futura sostituzione app Cordova',
                            p: '',
                            t: '',
                        },
                        value: 'Realizzazione di un componente webview con gestione dei messaggi per futura sostituzione app Cordova',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221215',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-15',
                        displayedValue: '15/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '164029',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:40:29',
                        displayedValue: '16:40:29',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Componente WebView in shiro',
                            p: '',
                            t: '',
                        },
                        value: 'Componente WebView in shiro',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DELGIO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'DELGIO',
                        displayedValue: 'DELGIO',
                    },
                },
                id: '92',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000868205',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000868205',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000868205',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000868205',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Prio Alta?',
                            p: '',
                            t: '',
                        },
                        value: 'Prio Alta?',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '115742',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:57:42',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'generare PDF da wikijs',
                            p: '',
                            t: '',
                        },
                        value: 'generare PDF da wikijs',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-purple-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '90',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '90',
                        displayedValue: '90',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                    },
                },
                id: '93',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000868206',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000868206',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000868206',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000868206',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'definire dettagli prima di avviare',
                            p: '',
                            t: '',
                        },
                        value: 'definire dettagli prima di avviare',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221216',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-16',
                        displayedValue: '16/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '105302',
                            p: '2',
                            t: 'I1',
                        },
                        value: '10:53:02',
                        displayedValue: '10:53:02',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Code completion (open AI)',
                            p: '',
                            t: '',
                        },
                        value: 'Code completion (open AI)',
                    },
                    NH02: {
                        cssClass:
                            'strong-text success-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'C',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'C',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '94',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870538',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870538',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870538',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870538',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Avere un posto dove scrivere le dipendenze. (Script oggetti collegati alla UPP? Ci manca la versione della UPP.. mettiamo DEV di riferimento).',
                            p: '',
                            t: '',
                        },
                        value: 'Avere un posto dove scrivere le dipendenze. (Script oggetti collegati alla UPP? Ci manca la versione della UPP.. mettiamo DEV di riferimento).',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221219',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-19',
                        displayedValue: '19/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '151717',
                            p: '2',
                            t: 'I1',
                        },
                        value: '15:17:17',
                        displayedValue: '15:17:17',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'gestione dipendenze UPP',
                            p: '',
                            t: '',
                        },
                        value: 'gestione dipendenze UPP',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '95',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870540',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870540',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870540',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870540',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAEOLI',
                            p: '',
                            t: 'UP',
                        },
                        value: 'MAEOLI',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '130229',
                            p: '2',
                            t: 'I1',
                        },
                        value: '13:02:29',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'Trasformazione documenti markdown Wiki.JS in PDF',
                            p: '',
                            t: '',
                        },
                        value: 'Trasformazione documenti markdown Wiki.JS in PDF',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-purple-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '90',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '90',
                        displayedValue: '90',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'MAEOLI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'MAEOLI',
                    },
                },
                id: '96',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870541',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870541',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000870541',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000870541',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221221',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-21',
                        displayedValue: '21/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARRSTE',
                            p: '',
                            t: 'UP',
                        },
                        value: 'ARRSTE',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '111800',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:18:00',
                        displayedValue: '11:18:00',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'designer grafico delle schede',
                            p: '',
                            t: '',
                        },
                        value: 'designer grafico delle schede',
                    },
                    NH02: {
                        cssClass:
                            'strong-text danger-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'A',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'A',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'ARRSTE',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'ARRSTE',
                        displayedValue: 'ARRSTE',
                    },
                },
                id: '97',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000871487',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000871487',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000871487',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000871487',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221220',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-20',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELGIO',
                            p: '',
                            t: 'UP',
                        },
                        value: 'DELGIO',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '103059',
                            p: '2',
                            t: 'I1',
                        },
                        value: '10:30:59',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'use case interno per webup.js',
                            p: '',
                            t: '',
                        },
                        value: 'use case interno per webup.js',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PASCAR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'PASCAR',
                        displayedValue: 'PASCAR',
                    },
                },
                id: '98',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£ICFCD': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000871488',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000871488',
                    },
                    ID_LI: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 45,
                        },
                        isEditable: false,
                        obj: {
                            k: '0000871488',
                            p: 'AWX006',
                            t: 'CF',
                        },
                        value: '0000871488',
                    },
                    NH06: {
                        data: {
                            helperEnabled: false,
                            maxLength: 512,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    $OP: {
                        cssClass: 'strong-text',
                        data: {
                            sizeX: '18px',
                            resource: 'chevron-down',
                            helperEnabled: false,
                            sizeY: '18px',
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '000102',
                            p: 'COD_VER',
                            t: 'VO',
                        },
                        value: 'chevron-down',
                        style: {
                            minHeight: '18px',
                        },
                    },
                    ID_TP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CFAWX006',
                            p: '',
                            t: 'OG',
                        },
                        value: 'CFAWX006',
                    },
                    '£ICFLI': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'B£W00',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£ICF_C11': {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221220',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-20',
                        displayedValue: '20/12/2022',
                    },
                    '£ICF_C10': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENMAR',
                            p: '',
                            t: 'UP',
                        },
                        value: 'BENMAR',
                    },
                    '£ICF_C12': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '120902',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:09:02',
                        displayedValue: '12:09:02',
                    },
                    '£ICFTC': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 12,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AWX006',
                            p: '',
                            t: 'RE',
                        },
                        value: 'AWX006',
                    },
                    '£ICFCX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 300,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    '£ICFDX': {
                        data: {
                            helperEnabled: false,
                            maxLength: 70,
                        },
                        isEditable: true,
                        obj: {
                            k: 'UPP HR con Kokos',
                            p: '',
                            t: '',
                        },
                        value: 'UPP HR con Kokos',
                    },
                    NH02: {
                        cssClass:
                            'strong-text warning-text strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'B',
                            p: 'B§A',
                            t: 'TA',
                        },
                        value: 'B',
                    },
                    NH03: {
                        cssClass:
                            'c-fitted c-shaped c-hor-padded c-teal-bg strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '10',
                            p: 'B£WX4',
                            t: 'TA',
                        },
                        value: '10',
                        displayedValue: '10',
                    },
                    NH01: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONMAI',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONMAI',
                        displayedValue: 'BONMAI',
                    },
                },
                id: '99',
                object: '',
                readOnly: true,
            },
        ],
    },
    density: 'dense',
    dragEnabled: false,
    dropEnabled: false,
    editableData: true,
    emptyDataLabel: 'Nessun risultato',
    enableColumnsFormula: true,
    enableMergeColumns: true,
    enableExtraColumns: true,
    enableSortableColumns: true,
    expandGroups: true,
    filters: {
        NH03: {
            checkBoxes: [],
            textField: "eq '10' or eq '00'",
            textFieldTmp: "eq '10' or eq '00'",
            interval: ['', ''],
            intervalTmp: ['', ''],
        },
    },
    fixedColumns: 4,
    fixedRows: 0,
    forceOneLine: true,
    globalFilter: true,
    globalFilterValue: '',
    groupLabelDisplay: 'Both',
    groups: [
        {
            column: 'NH01',
            visible: true,
        },
    ],
    headerIsPersistent: true,
    insertMode: 'row',
    isFocusable: false,
    lazyLoadRows: false,
    lineBreakCharacter: '\n',
    loadMoreLimit: 1000,
    loadMoreMode: 'progressive_threshold',
    loadMoreStep: 60,
    pageSelected: -1,
    paginatorPos: 'Top',
    removableColumns: true,
    resizableColumns: true,
    rowActions: [
        {
            icon: 'view-quilt',
            text: 'Scheda',
        },
    ],
    rowsPerPage: 50,
    scrollOnHover: true,
    showCustomization: true,
    showDeleteButton: true,
    showFilters: true,
    showFooter: true,
    showGrid: 'Row',
    showGroups: true,
    showHeader: true,
    showLoadMore: true,
    sort: [],
    /*stateId: 'i144',*/
    store: {},
    sortableColumnsMutateData: true,
    sortEnabled: true,
    totals: {
        NH01: 'Count',
    },
    transpose: false,
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
    const comp = document.createElement(compName);
    for (const key in props) {
        comp[key] = props[key];
    }
    wrapper.append(comp);
} else {
    const span = document.createElement('span');
    span.innerText = 'Did you forget to paste your props?';
    wrapper.append(span);
}
