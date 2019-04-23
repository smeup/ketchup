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
