// Replace the object below with yours.
const compName = 'kup-data-table';

// Replace the props below with yours.
const props = {
    autoFillMissingCells: false,
    customStyle: '',
    data: {
        columns: [
            {
                isEditable: false,
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
                isEditable: false,
                isKey: true,
                name: '£RITEL',
                obj: {
                    k: '',
                    p: 'AGE',
                    t: 'TA',
                },
                title: 'Codice',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: '£RITDS',
                title: 'Descrizione',
                tooltip: false,
            },
            {
                decimals: 3,
                isEditable: true,
                isKey: false,
                name: 'T$AGEA',
                obj: {
                    k: '',
                    p: '',
                    t: 'NR',
                },
                title: '% Provvigione',
                tooltip: false,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEB',
                obj: {
                    k: '',
                    p: 'AGE.T$AGEB',
                    t: 'TV',
                },
                title: 'Tipo liquidazione',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEC',
                obj: {
                    k: '',
                    p: 'BRE',
                    t: 'TA',
                },
                title: 'Tipo contatto',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEF',
                objs: [
                    {
                        k: '',
                        p: 'FOR',
                        t: 'CN',
                    },
                    {
                        k: '',
                        p: 'L',
                        t: 'CO',
                    },
                ],
                title: 'Codice contatto',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGED',
                obj: {
                    k: '',
                    p: 'V6T',
                    t: 'TA',
                },
                title: 'Piano Enasarco',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEE',
                obj: {
                    k: '',
                    p: 'V6U',
                    t: 'TA',
                },
                title: 'Piano F.I.R.R.',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEG',
                obj: {
                    k: '',
                    p: 'V6V',
                    t: 'TA',
                },
                title: 'Piano I.S.C.',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEH',
                obj: {
                    k: '',
                    p: '',
                    t: 'A8',
                },
                title: 'Data Inizio Rapporto',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEI',
                obj: {
                    k: '',
                    p: '',
                    t: 'A8',
                },
                title: 'Data Fine Rapporto',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEJ',
                obj: {
                    k: '',
                    p: 'V6Z',
                    t: 'TA',
                },
                title: 'Piano Anticipi',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEK',
                title: 'Periodo Liquidaz.',
                tooltip: false,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEL',
                obj: {
                    k: '',
                    p: 'V5P',
                    t: 'TA',
                },
                title: 'Tipo Provvigioni Ft.',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEM',
                obj: {
                    k: '',
                    p: 'V5P',
                    t: 'TA',
                },
                title: 'Tipo Provvigioni Nt.',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEN',
                obj: {
                    k: '',
                    p: 'V6S',
                    t: 'TA',
                },
                title: 'Piano Liquidazione',
                tooltip: true,
            },
            {
                decimals: 0,
                isEditable: true,
                isKey: false,
                name: 'T$AGEO',
                obj: {
                    k: '',
                    p: '',
                    t: 'NR',
                },
                title: 'Mesi Slittamento',
                tooltip: false,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEP',
                obj: {
                    k: '',
                    p: 'AGE',
                    t: 'TA',
                },
                title: 'Agente Fattura',
                tooltip: true,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGEQ',
                obj: {
                    k: '',
                    p: 'SI/NO',
                    t: 'V2',
                },
                title: 'Sospensione da Liq.',
                tooltip: false,
            },
            {
                isEditable: true,
                isKey: false,
                name: 'T$AGER',
                obj: {
                    k: '',
                    p: 'AGE.T$AGER',
                    t: 'TV',
                },
                title: 'Codice Rapporto (SV)',
                tooltip: true,
            },
            {
                decimals: 0,
                isEditable: true,
                isKey: false,
                name: 'T$AGES',
                obj: {
                    k: '',
                    p: 'QP08   ZE',
                    t: 'NP',
                },
                title: 'Matricola Enasar(SV)',
                tooltip: false,
            },
            {
                isEditable: false,
                isKey: false,
                name: '£RITST',
                obj: {
                    k: '',
                    p: '',
                    t: 'ST',
                },
                title: 'Settore',
                tooltip: true,
                visible: false,
            },
        ],
        rows: [
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BRETTI ENNIOa',
                            p: '',
                            t: '',
                        },
                        value: 'BRETTI ENNIOa',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '8.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '8.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '201724',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '201724',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'ALE',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'ALE',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '0',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BESTINI DANIELE',
                            p: '',
                            t: '',
                        },
                        value: 'BESTINI DANIELE',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '3.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '3.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '401066',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '401066',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AZZ',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'AZZ',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FORESTI ALESSANDRO',
                            p: '',
                            t: '',
                        },
                        value: 'FORESTI ALESSANDRO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BONVIT',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'BONVIT',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: 'sdasd\\',
                            p: '',
                            t: 'A8',
                        },
                        value: 'sdasd\\',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'BON',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'BON',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DEL BONO ANACLETO',
                            p: '',
                            t: '',
                        },
                        value: 'DEL BONO ANACLETO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '6.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '6.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '002',
                            p: 'V6T',
                            t: 'TA',
                        },
                        value: '002',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500304',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500304',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '002',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '002',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CHI',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'CHI',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X02',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X02',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X12',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X12',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BERTOLAZZI PAOLO',
                            p: '',
                            t: '',
                        },
                        value: 'BERTOLAZZI PAOLO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '2.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '2.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'CORGIO',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'CORGIO',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'COR',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'COR',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'GAETI PAOLA',
                            p: '',
                            t: '',
                        },
                        value: 'GAETI PAOLA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '8.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '8.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '400443',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '400443',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'CS',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'CS',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'KOSTNER PIERGIUSEPPE',
                            p: '',
                            t: '',
                        },
                        value: 'KOSTNER PIERGIUSEPPE',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '3.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '3.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DARLUC',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'DARLUC',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DAR',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'DAR',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BRESCIANI MARIAPIA',
                            p: '',
                            t: '',
                        },
                        value: 'BRESCIANI MARIAPIA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '4.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '4.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6T',
                            t: 'TA',
                        },
                        value: '001',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '400292',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '400292',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '12/04/20',
                            p: '',
                            t: 'A8',
                        },
                        value: '12/04/20',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'DEL',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'DEL',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X02',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X02',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X12',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X12',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BIRAGHI CARLO',
                            p: '',
                            t: '',
                        },
                        value: 'BIRAGHI CARLO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '6.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '6.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FABMIC',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'FABMIC',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FAB',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'FAB',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BASTINO PIO',
                            p: '',
                            t: '',
                        },
                        value: 'BASTINO PIO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '3.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '3.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '100043',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '100043',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'FL',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'FL',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BRETTI SARA',
                            p: '',
                            t: '',
                        },
                        value: 'BRETTI SARA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '2.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '2.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6T',
                            t: 'TA',
                        },
                        value: '001',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '400011',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '400011',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'GAG',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'GAG',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X02',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X02',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X12',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X12',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '10',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BENETTI GRAZIANO',
                            p: '',
                            t: '',
                        },
                        value: 'BENETTI GRAZIANO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '2.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '2.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500096',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500096',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'MO',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'MO',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '11',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'OTELLI FRANCESCO',
                            p: '',
                            t: '',
                        },
                        value: 'OTELLI FRANCESCO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '7.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '7.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PETCHR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'PETCHR',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PEC',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'PEC',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BARETTI CLAUDIO',
                            p: '',
                            t: '',
                        },
                        value: 'BARETTI CLAUDIO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '5.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '5.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500178',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500178',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'PEE',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'PEE',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X07',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X07',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X17',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X17',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'DEL BONO GIULIETTO',
                            p: '',
                            t: '',
                        },
                        value: 'DEL BONO GIULIETTO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '10.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '10.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'POIMAR',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'POIMAR',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'POI',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'POI',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '14',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '4.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '4.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '100282',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '100282',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SBM',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SBM',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'RAVELLO NICOLA',
                            p: '',
                            t: '',
                        },
                        value: 'RAVELLO NICOLA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '3.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '3.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'COL',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'COL',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: 'SIGDOM',
                            p: 'COL',
                            t: 'CN',
                        },
                        value: 'SIGDOM',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SIG',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SIG',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X01',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X01',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X11',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X11',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '16',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'GIUSEPPINA',
                            p: '',
                            t: '',
                        },
                        value: 'GIUSEPPINA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '6.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '6.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500203',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500203',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SIN',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SIN',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'F',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: 'F',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '7.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '7.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '100321',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '100321',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SME',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SME',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: '',
                        },
                        value: '',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'F',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: 'F',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '5.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '5.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '401271',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '401271',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SPA',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SPA',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '19',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FORTINI PIO',
                            p: '',
                            t: '',
                        },
                        value: 'FORTINI PIO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'F',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: 'F',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '10.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '10.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '100007',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '100007',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'SV',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'SV',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '20',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BETTONI PIO',
                            p: '',
                            t: '',
                        },
                        value: 'BETTONI PIO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '3.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '3.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '100505',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '100505',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'S3',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'S3',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '21',
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'GIUSTI NICOLA',
                            p: '',
                            t: '',
                        },
                        value: 'GIUSTI NICOLA',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '10.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '10.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500075',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500075',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TK',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'TK',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'PIANTONI REMO',
                            p: '',
                            t: '',
                        },
                        value: 'PIANTONI REMO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '4.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '4.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6T',
                            t: 'TA',
                        },
                        value: '001',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '400553',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '400553',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '001',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '001',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TRE',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'TRE',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X02',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X02',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X12',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X12',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
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
                    '£RITDS': {
                        data: {
                            helperEnabled: false,
                            maxLength: 30,
                        },
                        isEditable: true,
                        obj: {
                            k: 'BERLONI GIROLAMO',
                            p: '',
                            t: '',
                        },
                        value: 'BERLONI GIROLAMO',
                    },
                    T$AGEB: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGEB',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEA: {
                        data: {
                            helperEnabled: false,
                            maxLength: 6,
                        },
                        isEditable: true,
                        obj: {
                            k: '2.000',
                            p: '',
                            t: 'NR',
                        },
                        value: '2.000',
                    },
                    T$AGED: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6T',
                            t: 'TA',
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
                        isEditable: false,
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
                    T$AGEC: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'FOR',
                            p: 'BRE',
                            t: 'TA',
                        },
                        value: 'FOR',
                    },
                    T$AGEF: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 15,
                        },
                        isEditable: true,
                        obj: {
                            k: '500357',
                            p: 'FOR',
                            t: 'CN',
                        },
                        value: '500357',
                    },
                    T$AGEE: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6U',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEH: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEG: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6V',
                            t: 'TA',
                        },
                        value: '',
                    },
                    '£RITEL': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: false,
                        obj: {
                            k: 'TX',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: 'TX',
                    },
                    T$AGEJ: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6Z',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEI: {
                        cssClass: ' top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: '',
                            t: 'A8',
                        },
                        value: '',
                    },
                    T$AGEL: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X03',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X03',
                    },
                    T$AGEK: {
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: 'T',
                            p: '',
                            t: '',
                        },
                        value: 'T',
                    },
                    T$AGEN: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'V6S',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEM: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: 'X13',
                            p: 'V5P',
                            t: 'TA',
                        },
                        value: 'X13',
                    },
                    '£RITST': {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 5,
                        },
                        isEditable: false,
                        obj: {
                            k: 'AGE',
                            p: '',
                            t: 'ST',
                        },
                        value: 'AGE',
                    },
                    T$AGEP: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 3,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE',
                            t: 'TA',
                        },
                        value: '',
                    },
                    T$AGEO: {
                        data: {
                            helperEnabled: false,
                            maxLength: 2,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: '',
                            t: 'NR',
                        },
                        value: '',
                    },
                    T$AGER: {
                        cssClass: 'strong-text top-right-indicator',
                        data: {
                            helperEnabled: false,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '',
                            p: 'AGE.T$AGER',
                            t: 'TV',
                        },
                        value: '',
                    },
                    T$AGEQ: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            checked: true,
                            maxLength: 1,
                        },
                        isEditable: true,
                        obj: {
                            k: '1',
                            p: 'SI/NO',
                            t: 'V2',
                        },
                        value: '1',
                    },
                    T$AGES: {
                        cssClass: 'strong-text',
                        data: {
                            helperEnabled: false,
                            maxLength: 8,
                        },
                        isEditable: true,
                        obj: {
                            k: '0',
                            p: 'QP08   ZE',
                            t: 'NP',
                        },
                        value: '',
                    },
                },
                id: '24',
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
    expandGroups: false,
    filters: {},
    fixedColumns: 0,
    fixedRows: 0,
    forceOneLine: true,
    globalFilter: false,
    globalFilterValue: '',
    groupLabelDisplay: 'Both',
    groups: [],
    headerIsPersistent: true,
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
    selection: 'multiple-checkbox',
    showCustomization: true,
    showDeleteButton: true,
    showFilters: true,
    showFooter: true,
    showGrid: 'Row',
    showGroups: true,
    showHeader: true,
    showInsertButton: true,
    showLoadMore: false,
    sort: [],
    /*stateId: 'i2112',*/
    store: {},
    sortableColumnsMutateData: true,
    sortEnabled: true,
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
