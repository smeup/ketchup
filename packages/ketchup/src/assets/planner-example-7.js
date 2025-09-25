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

// Base props copied from example-6, trimmed for brevity. The important part is the tasks ids
// which we will reference in the dependencies below.
const props = {
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
    taskHeight: 400,
    taskIdCol: 'R§COMM',
    taskNameCol: 'R§COMM',
    taskDates: ['DATINZ', 'DATPRE'],
    taskPrevDates: ['INZORD', 'DATORD'],
    taskColumns: ['R§COMM', 'R§CDCL', 'DATINZ', 'DATPRE'],
    scrollableTaskList: true,
    // Ensure phase-related props are defined so addPhases can parse the provided phases dataset
    phaseIdCol: 'CODFAS',
    phaseNameCol: 'DESFAS',
    phaseDates: ['DATINI', 'DATFIN'],
    phasePrevDates: ['DATINZ', 'DATFPO'],
    phaseColumns: ['CODFAS', 'DESFAS', 'DATINI', 'DATFIN'],
    phaseHours: ['INITHHMMSS', 'ENDHHMMSS'],
    phasePrevHours: ['INPRHHMMSS', 'ENPRHHMMSS'],
    phaseColorCol: 'COLFAS',
    // Add structured dependencies. To target phases, use the planner's phase id
    // format: <taskId>_<phaseId> (the component creates phase ids as taskId + '_' + CODFAS)
    // Use runtime planner task ids here (taskId and taskId_phaseId) so
    // they match the ids created by addPhases (e.g. G418_P410).
    dependencies: [
        // Two stacked arrows from task 'G418' to its phase 'P410'
        { id: 'd1', sourceId: 'G418', targetId: 'G418_P410', type: 'FS' },
        { id: 'd2', sourceId: 'G418', targetId: 'G418_P410', type: 'FS' },
        // Arrow from task 'G418' to its phase 'P750'
        { id: 'd3', sourceId: 'G418', targetId: 'G418_P750', type: 'FS' },
    ],
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}

function onclick(event) {
    console.log('planner.js onclick', event.detail);
    const taskAction = event.detail && event.detail.taskAction;
    // Be resilient to slightly different action naming and use the clicked task id
    if (
        taskAction === 'onTaskOpening' ||
        (typeof taskAction === 'string' &&
            taskAction.toLowerCase().includes('opening'))
    ) {
        const clickedId =
            event.detail && event.detail.value && event.detail.value.id;
        if (clickedId) {
            // Use the actual clicked task id so example works regardless of task id value
            comp.addPhases(clickedId, phases);
        } else {
            console.warn(
                'Could not determine clicked task id, skipping addPhases'
            );
        }
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

// Minimal phases/tasks data are attached by the component in the example 6 files.
// This demo re-uses the default sample rows that are already present in example-6.

// --- Extra mock tasks & dependencies for stress-testing stacked arrows ---
// To ensure injected rows have the exact shape the component expects we clone
// an existing sample row (props.data.rows[0]) and only change the id and
// the displayed task code (`R§COMM`). This avoids malformed rows that fail
// the component's validation/filtering.
const extraTasks = [];
try {
    if (
        props &&
        props.data &&
        Array.isArray(props.data.rows) &&
        props.data.rows[0]
    ) {
        const sampleRow = props.data.rows[0];
        ['G419', 'G420', 'G421'].forEach((gid, idx) => {
            try {
                const clone = JSON.parse(JSON.stringify(sampleRow));
                clone.id = (idx + 2).toString();
                if (clone.cells && clone.cells['R§COMM']) {
                    clone.cells['R§COMM'].value = gid;
                    clone.cells['R§COMM'].displayedValue = gid;
                }
                extraTasks.push(clone);
            } catch (e) {
                // fallback: don't push malformed clones
            }
        });

        // Insert the clones after the first sample row so they are visible
        if (extraTasks.length) props.data.rows.splice(1, 0, ...extraTasks);
    }
} catch (e) {
    // ignore in case the props structure differs
}

// Add more structured dependencies to stress stacked rendering.
// We'll include multiple dependencies targeting the same phase and cross-task links.
const extraDeps = [
    // multiple dependencies from G419 to its (imaginary) phase P100 and P101
    { id: 'gd1', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
    { id: 'gd2', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
    { id: 'gd3', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
    // cross-task dependencies
    { id: 'gd4', sourceId: 'G418', targetId: 'G419', type: 'FS' },
    { id: 'gd5', sourceId: 'G420', targetId: 'G421', type: 'FS' },
    // two dependencies from G420 to G418_P750 (mixed targets)
    { id: 'gd6', sourceId: 'G420', targetId: 'G418_P750', type: 'FS' },
    { id: 'gd7', sourceId: 'G420', targetId: 'G418_P750', type: 'FS' },
];

try {
    if (!props.dependencies) props.dependencies = [];
    props.dependencies.push(...extraDeps);
} catch (e) {
    // ignore
}

// Re-assign props to the component so changes apply at runtime when example loads.
// Use deep clones for `data` and `dependencies` so the kup-planner prop watchers
// detect new object references and update internal state.
try {
    if (comp && props) {
        for (const key in props) {
            if (key === 'data' && props.data) {
                // deep clone to ensure a new reference
                try {
                    comp.data = JSON.parse(JSON.stringify(props.data));
                    continue;
                } catch (e) {
                    // fallback to direct assign if cloning fails
                    comp.data = props.data;
                    continue;
                }
            }

            if (key === 'dependencies' && props.dependencies) {
                try {
                    comp.dependencies = JSON.parse(
                        JSON.stringify(props.dependencies)
                    );
                    continue;
                } catch (e) {
                    comp.dependencies = props.dependencies;
                    continue;
                }
            }

            comp[key] = props[key];
        }
        // Trigger a refresh so the component rebuilds its internal items from the
        // newly assigned `data` and `dependencies` (some implementations rely on
        // prop watchers which fire on reference changes; calling refresh ensures
        // the UI syncs immediately).
        try {
            if (typeof comp.refresh === 'function') comp.refresh();
        } catch (e) {
            // ignore
        }
    }
} catch (e) {
    // ignore assignment failures
}
