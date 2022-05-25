<div id="top"></div>

# Ketchup: super-rich components for web applications

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<div style="margin: 20px 0; width: 100%; display: flex; justify-content: center;">
<img style="display: block; margin: 10px auto;" width="50%" src="https://raw.githubusercontent.com/smeup/ketchup/develop/docs/images/ketchup_logo.svg"></img>
</div>

<details style="margin: 30px 0">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-ketchup">About Ketchup</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#how-the-repo-is-organized">How the repo is organized</a></li>
      </ul>
    </li>
    <li><a href="#showcase">Showcase</a></li>
    <li><a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#how-to-use-ketchup-in-your-project">How to use Ketchup in your project</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#issues">Issues</a></li>
      </ul></li>
    <li><a href="#license">License</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>     
     
      
## About Ketchup

Ketchup is a web components library, built with [Ionic’s Stencil](https://stenciljs.com/), a TypeScript based web component compiler.

`Web Components` is a suite of different technologies allowing to create reusable custom elements that you can use in your web apps. For more information visit this link: https://developer.mozilla.org/en-US/docs/Web/Web_Components

The primary focus of Ketchup is to provide a suite of powerful and customizable Web Components, whose main objective is abstracting complex and recurrent programming patterns.

### Built with

-   [Sass](https://sass-lang.com/)
-   [Stencil.js](https://stenciljs.com/)

### How the repo is organized

Ketchup repository is a monorepo multi-package repository managed with [Lerna](https://github.com/lerna/lerna).

-   _packages/ketchup_ contains the Stencil web components library
-   _packages/ketchup_showcase_ contains the code of the components showcase (a [Vue](https://vuejs.org/) application built using Vue CLI)
-   _docs_ contains documentation<p align="right">(<a href="#top">back to top</a>)</p>

## Showcase

Go to [Ketchup Showcase](http://ketchup.smeup.com) to see our components live.<p align="right">(<a href="#top">back to top</a>)</p>

## Getting started

All information for developers is to be found in the [Development guide](docs/development.md).

### How to use Ketchup in your project

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

### Contributing

If you have amazing ideas and you wish to contribute to this project, you're welcome to do so. Check out our [style guide](docs/styleGuide.md) for more details about our coding practices.

### Issues

If you run into an error or an unexpected behavior, or you just want to give us feedback on how to improve, feel free to use the [issues](https://github.com/smeup/ketchup/issues) page.<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the Apache 2.0 License. [Click here for more information](https://github.com/smeup/ketchup/blob/develop/LICENSE).<p align="right">(<a href="#top">back to top</a>)</p>

## Credits

List of open source library/resources we used and which we'd like to thank:

-   [Day.js](https://day.js.org/)
-   [d3-shape](https://www.npmjs.com/package/d3-shape)
-   [ECharts](https://echarts.apache.org/en/index.html)
-   [FullCalendar](https://fullcalendar.io/)
-   [Google Charts](https://developers.google.com/chart)
-   [html2canvas](https://html2canvas.hertzen.com/)
-   [jQuery and jQuery Sparlines](https://omnipotent.net/jquery.sparkline/#s-about)
-   [Interact.js](https://interactjs.io/)
-   [Numeral.js](http://numeraljs.com/)
-   [Material Components Web](https://material-components.github.io/material-components-web-catalog/#/)
-   [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)
-   [MDI Icons](https://materialdesignicons.com/)
-   [Vanilla Picker](https://vanilla-picker.js.org/)<p align="right">(<a href="#top">back to top</a>)</p>
