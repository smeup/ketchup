import { KupDataTableDataset } from '../../components';
import { KupCardFamily } from '../../components/kup-card/kup-card-declarations';
import {
    KupCardBuiltInOpenAIMessages,
    KupCardBuiltInOpenAIOptions,
} from '../../components/kup-card/kup-card-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupOpenAIParameters,
    KupOpenAISessionInfo,
} from './kup-openai-declarations';

const dom: KupDom = document.documentElement as KupDom;

export class KupOpenAI {
    card: HTMLKupCardElement = null;
    container: HTMLElement;
    context = '';
    data: KupDataTableDataset = null;
    dialog: HTMLKupDialogElement = null;
    sessionInfo: KupOpenAISessionInfo = null;
    url: string = null;
    onFunClick?: (fun: string) => void;

    /**
     * Initializes KupOpenAI.
     */
    constructor(url: string) {
        this.container = document.createElement('div');
        this.container.setAttribute('kup-openai', '');
        document.body.appendChild(this.container);

        this.url = url;
    }

    getFunFromText = (text: string): RegExpMatchArray[] => {
        const pattern =
            /#\[(?:F|C|A)\(([^)]*)\)\s*(?:\d\(([^)]*)\)\s*)?(?:INPUT\(([^)]*)\)\s*)?(?:SP\(([^)]*)\)\s*)?(?:P\(([^]*)\)\s*)?(?:CRO\(([^)]*)\)\s*)?(?:SS\(([^)]*)\)\s*)?(?:SERVER\(([^)]*)\)\s*)?(?:SG\(([^)]*)\)\s*)?(?:G\(([^)]*)\)\s*)?(?:NOTIFY\(([^)]*)\)\s*)?]\#/g;
        return [...text.matchAll(pattern)];
    };

    setError(message: string, _this?: KupOpenAI, dontRefreshCard?: boolean) {
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

    #invalidPassword(field: HTMLKupTextFieldElement) {
        field.helper = 'Invalid password.';
        field.classList.add('kup-danger');
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
                sttCb: this.stt,
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
                body: JSON.stringify({
                    context: this.context,
                    data: this.data,
                }),
            });
        } catch (e) {
            this.setError(e.message);
            return;
        }

        if (response) {
            if (response.status != 200) {
                this.setError(await response.text());
                return;
            }
            const responseJson = await response.json();
            this.sessionInfo = {
                context: this.context,
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
                    context: this.sessionInfo.context,
                    fileId: this.sessionInfo.fileId,
                    threadId: this.sessionInfo.threadId,
                }),
            });
        } catch (e) {
            this.setError(e.message, undefined, true);
        }

        this.sessionInfo = null;

        if (response) {
            if (response.status != 200) {
                this.setError(await response.text(), undefined, true);
            }
        }
    }

    async show(parameters: KupOpenAIParameters) {
        this.context = parameters.context;
        this.data = parameters.dataset;
        if (parameters.onFunClick) {
            this.onFunClick = parameters.onFunClick;
        }

        if (this.card) {
            await this.hide();
        }
        this.#create();
    }

    async stt(
        inputArea: HTMLKupTextFieldElement,
        button: HTMLKupButtonElement
    ) {
        const speechConstructor =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!speechConstructor) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }
        const recognition = new speechConstructor();
        recognition.lang = dom.ketchup.language.getBCP47();
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.addEventListener(
            'result',
            (event: SpeechRecognitionEvent) => {
                const transcript = Array.from(event.results)
                    .map((result) => result[0])
                    .map((result) => result.transcript)
                    .join('');
                dom.ketchup.debug.logMessage(
                    'KupOpenAi',
                    'STT response: ' + transcript
                );
                inputArea.setValue(transcript, true);
                const isFinal = event.results[event.results.length - 1].isFinal;
                if (isFinal) {
                    recognition.stop();
                }
            }
        );

        recognition.addEventListener('end', () => {
            recognition.stop();
            button.showSpinner = false;
        });

        recognition.addEventListener('start', () => {
            inputArea.setFocus();
            button.showSpinner = true;
        });

        try {
            recognition.start();
        } catch (err) {
            console.error(err);
        }
    }

    async hide() {
        if (this.card) {
            this.card.remove();
            this.card = null;
            this.dialog.remove();
            this.dialog = null;
            await this.#disconnect();
        }
    }

    async auth(field: HTMLKupTextFieldElement) {
        const openAI = dom.ketchup.openAI;
        if (!openAI.url) {
            return;
        }
        const pwd = await field.getValue();
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
            openAI.setError(e.message, openAI);
            return;
        }

        if (response) {
            if (response.status != 200) {
                openAI.#invalidPassword(field);
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

    async chat(
        disableInteractivity: (status: boolean) => void,
        inputArea: HTMLKupTextFieldElement
    ) {
        const openAI = dom.ketchup.openAI;
        if (!openAI.card) {
            return;
        }

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
                        context: openAI.sessionInfo.context,
                        fileId: openAI.sessionInfo.fileId,
                        threadId: openAI.sessionInfo.threadId,
                        question: question,
                    }),
                });
            } catch (e) {
                openAI.setError(e.message, openAI);
            }

            if (response) {
                if (response.status != 200) {
                    openAI.setError(await response.text(), openAI);
                    return;
                }
                const responseJson = await response.json();
                if (responseJson && responseJson.messages) {
                    for (let i = 0; i < responseJson.messages.length; i++) {
                        const m: KupCardBuiltInOpenAIMessages =
                            responseJson.messages[i];
                        m.funs = openAI.getFunFromText(m.text);
                        responseMessages.push(m);
                    }
                }
            }

            return responseMessages;
        };

        disableInteractivity(true);
        openAI.getCardOptions().messages = await communicate(
            await inputArea.getValue()
        );
        openAI.card.refresh();
        disableInteractivity(false);
    }
}
