import { h } from '../mycomponent.core.js';

function getElementOffset(el, positioning = { isRight: false, isTop: false }, offsetEl = document.documentElement) {
    let ret = {};
    let rect = el.getBoundingClientRect(), scrollLeft = offsetEl.scrollLeft, scrollTop = offsetEl.scrollTop;
    if (!positioning.isRight) {
        ret.left = rect.left + scrollLeft;
    }
    else {
        ret.right = offsetEl.scrollWidth - rect.left - rect.width;
    }
    if (!positioning.isTop) {
        ret.top = scrollTop + rect.top + rect.height;
    }
    else {
        ret.bottom = scrollTop + rect.top;
    }
    return ret;
}
function setElementOffset(el, position) {
    const style = el.style;
    if (position.left) {
        style.left = position.left + 'px';
        style.right = 'initial';
    }
    else if (style.right) {
        style.right = position.right + 'px';
        style.left = 'initial';
    }
    if (position.top) {
        style.top = position.top + 'px';
        style.bottom = 'initial';
        style.transform = '';
    }
    else if (style.bottom) {
        style.top = position.bottom + 'px';
        style.bottom = 'initial';
        style.transform = 'translateY(-100%)';
    }
}

export { getElementOffset as a, setElementOffset as b };
