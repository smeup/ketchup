import { KulShowcaseDynamicExampleType } from './kul-showcase-declarations';

export class DynamicExampleManager {
    #componentsIds: { [index: string]: number } = {};
    styles = {
        custom: [
            '#kul-component { background-color: var(--kul-secondary-color)} ',
            '#kul-component { color: var(--kul-primary-color);} ',
            '#kul-component { border-radius: 8px;} ',
            '#kul-component { box-shadow: 0px 0px 5px var(--kul-shadow-color);} ',
            '#kul-component { transition: all 0.3s ease;} ',
            '#kul-component { opacity: 0.5;} ',
            '#kul-component { text-transform: uppercase;} ',
        ],
        ['state-colors']: [
            '',
            'kul-secondary',
            'kul-info',
            'kul-success',
            'kul-warning',
            'kul-danger',
        ],
        positions: ['', 'kul-top-right', 'kul-bottom-left', 'kul-bottom-right'],
    };

    #getStyle(type: KulShowcaseDynamicExampleType, id: string): string {
        if (this.#componentsIds[id] === undefined) {
            this.#componentsIds[id] = 0;
        }
        if (++this.#componentsIds[id] === this.styles[type].length) {
            this.#componentsIds[id] = 0;
        }
        return this.styles[type][this.#componentsIds[id]];
    }

    custom = {
        get: (id: string) => {
            return this.#getStyle('custom', id);
        },
    };

    position = {
        get: (id: string) => {
            return this.#getStyle('positions', id);
        },
    };

    stateColors = {
        get: (id: string) => {
            return this.#getStyle('state-colors', id);
        },
    };
}

export function random2digitsNumber() {
    return Math.floor(Math.random() * 99) + 1;
}
