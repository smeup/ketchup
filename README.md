# Ketch.UP

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Ketch.UP is a project that provides components to build web applications. 

Actually all the components are web components, built using [Stencil](https://stenciljs.com/). 

Go to [Ketch.UP Showcase](https://webuptest.smeup.com/ketchup-showcase) to see our components live. 

## Repo architecture
Ketch.UP is a monorepo managed with [Lerna](https://github.com/lerna/lerna).

## Project setup

#### 1. Download the project

Download project from GitHub and open a terminal inside its root.
Note: the terminal must have access to Git commands for it to work correctly.

#### 2. npm 6
First thing to do is to be sure to have installed npm 6 or higher, since it's mandatory to develop with Stencil.

Follow the [installation guide](https://www.npmjs.com/get-npm) and run:
```
npm -v
``` 
To verify the installation.

#### 3. Lerna

Install Lerna. From project's root run:
```
npm install
```
In this way Lerna will be installed as a dependency inside the project,
and it's not necessary to install it globally.

To use Lerna locally, it has been added to the scripts section of the project.
The syntax is slightly different than having it installed globally, since it is used inside the scripts JSON field.
See [this issue](https://github.com/lerna/lerna/issues/138) for more explanations.

All commands must be composed like this:
```
npm run lerna -- --any --argument 
```
Arguments passed after `--` will be passed to Lerna script.

###### Example
```
npm run lerna -- --help
```

So, to install both projects run:
```
npm run lerna -- bootstrap
```
This command will take some time.
It will install all dependencies in all packages inside the folder 'packages'
and will symlink those packages inside the monorepo which are dependencies of one another.

Cleaning project:

```
npm run lerna -- clean
```

#### 4. Developing

Commands inside the different package.json of the 'packages' folder should be reported inside the main package.json
so that they can be executed also by Lerna. 

To see which command are available, open package.json in the root package and take a look at the scripts object. 
Use 'npm run' to execute them

Other details can be found inside the readme of the packages.

To install additional packages, use the syntax [reported here](https://github.com/lerna/lerna/tree/master/commands/add)
if Lerna has been installed as a global package, or with the `npm run lerna -- add package_name --scope=packages_name`.

To remove a package, there is currently no Lerna shortcut. You have to go tho the terminal inside that package
and remove it with your package manager. Afterwards, run Lerna `bootstrap` again to be sure that all packages are
symlinked correctly.

If errors perstist, then clean all `node_modules` with the `clean` command and `bootstrap` them again. 