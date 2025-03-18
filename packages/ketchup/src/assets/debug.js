// Replace the object below with yours.
const compName = 'kup-tree';

// Replace the props below with yours.
const props = {
    showColumns: true,
    showHeader: true,
    columns: [
        {
            name: 'PAR_RIG',
            title: 'Parametri\nInput',
            visible: false,
            maxLength: 256,
            length: 256,
        },
        {
            name: 'PAR_OUT',
            title: 'Parametri\nOutput',
            visible: false,
            maxLength: 256,
            length: 256,
        },
        {
            name: 'PAR_LIV',
            title: 'Livello',
            visible: false,
            maxLength: 10,
            length: 10,
        },
        {
            name: 'ELE',
            title: 'Elementi',
            visible: true,
            isEditable: false,
            obj: {
                t: 'NR',
                p: '',
            },
            integers: 3,
        },
        {
            name: 'ESI',
            title: 'Esiste',
            visible: true,
            isEditable: false,
            obj: {
                t: 'J4',
                p: 'ICO',
            },
            maxLength: 1,
            length: 1,
        },
        {
            name: 'FGE',
            title: 'Gestione',
            visible: true,
            isEditable: false,
            obj: {
                t: 'J4',
                p: 'BTN',
            },
            maxLength: 300,
            length: 300,
        },
        {
            name: 'FGS',
            title: 'Gestione',
            visible: true,
            isEditable: false,
            obj: {
                t: 'J1',
                p: 'FUN',
            },
            maxLength: 300,
            length: 300,
        },
    ],
    data: [
        {
            value: 'Documentazione di prodotto',
            obj: {
                t: 'SU',
                p: 'MOD',
                k: 'B£DOCU',
            },
            data: {},
            children: [
                {
                    value: 'Documentazione',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000001',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Documentazione)  CroIco(i="VO;COD_SOS;000001"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() WJS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() WJS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '8',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '8',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            icon: 'account',
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'WJS',
                    forcedLeaf: false,
                    Fld: 'P01() WJS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |8',
                },
                {
                    value: 'Video',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000030',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Video)  CroIco(i="VO;COD_SOS;000030"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() VID(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() VID(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '4',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '4',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'VID',
                    forcedLeaf: false,
                    Fld: 'P01() VID(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |4',
                },
                {
                    value: 'Glossario',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000121',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Glossario)  CroIco(i="VO;COD_SOS;000121"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() GLS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() GLS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '29',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '29',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: 'I(VO;COD_VER;000111) E(F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01)))',
                            },
                            icon: 'plus',
                            isEditable: false,
                            fun: 'F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01))',
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: 'F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01))',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: 'F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01))',
                            },
                            isEditable: false,
                            fun: 'F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01))',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'GLS',
                    forcedLeaf: false,
                    Fld: 'P01() GLS(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |29||I(VO;COD_VER;000111) E(F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01)))|F(EXD;*SCO;) 1(VO;B£DOCU_GLO;) 2(MB;SCP_SCH;LOA36) INPUT(AziExe(01))|',
                },
                {
                    value: 'Capitoli',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_VER;000119',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Capitoli)  CroIco(i="VO;COD_VER;000119"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() CAP(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() CAP(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '8',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '8',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'CAP',
                    forcedLeaf: false,
                    Fld: 'P01() CAP(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |8|',
                },
                {
                    value: 'Esercizi',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_VER;000075',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Esercizi)  CroIco(i="VO;COD_VER;000075"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() ESE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() ESE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '25',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '25',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'ESE',
                    forcedLeaf: false,
                    Fld: 'P01() ESE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |25|',
                },
                {
                    value: 'Schede',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000010',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Schede)  CroIco(i="VO;COD_SOS;000010"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() FSC(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() FSC(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '18',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '18',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'FSC',
                    forcedLeaf: false,
                    Fld: 'P01() FSC(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |18|',
                },
                {
                    value: 'Servizi',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000012',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Servizi)  CroIco(i="VO;COD_SOS;000012"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() SER(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() SER(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '5',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '5',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'SER',
                    forcedLeaf: false,
                    Fld: 'P01() SER(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |5|',
                },
                {
                    value: 'Questionari',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000034',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Questionari)  CroIco(i="VO;COD_SOS;000034"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() CFG(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() CFG(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '5',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '5',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                                integers: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'CFG',
                    forcedLeaf: false,
                    Fld: 'P01() CFG(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |5|',
                },
                {
                    value: 'Prerequisiti',
                    obj: {
                        t: 'SU',
                        p: 'MOD',
                        k: 'B£DOCU',
                    },
                    icon: 'VO;COD_SOS;000034',
                    fun: 'F(EXD;*SCO;) 1(SU;MOD;B£DOCU) P(Mnu(no)) CRO( CroDes(Prerequisiti)  CroIco(i="VO;COD_SOS;000034"))',
                    data: {},
                    children: [],
                    cells: {
                        PAR_RIG: {
                            value: 'P01() PRE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            obj: {
                                t: '',
                                p: '',
                                k: 'P01() PRE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_OUT: {
                            value: '',
                            obj: {
                                t: '',
                                p: '',
                                k: '',
                            },
                            data: {
                                size: 256,
                                maxLength: 256,
                            },
                        },
                        PAR_LIV: {
                            value: '               ',
                            obj: {
                                t: '',
                                p: '',
                                k: '               ',
                            },
                            data: {
                                size: 10,
                                maxLength: 10,
                            },
                        },
                        ELE: {
                            value: '',
                            obj: {
                                t: 'NR',
                                p: '',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 3,
                            },
                        },
                        ESI: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'ICO',
                                k: '',
                            },
                            isEditable: false,
                            shape: 'ICO',
                            data: {
                                size: 1,
                                maxLength: 1,
                            },
                        },
                        FGE: {
                            value: '',
                            obj: {
                                t: 'J4',
                                p: 'BTN',
                                k: '',
                            },
                            isEditable: false,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                        FGS: {
                            value: '',
                            obj: {
                                t: 'J1',
                                p: 'FUN',
                                k: '',
                            },
                            isEditable: false,
                            fun: '',
                            tooltip: true,
                            data: {
                                size: 300,
                                maxLength: 300,
                            },
                        },
                    },
                    name: 'PRE',
                    forcedLeaf: false,
                    Fld: 'P01() PRE(SU;MOD;B£DOCU) P01() SU(SU;MOD;B£DOCU) Inz()||               |',
                },
            ],
            cells: {
                PAR_RIG: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    data: {
                        size: 256,
                        maxLength: 256,
                    },
                },
                PAR_OUT: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    data: {
                        size: 256,
                        maxLength: 256,
                    },
                },
                PAR_LIV: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    data: {
                        size: 10,
                        maxLength: 10,
                    },
                },
                ELE: {
                    value: '',
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '',
                    },
                    isEditable: false,
                    data: {
                        size: 3,
                    },
                },
                ESI: {
                    value: '',
                    obj: {
                        t: 'J4',
                        p: 'ICO',
                        k: '',
                    },
                    isEditable: false,
                    shape: 'ICO',
                    data: {
                        size: 1,
                        maxLength: 1,
                    },
                },
                FGE: {
                    value: '',
                    obj: {
                        t: 'J4',
                        p: 'BTN',
                        k: '',
                    },
                    isEditable: false,
                    data: {
                        size: 300,
                        maxLength: 300,
                    },
                },
                FGS: {
                    value: '',
                    obj: {
                        t: 'J1',
                        p: 'FUN',
                        k: '',
                    },
                    isEditable: false,
                    fun: '',
                    tooltip: true,
                    data: {
                        size: 300,
                        maxLength: 300,
                    },
                },
            },
            name: '',
            forcedLeaf: false,
            Fld: '',
        },
    ],
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
