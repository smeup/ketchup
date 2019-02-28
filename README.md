# ketch.up
Web components library for Sme.UP
 
Compiler: Stencill.js  

## Conventions

##### 1. Component names
Component names must be prefixed with `ketchup-`.

##### 2. Custom event names
Custom event names must be composed in compliance with the following rules:
1. use camelCase;
2. event name = componentName + EventName.

Example:
```
// Events for the component ketchup-text-input
// Updated event
ketchupTextInputUpdated
``` 