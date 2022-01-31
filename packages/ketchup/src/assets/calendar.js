const data = {
    columns: [
        {
            name: 'date',
            title: 'Date',
        },
        {
            name: 'descr',
            title: 'Description',
        },
        {
            name: 'start',
            title: 'Start',
        },
        {
            name: 'end',
            title: 'End',
        },
        {
            name: 'icon',
            title: 'Icon',
        },
        {
            name: 'image',
            title: 'Image',
        },
        {
            name: 'style',
            title: 'Style',
        },
    ],
    rows: [
        {
            cells: {
                date: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20210919',
                    },
                    value: '2021-09-19',
                },
                descr: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: 'Dentist',
                },
                start: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: '10:00:00',
                },
                end: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: '11:00:00',
                },
                icon: {
                    obj: {
                        t: 'J4',
                        p: 'ICO',
                        k: '...',
                    },
                    value: 'widgets;menu',
                },
                image: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: '...',
                    },
                    value: 'https://via.placeholder.com/64?text=PF;https://via.placeholder.com/64?text=CF;https://via.placeholder.com/64?text=DG',
                },
                style: {
                    obj: {
                        t: '',
                        p: '',
                        k: '...',
                    },
                    value: '',
                    style: {
                        background: 'purple',
                        color: 'yellow',
                    },
                },
            },
        },
        {
            cells: {
                date: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20210917',
                    },
                    value: '2021-09-17',
                },
                descr: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: 'Cinema',
                },
                start: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: '21:00:00',
                },
                end: {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: '23:00:00',
                },
                icon: {
                    obj: {
                        t: 'J4',
                        p: 'ICO',
                        k: '...',
                    },
                    value: 'wrench',
                },
                image: {
                    obj: {
                        t: 'J4',
                        p: 'IMG',
                        k: '...',
                    },
                    value: 'https://via.placeholder.com/64?text=PF;https://via.placeholder.com/64?text=CF;https://via.placeholder.com/64?text=DG',
                },
                style: {
                    obj: {
                        t: '',
                        p: '',
                        k: '...',
                    },
                    value: '',
                    style: {
                        background: 'purple',
                        color: 'yellow',
                    },
                },
            },
        },
    ],
};

const callback = (e) => {
    console.log(e);
};

const calendars = document.querySelectorAll('kup-calendar');
for (let index = 0; index < calendars.length; index++) {
    const calendar = calendars[index];
    calendar.data = { columns: [...data.columns], rows: data.rows };
    const dateCol = calendar.data.columns.find((col) => col.name === 'date');
    const descrCol = calendar.data.columns.find((col) => col.name === 'descr');
    const endCol = calendar.data.columns.find((col) => col.name === 'end');
    const iconCol = calendar.data.columns.find((col) => col.name === 'icon');
    const imageCol = calendar.data.columns.find((col) => col.name === 'image');
    const startCol = calendar.data.columns.find((col) => col.name === 'start');
    const styleCol = calendar.data.columns.find((col) => col.name === 'style');
    calendar.data.columns[calendar.data.columns.indexOf(dateCol)] = {
        ...dateCol,
        calendarOption: 'date',
    };
    calendar.data.columns[calendar.data.columns.indexOf(descrCol)] = {
        ...descrCol,
        calendarOption: 'descr',
    };
    switch (calendar.id) {
        case 'week-view':
            calendar.data.columns[calendar.data.columns.indexOf(endCol)] = {
                ...endCol,
                calendarOption: 'end',
            };
            calendar.data.columns[calendar.data.columns.indexOf(startCol)] = {
                ...startCol,
                calendarOption: 'start',
            };
            break;
        case 'with-icon':
            calendar.data.columns[calendar.data.columns.indexOf(iconCol)] = {
                ...iconCol,
                calendarOption: 'icon',
            };
            break;
        case 'with-images':
            calendar.data.columns[calendar.data.columns.indexOf(imageCol)] = {
                ...imageCol,
                calendarOption: 'image',
            };
            break;
        case 'with-style':
            calendar.data.columns[calendar.data.columns.indexOf(styleCol)] = {
                ...styleCol,
                calendarOption: 'style',
            };
            break;
    }
    calendar.addEventListener('kup-calendar-dateclick', callback);
    calendar.addEventListener('kup-calendar-eventclick', callback);
    calendar.addEventListener('kup-calendar-eventdrop', callback);
    calendar.addEventListener('kup-calendar-viewchange', callback);
}
