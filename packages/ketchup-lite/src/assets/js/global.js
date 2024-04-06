console.log('Creating spinner...');

if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    document.documentElement['ketchupLiteInit'] = {
        theme: { name: 'dark' },
    };
}

function statesColorManager() {
    const styles = [
        '',
        'kul-secondary-color',
        'kul-info',
        'kul-success',
        'kul-warning',
        'kul-danger',
    ];

    return {
        getLength: function () {
            return styles.length;
        },
        getStyle: function (index) {
            return styles[index];
        },
    };
}

function cornerPositions() {
    const styles = ['', 'kul-top-right', 'kul-bottom-left', 'kul-bottom-right'];

    return {
        getLength: function () {
            return styles.length;
        },
        getStyle: function (index) {
            return styles[index];
        },
    };
}

function styleRandomizer() {
    const styles = {
        1: '#kul-component { background-color: var(--kul-secondary-color)} ',
        2: '#kul-component { color: var(--kul-primary-color);} ',
        3: '#kul-component { border-radius: 8px;} ',
        7: '#kul-component { box-shadow: 0px 0px 5px var(--kul-shadow-color);} ',
        8: '#kul-component { transition: all 0.3s ease;} ',
        9: '#kul-component { opacity: 0.5;} ',
        10: '#kul-component { text-transform: uppercase;} ',
    };

    const selectedStylesKeys = Object.keys(styles)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
    return selectedStylesKeys.map((key) => styles[key]).join(' ');
}
