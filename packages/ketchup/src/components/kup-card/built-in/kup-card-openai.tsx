import { h, VNode } from '@stencil/core';
import {
    KupCardBuiltInOpenAIMessages,
    KupCardBuiltInOpenAIOptions,
    KupCardCSSClasses,
} from '../kup-card-declarations';
import { KupCard } from '../kup-card';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { FImage } from '../../../f-components/f-image/f-image';
import { FButton } from '../../../f-components/f-button/f-button';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

let inputArea: HTMLKupTextFieldElement = null;
let clearButton: HTMLKupButtonElement = null;
let submitButton: HTMLKupButtonElement = null;
let passwordField: HTMLKupTextFieldElement = null;

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

    const eventHandler = () => {
        if (passwordField) {
            options.authCb(passwordField);
        }
    };

    const authJsx: () => VNode[] = () => {
        return [
            <div class="title">Authentication</div>,
            <kup-text-field
                class="password"
                label="Password"
                icon="key-variant"
                inputType="password"
                helperEnabled={true}
                onKup-textfield-iconclick={eventHandler}
                onKup-textfield-submit={eventHandler}
                ref={(el) => (passwordField = el)}
            ></kup-text-field>,
            <kup-button
                class="login-button"
                label="Login"
                onKup-button-click={eventHandler}
            ></kup-button>,
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

    const getTextFormatted = (m: KupCardBuiltInOpenAIMessages): VNode[] => {
        if (m.type == 'request') {
            return [<div class="paragraph">{m.text}</div>];
        }
        let result: VNode[] = [];
        let matches = m.funs;
        let text = m.text;

        let lastIndex = 0;
        for (const match of matches) {
            result.push(
                <div class="paragraph">
                    {text.slice(lastIndex, match.index)}
                </div>
            );
            let fun: string = match[0].trim();
            if (fun.startsWith('#[')) {
                fun = fun.replace('#[', '');
            }
            if (fun.endsWith(']#')) {
                fun = fun.replace(']#', '');
            }
            result.push(
                <div
                    class="fun"
                    title="Execute FUN."
                    onClick={() => {
                        if (dom.ketchup.openAI.onFunClick) {
                            dom.ketchup.openAI.onFunClick(fun);
                        }
                    }}
                >
                    {fun}
                </div>
            );
            lastIndex = match.index + match[0].length;
        }
        result.push(<div class="paragraph">{text.slice(lastIndex)}</div>);
        return result;
    };

    const readyJsx: () => VNode[] = () => {
        const genChat = () => {
            const nodes: VNode[] = [];

            if (options.messages && options.messages.length > 0) {
                options.messages.forEach((m) => {
                    nodes.push(
                        <div class="message-container">
                            <div class={m.type}>{getTextFormatted(m)}</div>
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
                        icon="smeup-ai"
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
        <div class={`wrapper ${options.state}`}>
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
