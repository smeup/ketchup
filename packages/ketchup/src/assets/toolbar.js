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
        isEditable: false,
        id: '',
        legacyLook: false,
        isExpanded: false,
        value: 'Element 1 Parent',
        visible: true,
        fun: 'FUN',
        cssClass: [],
    },
    {
        children: [
            {
                children: [],
                disabled: false,
                expandable: false,
                id: '',
                isExpanded: false,
                legacyLook: false,
                isEditable: true,
                cssClass: [],
                shape: 'Rad',
                // data: {
                //     type: 'chevron',
                // },
                data: [
                    {
                        id: 1,
                        label: 'uno',
                    },
                    {
                        id: 2,
                        label: 'due',
                    },
                    {
                        id: 3,
                        label: 'tre',
                    },
                ],
                obj: {
                    k: '10;20',
                    p: 'B£WAR',
                    t: 'TA',
                },
                visible: true,
                value: '10;20',

                fun: 'FUN',
            },
            {
                children: [],
                disabled: false,
                expandable: false,
                id: '',
                isExpanded: false,
                cssClass: [],
                legacyLook: false,
                isEditable: true,
                shape: 'RAD',
                options: [
                    {
                        id: 1,
                        label: 'One',
                        checked: true,
                        value: 1,
                    },
                    {
                        id: 2,
                        label: 'Two',
                        checked: false,
                        value: 2,
                    },
                    {
                        id: 3,
                        label: 'Three',
                        checked: false,
                        value: 3,
                    },
                ],
                visible: true,
                fun: 'FUN',
                value: 1,
            },
        ],
        disabled: false,
        expandable: false,
        id: '',
        cssClass: [],
        isExpanded: false,
        legacyLook: false,
        isEditable: true,
        data: false,
        style: {},
        value: 'element 2 parent',
        visible: true,
        fun: 'FUN',
    },
    {
        children: [
            {
                children: [
                    {
                        children: [],
                        disabled: false,
                        cssClass: [],
                        legacyLook: false,
                        expandable: false,
                        id: '',
                        isExpanded: false,
                        isEditable: false,
                        value: 'element 3 child 1 child 1',
                        visible: true,
                        fun: 'FUN',
                    },
                    {
                        children: [],
                        disabled: false,
                        expandable: false,
                        legacyLook: false,
                        id: '',
                        isExpanded: false,
                        value: 'element 3 child 1 child 2',
                        visible: true,
                        fun: 'FUN',
                    },
                ],
                disabled: false,
                cssClass: [],
                expandable: false,
                isEditable: false,
                legacyLook: false,

                id: '',
                isExpanded: false,
                value: 'element 3 child 1',
                visible: true,
                fun: 'FUN',
            },
        ],
        disabled: false,
        cssClass: [],
        expandable: false,
        id: '',
        isExpanded: false,
        isEditable: false,
        legacyLook: false,
        value: 'element 3',
        visible: true,
        fun: 'FUN',
    },
];

const esempio = document.getElementById('esempio');
esempio.data = toolbarData;
