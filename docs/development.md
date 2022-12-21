# Development

This document contains information for developers who want to contribute to the the project.

## Requirements

-   Git
-   NodeJs (16.13.0 suggested)

## Getting started

-   Clone the repository from GitHub:

```
git clone https://github.com/smeup/ketchup.git
```

-   Install the dependencies:

```
// From the root of the repository
npm install
npm run lerna bootstrap
```

-   Compile and minifies Ketchup library for production:

```
npm run k:build
```

-   Startup Ketchup showcase (with hot reload). It responds at http://localhost:4000

```
npm run ksc:serve
```

## Other useful commands

-   Clean up the project's dependencies:

```
npm run lerna -- clean
```

-   Start the development environment:

```
npm run k:start
```

-   Compile Ketchup Showcase for production:

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

-   Add this settings in order to format the code when saving:

```

  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["vue", "html", "javascript", "tipescript"],
  "eslint.run": "onSave",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }

```

## Testing

See [testing](testing.md).

## Style guide

See [style guide](styleGuide.md).
