/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

import { FunctionalComponent, h } from '@stencil/core';
import { FObjectFieldProps } from './f-object-field-declations';
import { FTextField } from '../f-text-field/f-text-field';
import { FButton } from '../f-button/f-button';
import { FButtonStyling } from '../f-button/f-button-declarations';

export const FObjectField: FunctionalComponent<FObjectFieldProps> = (
    props: FObjectFieldProps
) => {
    return (
        <div ref={(el) => (props.element = el)}>
            <FTextField
                icon={'search'}
                trailingIcon={true}
                {...props.dataSet}
                disabled={false}
                onIconClick={props.onSearch}
                onInput={props.onInput}
                onKeyDown={(event) => {
                    onKeyDownHandler(event, props);
                }}
            ></FTextField>
            <FButton
                icon={'menu'}
                onClick={(e) => onOpenMenuHandler(e, props)}
                styling={FButtonStyling.FLAT}
                wrapperClass="obj-field-extra-btn"
            ></FButton>

            <kup-toolbar
                style={{ display: props.menuVisible ? 'block' : 'none' }}
                data={props.menuData}
                onKup-toolbar-click={props.onSelectedMenuItem}
            ></kup-toolbar>
        </div>
    );
};

function onKeyDownHandler(event: UIEvent, props: FObjectFieldProps) {
    if ((event as KeyboardEvent).code === 'F4') {
        event.preventDefault();
        event.stopPropagation();
        props.onSearch(event);
    }
}

function onOpenMenuHandler(event: UIEvent, props: FObjectFieldProps) {
    const button = props.element?.querySelector('button');
    const toolbar = props.element?.querySelector('kup-toolbar');
    const coords = getCoords(button);
    toolbar.style.top = `${coords.top}px`;
    toolbar.style.left = `${coords.left}px`;
    toolbar.style.position = `absolute`;
    props.onOpenMenu(event);
}

function getCoords(element: HTMLElement): { top: number; left: number } {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
    };
}
