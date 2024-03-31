console.log('Initializing index page...');
document.querySelectorAll('kul-card').forEach((card) => {
    const cardData = {
        nodes: [
            {
                cells: {
                    1: { value: card.dataset.title },
                    2: { value: '' },
                    3: { value: card.dataset.description },
                    4: {
                        shape: 'image',
                        value: card.dataset.icon,
                    },
                },
            },
        ],
    };
    card.kulData = cardData;
    card.kulSizeX = '300px';
    card.kulSizeY = '300px';
    card.addEventListener('kul-card-event', (e) => {
        console.log('kul-card-event -> ', e);
        if (e.detail.eventType === 'click') {
            window.location.href = card.dataset.href;
        }
    });
});
