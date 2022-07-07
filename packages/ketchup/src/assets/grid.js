const grid = document.querySelector('kup-grid');

for (let index = 0; index < 48; index++) {
    const image = document.createElement('kup-image');
    image.data = [
        {
            shape: 'bar',
            color: 'var(--kup-primary-color)',
            width: '100%',
            height: '100%',
        },
    ];
    image.sizeX = '48px';
    image.sizeY = '48px';
    image.slot = index;
    grid.appendChild(image);
}
