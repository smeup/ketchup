const defaultData = [
    {
        data: {
            trailingIcon: true,
            title: 'button 1 tooltip',
        },
        icon: 'favorite',
        value: 'b1',
        decode: 'Button with Favorite icon',
        obj: {
            t: '',
            p: '',
        },
    },
    {
        data: {
            trailingIcon: true,
            title: 'button 2 tooltip',
        },
        icon: 'alarm',
        value: 'b2',
        decode: 'Button with Alarm icon',
        obj: {
            t: '',
            p: '',
        },
    },
    {
        data: {
            title: 'button 3 tooltip',
        },
        icon: 'favorite',
        value: 'b3',
        decode: 'Button with Favorite icon left',
        obj: {
            t: '',
            p: '',
        },
    },
    {
        data: {
            trailingIcon: true,
            title: 'button dropdown tooltip',
        },
        icon: 'favorite',
        value: 'bddb',
        decode: 'Raised trailing favorite dropdown',
        obj: {
            t: '',
            p: '',
        },
        children: [
            {
                value: 'child1',
                decode: 'first child',
                obj: {
                    t: '',
                    p: '',
                },
                icon: 'favorite',
            },
            {
                value: 'child2',
                decode: 'second child',
                obj: {
                    t: '',
                    p: '',
                },
            },
            {
                value: 'child3',
                decode: 'third child',
                obj: {
                    t: '',
                    p: '',
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
        },
        children: [
            {
                value: 'child1',
                decode: 'first child',
                obj: {
                    t: '',
                    p: '',
                },
                icon: 'favorite',
            },
            {
                value: 'child2',
                decode: 'second child',
                obj: {
                    t: '',
                    p: '',
                },
            },
            {
                value: 'child3',
                decode: 'third child',
                obj: {
                    t: '',
                    p: '',
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
        value: 'bddb',
        decode: 'Test',
        obj: {
            t: '',
            p: '',
        },
        children: [
            {
                value: 'child1',
                decode: 'first child',
                obj: {
                    t: '',
                    p: '',
                },
                icon: 'favorite',
            },
            {
                value: 'child2',
                decode: 'second child',
                obj: {
                    t: '',
                    p: '',
                },
            },
            {
                value: 'child3',
                decode: 'third child',
                obj: {
                    t: '',
                    p: '',
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

const bottoniera3 = document.getElementById('button-list-3-col');
bottoniera3.columns = 3;
bottoniera3.data = defaultData;

const bottoniera4 = document.getElementById('button-list-collapsed');
bottoniera4.data = defaultData;

const simpleData = [
    {
        data: {
            title: 'button flat 1 tooltip',
        },
        value: 'b1',
        decode: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
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
                value: 'child1',
                decode: 'first child',
                obj: {
                    t: '',
                    p: '',
                },
            },
            {
                value: 'child2',
                decode: 'second child',
                obj: {
                    t: '',
                    p: '',
                },
            },
            {
                value: 'child3',
                decode: 'third child',
                obj: {
                    t: '',
                    p: '',
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
        value: 'b1',
        decode: 'Button Flat 1',
        obj: {
            t: '',
            p: '',
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
                value: 'child1',
                decode: 'first child',
                obj: {
                    t: '',
                    p: '',
                },
                icon: 'favorite',
            },
            {
                value: 'child2',
                decode: 'second child',
                obj: {
                    t: '',
                    p: '',
                },
                icon: 'favorite',
            },
            {
                value: 'child3',
                decode: 'third child',
                obj: {
                    t: '',
                    p: '',
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
