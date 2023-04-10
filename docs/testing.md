# Testing

## Intro

Stencil web components library is tested with unit tests using [Jest](https://jestjs.io).

## Useful commands

To run all unit tests use:

```
npm run k:test:unit
```

You can find a junit like report and an html report inside ./packages/ketchup/target dir

To run with code coverage use:

```
npm run k:test:unitcov
```

You can find a coverage report inside ./packages/ketchup/target

## To run or debug test using VS Code

-   Ensure the test file you want to run is open and in the current active window in VS Code.

-   Go to Run and Debug menu.

-   Select the 'Spec Test Current File' (in Run or Debug mode as you want)

## Test Style Guide

Unit tests are in ./packages/ketchup/tests/unit dir. File names start with src files tested.

Mocked data are in \*.json files in ./packages/ketchup/tests/resources dir.

If you write new tests keep them uniform to kup-data-table-helper-\*spec.ts.

Jest Unit Test Report inside ./packages/ketchup/target dir must be easily understandable.

## TODO

-   Coverage seems not to work correctly (it returns 0%)

-   If you want to run a specific test actually it run all tests. If you run:

```
./node_modules/.bin/stencil test --spec data-table-sort.spec.ts
```

you see in logs that file name is missing:

```
jest args: --spec --max-workers=8
```

To see a project where it works: https://github.com/mandric/testing-web-components
