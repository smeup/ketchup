# Development

This document contains information for developers who want to contribute to the the project.

## Requirements

-   Git
-   NodeJs (11.10.1 suggested)

## Getting started

-   Download project from GitHub

```
git clone https://github.com/smeup/ketchup.git
```

-   Install and bootstrap Lerna

```
npm install
npm run lerna -- bootstrap
```

-   Compile and minifies Ketch.UP library for production

```
npm run k:build
```

-   Startup Ketch.UP showcase (with hot reload). It responds at http://localhost:4000

```
npm run ksc:serve
```

## Other useful commands

-   Clean up the project

```
npm run lerna -- clean
```

-   Start an incorporated minimal showcase inside ketchup package (f you want startup this showcase inside a browser which do not fully support web components nativelyadd add --es5 to compile components into an ECMAScript 5 compatible version)

```
npm run k:start
```

-   Compile Ketch.UP Showcase for production

```
npm run ksc:build
```

About testing commands see [testing](testing.md).

You can find other commands inside the main package.json and inside the different package.json of the 'packages' folder. If you want that these latters can be executed by Lerna they should be reported inside the main package.json. Otherwise you have to go inside packages specific dirs and run inside them.

Sample of the same command:

```
npm run k:build

cd packages/ketchup
npm run build

```

## Visual Studio Code IDE

[Visual Studio Code](https://code.visualstudio.com/) is the IDE we suggest to use.

### Configure

-   Install this extensions:

    -   ESLINT
    -   Prettier
    -   Vetur

-   Add this settings (to auto formatting code when saving):

```

  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "eslint.run": "onSave",

```

## Testing

See [testing](testing.md).

## Style guide

See [style guide](styleGuide.md).
