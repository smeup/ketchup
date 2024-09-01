import { KulManager } from '../../../managers/kul-manager/kul-manager';

export const speechToText = (
    kulManager: KulManager,
    textarea: HTMLKulTextfieldElement,
    button: HTMLKulButtonElement
) => {
    const speechConstructor =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!speechConstructor) {
        alert('Speech recognition is not supported in this browser.');
        return;
    }
    const recognition = new speechConstructor();
    recognition.lang = kulManager.language.getBCP47();
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.addEventListener('result', (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join('');
        kulManager.debug.logMessage(
            'KulChat (stt)',
            'STT response: ' + transcript
        );
        textarea.setValue(transcript);
        const isFinal = event.results[event.results.length - 1].isFinal;
        if (isFinal) {
            recognition.stop();
        }
    });

    recognition.addEventListener('end', () => {
        recognition.stop();
        button.kulShowSpinner = false;
    });

    recognition.addEventListener('start', () => {
        textarea.setFocus();
        button.kulShowSpinner = true;
    });

    try {
        recognition.start();
    } catch (err) {
        kulManager.debug.logMessage('KulChat (stt)', 'Error: ' + err, 'error');
    }
};
