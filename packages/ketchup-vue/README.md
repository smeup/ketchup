# vuejsf

## Commands

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Requirements

List of packages the consuming application needs to install:

* sass-loader
* sass
* stylus
* stylus-loader
* css-loader
* style-loader
* typescript
* typescript-loader 

Configure your TypeScript package so that it will also accept `.js` files.

In addition, have a look at the `peerDependencies` list inside `package.json`
files to see which other packages need to be installed in your project.


## Usage

By default, it is highly recommended to install this library in Vue by using the following syntax:
```javascript
import Vue from 'vue';
import KetchupVue from 'ketchup-vue';
Vue.use(KetchupVue);
```

However, if you know what you're doing and are willing to spend time in adjusting your configuration,
all the components installed inside the default exported function are also made available through named exports.

But if you're using named exports, be aware that you have to manually install all the components which requires other components. 

Have a look at the index.js file


## Structure explanation and configuration

#### Vue + TypeScript library

While developing a Vue library in TypeScript, there is currently an unwanted behavior.
Since to correctly export a Vue component in TypeScript, you have to `Vue.extend()` it,
if a library does not use Vue as peerDependency, then there will be two different instances of Vue bundled,
causing a run time error.
See links for more details.

* [Multiple instances](https://github.com/vuetifyjs/vuetify/issues/4068)
* [Multiple instances: suggestions](https://github.com/vuejs/vue/issues/8278)
* [Publishing with TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
* [npm dependencies types](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)
* [About peer dependency](http://codetunnel.com/you-can-finally-npm-link-packages-that-contain-peer-dependencies/)


#### Peer dependency development issue

It seems that, even though the need for a way to locally develop libraries in Node.js, currently the only correct solution
to have the dependency installed while developing and forcing the users to install the peer dependency in their project,
is to place that dependency both in `devDependencies` and `peerDependency`, while keeping versions syncronized.

See [this infinite issue](https://github.com/yarnpkg/yarn/issues/1503) for more details.

npm has opted [not to ship](https://github.com/npm/npm/issues/11213) a better way to handle these use cases to production for the moment.

Anyway, if the development happens in a monorepo project with sym linked packages, this kind of approach is not possible.
This is due to the fact that even though the following dependencies are placed in `devDependencies` they are installed
nonetheless. This mean that when `npm run serve` command is used from the Showcase terminal, webpack will still find
two different instances of Vue, therefore throwing random errors or components not being found.

In regard to monorepos, [this issue](https://github.com/lerna/lerna/issues/1892) may be useful for other projects.

##### Compromise solution

Anyway, a "solution" can be the following one:
1. Place the following dependencies both inside `peerDependencies` and `devDependencies`:
    ```
    // Listed versions here are only an example!
    
    "vue-class-component": "^6.0.0",
    "vue-material-design-icons": "^2.3.0",
    "vue-property-decorator": "^7.0.0"
    ``` 
2. Place `"vue": "^2.5.17",` only in `peerDependencies`.
3. Run `npm run lerna -- clean && npm run lerna -- bootstrap` from project's root.

In this way we __achieve two results__:
1. while developing the package, the IDE's will not complain about missing packages;
2. at deploy time, since there is only one instance of Vue, Node.js and Webpack will do the right thing
and use the same instance of Vue to correctly initialize it.

__Possible disadvantages:__
1. since there is no Vue installed in this package, then we cannot leverage tools such as building a library (throws error);
2. only way to test these components is to directly edit and adding samples to ketchup-showcase package (which in itself is not a bad idea).


#### Bundling

Another option would be to use Vue CLI `build target --lib` as [shown here](https://cli.vuejs.org/guide/build-targets.html#library).

However there are some problems:
1. As shown in the table below, the size of the bundles is too much big. It's so big it is unreasonable.
    Without code splitting of some sort, trying to load these kind of scripts would be unacceptable in mobile devices.

    | File                       | Size        | Gzipped         |
    | -------------------------- | ----------- | --------------- |
    | dist\ketchupvue.umd.min.js | 1274.17 KiB | 298.06 KiB      |
    | dist\ketchupvue.umd.js     | 3003.57 KiB | 521.83 KiB      |
    | dist\ketchupvue.common.js  | 3003.09 KiB | 521.66 KiB      |
    | dist\ketchupvue.css        | 335.60 KiB  | 48.30 KiB       |
    
2. Vuetify is really a complex library. There are some errors of unresolved references at run time,
    making all the code not able to be run.
3. For future development, it could be useful to leverage things such as tree shaking, which won't be possible
    while using bundled code. 

Currently, Vuetify does not offer any other method of being installed other than using a package manager,
so it is not possible to externalize if from the bundle and directly download it from a CDN.


#### Transpile dependency option

Webpack can be set to directly [transpile some dependencies](https://cli.vuejs.org/config/#transpiledependencies)
when there are particular use cases which requires it.

However since this is a behavior the consumer of the library has to set into their project to allow a correct transpiling,
this step must be very well documented.
The consumer application will be the one to transpile this repository source code, ad thus it must be properly configured.
The consumer package must take care of installing Vue, since it is listed in `peerDependencies`.

This is the most correct and complete way to create a library which wraps other libraries and extends them.


[Webpack externals](https://webpack.js.org/configuration/externals/#externals)


#### About Vuetify configuration

See comments and explanation on code inside this package `index.js` file inside the package root.