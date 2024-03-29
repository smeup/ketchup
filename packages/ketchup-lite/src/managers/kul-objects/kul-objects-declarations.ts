/**
 * Interface of the objects JSON.
 * << To be implemented, still a draft. >>
 */
export interface KulObjectsJSON {
    [index: string]: any;
}
/**
 * The composition of an object consists of: type, parameter, key.
 */
export interface KulObj {
    t: string;
    p: string;
    k: string;
}
