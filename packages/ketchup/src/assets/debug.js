// Replace the object below with yours.
const compName = 'kup-input-panel';

// Replace the props below with yours.
/*
const props = {
    checked: true,
    customStyle: '',
    disabled: false,
    icon: 'favorite',
    iconOff: null,
    label: null,
    styling: 'raised',
    toggable: false,
    trailingIcon: false,
};
*/

const props = {
    customStyle: '',
    data: {
        type: 'SmeupDataTable',
        columns: [
            {
                name: 'MTS',
                title: 'Multi Select',
                visible: true,
                obj: {
                    t: 'JL',
                    p: 'CNSED',
                    k: '',
                },
            },
            {
                name: 'AML',
                title: 'Multi Autocomplete',
                visible: true,
                obj: {
                    t: 'JL',
                    p: 'CNSED',
                    k: '',
                },
            },
        ],
        rows: [
            {
                cells: {
                    MTS: {
                        value: 'ERB;BRN;FAE',
                        obj: {
                            t: 'JL',
                            p: 'CNSED',
                            k: 'ERB;BRN;FAE',
                        },
                        data: {
                            displayMode: 'Both',
                        },
                        shape: 'MTS',
                        isEditable: true,
                        decode: 'Erbusco;Via Parenzo (Brescia);Faenza',
                        style: {},
                        fun: 'F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))',
                    },
                    AML: {
                        value: 'ERB;BRN;FAE',
                        obj: {
                            t: 'JL',
                            p: 'CNSED',
                            k: 'ERB;BRN;FAE',
                        },
                        data: {
                            displayMode: 'Both',
                        },
                        shape: 'AML',
                        isEditable: true,
                        decode: 'Erbusco;Via Parenzo (Brescia);Faenza',
                        style: {},
                        fun: 'F(EXB;LOA10_SE;ELK.COM) 1([T1];[P1];)  P(K([K1]) RPa(500))',
                    },
                },
                id: '0',
            },
        ],
    },
    hiddenSubmitButton: false,
    buttonPosition: 'BOTTOM',
    inputPanelPosition: 'COLUMNS',
    autoSkip: false,
    autoFocus: false,
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
    console.log(props.data);
    const comp = document.createElement(compName);
    for (const key in props) {
        comp[key] = props[key];
    }
    wrapper.append(comp);
} else {
    const span = document.createElement('span');
    span.innerText = 'Did you forget to paste your props?';
    wrapper.append(span);
}
