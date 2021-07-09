document.addEventListener('kup-datatable-addcolumn', (e) => console.log(e));
document.addEventListener('kup-card-event', (e) => console.log(e));
document.addEventListener('kup-datatable-cellupdate', (e) => {
    console.log(e);
    e.detail.cell['info'] = {
        color: 'var(--kup-success-color)',
        icon: 'check_circle',
        message: 'Success message, yaas!',
    };
    e.target.refresh();
});
document.addEventListener('kup-datatable-rowactionclick', (e) =>
    console.log(e)
);
document.addEventListener('kupColumnMenuActive', (e) => console.log(e));
document.addEventListener('kup-datatable-contextmenu', (e) => console.log(e));
document.addEventListener('kup-datatable-click', (e) => console.log(e));
document.addEventListener('kup-datatable-columnmenu', (e) => {
    console.log(e);
    if (e.detail.open) {
        e.detail.card.data['image'] = [
            {
                resource: 'widgets',
            },
        ];
        e.detail.card.data['text'].push('1');
        e.detail.card.data['text'].push('2');

        e.detail.card.data['autocomplete'] = [
            {
                id: 'object-change',
                customStyle: '',
                data: {
                    'kup-list': {
                        data: [
                            {
                                text: 'Cliente',
                                value: 'CN;CLI;',
                                selected: false,
                            },
                            {
                                text: 'Collaboratore',
                                value: 'CN;COL;',
                                selected: false,
                            },
                            {
                                text: 'Fornitore',
                                value: 'CN;FOR;',
                                selected: false,
                            },
                            {
                                text: 'Oggetto V2 JAGRA',
                                value: 'OG;V2;JAGRA',
                                selected: false,
                            },
                            {
                                text: 'Oggetto number',
                                value: 'NR;;',
                                selected: false,
                            },
                            {
                                text: 'Oggetto date',
                                value: 'D8;;',
                                selected: false,
                            },
                        ],
                    },
                },
                disabled: false,
                displayMode: 'description',
                initialValue: 'OG;V2;JAGRA',
                minimumChars: 1,
                selectMode: 'code',
            },
        ];

        e.detail.card.refresh();
    }
});



const textfieldColumn = [
    {
        name: 'FLD1',
        title: 'Textfield',
        obj: {
            t: 'J4',
            p: 'TEXTFIELD',
            k: '',
        },
    },
    {
        name: 'FLD2',
        title: 'K',
        obj: {
            t: 'CN',
            p: 'COL',
            k: '',
        },
    },
];
const textfieldRow = [
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                isEditable: true,
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'ugo',
                },
                data: {
                    value: 'ugo',
                },
                value: 'ugo',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '2',
                },
                value: '2',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'ciao',
                },
                data: {
                    value: 'ciao',
                },
                value: 'ciao',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '3',
                },
                value: '3',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'k',
                },
                data: {
                    value: 'k',
                },
                value: 'k',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '4',
                },
                value: '4',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'J4',
                    p: 'TEXTFIELD',
                    k: 'CASFRA',
                },
                data: {
                    value: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: '1',
                },
                value: '1',
            },
        },
    },
];

const rowActions = [
    {
        text: 'Action #1',
        icon: 'delete',
    },
    {
        text: 'Action #2',
        icon: 'account',
    },
];

const textfieldTable = document.getElementById('text-field');
textfieldTable.data = { columns: textfieldColumn, rows: textfieldRow };
textfieldTable.rowActions = rowActions;
textfieldTable.addEventListener('kup-datatable-rowactionclick', (e) => {
    if (e.detail.index === 0) {
        for (let index = 0; index < textfieldTable.data.rows.length; index++) {
            if (e.detail.row.id === textfieldTable.data.rows[index].id) {
                let data = { ...textfieldTable.data };
                data.rows.splice(index, 1);
                textfieldTable.data = data;
                console.log(textfieldTable.data.rows[index]);
            }
        }
    }
});
textfieldTable.addEventListener('kup-tooltip-loaddata', (e) => {
    console.log(e);
    onLoadData(e, 1);
});

function onLoadData(event, index) {
    let data;
    switch (index) {
        case 1:
            data = {
                image: null,
                title: 'Born to die',
                content: {
                    info1: {
                        label: 'Author',
                        value: 'Lana del Rey',
                    },
                    info2: {
                        label: 'Year',
                        value: 2012,
                    },
                },
            };
            break;

        case 2:
            data = {
                image: null,
                title: 'Ultraviolence',
                content: {
                    info1: {
                        label: 'Author',
                        value: 'Lana del Rey',
                    },
                    info2: {
                        label: 'Year',
                        value: 2014,
                    },
                },
            };
            break;

        case 3:
            data = {
                image: null,
                title: 'Honeymoon',
                content: {
                    info1: {
                        label: 'Author',
                        value: 'Lana del Rey',
                    },
                    info2: {
                        label: 'Year',
                        value: 2015,
                    },
                },
            };
            break;

        case 4:
            data = {
                image: null,
                title: 'Lust for life',
                content: {
                    info1: {
                        label: 'Author',
                        value: 'Lana del Rey',
                    },
                    info2: {
                        label: 'Year',
                        value: 2017,
                    },
                },
            };
            break;
    }
    console.log(event);
    event.detail.comp.data = data;
}


document.addEventListener('kupManagerReady', () => startup());

function startup() {
    
    // ANYHTML 
    const anyHtml = document.getElementById('any-html');
    document.documentElement.ketchup.toolbar.register(anyHtml);

    const cardData = {
        button: [
            {
                icon: 'bug',
                id: 'debug',
            }
        ]
    }

    anyHtml.kupToolbar.toolbar.data = cardData;

    anyHtml.addEventListener("kup-card-event", ({ detail }) => {

        if ("kup-button-click" === detail.event.type) {

            if ("debug" === detail.event.detail.id) {

                const p = document.createElement("p");
                p.textContent = 'I am in debug';
                anyHtml.appendChild(p);

            }
        }

    });

    // TEXT FIELD TABLE

    // TODO: remove setTimeout -> if prefill an internal toolbar inside kup-data-table then send an event of kup-toolbar-prefilled
    // and here listen to it 
    setTimeout(() => {

        const textfieldTable = document.getElementById('text-field');

        if (textfieldTable.kupToolbar && textfieldTable.kupToolbar.toolbar.data) {

            textfieldTable.kupToolbar.toolbar.data.button.push ({
                icon: 'view-sequential',
                id: 'wide',
            });
        }

    }, 1000);

    textfieldTable.addEventListener("kup-card-event", ({ detail }) => {

        if ("kup-button-click" === detail.event.type) {

            if ("transpose" === detail.event.detail.id) {
                const p = document.createElement("p");
                p.textContent = 'Transposed!';
                textfieldTable.shadowRoot.appendChild(p);
            }

            if ("wide" === detail.event.detail.id) {
                textfieldTable.setAttribute('density', 'wide');
            }
        }

    });


}

