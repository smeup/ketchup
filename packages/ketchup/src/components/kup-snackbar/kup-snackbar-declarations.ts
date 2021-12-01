/**
 * Props of the kup-snackbar component.
 * Used to export every prop in an object.
 */
export enum KupSnackbarProps {
    visible = 'Defaults at false. Status of the snackbar, ckeck if is currently open.',
    timeout = 'Defaults at 5000. Used to set the timeout in millisecond.',
    text = "Default at ''. Text displayed in the snackbar",
    closeAction = 'Default at false. Used to set the close button',
    actionButton = 'Default at false. If true, enable action button',
    buttonText = 'Default at "Action". Text in the action button',
}
