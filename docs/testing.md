# Testing

## Intro

Stencil web components library is tested with unit and e2e test. For unit is used [Jest](https://jestjs.io). For e2e is used [Stencil e2e Testing](https://stenciljs.com/docs/end-to-end-testing).

Ketchup Showcase is tested with unit and e2e test. For unit is used [Jest](https://jestjs.io). For e2e is used [Cypress](https://www.cypress.io/).

## Useful commands

-   Stencil web components library unit test

```
npm run k:test:unit
```

-   Stencil web components library e2e tests

```
npm run k:test:e2e
```

-   Ketchup Showcase unit test

```
npm run ksc:test:unit
```

-   Ketchup Showcase e2e test with a served app

```
npm run ksc:test:cy:open
```

-   Ketchup Showcase e2e test with a served app headlessly

```
npm run ksc:test:cy:run
```

-   Ketchup Showcase start the server and run your e2e tests

```
npm run ksc:test:e2e:open

```

-   Ketchup Showcase start ther server and run your e2e headlessly

```
npm run ksc:test:e2e:run

```

## Stencil e2e tips and tricks

#### Triggering input, keydown, keyup, keypress events when typing

Puppeteer offers multiple ways to type text into a given `input`, `textarea` or `contenteditable field`.

The main difference between each type of method is which native DOM events they trigger. This is a particularly tricky procedure since by these events it can depend how your component will react.

[Here](https://pptr.dev/#?product=Puppeteer&version=v1.20.0&show=api-keyboardpresskey-options) is a list of possible methods, each one with its own details.

In addition, remember to use the `delay` option to better simulate user behavior and be sure to allow the component the be fast enough to react to changes.

An example of this can be found inside the data-table-filters.e2e.ts test suite.
