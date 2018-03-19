# Modern JavaScript Starter

MJS is a minimalistic modern development environment for JavaScript projects.

- 10/10 developer experience
- Start hacking in a blink of an eye
- Easily extendable
- No tedious tools configuration
- Easily configurable if you want to
- Use SVG, pictures, fonts, whatever you want
- Full-featured React support of course!

## Let me start please

Copy paste these lines into your terminal, ok?
```sh
git clone github.com/Noviel/modern-javascript-starter
cd modern-javascript-starter
git remote rm origin
yarn install
yarn dev
```

### NPM scripts

`yarn dev` - launch hot-reloading webpack-dev-server

`yarn build` - build assets for production

`yarn serve` - serve locally built assets

## Tell me the details

- `eslint` and `prettier` = linting and formatting
- `webpack` and stuff = building, bundling and stuff

Go to `webpack.config.js` in the root directory. You can see that MJS is powered by [webpack-features](github.com/Noviel/webpack-features). So check it out if you wanna some tweaks on webpack's config. You can easily turn on support of React, Flow, TypeScript, Scss, less and other cool stuff.

## I am really wanna React, TypeScript, Scss, less and other cool stuff

Ok, i see you. This project is a boilerplate, not CLI-tool (for now at least), so time to dirty your hands. You need to manually add corresponding option to `webpack.config.js` and sometimes install additional packages.

### React

```sh
yarn add react react-dom
```

webpack.config.js:

```javascript
const { react } = require('webpack-features');

module.exports = react();
```

### CSS Modules

Is enabled by default for `*.modules.{css|scss|less}` files.

### Flow

```sh
yarn add flow-bin --dev
```
webpack.config.js:
```javascript
const { base } = require('webpack-features');

module.exports = base({
  types: 'flow',
});
```

### TypeScript

```sh
yarn add typescript --dev
```
webpack.config.js:
```javascript
const { base } = require('webpack-features');

module.exports = base({
  types: 'typescript',
});
```

### Scss

```sh
yarn add node-sass sass-loader --dev
```
webpack.config.js:
```javascript
const { base } = require('webpack-features');

module.exports = base({
  cssPreprocessors: ['scss'],
});
```

### less

```sh
yarn add less less-loader --dev
```
webpack.config.js:
```javascript
const { base } = require('webpack-features');

module.exports = base({
  cssPreprocessors: ['less'],
});
```

### Other stuff
Checkout [webpack-features](github.com/Noviel/webpack-features) documentation. You can easily extend configuration with whatever you want.
