const sortBox = document.getElementById('sort-box');
sortBox.data = {
    columns: [
        {
            name: 'FLD1',
            title: 'Column A',
            size: '',
        },
        {
            name: 'FLD2',
            title: 'Column B',
            size: 10,
        },
        {
            name: 'FLD3',
            title: 'Column C',
            size: 10,
        },
        {
            name: 'FLD4',
            title: 'Column D',
            size: 10,
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;CASFRA',
                    },
                    value: 'http://lorempixel.com/64/64/?user=CASFRA',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100.60',
                    },
                    value: '100.60',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180101',
                    },
                    value: '01/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;PARFRA',
                    },
                    value: 'http://lorempixel.com/64/64/?user=PARFRA',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'PARFRA',
                    },
                    value: 'PARFRA',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '145.22',
                    },
                    value: '145.22',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180102',
                    },
                    value: '02/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;DELGIO',
                    },
                    value: 'http://lorempixel.com/64/64/?user=DELGIO',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '221.23',
                    },
                    value: '221.23',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180103',
                    },
                    value: '03/01/2018',
                },
            },
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: 'CN;COL;SANCOS',
                    },
                    value: 'http://lorempixel.com/64/64/?user=SANCOS',
                },
                FLD2: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'SANCOS',
                    },
                    value: 'SANCOS',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '187.59',
                    },
                    value: '187.59',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20180104',
                    },
                    value: '04/01/2018',
                },
            },
        },
    ],
};
sortBox.sortEnabled = true;
