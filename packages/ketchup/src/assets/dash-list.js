var dashList;

for (let i = 1; i <= 8; i++) {
    dashList = document.getElementById('dash-list' + i);
    populateDash(dashList);
}

dashList = document.getElementById('dash-list-temp');
populateDashTemp(dashList);

function populateDash(dashList) {
    dashList.valueColor = [
        'rgb(0, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 0, 255)',
    ];

    dashList.textColor = [
        'rgb(0, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 0, 255)',
    ];

    dashList.iconColor = [
        'rgb(0, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 0, 255)',
    ];

    dashList.data = {
        columns: [
            {
                name: 'ICO',
                title: 'Icona',
            },
            {
                name: 'UM',
                title: 'Um',
            },
            {
                name: 'TEXT',
                title: 'Testo',
            },
            {
                name: 'VALUE',
                title: 'Valore',
            },
            {
                name: 'GROUP',
                title: 'Gruppo',
            },
            {
                name: 'INTVAL',
                title: 'Valore parte intera',
            },
            {
                name: 'DECVAL',
                title: 'Valore parte decimale',
            },
        ],
        rows: [
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: 'DELGIO',
                        },
                        value: 'DELGIO',
                    },
                    ICO: {
                        obj: {
                            k: 'mdi mdi-star-circle',
                        },
                        value: 'mdi mdi-star-circle',
                    },
                    INTVAL: {
                        obj: {
                            k: '2520,',
                            p: '',
                            t: 'NR',
                        },
                        value: '2,520',
                    },
                    UM: {
                        obj: {
                            k: '€',
                        },
                        value: '€',
                    },
                    TEXT: {
                        obj: {
                            k: 'CESTANA GIULIETTO',
                        },
                        value: 'CESTANA GIULIETTO',
                    },
                    DECVAL: {
                        obj: {
                            k: '0',
                        },
                        value: '0',
                    },
                    VALUE: {
                        obj: {
                            k: '2520,0',
                            p: '',
                            t: 'NR',
                        },
                        value: '2,520',
                    },
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: 'GIAGIU',
                        },
                        value: 'GIAGIU',
                    },
                    ICO: {
                        obj: {
                            k: 'mdi mdi-star-circle',
                        },
                        value: 'mdi mdi-star-circle',
                    },
                    INTVAL: {
                        obj: {
                            k: '-2600,',
                            p: '',
                            t: 'NR',
                        },
                        value: '-2,600',
                    },
                    UM: {
                        obj: {
                            k: '%',
                        },
                        value: '%',
                    },
                    TEXT: {
                        obj: {
                            k: 'Company Rossi Spa Napoli',
                        },
                        value: 'Company Rossi Spa Napoli',
                    },
                    DECVAL: {
                        obj: {
                            k: '0',
                        },
                        value: '0',
                    },
                    VALUE: {
                        obj: {
                            k: '-2600,0',
                            p: '',
                            t: 'NR',
                        },
                        value: '-2,600',
                    },
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: 'MOSPAO',
                        },
                        value: 'MOSPAO',
                    },
                    ICO: {
                        obj: {
                            k: 'mdi mdi-star-circle',
                        },
                        value: 'mdi mdi-star-circle',
                    },
                    INTVAL: {
                        obj: {
                            k: '-100,',
                            p: '',
                            t: 'NR',
                        },
                        value: '-100',
                    },
                    UM: {
                        obj: {
                            k: '£',
                        },
                        value: '£',
                    },
                    TEXT: {
                        obj: {
                            k: 'MOSPAO',
                        },
                        value: 'MOSPAO',
                    },
                    DECVAL: {
                        obj: {
                            k: '0',
                        },
                        value: '0',
                    },
                    VALUE: {
                        obj: {
                            k: '-100,0',
                            p: '',
                            t: 'NR',
                        },
                        value: '-100',
                    },
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: 'PARFRA',
                        },
                        value: 'PARFRA',
                    },
                    ICO: {
                        obj: {
                            k: 'mdi mdi-star-circle',
                        },
                        value: 'mdi mdi-star-circle',
                    },
                    INTVAL: {
                        obj: {
                            k: '4000,',
                            p: '',
                            t: 'NR',
                        },
                        value: '4,000',
                    },
                    UM: {
                        obj: {
                            k: '£',
                        },
                        value: '£',
                    },
                    TEXT: {
                        obj: {
                            k: 'Company Bianchi Sas Palermo',
                        },
                        value: 'Company Bianchi Sas Palermo',
                    },
                    DECVAL: {
                        obj: {
                            k: '0',
                        },
                        value: '0',
                    },
                    VALUE: {
                        obj: {
                            k: '4000,0',
                            p: '',
                            t: 'NR',
                        },
                        value: '4,000',
                    },
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: 'VERFRA',
                        },
                        value: 'VERFRA',
                    },
                    ICO: {
                        obj: {
                            k: 'mdi mdi-star-circle',
                        },
                        value: 'mdi mdi-star-circle',
                    },
                    INTVAL: {
                        obj: {
                            k: '-228,',
                            p: '',
                            t: 'NR',
                        },
                        value: '-228',
                    },
                    UM: {
                        obj: {
                            k: '$',
                        },
                        value: '$',
                    },
                    TEXT: {
                        obj: {
                            k: 'BRETTI PAOLO',
                        },
                        value: 'BRETTI PAOLO',
                    },
                    DECVAL: {
                        obj: {
                            k: '1',
                        },
                        value: '1',
                    },
                    VALUE: {
                        obj: {
                            k: '-228,1',
                            p: '',
                            t: 'NR',
                        },
                        value: '-228.1',
                    },
                },
                object: '',
                readOnly: true,
            },
        ],
    };
}

function populateDashTemp(dashList) {
    dashList.columnsNumber = 2;
    dashList.decodeText = false;
    dashList.fillSpace = false;
    dashList.groupColName = '$KID';
    dashList.horizontal = false;
    dashList.inv = false;
    dashList.textColName = '$SIG';
    dashList.valueColName = '$IND';
    dashList.valueColor = ['rgb(0, 0, 0)', 'rgb(0, 0, 0)'];
    dashList.data = {
        columns: [
            {
                name: 'ICO',
                title: 'Icona',
            },
            {
                name: 'UM',
                title: 'Um',
            },
            {
                name: 'TEXT',
                title: 'Testo',
            },
            {
                name: 'VALUE',
                title: 'Valore',
            },
            {
                name: 'GROUP',
                title: 'Gruppo',
            },
            {
                name: 'INTVAL',
                title: 'Valore parte intera',
            },
            {
                name: 'DECVAL',
                title: 'Valore parte decimale',
            },
        ],
        rows: [
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: ' 1',
                        },
                        value: ' 1',
                    },
                    ICO: {
                        obj: {
                            k: '-smeup-fixed-icon OG-OG-OG',
                        },
                        value: '-smeup-fixed-icon OG-OG-OG',
                    },
                    INTVAL: {
                        obj: {
                            k: '155',
                            p: '',
                            t: 'NR',
                        },
                        value: '155',
                    },
                    UM: {
                        obj: {
                            k: 'ERB',
                        },
                        value: 'ERB',
                    },
                    TEXT: {
                        obj: {
                            k: 'Numero Fine Periodo',
                        },
                        value: 'Numero Fine Periodo',
                    },
                    DECVAL: {
                        obj: {
                            k: '00',
                        },
                        value: '00',
                    },
                    VALUE: {
                        obj: {
                            k: '155,00',
                            p: '',
                            t: 'NR',
                        },
                        value: '155.00',
                    },
                },
                object: '',
                readOnly: true,
            },
            {
                cells: {
                    GROUP: {
                        obj: {
                            k: '22',
                        },
                        value: '22',
                    },
                    ICO: {
                        obj: {
                            k: '-smeup-fixed-icon OG-OG-OG',
                        },
                        value: '-smeup-fixed-icon OG-OG-OG',
                    },
                    INTVAL: {
                        obj: {
                            k: '125',
                            p: '',
                            t: 'NR',
                        },
                        value: '125',
                    },
                    UM: {
                        obj: {
                            k: 'ERB',
                        },
                        value: 'ERB',
                    },
                    TEXT: {
                        obj: {
                            k: 'FTE Totale',
                        },
                        value: 'FTE Totale',
                    },
                    DECVAL: {
                        obj: {
                            k: '34',
                        },
                        value: '34',
                    },
                    VALUE: {
                        obj: {
                            k: '125,34',
                            p: '',
                            t: 'NR',
                        },
                        value: '125.34',
                    },
                },
                object: '',
                readOnly: true,
            },
        ],
    };
}
