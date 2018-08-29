# Project folder structure

The project it was created using `create-react-app` (https://github.com/facebook/create-react-app).

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── locales
    │   └── en.json
    │   └── es.json
    ├── modules
        └── home
        │   └── Home.jsx
        │   └── HomeActions.js
        │   └── HomeReducer.js
        │   └── HomeSelectors.js
        └── commons
        │   └── ViewsContainer.js
    ├── store
    │   └── Store.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
```

# Libraries included

## REDUX:

- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

## ROUTER:

- [react-router](https://www.npmjs.com/package/react-router)
- [connected-react-router](https://github.com/supasate/connected-react-router)

## UTILS

- [react-i18next](https://github.com/i18next/react-i18next)
- [recompose](https://github.com/acdlite/recompose)
- [reselect](https://github.com/reduxjs/reselect)

# Redux project conventions

## Reducers

### - Reducers locations

The reducers files should be located inside the `modules/[module_name]/` folders.

### - Reducers names

The file name should be created with `the name of the module (or not)` + `Reducer`.
E.g: `HomeReducer.js` inside `modules/home/HomeReducer.js`

### - Reducers tip 
Always use `combineReducers` to manage little parts of the store (https://redux.js.org/api/combinereducers);

## Actions

### - Actions locations

The reducers files should be located inside the `modules/[module_name]/` folders.

### - Actions names

The file name should be created with `the name of the module (or not)` + `Actions`.
E.g: `HomeActions.js` inside `modules/home/HomeActions.js`

### - Actions tips

Create your actions usin FSA standar : https://github.com/redux-utilities/flux-standard-action
Remember that you're using `redux-thunk` in this projects.

## Selectors

### - Selectors locations

The reducers files should be located inside the `modules/[module_name]/` folders.

### - Selectors names

The file name should be created with `the name of the module (or not)` + `Selectors`.
E.g: `HomeSelectors.js` inside `modules/home/HomeSelectors.js`

### - Selectors tips
Selector concept : https://redux.js.org/introduction/learningresources#selectors
If you can, use `reselect` (already installed in this project).


# Utils

# i18n

Define your texts inside the `locales/[language].js` files.
The library used to manage this is `react-i18next`.

## Use

```
  import { translate } from 'react-i18next';

  ...

  const MyComponent = ({ t }) => <span>{t('home.text')}</span>

  ...

  export default translate()(MyComponent)
```

You can check the complete implementation in `modules/home/Home.jsx`

# Recompose

`recompose` it's already installed in this project. This library has a lot of utils methods to use in your react components. You can see the full documentation in https://github.com/acdlite/recompose.

In `modules/home/Home.jsx` you can see an example of `compose` method to combine two diffents high order components 

```
export default compose(
  translate(),
  connect(...)
)(MyComponent);
```