# react-chrome-extension-boilerplate
Chrome Extension Boilerplate for React.js

### Technologies

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Universal-router](https://github.com/kriasoft/universal-router)
- [Jest](https://facebook.github.io/jest/)
- [enzyme](https://github.com/airbnb/enzyme)
- [Webpack](https://webpack.github.io/)
- [Gulp](http://gulpjs.com/)
- [Babel](https://babeljs.io/)
- [Eslint](http://eslint.org/)
- [Flow](https://flow.org/)
- [Less](http://lesscss.org/)


### Project Structure

```
.
├── gulpfile.babel.js              # Build Tasks
├── manifest.json                  # Chrome Extension settings
├── package.json                   # dependencies, npm conf
├── src
│   ├── client.jsx                 # main app
│   ├── images                     # app images, icons
│   ├── index.html                 # main app html
│   ├── pages                      # Application pages
│   ├── routes.jsx                 # routing list
│   ├── store                      # Redux store
│   │   ├── actions                # Events (for example: add task)
│   │   │   └── index.js
│   │   ├── constants              # Event Constants
│   │   │   └── ActionTypes.js
│   │   └── reducers               # manage state changes
│   │       ├── index.js
│   └── styles                     # App style
├── tests                         # unit tests
├── webpack.debug.js              # dev. webpack conf
├── webpack.event.js              # prod webpack conf
└── webpack.popup.js              # prod webpack conf
```


### Quick Start

#### 1. Get the latest version

```shell
$ git clone git@github.com:bahattincinic/react-chrome-extension-boilerplate.git
$ cd react-chrome-extension-boilerplate
```

#### 3. Run `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.


#### 4. To build the project

For Development:

```shell
$ gulp
$ npm run dev-server
```

For Production:

```shell
$ gulp --production
```

And webpack bundle will be created.


#### Watch Changes

When any changes to the source file is made, bundle will be generated.

For Development:

```shell
$ gulp watch
```

For Production:

```shell
$ gulp watch --production
```

#### Lint

Lint your Javascript with EsLint

```shell
$ npm run lint
```

### Flow

install flow

```shell
$ brew install flow
```

To run Flow

```shell
$ npm run flow
```

### Running tests

To run the test suite:

```shell
$ npm run test
```

# Test Coverage

To generate coverage report:

```shell
$ npm run test:coverage
```


### To install the extension

Only Production build can be run in chrome extension.

- Go to  the `chrome://extensions`
- Make sure developer mode is enabled.
- Click on `Load unpacked extension...`
- Select `build` folder.

### What is the difference between development and production build ?
- Development build only works on browser.
- Production build only works on chrome extension.
- `react-chrome-redux` does not work without production build.


### Chrome Extension File Types

- `popup.js:` Page UI
- `event.js` Background Job. It manages Redux states.
- `content.js` Chrome only accept dom manipulation from content.js.
