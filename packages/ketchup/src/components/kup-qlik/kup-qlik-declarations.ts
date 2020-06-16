export interface QlikServer {    
    host: string,
    port: string,
    prefix: string,
    isSecure: boolean
}

export interface KupQlikGrid {
    obj: string,
    colDim: number
}