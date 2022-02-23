# f-components SASS compiler command

This document is meant to provide documentation over the `fcomponentsSassParse.js` Node.js command.

## Configuration

There are three variables stored inside the `fcomponentsSassParse.js` command which make it work. Please take notice of them and update them consequently when and if some of those values changes.

-   _NODE_MODULES_PATH_: should be updated only if the _scripts_ folder location changes.
-   _FCOMPONENTS_FOLDER_PATH_: should be updated only if the folder containing the `f-components` changes.
-   _GLOBAL_STYLE_FOLDER_PATH_: should be updated only if the path to the folder containing `global.scss` file changes.
-   _KUP_THEME_FOLDER_PATH_: should be updated only if the path to the folder `src/managers/kup-theme` changes.
-   _KUP_THEME_FILES_TO_PARSE_: should be updated only if the files contained inside _KUP_THEME_FOLDER_PATH_ which need to be parsed are renamed or a new file is added.
-   _MDC_RIPPLE_ENTRY_FILE_: should be updated only if the MDC library changes how imports are treated.

**Note:** I highly recommend to **not** change the location of the `scripts` folder. It is usually considered a special folder which should not be placed inside the `src` folder, but at root level of the project since it holds commands used to work with said project. This best practice is very common.

Changing the location of the `scripts` folder means that we need to update all the variables described above since all of them contains a relative path.

## Commands

In order to run the parser for the SCSS, for now we must run:

```bash
npm run build:fcomponents-scss
```

## Q & A

### Why adding a script before the actual Stencil.js compilation?

Before deciding to approach the pre-compilation of the SASS files in a single command, I have evaluated other possible strategies:

-   using the dedicated Rollup.js loader;
-   try to look at Stencil.js hooks for custom loaders.

The problem with the first approach is that Stencil.js itself actually does not use it. It means that the process of integrating it with the code base of Rollup could be very long and can possibly break when Stencil.js version is updated. Since this is an unreliable approach I preferred to avoid it. In addition, I would like to state that even if it should be possible to use Rollup SASS loaders, after looking at the current [stencil-sass version](https://github.com/ionic-team/stencil-sass/releases/tag/v1.5.2) I noticed that they do not use any loaders, instead they currently use the APIs which will be deprecated starting from version 2.x of the [sass](https://www.npmjs.com/package/sass) package.\
So I decided to follow that approach too.

The second approach is not really what we need to do.\
Stencil.js [allows the user](https://stenciljs.com/docs/module-bundling) to manually provide plugins into two very distinct moments of the Rollup bundling process. However, these hooks are not what we need since they are intended to alter the normal loading of resources (pre bundling) and alter the output (post bundling), of the main Stencil.js build process.\
They are not structured for pre-compiling some of those assets.

### Why not a TS command?

It's technically possible to install [Node-TS](https://www.npmjs.com/package/ts-node) to write a TS command script and automatically parse and execute it with a simple npm command. Nonetheless, for this first draft I wanted to avoid complexity as much as possible and try to pollute the _devDependencies_ as little as possible, together with using as few time as possible. Thought I highly suggest rewriting it in TypeScript to greatly improve readability and maintainability if the code of this script command will get more complicated over time.

## Command development

### [SASS](https://www.npmjs.com/package/sass)

This is the same package used by Stencil.js and the most used SASS compiler for JavaScript.

Before trying to implement this command, I have taken a look at how Stencil.js currently performs the [parsing of the SASS code](https://github.com/ionic-team/stencil-sass/blob/master/src/util.ts). Here is another [helpful file](https://github.com/ionic-team/stencil-sass/blob/master/src/index.ts).

SASS API used and reference:

-   [SASS APIs](https://sass-lang.com/documentation/js-api/modules#compile);
-   the main feature used is the [loadPaths](https://sass-lang.com/documentation/js-api/interfaces/Options#functions), because it automatically provides paths to the SASS interpreter to where files will be looked up automatically.
-   [SASS compile method](https://sass-lang.com/documentation/js-api/modules#compileString) and its [options](https://sass-lang.com/documentation/js-api/modules#StringOptions);
-   tried to use _[importers](https://sass-lang.com/documentation/js-api/interfaces/StringOptionsWithImporter#importers)_, but it can be quite cumbersome and most use cases can be solved directly by using _loadPaths_;
-   the same can be said about [FileImporters interface](https://sass-lang.com/documentation/js-api/interfaces/FileImporter).

Just to document it, the first approach I tried to use was this one:

```javascript
const parsedStyle = sass.compile(componentScssFilePath, {
    style: 'compressed',
});
```

However, it cannot read global variables since they are declared in the global file but are not imported. Thus, this cannot work for our use case.

I also tried to use a file importer, but without much success and the `loadPaths` approach was much more effective.

```javascript
// This was inserted into a for loop
const parsedStyle = sass.compileString(
    `
    @import 'global.scss';
    @import '${componentName}.scss';
`,
    {
        importers: [
            {
                // https://sass-lang.com/documentation/js-api/interfaces/FileImporter
                findFileUrl(urlToResolve) {
                    if (!urlToResolve.startsWith('@')) {
                        return null;
                    }
                    const oo = new URL(
                        urlToResolve + '.scss',
                        NODE_MODULES_PATH
                    );
                    console.log("ecco l'url", oo);
                    return oo;
                },
            },
        ],
        loadPaths: [globalStyleDirPath, componentFolder],
        style: 'compressed',
    }
);
```

This previous example was taken directly from the SASS documentation and changed a little, but even the SASS documentation was wrong.

### Node.js v14.15.0

API used:

-   [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_existssync_path) for accessing files;
-   checking if [file is a directory](https://melvingeorge.me/blog/check-if-path-is-directory-nodejs).
