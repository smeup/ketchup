# vuejsf

## Commands

### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```




## Issues

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

#### Transpile dependency option

Webpack can be set to directly [transpile some dependencies](https://cli.vuejs.org/config/#transpiledependencies)
when there are particular use cases which requires it.

However since this is a behavior the consumer of the library has to set into their project to allow a correct transpiling,
this step must be very well documented.

[Webpack externals](https://webpack.js.org/configuration/externals/#externals)
  

## TODO
* Check if by editing the peerDependency it is possible to have a correct development environment.
* Check if it's possible to specify the same package in two different dependencies sections without conflicts.
* Fix the Vue method to bundle the library to be used (it whines currently it has no Vue package since it has been put among `peer`).
