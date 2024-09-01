import { KulChatChoiceMessage } from '../kul-chat-declarations';

export const send = async (
    message: string,
    history: KulChatChoiceMessage[],
    url: string
): Promise<boolean> => {
    if (message) {
        const request = {
            temperature: 0.5,
            max_tokens: 200,
            seed: 0,
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        };

        try {
            const response = await callLLM(request, url);
            const newMessage: KulChatChoiceMessage = {
                role: 'user',
                content: message,
            };
            const llmMessage: KulChatChoiceMessage = {
                role: 'llm',
                content: response,
            };
            history.push(newMessage);
            history.push(llmMessage);
            return true;
        } catch (error) {
            console.error('Error calling LLM:', error);
            return false;
        }
    }
};

const callLLM = async (request: Record<string, unknown>, url: string) => {
    try {
        const response = await fetch(`${url}/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.choices?.[0]?.message?.content || '';
    } catch (error) {
        console.error('Error calling LLM:', error);
        throw error;
    }
};
