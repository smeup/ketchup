const comp = document.getElementById('planner');
const dropdownComp = document.getElementById('dropdown');

comp.addEventListener('kup-planner-click', onclick);
comp.addEventListener('kup-planner-didunload', (e) => {
    console.log('Planner removed', e);
});
document.addEventListener('kup-button-click', () => {
    console.log('Removing planner');
    comp.remove();
    dropdownComp.remove();
});

dropdownComp.addEventListener('kup-dropdownbutton-change', onPlannerChange)

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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                title: 'Data Fase\n',
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
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
                        isEditable: false,
                        obj: {
                            k: 'ISVAL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ISVAL',
                    },
                    TIPRIT: {
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
                            checked: true,
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
                        isEditable: false,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        isEditable: false,
                        obj: {
                            k: '20221107',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-07',
                    },
                    'R§TCCL': {
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        isEditable: false,
                        obj: {
                            k: '20221107',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-07',
                    },
                    DIFFGG: {
                        isEditable: false,
                        obj: {
                            k: '445',
                            p: '',
                            t: 'NR',
                        },
                        value: '445',
                    },
                    INZORD: {
                        isEditable: false,
                        obj: {
                            k: '20221017',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-17',
                    },
                    CODDOC: {
                        isEditable: false,
                        obj: {
                            k: 'G503      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G503      ',
                    },
                    DATORD: {
                        isEditable: false,
                        obj: {
                            k: '20221107',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-07',
                    },
                    XXSEMA: {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        isEditable: false,
                        obj: {
                            k: 'G503      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G503      0001',
                    },
                    'R§TRIG': {
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        isEditable: false,
                        obj: {
                            k: '20221017',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-17',
                    },
                    'R£COMM': {
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-24-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-24-125-CNC',
                        displayedValue: 'MAC.FMRSI-24-125-CNC',
                    },
                    'R§TDOC': {
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        isEditable: false,
                        obj: {
                            k: 'G503',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G503',
                    },
                    'R£CDCL': {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    'R§COMM': {
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
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        isEditable: false,
                        obj: {
                            k: 'SWAGEL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'SWAGEL',
                    },
                    TIPRIT: {
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
                            checked: true,
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
                        isEditable: false,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        isEditable: false,
                        obj: {
                            k: '20221116',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-16',
                    },
                    'R§TCCL': {
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        isEditable: false,
                        obj: {
                            k: '20221116',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-16',
                    },
                    DIFFGG: {
                        isEditable: false,
                        obj: {
                            k: '485',
                            p: '',
                            t: 'NR',
                        },
                        value: '485',
                    },
                    INZORD: {
                        isEditable: false,
                        obj: {
                            k: '20221020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-20',
                    },
                    CODDOC: {
                        isEditable: false,
                        obj: {
                            k: 'G504      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G504      ',
                    },
                    DATORD: {
                        isEditable: false,
                        obj: {
                            k: '20221116',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-16',
                    },
                    XXSEMA: {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        isEditable: false,
                        obj: {
                            k: 'G504      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G504      0001',
                    },
                    'R§TRIG': {
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        isEditable: false,
                        obj: {
                            k: '20221020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-20',
                    },
                    'R£COMM': {
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-36-150-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-36-150-125-CNC',
                        displayedValue: 'MAC.FMRSI-36-150-125-CNC',
                    },
                    'R§TDOC': {
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        isEditable: false,
                        obj: {
                            k: 'G504',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G504',
                    },
                    'R£CDCL': {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    'R§COMM': {
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
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        isEditable: false,
                        obj: {
                            k: 'CALEFF',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'CALEFF',
                    },
                    TIPRIT: {
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
                            checked: true,
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
                        isEditable: false,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        isEditable: false,
                        obj: {
                            k: '20220823',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-23',
                    },
                    'R§TCCL': {
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        isEditable: false,
                        obj: {
                            k: '20220823',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-23',
                    },
                    DIFFGG: {
                        isEditable: false,
                        obj: {
                            k: '633',
                            p: '',
                            t: 'NR',
                        },
                        value: '633',
                    },
                    INZORD: {
                        isEditable: false,
                        obj: {
                            k: '20220802',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-02',
                    },
                    CODDOC: {
                        isEditable: false,
                        obj: {
                            k: 'G505      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G505      ',
                    },
                    DATORD: {
                        isEditable: false,
                        obj: {
                            k: '20220823',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-23',
                    },
                    XXSEMA: {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        isEditable: false,
                        obj: {
                            k: 'G505      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G505      0001',
                    },
                    'R§TRIG': {
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        isEditable: false,
                        obj: {
                            k: '20220802',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-02',
                    },
                    'R£COMM': {
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-30-150GT2-150GT4-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-30-150GT2-150GT4-CNC',
                        displayedValue: 'MAC.FMRSI-30-150GT2-150GT4-CNC',
                    },
                    'R§TDOC': {
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        isEditable: false,
                        obj: {
                            k: 'G505',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G505',
                    },
                    'R£CDCL': {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    'R§COMM': {
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
                id: '3',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        isEditable: false,
                        obj: {
                            k: 'KARAUF',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'KARAUF',
                    },
                    TIPRIT: {
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
                            checked: true,
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
                        isEditable: false,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        isEditable: false,
                        obj: {
                            k: '20221123',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-23',
                    },
                    'R§TCCL': {
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        isEditable: false,
                        obj: {
                            k: '20221123',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-23',
                    },
                    DIFFGG: {
                        isEditable: false,
                        obj: {
                            k: '373',
                            p: '',
                            t: 'NR',
                        },
                        value: '373',
                    },
                    INZORD: {
                        isEditable: false,
                        obj: {
                            k: '20221020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-20',
                    },
                    CODDOC: {
                        isEditable: false,
                        obj: {
                            k: 'G507      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G507      ',
                    },
                    DATORD: {
                        isEditable: false,
                        obj: {
                            k: '20221123',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-23',
                    },
                    XXSEMA: {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        isEditable: false,
                        obj: {
                            k: 'G507      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G507      0001',
                    },
                    'R§TRIG': {
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        isEditable: false,
                        obj: {
                            k: '20221020',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-10-20',
                    },
                    'R£COMM': {
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMF-15-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMF-15-125-CNC',
                        displayedValue: 'MAC.FMF-15-125-CNC',
                    },
                    'R§TDOC': {
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        isEditable: false,
                        obj: {
                            k: 'G507',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G507',
                    },
                    'R£CDCL': {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    'R§COMM': {
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
                id: '4',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    'R§CDCL': {
                        isEditable: false,
                        obj: {
                            k: 'WONDER',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'WONDER',
                    },
                    TIPRIT: {
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
                            checked: true,
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
                        isEditable: false,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    DATPRE: {
                        isEditable: false,
                        obj: {
                            k: '20221202',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-02',
                    },
                    'R§TCCL': {
                        isEditable: false,
                        obj: {
                            k: 'CLP',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'CLP',
                    },
                    DATOPE: {
                        isEditable: false,
                        obj: {
                            k: '20221202',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-02',
                    },
                    DIFFGG: {
                        isEditable: false,
                        obj: {
                            k: '448',
                            p: '',
                            t: 'NR',
                        },
                        value: '448',
                    },
                    INZORD: {
                        isEditable: false,
                        obj: {
                            k: '20221114',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-14',
                    },
                    CODDOC: {
                        isEditable: false,
                        obj: {
                            k: 'G508      ',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G508      ',
                    },
                    DATORD: {
                        isEditable: false,
                        obj: {
                            k: '20221202',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-02',
                    },
                    XXSEMA: {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: 'IMG',
                            t: 'J4',
                        },
                        value: '',
                    },
                    CODRIG: {
                        isEditable: false,
                        obj: {
                            k: 'G508      0001',
                            p: 'MVE',
                            t: 'DR',
                        },
                        value: 'G508      0001',
                    },
                    'R§TRIG': {
                        isEditable: false,
                        obj: {
                            k: 'ACN',
                            p: 'V5B',
                            t: 'TA',
                        },
                        value: 'ACN',
                    },
                    DATINZ: {
                        isEditable: false,
                        obj: {
                            k: '20221114',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-11-14',
                    },
                    'R£COMM': {
                        isEditable: false,
                        obj: {
                            k: 'MAC.FMRSI-15-120HS-125-CNC',
                            p: '',
                            t: '',
                        },
                        value: 'MAC.FMRSI-15-120HS-125-CNC',
                        displayedValue: 'MAC.FMRSI-15-120HS-125-CNC',
                    },
                    'R§TDOC': {
                        isEditable: false,
                        obj: {
                            k: 'MVE',
                            p: 'V5D',
                            t: 'TA',
                        },
                        value: 'MVE',
                    },
                    'R§NDOC': {
                        isEditable: false,
                        obj: {
                            k: 'G508',
                            p: 'MVE',
                            t: 'DO',
                        },
                        value: 'G508',
                    },
                    'R£CDCL': {
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    'R§COMM': {
                        isEditable: false,
                        obj: {
                            k: 'G508',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G508',
                        displayedValue: 'G508',
                    },
                },
                cssClass: 'clickable',
                id: '5',
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
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§§NOME',
                title: 'Cognome Nome',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL1',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 1',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL2',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 2',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL3',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 3',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL4',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 4',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL5',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 5',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: '§SKIL6',
                obj: {
                    k: '',
                    p: '',
                    t: 'CC',
                },
                title: 'Skill 6',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'BACRIF',
                title: 'Bacino di riferimento',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INZFAS',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Iniz.Fase',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'FINFAS',
                obj: {
                    k: '',
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Fine Fase',
                tooltip: true,
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
                tooltip: true,
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
                tooltip: true,
            },
        ],
        rows: [
            {
                cells: {
                    INZRIS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                        displayedValue: 'IEC',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-01',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00152',
                            p: '',
                            t: 'DI',
                        },
                        value: '00152',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BERARDI MARCELLO',
                            p: '',
                            t: '',
                        },
                        value: 'BERARDI MARCELLO',
                        displayedValue: 'BERARDI MARCELLO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220812',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-08-12',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                        displayedValue: 'IEC',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00152',
                            p: '',
                            t: 'DI',
                        },
                        value: '00152',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BERARDI MARCELLO',
                            p: '',
                            t: '',
                        },
                        value: 'BERARDI MARCELLO',
                        displayedValue: 'BERARDI MARCELLO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00328',
                            p: '',
                            t: 'DI',
                        },
                        value: '00328',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FATTORI FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FATTORI FABIO',
                        displayedValue: 'FATTORI FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                    INZRIS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00329',
                            p: '',
                            t: 'DI',
                        },
                        value: '00329',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FATTOR FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FATTOR FABIO',
                        displayedValue: 'FATTOR FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                    INZRIS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00330',
                            p: '',
                            t: 'DI',
                        },
                        value: '00330',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FATT FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FATT FABIO',
                        displayedValue: 'FATT FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00331',
                            p: '',
                            t: 'DI',
                        },
                        value: '00331',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FAI FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FAI FABIO',
                        displayedValue: 'FAI FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                    INZRIS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00332',
                            p: '',
                            t: 'DI',
                        },
                        value: '00332',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FAB FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FAB FABIO',
                        displayedValue: 'FAB FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§OPER': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MSG',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MSG',
                        displayedValue: 'MSG',
                    },
                    INZFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20220602',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-06-02',
                    },
                    '§§COMM': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
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
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§DIPE': {
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: '00333',
                            p: '',
                            t: 'DI',
                        },
                        value: '00333',
                    },
                    FINFAS: {
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            k: '20221231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-31',
                    },
                    '§§NOME': {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FAM FABIO',
                            p: '',
                            t: '',
                        },
                        value: 'FAM FABIO',
                        displayedValue: 'FAM FABIO',
                    },
                    BACRIF: {
                        data: {
                            helperEnabled: false,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COLEL',
                            p: '',
                            t: '',
                        },
                        value: 'COLEL',
                        displayedValue: 'COLEL',
                    },
                    '§SKIL6': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL4': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'IEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'IEC',
                    },
                    '§SKIL5': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                    '§SKIL2': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MEC',
                            p: '',
                            t: 'CC',
                        },
                        value: 'MEC',
                    },
                    '§SKIL3': {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: false,
                        obj: {
                            k: '',
                            p: '',
                            t: 'CC',
                        },
                        value: '',
                    },
                },
                id: '8',
                object: '',
                readOnly: true,
            },
        ],
    },
    detailColorCol: '',
    detailColumns: ['§§NOME', 'BACRIF', '§SKIL1'],
    detailDates: ['INZRIS', 'FINRIS'],
    detailHeight: 200,
    detailIdCol: '§§DIPE',
    detailNameCol: '§§DIPE',
    detailPrevDates: ['INZFAS', 'FINFAS'],
    listCellWidth: '300px',
    maxWidth: '90vw',
    phaseColorCol: 'COLFAS',
    phaseColumns: ['DESFAS', 'DATINI', 'DATFIN'],
    phaseDates: ['DATINI', 'DATFIN'],
    phaseIdCol: 'CODFAS',
    phaseNameCol: 'DESFAS',
    phasePrevDates: ['DATINZ', 'DATFPO'],
    showSecondaryDates: true,
    taskColumns: ['R§COMM', 'R£COMM'],
    taskDates: ['DATINZ', 'DATPRE'],
    taskHeight: 300,
    taskIdCol: 'R§COMM',
    taskNameCol: 'R§COMM',
    taskPrevDates: ['INZORD', 'DATORD'],
    titleMess: '',
    viewMode: 'year',
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
            tooltip: true,
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
            name: 'GESNOT',
            obj: {
                k: '',
                p: 'ICO',
                t: 'J4',
            },
            title: 'Note',
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
            tooltip: true,
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
            tooltip: true,
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
            name: 'DATDIC',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Eff.\nInizio',
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
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
            name: 'MODPIA',
            obj: {
                k: '',
                p: 'ICO',
                t: 'J4',
            },
            title: 'Mod.',
            tooltip: false,
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
            name: 'DTARIL',
            obj: {
                k: '',
                p: '*YYMD',
                t: 'D8',
            },
            title: 'Data\nVincolo',
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'TPDTUF',
            title: 'Des',
            tooltip: false,
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
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
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
            tooltip: true,
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
            name: 'CODPMA',
            obj: {
                k: '',
                p: 'XDP',
                t: 'TA',
            },
            title: 'PM\nAssociato',
            tooltip: true,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '61',
                        p: '',
                        t: 'NR',
                    },
                    value: '61',
                },
                TPDTUF: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#ED7D31',
                        p: '',
                        t: '',
                    },
                    value: '#ED7D31',
                },
                COLFAS: {
                    data: {
                        helperEnabled: false,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#ED7D31',
                        p: '',
                        t: '',
                    },
                    value: '#ED7D31',
                },
                DICORE: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '1440',
                        p: '',
                        t: 'NR',
                    },
                    value: '1,440',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '1440',
                        p: '',
                        t: 'NR',
                    },
                    value: '1,440',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-01-09',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '1440.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '1,440',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-108',
                        p: '',
                        t: 'NR',
                    },
                    value: '-108',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-01-09',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MONTAGGIO MECCANICO                ',
                        p: '',
                        t: '',
                    },
                    value: 'MONTAGGIO MECCANICO                ',
                    displayedValue: 'MONTAGGIO MECCANICO                ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '3.75',
                        p: '',
                        t: 'NR',
                    },
                    value: '3.75',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '1440',
                        p: '',
                        t: 'NR',
                    },
                    value: '1,440',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '46',
                        p: '',
                        t: 'NR',
                    },
                    value: '46',
                },
                TPDTUF: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#FF0000',
                        p: '',
                        t: '',
                    },
                    value: '#FF0000',
                },
                COLFAS: {
                    data: {
                        helperEnabled: false,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#FF0000',
                        p: '',
                        t: '',
                    },
                    value: '#FF0000',
                },
                DICORE: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '720',
                        p: '',
                        t: 'NR',
                    },
                    value: '720',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '720',
                        p: '',
                        t: 'NR',
                    },
                    value: '720',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-01-09',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '720.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '720',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-93',
                        p: '',
                        t: 'NR',
                    },
                    value: '-93',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221107',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-07',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20230109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-01-09',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MONTAGGIO ELETTRICO                ',
                        p: '',
                        t: '',
                    },
                    value: 'MONTAGGIO ELETTRICO                ',
                    displayedValue: 'MONTAGGIO ELETTRICO                ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221107',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-07',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '1.87',
                        p: '',
                        t: 'NR',
                    },
                    value: '1.87',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '720',
                        p: '',
                        t: 'NR',
                    },
                    value: '720',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '2',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '30',
                        p: '',
                        t: 'NR',
                    },
                    value: '30',
                },
                TPDTUF: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '120',
                        p: '',
                        t: 'NR',
                    },
                    value: '120',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221125',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-25',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-108',
                        p: '',
                        t: 'NR',
                    },
                    value: '-108',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221125',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-25',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'MESSA IN SERV. SW 2                ',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERV. SW 2                ',
                    displayedValue: 'MESSA IN SERV. SW 2                ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '0.06',
                        p: '',
                        t: 'NR',
                    },
                    value: '0.06',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '120',
                        p: '',
                        t: 'NR',
                    },
                    value: '120',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '3',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
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
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: '#FFFF00',
                        p: '',
                        t: '',
                    },
                    value: '#FFFF00',
                },
                COLFAS: {
                    data: {
                        helperEnabled: false,
                        maxLength: 10,
                    },
                    isEditable: false,
                    obj: {
                        k: '#FFFF00',
                        p: '',
                        t: '',
                    },
                    value: '#FFFF00',
                },
                DICORE: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '160',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '80',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221028',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-28',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '160.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-108',
                        p: '',
                        t: 'NR',
                    },
                    value: '-108',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221028',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-28',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'PROVA DI LAVORAZIONE               ',
                        p: '',
                        t: '',
                    },
                    value: 'PROVA DI LAVORAZIONE               ',
                    displayedValue: 'PROVA DI LAVORAZIONE               ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '0.20',
                        p: '',
                        t: 'NR',
                    },
                    value: '0.20',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '80',
                        p: '',
                        t: 'NR',
                    },
                    value: '80',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '4',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
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
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221021',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-21',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-108',
                        p: '',
                        t: 'NR',
                    },
                    value: '-108',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221021',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-21',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'COLLAUDO CLIENTE                   ',
                        p: '',
                        t: '',
                    },
                    value: 'COLLAUDO CLIENTE                   ',
                    displayedValue: 'COLLAUDO CLIENTE                   ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '0.04',
                        p: '',
                        t: 'NR',
                    },
                    value: '0.04',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '40',
                        p: '',
                        t: 'NR',
                    },
                    value: '40',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '5',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
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
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '200',
                        p: '',
                        t: 'NR',
                    },
                    value: '200',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '160',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221027',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-27',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '3',
                        p: '',
                        t: '',
                    },
                    value: '3',
                },
                MESAUT: {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '200.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '200',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-105',
                        p: '',
                        t: 'NR',
                    },
                    value: '-105',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221020',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-20',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221027',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-27',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'SPEDIZIONE                         ',
                        p: '',
                        t: '',
                    },
                    value: 'SPEDIZIONE                         ',
                    displayedValue: 'SPEDIZIONE                         ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221020',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-20',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '0.25',
                        p: '',
                        t: 'NR',
                    },
                    value: '0.25',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '160',
                        p: '',
                        t: 'NR',
                    },
                    value: '160',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '6',
            object: '',
            readOnly: true,
        },
        {
            cells: {
                CODPMA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 7,
                    },
                    isEditable: false,
                    obj: {
                        k: '16',
                        p: '',
                        t: 'NR',
                    },
                    value: '16',
                },
                TPDTUF: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                GESNOT: {
                    cssClass: 'strong-text',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        checked: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
                        maxLength: 15,
                    },
                    isEditable: false,
                    obj: {
                        k: 'G503      0001',
                        p: '',
                        t: '',
                    },
                    value: 'G503      0001',
                },
                ORERES: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '320',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '320',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221107',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-07',
                },
                STIPER: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
                        k: '0',
                        p: '',
                        t: 'NR',
                    },
                    value: '',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 6,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '',
                    },
                    value: '',
                },
                FASDIP: {
                    data: {
                        helperEnabled: false,
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
                CDBASA: {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '320.00000',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '-108',
                        p: '',
                        t: 'NR',
                    },
                    value: '-108',
                },
                DATINI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                DATFPO: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221107',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-11-07',
                },
                DTARIL: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                AGGSTI: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 35,
                    },
                    isEditable: false,
                    obj: {
                        k: 'INSTALLAZIONE                      ',
                        p: '',
                        t: '',
                    },
                    value: 'INSTALLAZIONE                      ',
                    displayedValue: 'INSTALLAZIONE                      ',
                },
                DATINZ: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '20221017',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2022-10-17',
                },
                '£BDGPERC': {
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
                        k: '0.43',
                        p: '',
                        t: 'NR',
                    },
                    value: '0.43',
                },
                DATUFF: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
                        k: '',
                        p: '',
                        t: '**',
                    },
                    value: '',
                },
                'N§NREV': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
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
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        k: '320',
                        p: '',
                        t: 'NR',
                    },
                    value: '320',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
                        k: 'RED',
                        p: '',
                        t: '',
                    },
                    value: 'RED',
                },
            },
            id: '7',
            object: '',
            readOnly: true,
        },
    ],
};

// planner data

function dummyFilter() {
    const filter = document.createElement("div");
    filter.innerText = "Filter placeholder";
    return filter;
}

const onScrollX = (x) => {
    console.log("Planner scrollX event", x);
};

const onScrollY = (value) => {
    console.log("SCROLL Y", value);
}

const mainGanttDoubleViewHandler = (checked) => {
    console.log("Main Gantt double view slider event", checked);
};

const mainGanttClickHandler = (row) => {
    console.log("Main Gantt click event", row);
};

// planner 1

const mainGanttPlanner1PropsMock = {
    readOnly: false,
    filter: dummyFilter(),
    items: [
        {
            id: "1",
            name: "G456",
            startDate: "2021-10-25",
            endDate: "2023-11-20",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            valuesToShow: ["G456", "#START#", "#END#"],
            icon: {
                color: "#FF0000",
                url: "http://localhost:3000/assets/svg/alert-circle.svg",
            },
            phases: [
                {
                    id: "P410           ",
                    name: "P410           ",
                    startDate: "2023-03-10",
                    endDate: "2023-10-17",
                    secondaryStartDate: "2022-11-04",
                    secondaryEndDate: "2022-11-07",
                    color: "#ED7D31",
                    selectedColor: "#ED7D31",
                    valuesToShow: ["P410", "#START#", "#END#"],
                    dependencies: [],
                    type: "task",
                    icon: {
                        color: "#FF0000",
                        url: "http://localhost:3000/assets/svg/alert-circle.svg",
                    },
                },
                {
                    id: "P420           ",
                    name: "P420           ",
                    startDate: "2022-11-21",
                    endDate: "2023-03-10",
                    secondaryStartDate: "2023-01-13",
                    secondaryEndDate: "2022-11-11",
                    color: "#FF0000",
                    selectedColor: "#FF0000",
                    valuesToShow: ["P420", "#START#", "#END#"],
                    dependencies: [],
                    type: "task",
                },
                {
                    id: "P610           ",
                    name: "P610           ",
                    startDate: "2023-03-27",
                    endDate: "2023-04-14",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2023-01-02",
                    color: "#70AD47",
                    selectedColor: "#70AD47",
                    valuesToShow: ["P610", "#START#", "#END#"],
                    dependencies: ["P410           "],
                    type: "task",
                },
                {
                    id: "P620           ",
                    name: "P620           ",
                    startDate: "2023-03-27",
                    endDate: "2023-04-14",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2022-11-30",
                    color: "#C6E0B4",
                    selectedColor: "#C6E0B4",
                    valuesToShow: ["P620", "#START#", "#END#"],
                    dependencies: ["P410           "],
                    type: "task",
                },
                {
                    id: "P630           ",
                    name: "P630           ",
                    startDate: "2023-03-20",
                    endDate: "2023-04-07",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2022-12-21",
                    color: "#BDD7EE",
                    selectedColor: "#BDD7EE",
                    valuesToShow: ["P630", "#START#", "#END#"],
                    dependencies: ["P410           "],
                    type: "task",
                },
                {
                    id: "P710           ",
                    name: "P710           ",
                    startDate: "2023-04-17",
                    endDate: "2023-04-28",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2023-01-10",
                    color: "#FFFF00",
                    selectedColor: "#FFFF00",
                    valuesToShow: ["P710", "#START#", "#END#"],
                    dependencies: ["P610           "],
                    type: "task",
                },
                {
                    id: "P720           ",
                    name: "P720           ",
                    startDate: "2023-05-02",
                    endDate: "2023-05-10",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2023-01-17",
                    color: "#BDD7EE",
                    selectedColor: "#BDD7EE",
                    valuesToShow: ["P720", "#START#", "#END#"],
                    dependencies: ["P710           "],
                    type: "task",
                },
                {
                    id: "P730           ",
                    name: "P730           ",
                    startDate: "2023-05-17",
                    endDate: "2023-05-30",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2023-01-31",
                    color: "#F8CBAD",
                    selectedColor: "#F8CBAD",
                    valuesToShow: ["P730", "#START#", "#END#"],
                    dependencies: ["P720           "],
                    type: "task",
                },
                {
                    id: "P750           ",
                    name: "P750           ",
                    startDate: "2023-05-31",
                    endDate: "2023-07-04",
                    secondaryStartDate: "2023-03-01",
                    secondaryEndDate: "2023-03-07",
                    color: "#7030A0",
                    selectedColor: "#7030A0",
                    valuesToShow: ["P750", "#START#", "#END#"],
                    dependencies: ["P730           "],
                    type: "task",
                },
            ],
        },
        {
            id: "2",
            name: "G460",
            startDate: "2021-10-20",
            endDate: "2023-04-07",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            valuesToShow: ["G460", "#START#", "#END#"],
            phases: [
                {
                    id: "G460_P410           ",
                    name: "FS - MONTAGGIO MECCANICO           ",
                    startDate: "2023-03-06",
                    endDate: "2023-06-30",
                    secondaryStartDate: "2022-06-13",
                    secondaryEndDate: "2022-11-04",
                    type: "task",
                    color: "#ED7D31",
                    selectedColor: "#ED7D31",
                    valuesToShow: ["#START#", "#END#"],
                },
                {
                    id: "G460_P420           ",
                    name: "FS - MONTAGGIO ELETTRICO           ",
                    startDate: "2022-11-21",
                    endDate: "2023-02-24",
                    secondaryStartDate: "2022-08-29",
                    secondaryEndDate: "2022-11-11",
                    type: "task",
                    color: "#FF0000",
                    selectedColor: "#FF0000",
                    valuesToShow: ["#START#", "#END#"],
                },
                {
                    id: "G460_P610           ",
                    name: "FS - MESSA IN SERVIZIO MECC.       ",
                    startDate: "2023-07-17",
                    endDate: "2023-08-04",
                    secondaryStartDate: "2022-11-21",
                    secondaryEndDate: "2023-01-02",
                    type: "task",
                    color: "#70AD47",
                    selectedColor: "#70AD47",
                    valuesToShow: ["#START#", "#END#"],
                },
            ],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    showSecondaryDates: false,
    ganttHeight: 200,
    hideDependencies: true,
    title: "Main",
    initialScrollX: 12,
    onClick: mainGanttClickHandler,
};

const secondaryGanttPlanner1PropsMock = {
    readOnly: true,
    initialScrollY: 220,
    items: [
        {
            id: "RIS1",
            name: "Risorsa 1",
            schedule: [
                { startDate: "2023-01-01", endDate: "2023-02-01", color: "#ff0000" },
                {
                    startDate: "2023-03-01",
                    endDate: "2023-04-01",
                    color: "#ff0000",
                    icon: {
                        color: "#00ff00",
                        url: "http://localhost:3000/assets/svg/alert-circle.svg",
                    },
                },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 1"],
        },
        {
            id: "RIS2",
            name: "Risorsa 2",
            schedule: [
                { startDate: "2023-01-10", endDate: "2023-02-10", color: "#00ff00" },
                {
                    startDate: "2023-03-10",
                    endDate: "2023-04-10",
                    color: "#0000ff",
                    icon: {
                        color: "#00ff00",
                        url: "http://localhost:3000/assets/svg/alert-circle.svg",
                    },
                },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 2"],
        },
        {
            id: "RIS3",
            name: "Risorsa 3",
            schedule: [
                { startDate: "2023-01-15", endDate: "2023-02-15" /*color: "#ff0000"*/ },
                { startDate: "2023-03-15", endDate: "2023-04-15" /*color: "#ff0000"*/ },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 3"],
        },
        {
            id: "RIS4",
            name: "Risorsa 4",
            schedule: [
                { startDate: "2023-01-11", endDate: "2023-02-01", color: "#ff0000" },
                { startDate: "2023-03-11", endDate: "2023-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 4"],
        },
        {
            id: "RIS5",
            name: "Risorsa 5",
            schedule: [
                { startDate: "2023-01-01", endDate: "2023-02-01", color: "#ff0000" },
                { startDate: "2023-03-01", endDate: "2023-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 5"],
        },
        {
            id: "RIS6",
            name: "Risorsa 6",
            schedule: [
                { startDate: "2023-01-20", endDate: "2023-02-20", color: "#ff0000" },
                { startDate: "2023-03-20", endDate: "2023-04-20", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 6"],
        },
        {
            id: "RIS7",
            name: "Risorsa 7",
            schedule: [
                { startDate: "2023-01-01", endDate: "2023-02-01", color: "#ff0000" },
                { startDate: "2023-03-01", endDate: "2023-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 7"],
        },
        {
            id: "RIS8",
            name: "Risorsa 8",
            schedule: [
                { startDate: "2023-01-27", endDate: "2023-02-01", color: "#ff0000" },
                { startDate: "2023-03-27", endDate: "2023-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 8"],
        },
        {
            id: "RIS9",
            name: "Risorsa 9",
            schedule: [
                { startDate: "2023-01-01", endDate: "2023-02-01", color: "#ff0000" },
                { startDate: "2023-03-01", endDate: "2023-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 9"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    ganttHeight: 200,
    hideDependencies: true,
    filter: dummyFilter(),
    title: "Detail",
};

// planner 2
const mainGanttPlanner2PropsMock = {
    filter: dummyFilter(),
    items: [
        {
            id: "1",
            name: "G456",
            startDate: "2023-01-01",
            endDate: "2023-12-31",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G456", "#START#", "#END#"],
        },
        {
            id: "2",
            name: "G460",
            startDate: "2023-01-01",
            endDate: "2023-12-31",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G460", "#START#", "#END#"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    showSecondaryDates: false,
    ganttHeight: 350,
    hideDependencies: true,
    title: "Secondary",
};

const secondaryGanttPlanner2PropsMock = {
    filter: dummyFilter(),
    items: [
        {
            id: "RIS1",
            name: "Risorsa 1",
            schedule: [
                { startDate: "2023-01-01", endDate: "2027-02-01", color: "#ff0000" },
                { startDate: "2023-03-01", endDate: "2027-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 1"],
        },
        {
            id: "RIS2",
            name: "Risorsa 2",
            schedule: [
                { startDate: "2023-01-10", endDate: "2023-02-10", color: "#ff0000" },
                { startDate: "2023-03-10", endDate: "2023-04-10", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 2"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    ganttHeight: 200,
    hideDependencies: true,
    title: "Detail",
};

// planner 3
const mainGanttPlanner3PropsMock = {
    filter: dummyFilter(),
    items: [
        {
            id: "1",
            name: "G459",
            startDate: "2023-01-01",
            endDate: "2023-01-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G459", "#START#", "#END#"],
        },
        {
            id: "2",
            name: "G460",
            startDate: "2023-02-01",
            endDate: "2023-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G460", "#START#", "#END#"],
        },
        {
            id: "3",
            name: "G461",
            startDate: "2023-03-01",
            endDate: "2023-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G461", "#START#", "#END#"],
        },
        {
            id: "4",
            name: "G462",
            startDate: "2023-04-01",
            endDate: "2023-04-30",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G462", "#START#", "#END#"],
        },
        {
            id: "5",
            name: "G463",
            startDate: "2023-05-01",
            endDate: "2023-05-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G463", "#START#", "#END#"],
        },
        {
            id: "6",
            name: "G464",
            startDate: "2023-06-01",
            endDate: "2023-06-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G464", "#START#", "#END#"],
        },
        {
            id: "7",
            name: "G465",
            startDate: "2023-07-01",
            endDate: "2023-07-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G465", "#START#", "#END#"],
        },
        {
            id: "8",
            name: "G466",
            startDate: "2023-08-01",
            endDate: "2023-08-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G466", "#START#", "#END#"],
        },
        {
            id: "9",
            name: "G467",
            startDate: "2023-08-01",
            endDate: "2023-08-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G467", "#START#", "#END#"],
        },
        {
            id: "10",
            name: "G468",
            startDate: "2023-09-01",
            endDate: "2023-09-28",
            secondaryStartDate: "2021-11-25",
            secondaryEndDate: "2023-04-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G468", "#START#", "#END#"],
        },
        {
            id: "11",
            name: "G469",
            startDate: "2023-10-01",
            endDate: "2023-10-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G469", "#START#", "#END#"],
        },
        {
            id: "12",
            name: "G470",
            startDate: "2023-11-01",
            endDate: "2023-11-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G470", "#START#", "#END#"],
        },
        {
            id: "13",
            name: "G471",
            startDate: "2023-12-01",
            endDate: "2023-12-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G471", "#START#", "#END#"],
        },
        {
            id: "14",
            name: "G472",
            startDate: "2024-01-01",
            endDate: "2024-01-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G472", "#START#", "#END#"],
        },
        {
            id: "15",
            name: "G473",
            startDate: "2024-02-01",
            endDate: "2024-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            icon: {
                color: "#FF0000",
                url: "http://localhost:3000/assets/svg/alert-circle.svg",
            },
            valuesToShow: ["G473", "#START#", "#END#"],
        },
        {
            id: "16",
            name: "G474",
            startDate: "2024-03-01",
            endDate: "2024-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G474", "#START#", "#END#"],
        },
        {
            id: "17",
            name: "G475",
            startDate: "2024-04-01",
            endDate: "2024-04-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G475", "#START#", "#END#"],
        },
        {
            id: "18",
            name: "G476",
            startDate: "2024-05-01",
            endDate: "2024-05-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G476", "#START#", "#END#"],
        },
        {
            id: "19",
            name: "G477",
            startDate: "2024-06-01",
            endDate: "2024-06-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G477", "#START#", "#END#"],
        },
        {
            id: "20",
            name: "G478",
            startDate: "2024-07-01",
            endDate: "2024-07-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G478", "#START#", "#END#"],
        },
        {
            id: "21",
            name: "G479",
            startDate: "2024-08-01",
            endDate: "2024-08-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G479", "#START#", "#END#"],
        },
        {
            id: "22",
            name: "G480",
            startDate: "2024-09-01",
            endDate: "2024-09-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G480", "#START#", "#END#"],
        },
        {
            id: "23",
            name: "G481",
            startDate: "2024-10-01",
            endDate: "2024-10-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G481", "#START#", "#END#"],
        },
        {
            id: "24",
            name: "G482",
            startDate: "2024-11-01",
            endDate: "2024-11-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G482", "#START#", "#END#"],
        },
        {
            id: "25",
            name: "G483",
            startDate: "2024-12-01",
            endDate: "2024-12-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G483", "#START#", "#END#"],
        },
        {
            id: "26",
            name: "G484",
            startDate: "2025-01-01",
            endDate: "2025-01-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G484", "#START#", "#END#"],
        },
        {
            id: "27",
            name: "G485",
            startDate: "2025-02-01",
            endDate: "2025-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G485", "#START#", "#END#"],
        },
        {
            id: "28",
            name: "G486",
            startDate: "2025-03-01",
            endDate: "2025-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G486", "#START#", "#END#"],
        },
        {
            id: "29",
            name: "G487",
            startDate: "2025-04-01",
            endDate: "2025-04-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G487", "#START#", "#END#"],
        },
        {
            id: "30",
            name: "G488",
            startDate: "2025-05-01",
            endDate: "2025-05-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G488", "#START#", "#END#"],
        },
        {
            id: "31",
            name: "G479",
            startDate: "2026-08-01",
            endDate: "2026-08-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G479", "#START#", "#END#"],
        },
        {
            id: "32",
            name: "G480",
            startDate: "2026-09-01",
            endDate: "2026-09-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G480", "#START#", "#END#"],
        },
        {
            id: "33",
            name: "G481",
            startDate: "2026-10-01",
            endDate: "2026-10-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G481", "#START#", "#END#"],
        },
        {
            id: "34",
            name: "G482",
            startDate: "2026-11-01",
            endDate: "2026-11-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G482", "#START#", "#END#"],
        },
        {
            id: "35",
            name: "G483",
            startDate: "2026-12-01",
            endDate: "2026-12-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G483", "#START#", "#END#"],
        },
        {
            id: "36",
            name: "G484",
            startDate: "2027-01-01",
            endDate: "2027-01-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G484", "#START#", "#END#"],
        },
        {
            id: "37",
            name: "G485",
            startDate: "2027-02-01",
            endDate: "2027-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G485", "#START#", "#END#"],
        },
        {
            id: "38",
            name: "G486",
            startDate: "2027-03-01",
            endDate: "2027-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G486", "#START#", "#END#"],
        },
        {
            id: "39",
            name: "G487",
            startDate: "2027-04-01",
            endDate: "2027-04-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G487", "#START#", "#END#"],
        },
        {
            id: "40",
            name: "G488",
            startDate: "2027-05-01",
            endDate: "2027-05-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G488", "#START#", "#END#"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    showSecondaryDates: false,
    ganttHeight: 350,
    hideDependencies: true,
    title: "Main Gantt",
    initialScrollX: -1,
    initialScrollY: 500,
};

const secondaryGanttPlanner3PropsMock = {
    filter: dummyFilter(),
    items: [
        {
            id: "RIS1",
            name: "Risorsa 1",
            schedule: [
                { startDate: "2023-01-01", endDate: "2027-02-01", color: "#ff0000" },
                { startDate: "2023-03-01", endDate: "2027-04-01", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 1"],
        },
        {
            id: "RIS2",
            name: "Risorsa 2",
            schedule: [
                { startDate: "2023-01-10", endDate: "2023-02-10", color: "#ff0000" },
                { startDate: "2023-03-10", endDate: "2023-04-10", color: "#ff0000" },
            ],
            type: "timeline",
            valuesToShow: ["Risorsa 2"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    ganttHeight: 200,
    hideDependencies: true,
    title: "Detail",
};

// planner 4
const mainGanttPlanner4PropsMock = {
    filter: dummyFilter(),
    items: [
        {
            id: "1",
            name: "G459",
            startDate: "2023-01-01",
            endDate: "2023-01-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G459", "#START#", "#END#"],
        },
        {
            id: "2",
            name: "G460",
            startDate: "2023-02-01",
            endDate: "2023-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G460", "#START#", "#END#"],
        },
        {
            id: "3",
            name: "G461",
            startDate: "2023-03-01",
            endDate: "2023-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G461", "#START#", "#END#"],
        },
        {
            id: "4",
            name: "G462",
            startDate: "2023-04-01",
            endDate: "2023-04-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G462", "#START#", "#END#"],
        },
        {
            id: "5",
            name: "G463",
            startDate: "2023-05-01",
            endDate: "2023-05-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G463", "#START#", "#END#"],
        },
        {
            id: "6",
            name: "G464",
            startDate: "2023-06-01",
            endDate: "2023-06-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G464", "#START#", "#END#"],
        },
        {
            id: "7",
            name: "G465",
            startDate: "2023-07-01",
            endDate: "2023-07-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G465", "#START#", "#END#"],
        },
        {
            id: "8",
            name: "G466",
            startDate: "2023-08-01",
            endDate: "2023-08-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G466", "#START#", "#END#"],
        },
        {
            id: "9",
            name: "G467",
            startDate: "2023-09-01",
            endDate: "2023-09-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G467", "#START#", "#END#"],
        },
        {
            id: "10",
            name: "G468",
            startDate: "2023-10-01",
            endDate: "2023-10-28",
            secondaryStartDate: "2021-11-25",
            secondaryEndDate: "2023-04-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G468", "#START#", "#END#"],
        },
        {
            id: "11",
            name: "G469",
            startDate: "2023-11-01",
            endDate: "2023-11-28",
            secondaryStartDate: "2021-10-25",
            secondaryEndDate: "2023-03-07",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G469", "#START#", "#END#"],
        },
        {
            id: "12",
            name: "G470",
            startDate: "2023-12-01",
            endDate: "2023-12-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G470", "#START#", "#END#"],
        },
        {
            id: "13",
            name: "G471",
            startDate: "2024-01-01",
            endDate: "2024-01-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G471", "#START#", "#END#"],
        },
        {
            id: "14",
            name: "G472",
            startDate: "2024-02-01",
            endDate: "2024-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G472", "#START#", "#END#"],
        },
        {
            id: "15",
            name: "G473",
            startDate: "2024-03-01",
            endDate: "2024-03-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            icon: {
                color: "#FF0000",
                url: "http://localhost:3000/assets/svg/alert-circle.svg",
            },
            valuesToShow: ["G473", "#START#", "#END#"],
        },
        {
            id: "16",
            name: "G442",
            startDate: "2025-02-01",
            endDate: "2025-02-28",
            secondaryStartDate: "2021-10-20",
            secondaryEndDate: "2022-12-16",
            type: "project",
            phases: [],
            details: [],
            valuesToShow: ["G472", "#START#", "#END#"],
        },
    ],
    stylingOptions: {
        listCellWidth: "297px",
        rowHeight: 40,
        barFill: 90,
        projectProgressColor: "#CBCBCB",
        projectProgressSelectedColor: "#CBCBCB",
        projectBackgroundColor: "#CBCBCB",
        projectBackgroundSelectedColor: "#CBCBCB",
        barProgressColor: "#A2A415",
        barProgressSelectedColor: "#A2A415",
        barBackgroundColor: "#A2A415",
        barBackgroundSelectedColor: "#A2A415",
    },
    hideLabel: true,
    showSecondaryDates: false,
    ganttHeight: 350,
    hideDependencies: true,
    title: "Main Gantt",
    initialScrollX: -1,
    initialScrollY: 100,
    onScrollY: onScrollY
};

// planner mocks setup
const planner1PropsMock = {
    mainGantt: mainGanttPlanner1PropsMock,
    secondaryGantt: secondaryGanttPlanner1PropsMock,
    viewMode: "month",
    onSetDoubleView: mainGanttDoubleViewHandler,
    onScrollX: onScrollX
};

const planner2PropsMock = {
    mainGantt: mainGanttPlanner2PropsMock,
    secondaryGantt: secondaryGanttPlanner2PropsMock,
    viewMode: "month",
};

const planner3PropsMock = {
    mainGantt: mainGanttPlanner3PropsMock,
    secondaryGantt: secondaryGanttPlanner3PropsMock,
    viewMode: "month",
};

const planner4PropsMock = {
    mainGantt: mainGanttPlanner4PropsMock,
    viewMode: "month",
};

// assign first planner data to planner component by default

comp.plannerProps = planner1PropsMock;

// all 4 planners list
const planners = {
    "kup-list": {
        data: [
            {
                value: "Kup Planner Component",
                id: "1",
                selected: true
            },
            {
                value: "Kup Planner Component with secondary gantt dates greater than primary gantt dates",
                id: "2",
                selected: false
            },
            {
                value: "Kup Planner Component with initial scroll x and y (click on task with icon)",
                id: "3",
                selected: false
            },
            {
                value: "Kup Planner Component with initial scroll x and y (click on task with icon)",
                id: "4",
                selected: false
            },
        ]
    }
}

// assign planners to kup dropdown component
dropdownComp.data = planners;


// when user changes planner from dropdown
function onPlannerChange(event) {
    if (!event.detail.value) return;
    comp.plannerProps = null;
    const plannerPropsMock = getPlannerPropsMock(event.detail.value);
    setTimeout(() => {
        comp.plannerProps = plannerPropsMock;
    }, 30);
}

function getPlannerPropsMock (value) {
    switch (value) {
        case "1":
            return planner1PropsMock;
        case "2":
            return planner2PropsMock;
        case "3":
            return planner3PropsMock;
        case "4":
            return planner4PropsMock;
        default:
            return planner1PropsMock;
    }
}
