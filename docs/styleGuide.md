# Ketch.UP Style Guide

## Naming conventions

#### Component

1. Must be written following the kebab-case style;
1. Must be prefixed with `kup-`.

#### Interfaces and enums

1. Must be written following the PascalCase style and prefixed with `KupComponentname` (i.e.: `KupCardData`).

#### Custom events

1. Must be written following the kebab-case style and prefixed with `kup-componentname` (i.e.: `kup-buttonlist-click`);

## Code structure

When a component needs to use multiple TypeScript interfaces for complex data, those interfaces must be placed in a TS file having the same name as the component file and the suffix `-declarations` before the file extension.  
In order to make components' code more readable and accessible, their structure should be as similar as possible.

Ideally, component classes should be structured like this:

1. `@Element` decorator (named `rootElement`).

```
    /**
     * References the root HTML element of the component (<kup-card>).
     */
    @Element() rootElement: HTMLElement;
```

2. `@State` decorators (sorted alphabetically and with a description which includes the default value).

```
    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */
    @State() value: string = '';
```

3. `@Props` decorators (sorted alphabetically and with a description which includes the default value).

```
    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
```

4. Internal variables.

```
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
```

5. `@Events` decorators (with a description).

```
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the card is clicked.
     */
    @Event({
        eventName: 'kup-card-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupEventPayload>;
```

6. `@Listen` decorators.

```
    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.keyboardNavigation) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleSelection(this.focused);
                    break;
            }
        }
    }
```

7. `@Watch` decorators.

```
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('filter')
    watchFilter() {
        this.filteredItems = [];
        let index = 0;
        this.data.map((item) => {
            this.setUnselected(item, index++);
        });
        this.data = [...this.data];
    }
```

8. `@Method` decorators (should have a description of the method, the arguments and the returns).

```
    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupCardProps, descriptions);
    }
```

9. Private methods.

```
    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Set the events of the component.
     */
    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            // The dialog "X" button.
            const dialogClose: HTMLElement = root.querySelector(
                '#' + KupCardIds.DIALOG_CLOSE
            );
            if (dialogClose) {
                dialogClose.onclick = () => this.rootElement.remove();
            }
            // When an element can be clicked. Ideally anchors/links.
            const links: NodeListOf<HTMLElement> = root.querySelectorAll(
                '.' + KupCardCSSClasses.CLICKABLE_LINK
            );
            for (let index = 0; index < links.length; index++) {
                const link: HTMLElement = links[index];
                link.onclick = (e) => {
                    e.stopPropagation();
                    this.onKupClick(link.id);
                };
            }
        }
    }
```

10. Lifecycle hooks

```
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.registerListeners();
    }
```

### Common features

Almost all Ketch.UP components should include these features:

-   customStyle
-   debugging

The `customStyle` prop allows a custom stylesheet to be defined inside a component. More info [here](https://ketchup.smeup.com/ketchup-showcase/#/customization).

Debugging is useful to understand a component's performances.

Both these features (among many others) reside in an API called `KupManager`, which is a singleton that must be declared inside the internal variables section:

```
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
```

#### customStyle

1. Define the `customStyle` prop:

```
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
```

2. Register the component through the KupTheme API inside the `componentWillLoad` lifecycle hook:

```
    this.kupManager.theme.register(this);
```

3. Define the `customStyle` constant in the `render()` hook, just before returning the JSX of the component:

```
const customStyle: string = this.kupManager.theme.setCustomStyle(this.rootElement as KupComponent);
```

4. Use the `customStyle` constant just below the `<Host>` tag:

```
        return (
            <Host style={style}>
                {customStyle ? <style>{customStyle}</style> : null}
                <div
                    id={componentWrapperId}
                    onClick={() => this.onKupClick(null)}
                >
                    {this.getLayout()}
                </div>
            </Host>
        );
```

5. Unregister the component through the KupTheme API inside the `disconnectedCallback` lifecycle hook:

```
    this.kupManager.theme.unregister(this);
```

### Debugging

1. Call the following methods in the following lifecycle hooks:

```
    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        //..
        //Actual willLoad code (below)
    }

    componentDidLoad() {
        //Actual didLoad code (above)
        //..
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        //..
        //Actual willRender code (below)
    }

    componentDidRender() {
        //Actual didRender code (above)
        //..
        this.kupManager.debug.logRender(this, true);
    }
```

### Rendered markup

The markup returned by the render() method should be like this:

```
<Host>
   {customStyle ? <style>{customStyle}</style> : null}
   <div id={componentWrapperId}>
   ...
   </div>
</Host>
```

The definition of `Host` makes it easy to add styles, classes or events directly on the root element. The `componentWrapperId` wrapper helps specificity when defining styles, for example when 3rd party stylesheets must be overridden or when a customStyle must be applied.

### CSS variables

In order to streamline the look of each component, CSS variables should be declared inside themes and should be used across the library. More info about themes can be found [here](https://ketchup.smeup.com/ketchup-showcase/#/theming).

There are also internal variables but they are mostly used for runtime needs (i.e.. kup-data-table's fixed rows feature uses CSS variables to set the top property of cells)

In relation to themes, it is important to prevent bloating: each new theme-related CSS variable should be added with caution.
