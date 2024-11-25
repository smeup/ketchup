// Replace the object below with yours.
const compName = 'kup-input-panel';

// Replace the props below with yours.
const props = {
    type: 'SmeupDataTable',
    serviceInfo: {
        fun: 'F(EXU;B£SER_46;*SETUP) P(Script(NW24001027) SubScript(FMTUCLCSR)) INPUT(FIELDS(TESTO-UC(EDITABLE(true) VISIBLE(true) LENGTH(15)) TESTO-LC(EDITABLE(true) VISIBLE(true) LENGTH(15)))) SS(ID({i836631}) DV(W) CGr(INP) FFLD())',
        serviceName: 'B£SER_46',
    },
    columns: [
        {
            name: 'TESTO-UC',
            visible: true,
            isEditable: true,
        },
        {
            name: 'TESTO-LC',
            visible: true,
            isEditable: true,
        },
    ],
    rows: [
        {
            cells: {
                'TESTO-UC': {
                    editable: true,
                    data: {},
                    inputSettings: {
                        forceUppercase: true,
                    },
                },
                'TESTO-LC': {
                    editable: true,
                    data: {},
                    inputSettings: {
                        forceLowercase: true,
                    },
                },
            },
            id: '0',
        },
    ],
    setup: {
        operations: {
            update: true,
        },
    },
    debugInfo: {
        executionTime_ms: 18,
        initialTimestamp: '2024-11-25T15:46:00.268859977Z',
        finalTimestamp: '2024-11-25T15:46:00.287671936Z',
        runtime: 'Java 21',
    },
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
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
