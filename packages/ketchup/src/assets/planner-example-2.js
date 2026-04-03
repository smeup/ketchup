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
                name: 'R§DELI',
                obj: {
                    p: 'LS04',
                    t: 'H3',
                },
                title: 'Deliverable',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATSTA',
                obj: {
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Inizio.',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATSTO',
                obj: {
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Fine Prevista',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'DATCLO',
                obj: {
                    p: '*YYMD',
                    t: 'D8',
                },
                title: 'Data Chiusura Effettiva',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R£DESC',
                title: 'Descrzione',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'R§COMM',
                obj: {
                    p: '',
                    t: 'CM',
                },
                title: 'Commessa',
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
                name: 'PREPLA',
                obj: {
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
                    DATSTO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-01',
                    },
                    'R£DESC': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            p: '',
                            t: '',
                        },
                        value: 'FORMAZIONE SU COMPONENTE PLANNER',
                        displayedValue: 'FORMAZIONE SU COMPONENTE PLANNER',
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
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    DATCLO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
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
                            p: '',
                            t: '',
                        },
                        value: '1',
                    },
                    'R§DELI': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            p: 'LS04',
                            t: 'H3',
                        },
                        value: 'NW3000180',
                        displayedValue: 'NW3000180',
                    },
                    DATSTA: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-11-20',
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
                            p: '',
                            t: 'CM',
                        },
                        value: 'FOR-S.001',
                    },
                },
                id: '1',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    DATSTO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-04-27',
                    },
                    'R£DESC': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            p: '',
                            t: '',
                        },
                        value: 'SVILUPPO DEL COMPONENTE BTN',
                        displayedValue: 'SVILUPPO DEL COMPONENTE BTN',
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
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    DATCLO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-04-27',
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
                            p: '',
                            t: '',
                        },
                        value: '1',
                    },
                    'R§DELI': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            p: 'LS04',
                            t: 'H3',
                        },
                        value: 'NW3000181',
                        displayedValue: 'NW3000181',
                    },
                    DATSTA: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-04-07',
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
                            p: '',
                            t: 'CM',
                        },
                        value: 'GRN.OR1.01',
                    },
                },
                id: '2',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    DATSTO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-30',
                    },
                    'R£DESC': {
                        data: {
                            size: 35,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 35,
                        },
                        isEditable: false,
                        obj: {
                            p: '',
                            t: '',
                        },
                        value: 'CORSO DI SICUREZZA',
                        displayedValue: 'CORSO DI SICUREZZA',
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
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    DATCLO: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-06-07',
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
                            p: '',
                            t: '',
                        },
                        value: '0',
                    },
                    'R§DELI': {
                        data: {
                            size: 10,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 10,
                        },
                        isEditable: false,
                        obj: {
                            p: 'LS04',
                            t: 'H3',
                        },
                        value: 'NW3000182',
                        displayedValue: 'NW3000182',
                    },
                    DATSTA: {
                        data: {
                            size: 8,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 8,
                        },
                        isEditable: false,
                        obj: {
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-10',
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
                            p: '',
                            t: 'CM',
                        },
                        value: 'FOR-S.001',
                    },
                },
                id: '3',
                object: '',
                readOnly: true,
            },
        ],
    },
    listCellWidth: '300px',
    maxWidth: '90vw',
    phaseColorCol: 'COLFAS',
    phaseColumns: ['DATDIC', 'DATFIN'],
    phaseColParDep: '',
    phaseDates: ['DATDIC', 'DATFIN'],
    phaseIdCol: 'CODFAS',
    phaseNameCol: 'DESFAS',
    phasePrevDates: [],
    readOnly: false,
    showSecondaryDates: false,
    taskColumns: ['R§DELI', 'R£DESC'],
    taskDates: ['DATSTA', 'DATCLO'],
    taskIdCol: 'R§DELI',
    taskNameCol: 'R£DESC',
    taskPrevDates: [],
    titleMess: '',
    taskHeight: 100,
    detailHeight: 70,
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

function onclick(event) {
    console.log('planner.js onclick', event.detail.taskAction);
    if (event.detail.taskAction == 'onTaskOpening') {
        comp.addPhases('NW3000180', phases);
    }
}

const phases = {
    columns: [
        {
            isEditable: false,
            isKey: false,
            name: 'CODFAS',
            obj: {
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
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '0000-00-00',
                },
                DIFGIO: {
                    data: {
                        helperEnabled: false,
                        maxLength: 7,
                    },
                    isEditable: false,
                    obj: {
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
                        p: 'ICO',
                        t: 'J4',
                    },
                    value: '',
                },
                '§§AUTN': {
                    data: {
                        helperEnabled: false,
                        maxLength: 1,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '1440',
                },
                OREORD: {
                    data: {
                        helperEnabled: false,
                        maxLength: 13,
                    },
                    isEditable: false,
                    obj: {
                        p: '',
                        t: 'NR',
                    },
                    value: '1440',
                },
                DESPMA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 30,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
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
                        p: 'ICO',
                        t: 'J4',
                    },
                    value: '',
                },
                BDGPERC: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '1440',
                },
                DLTINI: {
                    data: {
                        helperEnabled: false,
                        maxLength: 5,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '1440',
                },
                STYAVA: {
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                DTAFAB: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
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
                        p: 'ICO',
                        t: 'J4',
                    },
                    value: '',
                },
                BDGPERC: {
                    data: {
                        helperEnabled: false,
                        maxLength: 6,
                    },
                    isEditable: false,
                    obj: {
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
                        p: 'ICO',
                        t: 'J4',
                    },
                    value: '',
                },
                FASDDT: {
                    cssClass: ' top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 8,
                    },
                    isEditable: false,
                    obj: {
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
                        p: '',
                        t: 'NR',
                    },
                    value: '0',
                },
                'N§TEVE': {
                    cssClass: 'strong-text top-right-indicator',
                    data: {
                        helperEnabled: false,
                        maxLength: 3,
                    },
                    isEditable: false,
                    obj: {
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

function dummyFilter() {
    const filter = document.createElement('div');
    filter.innerText = 'Filter placeholder';
    return filter;
}
