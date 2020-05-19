export interface UploadProps {

    /**
     * The label to set to browse
     */
    label: string;
    /**
     * Ask confirmation before upload
     */
    confirm: boolean;
    /**
     * Max size of file (KB)
     */
    maxSize: number;
    /**
     * Allow multiple files upload
     */
    multi: boolean;
    /**
     * Allow dropping files
     */
    drop: boolean;
    /**
     *  Types of files accepted. Comma-separated list of MIME type patterns (wildcards are allowed) or file extensions.
     * (File extensions are only implemented in certain browsers)
     */
    accept: String;

    /**
     * URL of service handling the upload post request made by this component
     */
    service: string;

    /**
     * Specifies the 'name' property at Content-Disposition
     */
    formDataName: string;
    
}