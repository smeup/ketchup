import { h, VNode } from '@stencil/core';
import {
    KupCardBuiltInOpenAIOptions,
    KupCardCSSClasses,
} from '../kup-card-declarations';
import { KupCard } from '../kup-card';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { FImage } from '../../../f-components/f-image/f-image';
import { FButton } from '../../../f-components/f-button/f-button';

let inputArea: HTMLKupTextFieldElement = null;
let clearButton: HTMLKupButtonElement = null;
let submitButton: HTMLKupButtonElement = null;

export function prepareOpenAIInterface(component: KupCard): VNode[] {
    const options = component.data.options as KupCardBuiltInOpenAIOptions;

    const clear = () => {
        inputArea.setValue('');
    };

    const disableInteractivity = (status: boolean) => {
        clearButton.disabled = status;
        inputArea.disabled = status;
        submitButton.showSpinner = status;
    };

    const submitCb = async () => {
        if (options.submitCb) {
            options.submitCb(disableInteractivity, inputArea);
        }
    };

    const authJsx: () => VNode[] = () => {
        return [
            <div class="title">Authentication</div>,
            <kup-text-field
                class="password"
                label="Password"
                icon="key-variant"
                helperEnabled={true}
                onKup-textfield-iconclick={options.authCb}
                onKup-textfield-submit={options.authCb}
            ></kup-text-field>,
        ];
    };

    const connectingJsx: () => VNode[] = () => {
        return [
            <div class="spinner">
                <kup-spinner active={true} layout={6} dimensions="7px" />
            </div>,
            <div class="title">Just a moment.</div>,
            <div class="text">
                We're connecting you to your AI assistant...
            </div>,
        ];
    };

    const errorJsx: () => VNode[] = () => {
        return [
            <FImage resource="hotel" sizeX="4em" sizeY="4em"></FImage>,
            <div class="title">Zzz...</div>,
            <div class="text">Your AI assistant is currently offline!</div>,
        ];
    };

    const readyJsx: () => VNode[] = () => {
        const genChat = () => {
            const nodes: VNode[] = [];

            if (options.messages && options.messages.length > 0) {
                options.messages.forEach((m) => {
                    nodes.push(
                        <div class="message-container">
                            <div class={m.type}>{m.text}</div>
                            <FButton
                                icon="content-copy"
                                onClick={() => {
                                    navigator.clipboard.writeText(m.text);
                                }}
                                title="Copy text to clipboard."
                                wrapperClass="copy"
                            ></FButton>
                        </div>
                    );
                });
            } else {
                nodes.push(
                    <div class="empty">Your chat history is empty!</div>
                );
            }

            return nodes;
        };
        return [
            <div class="query-area">
                <kup-text-field
                    label="Ask me something!"
                    textArea={true}
                    ref={(el) => (inputArea = el)}
                ></kup-text-field>
                <div class="buttons">
                    <kup-button
                        icon="clear"
                        label="Clear"
                        onKup-button-click={() => clear()}
                        styling={FButtonStyling.FLAT}
                        ref={(el) => (clearButton = el)}
                    ></kup-button>
                    <kup-button
                        icon="open-ai"
                        label="Submit"
                        onKup-button-click={() => submitCb()}
                        ref={(el) => (submitButton = el)}
                    >
                        <kup-spinner
                            active={true}
                            dimensions="0.6em"
                            slot="spinner"
                        ></kup-spinner>
                    </kup-button>
                </div>
            </div>,
            <div class={`chat-area ${KupCardCSSClasses.AUTOSCROLL}`}>
                {genChat()}
            </div>,
        ];
    };

    if (submitButton) {
        disableInteractivity(false);
    }

    return (
        <div class="wrapper">
            {options.state === 'authentication'
                ? authJsx()
                : options.state === 'ready'
                ? readyJsx()
                : options.state === 'connecting'
                ? connectingJsx()
                : errorJsx()}
        </div>
    );
}
