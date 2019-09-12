# ketch.up
Web components library for Sme.UP
 
Compiler: Stencill.js  

## Conventions

#### 1. Component names
Component names must be prefixed with `kup-`.

#### 2. Custom events

##### Naming
Custom event names must be composed in compliance with the following rules:
1. use camelCase;
2. event name = componentName + EventName;

Where `componentName` has the prefix `kup` converted into `ketchup`.

Example:
```
// Events for the component kup-text-input
// Updated event
ketchupTextInputUpdated
```

##### Event handlers with .bind

As pointed out
[from this question here](https://stackoverflow.com/questions/37450221/binding-and-event-handler-passing-the-event-object),
whenever you use bind to create a new function, and you have to pass both an event and some parameters,
remember that the event will be automatically added in the arguments object, as the last element.

It is also possible to retrieve the event by using an additional parameter.

Example:
```
// On the component renderer inside a loop with radio as object containing the current radio element
<input type="radio" onChange={this.onRadioChanged.bind(this, radio)}/>

// The event handler
onRadioChanged(radio: KetchupRadioElement, event: UIEvent & {target: HTMLInputElement}) {
    // ...code
}
```

##### Payload

When triggering events which must pass a selected item, then the entire item object must be passed inside the
`value` field.

#### 3. CSS variables

Usually there are two variables which can be used for each customizable property on a component:
1. an internal variable, defined on the `:host` element of the component, which is provided with a fallback;
2. an external variable, which is not defined by the component and can be used to create themes.

##### Naming

The names of the variables must be composed like this:
```
--prefix[_internal-component]_component-property
```

Where:
1. `prefix` is either: a 3 letters acronym of the component for internally defined variables, or `kup-` + `component-name`
for external variables.
2. `[_internal-component]` is an optional kebab case prefix used to specify id a property specifically targets an
element which is part of the component.
3.  `component-property` is a mandatory kebab case suffix describing the property the variable will change,
and is referred as a global component change if no `internal-component` has been specified.

##### Usage

For each property, there are two types of CSS variables: a local one and a more global one, prefixed with `--kup`.
In this way it's also possible to define a basic theme.

Always use the global one if possible, while override the local one if a particular instance of a component requires
a peculiar value.

#### 4. Initial value and displayed / value  field

Components which let user choose which field of the given array of objects must be used for display or a a value,
must expose two attributes: displayedField and valueField.

The initial value prop must always be the initially selected object, from which the displayedField and valueField
can be obtained.

#### 5. Component specific interfaces

When a component needs to use multiple TypeScript interfaces for complex data,
those interfaces must be placed in a TS file having the same name as the component file
and the suffix `-declarations` before the file extension.

In this way Stencil compiler is able to fetch type declarations everywhere and these typing can be
imported in any file of the project.


## Instructions

During development, there is an incorporated minimal showcase used for test inside this package.

Running `npm run start` compiles and shows this showcase.

If you want to test the showcase inside a browser which do not fully support web components natively,
you can run `npm run start--es5` to compile components into an ECMAScript 5 compatible version.


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