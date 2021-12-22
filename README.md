# Ketchup: super-rich components for web applications

![Ketchup Logo](https://raw.githubusercontent.com/smeup/ketchup/develop/docs/images/ketchup_logo.svg)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Intro

Ketchup is a web components library, built with [Ionic’s Stencil](https://stenciljs.com/), a TypeScript based web component compiler.

`Web Components` is a suite of different technologies allowing to create reusable custom elements that you can use in your web apps. For more information visit this link: https://developer.mozilla.org/en-US/docs/Web/Web_Components

The primary focus of Ketchup is to provide a suite of powerful and customizable Web Components, whose main objective is abstracting complex and recurrent programming patterns.

## Showcase

Go to [Ketchup Showcase](http://ketchup.smeup.com) to see our components live.

## How the repository is organized

Ketchup repository is a monorepo multi-package repository managed with [Lerna](https://github.com/lerna/lerna).

-   _packages/ketchup_ contains the Stencil web components library
-   _packages/ketchup_showcase_ contains the code of the components showcase (a [Vue](https://vuejs.org/) application built using Vue CLI)
-   _docs_ contains documentation

## Development

All information for developers is to be found in the [Development guide](docs/development.md).

## How to use Ketchup in your project

-   Add the dependency:

```
npm install "@sme.up/ketchup" --save
```

-   Define Ketchup custom elements in your pages:

```
import { defineCustomElements } from '@sme.up/ketchup/dist/loader';
defineCustomElements(window);
```

-   Use Ketchup components in your pages. About components and their props and events see [Ketchup Showcase](https://ketchup.smeup.com/). A simple sample for a Ketchup button can be:

```
<kup-button label="I'm a button" @kup-button-click="myButtonAction" />
```

## Contributing

If you have amazing ideas and you wish to contribute to this project, you're welcome to do so. Check out our [style guide](docs/styleGuide.md) for more details about our coding practices.

## Issues

If you run into an error or an unexpected behavior, or you just want to give us feedback on how to improve, feel free to use the [issues](https://github.com/smeup/ketchup/issues) page.
