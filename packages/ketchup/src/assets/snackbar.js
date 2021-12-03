const bottomButton = document.getElementById('bottom');
const topButton = document.getElementById('top');
const snackbar = document.getElementById('snackbar');
const props = {
    text: 'This is a snackbar demo',
    actionButton: { label: 'Action', styling: 'flat' },
    closeButton: true,
    timeout: 2000,
};

bottomButton.addEventListener('kup-button-click', () => {
    showBottomSnackbar(props);
});
topButton.addEventListener('kup-button-click', () => {
    showTopSnackbar(props);
});

function showBottomSnackbar(props) {
    for (const key in props) {
        snackbar[key] = props[key];
    }
    snackbar.classList.remove('kup-top');
    snackbar.show();
}

function showTopSnackbar(props) {
    for (const key in props) {
        snackbar[key] = props[key];
    }
    snackbar.classList.add('kup-top');
    snackbar.show();
}
