import { FunctionalComponent, h } from '@stencil/core';
import { ComponentChipElement } from '../../../components/kup-chip/kup-chip-declarations';
import { FImage } from '../f-image/f-image';

interface Props {
    data?: ComponentChipElement[];
    type?: string;
}

export const FChip: FunctionalComponent<Props> = ({ data, type }) => {
    let MDCClass: string = setMDCClass(type);

    return (
        <div class="f-chip--wrapper">
            <div class={MDCClass} role="grid">
                {createChipList(data, type)}
            </div>
        </div>
    );
};

function createChipList(data: ComponentChipElement[], type: string) {
    let chipList: Array<HTMLElement> = [];
    let chipEl: HTMLElement;

    for (let i = 0; i < data.length; i++) {
        let componentClass: string = 'mdc-chip';
        let iconEl = [];
        let iconClass = 'mdc-chip__icon mdc-chip__icon--leading';
        let cancelIcon = undefined;

        if (type == 'filter' || type == 'choice') {
            if (data[i].checked) {
                componentClass += ' mdc-chip--selected';
                if (type === 'filter') {
                    iconClass += ' mdc-chip__icon--leading-hidden';
                }
            }
        }

        if (type == 'filter') {
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

        if (type === 'input') {
            cancelIcon = (
                <span role="gridcell">
                    <span
                        tabindex="-1"
                        class="icon-container material-icons mdc-chip__icon clear"
                    ></span>
                </span>
            );
        }

        if (data[i].icon) {
            let props = {
                resource: data[i].icon,
                sizeX: '18px',
                sizeY: '18px',
                wrapperClass: iconClass,
            };
            iconEl.push(<FImage {...props} />);
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
                        value={data[i].value}
                        checked={data[i].checked}
                    >
                        <span class="mdc-chip__text">{data[i].label}</span>
                    </span>
                </span>
                {cancelIcon}
            </div>
        );
        chipList.push(chipEl);
    }

    return chipList;
}

function setMDCClass(type: string) {
    if (type) {
        switch (type) {
            case 'choice':
                return 'mdc-chip-set mdc-chip-set--choice';
            case 'filter':
                return 'mdc-chip-set mdc-chip-set--filter';
            case 'input':
                return 'mdc-chip-set mdc-chip-set--input';
            default:
                return 'mdc-chip-set';
        }
    } else {
        return 'mdc-chip-set';
    }
}
