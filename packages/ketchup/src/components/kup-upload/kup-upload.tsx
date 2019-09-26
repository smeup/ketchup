import { Component, h } from '@stencil/core';

/**
 * - senza FilePath nel setup 
- con FilePath nel setup N.B.: Filepath nel setup, da variabile di sistema ${*TMP}
- con Ext=FupCho(Sceglimelo!), paramentro che ci consente di personalizzare la scritta che compare sul bottone di upload 
- con Ext=FupAut(true), parametro che setta il fatto che una volta scelto il file da uplodare non chieda la conferma ma lo carica immediatamente 
- con Ext=FupSzl(50), parametro che consente di fissare un massimo di grandezza del file per poter fare l'upload. in questo esempio e fissato a 50K 
- con KeepImgName, parametro che in MOBILE consente di impedire l'aggiunta del timestamp nel nome delle immagine. Di default il timestamp viene aggiunto 
	KeepImgName=Yes : non viene aggiunto il timestamp
	KeepImgName=No : viene aggiunto il timestamp
 */

@Component({
    tag: 'kup-upload',
    styleUrl: 'kup-upload.scss',
    shadow: true,
})
export class KupUpload {
    render() {
        return (
                /* no-auto : manually confirm upload */
                <vaadin-upload no-auto></vaadin-upload>
        );
    }
}
