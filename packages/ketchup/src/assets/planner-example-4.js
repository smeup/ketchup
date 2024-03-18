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
    customStyle: '',
    data: {
        columns: [
            {
                isEditable: false,
                isKey: false,
                name: 'R§COMM',
                obj: {
                    k: '',
                    p: '',
                    t: 'CM',
                },
                title: 'Commessa',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATPRE',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Cons.\nAttualizz.',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATORD',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Cons.\nP.Ordine',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATOPE',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Fase\nINSTALLAZIONE',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R£COMM',
                title: 'Des.',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§CDCL',
                objs: [
                    {
                        k: '',
                        p: 'CLP',
                        t: 'CN',
                    },
                ],
                title: 'Ente',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R£CDCL',
                title: 'Ente',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'CODDOC',
                objs: [
                    {
                        k: '',
                        p: 'MVE',
                        t: 'DO',
                    },
                ],
                title: 'Doc.',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'XXSEMA',
                obj: {
                    k: '',
                    p: 'IMG',
                    t: 'J4',
                },
                title: 'KPI\nRitardo',
                tooltip: false,
            },
            {
                decimals: 0,
                isEditable: false,
                isKey: false,
                name: 'GIODIF',
                obj: {
                    k: '',
                    p: '',
                    t: 'NR',
                },
                title: 'Diff\nGio',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'TIPRIT',
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                title: 'Tipo\nRitardo',
                tooltip: false,
            },
            {
                decimals: 0,
                isEditable: false,
                isKey: false,
                name: 'DIFFGG',
                obj: {
                    k: '',
                    p: '',
                    t: 'NR',
                },
                title: 'Delta GG',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATINZ',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data inizio\nAttualizz.',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INZORD',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data inizio\nP.Ordine',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§TDOC',
                obj: {
                    k: '',
                    p: 'V5D',
                    t: 'TA',
                },
                title: 'Tp\nDo',
                tooltip: false,
                visible: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§NDOC',
                objs: [
                    {
                        k: '',
                        p: 'MVE',
                        t: 'DO',
                    },
                ],
                title: 'Nr\nDo',
                tooltip: false,
                visible: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§TCCL',
                obj: {
                    k: '',
                    p: 'BRE',
                    t: 'TA',
                },
                title: 'Tp\nEn',
                tooltip: false,
                visible: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§TRIG',
                obj: {
                    k: '',
                    p: 'V5B',
                    t: 'TA',
                },
                title: 'Tp\nRi',
                tooltip: false,
                visible: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'CODRIG',
                objs: [
                    {
                        k: '',
                        p: 'MVE',
                        t: 'DR',
                    },
                ],
                title: 'Riga',
                tooltip: false,
                visible: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'PREPLA',
                obj: {
                    k: '',
                    p: 'SI/NO',
                    t: 'V2',
                },
                title: 'Presenza Planning',
                tooltip: false,
                visible: false,
            },
        ],
        rows: [
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENARM',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'BENARM',
                        displayedValue: 'BENARM',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240228',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-02-28',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240228',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-02-28',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    86 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '86',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230512',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-12',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G418      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G418      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240228',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-02-28',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G418      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G418      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230512',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-12',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-16-125-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-16-125-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G418',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G418',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BENDER ARMATUREN',
                            p: '',
                            t: '',
                        },
                        value: 'BENDER ARMATUREN',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G418',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G418',
                        displayedValue: 'G418',
                    },
                },
                cssClass: 'clickable',
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VITILL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'VITILL',
                        displayedValue: 'VITILL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20241125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-11-25',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20241125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-11-25',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '   171 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '171',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240315',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-15',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G479      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G479      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20241125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-11-25',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G479      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G479      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240315',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-15',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-26-125-TR-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-26-125-TR-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G479',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G479',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Vitillo SpA',
                            p: '',
                            t: '',
                        },
                        value: 'Vitillo SpA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G479',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G479',
                        displayedValue: 'G479',
                    },
                },
                cssClass: 'clickable',
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARCO',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ARCO',
                        displayedValue: 'ARCO',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231031',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-31',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231031',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-31',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    21 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '21',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230307',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-07',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G483      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G483      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231031',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-31',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G483      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G483      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230307',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-07',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-15-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-15-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G483',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G483',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ARCO-VALVULAS ARCO',
                            p: '',
                            t: '',
                        },
                        value: 'ARCO-VALVULAS ARCO',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G483',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G483',
                        displayedValue: 'G483',
                    },
                },
                cssClass: 'clickable',
                id: '3',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BRENAN',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'BRENAN',
                        displayedValue: 'BRENAN',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240731',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-07-31',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240731',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-07-31',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    61 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '61',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221222',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-22',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G485      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G485      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240731',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-07-31',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G485      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G485      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221222',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-22',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMTR-30-TXTR80-TXV80-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMTR-30-TXTR80-TXV80-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G485',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G485',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BREMBO NANJING BRAKE SYSTEM CO.LTD.',
                            p: '',
                            t: '',
                        },
                        value: 'BREMBO NANJING BRAKE SYSTEM CO.LTD.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G485',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G485',
                        displayedValue: 'G485',
                    },
                },
                cssClass: 'clickable',
                id: '4',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VITILL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'VITILL',
                        displayedValue: 'VITILL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-08-01',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-08-01',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    35 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '35',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231013',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-13',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G487      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G487      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-08-01',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G487      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G487      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231013',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-13',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.DF-10-150-TR/EVO-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.DF-10-150-TR/EVO-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G487',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G487',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Vitillo SpA',
                            p: '',
                            t: '',
                        },
                        value: 'Vitillo SpA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G487',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G487',
                        displayedValue: 'G487',
                    },
                },
                cssClass: 'clickable',
                id: '5',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AALBER',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'AALBER',
                        displayedValue: 'AALBER',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-04-15',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-04-15',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    56 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '56',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G492      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G492      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-04-15',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G492      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G492      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-17-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-17-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G492',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G492',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AALBERTS IPS AMERICAS, INC',
                            p: '',
                            t: '',
                        },
                        value: 'AALBERTS IPS AMERICAS, INC',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G492',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G492',
                        displayedValue: 'G492',
                    },
                },
                cssClass: 'clickable',
                id: '6',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AALBER',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'AALBER',
                        displayedValue: 'AALBER',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240329',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-29',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240329',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-29',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    39 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '39',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G493      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G493      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240329',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-29',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G493      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G493      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-12-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-12-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G493',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G493',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AALBERTS IPS AMERICAS, INC',
                            p: '',
                            t: '',
                        },
                        value: 'AALBERTS IPS AMERICAS, INC',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G493',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G493',
                        displayedValue: 'G493',
                    },
                },
                cssClass: 'clickable',
                id: '7',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COMISA',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'COMISA',
                        displayedValue: 'COMISA',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240112',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240112',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    29 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '29',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230804',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-08-04',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G494      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G494      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240112',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G494      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G494      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230804',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-08-04',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-8-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-8-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G494',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G494',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COMISA SpA',
                            p: '',
                            t: '',
                        },
                        value: 'COMISA SpA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G494',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G494',
                        displayedValue: 'G494',
                    },
                },
                cssClass: 'clickable',
                id: '8',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'OMB',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'OMB',
                        displayedValue: 'OMB',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    31 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '31',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230331',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-31',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G495      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G495      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G495      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G495      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230331',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-31',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-35-125GT2-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-35-125GT2-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G495',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G495',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'OMB SALERI VENTILGAS SPA',
                            p: '',
                            t: '',
                        },
                        value: 'OMB SALERI VENTILGAS SPA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G495',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G495',
                        displayedValue: 'G495',
                    },
                },
                cssClass: 'clickable',
                id: '9',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FORDME',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'FORDME',
                        displayedValue: 'FORDME',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-30',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-30',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    57 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '57',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G497      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G497      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240130',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-30',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G497      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G497      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-14-175-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-14-175-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G497',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G497',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'THE FORD METER BOX CO. INC.',
                            p: '',
                            t: '',
                        },
                        value: 'THE FORD METER BOX CO. INC.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G497',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G497',
                        displayedValue: 'G497',
                    },
                },
                cssClass: 'clickable',
                id: '10',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'NIBCOE',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'NIBCOE',
                        displayedValue: 'NIBCOE',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240510',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-10',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240510',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-10',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    63 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '63',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230901',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-01',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G498      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G498      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240510',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-10',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G498      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G498      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230901',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-01',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-9-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-9-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G498',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G498',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'NIBCO INC.',
                            p: '',
                            t: '',
                        },
                        value: 'NIBCO INC.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G498',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G498',
                        displayedValue: 'G498',
                    },
                },
                cssClass: 'clickable',
                id: '11',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ANVIL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ANVIL',
                        displayedValue: 'ANVIL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    59 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '59',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-20',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G499      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G499      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G499      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G499      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-20',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-4-130DB-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-4-130DB-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G499',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G499',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Beck Manufacturing',
                            p: '',
                            t: '',
                        },
                        value: 'Beck Manufacturing',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G499',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G499',
                        displayedValue: 'G499',
                    },
                },
                cssClass: 'clickable',
                id: '12',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FORDME',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'FORDME',
                        displayedValue: 'FORDME',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    63 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '63',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230901',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-01',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G501      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G501      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G501      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G501      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230901',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-01',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-14-175-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-14-175-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G501',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G501',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'THE FORD METER BOX CO. INC.',
                            p: '',
                            t: '',
                        },
                        value: 'THE FORD METER BOX CO. INC.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G501',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G501',
                        displayedValue: 'G501',
                    },
                },
                cssClass: 'clickable',
                id: '13',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FORDME',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'FORDME',
                        displayedValue: 'FORDME',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    63 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '63',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230908',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-08',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G502      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G502      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G502      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G502      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230908',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-08',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-14-175-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-14-175-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G502',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G502',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'THE FORD METER BOX CO. INC.',
                            p: '',
                            t: '',
                        },
                        value: 'THE FORD METER BOX CO. INC.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G502',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G502',
                        displayedValue: 'G502',
                    },
                },
                cssClass: 'clickable',
                id: '14',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ISVAL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ISVAL',
                        displayedValue: 'ISVAL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    35 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '35',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230609',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-09',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G503      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G503      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G503      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G503      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230609',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-09',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-24-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-24-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G503',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G503',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ISVAL S.P.A',
                            p: '',
                            t: '',
                        },
                        value: 'ISVAL S.P.A',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G503',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G503',
                        displayedValue: 'G503',
                    },
                },
                cssClass: 'clickable',
                id: '15',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SWAGEL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'SWAGEL',
                        displayedValue: 'SWAGEL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    56 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '56',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230721',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-07-21',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G504      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G504      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240607',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-07',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G504      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G504      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230721',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-07-21',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-36-150-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-36-150-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G504',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G504',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SWAGELOK COMPANY',
                            p: '',
                            t: '',
                        },
                        value: 'SWAGELOK COMPANY',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G504',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G504',
                        displayedValue: 'G504',
                    },
                },
                cssClass: 'clickable',
                id: '16',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CALEFF',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'CALEFF',
                        displayedValue: 'CALEFF',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240621',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-21',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240621',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-21',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    35 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '35',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230908',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-08',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G505      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G505      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240621',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-21',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G505      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G505      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230908',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-08',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-30-150GT2-150GT4-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-30-150GT2-150GT4-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G505',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G505',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CALEFFI S.P.A.',
                            p: '',
                            t: '',
                        },
                        value: 'CALEFFI S.P.A.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G505',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G505',
                        displayedValue: 'G505',
                    },
                },
                cssClass: 'clickable',
                id: '17',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'KARAUF',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'KARAUF',
                        displayedValue: 'KARAUF',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240118',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-18',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240118',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-18',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    28 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '28',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230505',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-05',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G507      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G507      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240118',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-18',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G507      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G507      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230505',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-05',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-15-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-15-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G507',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G507',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'KONGSBERG AUTOMOTIVE AS',
                            p: '',
                            t: '',
                        },
                        value: 'KONGSBERG AUTOMOTIVE AS',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G507',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G507',
                        displayedValue: 'G507',
                    },
                },
                cssClass: 'clickable',
                id: '18',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PPTARM',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'PPTARM',
                        displayedValue: 'PPTARM',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240119',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-19',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240119',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-19',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    35 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '35',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230608',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-08',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G509      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G509      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240119',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-19',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G509      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G509      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230608',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-08',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-10-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-10-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G509',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G509',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PPT-Armature DD p.o.',
                            p: '',
                            t: '',
                        },
                        value: 'PPT-Armature DD p.o.',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G509',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G509',
                        displayedValue: 'G509',
                    },
                },
                cssClass: 'clickable',
                id: '19',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AYVAZ',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'AYVAZ',
                        displayedValue: 'AYVAZ',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240515',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-15',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240515',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-15',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    30 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '30',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230928',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-28',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G510      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G510      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240515',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-15',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G510      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G510      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230928',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-09-28',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-10-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-10-125-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G510',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G510',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AYVAZ COMPAny',
                            p: '',
                            t: '',
                        },
                        value: 'AYVAZ COMPAny',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G510',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G510',
                        displayedValue: 'G510',
                    },
                },
                cssClass: 'clickable',
                id: '20',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ISIFLO',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ISIFLO',
                        displayedValue: 'ISIFLO',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240614',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-14',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240614',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-14',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    28 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '28',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231124',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-11-24',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G511      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G511      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240614',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-06-14',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G511      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G511      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231124',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-11-24',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-15-150-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-15-150-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G511',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G511',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ISIFLO AS, Norway',
                            p: '',
                            t: '',
                        },
                        value: 'ISIFLO AS, Norway',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G511',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G511',
                        displayedValue: 'G511',
                    },
                },
                cssClass: 'clickable',
                id: '21',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SWAGEL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'SWAGEL',
                        displayedValue: 'SWAGEL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20250225',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2025-02-25',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20250225',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2025-02-25',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    67 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '67',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240314',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-14',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G523      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G523      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20250225',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2025-02-25',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G523      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G523      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240314',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-14',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-36-150-120HS-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-36-150-120HS-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G523',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G523',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SWAGELOK COMPANY',
                            p: '',
                            t: '',
                        },
                        value: 'SWAGELOK COMPANY',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G523',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G523',
                        displayedValue: 'G523',
                    },
                },
                cssClass: 'clickable',
                id: '22',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'VITILL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'VITILL',
                        displayedValue: 'VITILL',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: true,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240104',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-04',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240104',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-04',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '    37 ',
                            p: '',
                            t: 'NR',
                        },
                        value: '37',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230512',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-12',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G526      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G526      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20240104',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-04',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G526      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G526      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230512',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-12',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMOR-26-125-TR-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMOR-26-125-TR-CNC',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G526',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G526',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Vitillo SpA',
                            p: '',
                            t: '',
                        },
                        value: 'Vitillo SpA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'G526',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G526',
                        displayedValue: 'G526',
                    },
                },
                cssClass: 'clickable',
                id: '23',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GTSPA',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'GTSPA',
                        displayedValue: 'GTSPA',
                    },
                    TIPRIT: {
                        data: {
                            size: 1,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 1,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    PREPLA: {
                        data: {
                            size: 2,
                            helperEnabled: false,
                            checked: false,
                            hiddenCounter: true,
                            maxLength: 2,
                        },
                        isEditable: false,
                        obj: {
                            k: ' ',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    GIODIF: {
                        data: {
                            size: 5,
                            helperEnabled: false,
                            maxLength: 5,
                            integers: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20231122',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-11-22',
                    },
                    'R§TCCL': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20991231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2099-12-31',
                    },
                    DIFFGG: {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            maxLength: 3,
                            integers: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '       ',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    INZORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20991231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2099-12-31',
                    },
                    CODDOC: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'ZZZZ      ',
                    },
                    DATORD: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20991231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2099-12-31',
                    },
                    XXSEMA: {
                        data: {
                            size: 4,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 4,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'ZZZZ      0001',
                    },
                    'R§TRIG': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20991231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2099-12-31',
                    },
                    'R£COMM': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ALLOCAZIONE DELLE RISORSE',
                            p: '',
                            t: '',
                        },
                        value: 'ALLOCAZIONE DELLE RISORSE',
                    },
                    'R§TDOC': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'ZZZZ',
                    },
                    'R£CDCL': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GNUTTI TRANSFER SPA',
                            p: '',
                            t: '',
                        },
                        value: 'GNUTTI TRANSFER SPA',
                    },
                    'R§COMM': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                        displayedValue: 'ZZZZ',
                    },
                },
                cssClass: 'clickable',
                id: '24',
                object: '',
                readOnly: true,
            },
        ],
    },
    detailData: {
        columns: [
            {
                isEditable: false,
                isKey: false,
                name: '§§COMM',
                obj: {
                    k: '',
                    p: '',
                    t: 'CM',
                },
                title: 'Codice Commessa',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§§OPER',
                obj: {
                    k: '',
                    p: '',
                    t: 'OP',
                },
                title: 'Codice Fase',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§§DIPE',
                obj: {
                    k: '',
                    p: '',
                    t: 'DI',
                },
                title: 'Codice dipendente',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DECDIP',
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                title: 'Descrizione dipendente',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL1',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 1',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL2',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 2',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL3',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 3',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL4',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 4',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL5',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 5',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL6',
                obj: {
                    k: '',
                    p: 'X02SKI',
                    t: 'V4',
                },
                title: 'Skills 6',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INZRIS',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data inizio assegnazione',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'FINRIS',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Fine assegnazione',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'COLASS',
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                title: 'Colore assegnazione',
                tooltip: false,
            },
        ],
        rows: [
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'INTE',
                            p: '',
                            t: 'DI',
                        },
                        value: 'INTE',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: '* Tecnici interinali elettrici',
                            p: '',
                            t: '**',
                        },
                        value: '* Tecnici interinali elettrici',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DAE',
                            p: '',
                            t: 'DI',
                        },
                        value: 'DAE',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: '* Tecnici Daema',
                            p: '',
                            t: '**',
                        },
                        value: '* Tecnici Daema',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00930',
                            p: '',
                            t: 'DI',
                        },
                        value: '00930',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AIARDI         ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'AIARDI         ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '3',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00961',
                            p: '',
                            t: 'DI',
                        },
                        value: '00961',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ASSONI         MARTINO',
                            p: '',
                            t: '**',
                        },
                        value: 'ASSONI         MARTINO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '4',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SME',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00962',
                            p: '',
                            t: 'DI',
                        },
                        value: '00962',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ASTORI         EDOARDO',
                            p: '',
                            t: '**',
                        },
                        value: 'ASTORI         EDOARDO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '5',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220401',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-04-01',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Z010',
                            p: '',
                            t: 'OP',
                        },
                        value: 'Z010',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                        displayedValue: 'IEC',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-04-15',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01040',
                            p: '',
                            t: 'DI',
                        },
                        value: '01040',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BELOMETTI      EMILIANO',
                            p: '',
                            t: '**',
                        },
                        value: 'BELOMETTI      EMILIANO',
                        displayedValue: 'BELOMETTI      EMILIANO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                },
                id: '6',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00152',
                            p: '',
                            t: 'DI',
                        },
                        value: '00152',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BERARDI        MARCELLO',
                            p: '',
                            t: '**',
                        },
                        value: 'BERARDI        MARCELLO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '7',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230101',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-01-01',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Z020',
                            p: '',
                            t: 'OP',
                        },
                        value: 'Z020',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                        displayedValue: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230131',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-01-31',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01098',
                            p: '',
                            t: 'DI',
                        },
                        value: '01098',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BETTONI        ANTONIO',
                            p: '',
                            t: '**',
                        },
                        value: 'BETTONI        ANTONIO',
                        displayedValue: 'BETTONI        ANTONIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '8',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0447Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0447Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BOCCHI         TOMMASO',
                            p: '',
                            t: '**',
                        },
                        value: 'BOCCHI         TOMMASO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '9',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220501',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-05-01',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Z030',
                            p: '',
                            t: 'OP',
                        },
                        value: 'Z030',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                        displayedValue: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220530',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-05-30',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01153',
                            p: '',
                            t: 'DI',
                        },
                        value: '01153',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BOLPAGNI       ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'BOLPAGNI       ANDREA',
                        displayedValue: 'BOLPAGNI       ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '10',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230401',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-04-01',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Z010',
                            p: '',
                            t: 'OP',
                        },
                        value: 'Z010',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                        displayedValue: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230630',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-30',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01155',
                            p: '',
                            t: 'DI',
                        },
                        value: '01155',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BOLPAGNI       GIORGIO',
                            p: '',
                            t: '**',
                        },
                        value: 'BOLPAGNI       GIORGIO',
                        displayedValue: 'BOLPAGNI       GIORGIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '11',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01160',
                            p: '',
                            t: 'DI',
                        },
                        value: '01160',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BONARIVA       VALENTINO',
                            p: '',
                            t: '**',
                        },
                        value: 'BONARIVA       VALENTINO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '12',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SME',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0464Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0464Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BUIZZA         CLAUDIO',
                            p: '',
                            t: '**',
                        },
                        value: 'BUIZZA         CLAUDIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '13',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01329',
                            p: '',
                            t: 'DI',
                        },
                        value: '01329',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BUSOLIN        ROBERTO',
                            p: '',
                            t: '**',
                        },
                        value: 'BUSOLIN        ROBERTO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '14',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01385',
                            p: '',
                            t: 'DI',
                        },
                        value: '01385',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CIRELLI        MASSIMO',
                            p: '',
                            t: '**',
                        },
                        value: 'CIRELLI        MASSIMO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '15',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01464',
                            p: '',
                            t: 'DI',
                        },
                        value: '01464',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CORSINI        GIANCARLO',
                            p: '',
                            t: '**',
                        },
                        value: 'CORSINI        GIANCARLO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '16',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SME',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01475',
                            p: '',
                            t: 'DI',
                        },
                        value: '01475',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CRISTIANELLI   OSCAR',
                            p: '',
                            t: '**',
                        },
                        value: 'CRISTIANELLI   OSCAR',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '17',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230601',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-01',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Z020',
                            p: '',
                            t: 'OP',
                        },
                        value: 'Z020',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                        displayedValue: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20230630',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-30',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01497',
                            p: '',
                            t: 'DI',
                        },
                        value: '01497',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DANESI         RENATO',
                            p: '',
                            t: '**',
                        },
                        value: 'DANESI         RENATO',
                        displayedValue: 'DANESI         RENATO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '18',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0431Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0431Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DELLE DONNE    FRANCESCO',
                            p: '',
                            t: '**',
                        },
                        value: 'DELLE DONNE    FRANCESCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '19',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01532',
                            p: '',
                            t: 'DI',
                        },
                        value: '01532',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DEPLANU        ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'DEPLANU        ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '20',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01610',
                            p: '',
                            t: 'DI',
                        },
                        value: '01610',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FALCONI        MAURO',
                            p: '',
                            t: '**',
                        },
                        value: 'FALCONI        MAURO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '21',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0472Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0472Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FARIMBELLA     MATTEO',
                            p: '',
                            t: '**',
                        },
                        value: 'FARIMBELLA     MATTEO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '22',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00328',
                            p: '',
                            t: 'DI',
                        },
                        value: '00328',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FATTORI        FABIO',
                            p: '',
                            t: '**',
                        },
                        value: 'FATTORI        FABIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '23',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01626',
                            p: '',
                            t: 'DI',
                        },
                        value: '01626',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FERRARI        ALESSIO GIUSEPP',
                            p: '',
                            t: '**',
                        },
                        value: 'FERRARI        ALESSIO GIUSEPP',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '24',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01636',
                            p: '',
                            t: 'DI',
                        },
                        value: '01636',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FERRARI        MICHELE',
                            p: '',
                            t: '**',
                        },
                        value: 'FERRARI        MICHELE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '25',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0471Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0471Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FERRITTO       DAVIDE',
                            p: '',
                            t: '**',
                        },
                        value: 'FERRITTO       DAVIDE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '26',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0435Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0435Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FRANCESCONI    ALESSANDRO',
                            p: '',
                            t: '**',
                        },
                        value: 'FRANCESCONI    ALESSANDRO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '27',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01695',
                            p: '',
                            t: 'DI',
                        },
                        value: '01695',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FULGENZI       ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'FULGENZI       ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '28',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01705',
                            p: '',
                            t: 'DI',
                        },
                        value: '01705',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GATTI          FABIO',
                            p: '',
                            t: '**',
                        },
                        value: 'GATTI          FABIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '29',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00478',
                            p: '',
                            t: 'DI',
                        },
                        value: '00478',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GHEZZI         DIEGO',
                            p: '',
                            t: '**',
                        },
                        value: 'GHEZZI         DIEGO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '30',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01790',
                            p: '',
                            t: 'DI',
                        },
                        value: '01790',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GUARNERI       FABIO',
                            p: '',
                            t: '**',
                        },
                        value: 'GUARNERI       FABIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '31',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00510',
                            p: '',
                            t: 'DI',
                        },
                        value: '00510',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'INVERARDI      CLAUDIO',
                            p: '',
                            t: '**',
                        },
                        value: 'INVERARDI      CLAUDIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '32',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01875',
                            p: '',
                            t: 'DI',
                        },
                        value: '01875',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MABESOLANI     PAOLO',
                            p: '',
                            t: '**',
                        },
                        value: 'MABESOLANI     PAOLO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                },
                id: '33',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01890',
                            p: '',
                            t: 'DI',
                        },
                        value: '01890',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAGLIONE       PASQUALE',
                            p: '',
                            t: '**',
                        },
                        value: 'MAGLIONE       PASQUALE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '34',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01895',
                            p: '',
                            t: 'DI',
                        },
                        value: '01895',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAGRI          DARIO',
                            p: '',
                            t: '**',
                        },
                        value: 'MAGRI          DARIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '35',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01920',
                            p: '',
                            t: 'DI',
                        },
                        value: '01920',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MANODORI       MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'MANODORI       MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '36',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '01975',
                            p: '',
                            t: 'DI',
                        },
                        value: '01975',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MARTINELLI     GIORGIO',
                            p: '',
                            t: '**',
                        },
                        value: 'MARTINELLI     GIORGIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '37',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02020',
                            p: '',
                            t: 'DI',
                        },
                        value: '02020',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MAZZELLA       VINCENZO',
                            p: '',
                            t: '**',
                        },
                        value: 'MAZZELLA       VINCENZO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '38',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02144',
                            p: '',
                            t: 'DI',
                        },
                        value: '02144',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'NAONI          MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'NAONI          MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '39',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02135',
                            p: '',
                            t: 'DI',
                        },
                        value: '02135',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'NASSINI        MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'NASSINI        MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '40',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02140',
                            p: '',
                            t: 'DI',
                        },
                        value: '02140',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'NATOLI         GIUSEPPE',
                            p: '',
                            t: '**',
                        },
                        value: 'NATOLI         GIUSEPPE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '41',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02200',
                            p: '',
                            t: 'DI',
                        },
                        value: '02200',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PALANDI        VIVIANO',
                            p: '',
                            t: '**',
                        },
                        value: 'PALANDI        VIVIANO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '42',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02225',
                            p: '',
                            t: 'DI',
                        },
                        value: '02225',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PEDRALI        DAVIDE',
                            p: '',
                            t: '**',
                        },
                        value: 'PEDRALI        DAVIDE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '43',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02227',
                            p: '',
                            t: 'DI',
                        },
                        value: '02227',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PEDRETTI       MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'PEDRETTI       MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '44',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02239',
                            p: '',
                            t: 'DI',
                        },
                        value: '02239',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PERI           ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'PERI           ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '45',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02241',
                            p: '',
                            t: 'DI',
                        },
                        value: '02241',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PEROTTA        PIETRO',
                            p: '',
                            t: '**',
                        },
                        value: 'PEROTTA        PIETRO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                },
                id: '46',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02245',
                            p: '',
                            t: 'DI',
                        },
                        value: '02245',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PETOLLA        LUCA',
                            p: '',
                            t: '**',
                        },
                        value: 'PETOLLA        LUCA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '47',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02252',
                            p: '',
                            t: 'DI',
                        },
                        value: '02252',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PIETROBONI     MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'PIETROBONI     MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '48',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02255',
                            p: '',
                            t: 'DI',
                        },
                        value: '02255',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PILENGHI       STEFANO',
                            p: '',
                            t: '**',
                        },
                        value: 'PILENGHI       STEFANO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '49',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02286',
                            p: '',
                            t: 'DI',
                        },
                        value: '02286',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLATTO         ANDREA',
                            p: '',
                            t: '**',
                        },
                        value: 'PLATTO         ANDREA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '50',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0441Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0441Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLEBANI        LUCA',
                            p: '',
                            t: '**',
                        },
                        value: 'PLEBANI        LUCA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '51',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02357',
                            p: '',
                            t: 'DI',
                        },
                        value: '02357',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'RAGGI          MATTEO',
                            p: '',
                            t: '**',
                        },
                        value: 'RAGGI          MATTEO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '52',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02400',
                            p: '',
                            t: 'DI',
                        },
                        value: '02400',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'RECH           LUCA',
                            p: '',
                            t: '**',
                        },
                        value: 'RECH           LUCA',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                },
                id: '53',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0459Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0459Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'RIZZINELLI     ALESSANDRO',
                            p: '',
                            t: '**',
                        },
                        value: 'RIZZINELLI     ALESSANDRO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SEL',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SEL',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '54',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SME',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0449Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0449Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'RUBAGOTTI      TULLIO',
                            p: '',
                            t: '**',
                        },
                        value: 'RUBAGOTTI      TULLIO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '55',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02565',
                            p: '',
                            t: 'DI',
                        },
                        value: '02565',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SANDRINI       DAVIDE',
                            p: '',
                            t: '**',
                        },
                        value: 'SANDRINI       DAVIDE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '56',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'SME',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02572',
                            p: '',
                            t: 'DI',
                        },
                        value: '02572',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SANTONI        MARCO',
                            p: '',
                            t: '**',
                        },
                        value: 'SANTONI        MARCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '57',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02590',
                            p: '',
                            t: 'DI',
                        },
                        value: '02590',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SARDO          ANGELO',
                            p: '',
                            t: '**',
                        },
                        value: 'SARDO          ANGELO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '58',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02605',
                            p: '',
                            t: 'DI',
                        },
                        value: '02605',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SCHIOPPETTI    PIERCARLO',
                            p: '',
                            t: '**',
                        },
                        value: 'SCHIOPPETTI    PIERCARLO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '59',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02665',
                            p: '',
                            t: 'DI',
                        },
                        value: '02665',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SPOLETI        FRANCESCO',
                            p: '',
                            t: '**',
                        },
                        value: 'SPOLETI        FRANCESCO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '60',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0433Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0433Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'STELLA         CRISTIAN',
                            p: '',
                            t: '**',
                        },
                        value: 'STELLA         CRISTIAN',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '61',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MSG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '00798',
                            p: '',
                            t: 'DI',
                        },
                        value: '00798',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TALONE         PIETRO',
                            p: '',
                            t: '**',
                        },
                        value: 'TALONE         PIETRO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '62',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMG',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '0461Z',
                            p: '',
                            t: 'DI',
                        },
                        value: '0461Z',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TANGHETTI      WILLIAM',
                            p: '',
                            t: '**',
                        },
                        value: 'TANGHETTI      WILLIAM',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COM',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'COM',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PLG',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'PLG',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MMC',
                    },
                },
                id: '63',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02736',
                            p: '',
                            t: 'DI',
                        },
                        value: '02736',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TORRI          MANUELE',
                            p: '',
                            t: '**',
                        },
                        value: 'TORRI          MANUELE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '64',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02750',
                            p: '',
                            t: 'DI',
                        },
                        value: '02750',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TRAPLETTI      MASSIMO',
                            p: '',
                            t: '**',
                        },
                        value: 'TRAPLETTI      MASSIMO',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '65',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    INZRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§OPER': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'OP',
                        },
                        value: '',
                    },
                    '§SKIL1': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MM1',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'MM1',
                    },
                    '§§COMM': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CM',
                        },
                        value: '',
                    },
                    FINRIS: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '        ',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '',
                    },
                    '§§DIPE': {
                        data: {
                            size: 15,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 15,
                        },
                        isEditable: false,
                        obj: {
                            k: '02900',
                            p: '',
                            t: 'DI',
                        },
                        value: '02900',
                    },
                    COLASS: {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: '',
                    },
                    '§SKIL6': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IMC',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: 'IMC',
                    },
                    DECDIP: {
                        data: {
                            size: 30,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 30,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ZIGLIANI       DANIELE',
                            p: '',
                            t: '**',
                        },
                        value: 'ZIGLIANI       DANIELE',
                    },
                    '§SKIL4': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL5': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                    '§SKIL3': {
                        data: {
                            size: 3,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'X02SKI',
                            t: 'V4',
                        },
                        value: '',
                    },
                },
                id: '66',
                object: '',
                readOnly: true,
            },
        ],
    },
    detailColorCol: 'COLASS',
    detailColumns: ['DECDIP', '§SKIL1'],
    detailDates: ['INZRIS', 'FINRIS'],
    detailHeight: 200,
    detailIdCol: '§§DIPE',
    detailNameCol: 'DECDIP',
    detailPrevDates: [],
    listCellWidth: '300px',
    maxWidth: '90vw',
    phaseColorCol: 'COLFAS',
    phaseColumns: ['DESFAS', 'DATINI', 'DATFIN'],
    phaseColParDep: '',
    phaseDates: ['DATINI', 'DATFIN'],
    phaseIdCol: 'CODFAS',
    phaseNameCol: 'DESFAS',
    phasePrevDates: ['DATINZ', 'DATFPO'],
    readOnly: false,
    showSecondaryDates: true,
    taskColumns: ['R§COMM', 'R§CDCL', 'DATINZ', 'DATPRE'],
    taskDates: ['DATINZ', 'DATPRE'],
    taskHeight: 400,
    taskIdCol: 'R§COMM',
    taskNameCol: 'R§COMM',
    taskPrevDates: ['INZORD', 'DATORD'],
    titleMess: '',
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

function onclick(event) {
    console.log('planner.js onclick', event.detail.taskAction);
    if (event.detail.taskAction == 'onTaskOpening') {
        comp.addPhases('G418', phases);
    }
}

const phases = {
    columns: [
        {
            isEditable: false,
            isKey: false,
            name: 'CODFAS',
            obj: {
                k: '',
                p: '',
                t: 'OP',
            },
            title: 'Fase',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DESFAS',
            title: 'Des\nFase',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATINI',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nInizio',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATINZ',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nInizio P.O',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'SPOINI',
            title: 'GG\nSpostamento',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATFIN',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nFine',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATFPO',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nFine\nPrev.Ordine',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'OREORD',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Ore Prev.\nORDINE',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'BDGORE',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Ore\nPrev.Tot',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'BDGAVOG',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Ore\nPrev.Oggi',
            tooltip: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'DICORE',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Ore\nFatte',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: '£BDGPERC',
            title: '%\nRisp. Prev.',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: '£DICPERC',
            title: '%\nFatte/Prev.Tot',
            tooltip: false,
        },
        {
            decimals: 2,
            isEditable: false,
            isKey: false,
            name: 'NUMRIS',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Num.\nRis.',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'COMPL',
            obj: {
                k: '',
                p: 'SI/NO',
                t: 'V2',
            },
            title: 'Compl.',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'CODDIP',
            title: 'Cod.Fase\nDa cui Dip.',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'FASDIP',
            title: 'Fase\nDa cui Dip.',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'FASDDT',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nFine Fase Dip',
            tooltip: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'CODCOM',
            obj: {
                k: '',
                p: 'MVE',
                t: 'DO',
            },
            title: 'Commessa',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'COLFAS',
            title: 'Sty\nColore',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'GESNOT',
            obj: {
                k: '',
                p: 'ICO',
                t: 'J4',
            },
            title: 'Note',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: '§§AUTN',
            title: 'Aut.Note',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'N§TEVE',
            obj: {
                k: '',
                p: 'P5D',
                t: 'TA',
            },
            title: 'Tipo evento',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'N§NREV',
            objs: [
                {
                    k: '',
                    p: '',
                    t: 'E3',
                },
            ],
            title: 'Numero reg. evento',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATDIC',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Eff.\nInizio',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'DLTINI',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Dif\nGio',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'DIFGIO',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Giorni',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'ORERES',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Ore ancora\nDa fare',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'BDGPERC',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: '%\nRisp. Prev.',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'DICPERC',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: '%\nFatte/Prev.Tot',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'DIFPER',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: '%\nRitardo',
            tooltip: false,
            visible: false,
        },
        {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'STIPER',
            obj: {
                k: '',
                p: '',
                t: 'NR',
            },
            title: 'Stima\nAvanz. %',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'AGGSTI',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nAgg. Stima',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'MODPIA',
            obj: {
                k: '',
                p: 'ICO',
                t: 'J4',
            },
            title: 'Mod.',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'STYAVA',
            title: 'Sty\nSposta',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'ICOAVA',
            obj: {
                k: '',
                p: 'ICO',
                t: 'J4',
            },
            title: 'Sposta',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'CODPMA',
            obj: {
                k: '',
                p: 'XDP',
                t: 'TA',
            },
            title: 'PM\nAssociato',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DESPMA',
            title: 'PM\nAssociato',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'MESAUT',
            obj: {
                k: '',
                p: '',
                t: '**',
            },
            title: 'Aut.',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'STILE',
            obj: {
                k: '',
                p: '',
                t: '**',
            },
            title: 'Stile\nriga',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DTARIL',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nVincolo',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'CDBASA',
            obj: {
                k: '',
                p: '',
                t: 'AR',
            },
            title: 'Basamento',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DATUFF',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Cons.\nDisegno',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'TPDTUF',
            title: 'Des',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'DTAFAB',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nBasamento',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'EDTDDT',
            obj: {
                k: '',
                p: '',
                t: '**',
            },
            title: 'Data\nDecodificata',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: '§§KNO1',
            title: 'Chiave nota 1',
            tooltip: false,
            visible: false,
        },
        {
            isEditable: false,
            isKey: false,
            name: '§§KNO2',
            title: 'Chiave nota 2',
            tooltip: false,
            visible: false,
        },
    ],
    rows: [
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230524',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-05-24',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '65',
                        p: '',
                        t: 'NR',
                    },
                    value: '65',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          907,26000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '907',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '113',
                        p: '',
                        t: 'NR',
                    },
                    value: '113',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                  ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       800 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '800',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20210904',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2021-09-04',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '13-',
                        p: '',
                        t: 'NR',
                    },
                    value: '-13',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '5',
                        p: '',
                        t: '',
                    },
                    value: '5',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P110',
                        p: '',
                        t: '',
                    },
                    value: 'P110',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'ML - FINE REALIZZ.BASAMENTO        ',
                        p: '',
                        t: '',
                    },
                    value: 'ML - FINE REALIZZ.BASAMENTO        ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          800,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '800',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-3',
                        p: '',
                        t: 'NR',
                    },
                    value: '-3',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20210522',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2021-05-22',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230904',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-04',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P410           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P410           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '113%',
                        p: '',
                        t: '',
                    },
                    value: '113%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230512',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-05-12',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MONTAGGIO MECCANICO',
                        p: '',
                        t: '',
                    },
                    value: 'MONTAGGIO MECCANICO',
                    displayedValue: 'MONTAGGIO MECCANICO',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230522',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-05-22',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100%',
                        p: '',
                        t: '',
                    },
                    value: '100%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '12/05/23',
                        p: '',
                        t: '**',
                    },
                    value: '12/05/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '   800 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '800',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230530',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-05-30',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '33',
                        p: '',
                        t: 'NR',
                    },
                    value: '33',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          511,02000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '511',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '106',
                        p: '',
                        t: 'NR',
                    },
                    value: '106',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                  ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       480 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '480',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231013',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-13',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '6-',
                        p: '',
                        t: 'NR',
                    },
                    value: '-6',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '66',
                        p: '',
                        t: '',
                    },
                    value: '66',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P110',
                        p: '',
                        t: '',
                    },
                    value: 'P110',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'ML - FINE REALIZZ.BASAMENTO        ',
                        p: '',
                        t: '',
                    },
                    value: 'ML - FINE REALIZZ.BASAMENTO        ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          480,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '480',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '56',
                        p: '',
                        t: 'NR',
                    },
                    value: '56',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230830',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-08-30',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231013',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-13',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P420           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P420           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '106%',
                        p: '',
                        t: '',
                    },
                    value: '106%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230512',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-05-12',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MONTAGGIO ELETTRICO',
                        p: '',
                        t: '',
                    },
                    value: 'MONTAGGIO ELETTRICO',
                    displayedValue: 'MONTAGGIO ELETTRICO',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230830',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-08-30',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100%',
                        p: '',
                        t: '',
                    },
                    value: '100%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '12/05/23',
                        p: '',
                        t: '**',
                    },
                    value: '12/05/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '   480 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '480',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '15',
                        p: '',
                        t: 'NR',
                    },
                    value: '15',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                    ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '               80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '        80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230925',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-25',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P410',
                        p: '',
                        t: '',
                    },
                    value: 'P410',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - MONTAGGIO MECCANICO           ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - MONTAGGIO MECCANICO           ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           80,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-56',
                        p: '',
                        t: 'NR',
                    },
                    value: '-56',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230905',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-05',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230925',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-25',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P605           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P605           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230904',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-04',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MESSA IN SERV.SW 1',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERV.SW 1',
                    displayedValue: 'MESSA IN SERV.SW 1',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230905',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-05',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100%',
                        p: '',
                        t: '',
                    },
                    value: '100%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '04/09/23',
                        p: '',
                        t: '**',
                    },
                    value: '04/09/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '    80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230803',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-08-03',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '10',
                        p: '',
                        t: 'NR',
                    },
                    value: '10',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          403,18000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '403',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '503',
                        p: '',
                        t: 'NR',
                    },
                    value: '503',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                  ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '        80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231009',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-09',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '403-',
                        p: '',
                        t: 'NR',
                    },
                    value: '-403',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '15',
                        p: '',
                        t: '',
                    },
                    value: '15',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P410',
                        p: '',
                        t: '',
                    },
                    value: 'P410',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - MONTAGGIO MECCANICO           ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - MONTAGGIO MECCANICO           ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           80,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '29',
                        p: '',
                        t: 'NR',
                    },
                    value: '29',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231009',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-09',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P610           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P610           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '503%',
                        p: '',
                        t: '',
                    },
                    value: '503%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230904',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-04',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MESSA IN SERVIZIO MECC.',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERVIZIO MECC.',
                    displayedValue: 'MESSA IN SERVIZIO MECC.',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100%',
                        p: '',
                        t: '',
                    },
                    value: '100%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '04/09/23',
                        p: '',
                        t: '**',
                    },
                    value: '04/09/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '    80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230719',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-07-19',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '32',
                        p: '',
                        t: 'NR',
                    },
                    value: '32',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           39,50000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '98',
                        p: '',
                        t: 'NR',
                    },
                    value: '98',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                  ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '        40 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-11-09',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '2',
                        p: '',
                        t: 'NR',
                    },
                    value: '2',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100',
                        p: '',
                        t: 'NR',
                    },
                    value: '100',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P605',
                        p: '',
                        t: '',
                    },
                    value: 'P605',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - MESSA IN SERV.SW 1            ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - MESSA IN SERV.SW 1            ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           40,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '40',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-11-09',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P630           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P630           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '98%',
                        p: '',
                        t: '',
                    },
                    value: '98%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230925',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-25',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MESSA IN SERV.SW 2',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERV.SW 2',
                    displayedValue: 'MESSA IN SERV.SW 2',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '100%',
                        p: '',
                        t: '',
                    },
                    value: '100%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '25/09/23',
                        p: '',
                        t: '**',
                    },
                    value: '25/09/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '    40 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '5',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '44',
                        p: '',
                        t: 'NR',
                    },
                    value: '44',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: true,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '1',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '1',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#000000',
                        p: '',
                        t: '',
                    },
                    value: '#000000',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                    ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '               80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '        80 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231212',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-12',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '70',
                        p: '',
                        t: 'NR',
                    },
                    value: '70',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '70',
                        p: '',
                        t: 'NR',
                    },
                    value: '70',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P610',
                        p: '',
                        t: '',
                    },
                    value: 'P610',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - MESSA IN SERVIZIO MECC.       ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - MESSA IN SERVIZIO MECC.       ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           80,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-31',
                        p: '',
                        t: 'NR',
                    },
                    value: '-31',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231010',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-10',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231212',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-12',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P710           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P710           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231009',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-09',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'PROVA DI LAVORAZIONE',
                        p: '',
                        t: '',
                    },
                    value: 'PROVA DI LAVORAZIONE',
                    displayedValue: 'PROVA DI LAVORAZIONE',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231010',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-10',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '70%',
                        p: '',
                        t: '',
                    },
                    value: '70%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '09/10/23',
                        p: '',
                        t: '**',
                    },
                    value: '09/10/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '    56 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '56',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '6',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '5',
                        p: '',
                        t: 'NR',
                    },
                    value: '5',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#BDD7EE',
                        p: '',
                        t: '',
                    },
                    value: '#BDD7EE',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#BDD7EE',
                        p: '',
                        t: '',
                    },
                    value: '#BDD7EE',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                    ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '               40 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '        40 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231219',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-19',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P710',
                        p: '',
                        t: '',
                    },
                    value: 'P710',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - PROVA DI LAVORAZIONE          ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - PROVA DI LAVORAZIONE          ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '           40,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231213',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-13',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231219',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-19',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P720           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P720           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231212',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-12',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'COLLAUDO CLIENTE',
                        p: '',
                        t: '',
                    },
                    value: 'COLLAUDO CLIENTE',
                    displayedValue: 'COLLAUDO CLIENTE',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231213',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-13',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '1,00',
                        p: '',
                        t: 'NR',
                    },
                    value: '1.00',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '12/12/23',
                        p: '',
                        t: '**',
                    },
                    value: '12/12/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '7',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20211213',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2021-12-13',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '6',
                        p: '',
                        t: 'NR',
                    },
                    value: '6',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#F8CBAD',
                        p: '',
                        t: '',
                    },
                    value: '#F8CBAD',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#F8CBAD',
                        p: '',
                        t: '',
                    },
                    value: '#F8CBAD',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '            9,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '9',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '5',
                        p: '',
                        t: 'NR',
                    },
                    value: '5',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '              151 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '151',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       160 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240111',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-11',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '5-',
                        p: '',
                        t: 'NR',
                    },
                    value: '-5',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '5',
                        p: '',
                        t: '',
                    },
                    value: '5',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P720',
                        p: '',
                        t: '',
                    },
                    value: 'P720',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - COLLAUDO CLIENTE              ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - COLLAUDO CLIENTE              ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          160,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '485',
                        p: '',
                        t: 'NR',
                    },
                    value: '485',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240104',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-04',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240111',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-11',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P730           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P730           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '5%',
                        p: '',
                        t: '',
                    },
                    value: '5%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20231219',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-19',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'SPEDIZIONE',
                        p: '',
                        t: '',
                    },
                    value: 'SPEDIZIONE',
                    displayedValue: 'SPEDIZIONE',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240104',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-04',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '3,14',
                        p: '',
                        t: 'NR',
                    },
                    value: '3.14',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '19/12/23',
                        p: '',
                        t: '**',
                    },
                    value: '19/12/23',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '8',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'XDP',
                        t: 'TA',
                    },
                    value: '',
                },
                DATDIC: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFGIO: {
                    data: {
                        size: 7,
                        helperEnabled: false,
                        maxLength: 7,
                        integers: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '21',
                        p: '',
                        t: 'NR',
                    },
                    value: '21',
                },
                TPDTUF: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '                                   ',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                CODCOM: {
                    cssClass: 'strong-text',
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G418',
                        p: 'MVE',
                        t: 'DO',
                    },
                    value: 'G418',
                },
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                '§§AUTN': {
                    data: {
                        size: 1,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                COMPL: {
                    cssClass: 'strong-text',
                    data: {
                        size: 1,
                        helperEnabled: false,
                        checked: false,
                        hiddenCounter: true,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'SI/NO',
                        t: 'V2',
                    },
                    value: '',
                },
                '§§KNO1': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#7030A0',
                        p: '',
                        t: '',
                    },
                    value: '#7030A0',
                },
                COLFAS: {
                    data: {
                        size: 10,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#7030A0',
                        p: '',
                        t: '',
                    },
                    value: '#7030A0',
                },
                DICORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '                    ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '   ',
                        p: 'P5D',
                        t: 'TA',
                    },
                    value: '',
                },
                DICPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                '§§KNO2': {
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                ORERES: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '              320 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                OREORD: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       320 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                DESPMA: {
                    data: {
                        size: 30,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                DATFIN: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240228',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-02-28',
                },
                STIPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                DIFPER: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                MODPIA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                BDGPERC: {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        maxLength: 6,
                        integers: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                SPOINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '13',
                        p: '',
                        t: '',
                    },
                    value: '13',
                },
                MESAUT: {
                    data: {
                        size: 50,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 50,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                CODDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P730',
                        p: '',
                        t: '',
                    },
                    value: 'P730',
                },
                FASDIP: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'FS - SPEDIZIONE                    ',
                        p: '',
                        t: '',
                    },
                    value: 'FS - SPEDIZIONE                    ',
                },
                CDBASA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '               ',
                        p: '',
                        t: 'AR',
                    },
                    value: '',
                },
                BDGORE: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '          320,00000 ',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                DLTINI: {
                    data: {
                        size: 5,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DATINI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240131',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-31',
                },
                DATFPO: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240228',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-02-28',
                },
                DTARIL: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '        ',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                CODFAS: {
                    cssClass: 'strong-text',
                    data: {
                        size: 15,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'P750           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P750           ',
                },
                '£DICPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                ICOAVA: {
                    cssClass: 'strong-text',
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: 'ICO',
                        t: 'J4',
                    },
                },
                FASDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240111',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-11',
                },
                AGGSTI: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                STILE: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                DESFAS: {
                    data: {
                        size: 35,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'INSTALLAZIONE',
                        p: '',
                        t: '',
                    },
                    value: 'INSTALLAZIONE',
                    displayedValue: 'INSTALLAZIONE',
                },
                DATINZ: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20240131',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-31',
                },
                '£BDGPERC': {
                    data: {
                        size: 6,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0%',
                        p: '',
                        t: '',
                    },
                    value: '0%',
                },
                NUMRIS: {
                    data: {
                        size: 5,
                        decimals: 2,
                        helperEnabled: false,
                        maxLength: 5,
                        integers: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '1,90',
                        p: '',
                        t: 'NR',
                    },
                    value: '1.90',
                },
                DATUFF: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '00000000',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '',
                },
                EDTDDT: {
                    data: {
                        size: 8,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '11/01/24',
                        p: '',
                        t: '**',
                    },
                    value: '11/01/24',
                },
                'N§NREV': {
                    cssClass: 'strong-text',
                    data: {
                        size: 9,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 9,
                    },
                    isEditable: false,
                    obj: {
                        k: '000000000',
                        p: '   ',
                        t: 'E3',
                    },
                    value: '000000000',
                },
                BDGAVOG: {
                    data: {
                        size: 13,
                        helperEnabled: false,
                        maxLength: 13,
                        integers: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '       ',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                STYAVA: {
                    data: {
                        size: 3,
                        helperEnabled: false,
                        hiddenCounter: true,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
            },
            id: '9',
            object: '',
            readOnly: true,
        },
    ],
};

function dummyFilter() {
    const filter = document.createElement('div');
    filter.innerText = 'Filter placeholder';
    return filter;
}
