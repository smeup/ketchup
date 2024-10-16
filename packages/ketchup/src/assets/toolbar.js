// const toolbarData = {
//     columns: [
//         {
//             name: 'BUTTON1',
//             title: 'Button1',
//             visible: true,
//         },
//         {
//             name: 'BUTTON2',
//             title: 'Button2',
//             visible: true,
//         },
//         {
//             name: 'BUTTON3',
//             title: 'Button2',
//             visible: true,
//         },
//     ],
//     rows: [
//         {
//             cells: {
//                 BUTTON1: {
//                     value: 'Setup di scheda 2',
//                     obj: { t: '', p: '' },
//                     editable: true,
//                     mandatory: true,
//                     data: {},
//                     options: [
//                         // layer interno
//                         {
//                             label: 'Setup 1 - CMP',

//                             id: 'value1',
//                         },
//                         {
//                             label: 'Setup 2 - CMB',
//                             id: 'value2',
//                         },
//                     ],
//                     children: [
//                         {
//                             value: 'click here',
//                             obj: { t: '', p: '' },
//                             editable: true,
//                             mandatory: true,
//                             options: [
//                                 // layer interno
//                                 {
//                                     label: 'Setup 1',

//                                     id: 'value1',
//                                 },
//                                 {
//                                     label: 'Setup 2',
//                                     id: 'value2',
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 BUTTON2: {
//                     value: 'Refresh',
//                     obj: { t: '', p: '' },
//                     editable: true,
//                     mandatory: true,
//                     data: {},
//                     exec: 'REFRESH([SEZID])',
//                 },
//                 BUTTON3: {
//                     value: 'Maximize',
//                     obj: { t: '', p: '' },
//                     editable: true,
//                     mandatory: true,
//                     exec: 'MAXIMIZE([SEZID])',
//                 },
//             },
//         },
//     ],
// };

const toolbarData = [
    {
        children: [],
        disabled: false,
        expandable: false,
        icon: '',
        id: '',
        isExpanded: false,
        obj: {
            k: '',
            p: '',
            t: '**',
        },
        value: 'Element 1 Parent',
        visible: true,
    },
    {
        children: [
            {
                children: [],
                disabled: false,
                expandable: false,
                icon: 'view-dashboard',
                id: '',
                isExpanded: false,
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                shape: 'RAD',
                options: [
                    {
                        id: '1',
                        label: 'One',
                    },
                    {
                        id: '2',
                        label: 'Two',
                    },
                    {
                        id: '3',
                        label: 'Three',
                    },
                    {
                        id: '4',
                        label: 'Four',
                    },
                ],
                style: {
                    'background-color': 'rgb(255, 204, 204)',
                },
                value: 'Element 1 child 1',
                visible: true,
            },
            {
                children: [],
                disabled: false,
                expandable: false,
                icon: 'view-dashboard',
                id: '',
                isExpanded: false,
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                shape: 'RAD',
                options: [
                    {
                        id: '1',
                        label: 'One',
                    },
                    {
                        id: '2',
                        label: 'Two',
                    },
                    {
                        id: '3',
                        label: 'Three',
                    },
                    {
                        id: '4',
                        label: 'Four',
                    },
                ],
                style: {
                    'background-color': 'rgb(255, 204, 204)',
                },
                value: 'Element 1 child 2',
                visible: true,
            },
        ],
        disabled: false,
        expandable: false,
        icon: 'account',
        id: '',
        isExpanded: false,
        obj: {
            k: '',
            p: '',
            t: '**',
        },
        options: false,
        style: {},
        value: 'element 2 parent',
        visible: true,
    },
    {
        children: [
            {
                children: [
                    {
                        children: [],
                        disabled: false,
                        expandable: false,
                        icon: 'view-dashboard',
                        id: '',
                        isExpanded: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: 'element 3 child 1 child 1',
                        visible: true,
                    },
                    {
                        children: [],
                        disabled: false,
                        expandable: false,
                        icon: 'view-dashboard',
                        id: '',
                        isExpanded: false,
                        obj: {
                            k: '',
                            p: '',
                            t: '**',
                        },
                        value: 'element 3 child 1 child 2',
                        visible: true,
                    },
                ],
                disabled: false,
                expandable: false,
                icon: 'view-dashboard',
                id: '',
                isExpanded: false,
                obj: {
                    k: '',
                    p: '',
                    t: '**',
                },
                value: 'element 3 child 1',
                visible: true,
            },
        ],
        disabled: false,
        expandable: false,
        icon: 'view-dashboard',
        id: '',
        isExpanded: false,
        obj: {
            k: '',
            p: '',
            t: '**',
        },
        value: 'element 3',
        visible: true,
    },
];

const esempio = document.getElementById('esempio');
esempio.data = toolbarData;

console.log(toolbarData);
