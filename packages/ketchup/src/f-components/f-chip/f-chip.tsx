import { FunctionalComponent, h } from '@stencil/core';
import { FChipsProps } from './f-chip-declarations';
import { FImage } from '../f-image/f-image';

//---- Component ----

export const FChip: FunctionalComponent<FChipsProps> = (props: FChipsProps) => {
    const classObj: Record<string, boolean> = {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': props.type == 'choice' ? true : false,
        'mdc-chip-set--filter': props.type == 'filter' ? true : false,
        'mdc-chip-set--input': props.type == 'input' ? true : false,
    };

    return (
        <div id={props.id} class="f-chip--wrapper">
            <div class={classObj} role="grid">
                {createChipList(props)}
            </div>
        </div>
    );
};

//---- Methods ----

function createChipList(props: FChipsProps): HTMLElement[] {
    let chipList: Array<HTMLElement> = [];
    let chipEl: HTMLElement;

    for (let i = 0; i < props.data.length; i++) {
        let componentClass: string = 'mdc-chip';
        let iconEl = [];
        let iconClass = 'mdc-chip__icon mdc-chip__icon--leading';

        if (props.type == 'filter' || props.type == 'choice') {
            if (props.data[i].checked) {
                componentClass += ' mdc-chip--selected';
                if (props.type === 'filter') {
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

        if (props.type == 'filter') {
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
                {props.type == 'input' ? (
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
