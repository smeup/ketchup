import { KupDataTableDataset } from '../../components';
import { KupCardFamily } from '../../components/kup-card/kup-card-declarations';
import {
    KupCardBuiltInOpenAIMessages,
    KupCardBuiltInOpenAIOptions,
} from '../../components/kup-card/kup-card-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupOpenAISessionInfo } from './kup-openai-declarations';

const dom: KupDom = document.documentElement as KupDom;

export class KupOpenAI {
    data: KupDataTableDataset = null;
    card: HTMLKupCardElement = null;
    dialog: HTMLKupDialogElement = null;
    sessionInfo: KupOpenAISessionInfo = null;
    url: string = null;
    /**
     * Initializes KupOpenAI.
     */
    constructor(url: string) {
        this.url = url;
    }

    #create() {
        this.dialog = document.createElement('kup-dialog');
        this.dialog.header = {
            title: 'Chat with Data',
            icons: { close: true },
        };
        this.dialog.modal = { closeOnBackdropClick: false };
        this.dialog.sizeX = '300px';
        this.dialog.sizeY = '300px';
        this.card = document.createElement('kup-card');
        this.card.id = 'kup-openai';
        this.card.isMenu = true;
        this.card.layoutFamily = KupCardFamily.BUILT_IN;
        this.card.layoutNumber = 7;
        this.card.sizeX = 'auto';
        this.card.sizeY = 'auto';

        if (!this.url) {
            this.getCardOptions().state = 'error';
        } else {
            this.getCardOptions().state = 'ready';
        }
        this.card.addEventListener('kup-card-ready', () => {
            console.log('kup-card-ready');
        });
        this.dialog.addEventListener('kup-dialog-ready', () => {
            console.log('kup-dialog-ready');
            this.dialog.recalcPosition();
        });
        this.dialog.addEventListener('kup-dialog-close', () => this.hide());
        this.dialog.appendChild(this.card);
        document.body.appendChild(this.dialog);
    }

    getCardOptions(): KupCardBuiltInOpenAIOptions {
        if (!this.card.data) {
            this.card.data = {};
        }
        if (!this.card.data.options) {
            this.card.data.options = {
                submitCb: this.chat,
            } as KupCardBuiltInOpenAIOptions;
        }
        return this.card.data.options as KupCardBuiltInOpenAIOptions;
    }

    async #connect() {
        if (!this.url) {
            return;
        }
        this.getCardOptions().state = 'connecting';
        this.card.refresh();
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
            console.log('kup-openai.connect() connect error', e);
        }

        console.log('kup-openai.connect() response', response);
        if (response) {
            if (response.status != 200) {
                dom.ketchup.debug.logMessage(
                    this,
                    await response.text(),
                    KupDebugCategory.ERROR
                );
                this.getCardOptions().state = 'error';
                this.card.refresh();
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
            console.log('kup-openai.disconnect() disconnect error', e);
        }

        this.sessionInfo = null;

        console.log('kup-openai.disconnect() response', response);
        if (response) {
            if (response.status != 200) {
                dom.ketchup.debug.logMessage(
                    this,
                    await response.text(),
                    KupDebugCategory.ERROR
                );
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

        // Creates the card or updates it with new options
        this.#create();
        this.card.menuVisible = true;
        this.#connect();
    }

    /**
     * Hides the component.
     */
    hide() {
        this.card.remove();
        this.card = null;
        this.dialog.remove();
        this.dialog = null;
        this.#disconnect();
    }

    async chat(disableInteractivity, inputArea: HTMLKupTextFieldElement) {
        const convertResponses = (responseArray: string[]) => {
            const data: KupCardBuiltInOpenAIMessages[] = [];
            if (responseArray) {
                for (let i = 0; i < responseArray.length; i++) {
                    const mess = responseArray[i];
                    if (mess) {
                        data.push({ type: 'response', text: mess });
                    }
                }
            }
            return data;
        };

        const communicate = async (question: string) => {
            if (!openAI.url) {
                return;
            }
            if (!openAI.sessionInfo) {
                return;
            }

            const responseArray: string[] = [];
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
                console.log('kup-openai.interact() interact error', e);
            }

            console.log('kup-openai.interact() response', response);
            if (response) {
                if (response.status != 200) {
                    dom.ketchup.debug.logMessage(
                        openAI,
                        await response.text(),
                        KupDebugCategory.ERROR
                    );
                    this.getCardOptions().state = 'error';
                    this.card.refresh();
                    return;
                }
                const responseJson = await response.json();
                if (responseJson && responseJson.messages) {
                    responseArray.push(...responseJson.messages);
                }
            }

            return responseArray;
        };
        const openAI = dom.ketchup.openAI;
        if (!openAI.card) {
            return;
        }
        if (!openAI.card.menuVisible) {
            return;
        }
        disableInteractivity(true);
        const responses: string[] = await communicate(
            await inputArea.getValue()
        );
        openAI.getCardOptions().messages = convertResponses(responses);
        openAI.card.refresh();
        disableInteractivity(false);
    }
}
