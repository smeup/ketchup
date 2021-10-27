const applyButton = document.getElementById('apply-button');
const columnField = document.getElementById('column-field');
const label = document.getElementById('navbar-label');
const navBar = document.getElementById('nav-bar');
const rowField = document.getElementById('row-field');
const tableField = document.getElementById('table-field');
const wrapper = document.getElementById('datatable-wrapper');
var data = null;
var end = 0;
var start = 0;

applyButton.addEventListener('kup-button-click', () => {
    refreshTables();
});

function refreshTables() {
    console.log('Refreshing...');
    document.querySelectorAll('kup-data-table').forEach((table) => {
        table.remove();
    });
    data = { columns: [], rows: [] };
    let nColumns, nRows, nTables;
    const columnPromise = columnField.getValue();
    const rowPromise = rowField.getValue();
    const tablePromise = tableField.getValue();
    const promises = [columnPromise, rowPromise, tablePromise];
    Promise.all(promises).then((values) => {
        nColumns = +values[0];
        nRows = +values[1];
        nTables = +values[2];

        for (let index = 0; index < nColumns; index++) {
            const i = index.toString();
            data.columns.push({
                name: i,
                title: i,
            });
        }
        for (let index = 0; index < nRows; index++) {
            const i = index.toString();
            data.rows.push({
                cells: createCells(i),
                id: i,
            });
        }
        for (let index = 0; index < nTables; index++) {
            const table = document.createElement('kup-data-table');
            table.data = { ...data };
            //table.lazyLoadRows = true;
            //table.rowsPerPage = 10;
            table.rowsPerPage = 100000;
            wrapper.appendChild(table);
        }
        label.innerText = `Created ${nTables} tables.`;
    });
}

function createCells(i) {
    const cells = {};
    for (let index = 0; index < data.columns.length; index++) {
        const column = data.columns[index];
        cells[column.name] = {
            value: 'Row ' + i + '; Col ' + column.name,
        };
    }
    return cells;
}
