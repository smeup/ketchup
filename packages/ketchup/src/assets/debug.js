// Replace the object below with yours.
const compName = 'kup-box';

// Replace the props below with yours.
const props = {
    cardData: {
        layoutFamily: 'box',
        layoutNumber: 1,
    },
    columns: 3,
    customStyle: '',
    data: {
        columns: [
            {
                isEditable: false,
                isKey: false,
                name: 'COLL',
                obj: {
                    k: '',
                    p: 'CLI',
                    t: 'CN',
                },
                title: 'Cliente',
                tooltip: true,
                visible: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'TEXT',
                title: 'Indirizzo',
                tooltip: false,
                visible: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'NUM1',
                obj: {
                    k: '',
                    p: 'V§P',
                    t: 'TA',
                },
                title: 'Comune',
                tooltip: true,
                visible: true,
            },
            {
                isEditable: false,
                isKey: false,
                name: 'IMG',
                obj: {
                    k: '',
                    p: 'COD_AGG',
                    t: 'VO',
                },
                shape: 'Img',
                title: 'Stato',
                tooltip: false,
                visible: true,
            },
        ],
        rows: [
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000010.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000010',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000010.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Toys center S.R.L.',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'Toys center S.R.L.',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Brescia, 12',
                            p: '',
                            t: '',
                        },
                        value: 'Via Brescia, 12',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Milano',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Milano',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '0',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000011.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000011',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000011.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Rossi verniciature',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'Rossi verniciature',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Viola, 1',
                            p: '',
                            t: '',
                        },
                        value: 'Via Viola, 1',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Cremona',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Cremona',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '1',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000011.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000011',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000011.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Carrozzeria italia',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'Carrozzeria italia',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Fiume, 6',
                            p: '',
                            t: '',
                        },
                        value: 'Via Fiume, 6',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Brescia',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Brescia',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '2',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000012.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000012',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000012.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Semoraro S.P.A.',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'Semoraro S.P.A.',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Ido, 33',
                            p: '',
                            t: '',
                        },
                        value: 'Via Ido, 33',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Palermo',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Palermo',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '3',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000010.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000010',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000010.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'UNIMONDO S.R.L.',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'UNIMONDO S.R.L.',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Duca, 57',
                            p: '',
                            t: '',
                        },
                        value: 'Via Duca, 57',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Perugia',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Perugia',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '4',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    IMG: {
                        data: {
                            sizeX: '25px',
                            size: 50,
                            resource:
                                '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000012.jsf?ln=smeupImages',
                            helperEnabled: false,
                            hiddenCounter: true,
                            sizeY: '25px',
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: '000012',
                            p: 'COD_AGG',
                            t: 'VO',
                        },
                        shape: 'Img',
                        value: '/KetchUPStaging/javax.faces.resource/VO%253BCOD_AGG%253B000012.jsf?ln=smeupImages',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    COLL: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MediaTech',
                            p: 'CLI',
                            t: 'CN',
                        },
                        value: 'MediaTech',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    TEXT: {
                        data: {
                            size: 50,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 50,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Via Resistor, 49',
                            p: '',
                            t: '',
                        },
                        value: 'Via Resistor, 49',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                    NUM1: {
                        data: {
                            size: 20,
                            helperEnabled: false,
                            hiddenCounter: true,
                            maxLength: 20,
                        },
                        isEditable: false,
                        obj: {
                            k: 'Bolzano',
                            p: 'V§P',
                            t: 'TA',
                        },
                        value: 'Bolzano',
                        element: {
                            's-hn': 'KUP-CARD',
                        },
                    },
                },
                id: '5',
                layout: {
                    horizontal: false,
                    sections: [
                        {
                            horizontal: true,
                            sections: [
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    value: 'Cliente',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Indirizzo',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Comune',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                        {
                                            content: [
                                                {
                                                    value: 'Stato',
                                                },
                                            ],
                                            horizontal: false,
                                            style: {
                                                'font-weight': 'bold',
                                            },
                                        },
                                    ],
                                },
                                {
                                    horizontal: false,
                                    sections: [
                                        {
                                            content: [
                                                {
                                                    column: 'COLL',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'TEXT',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'NUM1',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                        {
                                            content: [
                                                {
                                                    column: 'IMG',
                                                },
                                            ],
                                            horizontal: false,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                object: '',
                readOnly: true,
            },
        ],
    },
    dragEnabled: false,
    dropEnabled: false,
    dropOnSection: false,
    enableRowActions: false,
    globalFilter: false,
    globalFilterValue: '',
    kanban: null,
    lazyLoadRows: false,
    loadMoreLimit: 1000,
    loadMoreMode: 'progressive_threshold',
    loadMoreStep: 60,
    multiSelection: false,
    pageSelected: 1,
    pagination: false,
    rowsPerPage: 0,
    scrollOnHover: false,
    showLoadMore: false,
    showSelection: false,
    sortBy: '',
    sortEnabled: false,
    stateId: 'i1198',
    store: {},
    swipeDisabled: false,
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
