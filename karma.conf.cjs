const { karmaConfig } = require('karma-webpack-bundle');
const testRunnerConfig = require('./testRunner.config.cjs');

module.exports = karmaConfig(testRunnerConfig);
