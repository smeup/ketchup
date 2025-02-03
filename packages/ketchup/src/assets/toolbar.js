const toolbarData = [
    {
        children: [],
        disabled: false,
        expandable: false,
        id: '',
        isExpanded: false,
        value: 'Element 1 Parent',
        visible: true,
        componentType: 'MAT',
    },
    {
        children: [
            {
                children: [],
                disabled: false,
                id: '',
                isEditable: true,
                shape: 'Rad',
                obj: {
                    t: '',
                    p: '',
                    k: '',
                },
                data: {
                    type: 'chevron',
                },
                options: [
                    {
                        id: 0,
                        label: 'One',
                    },
                    {
                        id: 1,
                        label: 'Two',
                    },
                    {
                        id: 2,
                        label: 'Three',
                    },
                ],
                value: '0',
                componentType: 'MAT',
            },
        ],
        disabled: false,
        expandable: false,
        id: '',
        isExpanded: false,
        style: {},
        value: 'element 2 parent',
        componentType: 'MAT',
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
                        id: '',
                        isExpanded: false,
                        value: 'element 3 child 1 child 1',
                    },
                    {
                        children: [],
                        disabled: false,
                        expandable: false,
                        id: '',
                        isExpanded: false,
                        value: 'element 3 child 1 child 2',
                    },
                ],
                disabled: false,
                expandable: false,
                id: '',
                isExpanded: false,
                value: 'element 3 child 1',
            },
        ],
        disabled: false,
        expandable: false,
        id: '',
        isExpanded: false,
        value: 'element 3',
        visible: true,
    },
];

const esempio = document.getElementById('esempio');
esempio.data = toolbarData;
