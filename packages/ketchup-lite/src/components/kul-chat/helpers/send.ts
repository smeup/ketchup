import {
    KulChatChoiceMessage,
    KulChatSendArguments,
} from '../kul-chat-declarations';

export const send: (args: KulChatSendArguments) => Promise<boolean> = async ({
    history,
    max_tokens,
    seed,
    system,
    temperature,
    url,
}): Promise<boolean> => {
    const request = {
        temperature,
        max_tokens,
        seed,
        messages: history.map((msg) => ({
            role: msg.role,
            content: msg.content,
        })),
    };

    if (system) {
        request.messages.unshift({
            role: 'system',
            content: system,
        });
    }

    try {
        const response = await callLLM(request, url);
        const llmMessage: KulChatChoiceMessage = {
            role: 'llm',
            content: response,
        };
        history.push(llmMessage);
        return true;
    } catch (error) {
        console.error('Error calling LLM:', error);
        return false;
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
