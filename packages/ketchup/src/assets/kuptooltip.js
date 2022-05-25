const dataTable = document.getElementById('data-table');
const fCellHover = document.getElementById('fcell-hover');
const registerThis = document.getElementById('register-this');
const registerThisInstead = document.getElementById('register-this-instead');
const unregisterBoth = document.getElementById('unregister-both');

const dataTableTooltip = (e) => {
    const cell = e.detail.details.td;
    if (cell) {
        const column = e.detail.details.column;
        const row = e.detail.details.row;
        const texts = [];
        for (const key in row.cells) {
            const cell = row.cells[key];
            texts.push(cell.value);
        }
        kupManager.tooltip.show(cell, {
            data: {
                text: texts,
            },
            layoutNumber: kupManager.objects.isNumber(column.obj) ? '10' : '15',
        });
    }
};

const fCellToggle = () => {
    if (kupManager.tooltip.fCellCallbacks) {
        kupManager.tooltip.fCellCallbacks = null;
    } else {
        kupManager.tooltip.fCellCallbacks = {
            enter: (_e, anchor) => {
                anchor.style.setProperty(
                    '--kup-cell-background',
                    'var(--kup-primary-color)'
                );
                anchor.style.setProperty(
                    '--kup-cell-text-color',
                    'var(--kup-text-on-primary-color)'
                );
                const props = anchor['kup-get-cell-props']();
                const cardText = ['Cell props'];
                for (const key in props) {
                    const prop = props[key];
                    if (key !== 'component') {
                        cardText.push(key);
                        let value = '';
                        try {
                            value = JSON.stringify(prop);
                        } catch (error) {
                            value = 'Unstringifiable JSON';
                        }
                        cardText.push(value);
                    }
                }
                kupManager.tooltip.show(anchor, {
                    data: {
                        text: cardText,
                    },
                    layoutNumber: 15,
                });
            },
            leave: (_e, anchor) => {
                anchor.style.setProperty('--kup-cell-background', '');
                anchor.style.setProperty('--kup-cell-text-color', '');
                kupManager.tooltip.hide();
            },
        };
    }
};

const registerThisTooltip = (anchor) => {
    anchor.disabled = true;
    kupManager.tooltip.register(anchor, {
        enter: () => {
            console.log('In callback.');
            kupManager.tooltip.show(anchor, {
                data: {
                    text: ['Hi!'],
                },
                layoutNumber: '8',
            });
        },
        over: (e) => {
            console.log('Hovering.');
            kupManager.tooltip.element.style.setProperty(
                '--kup-background-color',
                kupManager.theme.randomColor(128)
            );
            kupManager.tooltip.show(anchor, {
                data: {
                    text: [
                        'Coordinates',
                        'x:',
                        e.x,
                        'y:',
                        e.y,
                        'currentAnchor',
                        kupManager.tooltip.currentAnchor
                            ? kupManager.tooltip.currentAnchor.tagName
                            : '',
                    ],
                },
                layoutNumber: '15',
            });
        },
        leave: () => {
            console.log('Out callback.');
            kupManager.tooltip.hide();
        },
    });
};

const unregister = () => {
    kupManager.tooltip.unregister(registerThis);
    registerThis.disabled = false;
    kupManager.tooltip.unregister(registerThisInstead);
    registerThisInstead.disabled = false;
};

dataTable.addEventListener('kup-datatable-contextmenu', dataTableTooltip);
fCellHover.addEventListener('kup-button-click', fCellToggle);
registerThis.addEventListener(
    'kup-button-click',
    registerThisTooltip.bind(registerThisTooltip, registerThis)
);
registerThisInstead.addEventListener(
    'kup-button-click',
    registerThisTooltip.bind(registerThisTooltip, registerThisInstead)
);
unregisterBoth.addEventListener('kup-button-click', unregister);

dataTable.data = {
    columns: [
        {
            name: 'FLD1',
            title: 'Software',
        },
        {
            name: 'FLD2',
            title: 'Working License',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
        },
        {
            name: 'FLD3',
            title: 'Price',
            obj: {
                t: 'NR',
                p: '',
                k: '',
            },
        },
        {
            name: 'FLD4',
            title: 'Expiring Date',
            icon: 'calendar',
        },
    ],
    rows: [
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Shareholders module',
                    },
                    value: 'Shareholders module',
                    title: 'Simple tooltip for cell 1',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1',
                    },
                    value: '1',
                    title: 'Simple tooltip for cell 2',
                    displayedValue: '1',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100.60',
                    },
                    value: '100.60',
                    title: 'Simple tooltip for cell 3',
                    displayedValue: '100,6',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200101',
                    },
                    value: '2020-01-01',
                    title: 'Simple tooltip for cell 4',
                    displayedValue: '01/01/2020',
                },
            },
            id: '0',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Sales module',
                    },
                    value: 'Sales module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1',
                    },
                    value: '1',
                    displayedValue: '1',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '39.5',
                    },
                    value: '39.5',
                    displayedValue: '39,5',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200202',
                    },
                    value: '2020-02-02',
                    displayedValue: '02/02/2020',
                },
            },
            id: '1',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Marketing module',
                    },
                    value: 'Marketing module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '1',
                    },
                    value: '1',
                    displayedValue: '1',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                    displayedValue: '67,8',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200303',
                    },
                    value: '2020-03-03',
                    displayedValue: '03/03/2020',
                },
            },
            id: '2',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Commerce module',
                    },
                    value: 'Commerce module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '2',
                    },
                    value: '2',
                    displayedValue: '2',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '156.7',
                    },
                    value: '156.7',
                    displayedValue: '156,7',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200404',
                    },
                    value: '2020-04-04',
                    displayedValue: '04/04/2020',
                },
            },
            id: '3',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Service module',
                    },
                    value: 'Service module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '2',
                    },
                    value: '2',
                    displayedValue: '2',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '256.7',
                    },
                    value: '256.7',
                    displayedValue: '256,7',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200505',
                    },
                    value: '2020-05-05',
                    displayedValue: '05/05/2020',
                },
            },
            id: '4',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Cloud module',
                    },
                    value: 'Cloud module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '2',
                    },
                    value: '2',
                    displayedValue: '2',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '78.9',
                    },
                    value: '78.9',
                    displayedValue: '78,9',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200606',
                    },
                    value: '2020-06-06',
                    displayedValue: '06/06/2020',
                },
            },
            id: '5',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Financial module',
                    },
                    value: 'Financial module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3',
                    },
                    value: '3',
                    displayedValue: '3',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '145.6',
                    },
                    value: '145.6',
                    displayedValue: '145,6',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200707',
                    },
                    value: '2020-07-07',
                    displayedValue: '07/07/2020',
                },
            },
            id: '6',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Delivery module',
                    },
                    value: 'Delivery module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3',
                    },
                    value: '3',
                    displayedValue: '3',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '278.9',
                    },
                    value: '278.9',
                    displayedValue: '278,9',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200808',
                    },
                    value: '2020-08-08',
                    displayedValue: '08/08/2020',
                },
            },
            id: '7',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Web module',
                    },
                    value: 'Web module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '3',
                    },
                    value: '3',
                    displayedValue: '3',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '498.7',
                    },
                    value: '498.7',
                    displayedValue: '498,7',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20200909',
                    },
                    value: '2020-09-09',
                    displayedValue: '09/09/2020',
                },
            },
            id: '8',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Integration module',
                    },
                    value: 'Integration module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '4',
                    },
                    value: '4',
                    displayedValue: '4',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '99.9',
                    },
                    value: '99.9',
                    displayedValue: '99,9',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20201010',
                    },
                    value: '2020-10-10',
                    displayedValue: '10/10/2020',
                },
            },
            id: '9',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Banking module',
                    },
                    value: 'Banking module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '4',
                    },
                    value: '4',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '178.9',
                    },
                    value: '178.9',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20201111',
                    },
                    value: '2020-11-11',
                },
            },
            id: '10',
        },
        {
            cells: {
                FLD1: {
                    obj: {
                        t: 'TA',
                        p: 'B£AMO',
                        k: 'Analytics module',
                    },
                    value: 'Analytics module',
                    options: true,
                },
                FLD2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '4',
                    },
                    value: '4',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '345.6',
                    },
                    value: '345.6',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20201212',
                    },
                    value: '2020-12-12',
                },
            },
            id: '11',
        },
    ],
};
