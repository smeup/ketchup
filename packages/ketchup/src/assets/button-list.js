const defaultData = [
    {
        data: {
            trailingIcon: true,
            title: 'button 1 tooltip',
        },
        icon: 'favorite',
        value: 'Button with Favorite icon',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
    {
        data: {
            trailingIcon: true,
            title: 'button 2 tooltip',
        },
        icon: 'alarm',
        value: 'Button with Alarm icon',
        obj: {
            t: '',
            p: '',
            k: 'b2',
        },
    },
    {
        data: {
            title: 'button 3 tooltip',
        },
        icon: 'favorite',
        value: 'Button with Favorite icon left',
        obj: {
            t: '',
            p: '',
            k: 'b3',
        },
    },
    // {
    //     data: {
    //         title: 'button 4 tooltip',
    //     },
    //     icon: 'favorite',
    //     value: 'Raised favorite 4',
    //     obj: {
    //         t: '',
    //         p: '',
    //         k: 'b4',
    //     },
    // },
    {
        data: {
            trailingIcon: true,
            title: 'button dropdown tooltip',
        },
        icon: 'favorite',
        value: 'Raised trailing favorite dropdown',
        obj: {
            t: '',
            p: '',
            k: 'bddb',
        },
        children: [
            {
                value: 'first child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child1',
                },
                icon: 'favorite',
            },
            {
                value: 'second child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child2',
                },
            },
            {
                value: 'third child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child3',
                },
            },
        ],
    },
    {
        data: {
            title: 'Display only dropdown button with icon settings',
            dropdownOnly: true,
        },
        icon: 'settings',
        value: '',
        obj: {
            t: '',
            p: '',
            k: 'bddb',
        },
        children: [
            {
                value: 'first child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child1',
                },
                icon: 'favorite',
            },
            {
                value: 'second child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child2',
                },
            },
            {
                value: 'third child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child3',
                },
            },
        ],
    },
    {
        data: {
            title: 'Display only dropdown button with icon predefined',
            dropdownOnly: true,
        },
        icon: '',
        value: 'Test',
        obj: {
            t: '',
            p: '',
            k: 'bddb',
        },
        children: [
            {
                value: 'first child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child1',
                },
                icon: 'favorite',
            },
            {
                value: 'second child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child2',
                },
            },
            {
                value: 'third child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child3',
                },
            },
        ],
    },
];

const bottoniera1 = document.getElementById('button-list-orizzontale');
bottoniera1.data = defaultData;
bottoniera1.addEventListener('kup-buttonlist-click', (e) => {
    alert(
        'Clicked button with index: [' +
            e.detail.id +
            '] smeupObject selected [' +
            JSON.stringify(e.detail.obj) +
            ']'
    );
});

const bottoniera2 = document.getElementById('button-list-verticale');
bottoniera2.columns = 1;
bottoniera2.data = defaultData;

// const bottoniera3 = document.getElementById('button-list-3-col');
// bottoniera3.columns = 3;
// bottoniera3.data = defaultData;

const bottoniera4 = document.getElementById('button-list-collapsed');
bottoniera4.data = defaultData;

const simpleData = [
    {
        data: {
            title: 'button flat 1 tooltip',
        },
        value: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
    {
        data: {
            title: 'button flat 2 tooltip',
        },
        value: 'Button Flat 2',
    },
    {
        data: {
            title: 'button flat 3 tooltip',
        },
        value: 'Button Flat 3',
    },
    {
        data: {
            title: 'button flat 4 tooltip',
        },
        value: 'Button Flat 4',
        children: [
            {
                value: 'first child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child1',
                },
            },
            {
                value: 'second child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child2',
                },
            },
            {
                value: 'third child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child3',
                },
            },
        ],
    },
    {
        data: {
            title: 'button flat 5 tooltip',
        },
        value: 'Button Flat 5',
    },
];
const iconsData = [
    {
        data: {
            trailingIcon: true,
            title: 'button flat 1 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
    {
        data: {
            trailingIcon: true,
            title: 'button flat 2 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 2',
    },
    {
        data: {
            trailingIcon: true,
            title: 'button flat 3 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 3',
    },
    {
        data: {
            trailingIcon: true,
            title: 'button flat 4 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 4',
        children: [
            {
                value: 'first child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child1',
                },
                icon: 'favorite',
            },
            {
                value: 'second child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child2',
                },
                icon: 'favorite',
            },
            {
                value: 'third child',
                obj: {
                    t: '',
                    p: '',
                    k: 'child3',
                },
                icon: 'favorite',
            },
        ],
    },
    {
        data: {
            trailingIcon: true,
            title: 'button flat 5 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 5',
    },
];

const flatButtonList = document.getElementById('flat-button-list');
flatButtonList.data = simpleData;

const flatButtonListIcons = document.getElementById('flat-button-list-icons');
flatButtonListIcons.data = iconsData;

const flatButtonListNeutral = document.getElementById(
    'flat-button-list-neutral'
);
flatButtonListNeutral.data = simpleData;

const flatButtonListIconsNeutral = document.getElementById(
    'flat-button-list-icons-neutral'
);
flatButtonListIconsNeutral.data = iconsData;

const outlinedButtonList = document.getElementById('outlined-button-list');
outlinedButtonList.data = simpleData;

const outlinedButtonListIcons = document.getElementById(
    'outlined-button-list-icons'
);
outlinedButtonListIcons.data = iconsData;

const outlinedButtonListNeutral = document.getElementById(
    'outlined-button-list-neutral'
);
outlinedButtonListNeutral.data = simpleData;

const outlinedButtonListIconsNeutral = document.getElementById(
    'outlined-button-list-icons-neutral'
);
outlinedButtonListIconsNeutral.data = iconsData;

const errorData = [
    {
        data: {
            title: 'button flat 1 tooltip',
        },
        value: 'Button Flat 1',
        icon: 'favorite',
        obj: {
            t: '',
            p: '',
            k: 'b1',
        },
    },
    {
        data: {
            title: 'button flat 2 tooltip',
        },
        value: 'Button Flat 2',
    },
    {
        data: {
            title: 'button flat 3 tooltip',
        },
        value: 'Button Flat 3',
    },
    {
        data: {
            title: 'button flat 4 tooltip',
        },
        icon: 'favorite',
        value: 'Button Flat 4',
    },
    {
        data: {
            title: 'button flat 5 tooltip',
        },
        value: 'Button Flat 5',
    },
];

const errorButtonList = document.getElementById('error-button-list');
errorButtonList.data = errorData;
