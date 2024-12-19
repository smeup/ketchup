import { FunctionalComponent, h } from '@stencil/core';
import { KupDataCell } from '../../components';
import { KupDynamicPositionPlacement } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupComponentSizing } from '../../types/GenericTypes';
import { FButton } from '../f-button/f-button';
import { FButtonStyling } from '../f-button/f-button-declarations';
import { FTextField } from '../f-text-field/f-text-field';
import {
    FObjectFieldEventHandlers,
    FObjectFieldEventPayload,
    FObjectFieldEvents,
    FObjectFieldProps,
    FObjectFieldState,
    FObjectFieldStateChildren,
} from './f-object-field-declarations';

const STATE = new WeakMap<KupDataCell, FObjectFieldState>();

export const FObjectField: FunctionalComponent<FObjectFieldProps> = (
    props: FObjectFieldProps
) => {
    return (
        <div
            class={`f-object-field ${
                props.wrapperClass ? props.wrapperClass : ''
            }`}
            ref={async (el) => {
                if (el) {
                    props.root = el;
                    setState(props);
                }
            }}
        >
            <FTextField
                icon={'search'}
                trailingIcon={true}
                disabled={false}
                {...props.cell?.data}
                value={props.inputValue}
                onChange={props.onChange}
                onIconClick={handlers.icon.bind(props)}
                onInput={handlers.input.bind(props)}
                onKeyDown={handlers.keydown.bind(props)}
            ></FTextField>
            <FButton
                icon={'menu'}
                onClick={handlers.button.bind(props)}
                sizing={KupComponentSizing.SMALL}
                styling={FButtonStyling.FLAT}
                wrapperClass="obj-field-extra-btn"
            ></FButton>
            <kup-toolbar
                onKup-toolbar-click={handlers.toolbar.bind(props)}
            ></kup-toolbar>
        </div>
    );
};

function openList(props: FObjectFieldProps) {
    const { cell } = props;

    const state = STATE.get(cell);
    const { isListOpened, clickCb } = state;
    const { button, toolbar } = getChildren(state);

    if (isListOpened) {
        return;
    }

    const kupManager = kupManagerInstance();
    if (kupManager.dynamicPosition.isRegistered(toolbar)) {
        kupManager.dynamicPosition.changeAnchor(toolbar, button);
    } else {
        kupManager.dynamicPosition.register(
            toolbar,
            button,
            0,
            KupDynamicPositionPlacement.AUTO,
            false
        );
    }

    kupManager.dynamicPosition.start(toolbar);
    kupManager.addClickCallback(clickCb, true);

    toolbar.style.display = 'block';

    state.isListOpened = true;
}

function closeList(props: FObjectFieldProps) {
    const { cell } = props;

    const state = STATE.get(cell);
    const { clickCb } = state;
    const { toolbar } = getChildren(state);

    const kupManager = kupManagerInstance();
    kupManager.dynamicPosition.stop(toolbar);
    kupManager.removeClickCallback(clickCb);

    toolbar.style.display = 'none';

    state.isListOpened = false;
}

function toggleList(props: FObjectFieldProps) {
    const { cell } = props;

    const state = STATE.get(cell);
    const { isListOpened } = state;

    if (isListOpened) {
        closeList(props);
    } else {
        openList(props);
    }
}

const getChildren = (state: FObjectFieldState): FObjectFieldStateChildren => {
    const { children, clickCb, root } = state;

    if (!Object.keys(state.children).length) {
        children.button = root.querySelector('.f-button');
        children.textfield = root.querySelector('.f-text-field');
        children.toolbar = root.querySelector('kup-toolbar');
        clickCb.el = children.toolbar;
    }

    return children;
};

const setState = (props: FObjectFieldProps) => {
    const { cell, root } = props;

    const state = STATE.get(cell);

    if (!state) {
        STATE.set(cell, {
            children: {},
            clickCb: { cb: closeList.bind(closeList, props) },
            inputValue: props.inputValue,
            isListOpened: false,
            root,
        });
    } else {
        STATE.set(cell, { ...state, root, children: getChildren(state) });
    }
};

const emitter = (
    props: FObjectFieldProps,
    name: FObjectFieldEvents,
    originalEvent: Event
) => {
    const { cell, root } = props;

    const { children, inputValue } = STATE.get(cell);

    const e = new CustomEvent<FObjectFieldEventPayload>(name, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: { cell, children, inputValue, originalEvent },
    });
    root.dispatchEvent(e);
};

const handlers: FObjectFieldEventHandlers = {
    button: function (e) {
        toggleList(this);
        emitter(this, 'kup-objectfield-opensearchmenu', e);
    },
    icon: function (e) {
        emitter(this, 'kup-objectfield-searchpayload', e);
    },
    input: function (e) {
        const { cell } = this;

        const state = STATE.get(cell);

        state.inputValue = (e.target as HTMLInputElement).value;
    },
    keydown: function (e) {
        if (e.code === 'F4') {
            e.preventDefault();
            e.stopPropagation();
            emitter(this, 'kup-objectfield-searchpayload', e);
        }
    },
    toolbar: function (e) {
        closeList(this);
        emitter(this, 'kup-objectfield-selectedmenuitem', e);
    },
};
