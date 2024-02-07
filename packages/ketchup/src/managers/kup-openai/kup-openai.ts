import {
    KupDataTableDataset,
    KupTextFieldCustomEvent,
    KupTextFieldEventPayload,
} from '../../components';
import { KupCardFamily } from '../../components/kup-card/kup-card-declarations';
import {
    KupCardBuiltInOpenAIMessages,
    KupCardBuiltInOpenAIOptions,
} from '../../components/kup-card/kup-card-declarations';
import { KupTextField } from '../../components/kup-text-field/kup-text-field';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupOpenAISessionInfo } from './kup-openai-declarations';

const dom: KupDom = document.documentElement as KupDom;

export class KupOpenAI {
    card: HTMLKupCardElement = null;
    container: HTMLElement;
    data: KupDataTableDataset = null;
    dialog: HTMLKupDialogElement = null;
    sessionInfo: KupOpenAISessionInfo = null;
    url: string = null;

    /**
     * Initializes KupOpenAI.
     */
    constructor(url: string) {
        this.container = document.createElement('div');
        this.container.setAttribute('kup-openai', '');
        document.body.appendChild(this.container);

        this.url = url;
    }

    #setError(message: string, _this?: KupOpenAI, dontRefreshCard?: boolean) {
        if (!_this) {
            _this = this;
        }
        dom.ketchup.debug.logMessage(_this, message, KupDebugCategory.ERROR);
        if (dontRefreshCard) {
            return;
        }
        _this.getCardOptions().state = 'error';
        _this.card.refresh();
    }

    #invalidPassword(event: KupTextFieldCustomEvent<KupTextFieldEventPayload>) {
        const field = event.detail.comp as KupTextField;
        field.helper = 'Invalid password.';
        field.rootElement.classList.add('kup-danger');
        field.refresh();
    }

    #create() {
        this.card = document.createElement('kup-card');
        this.card.layoutFamily = KupCardFamily.BUILT_IN;
        this.card.layoutNumber = 7;
        this.card.sizeX = '100%';
        this.card.sizeY = '100%';

        this.dialog = document.createElement('kup-dialog');
        this.dialog.header = {
            title: 'Chat with Data',
            icons: { close: true },
        };
        this.dialog.id = 'openai';
        this.dialog.modal = null;
        this.dialog.sizeX = '50vw';
        this.dialog.sizeY = '50vh';
        this.dialog.addEventListener('kup-dialog-close', () => this.hide());
        this.dialog.appendChild(this.card);
        this.container.appendChild(this.dialog);

        if (!this.url) {
            this.getCardOptions().state = 'error';
        } else {
            this.getCardOptions().state = 'authentication';
        }
    }

    getCardOptions(): KupCardBuiltInOpenAIOptions {
        if (!this.card.data) {
            this.card.data = {};
        }
        if (!this.card.data.options) {
            this.card.data.options = {
                submitCb: this.chat,
                authCb: this.auth,
            } as KupCardBuiltInOpenAIOptions;
        }
        return this.card.data.options as KupCardBuiltInOpenAIOptions;
    }

    async #connect() {
        if (!this.url) {
            return;
        }
        let response = null;
        try {
            response = await fetch(this.url + '/api/init', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: this.data }),
            });
        } catch (e) {
            this.#setError(e.message);
            return;
        }

        if (response) {
            if (response.status != 200) {
                this.#setError(await response.text());
                return;
            }
            const responseJson = await response.json();
            this.sessionInfo = {
                fileId: responseJson.fileId,
                threadId: responseJson.threadId,
            };
            this.getCardOptions().state = 'ready';
            this.card.refresh();
            return;
        }
        this.getCardOptions().state = 'error';
        this.card.refresh();
    }

    async #disconnect() {
        if (!this.url) {
            return;
        }
        if (!this.sessionInfo) {
            return;
        }
        let response = null;
        try {
            response = await fetch(this.url + '/api/finalize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fileId: this.sessionInfo.fileId,
                    threadId: this.sessionInfo.threadId,
                }),
            });
        } catch (e) {
            this.#setError(e.message, undefined, true);
        }

        this.sessionInfo = null;

        if (response) {
            if (response.status != 200) {
                this.#setError(await response.text(), undefined, true);
            }
        }
    }

    /**
     * Shows the component
     * @param data
     * @param options
     */
    show(data: KupDataTableDataset) {
        this.data = data;

        if (!this.card) {
            this.#create();
        }
    }

    /**
     * Hides the component.
     */
    hide() {
        if (this.card) {
            this.card.remove();
            this.card = null;
            this.dialog.remove();
            this.dialog = null;
            this.#disconnect();
        }
    }

    async auth(event: KupTextFieldCustomEvent<KupTextFieldEventPayload>) {
        const openAI = dom.ketchup.openAI;
        if (!openAI.url) {
            return;
        }
        const pwd = await event.detail.comp.getValue();
        let response = null;
        try {
            response = await fetch(openAI.url + '/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: pwd }),
            });
        } catch (e) {
            openAI.#setError(e.message, openAI);
            return;
        }

        if (response) {
            if (response.status != 200) {
                openAI.#invalidPassword(event);
                //this.#setError(await response.text());
                return;
            }
            const responseJson = await response.json();
            if (responseJson.status == 'ok') {
                openAI.getCardOptions().state = 'connecting';
                openAI.card.refresh();
                openAI.#connect();
                return;
            }
        }
        openAI.getCardOptions().state = 'error';
        openAI.card.refresh();
    }

    async chat(disableInteractivity, inputArea: HTMLKupTextFieldElement) {
        const communicate = async (
            question: string
        ): Promise<KupCardBuiltInOpenAIMessages[]> => {
            if (!openAI.url) {
                return;
            }
            if (!openAI.sessionInfo) {
                return;
            }

            const responseMessages: KupCardBuiltInOpenAIMessages[] = [];
            let response = null;
            try {
                response = await fetch(openAI.url + '/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fileId: openAI.sessionInfo.fileId,
                        threadId: openAI.sessionInfo.threadId,
                        question: question,
                    }),
                });
            } catch (e) {
                this.#setError(e.message, openAI);
            }

            if (response) {
                if (response.status != 200) {
                    this.#setError(await response.text(), openAI);
                    return;
                }
                const responseJson = await response.json();
                if (responseJson && responseJson.messages) {
                    responseMessages.push(...responseJson.messages);
                }
            }

            return responseMessages;
        };
        const openAI = dom.ketchup.openAI;
        if (!openAI.card) {
            return;
        }
        disableInteractivity(true);
        openAI.getCardOptions().messages = await communicate(
            await inputArea.getValue()
        );
        openAI.card.refresh();
        disableInteractivity(false);
    }
}
