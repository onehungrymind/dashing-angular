# Angular Dashing

![image](https://cloud.githubusercontent.com/assets/1544557/24111634/5a96dd00-0d54-11e7-8abc-19c9c8d74538.png)

A reactive stock manager app built with [Angular](https://angular.io/) and [@ngrx](https://github.com/ngrx), and styled with [Angular Material](https://material.angular.io/). It showcases the following concepts:
* Component-driven architecture
* Routing
* Elegant state management with [@ngrx/store](https://github.com/ngrx/store)
* Effective handling of side effects via [@ngrx/effects](https://github.com/ngrx/effects)
* In-depth state inspection with [@ngrx/store-devtools](https://github.com/ngrx/store-devtools)
* State selection with reselect
* Strategies for unit testing Angular components and services, as well as @ngrx reducers and effects
 
## Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node.js v6.9+ and NPM v3.x – we recommend using [NVM (Linux/Mac)](https://github.com/creationix/nvm) or [NVM-Windows (Windows)](https://github.com/coreybutler/nvm-windows)

## Getting started
Run the following:
```bash
git clone https://github.com/onehungrymind/dashing-angular.git
cd dashing-angular
npm i
npm start
```
Navigate to [localhost:4200](http://localhost:4200) in your favorite browser.

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.

## Using devtools
The app is already wired to work with the Redux Devtools browser extension (available for Chrome and Firefox). Go [here](http://extension.remotedev.io/#installation) to get the browser extension installed. Once it is installed, navigate to the app in your browser, open up the browser devtools, and there will be a new tab for the Redux Devtools. Click that and you are squared away!

## Running unit tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
