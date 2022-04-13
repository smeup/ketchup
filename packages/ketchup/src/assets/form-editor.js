const editor1 = document.getElementById('form-editor1');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

editor1.addEventListener('kup-formeditor-save', function (ev) {
    console.log(ev);
    alert('Saved!');
});

button1.addEventListener('kup-button-click', function () {
    editor1.data = data1;
});

button2.addEventListener('kup-button-click', function () {
    editor1.data = data2;
});

const data1 = {
    layout: 'column',
    sections: [
        {
            components: [
                {
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            value: 'Ambiente di sviluppo',
                        },
                    ],
                    title: '*NONE',
                    type: 'LAB',
                    id: '{F1694E68-D1C9-4A72-9EEF-B2DD72BDDDE2}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SB',
            loaded: true,
            dim: '10%',
        },
        {
            components: [
                {
                    dynamisms: [
                        {
                            event: 'Click',
                            fun: 'F(EXD;*SCO;) 2([T1];[P1];[K1])',
                        },
                    ],
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'MU_X21_06',
                            },
                            value: 'Main',
                        },
                    ],
                    title: '*NONE',
                    type: 'BTN',
                    id: '{65DF546F-536C-48A9-BCAD-4DB8B114DC0E}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SC',
            loaded: true,
            dim: '10%',
        },
        {
            components: [
                {
                    dynamisms: [
                        {
                            event: 'Click',
                            fun: 'F(EXD;*SCO;) 2([T1];[P1];[K1]) G(NFIR)',
                        },
                    ],
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'MU_X21_06',
                            },
                            value: 'Main Popup',
                        },
                    ],
                    title: '*NONE',
                    type: 'BTN',
                    id: '{ADC998D4-C884-4E78-9557-9DD8F271F1E6}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SD',
            loaded: true,
        },
        {
            components: [
                {
                    options: {
                        url: '/Ln/f?n=test4.vue',
                        type: 'vue',
                    },
                    fun: 'F(MAT;Plain.Poc.WebupJS.Api.Repositories.UtilsRepository;FromCsv) 1(FILE;;users)',
                    title: '*NONE',
                    type: 'ASI',
                    id: '{C6BB07DF-FC62-453B-8AF3-79CB1EE050C3}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SE',
            loaded: true,
        },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
    type: 'SCH',
    loaded: true,
};

const data2 = {
    layout: 'column',
    sections: [
        {
            layout: 'row',
            sections: [
                {
                    components: [
                        {
                            data: [
                                {
                                    disabled: false,
                                    expandable: false,
                                    isExpanded: false,
                                    options: false,
                                    value: 'Etichetta 1',
                                },
                            ],
                            title: '*NONE',
                            type: 'LAB',
                            id: '{FC2E04CE-DD30-4959-A8AA-B95A97C7BDAD}',
                            loaded: true,
                        },
                    ],
                    layout: 'column',
                    sections: [],
                    id: 'SA1',
                    loaded: true,
                },
                {
                    components: [
                        {
                            data: [
                                {
                                    disabled: false,
                                    expandable: false,
                                    isExpanded: false,
                                    options: false,
                                    value: 'Etichetta 2',
                                },
                            ],
                            title: '*NONE',
                            type: 'LAB',
                            id: '{59F0053D-C32C-4971-BACC-1113BA0D7753}',
                            loaded: true,
                        },
                    ],
                    layout: 'column',
                    sections: [],
                    id: 'SA2',
                    loaded: true,
                },
            ],
            id: 'SA',
            loaded: true,
        },
        {
            components: [
                {
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            value: 'Etichetta 3',
                        },
                    ],
                    title: '*NONE',
                    type: 'LAB',
                    id: '{A35B7D1B-3B97-42E6-A926-9D84034796E3}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SB',
            loaded: true,
        },
        {
            components: [
                {
                    dynamisms: [
                        {
                            event: 'Click',
                            fun: 'F(EXD;*SCO;) 2([T1];[P1];[K1])',
                        },
                    ],
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_01',
                            },
                            value: 'Prove varie',
                        },
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_02',
                            },
                            value: 'Utente corrente',
                        },
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_03',
                            },
                            value: 'Naviga documenti',
                        },
                    ],
                    title: '*NONE',
                    type: 'BTN',
                    id: '{6D279D65-2694-4FE5-9455-50A7998FF859}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SC',
            loaded: true,
        },
        {
            components: [
                {
                    dynamisms: [
                        {
                            event: 'Click',
                            fun: 'F(EXD;*SCO;) 2([T1];[P1];[K1])',
                        },
                    ],
                    data: [
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_04',
                            },
                            value: 'Cerca documenti',
                        },
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_05',
                            },
                            value: 'Test prototipazione',
                        },
                        {
                            disabled: false,
                            expandable: false,
                            isExpanded: false,
                            options: false,
                            obj: {
                                t: 'MB',
                                p: 'SCP_SCH',
                                k: 'PL_X21_06',
                            },
                            value: 'Estrai tabella',
                        },
                    ],
                    title: '*NONE',
                    type: 'BTN',
                    id: '{F651FA0B-348E-4CE1-A3EA-4C9B95578E9E}',
                    loaded: true,
                },
            ],
            layout: 'column',
            sections: [],
            id: 'SD',
            loaded: true,
        },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_06)',
    type: 'SCH',
    loaded: true,
};
