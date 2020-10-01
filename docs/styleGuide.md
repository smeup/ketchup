# Style Guide

## Ketch.UP library

### Component names

Component names must be prefixed with `kup-`.

### Component specific interfaces

When a component needs to use multiple TypeScript interfaces for complex data, those interfaces must be placed in a TS file having the same name as the component file and the suffix `-declarations` before the file extension.

### Custom events names

Custom event names must be composed in compliance with the following rules:

1. use camelCase;
2. event name = componentName + EventName;

Where `componentName` has the prefix `kup`.

### CSS variables

Usually there are two variables which can be used for each customizable property on a component:

1. an internal variable, defined on the `:host` element of the component, which is provided with a fallback;
2. an external variable, which is not defined by the component and can be used to create themes.

#### Naming

The names of the variables must be composed like this:

```
--prefix[_internal-component]_component-property
```

Where:

1. `prefix` is either: a 3 letters acronym of the component for internally defined variables, or `kup-` + `component-name` for external variables.
2. `[_internal-component]` is an optional kebab case prefix used to specify id a property specifically targets an element which is part of the component.
3. `component-property` is a mandatory kebab case suffix describing the property the variable will change, and is referred as a global component change if no `internal-component` has been specified.

#### Usage

For each property, there are two types of CSS variables: a local one and a more global one, prefixed with `--kup`. In this way it's also possible to define a basic theme.

Always use the global one if possible, while override the local one if a particular instance of a component requires a peculiar value.
