const data = {
    columns: [
        {
            name: 'ACC',
            title: 'Accesso Sedi',
            obj: {
                t: 'CF',
                p: 'X1004',
                k: '',
            },
            visible: false,
        },
        {
            name: 'DES',
            title: 'Descrizione',
        },
        {
            name: 'COL',
            title: 'Utente Compilazione',
            obj: {
                t: 'CN',
                p: 'COL',
                k: '',
            },
        },
        {
            name: 'SED',
            title: 'Sede di accesso',
            obj: {
                t: 'CN',
                p: 'SED',
                k: '',
            },
        },
        {
            name: 'DAT',
            title: 'Data di accesso',
            obj: {
                t: 'D8',
                p: '*YYMD',
                k: '',
            },
        },
        {
            name: 'SFE',
            title: 'Rilevato stato febbrile?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
                k: '',
            },
        },
        {
            name: 'SIN',
            title: 'Sintomi influenzali?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
                k: '',
            },
        },
        {
            name: 'GPA',
            title: 'Green Pass valido?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
                k: '',
            },
        },
    ],
    rows: [
        {
            cells: {
                ACC: {
                    value: '',
                    obj: {
                        t: 'CF',
                        p: 'X1004',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Accesso Sedi',
                    },
                },
                COL: {
                    value: '',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Utente Compilazione',
                    },
                },
                DES: {
                    value: 'sss',
                    obj: {
                        t: '',
                        p: '',
                        k: 'sss',
                    },
                    isEditable: true,
                    data: {
                        label: 'Descrizione',
                    },
                    displayedValue: 'sss',
                },
                SED: {
                    value: '',
                    obj: {
                        t: 'CN',
                        p: 'SED',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Sede di accesso',
                    },
                },
                SFE: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Rilevato stato febbrile?',
                    },
                },
                DAT: {
                    value: '2022-06-01',
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20220601',
                    },
                    isEditable: true,
                    data: {
                        label: 'Data di accesso',
                    },
                },
                SIN: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Sintomi influenzali?',
                    },
                },
                GPA: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                        k: '',
                    },
                    isEditable: true,
                    data: {
                        label: 'Green Pass valido?',
                    },
                },
            },
            id: '0',
        },
    ],
};

const form = document.getElementById('form');
form.data = data;
