import { Component, h , Prop} from '@stencil/core';

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

    /**
     * The label to set to browse
     */
    @Prop() fupLabel: string = '';
    /**
     * Ask authorization before upload
     */
    @Prop() fupAuth: boolean = false;
    /**
     * Max size of file (KB)
     */
    @Prop() fupMaxSize: number = 0;
    /**
     * URL of service handling the upload post request made by this component
     */
    @Prop() fupService: string = '';
    
    /*
    fileRejectedHandler(event: CustomEvent) {
        //event.detail.file.name + ' error: ' + event.detail.error;
        console.log('fileRejectedHandler' ,event);
    } 
    */   

    render() {
        const $DynamicComponent = 'vaadin-upload' as any;
        let confObj: { [key: string]: any } = {}; 
        confObj.maxFiles='1';
        confObj.formDataName='WTX_FILE';
        //confObj.uploadError='{(ev) => console.log('upload error', ev) }';
        if (this.fupAuth) {
            confObj.noAuto='true'; //manually confirm upload 
        }
        if (this.fupMaxSize && this.fupMaxSize > 0) {
            confObj.maxFileSize= this.fupMaxSize * 1000; // KB -> Bytes
        }
        if (this.fupService && this.fupService.trim() != '') {
            confObj.target=this.fupService.trim(); 
        }
        if (this.fupLabel && this.fupLabel.trim() != '') {
            //confObj.i18n={"dropFiles":{"one":"Trascina qui","many":"Trascina qui"},"addFiles":{"one":"Sfoglia...","many":"Sfoglia..."},"cancel":"Annulla","error":{"tooManyFiles":"Too Many Files.","fileIsTooBig":"File is Too Big.","incorrectFileType":"Incorrect File Type."},"uploading":{"status":{"connecting":"Connecting...","stalled":"Bloccato.","processing":"Processing File...","held":"In coda"},"remainingTime":{"prefix":"remaining time: ","unknown":"unknown remaining time"},"error":{"serverUnavailable":"Server non raggiungibile","unexpectedServerError":"Errore nel caricamento","forbidden":"Permesso negato"}},"units":{"size":["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}};
            confObj.i18n = {
                dropFiles: {
                    one: 'Drop file here',
                    many: 'Drop files here',
                },
                addFiles: {
                    one: `${this.fupLabel}`,
                    many: `${this.fupLabel}`,
                },
                cancel: 'Cancel',
                error: {
                    tooManyFiles: 'Too Many Files.',
                    fileIsTooBig: 'File is Too Big.',
                    incorrectFileType: 'Incorrect File Type.',
                },
                uploading: {
                    status: {
                        connecting: 'Connecting...',
                        stalled: 'Stalled.',
                        processing: 'Processing File...',
                        held: 'Queued',
                    },
                    remainingTime: {
                        prefix: 'remaining time: ',
                        unknown: 'unknown remaining time',
                    },
                    error: {
                        serverUnavailable: 'Server Unavailable',
                        unexpectedServerError: 'Unexpected Server Error',
                        forbidden: 'Forbidden',
                    },
                },
                units: {
                    size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                }
            };
        }
        //={(ev) => this.onFileRejected(ev) }                
        
        //onFocus={this.onCheckboxFocus.bind(this)}/>
        //file-reject={this.onFileRejected.bind(this)}
        //upload-error
        //onUploadError={this.fileRejectedHandler.bind(this)}
        //upload-error={(ev) => console.log('upload error', ev) }
        /*
*/
        return (
            <$DynamicComponent
            {...confObj}
            />
        );
    }
}