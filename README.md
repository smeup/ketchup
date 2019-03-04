# KetchUP Monorepo

Monorepo for KetchUP project.

## Project setup

#### 1. Download the project

Download project from GitHub and open a terminal inside its root.
Note: the terminal must have access to Git commands for it to work correctly.

#### 2. npm 6
First thing to do is to be sure to have installed npm 6 or higher, since it's mandatory to develop with Stancil.

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

Then run:
```
lerna bootstrap
```
This command will take some time.
It will install all dependencies in all packages inside the folder 'packages'
and will symlink those packages inside the monorepo which are dependencies of one another.

#### 4. Developing

Commands inside the different package.json of the 'packages' folder should be reported inside the main package.json
so that they can be executed also by Lerna. 

To see which command are available, open package.json in the root package and take a look at the scripts object. 
Use 'npm run' to execute them

Other details can be found inside the readme of the packages.