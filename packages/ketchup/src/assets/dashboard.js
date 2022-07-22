const dashboard1 = document.getElementById('dashboard1');
const dashboard2 = document.getElementById('dashboard2');
const dashboard3 = document.getElementById('dashboard3');
const dashboard4 = document.getElementById('dashboard4');
const enableDashboard1 = document.getElementById('enableDashboard1');
const enableDashboard2 = document.getElementById('enableDashboard2');
const enableDashboard3 = document.getElementById('enableDashboard3');
const enableDashboard4 = document.getElementById('enableDashboard4');
const loginSample1 = document.getElementById('loginSample1');
const loginSample2 = document.getElementById('loginSample2');
const loginSample3 = document.getElementById('loginSample3');

dashboard1.addEventListener('kup-dashboard-save', function (ev) {
    console.log(ev);
    alert('Saved!');
});
dashboard2.addEventListener('kup-dashboard-save', function (ev) {
    console.log(ev);
    alert('Saved!');
});
dashboard3.addEventListener('kup-dashboard-save', function (ev) {
    console.log(ev);
    alert('Saved!');
});
dashboard4.addEventListener('kup-dashboard-save', function (ev) {
    console.log(ev);
    alert('Saved!');
});
enableDashboard1.addEventListener('kup-switch-change', function (ev) {
    dashboard1.enableDesign = ev.detail.value == 'on';
});
enableDashboard2.addEventListener('kup-switch-change', function (ev) {
    dashboard2.enableDesign = ev.detail.value == 'on';
});
enableDashboard3.addEventListener('kup-switch-change', function (ev) {
    dashboard3.enableDesign = ev.detail.value == 'on';
});
enableDashboard4.addEventListener('kup-switch-change', function (ev) {
    dashboard4.enableDesign = ev.detail.value == 'on';
});

const data1 = {
    layout: 'column',
    sections: [
        {
            layout: 'column',
            sections: [],
            id: 'SA',
            loaded: true,
            dim: '10%',
        },
        {
            layout: 'column',
            sections: [],
            id: 'SB',
            loaded: true,
            dim: '10%',
        },
        {
            layout: 'column',
            sections: [],
            id: 'SC',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SD',
            loaded: true,
        },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
    type: 'SCH',
    loaded: true,
};

const data2 = {
    layout: 'column',
    sections: [
        {
            layout: 'row',
            sections: [
                {
                    layout: 'column',
                    sections: [],
                    id: 'SA1',
                    loaded: true,
                },
                {
                    layout: 'column',
                    sections: [],
                    id: 'SA2',
                    loaded: true,
                },
            ],
            id: 'SA',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SB',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SC',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SD',
            loaded: true,
        },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_06)',
    type: 'SCH',
    loaded: true,
};
const data4 = {
    layout: 'column',
    sections: [
        {
            layout: 'column',
            sections: [],
            id: 'SA',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SB',
            loaded: true,
        },
        {
            layout: 'column',
            sections: [],
            id: 'SC',
            loaded: true,
        },
    ],
    fun: 'F(EXD;*SCO;) 2(MB;SCP_SCH;MU_X21_01)',
    type: 'SCH',
    loaded: true,
};

dashboard1.data = data1;
dashboard2.data = data2;
dashboard3.data = data1;
dashboard4.data = data4;
loginSample1.data = {
    columns: [{ name: 'C1', title: 'Login for develop environment' }],
};
loginSample2.data = {
    columns: [{ name: 'C1', title: 'Login for staging environment' }],
};
loginSample3.data = {
    columns: [{ name: 'C1', title: 'Login for production environment' }],
};
