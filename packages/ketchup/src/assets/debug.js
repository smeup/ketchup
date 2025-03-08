// Replace the object below with yours.
const compName = 'kup-input-panel';

// Replace the props below with yours.
const props = {
    //updatableData: true,
    customStyle: '',
    data: {
        type: 'SmeupDataTable',
        columns: [
            {
                name: 'ITX',
                title: 'Textfield',
                visible: true,
            },
            {
                name: 'ACP',
                title: 'Autocomplete',
                visible: true,
            },
            {
                name: 'CMB',
                title: 'Combobox',
                visible: true,
            },
            {
                name: 'CHK',
                title: 'Checkbox',
                visible: true,
            },
            {
                name: 'AML',
                title: 'Multi Autocomplete',
                visible: true,
            },
            {
                name: 'CAL',
                title: 'Date picker',
                visible: true,
            },
            {
                name: 'TIM',
                title: 'Time picker',
                visible: true,
            },
            {
                name: 'MEM',
                title: 'Textarea',
                visible: true,
            },
            {
                name: 'LAB_NOT_FORMATTED',
                title: 'Label',
                visible: true,
            },
            {
                name: 'LAB_FORMATTED',
                title: 'Label formatted',
                visible: true,
            },
            {
                name: 'LAB_FORMATTED_2',
                title: 'Label with only one string formatted',
                visible: true,
            },
            {
                name: 'LAB_NUMBER_FORMAT',
                title: 'Label with a decimal number',
                visible: true,
            },
            {
                name: 'LAB_DATE_FORMAT',
                title: 'Label with a date',
                visible: true,
            },
            {
                name: 'OBJ',
                title: 'Object field',
                visible: true,
            },
            {
                name: 'SWT',
                title: 'Switch',
                visible: true,
            },
            {
                name: 'NUM',
                title: 'Number',
                visible: true,
            },
        ],
        rows: [
            {
                cells: {
                    ITX: {
                        obj: {
                            t: '',
                            p: '',
                            k: 'Textfield initial value',
                        },
                        isEditable: true,
                        shape: 'ITX',
                    },
                    ACP: {
                        value: 'Erbusco',
                        obj: {
                            t: 'CN',
                            p: 'SED',
                            k: 'ERB',
                        },
                        data: {
                            displayMode: 'Both',
                        },
                        shape: 'ACP',
                        isEditable: true,
                    },
                    CMB: {
                        value: 'Bergamo',
                        obj: {
                            t: 'CN',
                            p: 'SED',
                            k: 'BGY',
                        },
                        data: {
                            displayMode: 'Both',
                        },
                        shape: 'CMB',
                        isEditable: true,
                    },
                    CHK: {
                        obj: {
                            t: 'V2',
                            p: 'SI/NO',
                            k: '1',
                        },
                        shape: 'CHK',
                        isEditable: true,
                    },
                    AML: {
                        obj: {
                            t: 'JL',
                            p: 'CNSED',
                            k: 'ERB;BRN;FAE',
                        },
                        value: 'Erbusco;Brescia;Faenza',
                        data: {
                            displayMode: 'Both',
                        },
                        shape: 'AML',
                        isEditable: true,
                    },
                    CAL: {
                        obj: {
                            t: 'D8',
                            p: '*YYMD',
                            k: '2025-02-17',
                        },
                        shape: 'CAL',
                        isEditable: true,
                    },
                    TIM: {
                        obj: {
                            t: 'I1',
                            p: '2',
                            k: '11:50:01',
                        },
                        shape: 'TIM',
                        isEditable: true,
                    },
                    MEM: {
                        obj: {
                            t: '**',
                            p: '',
                            k: 'Textarea initial value',
                        },
                        shape: 'MEM',
                        isEditable: true,
                    },
                    LAB_NOT_FORMATTED: {
                        obj: {
                            t: '**',
                            p: '',
                            k: 'Label with _*ERROR_error_n_ and _01100_azure background_*BOLD_ bold text',
                        },
                        shape: 'LBL',
                        isEditable: false,
                    },
                    LAB_FORMATTED: {
                        obj: {
                            t: '**',
                            p: '',
                            k: 'Label with _G*ERROR_error_n_ and _G01100_azure background_G*BOLD_ bold text',
                        },
                        shape: 'LBL',
                        isEditable: false,
                    },
                    LAB_FORMATTED_2: {
                        obj: {
                            t: '**',
                            p: '',
                            k: '_G01100_azure_n_',
                        },
                        shape: 'LBL',
                        isEditable: false,
                    },
                    LAB_NUMBER_FORMAT: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '18802.79',
                        },
                        shape: 'LBL',
                        isEditable: false,
                        data: {
                            size: 14,
                            decimals: 2,
                            integers: 14,
                        },
                    },
                    LAB_DATE_FORMAT: {
                        obj: {
                            t: 'D8',
                            p: '*YYMD',
                            k: '2025-02-01',
                        },
                        shape: 'LBL',
                        isEditable: false,
                    },
                    OBJ: {
                        obj: {
                            t: 'CN',
                            p: 'COL',
                            k: 'LANSTS',
                        },
                        isEditable: true,
                        shape: 'OBJ',
                    },
                    SWT: {
                        obj: {
                            t: 'V2',
                            p: 'SI/NO',
                            k: '1',
                        },
                        shape: 'SWT',
                        isEditable: true,
                    },
                    NUM: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '10.50',
                        },
                        isEditable: true,
                    },
                },
            },
        ],
    },
    submitCb: (e) => console.log('EVENT', e),
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
