const emptyComp = document.getElementById('empty');
const colorComp = document.getElementById('kul-colors');
const iconComp = document.getElementById('kul-icon');
const imageComp = document.getElementById('kul-image');
const labelComp = document.getElementById('kul-label');
const positionComp = document.getElementById('kul-position');
const styleComp = document.getElementById('kul-style');

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    colorComp.className = 'hydrated ' + statesColorsRandomizer()();
    iconComp.kulImageProps = {
        kulValue: 'notifications',
    };
    imageComp.kulImageProps = {
        kulValue: 'https://avatars.githubusercontent.com/u/45429703?v=4',
    };
    labelComp.kulLabel = randomNumber.toString();
    positionComp.className = 'hydrated ' + cornerPositionsRandomizer()();
    styleComp.kulStyle = styleRandomizer();
}, 500);
