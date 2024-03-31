/**
 * Normalization types.
 */
export enum KulDatesNormalize {
    DATE = 'date',
    TIME = 'time',
    TIMESTAMP = 'timestamp',
}

/**
 * Supported locales.
 */
export enum KulDatesLocales {
    CHINESE = 'cn',
    ENGLISH = 'en',
    FRENCH = 'fr',
    ITALIAN = 'it',
    POLISH = 'pl',
    RUSSIAN = 'ru',
    SPANISH = 'es',
}

/**
 * Format Months
 */
export enum KulDateTimeFormatOptionsMonth {
    NUMERIC = 'numeric',
    DIGIT2 = '2-digit',
    LONG = 'long',
    SHORT = 'short',
    NARROW = 'narrow',
}

/**
 * Common use formats
 */
export enum KulDatesFormats {
    ISO_DATE = 'YYYY-MM-DD',
    ISO_DATE_TIME = 'YYYY-MM-DD HH:mm:ss',
    ISO_TIME = 'HH:mm:ss',
    ISO_TIME_WITHOUT_SECONDS = 'HH:mm',
}
