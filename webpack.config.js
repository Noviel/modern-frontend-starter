const { base } = require('webpack-features');

module.exports = base({
  /* to enable TypeScript support:
     $ yarn add typescript --dev
     and uncomment following line to enable Typescript */
  // types: 'typescript',
  /* or uncomment following one if you are a flow-guy */
  // types: 'flow',
});
