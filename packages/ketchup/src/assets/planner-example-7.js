// Example 7 - Planner demo for stacked/grouped dependencies
// Minimal demo that maps client column names, includes phases with OPEDIP,
// injects extra tasks and structured dependencies to stress the renderer.

const comp = document.getElementById('planner');
if (!comp) throw new Error('No #planner element found on page');

comp.addEventListener('kup-planner-click', onclick);

const props = {
    data: {
        columns: [
            { name: 'CODCOM' },
            { name: 'CODSEQ' },
            { name: 'CODFAS' },
            { name: 'DESFAS' },
            { name: 'COLFAS' },
            { name: 'INISIM' },
            { name: 'FINSIM' },
            { name: 'INICON' },
            { name: 'FINCON' },
            { name: 'OPEDIP' },
        ],
        rows: [
            {
                id: 'cm1',
                cells: {
                    CODCOM: { value: 'CM1' },
                    CODSEQ: { value: '001' },
                    DESFAS: { value: 'COMMESSA 1' },
                    INICON: {
                        value: '2025-03-01',
                        obj: { k: '', p: '*YYMD', t: 'D8' },
                    },
                    FINCON: {
                        value: '2025-07-04',
                        obj: { k: '', p: '*YYMD', t: 'D8' },
                    },
                    INISIM: {
                        value: '2025-09-01',
                        obj: { k: '', p: '*YYMD', t: 'D8' },
                    },
                    FINSIM: {
                        value: '2025-12-05',
                        obj: { k: '', p: '*YYMD', t: 'D8' },
                    },
                    OPEDIP: { value: '' },
                },
                cssClass: 'clickable',
                readOnly: true,
            },
        ],
    },
    taskIdCol: 'CODCOM',
    taskNameCol: 'CODCOM',
    taskDates: ['INICON', 'FINCON'],
    taskPrevDates: ['INISIM', 'FINSIM'],
    phaseIdCol: 'CODFAS',
    phaseNameCol: 'DESFAS',
    phaseDates: ['INICON', 'FINCON'],
    phasePrevDates: ['INISIM', 'FINSIM'],
    phaseColorCol: 'COLFAS',
    dependencyCol: 'OPEDIP',
    dependencies: [],
};

const phases = {
    columns: [
        { name: 'CODCOM' },
        { name: 'CODSEQ' },
        { name: 'CODFAS' },
        { name: 'DESFAS' },
        { name: 'COLFAS' },
        { name: 'INISIM' },
        { name: 'FINSIM' },
        { name: 'INICON' },
        { name: 'FINCON' },
        { name: 'OPEDIP' },
    ],
    rows: [
        {
            id: '1',
            cells: {
                CODCOM: { value: 'CM1' },
                CODSEQ: { value: '110' },
                CODFAS: { value: '010' },
                DESFAS: { value: 'MONTAGGIO' },
                COLFAS: { value: '#000000' },
                INISIM: {
                    value: '2025-09-01',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINSIM: {
                    value: '2025-12-05',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                INICON: {
                    value: '2025-03-01',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINCON: {
                    value: '2025-07-04',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                OPEDIP: { value: '' },
            },
            readOnly: true,
        },
        {
            id: '2',
            cells: {
                CODCOM: { value: 'CM1' },
                CODSEQ: { value: '120' },
                CODFAS: { value: '020' },
                DESFAS: { value: 'COLLAUDO' },
                COLFAS: { value: '#05E808' },
                INISIM: {
                    value: '2025-12-08',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINSIM: {
                    value: '2026-04-08',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                INICON: {
                    value: '2025-07-07',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINCON: {
                    value: '2025-09-29',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                OPEDIP: { value: '010' },
            },
            readOnly: true,
        },
        {
            id: '3',
            cells: {
                CODCOM: { value: 'CM1' },
                CODSEQ: { value: '130' },
                CODFAS: { value: '030' },
                DESFAS: { value: 'SPEDIZIONE' },
                COLFAS: { value: '#05CAE8' },
                INISIM: {
                    value: '2026-05-13',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINSIM: {
                    value: '2026-07-08',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                INICON: {
                    value: '2025-09-30',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINCON: {
                    value: '2025-12-09',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                OPEDIP: { value: '010,020' },
            },
            readOnly: true,
        },
        {
            id: '4',
            cells: {
                CODCOM: { value: 'CM1' },
                CODSEQ: { value: '140' },
                CODFAS: { value: '040' },
                DESFAS: { value: 'INSTALLAZIONE' },
                COLFAS: { value: '#3605E8' },
                INISIM: {
                    value: '2026-07-09',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINSIM: {
                    value: '2026-11-05',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                INICON: {
                    value: '2025-12-10',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINCON: {
                    value: '2026-03-04',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                OPEDIP: { value: '030' },
            },
            readOnly: true,
        },
        {
            id: '5',
            cells: {
                CODCOM: { value: 'CM1' },
                CODSEQ: { value: '150' },
                CODFAS: { value: '050' },
                DESFAS: { value: 'FORMAZIONE' },
                COLFAS: { value: '#BB05E8' },
                INISIM: {
                    value: '2026-11-19',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINSIM: {
                    value: '2028-02-02',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                INICON: {
                    value: '2026-03-05',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                FINCON: {
                    value: '2026-07-23',
                    obj: { k: '', p: '*YYMD', t: 'D8' },
                },
                OPEDIP: { value: '040' },
            },
            readOnly: true,
        },
    ],
};

// Inject extra mock tasks and structured dependencies for stress testing
const extras = { tasks: [], deps: [] };
if (
    props &&
    props.data &&
    Array.isArray(props.data.rows) &&
    props.data.rows[0]
) {
    const sampleRow = props.data.rows[0];
    ['G419', 'G420', 'G421'].forEach((gid, idx) => {
        const clone = JSON.parse(JSON.stringify(sampleRow));
        clone.id = 'x-' + gid;
        if (!clone.cells) clone.cells = {};
        clone.cells[props.taskIdCol] = { value: gid };
        // ensure visible dates (ISO format with date metadata so planner accepts them)
        clone.cells[props.taskDates[0]] = {
            value: '2025-01-01',
            obj: { k: '', p: '*YYMD', t: 'D8' },
        };
        clone.cells[props.taskDates[1]] = {
            value: '2025-02-01',
            obj: { k: '', p: '*YYMD', t: 'D8' },
        };
        extras.tasks.push(clone);
    });
    if (extras.tasks.length) props.data.rows.splice(1, 0, ...extras.tasks);
    /*
    extras.deps.push(
        { id: 'gd1', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
        { id: 'gd2', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
        { id: 'gd3', sourceId: 'G419', targetId: 'G419_P100', type: 'FS' },
        { id: 'gd4', sourceId: 'G418', targetId: 'G419', type: 'FS' },
        { id: 'gd5', sourceId: 'G420', targetId: 'G421', type: 'FS' },
        { id: 'gd6', sourceId: 'G420', targetId: 'G418_P750', type: 'FS' },
        { id: 'gd7', sourceId: 'G420', targetId: 'G418_P750', type: 'FS' }
    );
*/
    props.dependencies.push(...extras.deps);
}

// assign props to the component (deep-clone data to ensure watchers trigger)
for (const key in props) {
    if (key === 'data') comp.data = JSON.parse(JSON.stringify(props.data));
    else comp[key] = props[key];
}

try {
    if (typeof comp.refresh === 'function') comp.refresh();
} catch (e) {
    // ignore
}

function onclick(event) {
    const clickedId =
        event.detail && event.detail.value && event.detail.value.id;
    console.log('planner-example-7 onclick', {
        clickedId,
        event: event.detail,
    });
    if (clickedId) comp.addPhases(clickedId, phases);
}

// (Extra dependencies already injected above in `extras.deps` and props.dependencies)

// Re-assign props to the component so changes apply at runtime when example loads.
// Use deep clones for `data` and `dependencies` so the kup-planner prop watchers
// detect new object references and update internal state.
try {
    if (comp && props) {
        for (const key in props) {
            if (key === 'data' && props.data) {
                // deep clone to ensure a new reference
                try {
                    comp.data = JSON.parse(JSON.stringify(props.data));
                    continue;
                } catch (e) {
                    // fallback to direct assign if cloning fails
                    comp.data = props.data;
                    continue;
                }
            }

            if (key === 'dependencies' && props.dependencies) {
                try {
                    comp.dependencies = JSON.parse(
                        JSON.stringify(props.dependencies)
                    );
                    continue;
                } catch (e) {
                    comp.dependencies = props.dependencies;
                    continue;
                }
            }

            comp[key] = props[key];
        }
        // Trigger a refresh so the component rebuilds its internal items from the
        // newly assigned `data` and `dependencies` (some implementations rely on
        // prop watchers which fire on reference changes; calling refresh ensures
        // the UI syncs immediately).
        try {
            if (typeof comp.refresh === 'function') comp.refresh();
        } catch (e) {
            // ignore
        }
    }
} catch (e) {
    // ignore assignment failures
}

// Expose phases for manual inspection and auto-invoke addPhases for a quick smoke test.
try {
    // store phases globally so it's easy to call from the browser console
    window.__planner_example_7_phases = phases;
    // try to auto-invoke addPhases when the component is ready
    const tryInvoke = () => {
        const c = document.getElementById('planner');
        if (c && typeof c.addPhases === 'function') {
            try {
                console.log(
                    'planner-example-7: auto-invoking addPhases for CM1'
                );
                c.addPhases('CM1', phases);
                // also print plannerProps deps if available after a short delay
                setTimeout(() => {
                    try {
                        // eslint-disable-next-line no-console
                        console.log(
                            'planner-example-7: plannerProps deps',
                            c.plannerProps && c.plannerProps.mainGantt
                                ? c.plannerProps.mainGantt.dependencies
                                : undefined
                        );
                    } catch (e) {}
                }, 300);
            } catch (e) {
                // ignore invocation errors
            }
        } else {
            // retry a few times
            setTimeout(tryInvoke, 200);
        }
    };
    tryInvoke();
} catch (e) {
    // ignore global attach errors
}
