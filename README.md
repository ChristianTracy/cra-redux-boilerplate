![(LITL)](./src/assets/cra-redux-boilerplate-logo.svg)

# Project base

The project was created using [create-react-app](https://github.com/facebook/create-react-app).

# 👋 Getting started

Create an empty folder for you project and move to it

```
  mkdir my-app
  cd my-app
```

Generate your boilerplate

```
  npx degit ChristianTracy/cra-redux-boilerplate
```

🤖 To do this in a SINGLE COMMAND use (just copy and paste into your workspace folder):

```
mkdir my-app && cd my-app && npx degit ChristianTracy/cra-redux-boilerplate
```

## 💻 Start dev server

Don't forget install your dependencies first

```
  npm install
```

```
  npm run start
```

if you need change something see [create-react-app](https://github.com/facebook/create-react-app) docs.

## 🏥 Testing

Create your files to test with `[filename].test.js` inside your modules folders.

The base config for test used by `create-react-app` was removed. This project use `jest` to test files.

```
npm test
```

This command will prompt the test results and the coverage percentage.

## 🌈 ESLint + Prettier

This project contains the basic configuration to use the base airbnb rules. You'll find this inside the `.eslintrc.json` file. Feel free to change to use custom rules.

If you use VSCode, install the `eslint` and `prettier` extensions to format your code on save and get the lint errors inside the editor.

# 🚧 Project folder structure

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

# 📚 Libraries included

## REDUX:

- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

## ROUTER:

- [react-router](https://www.npmjs.com/package/react-router)
- [connected-react-router](https://github.com/supasate/connected-react-router)

## UTILS

- [react-i18next](https://github.com/i18next/react-i18next)
- [reselect](https://github.com/reduxjs/reselect)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Airbnb Rules](https://www.npmjs.com/package/eslint-config-airbnb)

# 👉 Redux project conventions

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

Create your actions using FSA standard : https://github.com/redux-utilities/flux-standard-action
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

# 🔨 Utils

# 🌎 i18n

Define your texts inside the `locales/[language].js` files.
The library used to manage this is `react-i18next`.

## Use

```
  import { useTranslation } from 'react-i18next';

  ...

  const MyComponent = () => {
    const { t, i18n } = useTranslation();
    <span>{t('home.text')}</span>
  }

  ...

```

You can check the complete implementation in `modules/home/Home.jsx`

# 🛣️ Router

See the full documentation of used router in [react-router](https://www.npmjs.com/package/react-router) and [connected-react-router](https://github.com/supasate/connected-react-router).

You've a redirect example in `HomeActions.js` and `Home.jsx` files.

```
export const redirectExample = () => dispatch => {
    dispatch(push('/another'))
}
```

## All your views should be placed in commons/ViewsContainer.jsx file

```
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/another" component={Another} />
    <Route render={() => <div>DEFAULT</div>} />
  </Switch>
```

# ❓ FAQ's

- Where should I put my bussines logic?
  - The selectors are a good place to do that.
- Should I make test for every single reducer an action?
  - The tests are awesome. It's a good practice to test all your reducers and actions to avoid problems :)
- I need to add a new view...
  - In that case create a component inside a new module like `/modules/about/About.jsx`
  - The next step will be add your new view in the `modules/commons/ViewsContaines.jsx`.
