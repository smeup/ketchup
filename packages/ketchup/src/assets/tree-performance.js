const applyButton = document.getElementById('apply-button');
const columnField = document.getElementById('column-field');
const depthField = document.getElementById('depth-field');
const label = document.getElementById('navbar-label');
const navBar = document.getElementById('nav-bar');
const rootField = document.getElementById('root-field');
const treeField = document.getElementById('tree-field');
const wrapper = document.getElementById('tree-wrapper');
var columns = null;
var data = null;
var present = false;

applyButton.addEventListener('kup-button-click', () => {
    refreshTree();
});

function refreshTree() {
    console.log('Refreshing...');
    document.querySelectorAll('kup-tree').forEach((tree) => {
        tree.remove();
    });
    document.querySelectorAll('hr').forEach((line) => {
        line.remove();
    });
    data = [];
    columns = [];
    let nRootsNode, nDepth, nTrees, nColumns;
    const rootPromise = rootField.getValue();
    const depthPromise = depthField.getValue();
    const treePromise = treeField.getValue();
    const columnPromise = columnField.getValue();
    const promises = [rootPromise, depthPromise, treePromise, columnPromise];
    Promise.all(promises).then((values) => {
        nRootsNode = +values[0];
        nDepth = +values[1];
        nTrees = +values[2];
        nColumns = +values[3];

        if (nColumns > 0) {
            present = true;
            for (let index = 0; index < nColumns; index++) {
                const i = index.toString();
                columns.push({
                    name: i,
                    title: i,
                });
            }
        }
        console.log('1--');
        for (let i = 0; i < nRootsNode; i++) {
            let node = createNodes(i, nDepth);
            data.push(node);
        }
        console.log('2--');
        for (let index = 0; index < nTrees; index++) {
            const tree = document.createElement('kup-tree');
            const line = document.createElement('hr');
            tree.setAttribute('show-columns', 'false');
            if (present) {
                tree.setAttribute('show-columns', 'true');
                tree.setAttribute('show-header', 'true');
            }
            tree.columns = columns;
            tree.data = data;
            wrapper.appendChild(tree);
            wrapper.appendChild(line);
        }
        label.innerText = `Created ${nTrees} Trees.`;
    });
}

function createNodes(i, depth) {
    let node = {
        cells: {},
        children: [],
        disabled: false,
        expandable: true,
        icon: 'widgets',
        id: '00' + i,
        isExpanded: true,
        obj: { t: '', p: '', k: 'Node ' + i },
        options: true,
        value: 'Node ' + i,
    };
    if (depth > 0) {
        depth -= 1;
        for (let x = 0; x < depth; x++) {
            let childe = createNodes(x, depth);
            node.children.push(childe);
        }
    }
    node.cells = createCells(i);
    return node;
}

function createCells(i) {
    const cells = {};
    for (let index = 0; index < columns.length; index++) {
        const column = columns[index];
        cells[column.name] = {
            value: 'Row ' + i + '; Col ' + column.name,
        };
    }
    return cells;
}
