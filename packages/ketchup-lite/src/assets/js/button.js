// RAISED
const colorButton = document.getElementById('kul-colors');
const disabledButton = document.getElementById('kul-disabled');
const iconButton = document.getElementById('kul-icon');
const labelButton = document.getElementById('kul-label');
const labelIconButton = document.getElementById('kul-label-icon');
const styleButton = document.getElementById('kul-style');
// OUTLINED
const colorButtonO = document.getElementById('kul-colors-o');
const disabledButtonO = document.getElementById('kul-disabled-o');
const iconButtonO = document.getElementById('kul-icon-o');
const labelButtonO = document.getElementById('kul-label-o');
const labelIconButtonO = document.getElementById('kul-label-icon-o');
const styleButtonO = document.getElementById('kul-style-o');
// FLAT
const colorButtonF = document.getElementById('kul-colors-f');
const disabledButtonF = document.getElementById('kul-disabled-f');
const iconButtonF = document.getElementById('kul-icon-f');
const labelButtonF = document.getElementById('kul-label-f');
const labelIconButtonF = document.getElementById('kul-label-icon-f');
const styleButtonF = document.getElementById('kul-style-f');

let index;

setInterval(() => {
    // RAISED
    index = parseInt(colorButton.dataset.index);
    colorButton.className = 'hydrated ' + statesColorManager().getStyle(index);
    ++index;
    colorButton.dataset.index =
        index > statesColorManager().getLength() ? '0' : index.toString();
    colorButton.kulLabel = 'States colors';
    /**/
    disabledButton.kulDisabled = true;
    disabledButton.kulLabel = 'Disabled';
    /**/
    iconButton.kulIcon = 'bug';
    /**/
    labelIconButton.kulIcon = 'bug';
    labelIconButton.kulLabel = 'With label and icon';
    labelButton.kulLabel = 'With label';
    /**/
    styleButton.kulStyle = styleRandomizer();
    styleButton.kulLabel = 'With custom style';

    // OUTLINED
    index = parseInt(colorButton.dataset.index);
    colorButtonO.className = 'hydrated ' + statesColorManager().getStyle(index);
    ++index;
    colorButton.dataset.index =
        index > statesColorManager().getLength() ? '0' : index.toString();
    colorButtonO.kulLabel = 'States colors';
    /**/
    disabledButtonO.kulDisabled = true;
    disabledButtonO.kulLabel = 'Disabled';
    /**/
    iconButtonO.kulIcon = 'bug';
    /**/
    labelIconButtonO.kulIcon = 'bug';
    labelIconButtonO.kulLabel = 'With label and icon';
    labelButtonO.kulLabel = 'With label';
    /**/
    styleButtonO.kulStyle = styleRandomizer();
    styleButtonO.kulLabel = 'With custom style';
    // FLAT
    index = parseInt(colorButton.dataset.index);
    colorButtonF.className = 'hydrated ' + statesColorManager().getStyle(index);
    ++index;
    colorButton.dataset.index =
        index > statesColorManager().getLength() ? '0' : index.toString();
    colorButtonF.kulLabel = 'States colors';
    disabledButtonF.kulDisabled = true;
    disabledButtonF.kulLabel = 'Disabled';
    iconButtonF.kulIcon = 'bug';
    labelIconButtonF.kulIcon = 'bug';
    labelIconButtonF.kulLabel = 'With label and icon';
    labelButtonF.kulLabel = 'With label';
    styleButtonF.kulStyle = styleRandomizer();
    styleButtonF.kulLabel = 'With custom style';
}, 500);
