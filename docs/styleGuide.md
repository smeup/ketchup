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

### Code structure

To make components' code more readable and accessible, their structure should be as similar as possible.

Ideally, component classes should be structured like this:

1. `@Element` decorator (named rootElement).
2. `@State` decorators.
3. `@Props` decorators (sorted alphabetically and with a description).
4. Internal variables.

Example:

```
    @Element() rootElement: HTMLElement;

    @State() state1: string = '';

    /**
     * Prop description.
     */
    @Prop() prop1: string = "";


    private variable1: number = 0;
    private variable2: string = "";
```

5. `@Watch` decorators.
6. `@Events` decorators.
7. `@Method` decorators.
8. Event-related methods.
9. Other internal methods.
10. Lifecycle hooks

### Common methods

Almost every Ketch.UP component should include these features:

-   customStyle
-   debugging

The `customStyle` prop allows a custom style sheet to be defined inside a component. More info [here](https://ketchup.smeup.com/ketchup-showcase/#/customization).

Debugging is useful to understand a component's performances.

#### customStyle

1. Import these methods from the `theme manager`:

```
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
```

2. Define the `customStyle` prop:

```
/**
 * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
 */
 @Prop() customStyle: string = "";
```

3. Define the `refreshCustomStyle` method which allows the component to auto-refresh itself once a theme mutation is detected (themes can include customStyle info):

```
@Method()
async refreshCustomStyle(customStyleTheme: string) {
 this.customStyleTheme = customStyleTheme;
}
```

Note - sometimes components' theme information must be dynamic. For example, kup-chart colors are used by a Google API which doesn't support CSS variables. In this particular case, the variables' value must be calculated runtime and then sent to the API. For this reason, the component must refresh itself even when there is no customStyle info inside a theme, in order to properly decode the new variables' value.

```
@Method()
async refreshCustomStyle(customStyleTheme: string) {
 this.customStyleTheme =
 'Needs to be refreshed every time the theme changes because there are dynamic colors.';
 this.customStyleTheme = customStyleTheme;
 this.fetchThemeColors();
}
```

4. Call the `setThemeCustomStyle(this)` inside the `componentWillLoad` lifecycle method to properly initialize a theme-defined customStyle:

```
    componentWillLoad() {
        setThemeCustomStyle(this);
    }
```

5.  Include a `<style>` tag containing the returning value of `setCustomStyle(this)`, which will be a string containing the theme-defined customStyle followed by the component's specific customStyle:

```
<Host>
   <style>{setCustomStyle(this)}</style>
   <div id="kup-component"/>
</Host>
```

### Debugging

1. Import the KupDebug class:

```
import { KupDebug } from '../../utils/kup-debug/kup-debug';
```

2. Define a new internal variable which instances KupDebug:

```
/**
* Instance of the KupDebug class.
*/
private kupDebug: KupDebug = new KupDebug();
```

3. Call the following methods in the following `Stencil's lifecycle hooks`:

```
    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
        //..
        //Actual willLoad code (below)
    }

    componentDidLoad() {
        //Actual didLoad code (above)
        //..
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
        //..
        //Actual willRender code (below)
    }

    componentDidRender() {
        //Actual didRender code (above)
        //..
        this.kupDebug.logRender(this, true);
    }
```

### Rendered markup

The markup returned by the render() method should be like this:

```
<Host>
   <div id="kup-component">
   ...
   </div>
</Host>
```

The definition of `Host` makes it easy to add styles, classes or events directly on the root element. The `#kup-component` wrapper helps specificity when defining styles, for example when 3rd party stylesheets must be overridden.

### CSS variables

In order to streamline the look of each component, CSS variables should be declared inside themes and should be used across the library. More info about themes can be found [here](https://ketchup.smeup.com/ketchup-showcase/#/theming).

There are also internal variables but they are mostly used for runtime needs (i.e.. kup-data-table's fixed rows feature uses CSS variables to set the top property of cells)

In relation to themes, it is important to prevent bloating: each new theme-related CSS variable should be added with caution.
