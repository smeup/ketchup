# ketch.up
Web components library for Sme.UP
 
Compiler: Stencill.js  

## Conventions

#### 1. Component names
Component names must be prefixed with `ketchup-`.

#### 2. Custom event names
Custom event names must be composed in compliance with the following rules:
1. use camelCase;
2. event name = componentName + EventName.

Example:
```
// Events for the component ketchup-text-input
// Updated event
ketchupTextInputUpdated
```

#### 3. CSS variables

Usually there are two variables which can be used for each customizable property on a component:
1. an internal variable, defined on the `:host` element of the component, which is provided with a fallback;
2. an external variable, which is not defined by the component and can be used to create themes.

##### Naming

The names of the variables must be composed like this:
```
--prefix_internal-component_component-property
```

Where:
1. `prefix` is either: a 3 letters acronym of the component for internal defined variables, or `kup-` + `component-name`
for external variables.
2. `internal-component` is an optional kebab case prefix used to specify id a property specifically targets an
element which is part of the component.
3.  `component-property` is a mandatory kebab case suffix describing the property the variable will change,
and is referred as a global component change if no `internal-component` has been specified.


## Issues to check

##### Problem with classes on older browsers

I don't know if there is already an issue for this.
In substance:
1 - Browser do not support ShadowDOM -> Polyfill kicks in.
2 - Css classes gets rewritten adding a custom classes to their declarations.
3 - A dynamically created polyfilled class gets automatically added to the elements which make use of CSS class.
4 - For the first render, everything works like it is expected to do.
5 - After the first render, if you're using dynamic JSX class binding `class={this.class}` the render will force the
exact specified classes, deleting the polyfill added ones.
6 - Style can broke down.

This can be solved by not using dynamic class binding.

An example of this behavior can be found inside the ketchup-combo in Edge16:
after clicking on the menu as it gets activated, the polyfilled class is removed and the svg increases in size.   