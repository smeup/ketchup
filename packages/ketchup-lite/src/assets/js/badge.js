const colorBadge = document.getElementById('kul-colors');
const emptyBadge = document.getElementById('empty');
const iconBadge = document.getElementById('kul-icon');
const imageBadge = document.getElementById('kul-image');
const labelBadge = document.getElementById('kul-label');
const positionBadge = document.getElementById('kul-position');
const styleBadge = document.getElementById('kul-style');

let index;
setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    colorBadge.className = 'hydrated ' + statesColorManager().getStyle(index);
    iconBadge.kulImageProps = {
        kulValue: 'notifications',
    };
    imageBadge.kulImageProps = {
        kulValue: 'https://avatars.githubusercontent.com/u/45429703?v=4',
    };
    labelBadge.kulLabel = randomNumber.toString();
    positionBadge.className = 'hydrated ' + cornerPositions();
    styleBadge.kulStyle = styleRandomizer();
}, 500);
