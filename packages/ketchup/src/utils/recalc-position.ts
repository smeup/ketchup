// Funzione per riposizionare una tendina.
//
// Parametri:
//
// - el       = l'elemento che deve essere riposizionato
// - anchorEl = l'elemento a cui dev'essere agganciato "el" (può essere passato event.target per agganciare al puntatore del mouse)
// - offset   = la dimensione dell'elemento
// - margin   = la distanza tra "el" e "parentEl"
//
export class positionRecalc {
    positionRecalcSetup(el: HTMLElement) {
        el.classList.add('dynamic-position');
    }

    setPosition(el: HTMLElement, anchorEl: HTMLElement, margin: number) {
        let offsetH: number = el.clientHeight;
        let offsetW: number = el.clientWidth;
        const rect = anchorEl.getBoundingClientRect();

        if (window.innerHeight - rect.bottom < offsetH) {
            el.style.bottom = `${window.innerHeight - rect.top + margin}px`;
        } else {
            el.style.top = `${rect.bottom + margin}px`;
        }
        if (window.innerWidth - rect.left < offsetW) {
            // 350 is the min-width of the tooltip
            el.style.right = `${window.innerWidth - rect.right}px`;
        } else {
            el.style.left = `${rect.left}px`;
        }
    }
}
