console.log('Creating spinner...');

let statesColorsIndex = 0;
let cornerPositionIndex = 0;

if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    document.documentElement['ketchupLiteInit'] = {
        theme: { name: 'dark' },
    };
}
document.addEventListener('kul-manager-ready', (e) => {
    const removeSpinner = () => {
        setTimeout(() => {
            const landingModal = document.querySelector(
                '#landing-spinner-modal'
            );
            const landingLabel = document.querySelector(
                '#landing-spinner-label'
            );
            landingLabel.innerHTML = 'Ready!';
            landingModal.style.opacity = '0';
            setTimeout(() => landingModal.remove(), 300);
        }, 575);
    };
    console.log('KupManager ready!', e);
    kulManager = document.documentElement.ketchupLite;
    removeSpinner();
});

function statesColorsRandomizer() {
    const styles = [
        '',
        'kul-secondary-color',
        'kul-info',
        'kul-success',
        'kul-warning',
        'kul-danger',
    ];

    return function () {
        if (statesColorsIndex === styles.length) {
            statesColorsIndex = 0;
        }
        const style = styles[statesColorsIndex++];
        return style;
    };
}

function cornerPositionsRandomizer() {
    const styles = ['', 'kul-top-right', 'kul-bottom-left', 'kul-bottom-right'];

    return function () {
        if (cornerPositionIndex === styles.length) {
            cornerPositionIndex = 0;
        }
        const style = styles[cornerPositionIndex++];
        return style;
    };
}

function styleRandomizer() {
    const styles = {
        1: '#kul-component { background-color: var(--kul-secondary-color)} ',
        2: '#kul-component { color: var(--kul-primary-color);} ',
        3: '#kul-component { border-radius: 8px;} ',
        4: '#kul-component { font-size: 16px;} ',
        5: '#kul-component { padding: 10px;} ',
        6: '#kul-component { margin: 5px;} ',
        7: '#kul-component { box-shadow: 0px 0px 5px var(--kul-shadow-color);} ',
        8: '#kul-component { transition: all 0.3s ease;} ',
        9: '#kul-component { opacity: 0.9;} ',
        10: '#kul-component { text-transform: uppercase;} ',
    };

    const selectedStylesKeys = Object.keys(styles)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
    return selectedStylesKeys.map((key) => styles[key]).join(' ');
}
