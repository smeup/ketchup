export interface QlikServer {    
    host: string,
    port: string,
    prefix: string,
    isSecure: boolean
}

export interface KupQlikGrid {
    rows:[
        {
            columns:[
                {
                    obj: string,
                    colDim: number
                    size: string
                }
            ]
        }
    ]    
}