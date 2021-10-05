/**
 * Normalization types.
 */
export enum KupDatesNormalize {
    DATE = 'date',
    TIME = 'time',
    TIMESTAMP = 'timestamp',
}
/**
 * Common use formats
 */
export enum KupDatesFormats {
    ISO_DATE = 'YYYY-MM-DD',
    ISO_DATE_TIME = 'YYYY-MM-DD HH:mm:ss',
    ISO_TIME = 'HH:mm:ss',
    ISO_TIME_WITHOUT_SECONDS = 'HH:mm',
}
/**
 * Supported locales.
 */
export enum KupDatesLocales {
    CHINESE = 'cn',
    ENGLISH = 'en',
    FRENCH = 'fr',
    ITALIAN = 'it',
    POLISH = 'pl',
    RUSSIAN = 'ru',
    SPANISH = 'es',
}
