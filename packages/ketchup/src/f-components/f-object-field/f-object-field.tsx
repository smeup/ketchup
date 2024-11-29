/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

import { Fragment, FunctionalComponent, h } from '@stencil/core';
import { FObjectFieldProps } from './f-object-field-declations';
import { FTextField } from '../f-text-field/f-text-field';
import { FButton } from '../f-button/f-button';
import { FButtonStyling } from '../f-button/f-button-declarations';

export const FObjectField: FunctionalComponent<FObjectFieldProps> = (
    props: FObjectFieldProps
) => {
    return (
        <Fragment>
            <FTextField
                icon={'table'}
                {...props.dataSet}
                disabled={false}
                onIconClick={props.onSearch}
                onInput={props.onInput}
                onKeyDown={(event) => {
                    onKeyDownHandler(event, props);
                }}
            ></FTextField>
            <FButton
                icon="menu"
                onClick={props.onOpenSearchMenu}
                styling={FButtonStyling.FLAT}
                wrapperClass="obj-field-extra-btn"
            ></FButton>
            {props.searchMenuData ? (
                <kup-toolbar data={props.searchMenuData}></kup-toolbar>
            ) : undefined}
        </Fragment>
    );
};

function onKeyDownHandler(event: UIEvent, props: FObjectFieldProps) {
    if ((event as KeyboardEvent).code === 'F4') {
        event.preventDefault();
        event.stopPropagation();
        props.onSearch(event);
    }
}
