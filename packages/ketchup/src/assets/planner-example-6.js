const comp = document.getElementById('planner');

comp.addEventListener('kup-planner-click', onclick);
comp.addEventListener('kup-planner-didunload', (e) => {
    console.log('Planner removed', e);
});
document.addEventListener('kup-button-click', () => {
    console.log('Removing planner');
    comp.remove();
});

document.addEventListener('kup-planner-datechange', (e) => {
    console.log(e);
});

document.addEventListener('kup-planner-phasedrop', (e) => {
    console.log(e);
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
                name: 'INPRHHMMSS',
                obj: {
                    k: '',
                    p: '2',
                    t: 'I1',
                },
                title: 'Init preview hour (HH:mm:ss)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INITHHMMSS',
                obj: {
                    k: '',
                    p: '2',
                    t: 'I1',
                },
                title: 'Init hour (HH:mm:ss)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'ENPRHHMMSS',
                obj: {
                    k: '',
                    p: '2',
                    t: 'I1',
                },
                title: 'End preview hour (HH:mm:ss)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'ENDHHMMSS',
                obj: {
                    k: '',
                    p: '2',
                    t: 'I1',
                },
                title: 'End hour (HH:mm:ss)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INPRHHMM',
                obj: {
                    k: '',
                    p: '3',
                    t: 'I1',
                },
                title: 'Init previewed hour (HH:mm)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'INITHHMM',
                obj: {
                    k: '',
                    p: '3',
                    t: 'I1',
                },
                title: 'Init hour (HH:mm)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'ENPRHHMM',
                obj: {
                    k: '',
                    p: '3',
                    t: 'I1',
                },
                title: 'End preview hour (HH:mm)',
                tooltip: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'ENDHHMM',
                obj: {
                    k: '',
                    p: '3',
                    t: 'I1',
                },
                title: 'End hour (HH:mm)',
                tooltip: true,
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
                    INPRHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '070030',
                            p: '2',
                            t: 'I1',
                        },
                        value: '07:00:30',
                    },
                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '080000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '08:00:00',
                    },
                    ENPRHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '163050',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:30:50',
                    },
                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '180000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:00:00',
                    },
                    INPRHHMM: {
                        isEditable: false,
                        obj: {
                            k: '0700',
                            p: '3',
                            t: 'I1',
                        },
                        value: '07:00',
                    },
                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '0800',
                            p: '3',
                            t: 'I1',
                        },
                        value: '08:00',
                    },
                    ENPRHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1630',
                            p: '3',
                            t: 'I1',
                        },
                        value: '16:30',
                    },
                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1800',
                            p: '3',
                            t: 'I1',
                        },
                        value: '18:00',
                    },
                },
                cssClass: 'clickable',
                id: '1',
                object: '',
                readOnly: true,
            },
        ],
    },
    detailData: {},
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
    showSecondaryDates: false,
    taskColumns: ['R§COMM', 'R§CDCL', 'DATINZ', 'DATPRE'],
    taskDates: ['DATINZ', 'DATPRE'],
    taskHeight: 400,
    taskIdCol: 'R§COMM',
    taskNameCol: 'R§COMM',
    taskPrevDates: ['INZORD', 'DATORD'],
    titleMess: '',
    detailHours: ['INITHHMM', 'ENDHHMM'],
    phaseHours: ['INITHHMMSS', 'ENDHHMMSS'],
    taskHours: ['INITHHMM', 'ENDHHMM'],
    detailPrevHours: ['INPRHHMM', 'ENPRHHMM'],
    phasePrevHours: ['INPRHHMMSS', 'ENPRHHMMSS'],
    taskPrevHours: ['INPRHHMM', 'ENPRHHMM'],
    scrollableTaskList: true,
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
            name: 'INPRHHMMSS',
            obj: {
                k: '',
                p: '2',
                t: 'I1',
            },
            title: 'Init prev hour (HH:mm:ss)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'INITHHMMSS',
            obj: {
                k: '',
                p: '2',
                t: 'I1',
            },
            title: 'Init hour (HH:mm:ss)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'ENPRHHMMSS',
            obj: {
                k: '',
                p: '2',
                t: 'I1',
            },
            title: 'End pre hour (HH:mm:ss)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'ENDHHMMSS',
            obj: {
                k: '',
                p: '2',
                t: 'I1',
            },
            title: 'End hour (HH:mm:ss)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'INPRHHMM',
            obj: {
                k: '',
                p: '3',
                t: 'I1',
            },
            title: 'Init pre hour (HH:mm)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'INITHHMM',
            obj: {
                k: '',
                p: '3',
                t: 'I1',
            },
            title: 'Init hour (HH:mm)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'ENPRHHMM',
            obj: {
                k: '',
                p: '3',
                t: 'I1',
            },
            title: 'End pre hour (HH:mm)',
            tooltip: true,
        },
        {
            isEditable: false,
            isKey: false,
            name: 'ENDHHMM',
            obj: {
                k: '',
                p: '3',
                t: 'I1',
            },
            title: 'End hour (HH:mm)',
            tooltip: true,
        },
    ],
    rows: [
        {
            cells: {
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

                DATFIN: {
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

                DATINI: {
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
                INPRHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '103015',
                        p: '2',
                        t: 'I1',
                    },
                    value: '10:30:15',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '113000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '11:30:00',
                },
                ENPRHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '124515',
                        p: '2',
                        t: 'I1',
                    },
                    value: '12:45:15',
                },
                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '164500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:45:00',
                },

                INPRHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1030',
                        p: '3',
                        t: 'I1',
                    },
                    value: '10:30',
                },
                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1130',
                        p: '3',
                        t: 'I1',
                    },
                    value: '11:30',
                },

                ENPRHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1545',
                        p: '3',
                        t: 'I1',
                    },
                    value: '15:45',
                },

                ENDHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1645',
                        p: '3',
                        t: 'I1',
                    },
                    value: '16:45',
                },
            },
            id: '1',
            object: '',
            readOnly: true,
        },
        {
            cells: {
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
                INPRHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '103005',
                        p: '2',
                        t: 'I1',
                    },
                    value: '10:30:05',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '073000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '07:30:00',
                },

                ENPRHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '081500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '08:15:00',
                },
                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '094500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '09:45:00',
                },

                INPRHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1030',
                        p: '3',
                        t: 'I1',
                    },
                    value: '10:30',
                },

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0730',
                        p: '3',
                        t: 'I1',
                    },
                    value: '07:30',
                },
                ENPRHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0815',
                        p: '3',
                        t: 'I1',
                    },
                    value: '08:15',
                },
                ENDHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0945',
                        p: '3',
                        t: 'I1',
                    },
                    value: '09:45',
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