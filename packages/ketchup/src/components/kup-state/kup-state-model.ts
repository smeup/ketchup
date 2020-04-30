// By subclassing this you can define your own custom data class.
export interface KupStateModel {
    // Utility to debug the content of this model. Must be implemented
    // by concrete classes.
    toDebugString();
}
