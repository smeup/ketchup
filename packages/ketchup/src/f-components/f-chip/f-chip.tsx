import { FunctionalComponent, h } from '@stencil/core';
import { FChipData, FChipsProps, FChipType } from './f-chip-declarations';
import { FImage } from '../f-image/f-image';
import { TreeNode } from '../../components/kup-tree/kup-tree-declarations';
import { KupDebugCategory } from '../../utils/kup-debug/kup-debug-declarations';
import { KupDom } from '../../utils/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FChip: FunctionalComponent<FChipsProps> = (props: FChipsProps) => {
    if (!props.type) {
        props.type = FChipType.STANDARD;
    }

    const isChoice = props.type.toLowerCase() === FChipType.CHOICE;
    const isFilter = props.type.toLowerCase() === FChipType.FILTER;
    const isInput = props.type.toLowerCase() === FChipType.INPUT;
    const classObj: Record<string, boolean> = {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': isChoice ? true : false,
        'mdc-chip-set--filter': isFilter ? true : false,
        'mdc-chip-set--input': isInput ? true : false,
    };

    return (
        <div
            class={`f-chip--wrapper ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            {...props.dataSet}
            id={props.id}
            title={props.title}
        >
            <div class={classObj} role="grid">
                {createChipList(props, isChoice, isFilter, isInput)}
            </div>
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

function createChipList(
    props: FChipsProps,
    isChoice: boolean,
    isFilter: boolean,
    isInput: boolean
): HTMLElement[] {
    const chipList: Array<HTMLElement> = [];
    let chipEl: HTMLElement;

    if (props.dataNew) {
        props.data = treeNode2Data(props.dataNew);
    }

    for (let i = 0; i < props.data.length; i++) {
        // could happen due to functions that change the data (such as transposition, etc)
        if (!props.data[i]) {
            continue;
        }

        let componentClass: string = 'mdc-chip';
        let iconEl = [];
        let iconClass = 'mdc-chip__icon mdc-chip__icon--leading';

        if (isFilter || isChoice) {
            if (props.data[i].checked) {
                componentClass += ' mdc-chip--selected';
                if (isFilter) {
                    iconClass += ' mdc-chip__icon--leading-hidden';
                }
            }
        }

        if (props.data[i].icon) {
            let p = {
                resource: props.data[i].icon,
                sizeX: '18px',
                sizeY: '18px',
                wrapperClass: iconClass,
            };
            iconEl.push(<FImage {...p} />);
        }

        if (isFilter) {
            iconEl.push(
                <span class="mdc-chip__checkmark">
                    <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                        <path
                            class="mdc-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                    </svg>
                </span>
            );
        }

        chipEl = (
            <div class={componentClass} role="row">
                <div class="mdc-chip__ripple"></div>
                {iconEl}
                <span role="gridcell">
                    <span
                        role="button"
                        tabindex={i}
                        class="mdc-chip__primary-action"
                        // @ts-ignore
                        value={props.data[i].value}
                        checked={props.data[i].checked}
                    >
                        <span class="mdc-chip__text">
                            {props.data[i].label}
                        </span>
                    </span>
                </span>
                {isInput ? (
                    <span role="gridcell">
                        <span
                            tabindex="-1"
                            class="icon-container material-icons mdc-chip__icon clear"
                        ></span>
                    </span>
                ) : undefined}
            </div>
        );
        chipList.push(chipEl);
    }

    return chipList;
}

/**
 * This function converts TreeNode[] to FChipData[]. This is valid until FChipData is removed.
 *
 * @return {FChipData} Array of FChipData.
 */
function treeNode2Data(dataNew: TreeNode[]): FChipData[] {
    function children(TreeNode: TreeNode) {
        for (let index = 0; index < TreeNode.children.length; index++) {
            const node: TreeNode = TreeNode.children[index];
            data.push({
                icon: TreeNode.children[index].icon,
                label: TreeNode.children[index].value,
                obj: TreeNode.children[index].obj,
                value: TreeNode.children[index].id,
            });
            if (node.children) {
                children(node);
            }
        }
    }
    const data: FChipData[] = [];
    for (let index = 0; index < dataNew.length; index++) {
        const node: TreeNode = dataNew[index];
        data.push({
            icon: node.icon,
            label: node.value,
            obj: node.obj,
            value: node.id,
        });
        if (node.children) {
            children(dataNew[index]);
        }
    }
    dom.ketchup.debug.logMessage(
        'f-chip',
        'Chip data was deducted from a TreeNode[] structure (experimental feature).',
        KupDebugCategory.WARNING
    );
    return data;
}
