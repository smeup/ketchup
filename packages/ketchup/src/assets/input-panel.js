const data = {
    columns: [
        {
            name: 'NAM',
            title: 'Name',
            visible: true,
        },
        {
            name: 'SUR',
            title: 'Surname',
            visible: true,
        },
        {
            name: 'COL',
            title: 'Color Shirt',
            visible: true,
        },
        {
            name: 'NAT',
            title: 'Nation',
            visible: true,
        },
        {
            name: 'CIT',
            title: 'City',
            visible: true,
        },
        {
            name: 'CAM',
            title: 'Campionato vinto',
            visible: true,
        },
        {
            name: 'CHA',
            title: 'Chart',
            visible: true,
        },
        {
            name: 'BUT',
            title: 'Buttons list',
            visible: true,
        },
    ],
    rows: [
        {
            cells: {
                NAM: {
                    value: 'Francesco',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'ITX',
                },
                SUR: {
                    value: 'Totti',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'INF',
                },
                COL: {
                    value: '#8E1F2F',
                    obj: {
                        t: 'J1',
                        p: 'COL',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    // shape: 'CLP',
                },
                NAT: {
                    value: 'It',
                    options: [
                        { id: 'It', label: 'Italy' },
                        { id: 'Sp', label: 'Spain' },
                    ],
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    shape: 'CMB',
                },
                CIT: {
                    value: 'Rom',
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    options: [
                        { id: 'Rom', label: 'Roma' },
                        { id: 'Flam', label: 'Flaminio' },
                        { id: 'PorMet', label: 'Porta Metronia' },
                        { id: 'Garbat', label: 'Garbatella' },
                    ],
                    shape: 'ACP',
                },
                CAM: {
                    value: 'on',
                    obj: {
                        t: 'V2',
                        p: 'SI/NO',
                        k: '',
                    },
                    editable: true,
                    mandatory: true,
                    // shape: 'CHK',
                },
                CHA: {
                    data: {
                        sizeX: '50px',
                        offlineMode: {
                            value: '8;4;5',
                        },
                        id: 'i1012_GREF_0',
                        cellId: 'i1012_GREF_0',
                        sizeY: '50px',
                    },
                    obj: {
                        k: '8;4;5',
                        p: 'GRA_PIE',
                        t: 'J4',
                    },
                    shape: 'Gra',
                    value: '8;4;5',
                },
                BUT: {
                    cssClass: 'strong-text',
                    data: {
                        data: [
                            {
                                children: [
                                    {
                                        children: [],
                                        disabled: false,
                                        expandable: false,
                                        icon: 'lightbulb-outline',
                                        isExpanded: false,
                                        obj: {
                                            k: '000050',
                                            p: 'COD_VER',
                                            t: 'VO',
                                        },
                                        options: false,
                                        value: 'Collaboratore',
                                    },
                                    {
                                        children: [],
                                        disabled: false,
                                        expandable: false,
                                        icon: 'briefcase',
                                        isExpanded: false,
                                        obj: {
                                            k: '000050',
                                            p: 'COD_VER',
                                            t: 'VO',
                                        },
                                        options: false,
                                        value: 'Azienda',
                                    },
                                ],
                                data: {
                                    dropdownOnly: true,
                                },
                                disabled: false,
                                expandable: false,
                                isExpanded: false,
                                options: false,
                            },
                        ],
                        customStyle:
                            ' #kup-component button { padding: 0; font-size: 0.65em; } ',
                        icon: 'settings',
                        className: 'kup-slim',
                    },
                    editable: true,
                    obj: {
                        k: '000050',
                        p: 'COD_VER',
                        t: 'VO',
                    },
                    shape: 'BTN',
                    value: '',
                },
            },
        },
    ],
};

const inputPanel = document.getElementById('input-panel');
inputPanel.data = data;
