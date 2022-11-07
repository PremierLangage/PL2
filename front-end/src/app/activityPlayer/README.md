# Documentation of the Activity Module Component

    - author : Antonin JEAN
    - last edit : 24/10/2022

<hr>

## Description:

The Activity module component is an angular component made to efficiencly display an activity and its exercises. The Data are loaded from HttpsService as JSON and are used to handle / set up the displaying of the fields and components.

The Activity components allows its users to have a variety of possibilities for the displaying, with markdown fields, settings-full fields and angular-component-provider system.

## Models:

All datas are stored as JSON values, the latters's format can be found within the models folders located at :

- [activity/models/](./activity/models/)
- [exercice/models/](./exercice/models/)

The folders contains all the interface needed for the program to work. Each folder contains a providers folder, which includes the interface / const used throughout the projet. By doing so we can factorize the changes if needed.

## Installation:

### Implementation :

To install simply drop the folder into your Angular project and make sure you import the ActivitySharedLayoutModule before starting the usage. You'll simply have to add a

```html
<activity></activity>
```

within your importing component.

### NPM update :

Here is the `package.json` used for the project, make sure your project at least contains the dependencies.

```json
{
  "name": "pl2",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~13.2.0",
    "@angular/cdk": "^13.3.9",
    "@angular/common": "~13.2.0",
    "@angular/compiler": "~13.2.0",
    "@angular/core": "~13.2.0",
    "@angular/forms": "~13.2.0",
    "@angular/material": "^13.3.9",
    "@angular/platform-browser": "~13.2.0",
    "@angular/platform-browser-dynamic": "~13.2.0",
    "@angular/router": "~13.2.0",
    "@ant-design/icons-angular": "^13.1.0",
    "@cisstech/nge": "^13.1.5",
    "ang-jsoneditor": "^1.10.5",
    "animate.css": "^4.1.1",
    "monaco-editor": "^0.30.1",
    "ng-zorro-antd": "^13.3.2",
    "ngx-markdown": "^13.1.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4",
    "@ngx-formly/core": "^6.0.0",
    "@ngx-formly/ng-zorro-antd": "^6.0.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~13.2.0",
    "@angular/cli": "~13.2.0",
    "@angular/compiler-cli": "~13.2.0",
    "@ngx-formly/schematics": "^6.0.0",
    "@types/jasmine": "~3.10.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~4.0.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.1.0",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.5.2"
  }
}
```

<hr>

## Service:

All the Http operations are within the [./activity/activity.service.ts](activity/activity.service.ts)

## Providers:

if you want to add your own implementations for displaying as component you might want to take a look at the provider implementation!!

- First you have to find a folder names `{x}-provider` within the resources folder.

- You'll have to get informed of the code within the `{x}-superclass.ts` as within this file are your inputs and preset functions to be used later on.

- You can then create a components within the `components` folder, your interface **has to extends the superclass**.

- You can then actualize the provider models, located at the root folder `models/provider`, you can add the component within the interface suffixed `TemplateTypes`, and then add the **key** you want used to refers to your component within the interface suffixed `TemplateKeys`.

- All you have to do now is to go back into your components folder, find a component suffixed with `provider` and a **switch-case** bloc that contains your key and implements your components.

Ofc you have to handle the imports yourself.

# WIP
