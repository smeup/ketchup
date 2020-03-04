// Defines a class which is a valid parameter for CustomEvent.
// By subclassing this you can define your own custom data class.
export abstract class KupStateModel {
    // We need to satisfy CustomEventInit<T> in order to make this a valid candidate
    // for a CustomEvent
    public detail = this;

    // Utility to debug the content of this model. Must be implemented
    // by concrete classes.
    abstract toDebugString();
}