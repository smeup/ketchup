const anchorButton = document.getElementById('anchor');
const anchorButton2 = document.getElementById('anchor2');
const createButton = document.getElementById('create');
const hideButton = document.getElementById('hide');
const showButton = document.getElementById('show');

const anchorTooltip = (e) => {
    kupManager.tooltip.anchorTo(e.detail.comp.rootElement);
};
const createTooltip = () => {
    kupManager.tooltip.create({
        data: {
            text: ['Text 1', 'Text 2', 'Text 4', 'Text 5', 'Text 6', 'Text 7'],
        },
    });
};
const hideTooltip = () => {
    kupManager.tooltip.hide();
};
const showTooltip = () => {
    kupManager.tooltip.show();
};

anchorButton.addEventListener('kup-button-click', anchorTooltip);
anchorButton2.addEventListener('kup-button-click', anchorTooltip);
createButton.addEventListener('kup-button-click', createTooltip);
hideButton.addEventListener('kup-button-click', hideTooltip);
showButton.addEventListener('kup-button-click', showTooltip);
