const data = {
    columns: [
        {
            name: 'date',
            title: 'Date',
            size: '',
        },
        {
            name: 'descr',
            title: 'Description',
            size: 10,
        },
        {
            name: 'start',
            title: 'Start',
            size: 10,
        },
        {
            name: 'end',
            title: 'End',
            size: 10,
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
            },
        },
    ],
};

const callback = (e) => {
    console.log(e);
};

const basicCal = document.getElementById('basic');
const weekViewCal = document.getElementById('week-view');
const hiddenNavigationCal = document.getElementById('hidden-navigation');
const initialDateCal = document.getElementById('initial-date');
const calendars = [basicCal, weekViewCal, hiddenNavigationCal, initialDateCal];
for (let index = 0; index < calendars.length; index++) {
    const calendar = calendars[index];
    calendar.data = { ...data };
    calendar.addEventListener('kup-calendar-dateclick', callback);
    calendar.addEventListener('kup-calendar-eventclick', callback);
    calendar.addEventListener('kup-calendar-eventdrop', callback);
    calendar.addEventListener('kup-calendar-viewchange', callback);
}
