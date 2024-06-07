const comp = document.getElementById('image');

const props = {
    zoomEnable: true,
};

if (props) {
    for (const key in props) {
        comp[key] = props[key];
    }
}
