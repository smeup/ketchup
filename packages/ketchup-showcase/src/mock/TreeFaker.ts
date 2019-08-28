import {Cell, GenericMap, RowAction} from "ketchup/src/components/kup-data-table/kup-data-table-declarations";

const treeExpandedPropName = '_kupTreeIsExpanded';

const TreeDataPool = {
    cellStyles: [
        {
            'background-color': '#545454',
            color: 'rgba(0,50,80,.87)'
        },
        {
            'background-color': 'rgba(0,255,0,.54)',
            color: 'white',
            'font-size': '20px'
        },
        {
            'background-color': 'brick',
            color: 'rgba(130,20,200,.54)',
            'text-decoration': 'underline',
        },
    ],
    columnsName: ['Mat', 'Program', 'Attack', 'Defense'],
    nameValues: ['DELGIO', 'CASFRA', 'PARFRA', 'FIOGIA', 'ZAMCHI'],
    programValues: ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go']
};

/**
 * If the Math.random() value is equal lower than the given a threshold, return true. False otherwise.
 * @param probability - The probability that the returned boolean will be truthy.
 */
function getBooleanOnProbability(probability: number = .5): boolean {
    return Math.random() < probability;
}

function getRandomInteger(maximum: number = 10): number {
    return Math.round(Math.random() * maximum);
}

function ColumnFactory(index: number, forceVisibility: boolean = false) {
    let colName = TreeDataPool.columnsName[index]
        ? TreeDataPool.columnsName[index]
        : 'Col' + index;

    return {
        name: colName,
        title: colName + ' Title',
        visible: forceVisibility || getBooleanOnProbability(.7),
    }
}

function TreeNodeFactory(
    columns: any[],
    depth: {
        current: number,
        max: number
    } = {
        current: 0,
        max: 5
    },
    index: number,
    options: {
        minimumChildCount: number,
        maximumChildCount?: number,
        propagate?: boolean,
    } = {
        minimumChildCount: 0,
    }) {
    const childrenCount = Math.max(getRandomInteger(options.maximumChildCount || 5), options.minimumChildCount);
    const children: any[] = [];

    // If it can have children, adds children to this node
    if (depth.current < depth.max && childrenCount) {
        for (let i = 0; i < childrenCount; i++) children.push(
            TreeNodeFactory(
                columns,
                {
                    current: depth.current + 1,
                    max: depth.max,
                },
                i,
                options.propagate ? options : undefined
            )
        );
    }

    // Defines a generated value to be used
    const depthAndIndex: string = depth.current.toString() + index.toString();

    // Adds cells to the Node
    let cells: {[index: string]: object;} = {};
    if (columns && columns.length) {
        for (let j = 0; j < columns.length; j++) {
            const colName = columns[j].name;
            const cellValue = depthAndIndex + colName;
            cells[colName] = {
                obj: {
                    t: 'NR',
                    p: '',
                    k: cellValue,
                },
                value: cellValue,
                style: getBooleanOnProbability(.2) ? TreeDataPool.cellStyles[getRandomInteger(TreeDataPool.cellStyles.length - 1)] : null,
                options: getBooleanOnProbability(.5),
                //config: any,
            };
        }
    }

    return {
        // actions?: Array<RowAction>;
        cells,

        children,

        disabled: getBooleanOnProbability(.3),

        expandable: !!childrenCount,

        iconClass: 'account',

        id: depthAndIndex + childrenCount.toString(),

        value: TreeDataPool.nameValues[getRandomInteger(TreeDataPool.nameValues.length - 1)] + depthAndIndex, // TODO check if this is here
    };
}

/**
 * Function returning the columns and the data to create and initialize a kup-tree component.
 * @param treeDepth - How many subtree a tree can have.
 * @param columnCount - How many columns the columns field must generate.
 * @param options - Generic options
 * @param treeOptions - Options bag to pass to the treeNodeFactory
 * @returns {{columns: array, data: object}}*
 */
export function TreeFactory(
    treeDepth: number = 5,
    columnCount: number = 4,
    options: {
        forceColumnVisibility: boolean,
    } = {
        forceColumnVisibility: false,
    },
    treeOptions: {
        minimumChildCount: number,
        propagate?: boolean,
    } = {
        minimumChildCount: 5,
    }
) {
    let tree = {},
        columns = [];

    for (let i = 0; i < columnCount; i++) {
        columns.push(ColumnFactory(i, options.forceColumnVisibility));
    }

    return {
        columns,
        data: TreeNodeFactory(
            columns,
            {
                current: -1,
                max: treeDepth
            },
            -1,
            treeOptions,
        ),
    }
}