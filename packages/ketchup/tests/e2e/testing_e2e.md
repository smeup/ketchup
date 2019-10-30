# Ketchup E2ETesting

## Gotchas

### Triggering input, keydown, keyup, keypress events when typing

Puppeteer offers multiple ways to type text into a given `input`, `textarea` or `contenteditable field`.

The main difference between each type of method is which native DOM events they trigger.
This is a particularly tricky procedure since by these events it can depend how your component will react.

[Here](https://pptr.dev/#?product=Puppeteer&version=v1.20.0&show=api-keyboardpresskey-options)
is a list of possible methods, each one with its own details.

In addition, remember to use the `delay` option to better simulate user behavior and be sure to allow the component
the be fast enough to react to changes.

An example of this can be found inside the data-table-filters.e2e.ts test suite.