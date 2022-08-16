const items = document.querySelectorAll('.item');
const wrapper = document.querySelector('#wrapper');

const initialize = () => {
    kupManager.interact.dropzone(
        wrapper,
        null,
        {
            dispatcher: wrapper,
            type: 'text/generic',
        },
        {
            drop: (e) => {
                let delta = null;
                let el = null;
                items.forEach((item) => {
                    const rect = item.getBoundingClientRect();
                    let tempDelta = e.dragEvent.client.y - rect.y;
                    if (tempDelta < 0) {
                        tempDelta = tempDelta * -1;
                    }
                    if (delta === null || tempDelta < delta) {
                        delta = tempDelta;
                        el = item;
                    }
                });
                if (!el || e.relatedTarget === el) {
                    console.log('Not moved.');
                } else {
                    console.log(
                        'Moved to position ' + el.id + '. (delta ' + delta + ')'
                    );
                    e.relatedTarget.remove();
                    wrapper.insertBefore(e.relatedTarget, el);
                }
            },
        }
    );
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const randomColor = kupManager.theme.randomColor(50);
        item.style.backgroundColor = randomColor;
        item.style.color = kupManager.theme.colorContrast(randomColor);
        const handleEl = item.querySelector('.handle');
        kupManager.interact.draggable(
            item,
            {
                allowFrom: handleEl ? handleEl : null,
            },
            null,
            'clone',
            {
                end: () => {
                    kupManager.scrollOnHover.stop(wrapper);
                    kupManager.scrollOnHover.unregister(wrapper);
                },
                start: () => {
                    kupManager.scrollOnHover.register(wrapper, true, {
                        back: 0.3,
                        forward: 0.7,
                    });
                },
            }
        );
    }
};

document.addEventListener('kup-manager-ready', initialize);
