const normalButton = document.getElementById('normal');
const upperButton = document.getElementById('upper');
const snackbar = document.getElementById('snackbar');
const props = {
    text: 'This is a snackbar demo',
    closeAction: true
};

normalButton.addEventListener('kup-button-click', () => {
    NormalSnackbar(props);
});
upperButton.addEventListener('kup-button-click', () => {
    UpperSnackbar(props);
});

function NormalSnackbar(props) {
    for (const key in props) {
        snackbar[key] = props[key];
    }
    snackbar.classList.remove('kup-top');
    snackbar.show();
}

function UpperSnackbar(props) {
    for (const key in props) {
        snackbar[key] = props[key];
    }
    snackbar.classList.add('kup-top');
    snackbar.show();
}
