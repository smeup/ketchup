// Replace the object below with yours.
const compName = 'kup-planner';

var comp;

// Replace the props below with yours.
const props = {
    titleMess: 'Titolo',
    taskIdCol: 'ID',
    taskNameCol: 'NAME',
    taskDates: ['START', 'END'],
    taskPrevDates: ['SEC_START', 'SEC_END'],
    taskColumns: ['ID', 'NAME'],
    phaseIdCol: 'ID',
    phaseNameCol: 'NAME',
    phaseDates: ['START', 'END'],
    phasePrevDates: ['SEC_START', 'SEC_END'],
    phaseColorCol: 'PHASE_COL',
    data: getMockupTaskDatas(),
};

const wrapper = document.querySelector('#debug-wrapper');
if (props) {
    comp = document.createElement(compName);
    for (const key in props) {
        comp[key] = props[key];
    }
    comp.addEventListener('kup-planner-click', (e) => {
        const ganttRow = e.detail.value;
        console.log('kup-planner-click', ganttRow);
        if (ganttRow.type == 'task') {
            comp.addPhases(ganttRow.name, getMockupPhaseDatas());
        } else {
            console.log("I don't know what i have to do...");
        }
    });
    comp.addEventListener('kup-planner-date-change', (e) => {
        const ganttRow = e.detail.value;
        console.log('kup-planner-date-change', ganttRow);
    });

    wrapper.append(comp);
} else {
    const span = document.createElement('span');
    span.innerText = 'Did you forget to paste your props?';
    wrapper.append(span);
}

function getMockupTaskDatas() {
    return {
        columns: [
            {
                name: 'ID',
                title: 'Task identifier',
            },
            {
                name: 'NAME',
                title: 'Task name',
            },
            {
                name: 'START',
                title: 'Task start date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'END',
                title: 'Task end date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'SEC_START',
                title: 'Forecast task start date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'SEC_END',
                title: 'Forecast task end date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
        ],
        rows: [
            {
                cells: {
                    ID: {
                        value: 'G456',
                    },
                    NAME: {
                        value: 'G456',
                    },
                    START: {
                        value: '2022-06-04',
                    },
                    END: {
                        value: '2022-12-04',
                    },
                    SEC_START: {
                        value: '2022-06-04',
                    },
                    SEC_END: {
                        value: '2022-12-04',
                    },
                },
            },
        ],
    };
}

function getMockupPhaseDatas() {
    return {
        columns: [
            {
                name: 'ID',
                title: 'Phase identifier',
            },
            {
                name: 'NAME',
                title: 'Phase name',
            },
            {
                name: 'START',
                title: 'Phase start date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'END',
                title: 'Phase end date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'SEC_START',
                title: 'Forecast phase start date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'SEC_END',
                title: 'Forecast phase end date',
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '',
                },
            },
            {
                name: 'PHASE_COL',
                title: 'Color',
                obj: {
                    t: '',
                    p: '',
                    k: '',
                },
            },
        ],
        rows: [
            {
                cells: {
                    ID: {
                        value: 'F001',
                    },
                    NAME: {
                        value: 'F001',
                    },
                    START: {
                        value: '2022-07-04',
                    },
                    END: {
                        value: '2022-08-04',
                    },
                    SEC_START: {
                        value: '2022-07-04',
                    },
                    SEC_END: {
                        value: '2022-08-04',
                    },
                    PHASE_COL: {
                        value: '#FF0000',
                    },
                },
            },
        ],
    };
}
