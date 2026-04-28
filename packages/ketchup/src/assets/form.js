const data = {
    columns: [
        {
            name: 'ACC',
            title: 'Accesso Sedi',
            obj: {
                t: 'CF',
                p: 'X1004',
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
            },
        },
        {
            name: 'SED',
            title: 'Sede di accesso',
            obj: {
                t: 'CN',
                p: 'SED',
            },
        },
        {
            name: 'DAT',
            title: 'Data di accesso',
            obj: {
                t: 'D8',
                p: '*YYMD',
            },
        },
        {
            name: 'SFE',
            title: 'Rilevato stato febbrile?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
            },
        },
        {
            name: 'SIN',
            title: 'Sintomi influenzali?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
            },
        },
        {
            name: 'GPA',
            title: 'Green Pass valido?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
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

const layoutData = {
    columns: [
        {
            name: 'ACC',
            title: 'Accesso Sedi',
            obj: {
                t: 'CF',
                p: 'X1004',
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
            },
        },
        {
            name: 'SED',
            title: 'Sede di accesso',
            obj: {
                t: 'CN',
                p: 'SED',
            },
        },
        {
            name: 'DAT',
            title: 'Data di accesso',
            obj: {
                t: 'D8',
                p: '*YYMD',
            },
        },
        {
            name: 'SFE',
            title: 'Rilevato stato febbrile?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
            },
        },
        {
            name: 'SIN',
            title: 'Sintomi influenzali?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
            },
        },
        {
            name: 'GPA',
            title: 'Green Pass valido?',
            obj: {
                t: 'V2',
                p: 'ONOFF',
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
                    },
                    isEditable: true,
                },
                COL: {
                    value: 'PASCAR',
                    obj: {
                        t: 'CN',
                        p: 'COL',
                    },
                    isEditable: true,
                    shape: 'ACP',
                    data: {
                        data: {
                            'kup-list': {
                                DescrMode: 'Both',
                            },
                        },
                        DescrMode: 'Both',
                        selectMode: 'code',
                        serverHandledFilter: true,
                        allowInconsistentValues: true,
                    },
                },
                DES: {
                    value: '',
                    obj: {
                        t: '',
                        p: '',
                    },
                    isEditable: true,
                    data: {},
                },
                SED: {
                    value: 'PAR',
                    obj: {
                        t: 'CN',
                        p: 'SED',
                    },
                    isEditable: true,
                    data: {},
                },
                SFE: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                    },
                    isEditable: true,
                    data: {},
                },
                DAT: {
                    value: '2022-06-03',
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                    },
                    isEditable: true,
                    data: {},
                },
                SIN: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                    },
                    isEditable: true,
                    data: {},
                },
                GPA: {
                    value: '',
                    obj: {
                        t: 'V2',
                        p: 'ONOFF',
                    },
                    isEditable: true,
                    data: {},
                },
            },
            id: '0',
            layout: {
                horizontal: false,
                sections: [
                    {
                        label: {
                            alignment: 'center',
                            width: '250px',
                        },
                        content: [
                            {
                                column: 'DES',
                                label: 'layout label',
                            },
                        ],
                        horizontal: false,
                        style: {},
                    },
                    {
                        label: {
                            alignment: 'left',
                            placement: 'top',
                        },
                        content: [
                            {
                                column: 'COL',
                            },
                            {
                                column: 'SED',
                            },
                        ],
                        horizontal: true,
                        style: {},
                    },
                    {
                        label: {
                            alignment: 'right',
                            placement: 'bottom',
                        },
                        content: [
                            {
                                column: 'DAT',
                            },
                        ],
                        horizontal: false,
                        style: {},
                    },
                    {
                        label: {
                            placement: 'hidden',
                            width: '300px',
                        },
                        content: [
                            {
                                column: 'SFE',
                                shape: 'RAD',
                                data: {
                                    data: [
                                        {
                                            value: '1',
                                            label: 'Sì',
                                            checked: false,
                                        },
                                        {
                                            value: '1',
                                            label: 'No',
                                            checked: false,
                                        },
                                    ],
                                },
                            },
                            {
                                column: 'SIN',
                            },
                            {
                                column: 'GPA',
                            },
                        ],
                        horizontal: true,
                        style: {},
                    },
                ],
            },
        },
    ],
};

const dataAutocomplete = {
    columns: [
        {
            name: 'ACC',
            title: 'Username',
        },
        {
            name: 'DES',
            title: 'Password',
        },
    ],
    rows: [
        {
            cells: {
                ACC: {
                    value: '',
                    isEditable: true,
                    data: {
                        label: 'Username',
                        name: 'something',
                        outlined: true,
                    },
                },
                DES: {
                    value: '',
                    isEditable: true,
                    data: {
                        inputType: 'password',
                        label: 'Password',
                        name: 'something-else',
                        outlined: true,
                    },
                },
            },
            id: '0',
        },
    ],
};

const form = document.getElementById('form');
form.data = data;
const formWithLayout = document.getElementById('form-with-layout');
formWithLayout.data = layoutData;
const formWithAutocomplete = document.getElementById('form-with-autocomplete');
formWithAutocomplete.data = dataAutocomplete;
