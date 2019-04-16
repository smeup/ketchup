module.exports = {
    printWidth: 80,
    tabWidth: 4,
    overrides: [
        {
            files: '*.scss',
            options: {
                tabWidth: 2,
            },
        },
    ],
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
};
