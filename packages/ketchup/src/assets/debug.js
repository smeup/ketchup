// Replace the object below with yours.
const compName = 'kup-input-panel';

// Replace the props below with yours.
const props = {
    customStyle: '',
    data: {
        type: 'SmeupDataTable',
        serviceInfo: {
            fun: 'F(INP;B£_160_01;) 1(  ;;) P(Pos(Yes)) INPUT(PG(B£FUN4) FU() ME() T1() P1() K1() T2() P2() K2() T3() P3() K3() K4() K5() K6() D2() PS(CALL UPCL2 C5D)) SS(ID({i367061}) DV(W) CGr(INP) FFLD())',
            serviceName: 'B£_160_01',
        },
        columns: [
            {
                name: '£RASDI',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 15,
                length: 15,
            },
            {
                name: 'W$OPZI',
                title: '',
                visible: true,
                isEditable: true,
                maxLength: 2,
                length: 2,
            },
            {
                name: '£AUAS1',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 56,
                length: 56,
            },
            {
                name: '£AUAS2',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 56,
                length: 56,
            },
            {
                name: '£AUAS3',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 56,
                length: 56,
            },
            {
                name: 'W$PROG',
                title: '',
                visible: true,
                isEditable: true,
                obj: {
                    t: 'E4',
                    p: '',
                },
                maxLength: 10,
                length: 10,
            },
            {
                name: 'W£PROG',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 35,
                length: 35,
            },
            {
                name: 'W$MESV',
                title: '',
                visible: false,
                isEditable: false,
                maxLength: 76,
                length: 76,
            },
            {
                name: 'F00002001',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 7,
                length: 7,
            },
            {
                name: 'F00007001',
                title: '',
                visible: true,
                isEditable: false,
                maxLength: 13,
                length: 13,
            },
        ],
        rows: [
            {
                cells: {
                    '£RASDI': {
                        value: 'GES_Demo',
                        obj: {
                            t: '',
                            p: '',
                            k: 'GES_Demo',
                        },
                        editable: false,
                        data: {
                            size: 15,
                            maxLength: 15,
                        },
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    F00002001: {
                        value: 'Opzioni',
                        obj: {
                            t: '',
                            p: '',
                            k: 'Opzioni',
                        },
                        editable: false,
                        data: {
                            size: 7,
                            maxLength: 7,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    W$OPZI: {
                        value: '',
                        obj: {
                            t: '',
                            p: '',
                            k: '',
                        },
                        editable: true,
                        data: {
                            size: 2,
                            maxLength: 2,
                        },
                        inputSettings: {
                            forceUppercase: true,
                        },
                        isEditable: true,
                        style: {},
                        cssClass: '',
                    },
                    '£AUAS1': {
                        value: '01=Aggiunta 02=Modifica 03=Copia 04=Cancellazi',
                        obj: {
                            t: '',
                            p: '',
                            k: '01=Aggiunta 02=Modifica 03=Copia 04=Cancellazi',
                        },
                        editable: false,
                        data: {
                            size: 56,
                            maxLength: 56,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    '£AUAS2': {
                        value: '05=Visualizza 06=Stampa 07=Storno 08=Deriva Reg',
                        obj: {
                            t: '',
                            p: '',
                            k: '05=Visualizza 06=Stampa 07=Storno 08=Deriva Reg',
                        },
                        editable: false,
                        data: {
                            size: 56,
                            maxLength: 56,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    '£AUAS3': {
                        value: '',
                        obj: {
                            t: '',
                            p: '',
                            k: '',
                        },
                        editable: false,
                        data: {
                            size: 56,
                            maxLength: 56,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    F00007001: {
                        value: 'Registrazione',
                        obj: {
                            t: '',
                            p: '',
                            k: 'Registrazione',
                        },
                        editable: false,
                        data: {
                            size: 13,
                            maxLength: 13,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    W$PROG: {
                        value: '',
                        obj: {
                            t: 'E4',
                            p: '',
                            k: '',
                        },
                        editable: true,
                        tooltip: true,
                        data: {
                            size: 10,
                            maxLength: 10,
                        },
                        inputSettings: {
                            forceUppercase: true,
                        },
                        isEditable: true,
                        style: {},
                        cssClass: 'top-right-indicator',
                    },
                    'W£PROG': {
                        value: '',
                        obj: {
                            t: '',
                            p: '',
                            k: '',
                        },
                        editable: false,
                        data: {
                            size: 35,
                            maxLength: 35,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                    W$MESV: {
                        value: '',
                        obj: {
                            t: '',
                            p: '',
                            k: '',
                        },
                        editable: false,
                        data: {
                            size: 76,
                            maxLength: 76,
                        },
                        shape: 'LBL',
                        isEditable: false,
                        style: {},
                        cssClass: '',
                    },
                },
                id: '0',
                layout: {
                    absolute: true,
                    sections: [
                        {
                            id: '1',
                            content: [
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 7,
                                        maxLength: 7,
                                    },
                                    id: 'F00002001',
                                    title: '',
                                    absoluteColumn: 2,
                                    absoluteRow: 2,
                                    absoluteLength: 7,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    data: {
                                        size: 2,
                                        maxLength: 2,
                                    },
                                    id: 'W$OPZI',
                                    title: 'Opzioni',
                                    absoluteColumn: 12,
                                    absoluteRow: 2,
                                    absoluteLength: 2,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 56,
                                        maxLength: 56,
                                    },
                                    id: '£AUAS1',
                                    title: '',
                                    absoluteColumn: 21,
                                    absoluteRow: 2,
                                    absoluteLength: 56,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 56,
                                        maxLength: 56,
                                    },
                                    id: '£AUAS2',
                                    title: '',
                                    absoluteColumn: 21,
                                    absoluteRow: 3,
                                    absoluteLength: 56,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 56,
                                        maxLength: 56,
                                    },
                                    id: '£AUAS3',
                                    title: '',
                                    absoluteColumn: 21,
                                    absoluteRow: 4,
                                    absoluteLength: 56,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 13,
                                        maxLength: 13,
                                    },
                                    id: 'F00007001',
                                    title: '',
                                    absoluteColumn: 2,
                                    absoluteRow: 6,
                                    absoluteLength: 13,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: 'E4',
                                        p: '',
                                        k: '',
                                    },
                                    data: {
                                        size: 10,
                                        maxLength: 10,
                                    },
                                    id: 'W$PROG',
                                    title: 'Registrazione',
                                    absoluteColumn: 21,
                                    absoluteRow: 6,
                                    absoluteLength: 10,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 35,
                                        maxLength: 35,
                                    },
                                    id: 'W£PROG',
                                    title: '',
                                    absoluteColumn: 33,
                                    absoluteRow: 6,
                                    absoluteLength: 35,
                                    absoluteHeight: 1,
                                },
                                {
                                    value: '',
                                    obj: {
                                        t: '',
                                        p: '',
                                        k: '',
                                    },
                                    shape: 'LBL',
                                    data: {
                                        size: 76,
                                        maxLength: 76,
                                    },
                                    id: 'W$MESV',
                                    title: '',
                                    absoluteColumn: 2,
                                    absoluteRow: 8,
                                    absoluteLength: 76,
                                },
                            ],
                            sections: [],
                            dim: '100%',
                            title: 'GESTIONE REGISTRAZIONI CONTABILI -  Formato guida',
                        },
                    ],
                },
            },
        ],
        setup: {
            options: {
                EXU: [
                    {
                        Name: 'Setup Without Name (6Tywu)',
                    },
                ],
            },
            commands: [
                {
                    value: 'Invio',
                    obj: {
                        t: 'J1',
                        p: 'KEY',
                        k: '*ENT',
                    },
                    icon: 'check',
                    editable: true,
                    shape: 'BTN',
                    data: {},
                    children: [],
                    cells: {},
                },
                {
                    value: 'F03=Fine Lavoro',
                    obj: {
                        t: 'J1',
                        p: 'KEY',
                        k: '*F03',
                    },
                    icon: 'close-circle',
                    editable: true,
                    shape: 'BTN',
                    data: {},
                    children: [],
                    cells: {},
                },
                {
                    value: 'F12=Ritorno',
                    obj: {
                        t: 'J1',
                        p: 'KEY',
                        k: '*F12',
                    },
                    icon: 'arrow-left',
                    editable: true,
                    shape: 'BTN',
                    data: {},
                    children: [],
                    cells: {},
                },
                {
                    value: 'F04=Decodifica',
                    obj: {
                        t: 'J1',
                        p: 'KEY',
                        k: '*F04',
                    },
                    icon: 'panorama_fish_eye',
                    editable: true,
                    shape: 'BTN',
                    data: {},
                    children: [],
                    cells: {},
                },
            ],
            operations: {
                update: true,
            },
        },
        debugInfo: {
            executionTime_ms: 648,
            initialTimestamp: '2024-11-27T10:33:40.585357354Z',
            finalTimestamp: '2024-11-27T10:33:41.234189080Z',
            runtime: 'Java 21',
        },
    },
    hiddenSubmitButton: true,
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
