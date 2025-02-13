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

                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '080000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '08:00:00',
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

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '0800',
                            p: '3',
                            t: 'I1',
                        },
                        value: '08:00',
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
                            k: 'VITILL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'VITILL',
                        displayedValue: 'VITILL',
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
                            k: '20241125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-11-25',
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
                            k: '20240315',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-15',
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
                            k: '20241125',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-11-25',
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
                            k: '20240315',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-15',
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
                            k: 'G479',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G479',
                        displayedValue: 'G479',
                    },

                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '100000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '10:00:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '140000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '14:00:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1000',
                            p: '3',
                            t: 'I1',
                        },
                        value: '10:00',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1400',
                            p: '3',
                            t: 'I1',
                        },
                        value: '14:00',
                    },
                },
                cssClass: 'clickable',
                id: '2',
                object: '',
                readOnly: true,
            },
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
                            k: 'ARCO',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'ARCO',
                        displayedValue: 'ARCO',
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
                            k: '20231031',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-31',
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
                            k: '20230307',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-07',
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
                            k: '20231031',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-31',
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
                            k: '20230307',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-07',
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
                            k: 'G483',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G483',
                        displayedValue: 'G483',
                    },

                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '123000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '12:30:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '170000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:00:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1230',
                            p: '3',
                            t: 'I1',
                        },
                        value: '12:30',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1700',
                            p: '3',
                            t: 'I1',
                        },
                        value: '17:00',
                    },
                },
                cssClass: 'clickable',
                id: '3',
                object: '',
                readOnly: true,
            },
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
                            k: 'BRENAN',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'BRENAN',
                        displayedValue: 'BRENAN',
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
                            k: '20240731',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-07-31',
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
                            k: '20221222',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-22',
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
                            k: '20240731',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-07-31',
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
                            k: '20221222',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2022-12-22',
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
                            k: 'G485',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G485',
                        displayedValue: 'G485',
                    },
                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '110000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '11:00:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '134500',
                            p: '2',
                            t: 'I1',
                        },
                        value: '13:45:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1100',
                            p: '3',
                            t: 'I1',
                        },
                        value: '11:00',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1345',
                            p: '3',
                            t: 'I1',
                        },
                        value: '13:45',
                    },
                },
                cssClass: 'clickable',
                id: '4',
                object: '',
                readOnly: true,
            },
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
                            k: 'VITILL',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'VITILL',
                        displayedValue: 'VITILL',
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
                            k: '20240801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-08-01',
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
                            k: '20231013',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-13',
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
                            k: '20240801',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-08-01',
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
                            k: '20231013',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-10-13',
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
                            k: 'G487',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G487',
                        displayedValue: 'G487',
                    },

                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '070000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '07:00:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '170000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '17:00:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '0700',
                            p: '3',
                            t: 'I1',
                        },
                        value: '07:00',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1700',
                            p: '3',
                            t: 'I1',
                        },
                        value: '17:00',
                    },
                },
                cssClass: 'clickable',
                id: '5',
                object: '',
                readOnly: true,
            },
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
                            k: 'AALBER',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'AALBER',
                        displayedValue: 'AALBER',
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
                            k: '20240415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-04-15',
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
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
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
                            k: '20240415',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-04-15',
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
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
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
                            k: 'G492',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G492',
                        displayedValue: 'G492',
                    },

                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '091000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '09:10:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '130000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '13:00:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '0910',
                            p: '3',
                            t: 'I1',
                        },
                        value: '09:10',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1300',
                            p: '3',
                            t: 'I1',
                        },
                        value: '13:00',
                    },
                },
                cssClass: 'clickable',
                id: '6',
                object: '',
                readOnly: true,
            },
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
                            k: 'AALBER',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'AALBER',
                        displayedValue: 'AALBER',
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
                            k: '20240329',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-29',
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
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
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
                            k: '20240329',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-03-29',
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
                            k: '20230519',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-05-19',
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
                            k: 'G493',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G493',
                        displayedValue: 'G493',
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

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '180000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '18:00:00',
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
                id: '7',
                object: '',
                readOnly: true,
            },
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
                            k: 'COMISA',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'COMISA',
                        displayedValue: 'COMISA',
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
                            k: '20240112',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
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
                            k: '20230804',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-08-04',
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
                            k: '20240112',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-01-12',
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
                            k: '20230804',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-08-04',
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
                            k: 'G494',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G494',
                        displayedValue: 'G494',
                    },
                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '100000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '10:00:00',
                    },

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '150000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '15:00:00',
                    },

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1000',
                            p: '3',
                            t: 'I1',
                        },
                        value: '10:00',
                    },

                    ENDHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1500',
                            p: '3',
                            t: 'I1',
                        },
                        value: '15:00',
                    },
                },
                cssClass: 'clickable',
                id: '8',
                object: '',
                readOnly: true,
            },
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
                            k: 'OMB',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'OMB',
                        displayedValue: 'OMB',
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
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
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
                            k: '20230331',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-31',
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
                            k: '20240516',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-05-16',
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
                            k: '20230331',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-03-31',
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
                            k: 'G495',
                            p: '',
                            t: 'CM',
                        },
                        value: 'G495',
                        displayedValue: 'G495',
                    },
                    INITHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '143000',
                            p: '2',
                            t: 'I1',
                        },
                        value: '14:30:00',
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

                    INITHHMM: {
                        isEditable: false,
                        obj: {
                            k: '1430',
                            p: '3',
                            t: 'I1',
                        },
                        value: '14:30',
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
                cssClass: 'clickable',
                id: '9',
                object: '',
                readOnly: true,
            },
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
                            k: 'GTSPA',
                            p: 'CLP',
                            t: 'CN',
                        },
                        value: 'GTSPA',
                        displayedValue: 'GTSPA',
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
                            k: '20231122',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2023-11-22',
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
                            k: '20241231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-12-31',
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
                            k: '20241231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-12-31',
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
                            k: '20241231',
                            p: '*YYMD',
                            t: 'D8',
                        },
                        value: '2024-12-31',
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
                            k: 'ZZZZ',
                            p: '',
                            t: 'CM',
                        },
                        value: 'ZZZZ',
                        displayedValue: 'ZZZZ',
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

                    ENDHHMMSS: {
                        isEditable: false,
                        obj: {
                            k: '164500',
                            p: '2',
                            t: 'I1',
                        },
                        value: '16:45:00',
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
                cssClass: 'clickable',
                id: '24',
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
                        k: '20210904',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2021-09-04',
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
                        k: '20210522',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2021-05-22',
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
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '113000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '11:30:00',
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

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1130',
                        p: '3',
                        t: 'I1',
                    },
                    value: '11:30',
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
                        k: '20231013',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-13',
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
                        k: '20230830',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-08-30',
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
                        k: '20231013',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-13',
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
                        k: 'P420           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P420           ',
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
                        k: 'MONTAGGIO ELETTRICO',
                        p: '',
                        t: '',
                    },
                    value: 'MONTAGGIO ELETTRICO',
                    displayedValue: 'MONTAGGIO ELETTRICO',
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
                        k: '20230830',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-08-30',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '110000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '11:00:00',
                },

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '160000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:00:00',
                },

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1100',
                        p: '3',
                        t: 'I1',
                    },
                    value: '11:00',
                },

                ENDHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1600',
                        p: '3',
                        t: 'I1',
                    },
                    value: '16:00',
                },
            },
            id: '2',
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
                        k: '20230925',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-25',
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
                        k: '20230905',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-05',
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
                        k: '20230925',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-25',
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
                        k: 'P605           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P605           ',
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
                        k: 'MESSA IN SERV.SW 1',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERV.SW 1',
                    displayedValue: 'MESSA IN SERV.SW 1',
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
                        k: '20230905',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-05',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '083000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '08:30:00',
                },

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '104500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '10:45:00',
                },

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0830',
                        p: '3',
                        t: 'I1',
                    },
                    value: '08:30',
                },

                ENDHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1045',
                        p: '3',
                        t: 'I1',
                    },
                    value: '10:45',
                },
            },
            id: '3',
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
                        k: '20231009',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-09',
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
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
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
                        k: '20231009',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-09',
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
                        k: 'P610           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P610           ',
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
                        k: 'MESSA IN SERVIZIO MECC.',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERVIZIO MECC.',
                    displayedValue: 'MESSA IN SERVIZIO MECC.',
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
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
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

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '164500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:45:00',
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
            id: '4',
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
                        k: '20231109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-11-09',
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
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
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
                        k: '20231109',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-11-09',
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
                        k: 'P630           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P630           ',
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
                        k: 'MESSA IN SERV.SW 2',
                        p: '',
                        t: '',
                    },
                    value: 'MESSA IN SERV.SW 2',
                    displayedValue: 'MESSA IN SERV.SW 2',
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
                        k: '20230926',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-09-26',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '083000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '08:30:00',
                },

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '104500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '10:45:00',
                },

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0830',
                        p: '3',
                        t: 'I1',
                    },
                    value: '08:30',
                },

                ENDHHMM: {
                    isEditable: false,
                    obj: {
                        k: '1045',
                        p: '3',
                        t: 'I1',
                    },
                    value: '10:45',
                },
            },
            id: '5',
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
                        k: '20231212',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-12',
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
                        k: '20231010',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-10',
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
                        k: '20231212',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-12',
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
                        k: 'P710           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P710           ',
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
                        k: 'PROVA DI LAVORAZIONE',
                        p: '',
                        t: '',
                    },
                    value: 'PROVA DI LAVORAZIONE',
                    displayedValue: 'PROVA DI LAVORAZIONE',
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
                        k: '20231010',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-10-10',
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

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '164500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:45:00',
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
            id: '6',
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
                        k: '#BDD7EE',
                        p: '',
                        t: '',
                    },
                    value: '#BDD7EE',
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
                        k: '20231219',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-19',
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
                        k: '20231213',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-13',
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
                        k: '20231219',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-19',
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
                        k: 'P720           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P720           ',
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
                        k: 'COLLAUDO CLIENTE',
                        p: '',
                        t: '',
                    },
                    value: 'COLLAUDO CLIENTE',
                    displayedValue: 'COLLAUDO CLIENTE',
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
                        k: '20231213',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2023-12-13',
                },
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '163000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:30:00',
                },

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '184500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '18:45:00',
                },

                INITHHMM: {
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
                        k: '1845',
                        p: '3',
                        t: 'I1',
                    },
                    value: '18:45',
                },
            },
            id: '7',
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
                        k: '#F8CBAD',
                        p: '',
                        t: '',
                    },
                    value: '#F8CBAD',
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
                        k: '20240111',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-11',
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
                        k: '20240104',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-04',
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
                        k: '20240111',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-11',
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
                        k: 'P730           ',
                        p: '',
                        t: 'OP',
                    },
                    value: 'P730           ',
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
                        k: 'SPEDIZIONE',
                        p: '',
                        t: '',
                    },
                    value: 'SPEDIZIONE',
                    displayedValue: 'SPEDIZIONE',
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
                        k: '20240104',
                        p: '*YYMD',
                        t: 'D8',
                    },
                    value: '2024-01-04',
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

                ENDHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '164500',
                        p: '2',
                        t: 'I1',
                    },
                    value: '16:45:00',
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
            id: '8',
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
                INITHHMMSS: {
                    isEditable: false,
                    obj: {
                        k: '073000',
                        p: '2',
                        t: 'I1',
                    },
                    value: '07:30:00',
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

                INITHHMM: {
                    isEditable: false,
                    obj: {
                        k: '0730',
                        p: '3',
                        t: 'I1',
                    },
                    value: '07:30',
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
