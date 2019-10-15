import { Component, Event, EventEmitter, h , Prop} from '@stencil/core';
import { UploadProps } from './kup-upload-declarations';

/**
 * For use import in project:
 *      npm import @vaadin/vaadin-upload --save
 * and import in the classes where is used;
 *      import '@vaadin/vaadin-upload';
 */
@Component({
    tag: 'kup-upload',
    styleUrl: 'kup-upload.scss',
    shadow: true,
})
export class KupUpload {

    /**
     */
    @Prop() typeOptions: UploadProps;

    //---- Events ----
    /**
     * Launched when file upload succeed
     */
    @Event({		
        eventName: 'ketchupFileUploaded',		
        composed: true,		
        cancelable: true,		
        bubbles: true,		
    })		
    ketchupFileUploaded: EventEmitter;
    /*
    <{
        message: any;
    }>;	  
    *7
    /**
     * Launched when file upload fail
     */
    @Event({		
        eventName: 'ketchupFileRejected',		
        composed: true,		
        cancelable: true,		
        bubbles: true,		
    })		
    ketchupFileRejected: EventEmitter;	      

    /*
    fileRejectedHandler(event: CustomEvent) {
        //event.detail.file.name + ' error: ' + event.detail.error;
        console.log('fileRejectedHandler' ,event);
    } 
    */   

    render() {
        const $DynamicComponent = 'vaadin-upload' as any;
        let confObj: { [key: string]: any } = {}; 
        if (this.typeOptions.formDataName && this.typeOptions.formDataName.trim() != '') {
            confObj.formDataName=this.typeOptions.formDataName;
        }
        if (this.typeOptions.accept && this.typeOptions.accept.trim() != '') {
            //file extension must start with a dot
            if (this.typeOptions.accept.indexOf('/') < 0 //mime
                && !this.typeOptions.accept.startsWith('.')) {
                confObj.accept= '.' + this.typeOptions.accept.trim(); 
            } else {
                confObj.accept=this.typeOptions.accept.trim(); 
            }
        }
        //const droppable : any = this.typeOptions.drop;
        //if (!droppable || droppable=='false') {
        if (!this.typeOptions.drop) {    
            confObj.nodrop='true';
        }
        //const multiFile : any = this.typeOptions.multi;
        //if (!multiFile || multiFile=='false') {
        if (!this.typeOptions.multi) {    
            confObj.maxFiles='1';
        }
        //const confirmUpl : any = this.typeOptions.confirm;
        //if (confirmUpl || confirmUpl=='true') {
        if (this.typeOptions.confirm) {    
            confObj.noAuto='true'; //manually confirm upload 
        }
        if (this.typeOptions.maxSize && this.typeOptions.maxSize > 0) {
            confObj.maxFileSize= this.typeOptions.maxSize * 1000; // KB -> Bytes
        }
        if (this.typeOptions.service && this.typeOptions.service.trim() != '') {
            confObj.target=this.typeOptions.service.trim(); 
        }
        if (this.typeOptions.label && this.typeOptions.label.trim() != '') {
            //confObj.i18n={"dropFiles":{"one":"Trascina qui","many":"Trascina qui"},"addFiles":{"one":"Sfoglia...","many":"Sfoglia..."},"cancel":"Annulla","error":{"tooManyFiles":"Too Many Files.","fileIsTooBig":"File is Too Big.","incorrectFileType":"Incorrect File Type."},"uploading":{"status":{"connecting":"Connecting...","stalled":"Bloccato.","processing":"Processing File...","held":"In coda"},"remainingTime":{"prefix":"remaining time: ","unknown":"unknown remaining time"},"error":{"serverUnavailable":"Server non raggiungibile","unexpectedServerError":"Errore nel caricamento","forbidden":"Permesso negato"}},"units":{"size":["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}};
            confObj.i18n = {
                dropFiles: {
                    one: 'Drop file here',
                    many: 'Drop files here',
                },
                addFiles: {
                    one: `${this.typeOptions.label}`,
                    many: `${this.typeOptions.label}`,
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
                        forbidden: 'Rejected',
                    },
                },
                units: {
                    size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                }
            };
        }
        /*
        //SUCCESS
            {
            "messages": [
                {
                "gravity": "INFO",
                "text": "File GTWJAR-IOTSPI-MultiDummyConnector-1.1.0-SNAPSHOT-1.6.0-SNAPSHOT.jar is uploaded",
                "fullText": "",
                "level": 50,
                "type": "INFO",
                "mode": "TN"
                }
            ]
            }
         //ERROR   
            {
            "messages": [
                {
                "gravity": "ERROR",
                "text": "ERROR - File already exists",
                "fullText": "",
                "level": 90,
                "type": "INFO",
                "mode": "TN"
                }
            ]
            }        
        */
       /*
       file-reject
                    {
                    message: ev.detail.xhr.response,
                }
       */
        return (
            <$DynamicComponent
            {...confObj}
            onUpload-error={(ev) => {
                //console.log('upload error', ev);
                this.ketchupFileRejected.emit(ev.detail.xhr.response);
                }
            }
            onUpload-success={(ev) => {
                //console.log('upload success', ev);
                this.ketchupFileUploaded.emit(ev.detail.xhr.response);
                }
            }
            />
        );
    }
}